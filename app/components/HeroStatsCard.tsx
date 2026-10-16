"use client";

import { useRef, useEffect, useState } from "react";
import { SITE_RATING } from "../site-rating";

// Floating stats card — animated counter + rating, sits at bottom-right of hero on desktop
export default function HeroStatsCard() {
  const spanRef = useRef<HTMLSpanElement | null>(null);
  const [count, setCount] = useState(3200);
  const [rating, setRating] = useState<number>(SITE_RATING.value);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const node = spanRef.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStarted(true);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 },
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let raf: number;
    const startTime = performance.now();
    const duration = 1800;
    const startCount = 2850;
    const targetCount = 3200;
    const startRating = 4.6;
    const targetRating = SITE_RATING.value;

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.round(startCount + eased * (targetCount - startCount)));
      setRating(Math.round((startRating + eased * (targetRating - startRating)) * 10) / 10);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started]);

  const displayCount = (started ? count : 3200).toLocaleString("en-US");
  const displayRating = (started ? rating : SITE_RATING.value).toFixed(1);

  return (
    <div
      className="vr-hero-fade absolute hidden lg:flex lg:top-40 lg:right-10 xl:top-48"
      style={{ animationDelay: "0.5s" }}
    >
      <div className="flex items-center gap-4 rounded-2xl bg-white px-6 py-4 shadow-2xl ring-1 ring-navy-950/5 vr-float">
        <div>
          <div className="font-serif text-3xl font-extrabold text-brand-600">
            <span ref={spanRef}>{displayCount}+</span>
          </div>
          <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-700">
            Completed Projects
          </div>
        </div>
        <div className="h-10 w-px bg-navy-950/10" />
        <div>
          <div className="flex items-center gap-1">
            <svg
              className="h-4 w-4 text-gold-400"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span className="font-serif text-2xl font-extrabold text-navy-950">
              {displayRating}
            </span>
          </div>
          <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-700">
            Client Rating &middot; {SITE_RATING.count} reviews
          </div>
        </div>
      </div>
    </div>
  );
}
