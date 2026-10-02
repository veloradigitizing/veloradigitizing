"use client";

import Icon from "./Icon";
import { SectionTag } from "./Section";
import { Reveal } from "./Reveal";
import { stagger } from "./stagger";
import { SITE_RATING } from "../site-rating";

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  location: string;
  service: string;
  rating: number;
  verifiedOrder: string;
  initials: string;
};

export const B2B_TESTIMONIALS: Testimonial[] = [
  {
    name: "Marcus T.",
    role: "Screen Printing & Embroidery Shop",
    location: "Ohio, USA",
    service: "3D Puff Cap Digitizing (DST & PES)",
    rating: 5.0,
    verifiedOrder: "Verified Order #VD-7821",
    quote:
      "Turnaround was under 10 hours. Stitch pathing was optimized with minimal trims. Ran clean on our 6-head Tajima with zero thread breaks.",
    initials: "MT",
  },
  {
    name: "Jason L.",
    role: "Workwear & Uniforms",
    location: "Ontario, Canada",
    service: "Left Chest Corporate Logo",
    rating: 4.9,
    verifiedOrder: "Verified Order #VD-8142",
    quote:
      "Clean pull-compensation on pique cotton polos. Even the 4mm secondary text was sharp and legible across our 150-piece run.",
    initials: "JL",
  },
  {
    name: "Liam W.",
    role: "Merch Designer",
    location: "Manchester, UK",
    service: "Jacket Back Chenille & Vector Redraw",
    rating: 4.7,
    verifiedOrder: "Verified Order #VD-6590",
    quote:
      "Initial test had slightly heavy underlay for thin fleece, but support fixed and resent updated DST in 25 minutes on WhatsApp. Final run was spotless.",
    initials: "LW",
  },
];

function StarRatingRow({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasPartial = rating % 1 !== 0;

  return (
    <div className="flex items-center gap-1">
      <div className="flex gap-0.5 text-gold-400">
        {Array.from({ length: fullStars }).map((_, i) => (
          <Icon key={i} name="star" className="h-4 w-4" filled />
        ))}
        {hasPartial && (
          <Icon name="star" className="h-4 w-4 text-gold-400 fill-current opacity-90" filled />
        )}
      </div>
      <span className="text-xs font-bold text-navy-950/80 ml-1">
        {rating.toFixed(1)}/5.0
      </span>
    </div>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)";
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative flex h-full flex-col justify-between rounded-2xl border border-navy-950/10 bg-white p-6 sm:p-7 shadow-sm transition-all duration-200 ease-out hover:shadow-xl hover:shadow-brand-500/10 hover:border-brand-600/30"
      style={{
        transformStyle: "preserve-3d",
        transition: "transform 0.15s ease-out, box-shadow 0.3s ease, border-color 0.3s ease",
      }}
    >
      <div>
        {/* Top bar: Verified Tag + Rating */}
        <div
          className="flex flex-wrap items-center justify-between gap-2 border-b border-navy-950/5 pb-4"
          style={{ transform: "translateZ(15px)" }}
        >
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 border border-emerald-200/60">
            <svg
              className="h-3 w-3 text-emerald-600 shrink-0"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            {t.verifiedOrder}
          </span>
          <StarRatingRow rating={t.rating} />
        </div>

        {/* Service Tag */}
        <div className="mt-3.5" style={{ transform: "translateZ(10px)" }}>
          <span className="inline-block rounded-md bg-brand-50/80 px-2.5 py-1 text-[11px] font-medium text-brand-700 border border-brand-100">
            Service: {t.service}
          </span>
        </div>

        {/* Review Quote */}
        <p
          className="mt-4 text-sm leading-relaxed text-navy-950/80"
          style={{ transform: "translateZ(12px)" }}
        >
          &ldquo;{t.quote}&rdquo;
        </p>
      </div>

      {/* Author Footer */}
      <div
        className="mt-6 flex items-center gap-3.5 border-t border-navy-950/5 pt-4"
        style={{ transform: "translateZ(18px)" }}
      >
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-brand-800 text-sm font-bold text-white shadow-sm">
          {t.initials}
        </span>
        <div className="min-w-0">
          <p className="text-sm font-bold text-navy-950 transition-colors group-hover:text-brand-600 truncate">
            {t.name}
          </p>
          <p className="text-xs text-navy-950/60 truncate">
            {t.role} &bull; {t.location}
          </p>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-500/5 via-transparent to-brand-600/5" />
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
      <Reveal direction="up">
        <SectionTag
          eyebrow="VERIFIED B2B SOCIAL PROOF"
          title="What Commercial Embroiderers Say"
          subtitle="Real reviews from print shops, workwear manufacturers, and apparel decorators who rely on our stitch files daily."
        />
      </Reveal>

      {/* Star Breakdown Summary Banner */}
      <Reveal direction="up" delay={80}>
        <div className="mt-10 mx-auto max-w-3xl rounded-2xl border border-navy-950/10 bg-gradient-to-r from-navy-950 via-slate-900 to-navy-950 p-6 text-white shadow-lg sm:p-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            {/* Rating Number & Stars */}
            <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
              <div className="flex items-center gap-3">
                <span className="font-serif text-4xl font-extrabold text-white">
                  4.8
                </span>
                <div>
                  <div className="flex gap-1 text-gold-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Icon key={i} name="star" className="h-4 w-4" filled />
                    ))}
                  </div>
                  <p className="text-xs text-white/70 mt-0.5">
                    out of 5.0 rating
                  </p>
                </div>
              </div>
              <p className="mt-3 text-xs font-semibold text-brand-300">
                {SITE_RATING.breakdownText}
              </p>
            </div>

            {/* Breakdown Progress Bars */}
            <div className="w-full sm:w-64 space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-10 text-white/70 font-medium">5 Star</span>
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full bg-gold-400 rounded-full"
                    style={{ width: "86%" }}
                  />
                </div>
                <span className="w-8 text-right font-bold text-white/90">
                  86%
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-10 text-white/70 font-medium">4 Star</span>
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full bg-gold-400 rounded-full"
                    style={{ width: "11%" }}
                  />
                </div>
                <span className="w-8 text-right font-bold text-white/90">
                  11%
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-10 text-white/60 font-medium">3 Star</span>
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full bg-gold-400/80 rounded-full"
                    style={{ width: "3%" }}
                  />
                </div>
                <span className="w-8 text-right text-white/70">3%</span>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Review Cards */}
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {B2B_TESTIMONIALS.map((t, i) => (
          <Reveal
            key={t.name}
            direction="up"
            delay={stagger(i, 110)}
            className="h-full"
          >
            <TestimonialCard t={t} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

