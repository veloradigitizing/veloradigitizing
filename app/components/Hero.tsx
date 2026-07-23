"use client";
import Icon, { IconName } from "./Icon";
import { Reveal } from "./Reveal";
import { stagger } from "./stagger";
import Link from "next/link";
import Image, { type StaticImageData } from "next/image";
import { useRef, useEffect, useState } from "react";
import heroImage from "../images/veloraHero3.webp";

export function SectionTag({
  eyebrow,
  title,
  subtitle,
  dark = false,
  center = true,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
  center?: boolean;
}) {
  return (
    <div className={center ? "text-center" : ""}>
      <p
        className={`text-xs font-bold uppercase tracking-[0.2em] ${
          dark ? "text-brand-50/70" : "text-brand-600"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 font-serif text-3xl font-bold sm:text-4xl ${
          dark ? "text-white" : "text-navy-950"
        }`}
      >
        {title}
      </h2>
      <div
        className={`mt-4 h-[3px] w-16 rounded-full bg-brand-600 ${
          center ? "mx-auto" : ""
        }`}
      />
      {subtitle && (
        <p
          className={`mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed ${
            dark ? "text-white/60" : "text-navy-950/60"
          } ${center ? "text-center" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

const HERO_FEATURES: { icon: IconName; title: string; sub: string }[] = [
  { icon: "clock", title: "Fast Delivery", sub: "Delivered in 8-24 hours" },
  { icon: "award", title: "High Quality", sub: "Premium stitch quality" },
  { icon: "headset", title: "24/7 Support", sub: "Always here to help you" },
  { icon: "shield", title: "Satisfaction", sub: "Money-back guaranteed" },
];

export function HeroFeatures({
  features = HERO_FEATURES,
}: {
  features?: { icon: IconName; title: string; sub: string }[];
} = {}) {
  return (
    <div className="mt-6 grid max-w-xl grid-cols-2 gap-1.5 sm:grid-cols-4 sm:gap-2">
      {features.map((f) => (
        <div
          key={f.title}
          className="group flex flex-col items-center justify-center p-1.5 text-center transition-all duration-300 hover:scale-105"
        >
          <div className="mb-1 flex h-8 w-8 items-center justify-center bg-transparent text-brand-600 transition-transform duration-300 group-hover:scale-110">
            <Icon name={f.icon} className="h-5 w-5 stroke-[2]" />
          </div>

          <p className="text-xs font-bold text-navy-950 leading-tight min-h-[1rem] flex items-center justify-center">
            {f.title}
          </p>

          <p className="mt-0.5 text-[10px] sm:text-[11px] font-medium text-navy-950/80 leading-tight max-w-full break-words min-h-[2rem] flex items-center justify-center text-center">
            {f.sub}
          </p>
        </div>
      ))}
    </div>
  );
}

export function Breadcrumb({ current }: { current: string }) {
  return (
    <p className="text-sm font-medium text-navy-950/70">
      <span className="text-brand-600">Home</span>
      <span className="mx-2">&rsaquo;</span>
      <span>{current}</span>
    </p>
  );
}

export function StatsBar({
  stats,
}: {
  stats: { icon: IconName; value: string; label: string }[];
}) {
  return (
    <div className="bg-navy-950">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 py-10 sm:grid-cols-4 lg:px-10">
        {stats.map((s, i) => (
          <Reveal
            key={s.label}
            direction="up"
            delay={stagger(i, 100)}
            className="flex items-center justify-center gap-3"
          >
            <Icon name={s.icon} className="h-8 w-8 shrink-0 text-brand-50/80" />
            <div>
              <p className="font-serif text-2xl font-bold text-white">
                {s.value}
              </p>
              <p className="text-xs text-white/50">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export function IconCircle({
  icon,
  size = "md",
  dark = false,
}: {
  icon: IconName;
  size?: "sm" | "md" | "lg";
  dark?: boolean;
}) {
  const dims = { sm: "h-10 w-10", md: "h-14 w-14", lg: "h-16 w-16" }[size];
  const iconDims = { sm: "h-4 w-4", md: "h-6 w-6", lg: "h-7 w-7" }[size];
  return (
    <span
      className={`flex ${dims} shrink-0 items-center justify-center rounded-full transition-transform duration-300 ${
        dark ? "bg-white/10 text-white" : "bg-brand-600 text-white"
      }`}
    >
      <Icon name={icon} className={iconDims} strokeWidth={1.6} />
    </span>
  );
}

export function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5 text-gold-400">
      {Array.from({ length: count }).map((_, i) => (
        <Icon key={i} name="star" className="h-4 w-4" filled />
      ))}
    </div>
  );
}

// Floating stats card — animated counter + rating, sits at bottom-right of hero on desktop
function HeroStatsCard() {
  const spanRef = useRef<HTMLSpanElement | null>(null);
  const countState = useState(0);
  const count = countState[0];
  const setCount = countState[1];
  const startedState = useState(false);
  const started = startedState[0];
  const setStarted = startedState[1];
  const ratingState = useState(0);
  const rating = ratingState[0];
  const setRating = ratingState[1];

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
  }, [setStarted]);

  useEffect(() => {
    if (!started) return;
    let raf: number;
    const startTime = performance.now();
    const duration = 2000;
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.round(eased * 15000));
      setRating(Math.round(eased * 4.9 * 10) / 10);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, setCount, setRating]);

  const formatted = count.toLocaleString("en-US");

  return (
    <div
      className="vr-hero-fade absolute hidden lg:flex lg:top-40 lg:right-10 xl:top-48"
      style={{ animationDelay: "1s" }}
    >
      <div className="flex items-center gap-4 rounded-2xl bg-white px-6 py-4 shadow-2xl ring-1 ring-navy-950/5 vr-float">
        <div>
          <div className="font-serif text-3xl font-extrabold text-brand-600">
            <span ref={spanRef}>{formatted}+</span>
          </div>
          <div className="text-[10px] font-medium uppercase tracking-wider text-navy-950/50">
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
              {rating.toFixed(1)}
            </span>
          </div>
          <div className="text-[10px] font-medium uppercase tracking-wider text-navy-950/50">
            Client Rating
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero({
  eyebrow,
  titleLines,
  description,
  breadcrumbCurrent,
  imageLabel = "Embroidered Cap & Digitizing Software Mockup",
  bgImage,
  features,
}: {
  eyebrow: string;
  titleLines: { text: string; accent?: boolean }[];
  description: string;
  breadcrumbCurrent?: string;
  imageLabel?: string;
  bgImage?: StaticImageData;
  features?: { icon: IconName; title: string; sub: string }[];
}) {
  const bg = bgImage ?? heroImage;
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background Image with MUCH LIGHTER Overlay */}
      <div className="absolute inset-0">
        <Image
          src={bg}
          alt={imageLabel}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Stronger overlay on small/tablet screens for text contrast, soft gradient on laptop/desktop */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/85 to-white/75 lg:from-white/60 lg:via-white/30 lg:to-transparent" />
      </div>

      {/* Decorative gradient blobs */}
      <div className="pointer-events-none absolute -top-24 left-[-10%] z-10 h-72 w-72 rounded-full bg-brand-500/10 blur-3xl vr-float-soft" />

      <div
        className="pointer-events-none absolute bottom-[-10%] right-[-5%] z-10 h-80 w-80 rounded-full bg-navy-700/10 blur-3xl vr-float-soft"
        style={{ animationDelay: "1.5s" }}
      />

      {/* Hero Content */}
      <div className="relative z-20 mx-auto max-w-7xl px-5 pt-28 pb-20 lg:px-10 lg:pt-36 lg:pb-28">
        <div className="max-w-3xl">
          {breadcrumbCurrent && (
            <div
              className="mb-4 vr-hero-down"
              style={{ animationDelay: "0.05s" }}
            >
              <Breadcrumb current={breadcrumbCurrent} />
            </div>
          )}

          <p
            className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600 vr-hero-down"
            style={{ animationDelay: "0.12s" }}
          >
            {eyebrow}
          </p>

          <h1 className="mt-4 font-serif text-4xl font-bold leading-[1.15] text-navy-950 sm:text-5xl lg:text-6xl">
            {titleLines.map((line, i) => (
              <span
                key={i}
                className="block vr-hero-up"
                style={{ animationDelay: `${0.18 + i * 0.12}s` }}
              >
                {line.accent ? (
                  <span className="vr-text-gradient">{line.text}</span>
                ) : (
                  line.text
                )}
              </span>
            ))}
          </h1>

          <p
            className="mt-6 max-w-2xl text-[15px] leading-relaxed text-navy-950/80 vr-hero-up"
            style={{ animationDelay: "0.5s" }}
          >
            {description}
          </p>

          <div
            className="mt-8 flex flex-wrap gap-4 vr-hero-up"
            style={{ animationDelay: "0.62s" }}
          >
            <Link
              href="/contact"
              className="vr-btn vr-btn-primary flex items-center gap-2 rounded-md bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700 shadow-md"
            >
              GET FREE QUOTE
              <span aria-hidden className="vr-arrow">
                &rarr;
              </span>
            </Link>

            <Link
              href="/portfolio"
              className="vr-btn flex items-center gap-2 rounded-md border border-navy-950/15 bg-white px-6 py-3.5 text-sm font-semibold text-navy-950 transition-colors hover:border-brand-600 hover:text-brand-600 shadow-sm"
            >
              VIEW PORTFOLIO
              <span aria-hidden className="vr-arrow">
                &rarr;
              </span>
            </Link>
          </div>

          <div
            className="mt-6 vr-hero-fade"
            style={{ animationDelay: "0.85s" }}
          >
            <HeroFeatures features={features} />
          </div>
        </div>

        <HeroStatsCard />
      </div>
    </section>
  );
}
