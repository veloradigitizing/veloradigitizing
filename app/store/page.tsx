"use client";

import { useState } from "react";
import Hero from "../components/Hero";
import PlaceholderBox from "../components/PlaceholderBox";
import Icon, { IconName } from "../components/Icon";
import { IconCircle, SectionTag } from "../components/Section";
import { Reveal } from "../components/Reveal";
import { stagger } from "../components/stagger";
type Product = {
  title: string;
  price: string;
  category: string;
};

const PRODUCTS: Product[] = [
  { title: "Tiger Head Embroidery Digitizing File", price: "$8.99", category: "digitizing-files" },
  { title: "LA Cap Logo Embroidery Digitizing File", price: "$6.99", category: "digitizing-files" },
  { title: "Skull Patch Embroidery Digitizing File", price: "$9.99", category: "digitizing-files" },
  { title: "Nike Logo Embroidery Digitizing File", price: "$6.99", category: "digitizing-files" },
  { title: "Bear Embroidery Digitizing File", price: "$7.99", category: "digitizing-files" },
  { title: "3D Puff Embroidery Digitizing File", price: "$12.99", category: "add-ons" },
  { title: "Applique Letter Embroidery Digitizing File", price: "$7.99", category: "digitizing-files" },
  { title: "NY Logo Embroidery Digitizing File", price: "$6.99", category: "digitizing-files" },
  { title: "Bull Head Embroidery Digitizing File", price: "$8.99", category: "digitizing-files" },
  { title: "College Logo Embroidery Digitizing File", price: "$6.99", category: "digitizing-files" },
];

const CATEGORIES: { label: string; value: string; icon: IconName }[] = [
  { label: "All Products", value: "all", icon: "grid" },
  { label: "Digitizing Files", value: "digitizing-files", icon: "box" },
  { label: "Add-Ons", value: "add-ons", icon: "tag" },
  { label: "Design Templates", value: "design-templates", icon: "layers" },
  { label: "Thread Charts", value: "thread-charts", icon: "sliders" },
  { label: "Software & Tools", value: "software-tools", icon: "monitor" },
];

const WHY_SHOP: { icon: IconName; title: string; description: string }[] = [
  { icon: "headset", title: "Premium Quality Files", description: "Perfect stitches & clean output" },
  { icon: "download", title: "Instant Download", description: "Get your files immediately" },
  { icon: "paperclip", title: "Wide Format Support", description: "DST, PES, EXP, JEF, VP3 & more" },
  { icon: "shield", title: "Money Back Guarantee", description: "100% satisfaction or refund" },
  { icon: "badge-check", title: "Secure Payment", description: "Safe and secure checkout" },
  { icon: "smile", title: "24/7 Customer Support", description: "We're here to help anytime" },
];

