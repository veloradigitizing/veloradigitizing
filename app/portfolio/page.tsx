"use client";

import { useState, useEffect, useRef, useCallback, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Hero from "../components/Hero";
import portfolioBg from "../images/velora-embroidery-showcase.webp";
import { SectionTag } from "../components/Section";
import Icon from "../components/Icon";
import PortfolioCard, {
  PORTFOLIO_CATEGORIES,
  PORTFOLIO_ITEMS,
  type PortfolioItem, } from "../components/PortfolioCard";
import PortfolioModal from "../components/PortfolioModal";
import { FAQ, PORTFOLIO_FAQS } from "../components/FAQ";
import HomeStats from "../components/HomeStats";
import TestimonialCTASection from "../components/TestimonialCTASection";
import WhyChooseUs from "../components/WhyChooseUs";
import CTABanner from "../components/CTABanner";
import { Reveal } from "../components/Reveal";
import { stagger } from "../components/stagger";

const ITEMS_PER_PAGE = 9;

const WHY_CHOOSE_ITEMS = [
  { icon: "diamond" as const, title: "Premium Quality", description: "Top-notch quality with perfect stitching and attention to every detail." },
  { icon: "clock" as const, title: "Fast Delivery", description: "24 hours turnaround available. Rush delivery under 12 hours for urgent needs." },
  { icon: "refresh" as const, title: "Unlimited Revisions", description: "We work until you are 100% satisfied. No extra charges, ever." },
  { icon: "smile" as const, title: "Expert Digitizers", description: "Professional digitizers with 10+ years of experience in every stitch type." },
];

function PortfolioContent() {
  const searchParams = useSearchParams();
  const urlCategory = searchParams.get("category") || "all";

  const [active, setActive] = useState(urlCategory);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [previewItem, setPreviewItem] = useState<PortfolioItem | null>(null);
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
                {" "} •{" "}
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
              <PortfolioCard
                item={item}
                onClick={() => setPreviewItem(item)}
              />
            </Reveal>
          ))}
        </div>

        <PortfolioModal
          item={previewItem}
          onClose={() => setPreviewItem(null)}
        />

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

      <HomeStats />

      <WhyChooseUs
        eyebrow="Why Choose Velora"
        title="The Velora Difference"
        items={WHY_CHOOSE_ITEMS}
        columns={4}
      />

      <FAQ
        items={PORTFOLIO_FAQS}
        title="Portfolio - Frequently Asked Questions"
        subtitle="Questions about our portfolio, samples, and previous work."
      />

      <TestimonialCTASection />

      <CTABanner />
    </>
  );
}

export default function PortfolioPage() {
  return (
    <>
      <Hero
        eyebrow="Work That Speaks"
        titleLines={[
          { text: "Precision Work," },
          { text: "Perfect Results", accent: true },
        ]}
        description="Explore our latest embroidery digitizing projects. Every design is crafted with precision, quality, and perfection."
        bgImage={portfolioBg}
        imageLabel="Showcase of embroidered Velora apparel and accessories"
        features={[
          { icon: "trophy", title: "500+ Projects", sub: "Successfully delivered" },
          { icon: "grid", title: "All Categories", sub: "Caps, jackets, bags & more" },
          { icon: "scissors", title: "Custom Work", sub: "Tailored to your design" },
          { icon: "star", title: "Top Rated", sub: "By happy clients" },
        ]}
      />

      <Suspense fallback={<section className="mx-auto max-w-7xl px-5 py-20 lg:px-10"><div className="flex items-center justify-center py-16"><p className="text-sm text-navy-950/50">Loading portfolio...</p></div></section>}>
        <PortfolioContent />
      </Suspense>
    </>
  );
}
