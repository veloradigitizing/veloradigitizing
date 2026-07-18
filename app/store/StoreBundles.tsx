"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "../components/Reveal";
import { stagger } from "../components/stagger";
import { BUNDLES, type BundleProduct } from "./bundles";

export default function StoreBundles() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    const observer = new ResizeObserver(checkScroll);
    observer.observe(el);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      observer.disconnect();
    };
  }, [checkScroll]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("article");
    const cardWidth = card?.offsetWidth ?? 320;
    const gap = 20;
    const visible = el.clientWidth >= 1280 ? 4 : el.clientWidth >= 768 ? 2 : 1;
    const amount = (cardWidth + gap) * visible;
    el.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  const getBadgeLabel = (index: number) => {
    return `BUNDLE ${index + 1} OF ${BUNDLES.length}`;
  };

  const getBadgeColor = (badge?: string) => {
    switch (badge) {
      case "best-value":
        return "bg-amber-500 text-white";
      case "popular":
        return "bg-brand-600 text-white";
      case "new":
        return "bg-emerald-500 text-white";
      case "sale":
        return "bg-rose-500 text-white";
      default:
        return "bg-navy-900 text-white";
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-brand-50/60 to-white py-16 lg:py-24">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-100/20 via-transparent to-transparent" />
      
      <div className="relative mx-auto max-w-7xl px-5 lg:px-10">
        {/* Header */}
        <Reveal direction="up">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
              <span className="h-px w-6 bg-current opacity-60" />
              Special Offers
              <span className="h-px w-6 bg-current opacity-60" />
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-navy-950 sm:text-4xl lg:text-5xl">
              Bundle & Save Big
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-navy-950/55 sm:text-base">
              Get more designs for less with our curated patch packs. Premium quality embroidery files at unbeatable prices — save up to 25% on every bundle!
            </p>
          </div>
        </Reveal>

        {/* Carousel */}
        <div className="relative mt-12">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className={`absolute left-0 top-1/2 z-20 -translate-y-1/2 -translate-x-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-lg ring-1 ring-navy-950/10 text-navy-950 transition-all duration-300 hover:bg-brand-600 hover:text-white hover:shadow-xl sm:h-12 sm:w-12 ${
              canScrollLeft
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
            aria-label="Scroll left"
          >
            <svg
              className="h-5 w-5 sm:h-6 sm:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className={`absolute right-0 top-1/2 z-20 -translate-y-1/2 translate-x-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-lg ring-1 ring-navy-950/10 text-navy-950 transition-all duration-300 hover:bg-brand-600 hover:text-white hover:shadow-xl sm:h-12 sm:w-12 ${
              canScrollRight
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
            aria-label="Scroll right"
          >
            <svg
              className="h-5 w-5 sm:h-6 sm:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Scrollable Track */}
          <div className="overflow-hidden rounded-2xl">
            <div
              ref={scrollRef}
              className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory px-1 py-1"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {BUNDLES.map((bundle, i) => (
                <Reveal
                  key={bundle.slug}
                  direction="up"
                  delay={stagger(i % 6, 80)}
                >
                  <article
                    className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-navy-950/8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl snap-start"
                    style={{
                      width: "300px",
                      minWidth: "300px",
                      maxWidth: "340px",
                      flexShrink: 0,
                    }}
                  >
                    {/* Bundle Badge - Top Left */}
                    <div className="absolute left-0 top-0 z-20">
                      <span className={`inline-block rounded-br-xl rounded-tl-2xl px-4 py-2 text-[10px] font-black uppercase tracking-wider shadow-lg ${getBadgeColor(bundle.badge)}`}>
                        {getBadgeLabel(i)}
                      </span>
                    </div>

                    {/* Discount Badge - Top Right */}
                    {bundle.bundleDiscount && (
                      <div className="absolute right-3 top-3 z-20">
                        <span className="inline-flex items-center gap-1 rounded-full bg-rose-500 px-3 py-1.5 text-xs font-bold text-white shadow-lg">
                          <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                          </svg>
                          {bundle.bundleDiscount}% OFF
                        </span>
                      </div>
                    )}

                    {/* Image Container */}
                    <Link
                      href={`/store/${bundle.slug}`}
                      className="relative block aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-gray-100 via-gray-50 to-white"
                    >
                      <Image
                        src={bundle.image}
                        alt={bundle.name}
                        fill
                        sizes="300px"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = "none";
                        }}
                      />
                      {/* Subtle overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
                    </Link>

                    {/* Content */}
                    <div className="flex flex-1 flex-col p-5 pb-4">
                      {/* Title & Designs Count */}
                      <div className="flex items-start justify-between gap-2">
                        <Link
                          href={`/store/${bundle.slug}`}
                          className="text-lg font-bold text-navy-950 transition-colors hover:text-brand-600 line-clamp-1"
                        >
                          {bundle.name}
                        </Link>
                        <span className="shrink-0 inline-flex items-center gap-1 rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-600">
                          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                          </svg>
                          {bundle.designs} designs
                        </span>
                      </div>

                      {/* Tagline / Description */}
                      <p className="mt-2 text-sm text-navy-950/60 line-clamp-2 leading-relaxed">
                        {bundle.tagline}
                      </p>

                      {/* Features Preview */}
                      <ul className="mt-3 space-y-1.5">
                        {bundle.features.slice(0, 3).map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-2 text-xs text-navy-950/70"
                          >
                            <svg className="h-3.5 w-3.5 shrink-0 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 111.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Price Section */}
                      <div className="mt-4 flex items-end gap-3 pt-3 border-t border-navy-950/8">
                        <div>
                          <span className="font-serif text-2xl font-bold text-brand-600">
                            ${bundle.price.toFixed(2)}
                          </span>
                          {bundle.originalPrice && (
                            <span className="ml-2 text-sm text-navy-950/40 line-through">
                              ${bundle.originalPrice.toFixed(2)}
                            </span>
                          )}
                        </div>
                        <span className="mb-0.5 ml-auto text-xs text-rose-500 font-semibold">
                          Save ${(bundle.originalPrice && bundle.originalPrice - bundle.price).toFixed(2)}
                        </span>
                      </div>

                      {/* CTA Button - Add to Cart */}
                      <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-brand-600 px-5 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-brand-600/25 transition-all hover:bg-brand-700 hover:shadow-xl hover:shadow-brand-600/30 active:scale-[0.98]">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a2.25 2.25 0 00-1.743-2.936l-1.611-.315a2.25 2.25 0 00-2.33 1.736L15.21 11.25M18.75 21a3 3 0 01-3 3h-7.5a3 3 0 01-3-3m15 0v-1.5a1.5 1.5 0 00-1.5-1.5H6m15 0v0" />
                        </svg>
                        Add to Cart
                      </button>

                      {/* View Details Link */}
                      <Link
                        href={`/store/${bundle.slug}`}
                        className="mt-3 flex items-center justify-center gap-1.5 text-xs font-semibold text-navy-950/45 transition-colors hover:text-brand-600"
                      >
                        View Details
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Scroll indicator dots */}
          <div className="mt-6 flex justify-center gap-1.5">
            {BUNDLES.map((_, i) => (
              <span
                key={i}
                className="h-2 w-8 rounded-full bg-navy-950/15 transition-colors"
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <Reveal direction="up" className="mt-12 text-center">
          <p className="text-sm text-navy-950/55">
            Looking for custom bundles?{" "}
            <Link
              href="/contact"
              className="font-semibold text-brand-600 hover:text-brand-700 underline decoration-brand-600/30 underline-offset-4"
            >
              Contact us
            </Link>{" "}
            for special pricing.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
