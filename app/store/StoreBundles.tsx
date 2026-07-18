"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import Icon, { IconName } from "../components/Icon";
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
    const cardWidth = card?.offsetWidth ?? 300;
    const gap = 20;
    const visible = el.clientWidth >= 1280 ? 4 : el.clientWidth >= 768 ? 2 : 1;
    const amount = (cardWidth + gap) * visible;
    el.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative bg-brand-50/50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        {/* Header */}
        <Reveal direction="up">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
              <span className="h-px w-6 bg-current opacity-60" />
              Special Offers
              <span className="h-px w-6 bg-current opacity-60" />
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-navy-950 sm:text-4xl">
              Bundle & Save Big
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-navy-950/55 sm:text-base">
              Get more designs for less with our curated bundle packs. Premium
              quality at unbeatable prices.
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

          {/* Scrollable Track - FIXED LAYOUT */}
          <div className="overflow-hidden rounded-xl">
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
                    className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-md ring-1 ring-navy-950/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl snap-start"
                    style={{
                      width: "280px",
                      minWidth: "280px",
                      maxWidth: "320px",
                      flexShrink: 0,
                    }}
                  >
                    {/* Image - Fixed height container */}
                    <Link
                      href={`/store/${bundle.slug}`}
                      className="relative block h-48 w-full overflow-hidden bg-gradient-to-br from-brand-100 to-brand-200"
                    >
                      <Image
                        src={bundle.image}
                        alt={bundle.name}
                        fill
                        sizes="280px"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => {
                          // Hide broken image, show gradient background
                          (e.target as HTMLImageElement).style.display = "none";
                        }}
                      />
                      {bundle.bundleDiscount && (
                        <span className="absolute left-3 top-3 z-10 flex items-center justify-center whitespace-nowrap rounded-full bg-brand-600 px-3 py-1.5 text-xs font-bold text-white shadow-lg ring-4 ring-white/30">
                          {bundle.bundleDiscount}% OFF
                        </span>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </Link>

                    {/* Content */}
                    <div className="flex flex-1 flex-col p-4">
                      <Link
                        href={`/store/${bundle.slug}`}
                        className="text-base font-semibold text-navy-950 transition-colors hover:text-brand-600 line-clamp-1"
                      >
                        {bundle.name}
                      </Link>
                      <p className="mt-1 text-xs text-navy-950/55 line-clamp-2">
                        {bundle.tagline}
                      </p>

                      {/* Price */}
                      <div className="mt-3 flex items-center gap-2">
                        <span className="font-serif text-xl font-bold text-brand-600">
                          ${bundle.price.toFixed(2)}
                        </span>
                        {bundle.originalPrice && (
                          <span className="text-xs text-navy-935 line-through">
                            ${bundle.originalPrice.toFixed(2)}
                          </span>
                        )}
                      </div>

                      {/* Features Preview */}
                      <ul className="mt-3 space-y-1.5">
                        {bundle.features.slice(0, 3).map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-xs text-navy-955"
                          >
                            <Icon
                              name="check"
                              className="mt-0.5 h-3.5 w-3.5 shrink-0 text-green-500"
                            />
                            <span className="line-clamp-1">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA Button */}
                      <div className="mt-auto pt-4">
                        <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand-600 px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-white shadow-lg transition-all hover:bg-brand-700 hover:shadow-xl">
                          <Icon name="cart" className="h-4 w-4" />
                          Add to Cart
                        </button>
                      </div>

                      {/* View Details Link */}
                      <Link
                        href={`/store/${bundle.slug}`}
                        className="mt-2 inline-flex items-center justify-center gap-1 text-xs font-semibold text-navy-950/50 transition-colors hover:text-brand-600"
                      >
                        View details
                        <svg
                          className="h-3 w-3"
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
                className="h-1.5 w-8 rounded-full bg-navy-950/15 transition-colors"
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
