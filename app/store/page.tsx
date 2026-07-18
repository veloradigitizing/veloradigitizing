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
import { PRODUCTS, type Product } from "./products";
import BundleSection from "./BundleSection";
import { FAQ, STORE_FAQS } from "../components/FAQ";

const CATEGORIES: { label: string; value: string; icon: IconName }[] = [
  { label: "All Products", value: "all", icon: "grid" },
  { label: "Digitizing Files", value: "digitizing-files", icon: "box" },
  { label: "Add-Ons", value: "add-ons", icon: "tag" },
  { label: "Design Templates", value: "design-templates", icon: "layers" },
  { label: "Thread Charts", value: "thread-charts", icon: "sliders" },
  { label: "Software and Tools", value: "software-tools", icon: "monitor" },
];

const WHY_SHOP: { icon: IconName; title: string; description: string }[] = [
  {
    icon: "headset",
    title: "Premium Quality Files",
    description: "Perfect stitches and clean output",
  },
  {
    icon: "download",
    title: "Instant Download",
    description: "Get your files immediately",
  },
  {
    icon: "paperclip",
    title: "Wide Format Support",
    description: "DST, PES, EXP, JEF, VP3 and more",
  },
  {
    icon: "shield",
    title: "Money Back Guarantee",
    description: "100 percent satisfaction or refund",
  },
  {
    icon: "badge-check",
    title: "Secure Payment",
    description: "Safe and secure checkout",
  },
  {
    icon: "smile",
    title: "24/7 Customer Support",
    description: "We are here to help anytime",
  },
];

