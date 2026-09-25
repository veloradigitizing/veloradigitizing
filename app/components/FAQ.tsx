"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Icon from "./Icon";
import { Reveal } from "./Reveal";
import { stagger } from "./stagger";

/* ------------------------------------------------------------------
   FAQ — Centralized, reusable accordion with search + categories
   ------------------------------------------------------------------ */

import type { FAQItem } from "./faq-data";

export type { FAQItem } from "./faq-data";
export {
  HOME_FAQS,
  ABOUT_FAQS,
  PORTFOLIO_FAQS,
  PRICING_FAQS,
  SERVICES_FAQS,
  STORE_FAQS,
  CONTACT_FAQS,
} from "./faq-data";

export interface FAQProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
  /** Show / hide the search box. Default: true when items.length >= 5 */
  searchable?: boolean;
  /** Show / hide the "Still have questions" CTA. Default: true */
  showCta?: boolean;
  /** Override CTA label / href */
  ctaLabel?: string;
  ctaHref?: string;
  /** Optional eyebrow above the title */
  eyebrow?: string;
  /** Optional max-width class for the section. Defaults to max-w-4xl. */
  maxWidthClass?: string;
  className?: string;
}

export function FAQ({
  items,
  title = "Frequently Asked Questions",
  subtitle = "Find answers to common questions about our services.",
  searchable,
  showCta = true,
  ctaLabel = "Contact Our Team",
  ctaHref = "/contact",
  eyebrow = "FAQ",
  maxWidthClass = "max-w-4xl",
  className = "",
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const searchRef = useRef<HTMLInputElement | null>(null);

  /* Categories are derived from items that carry a `category` field. */
  const categories = useMemo(() => {
    const seen = new Set<string>();
    items.forEach((i) => i.category && seen.add(i.category));
    return Array.from(seen);
  }, [items]);

  const showSearch = searchable ?? (items.length >= 5 || categories.length > 0);
  const showCategories = categories.length > 0;

  /* Reset category if it disappears from the filtered set. */
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items
      .map((item, originalIndex) => ({ ...item, originalIndex }))
      .filter((item) => {
        if (activeCategory && item.category !== activeCategory) return false;
        if (!q) return true;
        return (
          item.question.toLowerCase().includes(q) ||
          item.answer.toLowerCase().includes(q)
        );
      });
  }, [items, query, activeCategory]);

  /* If the currently-open item gets filtered out, collapse the accordion. */
  useEffect(() => {
    if (openIndex === null) return;
    if (!filtered.some((f) => f.originalIndex === openIndex)) {
      setOpenIndex(null);
    }
  }, [filtered, openIndex]);

  /* Keyboard shortcut: "/" focuses the search box. */
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (
        e.key === "/" &&
        document.activeElement?.tagName !== "INPUT" &&
        document.activeElement?.tagName !== "TEXTAREA"
      ) {
        e.preventDefault();
        searchRef.current?.focus();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section
      className={`relative bg-gradient-to-b from-brand-50/40 via-white to-white py-16 lg:py-24 ${className}`}
    >
      {/* Soft decorative glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-brand-500/10 blur-3xl hidden sm:block"
      />

      <div className={`relative mx-auto ${maxWidthClass} px-5 lg:px-8`}>
        {/* Header */}
        <Reveal direction="up" className="text-center">
          {/* Tag */}
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-brand-500/30" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-600">
              {eyebrow}
            </span>
            <span className="h-px w-8 bg-brand-500/30" />
          </div>

          <h2 className="font-serif text-3xl font-bold text-navy-950 sm:text-4xl lg:text-[2.5rem]">
            {title}
          </h2>
          {subtitle && (
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-navy-950/60">
              {subtitle}
            </p>
          )}
        </Reveal>

        {/* Search + Categories */}
        {showSearch && (
          <Reveal direction="up" delay={80} className="mt-8">
            <div className="flex flex-col items-center gap-4">
              <div className="relative w-full max-w-xl">
                <Icon
                  name="search"
                  className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-950/40"
                />
                <input
                  ref={searchRef}
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search questions…  (press “/” to focus)"
                  aria-label="Search FAQ"
                  className="w-full rounded-full border border-navy-950/10 bg-white py-3 pl-11 pr-10 text-sm text-navy-950 shadow-sm transition-all placeholder:text-navy-950/40 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    aria-label="Clear search"
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-navy-950/40 transition-colors hover:bg-navy-950/5 hover:text-navy-950"
                  >
                    <Icon name="close" className="h-4 w-4" />
                  </button>
                )}
              </div>

              {showCategories && (
                <div className="flex flex-wrap items-center justify-center gap-2">
                  <CategoryChip
                    label="All"
                    active={activeCategory === null}
                    onClick={() => setActiveCategory(null)}
                  />
                  {categories.map((c) => (
                    <CategoryChip
                      key={c}
                      label={c}
                      active={activeCategory === c}
                      onClick={() =>
                        setActiveCategory(activeCategory === c ? null : c)
                      }
                    />
                  ))}
                </div>
              )}
            </div>
          </Reveal>
        )}

        {/* FAQ Items — Accordion */}
        <Reveal direction="up" delay={120} className="mt-10">
          <div className="space-y-3">
            {filtered.length === 0 ? (
              <EmptyState query={query} onReset={() => setQuery("")} />
            ) : (
              filtered.map((item, displayIndex) => {
                const isOpen = openIndex === item.originalIndex;
                return (
                  <div
                    key={item.originalIndex}
                    className={`group rounded-xl border transition-all duration-300 ${
                      isOpen
                        ? "border-brand-200 bg-white shadow-lg shadow-brand-100/40"
                        : "border-navy-950/10 bg-white hover:border-brand-200 hover:shadow-md"
                    }`}
                  >
                    <h3>
                      <button
                      onClick={() =>
                        setOpenIndex(isOpen ? null : item.originalIndex)
                      }
                      className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left sm:px-6"
                      aria-expanded={isOpen}
                    >
                      <span
                        className={`text-base font-semibold transition-colors duration-200 sm:text-[17px] ${
                          isOpen
                            ? "text-brand-700"
                            : "text-navy-950 group-hover:text-brand-600"
                        }`}
                      >
                        {item.question}
                      </span>

                      <span
                        className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                          isOpen
                            ? "rotate-180 bg-brand-600 text-white"
                            : "bg-brand-50 text-brand-600 group-hover:bg-brand-100"
                        }`}
                        aria-hidden
                      >
                        <Icon name="chevron-down" className="h-4 w-4" />
                      </span>
                    </button>
                    </h3>

                    {/* Smooth grid-rows animation — no jank, no scroll jump. */}
                    <div
                      className="grid transition-[grid-template-rows] duration-300 ease-out"
                      style={{
                        gridTemplateRows: isOpen ? "1fr" : "0fr",
                      }}
                      aria-hidden={!isOpen}
                    >
                      <div className="overflow-hidden">
                        <div className="border-t border-navy-950/5 px-5 pb-5 pt-4 sm:px-6">
                          <p className="text-sm leading-relaxed text-navy-950/70 sm:text-[15px]">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </Reveal>

        {/* Bottom CTA */}
        {showCta && (
          <Reveal direction="up" delay={160} className="mt-12 text-center">
            <p className="mb-4 text-sm text-navy-950/50">
              Still have questions? We&apos;re here 24/7.
            </p>
            <a
              href={ctaHref}
              className="vr-btn vr-btn-primary inline-flex items-center gap-2 rounded-md bg-brand-600 px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-brand-700 hover:shadow-md"
            >
              {ctaLabel}
              <span aria-hidden className="vr-arrow">
                &rarr;
              </span>
            </a>
          </Reveal>
        )}
      </div>

      {/* schema.org FAQ structured data — helps Google rich results. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: items.map((i) => ({
              "@type": "Question",
              name: i.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: i.answer,
              },
            })),
          }),
        }}
      />
    </section>
  );
}

/* ------------------------------------------------------------------
   Small subcomponents
   ------------------------------------------------------------------ */

function CategoryChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
        active
          ? "bg-brand-600 text-white shadow-sm"
          : "bg-white text-navy-950/70 ring-1 ring-navy-950/10 hover:ring-brand-200"
      }`}
    >
      {label}
    </button>
  );
}

function EmptyState({
  query,
  onReset,
}: {
  query: string;
  onReset: () => void;
}) {
  return (
    <div className="rounded-xl border border-dashed border-navy-950/10 bg-white/60 px-6 py-12 text-center">
      <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-brand-600">
        <Icon name="search" className="h-5 w-5" />
      </div>
      <p className="text-sm font-semibold text-navy-950">
        No questions match &ldquo;{query}&rdquo;
      </p>
      <p className="mt-1 text-sm text-navy-950/60">
        Try a different keyword or clear the search.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="mt-4 inline-flex items-center gap-1.5 rounded-md bg-navy-950 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-navy-900"
      >
        <Icon name="close" className="h-3.5 w-3.5" />
        Clear search
      </button>
    </div>
  );
}

/* ------------------------------------------------------------------
   Pre-defined FAQs per page
   ------------------------------------------------------------------ */
