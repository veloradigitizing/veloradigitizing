"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Hero from "../components/Hero";
import storeBg from "../images/velora-embroidery-collection.webp";
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
    title: "Digital Patch Designs",
    description: "Machine embroidery files for your own patch projects",
  },
  {
    icon: "mail",
    title: "Delivered by Email",
    description: "Files arrive as a zip once your order is confirmed",
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
    title: "Simple Ordering",
    description: "Add to cart & checkout via WhatsApp or contact page",
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

  const storeJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Store",
        "@id": "https://www.veloradigitizing.com/store#store",
        "name": "Velora Digitizing Store",
        "url": "https://www.veloradigitizing.com/store",
        "image": "https://www.veloradigitizing.com/images/og/og-store.jpg",
        "telephone": "+12136358137",
        "description":
          "Online store for ready-to-stitch digital embroidery patterns, patch files, and design bundles.",
        "currenciesAccepted": "USD",
        "priceRange": "$2.99 - $299.99",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "128 Business Blvd, Suite 204",
          "addressLocality": "Los Angeles",
          "addressRegion": "CA",
          "postalCode": "90017",
          "addressCountry": "US",
        },
        "parentOrganization": {
          "@type": "Organization",
          "name": "Velora Digitizing",
          "url": "https://www.veloradigitizing.com",
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Embroidery Patch Designs & Bundles",
          "itemListElement": [
            { "@type": "OfferCatalog", "name": "Adventure Patches" },
            { "@type": "OfferCatalog", "name": "Lifestyle Patches" },
            { "@type": "OfferCatalog", "name": "Gaming Patches" },
            { "@type": "OfferCatalog", "name": "Motivational Patches" },
            { "@type": "OfferCatalog", "name": "Fun & Unique Patches" },
            { "@type": "OfferCatalog", "name": "Patch Bundles" },
          ],
        },
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.veloradigitizing.com",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Store",
            "item": "https://www.veloradigitizing.com/store",
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(storeJsonLd) }}
      />
      <Hero
        eyebrow="Digital Machine Embroidery Files"
        titleLines={[
          { text: "Embroidery Patch Designs" },
          { text: "DST & PES Files", accent: true },
        ]}
        description="Choose digital embroidery patch designs for jackets, caps and bags. Compare finished sizes and stitch counts, then receive your machine files by email after order confirmation."
        bgImage={storeBg}
        imageLabel="Collection of embroidered Velora products — tote bags, keychains, and thread spools"
        features={[
          { icon: "mail", title: "Email Delivery", sub: "Files sent to you as a zip" },
          { icon: "layers", title: "All Formats", sub: "All stitch formats included" },
          { icon: "refresh", title: "Free Re-sends", sub: "Lost a file? We send it again" },
          { icon: "send", title: "Easy Ordering", sub: "Add to cart & checkout via WhatsApp" },
        ]}
      />

      <section className="mx-auto max-w-7xl px-5 pt-8 lg:px-10" aria-labelledby="patch-file-guide">
        <h2 id="patch-file-guide" className="font-serif text-2xl font-bold text-navy-950">
          Choose embroidery patch designs for your machine
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-navy-950/70">
          Each listing is a digital embroidery file, not a finished physical patch.
          Check the design dimensions against your hoop and confirm the listed
          format works with your machine. Stitch a sample on matching fabric and
          backing before starting a production run.
        </p>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-navy-950/70">
          New to machine files? Read our{" "}
          <Link href="/blog/dst-vs-pes-vs-jef-embroidery-file-formats" className="font-semibold text-brand-600 underline">DST, PES and JEF format guide</Link>.
          {" "}For your own logo, request{" "}
          <Link href="/patches" className="font-semibold text-brand-600 underline">custom patch digitizing</Link>
          {" "}or learn how to{" "}
          <Link href="/blog/convert-png-jpg-to-dst-embroidery-file" className="font-semibold text-brand-600 underline">convert PNG or JPG artwork to DST</Link>.
        </p>
      </section>

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
        id="faq"
        items={STORE_FAQS}
        title="Store - Frequently Asked Questions"
        subtitle="Questions about ordering, file delivery, licensing, and support for our patch designs."
      />

      <StoreCTA />
    </>
  );
}
