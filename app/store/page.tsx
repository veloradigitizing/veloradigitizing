"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Hero from "../components/Hero";
import Icon, { IconName } from "../components/Icon";
import { IconCircle, SectionTag } from "../components/Section";
import { Reveal } from "../components/Reveal";
import { stagger } from "../components/stagger";
import { useCart } from "../context/CartContext";
import { PATCHES, PATCH_CATEGORIES, type Patch } from "./patches";
import BundleSection from "./BundleSection";
import { FAQ, STORE_FAQS } from "../components/FAQ";
import StoreCTA from "../components/StoreCTA";

const WHY_SHOP: { icon: IconName; title: string; description: string }[] = [
  {
    icon: "headset",
    title: "Premium Quality Patches",
    description: "Perfect stitches and clean edges every time",
  },
  {
    icon: "download",
    title: "Instant Download",
    description: "Get your patch files immediately after purchase",
  },
  {
    icon: "paperclip",
    title: "All Formats Included",
    description: "DST, PES, EXP, JEF, VP3 and more formats",
  },
  {
    icon: "shield",
    title: "Money Back Guarantee",
    description: "100 percent satisfaction or full refund",
  },
  {
    icon: "badge-check",
    title: "Secure Payment",
    description: "Safe and secure checkout process",
  },
  {
    icon: "smile",
    title: "24/7 Support",
    description: "We are here to help anytime you need",
  },
];

