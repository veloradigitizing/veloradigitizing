"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { Reveal } from "../components/Reveal";

// ALL categories from Velora with correct image paths
const FEATURED_CATEGORIES = [
  {
    id: 1,
    name: "3D PUFF",
    subtitle: "3D Puff Digitizing",
    image: "/images/3d-puff/3d-puff-sample-01.jpeg",
    href: "/store?category=3d-puff",
  },
  {
    id: 2,
    name: "APPLIQUE",
    subtitle: "Applique Design",
    image: "/images/applique-design/ADesign.jpeg",
    href: "/store?category=applique-design",
  },
  {
    id: 3,
    name: "CAP LOGO",
    subtitle: "Cap Digitizing",
    image: "/images/cap-logo/cap-logo-02.jpeg",
    href: "/store?category=cap-logo",
  },
  {
    id: 4,
    name: "CHENILLE",
    subtitle: "Chenille Patch",
    image: "/images/chenille/chenille-01.jpeg",
    href: "/store?category=chenille",
  },
  {
    id: 5,
    name: "JACKET BACK",
    subtitle: "Jacket Back Design",
    image: "/images/jacket-back-design/jacket-back-01.jpeg",
    href: "/store?category=jacket-back-design",
  },
  {
    id: 6,
    name: "LEFT CHEST",
    subtitle: "Left Chest Logo",
    image: "/images/left-chest-logo/left-chest-shirt-01.jpeg",
    href: "/store?category=left-chest-logo",
  },
  {
    id: 7,
    name: "TOWEL",
    subtitle: "Towel Embroidery",
    image: "/images/towel-design/towel-design-01.jpeg",
    href: "/store?category=towel-design",
  },
  {
    id: 8,
    name: "SHOULDER",
    subtitle: "Shoulder Design",
    image: "/images/shoulder-design/pilipinas-logo-01.jpeg",
    href: "/store?category=shoulder-design",
  },
  {
    id: 9,
    name: "PATCHES",
    subtitle: "Custom Patches",
    image: "/images/custom-patches/DadByDay.jpeg",
    href: "/store?category=custom-patches",
  },
  {
    id: 10,
    name: "VECTOR ART",
    subtitle: "Vector Artwork",
    image: "/images/vector-art/GokuVector.jpeg",
    href: "/store?category=vector-art",
  },
];

export default function FeaturedCategories() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 10);

    const card = el.querySelector("[data-feature-card]");
    const cardWidth = card?.getBoundingClientRect().width || 210;
    const gap = 12;
    const newIndex = Math.round(el.scrollLeft / (cardWidth + gap));
    setActiveIndex(Math.min(newIndex, FEATURED_CATEGORIES.length - 1));
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-feature-card]");
    const cardWidth = card?.getBoundingClientRect().width || 210;
    const gap = 12;
    el.scrollBy({
      left: direction === "left" ? -(cardWidth + gap) : cardWidth + gap,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative bg-white py-16 lg:py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-12 lg:items-start">
          {/* LEFT SIDE - Header with tight flow (No dynamic height gap) */}
          <div className="w-full lg:w-[26%] lg:shrink-0 py-2">
            {/* Tag with lines - Vesper style */}
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <span className="h-px w-8 bg-navy-950/25" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-navy-950/60">
                Our Portfolio
              </span>
              <span className="h-px w-8 bg-navy-950/25" />
            </div>

            {/* Title */}
            <h2
              className="mt-4 text-2xl font-bold leading-tight text-navy-950 sm:text-3xl lg:text-4xl"
              style={{
                fontFamily:
                  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              }}
            >
              Featured Work
            </h2>

            {/* Description */}
            <p className="mt-4 text-sm leading-relaxed text-navy-950/50 lg:text-[15px]">
              Explore some of our recent digitizing projects. Quality speaks for
              itself.
            </p>

            {/* CTA Button - Standard layout margin */}
            <Link
              href="/portfolio"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-brand-600 px-7 py-3.5 text-xs font-bold uppercase tracking-wide text-white transition-all hover:bg-brand-700"
            >
              Explore Portfolio
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>

          {/* RIGHT SIDE - Carousel Container */}
          <div className="relative flex-1 min-w-0">
            {/* ARROWS - Top Right */}
            <div className="absolute -top-14 right-0 z-20 flex items-center gap-2">
              <button
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                className={`flex h-10 w-10 items-center justify-center rounded-full border-2 bg-white shadow-sm transition-all duration-200 ${
                  canScrollLeft
                    ? "border-navy-950/20 text-navy-900 hover:border-brand-600 hover:text-brand-600 cursor-pointer"
                    : "border-navy-950/10 text-navy-950/30 cursor-not-allowed"
                }`}
                aria-label="Previous"
              >
                <svg
                  className="h-5 w-5"
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
              <button
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                className={`flex h-10 w-10 items-center justify-center rounded-full border-2 bg-white shadow-sm transition-all duration-200 ${
                  canScrollRight
                    ? "border-navy-950/20 text-navy-900 hover:border-brand-600 hover:text-brand-600 cursor-pointer"
                    : "border-navy-950/10 text-navy-950/30 cursor-not-allowed"
                }`}
                aria-label="Next"
              >
                <svg
                  className="h-5 w-5"
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
            </div>

            {/* CAROUSEL TRACK - Large Screen par perfect 5 cards ke liye width: xl:w-[calc(20%-10px)] */}
            <div
              ref={scrollRef}
              className="flex gap-3 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {FEATURED_CATEGORIES.map((cat) => (
                <Link
                  key={cat.id}
                  href={cat.href}
                  data-feature-card
                  className="group relative flex-shrink-0 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md snap-start w-[260px] sm:w-[200px] md:w-[220px] lg:w-[calc(25%-9px)] xl:w-[calc(20%-10px)]"
                >
                  {/* Image Area - Aspect-[3/4] for elegant sizing */}
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-100">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Dark Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  </div>

                  {/* Text Info Overlay on Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                    <span className="block text-sm font-bold uppercase tracking-wide text-white">
                      {cat.name}
                    </span>
                    <span className="block mt-0.5 text-[11px] font-medium uppercase tracking-wider text-white/75 leading-tight">
                      {cat.subtitle}
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Dots Indicator */}
            <div className="mt-5 flex justify-center gap-1.5">
              {FEATURED_CATEGORIES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    const el = scrollRef.current;
                    if (!el) return;
                    const card = el.querySelector<HTMLElement>(
                      "[data-feature-card]",
                    );
                    const cardWidth =
                      card?.getBoundingClientRect().width || 210;
                    const gap = 12;
                    el.scrollTo({
                      left: i * (cardWidth + gap),
                      behavior: "smooth",
                    });
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? "w-7 bg-brand-600"
                      : "w-1.5 bg-navy-950/15"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
