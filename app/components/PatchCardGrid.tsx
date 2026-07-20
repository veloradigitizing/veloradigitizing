"use client";

import Image from "next/image";
import Link from "next/link";
import Icon, { IconName } from "./Icon";
import { Reveal } from "./Reveal";
import { stagger } from "./stagger";

export type PatchItem = {
  slug: string;
  title: string;
  price: number;
  image: string;
  size: string;
  stitchCount: number;
  category: string;
  formats?: string[];
  description?: string;
};

type CategoryItem = { value: string; label: string; icon: string };

export default function PatchCardGrid({
  patches,
  categories,
  justAdded,
  onAddToCart,
  onClearFilters,
}: {
  patches: PatchItem[];
  categories: CategoryItem[];
  justAdded: string | null;
  onAddToCart: (patch: PatchItem) => void;
  onClearFilters: () => void;
}) {
  return (
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
              {patches.length} patch
              {patches.length !== 1 ? "es" : ""} available •
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
        {patches.map((patch, i) => (
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
                {categories.find((c) => c.value === patch.category)?.label || patch.category}
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
                  <span className="font-serif text-xl font-bold text-green-600">
                    ${patch.price.toFixed(2)}
                  </span>
                  <span className="text-sm font-medium text-navy-940/45 line-through">
                    $4.00
                  </span>
                </div>
                <button
                  onClick={() => onAddToCart(patch)}
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
        {patches.length === 0 && (
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
              onClick={onClearFilters}
              className="vr-btn mt-4 rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
