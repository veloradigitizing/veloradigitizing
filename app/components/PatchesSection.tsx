"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const PATCHES = [
  {
    id: 1,
    title: "Hike More Worry Less",
    slug: "hike-more-patch",
    image: "/images/patches/HikeMorePatch.webp",
    category: "Embroidered Patches",
    price: 2.99,
    originalPrice: 4.00,
    badge: "SALE"
  },
  {
    id: 2,
    title: "Dad By Day Gamer",
    slug: "dad-by-day",
    image: "/images/custom-patches/DadByDay.webp",
    category: "Custom Patches",
    price: 2.99,
    originalPrice: 4.00,
    badge: null
  },
  {
    id: 3,
    title: "Gaming Controller Patch",
    slug: "gaming-controller",
    image: "/images/custom-patches/GamingController.webp",
    category: "Custom Patches",
    price: 2.99,
    originalPrice: 4.00,
    badge: "SALE"
  },
  {
    id: 4,
    title: "Vintage Style Patch",
    slug: "vintage-patch",
    image: "/images/patches/OddFuturePatch.webp",
    category: "Embroidered Patches",
    price: 2.99,
    originalPrice: 4.00,
    badge: null
  }
];

export default function PatchesSection() {
  const [addedItems, setAddedItems] = useState<Set<number>>(new Set());

  const handleAddToCart = (id: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setAddedItems(prev => new Set([...prev, id]));
    setTimeout(() => {
      setAddedItems(prev => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });
    }, 2000);
  };

  return (
    <section className="bg-gradient-to-b from-white via-gray-50/30 to-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Content */}
          <div className="flex flex-col justify-center lg:col-span-5">
            <span className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
              <span className="h-8 w-[1px] bg-brand-500"></span>
              VISIT OUR STORE
              <span className="h-8 w-[1px] bg-brand-500"></span>
            </span>
            
            <h2 className="font-serif text-4xl font-bold leading-tight text-navy-950 lg:text-5xl">
              Premium<br />
              Embroidery<br />
              Designs <span className="text-brand-600">&</span> More
            </h2>
            
            <p className="mt-6 max-w-md text-base leading-relaxed text-navy-950/60">
              Explore our collection of embroidery designs, fonts, and patch packs. 
              High-quality digitized files ready for instant download.
            </p>
            
            <div className="mt-8">
              <Link
                href="/store"
                className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-rose-500 to-pink-600 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-rose-500/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-rose-500/30"
              >
                SHOP NOW
                <svg 
                  className="h-5 w-5 transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right - Patch Cards Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {PATCHES.map((patch) => (
                <Link 
                  key={patch.id} 
                  href="/store"
                  className="group"
                >
                  <div className="overflow-hidden rounded-2xl border border-navy-950/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    {/* Image Container */}
                    <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
                      <Image
                        src={patch.image}
                        alt={patch.title}
                        fill
                        sizes="(max-width: 640px) 50vw, 25vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      
                      {/* Sale Badge */}
                      {patch.badge && (
                        <span className="absolute left-3 top-3 z-10 rounded-lg bg-gradient-to-r from-rose-500 to-pink-600 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg">
                          {patch.badge}
                        </span>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      {/* Category */}
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-navy-950/40">
                        {patch.category}
                      </span>

                      {/* Title */}
                      <h3 className="mt-1 text-sm font-bold leading-snug text-navy-950 line-clamp-2">
                        {patch.title} Patch
                      </h3>

                      {/* Price */}
                      <div className="mt-2 flex items-baseline gap-2">
                        <span className="text-lg font-bold text-green-600">
                          ${patch.price.toFixed(2)}
                        </span>
                        <span className="text-sm font-medium text-navy-940/45 line-through">
                          ${patch.originalPrice.toFixed(2)}
                        </span>
                      </div>

                      {/* Add Button */}
                      <button
                        onClick={(e) => handleAddToCart(patch.id, e)}
                        className={`mt-3 flex w-full items-center justify-center gap-2 rounded-xl py-2.5 text-xs font-bold uppercase tracking-wide transition-all ${
                          addedItems.has(patch.id)
                            ? 'bg-green-500 text-white'
                            : 'bg-gradient-to-r from-rose-500 to-pink-600 text-white hover:from-rose-600 hover:to-pink-700'
                        }`}
                      >
                        {addedItems.has(patch.id) ? (
                          <>
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            ADDED!
                          </>
                        ) : (
                          <>
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                            </svg>
                            ADD
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}