"use client";

// Announcement bar — slim promotional strip above the header.
// Rotates between messages on a timer, with a manual close button.
// Reappears 24h after the user closes it (localStorage flag).
// Velora brand theme (blue gradient).

import { useEffect, useState } from "react";

type Msg = {
  icon: string;
  text: string;
  cta: string;
  href: string;
};

const MESSAGES: Msg[] = [
  {
    icon: "zap",
    text: "50% OFF on all embroidery font packs — this week only!",
    cta: "Shop Now",
    href: "/store#products",
  },
  {
    icon: "sparkles",
    text: "New: 3D Puff digitizing now available with same-day delivery",
    cta: "Learn More",
    href: "/services",
  },
  {
    icon: "phone",
    text: "Get a free quote in under 5 minutes — 24/7 live support",
    cta: "Get Quote",
    href: "/contact",
  },
];

const DISMISS_KEY = "velora-announcement-dismissed";
const DISMISS_HOURS = 24;

function Icon({ name }: { name: string }) {
  if (name === "zap") {
    return (
      <svg className="h-3.5 w-3.5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M13 2L3 14h7v8l10-12h-7V2z" />
      </svg>
    );
  }
  if (name === "sparkles") {
    return (
      <svg className="h-3.5 w-3.5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 2l1.5 5.5L19 9l-5.5 1.5L12 16l-1.5-5.5L5 9l5.5-1.5L12 2zM19 14l.75 2.75L22.5 17.5l-2.75.75L19 21l-.75-2.75L15.5 17.5l2.75-.75L19 14zM5 14l.75 2.75L8.5 17.5l-2.75.75L5 21l-.75-2.75L1.5 17.5l2.75-.75L5 14z" />
      </svg>
    );
  }
  // phone
  return (
    <svg className="h-3.5 w-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export default function AnnouncementBar() {
  const [idx, setIdx] = useState(0);
  // Lazy initializer: check localStorage SYNCHRONOUSLY on first client render
  // so the bar shows immediately (no flash). On SSR, window is undefined → show.
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return true; // SSR: render the bar
    try {
      const dismissedAt = localStorage.getItem(DISMISS_KEY);
      if (dismissedAt) {
        const hoursSince =
          (Date.now() - parseInt(dismissedAt, 10)) / (1000 * 60 * 60);
        if (hoursSince < DISMISS_HOURS) return false; // still dismissed
      }
    } catch {
      // ignore
    }
    return true;
  });

  // Rotate messages every 5s
  useEffect(() => {
    if (!visible) return;
    const id = window.setInterval(() => {
      setIdx((i) => (i + 1) % MESSAGES.length);
    }, 5000);
    return () => window.clearInterval(id);
  }, [visible]);

  const dismiss = () => {
    setVisible(false);
    try {
      localStorage.setItem(DISMISS_KEY, Date.now().toString());
    } catch {
      // ignore
    }
  };

  if (!visible) return null;

  const msg = MESSAGES[idx];

  return (
    <div className="relative z-[60] overflow-hidden bg-gradient-to-r from-brand-700 via-brand-600 to-brand-700 text-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-4 py-2 sm:px-6 lg:px-8">
        <div
          key={idx}
          className="flex flex-1 items-center justify-center gap-2 text-center text-xs font-medium sm:text-sm"
          style={{ animation: "velora-fade-in 0.4s ease-out" }}
        >
          <Icon name={msg.icon} />
          <span>{msg.text}</span>
          <a
            href={msg.href}
            className="group inline-flex shrink-0 items-center gap-1 rounded-full bg-white/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider transition-colors hover:bg-white/25 sm:text-xs"
          >
            {msg.cta}
            <svg className="h-3 w-3 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Dots */}
        <div className="hidden items-center gap-1 sm:flex">
          {MESSAGES.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show announcement ${i + 1}`}
              onClick={() => setIdx(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === idx ? "w-4 bg-white" : "w-1.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss announcement"
          className="ml-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/15 hover:text-white"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
