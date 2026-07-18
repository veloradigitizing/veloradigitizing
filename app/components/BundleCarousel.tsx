"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "../components/Reveal";
import { stagger } from "../components/stagger";

const BUNDLE_CATEGORIES = [
  {
    id: 1,
    name: "3D PUFF",
    subtitle: "3D Puff Digitizing",
    description: "Premium puff embroidery with foam-ready underlay",
    image: "/images/bundles/bundle1.jpeg",
    href: "/store?category=3d-puff",
  },
  {
    id: 2,
    name: "CHENILLE",
    subtitle: "Chenille Patches",
    description: "Soft chenille designs for varsity jackets",
    image: "/images/bundles/bundle2.jpeg",
    href: "/store?category=chenille",
  },
  {
    id: 3,
    name: "TOWEL",
    subtitle: "Towel Embroidery",
    description: "Elegant monograms & borders for towels",
    image: "/images/bundles/bundle3.jpeg",
    href: "/store?category=towel-design",
  },
  {
    id: 4,
    name: "CAP LOGO",
    subtitle: "Cap Digitizing",
    description: "Professional cap logo designs",
    image: "/images/bundles/bundle4.jpeg",
    href: "/store?category=cap-logo",
  },
  {
    id: 5,
    name: "LEFT CHEST",
    subtitle: "Left Chest Logo",
    description: "Corporate polo shirt designs",
    image: "/images/bundles/bundle5.jpeg",
    href: "/store?category=left-chest-logo",
  },
  {
    id: 6,
    name: "JACKET BACK",
    subtitle: "Jacket Back Design",
    description: "Bold full-back jacket artwork",
    image: "/images/bundles/bundle6.jpeg",
    href: "/store?category=jacket-back-design",
  },
];

export default function BundleCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 10);
    
    // Calculate active index based on scroll position
    const cardWidth = el.querySelector("[data-card]")?.offsetWidth || 280;
    const gap = 20;
    const newIndex = Math.round(el.scrollLeft / (cardWidth + gap));
    setActiveIndex(Math.min(newIndex, BUNDLE_CATEGORIES.length - 1));
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    return () => el.removeEventListener("scroll", checkScroll);
  }, [checkScroll]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const cardWidth = card?.offsetWidth || 300;
    const gap = 20;
    el.scrollBy({ 
      left: direction === "left" ? -(cardWidth + gap) : (cardWidth + gap), 
      behavior: "smooth" 
    });
  };

  return (
    <section className="relative bg-brand-50/40 py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <Reveal direction="up">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
                <span className="h-px w-6 bg-current opacity-60" />
                Our Bundles
                <span className="h-px w-6 bg-current opacity-60" />
              </span>
              <h2 className="mt-3 font-serif text-3xl font-bold text-navy-950 sm:text-4xl lg:text-5xl">
                Shop by Category
              </h2>
              <p className="mt-3 max-w-xl text-sm text-navy-950/55 sm:text-base">
                Explore our curated design packs organized by category. Premium quality at unbeatable prices.
              </p>
            </div>
          </Reveal>

          {/* Navigation Arrows */}
          <Reveal direction="up" delay={100} className="flex gap-3">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`flex h-12 w-12 items-center justify-center rounded-full border-2 bg-white transition-all duration-300 ${
                canScrollLeft 
                  ? "border-brand-600 text-brand-600 hover:bg-brand-600 hover:text-white cursor-pointer" 
                  : "border-navy-950/15 text-navy-950/25 cursor-not-allowed"
              }`}
              aria-label="Previous"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`flex h-12 w-12 items-center justify-center rounded-full border-2 bg-white transition-all duration-300 ${
                canScrollRight 
                  ? "border-brand-600 text-brand-600 hover:bg-brand-600 hover:text-white cursor-pointer" 
                  : "border-navy-950/15 text-navy-950/25 cursor-not-allowed"
              }`}
              aria-label="Next"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </Reveal>
        </div>

        {/* Carousel Track */}
        <div className="mt-10 relative">
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {BUNDLE_CATEGORIES.map((cat, i) => (
              <Reveal key={cat.id} direction="up" delay={stagger(i, 80)}>
                <Link
                  href={cat.href}
                  data-card
                  className="group relative flex w-[260px] flex-shrink-0 flex-col overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-navy-950/8 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl snap-start sm:w-[280px] md:w-[300px]"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-brand-100 via-brand-50 to-white">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      sizes="(max-width: 640px) 260px, (max-width: 768px) 280px, 300px"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent opacity-60" />
                    
                    {/* Category Badge - Bottom of Image */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <span className="inline-block rounded-lg bg-white/95 px-4 py-2 shadow-lg backdrop-blur-sm">
                        <span className="text-xs font-black uppercase tracking-wider text-brand-600">
                          {cat.name}
                        </span>
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-lg font-bold text-navy-950 transition-colors group-hover:text-brand-600">
                      {cat.subtitle}
                    </h3>
                    <p className="mt-1.5 text-sm text-navy-950/50 line-clamp-2">
                      {cat.description}
                    </p>
                    
                    {/* CTA Link */}
                    <div className="mt-auto pt-4">
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-all group-hover:gap-2.5">
                        Explore Category
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="mt-8 flex justify-center gap-2">
          {BUNDLE_CATEGORIES.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                const el = scrollRef.current;
                if (!el) return;
                const card = el.querySelector<HTMLElement>("[data-card]");
                const cardWidth = card?.offsetWidth || 300;
                const gap = 20;
                el.scrollTo({ left: i * (cardWidth + gap), behavior: "smooth" });
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === activeIndex 
                  ? "w-8 bg-brand-600" 
                  : "w-2 bg-navy-920/20 hover:bg-navy-920/35"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <Reveal direction="up" className="mt-10 text-center">
          <Link
            href="/store"
            className="vr-btn vr-btn-primary inline-flex items-center gap-2 rounded-lg bg-brand-600 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-lg transition-all hover:bg-brand-700 hover:shadow-xl"
          >
            View All Bundles
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
