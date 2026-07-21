"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Hero from "../components/Hero";
import storeBg from "../images/velora-embroidery-collection.png";
import Icon, { IconName } from "../components/Icon";
import { IconCircle, SectionTag } from "../components/Section";
import { Reveal } from "../components/Reveal";
import { stagger } from "../components/stagger";
import { useCart } from "../context/CartContext";
import { PATCHES, PATCH_CATEGORIES, type Patch } from "./patches";
import BundleSection from "./BundleSection";
import { FAQ, STORE_FAQS } from "../components/FAQ";
import StoreCTA from "../components/StoreCTA";
import WhyShopSection from "../components/WhyShopSection";
import StoreFilterSidebar from "../components/StoreFilterSidebar";
import PatchCardGrid from "../components/PatchCardGrid";

const WHY_SHOP: { icon: IconName; title: string; description: string }[] = [
  {
    icon: "diamond",
    title: "Premium Quality Patches",
    description: "Perfect stitches and clean edges every time",
  },
  {
    icon: "download",
    title: "Instant Download",
    description: "Get your patch files immediately after purchase",
  },
  {
    icon: "layers",
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
    icon: "headset",
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

  const handleAddToCart = (p: { slug: string; title: string; price: number; image: string }) => {
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
        eyebrow="Shop Ready-Made Patches"
        titleLines={[
          { text: "Premium Embroidery" },
          { text: "Patch Designs", accent: true },
        ]}
        description="Explore our premium embroidery patch designs. Perfect for jackets, caps, bags, and more. Instant download in all major formats."
        bgImage={storeBg}
        imageLabel="Collection of embroidered Velora products — tote bags, keychains, and thread spools"
        features={[
          { icon: "download", title: "Instant Download", sub: "Get files immediately" },
          { icon: "layers", title: "All Formats", sub: "Multiple stitch formats" },
          { icon: "refresh", title: "Free Updates", sub: "Re-download anytime" },
          { icon: "cart", title: "Secure Checkout", sub: "Encrypted payment" },
        ]}
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
          <StoreFilterSidebar
            categories={PATCH_CATEGORIES}
            activeCategory={activeCategory}
            query={query}
            maxPrice={maxPrice}
            filteredCount={filteredPatches.length}
            onCategoryChange={setActiveCategory}
            onQueryChange={setQuery}
            onMaxPriceChange={setMaxPrice}
            onClearFilters={clearFilters}
            isOpen={mobileFiltersOpen}
          />

          {/* PATCHES GRID SECTION */}
          <PatchCardGrid
            patches={filteredPatches}
            categories={PATCH_CATEGORIES}
            justAdded={justAdded}
            onAddToCart={handleAddToCart}
            onClearFilters={clearFilters}
          />
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

      <WhyShopSection items={WHY_SHOP} />

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
