"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const PORTFOLIO_CATEGORIES = [
  { id: "all", name: "All Work" },
  { id: "patches", name: "Patches" },
  { id: "custom-patches", name: "Custom Patches" },
  { id: "cap-logo", name: "Cap Logo" },
  { id: "chenille", name: "Chenille" },
  { id: "jacket-back", name: "Jacket Back" },
  { id: "left-chest-logo", name: "Left Chest" },
  { id: "3d-puff", name: "3D Puff" },
  { id: "towel-design", name: "Towel" },
  { id: "applique-design", name: "Applique" },
  { id: "vector-art", name: "Vector Art" },
  { id: "shoulder-design", name: "Shoulder" },
  { id: "bundles", name: "Bundles" },
];

const PORTFOLIO_ITEMS = [
  { id: "patches", category: "patches", title: "Embroidered Patches", image: "/images/patches/HikeMorePatch.webp", count: 10, slug: "/portfolio?category=patches" },
  { id: "custom-patches", category: "custom-patches", title: "Custom Patches", image: "/images/custom-patches/DadByDay.webp", count: 11, slug: "/portfolio?category=custom-patches" },
  { id: "cap-logo", category: "cap-logo", title: "Cap / Hat Logos", image: "/images/cap-logo/cap-design-01.webp", count: 5, slug: "/portfolio?category=cap-logo" },
  { id: "chenille", category: "chenille", title: "Chenille Patches", image: "/images/chenille/chenille-02.webp", count: 6, slug: "/portfolio?category=chenille" },
  { id: "jacket-back", category: "jacket-back", title: "Jacket Back Design", image: "/images/jacket-back-design/jacket-back-01.webp", count: 2, slug: "/portfolio?category=jacket-back" },
  { id: "left-chest-logo", category: "left-chest-logo", title: "Left Chest Logos", image: "/images/left-chest-logo/ChristLogo.webp", count: 3, slug: "/portfolio?category=left-chest-logo" },
  { id: "3d-puff", category: "3d-puff", title: "3D Puff Embroidery", image: "/images/3d-puff/3d-puff-sample-01.webp", count: 1, slug: "/portfolio?category=3d-puff" },
  { id: "towel-design", category: "towel-design", title: "Towel Embroidery", image: "/images/towel-design/towel-design-01.webp", count: 4, slug: "/portfolio?category=towel-design" },
  { id: "applique-design", category: "applique-design", title: "Applique Design", image: "/images/applique-design/ADesign.webp", count: 2, slug: "/portfolio?category=applique-design" },
  { id: "vector-art", category: "vector-art", title: "Vector Artwork", image: "/images/vector-art/GokuVector.webp", count: 8, slug: "/portfolio?category=vector-art" },
  { id: "shoulder-design", category: "shoulder-design", title: "Shoulder Design", image: "/images/shoulder-design/pilipinas-logo-01.webp", count: 2, slug: "/portfolio?category=shoulder-design" },
  { id: "bundles", category: "bundles", title: "Bundle Packages", image: "/images/bundles/bundle1.webp", count: 6, slug: "/portfolio?category=bundles" },
];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = activeCategory === "all"
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section className="bg-gradient-to-b from-navy-950/5 via-white to-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        {/* Header */}
        <div className="text-center">
          <span className="mb-4 inline-block rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-600">
            Our Portfolio
          </span>
          <h2 className="mt-4 font-serif text-4xl font-bold text-navy-950 lg:text-5xl">
            Featured Digitizing Work
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-navy-950/60">
            Browse our collection of premium digitized designs across all categories. Each piece showcases our commitment to quality and precision.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {PORTFOLIO_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? "border-brand-500 bg-brand-500 text-white shadow-lg shadow-brand-500/25"
                  : "border-navy-950/15 bg-white text-navy-950 hover:border-brand-500 hover:text-brand-600"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredItems.map((item) => (
            <Link key={item.id} href={item.slug} className="group block">
              <div className="relative overflow-hidden rounded-2xl border border-navy-950/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                {/* Image */}
                <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/40">
                    <span className="rounded-full bg-white px-5 py-2 text-sm font-bold opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0">
                      View {item.count}+ Designs →
                    </span>
                  </div>
                  {/* Category Badge */}
                  <span className="absolute left-3 top-3 z-10 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-[11px] font-semibold text-navy-950 shadow-sm">
                    {item.title}
                  </span>
                </div>
                {/* Content */}
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-navy-950">{item.title}</h3>
                    <span className="text-sm font-medium text-brand-600">{item.count}+</span>
                  </div>
                  <p className="mt-1 text-xs text-navy-950/50">Premium digitized designs</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="mt-16 text-center">
            <p className="text-lg text-navy-950/40">No designs found in this category.</p>
          </div>
        )}

        {/* View All Link */}
        <div className="mt-12 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:bg-brand-600 hover:-translate-y-0.5 hover:shadow-xl"
          >
            View Full Portfolio
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}