"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { PATCH_PORTFOLIO_ITEMS } from "../../lib/patch-portfolio";
import PortfolioCard, { type PortfolioItem } from "./PortfolioCard";
import { SectionTag } from "./Section";

const PortfolioModal = dynamic(() => import("./PortfolioModal"));

export default function PatchGallery() {
  const [preview, setPreview] = useState<PortfolioItem | null>(null);

  return (
    <>
      {[
        { category: "felt-patches", title: "Custom Felt Patches", description: "Explore our felt patch samples, from embroidered business logos to detailed mascots and badges." },
        { category: "twill-patches", title: "Custom Twill Patches", description: "Discover twill patch samples with clean stitched borders, bold lettering, and custom character designs." },
      ].map(({ category, title, description }) => (
        <section key={category} className="mx-auto max-w-7xl px-5 py-16 lg:px-10">
          <SectionTag eyebrow="Our Patch Work" title={title} subtitle={description} />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PATCH_PORTFOLIO_ITEMS.filter(item => item.category === category).slice(0, 6).map(item => (
              <PortfolioCard key={item.image} item={item} onClick={() => setPreview(item)} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href={`/portfolio?category=${category}`} className="inline-flex rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700">
              View All {title.replace("Custom ", "")}
            </Link>
          </div>
        </section>
      ))}
      {preview && <PortfolioModal item={preview} onClose={() => setPreview(null)} />}
    </>
  );
}
