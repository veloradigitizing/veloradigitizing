"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import Icon from "./Icon";
import { SectionTag } from "./Section";
import { Reveal } from "./Reveal";

const FEATURED_CATEGORIES = [
  {
    id: 1,
    name: "3D PUFF",
    subtitle: "3D Puff Digitizing",
    image: "/images/3d-puff/3d-puff-sample-01.webp",
    href: "/store?category=3d-puff",
  },
  {
    id: 2,
    name: "APPLIQUE",
    subtitle: "Applique Design",
    image: "/images/applique-design/ADesign.webp",
    href: "/store?category=applique-design",
  },
  {
    id: 3,
    name: "CAP LOGO",
    subtitle: "Cap Digitizing",
    image: "/images/cap-logo/cap-logo-02.webp",
    href: "/store?category=cap-logo",
  },
  {
    id: 4,
    name: "CHENILLE",
    subtitle: "Chenille Patch",
    image: "/images/chenille/chenille-01.webp",
    href: "/store?category=chenille",
  },
  {
    id: 5,
    name: "JACKET BACK",
    subtitle: "Jacket Back Design",
    image: "/images/jacket-back-design/jacket-back-01.webp",
    href: "/store?category=jacket-back-design",
  },
  {
    id: 6,
    name: "LEFT CHEST",
    subtitle: "Left Chest Logo",
    image: "/images/left-chest-logo/left-chest-shirt-01.webp",
    href: "/store?category=left-chest-logo",
  },
  {
    id: 7,
    name: "TOWEL",
    subtitle: "Towel Embroidery",
    image: "/images/towel-design/towel-design-01.webp",
    href: "/store?category=towel-design",
  },
  {
    id: 8,
    name: "Sleeve",
    subtitle: "Sleeve Design",
    image: "/images/shoulder-design/pilipinas-logo-01.webp",
    href: "/store?category=shoulder-design",
  },
  {
    id: 9,
    name: "PATCHES",
    subtitle: "Custom Patches",
    image: "/images/custom-patches/DadByDay.webp",
    href: "/store?category=custom-patches",
  },
  {
    id: 10,
    name: "VECTOR ART",
    subtitle: "Vector Artwork",
    image: "/images/vector-art/GokuVector.webp",
    href: "/store?category=vector-art",
  },
];

export default function FeaturedCategories() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 10);
    const card = el.querySelector("[data-feature-card]");
    const cardWidth = card?.getBoundingClientRect().width || 210;
    const gap = 16;
    const step = cardWidth + gap;
    const maxScrollLeft = el.scrollWidth - el.clientWidth;
    const computedMaxIndex = Math.max(0, Math.round(maxScrollLeft / step));
    setMaxIndex(computedMaxIndex);
    const newIndex = Math.min(
      Math.round(el.scrollLeft / step),
      computedMaxIndex,
    );
    setActiveIndex(newIndex);
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
    const gap = 16;
    el.scrollBy({
      left: direction === "left" ? -(cardWidth + gap) : cardWidth + gap,
      behavior: "smooth",
    });
  };

  const leftBtnClass = canScrollLeft
    ? "flex h-9 w-9 items-center justify-center rounded-full border bg-white shadow-sm transition-all duration-200 border-navy-950/20 text-navy-950 hover:border-brand-600 hover:text-brand-600 cursor-pointer"
    : "flex h-9 w-9 items-center justify-center rounded-full border bg-white shadow-sm transition-all duration-200 border-navy-950/10 text-navy-950/30 cursor-not-allowed";

  const rightBtnClass = canScrollRight
    ? "flex h-9 w-9 items-center justify-center rounded-full border bg-white shadow-sm transition-all duration-200 border-navy-950/20 text-navy-950 hover:border-brand-600 hover:text-brand-600 cursor-pointer"
    : "flex h-9 w-9 items-center justify-center rounded-full border bg-white shadow-sm transition-all duration-200 border-navy-950/10 text-navy-950/30 cursor-not-allowed";

  return (
    <section className="relative bg-white py-16 lg:py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start">
          {/* Left: Title + CTA */}
          <Reveal direction="left" className="lg:w-72 lg:shrink-0 text-left">
            <SectionTag
              eyebrow="Our Portfolio"
              title="Featured Work"
              subtitle="Explore some of our recent digitizing projects. Quality speaks for itself."
              center={false}
            />
            <Link
              href="/portfolio"
              className="vr-btn vr-btn-primary mt-6 inline-flex items-center gap-2 rounded-md bg-brand-600 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
            >
              EXPLORE PORTFOLIO
              <span aria-hidden className="vr-arrow">
                &rarr;
              </span>
            </Link>
          </Reveal>

          {/* Right: Carousel */}
          <div className="relative flex-1 min-w-0">
            {/* Arrows */}
            <div className="absolute -top-14 right-0 z-20 flex items-center gap-2">
              <button
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                className={leftBtnClass}
                aria-label="Previous"
              >
                <Icon name="chevron-down" className="h-4 w-4 rotate-90" />
              </button>
              <button
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                className={rightBtnClass}
                aria-label="Next"
              >
                <Icon name="chevron-down" className="h-4 w-4 -rotate-90" />
              </button>
            </div>

            {/* Carousel Track */}
            <div
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {FEATURED_CATEGORIES.map((cat) => (
                <Link
                  key={cat.id}
                  href={cat.href}
                  data-feature-card
                  className="vr-lift group relative flex-shrink-0 overflow-hidden rounded-xl border border-navy-950/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md snap-start w-[290px] sm:w-[230px] md:w-[250px] lg:w-[calc(25%-12px)] xl:w-[calc(20%-13px)]"
                >
                  <div className="vr-zoom relative aspect-[2/3] w-full overflow-hidden bg-gray-100">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </div>
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

            {/* Dots Indicator — one dot per scroll page (not per item) */}
            <div className="mt-5 flex justify-center gap-1.5">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
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
                    const gap = 16;
                    el.scrollTo({
                      left: i * (cardWidth + gap),
                      behavior: "smooth",
                    });
                  }}
                  className={
                    i === activeIndex
                      ? "h-1.5 rounded-full transition-all duration-300 w-7 bg-brand-600"
                      : "h-1.5 rounded-full transition-all duration-300 w-1.5 bg-navy-950/15"
                  }
                  aria-label={"Go to page " + (i + 1)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
