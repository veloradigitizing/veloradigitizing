"use client";

import { SectionTag } from "./Section";
import { Reveal } from "./Reveal";
import { stagger } from "./stagger";
import Link from "next/link";

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  location: string;
  service: string;
  initials: string;
};

export const B2B_TESTIMONIALS: Testimonial[] = [
  {
    name: "Marcus T.",
    role: "Screen Printing & Embroidery Shop",
    location: "Ohio, USA",
    service: "3D Puff Cap Digitizing (DST & PES)",
    quote:
      "Turnaround was under 10 hours. Stitch pathing was optimized with minimal trims. Ran clean on our 6-head Tajima with zero thread breaks.",
    initials: "MT",
  },
  {
    name: "Jason L.",
    role: "Workwear & Uniforms",
    location: "Ontario, Canada",
    service: "Left Chest Corporate Logo",
    quote:
      "Clean pull-compensation on pique cotton polos. Even the 4mm secondary text was sharp and legible across our 150-piece run.",
    initials: "JL",
  },
  {
    name: "Liam W.",
    role: "Merch Designer",
    location: "Manchester, UK",
    service: "Jacket Back Chenille & Vector Redraw",
    quote:
      "Initial test had slightly heavy underlay for thin fleece, but support fixed and resent updated DST in 25 minutes on WhatsApp. Final run was spotless.",
    initials: "LW",
  },
];

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
          eyebrow="Client Feedback"
          title="What Commercial Embroiderers Say"
          subtitle="Feedback on embroidery digitizing for print shops, workwear and apparel."
        />
      </Reveal>

      <div className="mx-auto mt-10 max-w-4xl rounded-2xl bg-navy-950 p-6 text-white shadow-lg sm:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-300">Your next embroidery project</p>
            <h3 className="mt-2 font-serif text-2xl font-bold">Start with your artwork</h3>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/70">Send your logo, finished size and fabric type. Include the machine format you need so we can review your requirements and confirm a quote.</p>
            <ul className="mt-5 flex flex-wrap gap-2 text-xs font-medium text-white/85" aria-label="Details to include">
              {["Logo artwork", "Finished size", "Fabric & placement"].map((detail) => (
                <li key={detail} className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5">{detail}</li>
              ))}
            </ul>
          </div>
          <Link href="/contact" className="inline-flex shrink-0 items-center justify-center gap-3 rounded-lg bg-brand-600 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-700">
            Get a Free Quote <span aria-hidden>&rarr;</span>
          </Link>
        </div>
      </div>

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