export default function StorePage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [query, setQuery] = useState("");
  const [maxPrice, setMaxPrice] = useState(20);
  const [justAdded, setJustAdded] = useState<string | null>(null);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const { addItem } = useCart();

  // Filter patches based on category, search, and price
  const filteredPatches = PATCHES.filter(
    (p) =>
      (activeCategory === "all" || p.category === activeCategory) &&
      p.title.toLowerCase().includes(query.toLowerCase()) &&
      p.price <= maxPrice,
  );

  const handleAddToCart = (p: Patch) => {
    addItem({ id: p.slug, title: p.title, price: p.price, image: p.image });
    setJustAdded(p.slug);
    setTimeout(
      () => setJustAdded((cur) => (cur === p.slug ? null : cur)),
      1500,
    );
  };

  const clearFilters = () => {
    setActiveCategory("all");
    setQuery("");
    setMaxPrice(20);
  };

  return (
    <>
      <Hero
        eyebrow="Patch Collection"
        titleLines={[
          { text: "Premium Embroidery" },
          { text: "Patch Designs", accent: true },
        ]}
        description="Explore our premium embroidery patch designs. Perfect for jackets, caps, bags, and more. Instant download in all major formats."
        imageLabel="High Quality Embroidery Patches"
      />

      {/* Mobile Filter Toggle */}
      <section className="mx-auto max-w-7xl px-5 pt-4 lg:hidden">
        <button
          onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
          className="vr-btn flex w-full items-center justify-center gap-2 rounded-md border border-navy-950/15 px-4 py-3 text-sm font-semibold text-navy-950 hover:border-brand-600 hover:text-brand-600"
        >
          <Icon name="sliders" className="h-4 w-4" />
          {mobileFiltersOpen ? "Hide Filters" : "Show Filters"}
        </button>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-10 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr] lg:gap-10">
          {/* STICKY FILTER SIDEBAR - Patch Specific */}
          <aside
            className={`${mobileFiltersOpen ? "block" : "hidden"} lg:block`}
          >
            <div className="sticky top-24 rounded-xl border border-navy-950/10 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold uppercase tracking-wider text-navy-950">
                  Patch Filters
                </h3>
                {(activeCategory !== "all" || query || maxPrice < 20) && (
                  <button
                    onClick={clearFilters}
                    className="text-xs font-semibold text-brand-600 hover:text-brand-700"
                  >
                    Clear all
                  </button>
                )}
              </div>

              {/* Search Filter */}
              <div className="relative mt-5">
                <Icon
                  name="search"
                  className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-950/35"
                />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search patches..."
                  className="h-10 w-full rounded-lg border border-navy-950/12 pl-9 pr-3 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15"
                />
              </div>

              {/* Patch Category Filter */}
              <div className="mt-6">
                <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-navy-950/60">
                  Patch Type
                </h4>
                <div className="flex flex-col gap-1.5">
                  {PATCH_CATEGORIES.map((cat) => (
                    <button
                      key={cat.value}
                      onClick={() => setActiveCategory(cat.value)}
                      className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm font-medium transition-all ${
                        activeCategory === cat.value
                          ? "bg-brand-50 text-brand-700 ring-1 ring-brand-500/20"
                          : "text-navy-950/65 hover:bg-navy-950/[0.03] hover:text-navy-950"
                      }`}
                    >
                      <Icon
                        name={cat.icon as IconName}
                        className={`h-4 w-4 ${activeCategory === cat.value ? "text-brand-600" : "text-navy-930/40"}`}
                      />
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div className="mt-6">
                <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-navy-950/60">
                  Price Range
                </h4>
                <input
                  type="range"
                  min="0"
                  max="20"
                  step="0.5"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="mt-2 w-full accent-brand-600"
                />
                <div className="mt-2 flex items-center justify-between text-xs text-navy-950/50">
                  <span>$0</span>
                  <span className="rounded-full bg-brand-50 px-2.5 py-1 font-semibold text-brand-700">
                    Up to ${maxPrice.toFixed(2)}
                  </span>
                  <span>$20+</span>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="mt-6 rounded-lg bg-navy-950/[0.02] p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-navy-950/50">
                  Available Patches
                </p>
                <p className="mt-1 text-2xl font-bold text-brand-600">
                  {filteredPatches.length}
                  <span className="ml-1 text-sm font-normal text-navy-950/40">
                    designs
                  </span>
                </p>
              </div>

              {/* Clear Filters Button */}
              <button
                onClick={clearFilters}
                className="mt-6 w-full rounded-lg border border-brand-300 bg-white px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-brand-600 transition-all hover:bg-brand-600 hover:text-white hover:border-brand-600"
              >
                Clear All Filters
              </button>
            </div>
          </aside>

          {/* PATCHES GRID SECTION */}
          <div>
            <Reveal direction="up" className="mb-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
                    Embroidery Patches
                  </p>
                  <h2 className="mt-2 font-serif text-2xl font-bold text-navy-950 sm:text-3xl">
                    All Patch Designs
                  </h2>
                  <p className="mt-1.5 text-sm text-navy-950/55">
                    {filteredPatches.length} patch
                    {filteredPatches.length !== 1 ? "es" : ""} available •
                    Instant download in all formats
                  </p>
                </div>
                <select className="hidden rounded-lg border border-navy-950/12 px-4 py-2.5 text-sm outline-none focus:border-brand-500 sm:block">
                  <option>Sort by: Popular</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest</option>
                </select>
              </div>
            </Reveal>

            {/* Responsive Patch Grid */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
              {filteredPatches.map((patch, i) => (
                <Reveal
                  key={patch.slug}
                  direction="up"
                  delay={stagger(i % 12, 50)}
                  className="vr-lift group flex flex-col overflow-hidden rounded-xl border border-navy-950/10 bg-white shadow-sm transition-all hover:shadow-lg"
                >
                  {/* Image Container */}
                  <div className="relative block">
                    <Link href={`/store/${patch.slug}`}>
                      <div className="vr-zoom relative aspect-square w-full overflow-hidden bg-gradient-to-br from-gray-100 via-gray-50 to-white">
                        <Image
                          src={patch.image}
                          alt={patch.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                          className="object-cover"
                        />
                        {/* Patch Size Badge */}
                        <span className="absolute bottom-2 left-2 z-10 rounded-md bg-black/70 px-2 py-1 text-[10px] font-semibold text-white backdrop-blur">
                          {patch.size}
                        </span>
                      </div>
                    </Link>

                    {/* 25% OFF Badge on Image */}
                    <span className="absolute left-2 top-2 z-10 rounded-lg bg-gradient-to-r from-rose-500 to-pink-600 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg">
                      25% OFF
                    </span>

                    {/* Wishlist Button */}
                    <button
                      aria-label="Add to wishlist"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                      }}
                      className="absolute right-2 top-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-navy-950/50 shadow-md backdrop-blur transition-colors hover:bg-white hover:text-rose-500"
                    >
                      <Icon name="heart" className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-4">
                    {/* Category Tag */}
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-brand-600">
                      {PATCH_CATEGORIES.find((c) => c.value === patch.category)
                        ?.label || patch.category}
                    </p>

                    {/* Title */}
                    <Link
                      href={`/store/${patch.slug}`}
                      className="mt-1 text-sm font-semibold text-navy-950 hover:text-brand-600 line-clamp-2"
                    >
                      {patch.title}
                    </Link>

                    {/* Stitch Count Info */}
                    <p className="mt-1 text-xs text-navy-950/45">
                      ~{patch.stitchCount} stitches
                    </p>

                    {/* Price & Add to Cart */}
                    <div className="mt-auto pt-3">
                      <div className="flex items-baseline gap-2">
                        {/* Sale Price - First (Big & Bold Green) */}
                        <span className="font-serif text-xl font-bold text-green-600">
                          ${patch.price.toFixed(2)}
                        </span>
                        {/* Original Price - Strikethrough After */}
                        <span className="text-sm font-medium text-navy-940/45 line-through">
                          $4.00
                        </span>
                      </div>
                      <button
                        onClick={() => handleAddToCart(patch)}
                        className={`vr-btn mt-2 flex w-full items-center justify-center gap-2 rounded-lg py-2.5 text-xs font-bold uppercase tracking-wide transition-all ${
                          justAdded === patch.slug
                            ? "bg-green-600 text-white shadow-[0_4px_14px_-4px_rgba(22,163,74,0.45)]"
                            : "bg-brand-600 text-white shadow-[0_6px_18px_-4px_rgba(26,63,196,0.35)] hover:bg-brand-700 hover:shadow-[0_8px_22px_-4px_rgba(26,63,196,0.45)]"
                        }`}
                      >
                        <Icon
                          name={justAdded === patch.slug ? "check" : "cart"}
                          className="h-4 w-4"
                        />{" "}
                        {justAdded === patch.slug ? "Added!" : "Add to Cart"}
                      </button>
                    </div>
                  </div>
                </Reveal>
              ))}

              {/* No Results State */}
              {filteredPatches.length === 0 && (
                <div className="col-span-full flex flex-col items-center justify-center py-16 text-center">
                  <Icon
                    name="search"
                    className="mb-4 h-12 w-12 text-navy-950/20"
                  />
                  <p className="text-base font-semibold text-navy-950/70">
                    No patches found
                  </p>
                  <p className="mt-1 text-sm text-navy-950/45">
                    Try adjusting your filters or search query.
                  </p>
                  <button
                    onClick={clearFilters}
                    className="vr-btn mt-4 rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
                  >
                    Clear All Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Load More Button */}
        {/* {filteredPatches.length > 0 && (
          <div className="mt-10 lg:mt-15 flex justify-center">
            <Reveal direction="up">
              <button className="vr-btn flex items-center gap-2 rounded-lg border border-navy-950/12 px-7 py-3.5 text-sm font-semibold text-navy-950 transition-all hover:border-brand-500 hover:text-brand-600 hover:shadow-md">
                LOAD MORE PATCHES
                <span aria-hidden className="vr-arrow">&rarr;</span>
              </button>
            </Reveal>
          </div>
        )} */}
      </section>

      {/* Bundle Section - Using BundleSection directly */}
      <BundleSection
        title="Bundle & Save Big"
        subtitle="Get more designs for less with our curated patch packs. Premium quality embroidery files at unbeatable prices — save up to 25% on every bundle!"
        eyebrow="Special Offers"
        showArrows={true}
        showDots={true}
        showCTA={false}
        variant="subtle"
        padding="md"
      />

      {/* Why Shop Section */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
        <Reveal direction="up">
          <SectionTag
            eyebrow="Why Buy From Velora?"
            title="Quality You Can Trust. Designs You Will Love."
          />
        </Reveal>
        <div className="mt-14 grid grid-cols-2 gap-7 sm:grid-cols-3 lg:grid-cols-6">
          {WHY_SHOP.map((item, i) => (
            <Reveal
              key={item.title}
              direction="up"
              delay={stagger(i, 80)}
              className="group flex flex-col items-center gap-3 text-center transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="vr-icon-pop">
                <IconCircle icon={item.icon} size="md" />
              </span>
              <p className="text-xs font-bold text-navy-950">{item.title}</p>
              <p className="[11px] leading-relaxed text-navy-950/50">
                {item.description}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ
        items={STORE_FAQS}
        title="Store - Frequently Asked Questions"
        subtitle="Questions about purchasing, downloads, licensing, and support for our patch designs."
      />

      <StoreCTA />
    </>
  );
}
