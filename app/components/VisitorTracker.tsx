"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const SESSION_EXPIRY_MS = 30 * 60 * 1000; // 30 minutes session window

export default function VisitorTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const path = pathname || "/";
    const queryString = searchParams?.toString() ? `?${searchParams.toString()}` : "";
    const fullPath = `${path}${queryString}`;

    const now = Date.now();

    // 1. Check Session
    const sessionStartTime = Number(sessionStorage.getItem("velora_session_time") || "0");
    const isNewSession = !sessionStartTime || now - sessionStartTime > SESSION_EXPIRY_MS;

    if (isNewSession) {
      sessionStorage.setItem("velora_session_time", String(now));
      sessionStorage.setItem("velora_visited_pages", JSON.stringify([fullPath]));
    } else {
      // Existing session: Check if this specific page was already tracked in this session
      try {
        const visitedPages: string[] = JSON.parse(sessionStorage.getItem("velora_visited_pages") || "[]");
        if (visitedPages.includes(fullPath)) {
          // Page reload or already visited in this session -> DO NOT SEND NOTIFICATION
          return;
        }
        visitedPages.push(fullPath);
        sessionStorage.setItem("velora_visited_pages", JSON.stringify(visitedPages));
      } catch {
        // fallback
      }
    }

    const url = window.location.href;
    const referrer = document.referrer || "Direct / Bookmark";
    const screenSize = `${window.screen.width}x${window.screen.height}`;
    const language = navigator.language || "en";
    const userAgent = navigator.userAgent;

    const utmSource = searchParams?.get("utm_source") || undefined;
    const utmMedium = searchParams?.get("utm_medium") || undefined;
    const utmCampaign = searchParams?.get("utm_campaign") || undefined;

    const sendTracking = () => {
      fetch("/api/track-visit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          url,
          path: fullPath,
          referrer,
          screenSize,
          language,
          userAgent,
          utmSource,
          utmMedium,
          utmCampaign,
          isNewSession,
        }),
      }).catch(() => {
        // silent fail so browsing is never blocked
      });
    };

    if ("requestIdleCallback" in window) {
      (window as unknown as { requestIdleCallback: (cb: () => void) => void }).requestIdleCallback(sendTracking);
    } else {
      setTimeout(sendTracking, 1500);
    }
  }, [pathname, searchParams]);

  return null;
}
