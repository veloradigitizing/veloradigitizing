"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useSearchParams } from "next/navigation";
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

// Items per page for Load More
const ITEMS_PER_PAGE = 9;

export default function PortfolioPage() {
  const searchParams = useSearchParams();
  const urlCategory = searchParams.get("category") || "all";

  const [active, setActive] = useState(urlCategory);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const portfolioSectionRef = useRef<HTMLDivElement>(null);

  // This flag prevents scroll when TAB is clicked (internal navigation)
  // Footer/ServiceCard clicks will ALWAYS scroll because they don"	 set this flag
  const isTabClick = useRef(false);

  // Set active category from URL and scroll
  useEffect(() => {
    if (urlCategory && urlCategory !== "all") {
      setActive(urlCategory);

      // Only skip scroll if it was a TAB click (not footer/external link)
      if (!isTabClick.current) {
        setTimeout(() => {
          portfolioSectionRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 400);
      }
      // Reset the flag after handling
      isTabClick.current = false;
    }
  }, [urlCategory]);

  // Filter items based on active category
  const filteredItems =
    active === "all"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((i) => i.category === active);

  // Only show items up to visibleCount
  const visibleItems = filteredItems.slice(0, visibleCount);

  // Check if there are more items to show
  const hasMore = visibleCount < filteredItems.length;

  // Handle Load More click
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  };

  // Reset visible count when category changes via TAB click (NO scroll)
  const handleCategoryChange = useCallback((category: string) => {
    // Mark this as a TAB click so we don"	 scroll
    isTabClick.current = true;

    setActive(category);
    setVisibleCount(ITEMS_PER_PAGE);

    // Update URL without refresh
    const url = new URL(window.location.href);
    if (category === "all") {
      url.searchParams.delete("category");
    } else {
      url.searchParams.set("category", category);
    }
    window.history.pushState({}, "", url.toString());
  }, []);

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

      {/* Portfolio Section with ref for scrolling */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
        <Reveal direction="up">
          <Breadcrumb current="Portfolio" />
        </Reveal>
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
                  : "border border-navy-950/15 text-navy-950/60 hover:border-brand-600 hover:text-brand-600"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </Reveal>

        {/* Results count */}
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
                handleCategoryChange("all");
              }}
              className="text-xs font-semibold text-brand-600 hover:text-brand-700 transition-colors"
            >
              View All Categories →
            </button>
          )}
        </div>

        {/* Grid - Shows only visible items */}
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

        {/* Empty State */}
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

        {/* Load More Button - Only shows when there are more items */}
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

        {/* All Loaded Indicator */}
        {!hasMore && filteredItems.length > ITEMS_PER_PAGE && (
          <div className="mt-10 flex items-center justify-center gap-2 text-sm text-navy-950/40">
            <Icon name="check" className="h-4 w-4 text-green-500" />
            <span>All {filteredItems.length} designs loaded!</span>
          </div>
        )}
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
