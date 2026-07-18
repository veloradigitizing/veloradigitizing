"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "../components/Reveal";
import { stagger } from "../components/stagger";
import { BUNDLES } from "./bundles";
import { useCart } from "../context/CartContext";

// Props for reusable bundle section
interface BundleSectionProps {
  /** Main heading text */
  title?: string;
  /** Subtitle/description text */
  subtitle?: string;
  /** Eyebrow/label text (e.g., "Special Offers") */
  eyebrow?: string;
  /** Show navigation arrows */
  showArrows?: boolean;
  /** Show dots indicator */
  showDots?: boolean;
  /** Show bottom CTA button */
  showCTA?: boolean;
  /** CTA button text */
  ctaText?: string;
  /** CTA button link */
  ctaLink?: string;
  /** Background variant */
  variant?: "default" | "subtle" | "gradient";
  /** Section padding */
  padding?: "sm" | "md" | "lg";
}

export default function BundleSection({
  title = "Patch Bundles",
  subtitle = "Get more designs for less with our curated patch packs. Premium quality embroidery files at unbeatable prices — save up to 25%!",
  eyebrow = "Special Offers",
  showArrows = true,
  showDots = true,
  showCTA = true,
  ctaText = "View All Bundles",
  ctaLink = "/store",
  variant = "default",
  padding = "lg"
}: BundleSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const { addItem, openCart } = useCart();

  // Track which bundles are being added to cart
  const [addingToCart, setAddingToCart] = useState<string | null>(null);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 10);
    
    // Calculate active index based on scroll position
    const cardWidth = el.querySelector("[data-card]")?.offsetWidth || 320;
    const gap = 20;
    const newIndex = Math.round(el.scrollLeft / (cardWidth + gap));
    setActiveIndex(Math.min(newIndex, BUNDLES.length - 1));
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
    const cardWidth = card?.offsetWidth || 320;
    const gap = 20;
    el.scrollBy({ 
      left: direction === "left" ? -(cardWidth + gap) : (cardWidth + gap), 
      behavior: "smooth" 
    });
  };

  // Add to Cart Handler
  const handleAddToCart = async (bundle: typeof BUNDLES[0]) => {
    setAddingToCart(bundle.slug);
    
    try {
      addItem({
        id: bundle.slug,
        title: bundle.name,
        price: bundle.price,
        image: bundle.image,
      });
      
      // Cart updated silently - user can open cart when ready
    } catch (error) {
      console.error("Failed to add to cart:", error);
    } finally {
      setAddingToCart(null);
    }
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

  // Background variants
  const bgStyles = {
    default: "bg-gradient-to-b from-brand-50/50 to-white",
    subtle: "bg-white",
    gradient: "bg-gradient-to-br from-brand-50 via-white to-brand-100/30"
  };

  // Padding sizes
  const paddingStyles = {
    sm: "py-12 lg:py-16",
    md: "py-16 lg:py-20",
    lg: "py-20 lg:py-28"
  };

  return (
    <section className={`relative ${bgStyles[variant]} ${paddingStyles[padding]}`}>
      {/* Background decoration - pointer-events-none to prevent scroll interference */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-100/30 via-transparent to-transparent pointer-events-none" />
      
      <div className="relative mx-auto max-w-7xl px-5 lg:px-10">
        {/* Header */}
        <div className={`flex flex-col gap-4 ${showArrows ? "sm:flex-row sm:items-end sm:justify-between" : ""}`}>
          <Reveal direction="up">
            <div className={showArrows ? "" : "max-w-2xl mx-auto text-center"}>
              {eyebrow && (
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
                  <span className="h-px w-6 bg-current opacity-60" />
                  {eyebrow}
                  <span className="h-px w-6 bg-current opacity-60" />
                </span>
              )}
              <h2 className={`mt-3 font-serif font-bold text-navy-950 ${showArrows ? "text-3xl sm:text-4xl lg:text-5xl" : "text-3xl sm:text-4xl lg:text-5xl"}`}>
                {title}
              </h2>
              {subtitle && (
                <p className={`mt-3 text-sm text-navy-950/55 sm:text-base ${showArrows ? "max-w-xl" : "max-w-2xl mx-auto"}`}>
                  {subtitle}
                </p>
              )}
            </div>
          </Reveal>

          {/* Navigation Arrows */}
          {showArrows && (
            <Reveal direction="up" delay={100} className="flex gap-3 shrink-0">
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
          )}
        </div>

        {/* Carousel Track - Fixed: only horizontal scroll allowed */}
        <div className="mt-12 relative overflow-visible">
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto overflow-y-visible scroll-smooth snap-x snap-mandatory pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {BUNDLES.map((bundle, i) => (
              <Reveal key={bundle.slug} direction="up" delay={stagger(i, 80)}>
                <article
                  data-card
                  className="group relative flex w-[300px] flex-shrink-0 flex-col overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-navy-950/8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl snap-start sm:w-[320px] md:w-[340px] h-fit"
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
                  <Link href={`/store/${bundle.slug}`} className="relative block aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-gray-100 via-gray-50 to-white flex-shrink-0">
                    <Image
                      src={bundle.image}
                      alt={bundle.name}
                      fill
                      sizes="(max-width: 640px) 300px, (max-width: 768px) 320px, 340px"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  </Link>

                  {/* Content Section - Prevents internal scrolling */}
                  <div className="flex flex-col p-5 pb-4 flex-shrink-0 overflow-hidden">
                    {/* Title & Designs Count */}
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-lg font-bold text-navy-950 transition-colors group-hover:text-brand-600 line-clamp-1">
                        {bundle.name}
                      </h3>
                      <span className="shrink-0 inline-flex items-center gap-1 rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-600">
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                        </svg>
                        {bundle.designs} designs
                      </span>
                    </div>

                    {/* Tagline */}
                    <p className="mt-2 text-sm text-navy-950/60 line-clamp-2 leading-relaxed">
                      {bundle.tagline}
                    </p>

                    {/* Features Preview */}
                    <ul className="mt-3 space-y-1.5">
                      {bundle.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-navy-950/70">
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

                    {/* CTA Button - Working Add to Cart */}
                    <button
                      onClick={() => handleAddToCart(bundle)}
                      disabled={addingToCart === bundle.slug}
                      className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-brand-600 px-5 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-brand-600/25 transition-all hover:bg-brand-700 hover:shadow-xl hover:shadow-brand-600/30 active:scale-[0.98] disabled:opacity-70 disabled:cursor-wait flex-shrink-0"
                    >
                      {addingToCart === bundle.slug ? (
                        <>
                          <svg className="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Adding...
                        </>
                      ) : (
                        <>
                          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a2.25 2.25 0 00-1.743-2.936l-1.611-.315a2.25 2.25 0 00-2.33 1.736L15.21 11.25M18.75 21a3 3 0 01-3 3h-7.5a3 3 0 01-3-3m15 0v-1.5a1.5 1.5 0 00-1.5-1.5H6m15 0v0" />
                          </svg>
                          Add to Cart
                        </>
                      )}
                    </button>

                    {/* View Details Link */}
                    <Link href={`/store/${bundle.slug}`} className="mt-3 flex items-center justify-center gap-1.5 text-xs font-semibold text-navy-950/45 transition-colors hover:text-brand-600 flex-shrink-0">
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

        {/* Dots Indicator */}
        {showDots && (
          <div className="mt-8 flex justify-center gap-2">
            {BUNDLES.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  const el = scrollRef.current;
                  if (!el) return;
                  const card = el.querySelector<HTMLElement>("[data-card]");
                  const cardWidth = card?.offsetWidth || 320;
                  const gap = 20;
                  el.scrollTo({ left: i * (cardWidth + gap), behavior: "smooth" });
                }}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === activeIndex 
                    ? "w-8 bg-brand-600" 
                    : "w-2.5 bg-navy-950/20 hover:bg-navy-950/35"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        {showCTA && (
          <Reveal direction="up" className="mt-12 text-center">
            <Link href={ctaLink} className="vr-btn vr-btn-primary inline-flex items-center gap-2 rounded-xl bg-brand-600 px-10 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-xl shadow-brand-600/25 transition-all hover:bg-brand-700 hover:shadow-2xl hover:shadow-brand-600/30">
              {ctaText}
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </Reveal>
        )}
      </div>
    </section>
  );
}
