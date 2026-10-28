"use client";

import { useRef, useEffect, useState } from "react";

// Floating stats card — animated project counter, sits at bottom-right of hero on desktop
export default function HeroStatsCard() {
  const spanRef = useRef<HTMLSpanElement | null>(null);
  const [count, setCount] = useState(3200);
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

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.round(startCount + eased * (targetCount - startCount)));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started]);

  const displayCount = (started ? count : 3200).toLocaleString("en-US");

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
        <div className="h-10 w-px bg-navy-950/10" aria-hidden />
        <div>
          <div className="flex items-center gap-1.5">
            {["DST", "PES", "JEF"].map((format) => (
              <span key={format} className="rounded-md bg-brand-50 px-2 py-1 text-xs font-bold tracking-wide text-brand-700">
                {format}
              </span>
            ))}
          </div>
          <div className="mt-1.5 text-[10px] font-semibold uppercase tracking-wider text-slate-700">
            Machine File Formats
          </div>
        </div>
      </div>
    </div>
  );
}
