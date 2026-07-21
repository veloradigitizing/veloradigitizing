"use client";

import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";
import { SectionTag } from "./Section";
import { Reveal } from "./Reveal";
import { stagger } from "./stagger";
import { useCart } from "../context/CartContext";

const PATCHES_PRODUCTS = [
  { slug: "hike-more", title: "Hike More Worry Less", price: 2.99, image: "/images/patches/HikeMorePatch.webp", tag: "Adventure Patch" },
  { slug: "wild-adventure", title: "Wild Adventure Patch", price: 2.99, image: "/images/patches/WildPatch.webp", tag: "Nature Patch" },
  { slug: "stay-wild", title: "Stay Wild Patch", price: 2.99, image: "/images/patches/StayWIldPatch.webp", tag: "Motivational" },
  { slug: "dad-gamer", title: "Dad By Day Gamer", price: 2.99, image: "/images/custom-patches/DadByDay.webp", tag: "Gaming Patch" },
];

export default function PatchesStoreSection() {
  const { addItem } = useCart();

  const handleAddToCart = (product: typeof PATCHES_PRODUCTS[number]) => {
    addItem({ id: product.slug, title: product.title, price: product.price, image: product.image });
  };

  return (
    <section className="relative overflow-hidden bg-navy-950 py-16 sm:py-20">
      <div className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full bg-brand-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-brand-400/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-10">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start">
          {/* Left: Title + CTA */}
          <Reveal direction="left" className="lg:w-72 lg:shrink-0 text-left">
            <SectionTag
              eyebrow="Patches Store"
              title="Featured Patches"
              subtitle="Explore our premium embroidery patch designs. Ready to download and stitch."
              dark
              center={false}
            />
            <Link
              href="/store#products"
              className="vr-btn vr-btn-primary mt-6 inline-flex items-center gap-2 rounded-md bg-brand-600 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
            >
              EXPLORE STORE
              <span aria-hidden className="vr-arrow">&rarr;</span>
            </Link>
          </Reveal>

          {/* Right: Patches Grid */}
          <div className="grid flex-1 grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
            {PATCHES_PRODUCTS.map((product, i) => (
              <Reveal key={product.slug} direction="up" delay={stagger(i, 70)}>
                <div className="vr-lift group overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-sm transition-all hover:border-brand-500/30 hover:shadow-lg hover:shadow-brand-600/10">
                  <div className="vr-zoom relative aspect-square w-full overflow-hidden bg-white/[0.06]">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover"
                    />
                    <span className="absolute left-2 top-2 rounded bg-brand-600/95 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white backdrop-blur-sm">
                      {product.tag}
                    </span>
                  </div>
                  <div className="p-3">
                    <p className="text-sm font-semibold text-white line-clamp-1">{product.title}</p>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-sm font-bold text-gold-400">${product.price.toFixed(2)}</span>
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="inline-flex items-center gap-1.5 rounded-md bg-brand-600 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-white transition-all hover:bg-brand-700 hover:shadow-md hover:shadow-brand-600/20 active:scale-95"
                      >
                        <Icon name="cart" className="h-3 w-3" />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}