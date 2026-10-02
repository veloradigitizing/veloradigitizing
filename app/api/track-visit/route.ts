import { NextResponse } from "next/server";
import { NTFY_TOPIC } from "@/lib/ntfy";

// In-memory cache for IP + Page visit deduplication: Map<key, timestamp>
const visitCache = new Map<string, number>();
const DEDUPLICATION_WINDOW_MS = 30 * 60 * 1000; // 30 minutes window

// Clean up stale cache entries every 15 minutes
setInterval(() => {
  const now = Date.now();
  for (const [key, time] of visitCache.entries()) {
    if (now - time > DEDUPLICATION_WINDOW_MS) {
      visitCache.delete(key);
    }
  }
}, 15 * 60 * 1000);

function parseUserAgent(ua: string) {
  let browser = "Unknown Browser";
  let os = "Unknown OS";
  let device = "Desktop";

  if (/mobile/i.test(ua)) device = "Mobile";
  if (/ipad|tablet/i.test(ua)) device = "Tablet";

  if (/windows/i.test(ua)) os = "Windows";
  else if (/android/i.test(ua)) os = "Android";
  else if (/iphone|ipad|ipod/i.test(ua)) os = "iOS";
  else if (/macintosh|mac os x/i.test(ua)) os = "macOS";
  else if (/linux/i.test(ua)) os = "Linux";

  if (/edg/i.test(ua)) browser = "Edge";
  else if (/chrome|crios/i.test(ua)) browser = "Chrome";
  else if (/firefox|fxios/i.test(ua)) browser = "Firefox";
  else if (/safari/i.test(ua)) browser = "Safari";
  else if (/opera|opr/i.test(ua)) browser = "Opera";

  const isBot = /bot|spider|crawl|slurp|lighthouse|googlebot|bingbot|yandex/i.test(ua);

  return { browser, os, device, isBot };
}

function getCountryFlag(countryCode?: string): string {
  if (!countryCode || countryCode.length !== 2) return "🌐";
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}

export async function POST(request: Request) {
  try {
    const data = await request.json().catch(() => ({}));
    const headers = request.headers;

    // 1. Extract client IP and host
    const forwarded = headers.get("x-forwarded-for");
    const clientIp = forwarded ? forwarded.split(",")[0].trim() : headers.get("x-real-ip") || "127.0.0.1";
    const host = headers.get("host") || "";

    // Skip localhost and private dev environments
    const isLocalhost =
      process.env.NODE_ENV === "development" ||
      host.includes("localhost") ||
      host.includes("127.0.0.1") ||
      clientIp === "127.0.0.1" ||
      clientIp === "::1" ||
      clientIp === "localhost" ||
      clientIp.startsWith("192.168.") ||
      clientIp.startsWith("10.") ||
      clientIp.startsWith("172.16.");

    if (isLocalhost && !data.force) {
      return NextResponse.json({ skipped: "localhost_dev_filtered" });
    }

    const pagePath = data.path || "/";

    // 2. User Agent & Bot filtering
    const ua = headers.get("user-agent") || data.userAgent || "";
    const { browser, os, device, isBot } = parseUserAgent(ua);

    if (isBot && !data.force) {
      return NextResponse.json({ skipped: "bot_filtered" });
    }

    // 3. Strict Deduplication: Same IP on Same Page within 30 minutes OR same IP overall within 2 minutes
    const now = Date.now();
    const pageKey = `${clientIp}_${pagePath}`;
    const ipRecentKey = `${clientIp}_recent`;

    const lastPageVisit = visitCache.get(pageKey);
    const lastAnyVisit = visitCache.get(ipRecentKey);

    // If reloaded or visited the exact same page within 30 minutes -> SKIP
    if (lastPageVisit && now - lastPageVisit < DEDUPLICATION_WINDOW_MS && !data.force) {
      return NextResponse.json({ skipped: "duplicate_page_reload" });
    }

    // If navigating pages too fast (less than 1 minute between notifications from same user) -> SKIP
    if (lastAnyVisit && now - lastAnyVisit < 60 * 1000 && !data.force) {
      return NextResponse.json({ skipped: "rapid_navigation_debounced" });
    }

    // Update timestamps
    visitCache.set(pageKey, now);
    visitCache.set(ipRecentKey, now);

    // 4. Geolocation details (City, Country)
    let country = headers.get("x-vercel-ip-country") || headers.get("cf-ipcountry") || "";
    let city = headers.get("x-vercel-ip-city") || "";
    let countryCode = country;
    let isp = "";

    if (!country || (clientIp !== "127.0.0.1" && clientIp !== "::1")) {
      try {
        const geoRes = await fetch(`http://ip-api.com/json/${clientIp}?fields=status,country,countryCode,city,isp,org`, {
          signal: AbortSignal.timeout(2000),
        });
        if (geoRes.ok) {
          const geo = await geoRes.json();
          if (geo.status === "success") {
            city = geo.city || city;
            country = geo.country || country;
            countryCode = geo.countryCode || countryCode;
            isp = geo.isp || geo.org || "";
          }
        }
      } catch {
        // geo lookup fallback
      }
    }

    const flag = getCountryFlag(countryCode);
    const locationStr = [city, country].filter(Boolean).join(", ") || "Unknown Location";
    const referrer = data.referrer || headers.get("referer") || "Direct Visit";
    const screenSize = data.screenSize || "Unknown";
    const language = data.language || headers.get("accept-language")?.split(",")[0] || "en";

    // 5. Title & Message Format
    const title = `[Velora Digitizing] ${flag} Visit: ${locationStr}`;
    
    const messageLines = [
      `📍 Location: ${locationStr}`,
      `🌐 IP: ${clientIp}${isp ? ` (${isp})` : ""}`,
      `📄 Page: ${pagePath}`,
      `🔗 Referrer: ${referrer}`,
      `📱 Device: ${device} • ${os} • ${browser}`,
      `🖥️ Screen: ${screenSize} • 🌐 Lang: ${language}`,
      data.utmSource ? `🎯 Campaign: ${data.utmSource} / ${data.utmMedium || ""}` : null,
    ].filter(Boolean);

    const ntfyPayload = {
      topic: NTFY_TOPIC,
      title,
      message: messageLines.join("\n"),
      priority: 3,
      tags: ["eyes", "globe_with_meridians", device === "Mobile" ? "iphone" : "desktop_computer"],
    };

    // 6. Send to Ntfy
    await fetch("https://ntfy.sh", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ntfyPayload),
    });

    return NextResponse.json({ success: true, topic: NTFY_TOPIC });
  } catch (error) {
    console.error("Error in /api/track-visit:", error);
    return NextResponse.json({ success: false, error: "Internal Error" }, { status: 500 });
  }
}