export default function StorePage() {
  const [active, setActive] = useState("all");
  const [query, setQuery] = useState("");

  const products = PRODUCTS.filter(
    (p) =>
      (active === "all" || p.category === active) &&
      p.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <Hero
        eyebrow="Our Store"
        titleLines={[
          { text: "Premium Digitizing" },
          { text: "Products & Add-Ons", accent: true },
        ]}
        description="Explore our premium digitizing products, add-ons and templates to speed up your embroidery business."
        imageLabel="Cap, Laptop & Premium Digitizing Files Box"
      />

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-10">
        <Reveal direction="up" className="flex flex-wrap items-center gap-3">
          <span className="flex items-center gap-2 rounded-md bg-navy-950 px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-white">
            <Icon name="sliders" className="h-4 w-4" /> Browse Categories
          </span>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActive(cat.value)}
              className={`vr-btn flex items-center gap-2 rounded-md px-4 py-2.5 text-xs font-semibold uppercase tracking-wide transition-colors ${
                active === cat.value
                  ? "bg-brand-50 text-brand-600"
                  : "text-navy-950/60 hover:text-brand-600"
              }`}
            >
              <Icon name={cat.icon} className="h-4 w-4" />
              {cat.label}
            </button>
          ))}
        </Reveal>

        <Reveal direction="up" delay={80} className="mt-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
              Shop
            </p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-navy-950">
              All Products
            </h2>
            <p className="mt-2 text-sm text-navy-950/55">
              High quality digitizing files &amp; resources for embroidery
              professionals.
            </p>
          </div>
          <div className="flex w-full gap-3 sm:w-auto">
            <select className="rounded-md border border-navy-950/15 px-3 py-2.5 text-sm text-navy-950/70 outline-none transition-colors focus:border-brand-600 focus:ring-2 focus:ring-brand-600/15">
              <option>Sort by: Popularity</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>
            <div className="relative flex-1 sm:flex-none">
              <Icon
                name="search"
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-950/35"
              />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full rounded-md border border-navy-950/15 py-2.5 pl-9 pr-3 text-sm outline-none transition-colors focus:border-brand-600 focus:ring-2 focus:ring-brand-600/15 sm:w-56"
              />
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((p, i) => (
            <Reveal
              key={p.title}
              direction="up"
              delay={stagger(i % 10, 60)}
              className="vr-lift group flex flex-col rounded-xl border border-navy-950/10 bg-white p-4"
            >
              <div className="relative">
                <div className="vr-zoom rounded-lg">
                  <PlaceholderBox
                    label={p.title}
                    className="aspect-square w-full"
                    rounded="rounded-lg"
                  />
                </div>
                <button
                  aria-label="Add to wishlist"
                  className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-navy-950/50 shadow transition-colors hover:text-brand-600"
                >
                  <Icon name="heart" className="h-4 w-4" />
                </button>
              </div>
              <p className="mt-3 text-[10px] font-semibold uppercase tracking-wide text-navy-950/35">
                DST &middot; PES &middot; EXP &middot; JEF
              </p>
              <p className="mt-1 flex-1 text-sm font-semibold text-navy-950">
                {p.title}
              </p>
              <p className="mt-2 font-serif text-lg font-bold text-brand-600">
                {p.price}
              </p>
              <button className="vr-btn vr-btn-primary mt-3 flex items-center justify-center gap-2 rounded-md bg-brand-600 py-2.5 text-xs font-bold uppercase tracking-wide text-white hover:bg-brand-700">
                <Icon name="cart" className="h-4 w-4" /> Add to Cart
              </button>
            </Reveal>
          ))}
          {products.length === 0 && (
            <p className="col-span-full py-10 text-center text-sm text-navy-950/50">
              No products found in this category.
            </p>
          )}
        </div>

        <Reveal direction="up" className="mt-10 flex justify-center">
          <button className="vr-btn flex items-center gap-2 rounded-md border border-navy-950/15 px-7 py-3.5 text-sm font-semibold text-navy-950 hover:border-brand-600 hover:text-brand-600">
            VIEW ALL PRODUCTS <span aria-hidden className="vr-arrow">&rarr;</span>
          </button>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-10">
        <Reveal direction="up">
          <SectionTag
            eyebrow="Why Shop With Vesper?"
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
              <p className="text-[11px] leading-relaxed text-navy-950/50">
                {item.description}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-10">
        <Reveal direction="up" className="vr-lift group flex flex-col gap-8 rounded-2xl bg-navy-950 p-9 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h3 className="font-serif text-2xl font-bold text-white">
              Need a Custom Digitizing File?
            </h3>
            <p className="mt-2 max-w-md text-sm text-white/60">
              Don&rsquo;t see what you need? We can digitize any logo or
              design for you.
            </p>
            <a
              href="/contact"
              className="vr-btn vr-btn-primary mt-5 inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-navy-950 hover:bg-brand-50"
            >
              GET CUSTOM QUOTE <span aria-hidden className="vr-arrow">&rarr;</span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
            {[
              { icon: "rocket" as IconName, label: "Super Fast Turnaround" },
              { icon: "award" as IconName, label: "High Quality Stitching" },
              { icon: "refresh" as IconName, label: "Unlimited Revisions" },
              { icon: "shield" as IconName, label: "100% Satisfaction Guaranteed" },
            ].map((f) => (
              <div key={f.label} className="flex flex-col items-center gap-2 text-center">
                <span className="vr-icon-pop flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors group-hover:bg-white/15">
                  <Icon name={f.icon} className="h-5 w-5" />
                </span>
                <p className="max-w-[6.5rem] text-[11px] text-white/60">{f.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}