export default function StorePage() {
  const [active, setActive] = useState("all");
  const [query, setQuery] = useState("");
  const [maxPrice, setMaxPrice] = useState(100);
  const [justAdded, setJustAdded] = useState<string | null>(null);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const { addItem } = useCart();

  const products = PRODUCTS.filter(
    (p) =>
      (active === "all" || p.category === active) &&
      p.title.toLowerCase().includes(query.toLowerCase()) &&
      p.price <= maxPrice,
  );

  const handleAddToCart = (p: Product) => {
    addItem({ id: p.slug, title: p.title, price: p.price, image: p.image });
    setJustAdded(p.slug);
    setTimeout(
      () => setJustAdded((cur) => (cur === p.slug ? null : cur)),
      1500,
    );
  };

  const clearFilters = () => {
    setActive("all");
    setQuery("");
    setMaxPrice(100);
  };

  return (
    <>
      <Hero
        eyebrow="Our Store"
        titleLines={[
          { text: "Premium Digitizing" },
          { text: "Products and Add-Ons", accent: true },
        ]}
        description="Explore our premium digitizing products, add-ons and templates to speed up your embroidery business."
        imageLabel="Cap, Laptop and Premium Digitizing Files Box"
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
          {/* STICKY FILTER SIDEBAR */}
          <aside
            className={`${mobileFiltersOpen ? "block" : "hidden"} lg:block`}
          >
            <div className="sticky top-24 rounded-xl border border-navy-950/10 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold uppercase tracking-wider text-navy-950">
                  Filters
                </h3>
                {(active !== "all" || query || maxPrice < 100) && (
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
                  placeholder="Search products..."
                  className="h-10 w-full rounded-lg border border-navy-950/12 pl-9 pr-3 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15"
                />
              </div>

              {/* Category Filter */}
              <div className="mt-6">
                <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-navy-950/60">
                  Category
                </h4>
                <div className="flex flex-col gap-1.5">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.value}
                      onClick={() => setActive(cat.value)}
                      className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm font-medium transition-all ${
                        active === cat.value
                          ? "bg-brand-50 text-brand-700 ring-1 ring-brand-500/20"
                          : "text-navy-950/65 hover:bg-navy-950/[0.03] hover:text-navy-950"
                      }`}
                    >
                      <Icon
                        name={cat.icon}
                        className={`h-4 w-4 ${active === cat.value ? "text-brand-600" : "text-navy-930/40"}`}
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
                  max="100"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="mt-2 w-full accent-brand-600"
                />
                <div className="mt-2 flex items-center justify-between text-xs text-navy-950/50">
                  <span>$0</span>
                  <span className="rounded-full bg-brand-50 px-2.5 py-1 font-semibold text-brand-700">
                    Up to ${maxPrice}
                  </span>
                  <span>$100+</span>
                </div>
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

          {/* PRODUCTS SECTION */}
          <div>
            <Reveal direction="up" className="mb-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
                    Shop
                  </p>
                  <h2 className="mt-2 font-serif text-2xl font-bold text-navy-950 sm:text-3xl">
                    All Products
                  </h2>
                  <p className="mt-1.5 text-sm text-navy-950/55">
                    {products.length} product{products.length !== 1 ? "s" : ""}{" "}
                    found
                  </p>
                </div>
                <select className="hidden rounded-lg border border-navy-950/12 px-4 py-2.5 text-sm outline-none focus:border-brand-500 sm:block">
                  <option>Sort by: Popularity</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest</option>
                </select>
              </div>
            </Reveal>

            {/* Responsive Product Grid */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
              {products.map((p, i) => (
                <Reveal
                  key={p.slug}
                  direction="up"
                  delay={stagger(i % 12, 50)}
                  className="vr-lift group flex flex-col rounded-xl border border-navy-950/10 bg-white p-4 transition-shadow hover:shadow-lg"
                >
                  {/* Position relative container handles the child absolute button securely */}
                  <div className="relative block">
                    <Link href={`/store/${p.slug}`}>
                      <div className="vr-zoom relative aspect-square w-full overflow-hidden rounded-lg bg-navy-950/[0.03]">
                        <Image
                          src={p.image}
                          alt={p.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                          className="object-cover"
                        />
                      </div>
                    </Link>

                    {/* FIXED: Moved button outside of Link component */}
                    <button
                      aria-label="Add to wishlist"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        // Add wishlist handler logic here
                      }}
                      className="absolute right-2 top-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-navy-950/50 shadow-md backdrop-blur transition-colors hover:bg-white hover:text-brand-600"
                    >
                      <Icon name="heart" className="h-4 w-4" />
                    </button>
                  </div>

                  <p className="mt-3 text-[10px] font-semibold uppercase tracking-wide text-navy-950/35">
                    {p.formats.join(" · ")}
                  </p>
                  <Link
                    href={`/store/${p.slug}`}
                    className="mt-1 flex-1 text-sm font-semibold text-navy-950 hover:text-brand-600"
                  >
                    {p.title}
                  </Link>
                  <p className="mt-2 font-serif text-lg font-bold text-brand-600">
                    ${p.price.toFixed(2)}
                  </p>
                  <button
                    onClick={() => handleAddToCart(p)}
                    className={`vr-btn mt-3 flex items-center justify-center gap-2 rounded-lg py-2.5 text-xs font-bold uppercase tracking-wide transition-all ${justAdded === p.slug ? "bg-green-600 text-white shadow-[0_4px_14px_-4px_rgba(22,163,74,0.45)]" : "bg-brand-600 text-white shadow-[0_6px_18px_-4px_rgba(6,14,40,0.35)] hover:bg-brand-700 hover:shadow-[0_8px_22px_-4px_rgba(6,14,40,0.45)]"}`}
                  >
                    <Icon
                      name={justAdded === p.slug ? "check" : "cart"}
                      className="h-4 w-4"
                    />{" "}
                    {justAdded === p.slug ? "Added" : "Add to Cart"}
                  </button>
                </Reveal>
              ))}
              {products.length === 0 && (
                <div className="col-span-full flex flex-col items-center justify-center py-16 text-center">
                  <Icon
                    name="search"
                    className="mb-4 h-12 w-12 text-navy-950/20"
                  />
                  <p className="text-base font-semibold text-navy-950/70">
                    No products found
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
        {products.length > 0 && (
          <div className="mt-10 lg:mt-15 flex justify-center">
            <Reveal direction="up">
              <button className="vr-btn flex items-center gap-2 rounded-lg border border-navy-950/12 px-7 py-3.5 text-sm font-semibold text-navy-950 transition-all hover:border-brand-500 hover:text-brand-600 hover:shadow-md">
                VIEW ALL PRODUCTS
                <span aria-hidden className="vr-arrow">
                  &rarr;
                </span>
              </button>
            </Reveal>
          </div>
        )}
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
            eyebrow="Why Shop With Velora?"
            title="Built for Quality. Designed for You."
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
        subtitle="Questions about purchasing, downloads, licensing, and support for store products."
      />

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-10">
        <Reveal
          direction="up"
          className="vr-lift group flex flex-col gap-8 rounded-2xl bg-navy-950 p-9 lg:flex-row lg:items-center lg:justify-between"
        >
          <div>
            <h3 className="font-serif text-2xl font-bold text-white">
              Need a Custom Digitizing File?
            </h3>
            <p className="mt-2 max-w-md text-sm text-white/60">
              Do not see what you need? We can digitize any logo or design for
              you.
            </p>
            <a
              href="/contact"
              className="vr-btn vr-btn-primary mt-5 inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-navy-950 hover:bg-brand-50"
            >
              GET CUSTOM QUOTE{" "}
              <span aria-hidden className="vr-arrow">
                →
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
            {[
              { icon: "rocket" as IconName, label: "Super Fast Turnaround" },
              { icon: "award" as IconName, label: "High Quality Stitching" },
              { icon: "refresh" as IconName, label: "Unlimited Revisions" },
              {
                icon: "shield" as IconName,
                label: "100 Percent Satisfaction Guaranteed",
              },
            ].map((f) => (
              <div
                key={f.label}
                className="flex flex-col items-center gap-2 text-center"
              >
                <span className="vr-icon-pop flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors group-hover:bg-white/15">
                  <Icon name={f.icon} className="h-5 w-5" />
                </span>
                <p className="max-w-[6.5rem] [11px] text-white/60">
                  {f.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}
