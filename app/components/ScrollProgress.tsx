"use client";

// Scroll progress bar — fixed at the top of the viewport, shows how far the
// user has scrolled down the page. Slim brand-colored bar with a subtle glow.

import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      if (barRef.current) barRef.current.style.transform = `scaleX(${pct / 100})`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      className="fixed left-0 top-0 z-[200] h-1 w-full bg-transparent"
      aria-hidden
    >
      <div
        ref={barRef}
        className="h-full origin-left bg-gradient-to-r from-brand-500 via-brand-600 to-brand-700 shadow-[0_0_10px_rgba(6,14,40,0.5)]"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}
