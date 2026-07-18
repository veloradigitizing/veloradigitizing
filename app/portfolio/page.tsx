"use client";

import { useState } from "react";
import Link from "next/link";
import Hero from "../components/Hero";
import {
  Breadcrumb,
  SectionTag,
  StarRating,
  StatsBar,
} from "../components/Section";
import Icon from "../components/Icon";
import PortfolioCard, {
  PORTFOLIO_CATEGORIES,
  PORTFOLIO_ITEMS,
} from "../components/PortfolioCard";
import { FAQ, PORTFOLIO_FAQS } from "../components/FAQ";
import { Reveal } from "../components/Reveal";
import { stagger } from "../components/stagger";
const STATS: {
  icon: "award" | "smile" | "clock" | "globe";
  value: string;
  label: string;
}[] = [
  { icon: "award", value: "15,000+", label: "Projects Completed" },
  { icon: "smile", value: "8,000+", label: "Happy Clients" },
  { icon: "clock", value: "2-24 Hrs", label: "Turnaround Time" },
  { icon: "globe", value: "50+", label: "Countries Served" },
];

export default function PortfolioPage() {
  const [active, setActive] = useState("all");
  const items =
    active === "all"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((i) => i.category === active);

  return (
    <>
      <Hero
        eyebrow="Our Portfolio"
        titleLines={[
          { text: "Precision Work," },
          { text: "Perfect Results", accent: true },
        ]}
        description="Explore our latest embroidery digitizing projects. Every design is crafted with precision, quality, and perfection."
      />

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
        <Reveal direction="up">
          <Breadcrumb current="Portfolio" />
        </Reveal>
        <div className="mt-8">
          <Reveal direction="up" delay={80}>
            <SectionTag
              eyebrow="Our Work"
              title="Latest Portfolio"
              subtitle="We take pride in delivering top-quality digitizing for a wide range of designs."
            />
          </Reveal>
        </div>

        <Reveal
          direction="up"
          delay={120}
          className="mt-10 flex flex-wrap justify-center gap-2.5"
        >
          {PORTFOLIO_CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActive(cat.value)}
              className={`vr-btn rounded-md px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors ${
                active === cat.value
                  ? "bg-brand-600 text-white"
                  : "border border-navy-950/15 text-navy-950/60 hover:border-brand-600 hover:text-brand-600"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal
              key={`${item.title}-${active}`}
              direction="up"
              delay={stagger(i, 70)}
            >
              <PortfolioCard item={item} />
            </Reveal>
          ))}
        </div>

        <Reveal direction="up" className="mt-10 flex justify-center">
          <button className="vr-btn vr-btn-primary flex items-center gap-2 rounded-md bg-brand-600 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700">
            VIEW MORE WORK{" "}
            <span aria-hidden className="vr-arrow">
              &rarr;
            </span>
          </button>
        </Reveal>
      </section>

      <StatsBar stats={STATS} />

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Reveal direction="left">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
              What Our Clients Say
            </p>
            <div className="mt-3 flex items-center gap-3">
              <h3 className="font-serif text-2xl font-bold text-navy-950">
                Trusted by Thousands
              </h3>
              <StarRating />
            </div>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-navy-950/60">
              &ldquo;velora Digitizing delivered excellent quality and super
              fast turnaround. Highly recommended!&rdquo;
            </p>
            <div className="mt-6 flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-50 text-sm font-bold text-brand-600">
                J
              </span>
              <div>
                <p className="text-sm font-semibold text-navy-950">
                  John Smith
                </p>
                <p className="text-xs text-navy-950/50">USA</p>
              </div>
              <div className="ml-auto flex gap-2">
                <button
                  aria-label="Previous testimonial"
                  className="vr-btn flex h-9 w-9 items-center justify-center rounded-full border border-navy-950/15 text-navy-950/50 hover:border-brand-600 hover:text-brand-600"
                >
                  <Icon name="chevron-down" className="h-4 w-4 rotate-90" />
                </button>
                <button
                  aria-label="Next testimonial"
                  className="vr-btn flex h-9 w-9 items-center justify-center rounded-full border border-navy-950/15 text-navy-950/50 hover:border-brand-600 hover:text-brand-600"
                >
                  <Icon name="chevron-down" className="h-4 w-4 -rotate-90" />
                </button>
              </div>
            </div>
          </Reveal>

          <Reveal
            direction="right"
            className="flex flex-col justify-center rounded-2xl bg-navy-950 p-9"
          >
            <h3 className="font-serif text-2xl font-bold text-white">
              Ready to Digitize Your Design?
            </h3>
            <p className="mt-2 text-sm text-white/60">
              Get your FREE quote now and experience premium quality digitizing.
            </p>
            <Link
              href="/contact"
              className="vr-btn vr-btn-primary mt-6 flex w-fit items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-navy-950 hover:bg-brand-50"
            >
              START YOUR ORDER{" "}
              <span aria-hidden className="vr-arrow">
                &rarr;
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ 
        items={PORTFOLIO_FAQS}
        title="Portfolio - Frequently Asked Questions"
        subtitle="Questions about our portfolio, samples, and previous work."
    />
    </>
  );
}
