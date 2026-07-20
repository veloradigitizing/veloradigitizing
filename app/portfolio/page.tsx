"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Hero from "../components/Hero";
import { SectionTag,
  StarRating,
  StatsBar, } from "../components/Section";
import Icon from "../components/Icon";
import PortfolioCard, {
  PORTFOLIO_CATEGORIES,
  PORTFOLIO_ITEMS, } from "../components/PortfolioCard";
import { FAQ, PORTFOLIO_FAQS } from "../components/FAQ";
import { Reveal } from "../components/Reveal";
import { stagger } from "../components/stagger";

const STATS: {
  icon: "award" | "smile" | "clock" | "globe";
  value: string;
  label: string; }[] = [
  { icon: "award", value: "15,000+", label: "Projects Completed" },
  { icon: "smile", value: "8,000+", label: "Happy Clients" },
  { icon: "clock", value: "2-24 Hrs", label: "Turnaround Time" },
  { icon: "globe", value: "50+", label: "Countries Served" },
];

// Items per page for Load More
const ITEMS_PER_PAGE = 9;

export default function PortfolioPage() {
  const searchParams = useSearchParams();
  const urlCategory = searchParams.get("category") || "all";

  const [active, setActive] = useState(urlCategory);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const portfolioSectionRef = useRef<HTMLDivElement>(null);

  const isTabClick = useRef(false);

  useEffect(() => {
    if (urlCategory && urlCategory !== "all") {
      setActive(urlCategory);

      if (!isTabClick.current) {
        setTimeout(() => {
          portfolioSectionRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start", }); }, 400); }
      isTabClick.current = false; } }, [urlCategory]);

  const filteredItems =
    active === "all"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((i) => i.category === active);

  const visibleItems = filteredItems.slice(0, visibleCount);
  const hasMore = visibleCount < filteredItems.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE); };

  const handleCategoryChange = useCallback((category: string) => {
    isTabClick.current = true;
    setActive(category);
    setVisibleCount(ITEMS_PER_PAGE);

    const url = new URL(window.location.href);
    if (category === "all") {
      url.searchParams.delete("category"); } else {
      url.searchParams.set("category", category); }
    window.history.pushState({}, "", url.toString()); }, []);

  return (
    <>
      {/* 1. Hero */}
      <Hero
        eyebrow="Our Portfolio"
        titleLines={[
          { text: "Precision Work," },
          { text: "Perfect Results", accent: true },
        ]}
        description="Explore our latest embroidery digitizing projects. Every design is crafted with precision, quality, and perfection."
      />

      {/* 2. Portfolio Grid Section */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
        
        <div className="mt-8">
          <Reveal direction="up" delay={80}>
            <SectionTag
              eyebrow="Our Work"
              title="Latest Portfolio"
              subtitle={`Showing ${visibleItems.length} of ${filteredItems.length} designs • We take pride in delivering top-quality digitizing for a wide range of designs.`}
            />
          </Reveal>
        </div>

        <Reveal
          direction="up"
          delay={120}
          className="mt-10 flex flex-wrap justify-center gap-2.5"
        >
          <div ref={portfolioSectionRef} />
          {PORTFOLIO_CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              onClick={() => handleCategoryChange(cat.value)}
              className={`vr-btn rounded-md px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors ${
                active === cat.value
                  ? "bg-brand-600 text-white shadow-lg shadow-brand-600/25"
                  : "border border-navy-950/15 text-navy-950/60 hover:border-brand-600 hover:text-brand-600" }`}
            >
              {cat.label}
            </button>
          ))}
        </Reveal>

        <div className="mt-6 flex items-center justify-between">
          <p className="text-sm text-navy-950/50">
            Showing{" "}
            <span className="font-semibold text-brand-600">
              {visibleItems.length}
            </span>{" "}
            of <span className="font-semibold">{filteredItems.length}</span>{" "}
            designs
            {hasMore && (
              <span>
                {" "}
                •{" "}
                <span className="text-brand-600">
                  {filteredItems.length - visibleCount} more available
                </span>
              </span>
            )}
          </p>
          {(active !== "all" || visibleCount > ITEMS_PER_PAGE) && (
            <button
              onClick={() => {
                handleCategoryChange("all"); }}
              className="text-xs font-semibold text-brand-600 hover:text-brand-700 transition-colors"
            >
              View All Categories →
            </button>
          )}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleItems.map((item, i) => (
            <Reveal
              key={`${item.title}-${active}`}
              direction="up"
              delay={stagger(i % 9, 70)}
            >
              <PortfolioCard item={item} />
            </Reveal>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="mt-12 flex flex-col items-center justify-center py-16 text-center">
            <Icon name="search" className="mb-4 h-12 w-12 text-navy-950/20" />
            <p className="text-base font-semibold text-navy-950/70">
              No designs found
            </p>
            <p className="mt-1 text-sm text-navy-950/45">
              Try selecting a different category.
            </p>
            <button
              onClick={() => handleCategoryChange("all")}
              className="vr-btn mt-4 rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
            >
              View All Designs
            </button>
          </div>
        )}

        {hasMore && (
          <Reveal direction="up" className="mt-10 flex justify-center">
            <button
              onClick={handleLoadMore}
              className="vr-btn vr-btn-primary group flex items-center gap-2 rounded-md bg-brand-600 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-brand-700 hover:shadow-lg hover:shadow-brand-600/25"
            >
              LOAD MORE DESIGNS
              <span className="rounded-full bg-white/20 px-2 py-0.5 text-xs font-bold">
                +{Math.min(ITEMS_PER_PAGE, filteredItems.length - visibleCount)}
              </span>
              <Icon
                name="chevron-down"
                className="h-4 w-4 rotate-90 transition-transform group-hover:translate-x-1"
              />
            </button>
          </Reveal>
        )}

        {!hasMore && filteredItems.length > ITEMS_PER_PAGE && (
          <div className="mt-10 flex items-center justify-center gap-2 text-sm text-navy-950/40">
            <Icon name="check" className="h-4 w-4 text-green-500" />
            <span>All {filteredItems.length} designs loaded!</span>
          </div>
        )}
      </section>

      {/* 3. StatsBar */}
      <StatsBar stats={STATS} />

      {/* 4. Testimonial + Mini CTA */}
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
              &ldquo;Velora Digitizing delivered excellent quality and super
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

      {/* 5. Why Choose Us - Features */}
      <section className="relative overflow-hidden bg-navy-950 py-16 sm:py-20">
        <div className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full bg-brand-500/20 blur-3xl vr-float-soft" />
        <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-brand-400/10 blur-3xl vr-float-soft" style={{ animationDelay: "1.8s" }} />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-10">
          <Reveal direction="up">
            <SectionTag
              eyebrow="Why Choose Velora"
              title="The Velora Difference"
              subtitle="We have digitized thousands of designs for brands, teams, military, and businesses worldwide."
              dark
            />
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: "diamond", title: "Premium Quality", desc: "Top-notch quality with perfect stitching and attention to every detail." },
              { icon: "clock", title: "Fast Delivery", desc: "24 hours turnaround available. Rush delivery under 12 hours for urgent needs." },
              { icon: "refresh", title: "Unlimited Revisions", desc: "We work until you are 100% satisfied. No extra charges, ever." },
              { icon: "smile", title: "Expert Digitizers", desc: "Professional digitizers with 10+ years of experience in every stitch type." },
            ].map((f, i) => (
              <Reveal key={f.title} direction="up" delay={stagger(i, 80)}>
                <div className="group relative flex h-full flex-col items-center overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-6 text-center backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-brand-500/40 hover:bg-white/[0.06] hover:shadow-[0_20px_40px_-15px_rgba(26,63,196,0.3)]">
                  <span className="pointer-events-none absolute -inset-px rounded-xl bg-gradient-to-br from-brand-500/0 to-brand-500/0 opacity-0 blur-md transition-opacity duration-500 group-hover:from-brand-500/15 group-hover:to-transparent group-hover:opacity-100" />
                  <span className="relative mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-500/25 text-gold-400 ring-1 ring-gold-400/30 transition-all duration-500 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white group-hover:shadow-[0_0_30px_-5px_rgba(26,63,196,0.7)]">
                    <Icon name={f.icon} className="h-7 w-7" />
                  </span>
                  <h3 className="relative text-base font-bold text-white">{f.title}</h3>
                  <p className="relative mt-2 flex-1 text-sm leading-relaxed text-white/60">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ Section */}
      <FAQ
        items={PORTFOLIO_FAQS}
        title="Portfolio - Frequently Asked Questions"
        subtitle="Questions about our portfolio, samples, and previous work."
      />

      {/* 7. CTA Section - No background image */}
      <section className="relative overflow-hidden bg-brand-600">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-brand-600 via-brand-500 to-brand-600" />
        <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 py-14 lg:px-10">
          <Reveal direction="up">
            <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between lg:gap-12">
              <div className="text-center lg:text-left">
                <h2 className="font-serif text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
                  Have a Design in Mind?
                </h2>
                <p className="mt-3 font-serif text-xl font-bold text-white/90 sm:text-2xl">
                  Let&apos;s turn it into a masterpiece.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-md bg-white px-7 text-sm font-semibold uppercase tracking-wide text-brand-600 shadow-xl transition-all duration-200 hover:bg-brand-50 hover:shadow-2xl hover:scale-105"
                >
                  Get Free Quote
                  <span aria-hidden className="vr-arrow">&rarr;</span>
                </Link>
                <Link
                  href="/contact"
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-md border-2 border-white/30 bg-transparent px-7 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-200 hover:border-white hover:bg-white hover:text-brand-600"
                >
                  <Icon name="phone" className="h-4 w-4" />
                  Contact Us
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  ); }