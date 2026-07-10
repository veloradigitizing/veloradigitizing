"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Icon, { IconName } from "../../components/Icon";
import { Reveal } from "../../components/Reveal";
import { stagger } from "../../components/stagger";
import { useCart } from "../../context/CartContext";
import { PRODUCTS, getProductBySlug, CATEGORY_LABELS } from "../products";

const TRUST_POINTS: { icon: IconName; label: string }[] = [
  { icon: "download", label: "Instant Download" },
  { icon: "shield", label: "Money Back Guarantee" },
  { icon: "badge-check", label: "Secure Payment" },
  { icon: "headset", label: "24/7 Support" },
];

export default function ProductDetailPage() {
  const params = useParams<{ slug: string }>();
  const product = getProductBySlug(params.slug);
  const { addItem, openCart } = useCart();
  const [qty, setQty] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  if (!product) {
    return (
      <section className="mx-auto max-w-3xl px-5 py-32 text-center lg:px-10">
        <h1 className="font-serif text-3xl font-bold text-navy-950">
          Product not found
        </h1>
        <p className="mt-3 text-sm text-navy-950/55">
          The product you&rsquo;re looking for doesn&rsquo;t exist or has been
          removed.
        </p>
        <Link
          href="/store"
          className="vr-btn vr-btn-primary mt-6 inline-flex items-center gap-2 rounded-md bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-700"
        >
          Back to Store
        </Link>
      </section>
    );
  }

  const related = PRODUCTS.filter((p) => p.slug !== product.slug).slice(0, 4);

  const handleAddToCart = () => {
    addItem(
      {
        id: product.slug,
        title: product.title,
        price: product.price,
        image: product.image,
      },
      qty,
    );
    setJustAdded(true);
    openCart();
    setTimeout(() => setJustAdded(false), 1500);
  };

  return (
    <section className="mx-auto max-w-7xl px-5 pb-20 pt-32 lg:px-10">
      <p className="text-sm text-navy-950/50">
        <Link href="/" className="text-brand-600 hover:underline">
          Home
        </Link>
        <span className="mx-2">&rsaquo;</span>
        <Link href="/store" className="text-brand-600 hover:underline">
          Store
        </Link>
        <span className="mx-2">&rsaquo;</span>
        <span>{product.title}</span>
      </p>

      <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-2">
        <Reveal direction="up">
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-navy-950/[0.03]">
            <Image
              src={product.image}
              alt={product.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal direction="up" delay={80}>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
            {CATEGORY_LABELS[product.category] ?? product.category}
          </p>
          <h1 className="mt-2 font-serif text-3xl font-bold text-navy-950">
            {product.title}
          </h1>
          <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-navy-950/40">
            {product.formats.join(" · ")}
          </p>
          <p className="mt-5 font-serif text-3xl font-bold text-brand-600">
            ${product.price.toFixed(2)}
          </p>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-navy-950/60">
            {product.description}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <div className="flex items-center rounded-md border border-navy-950/15">
              <button
                aria-label="Decrease quantity"
                onClick={() => setQty((v) => Math.max(1, v - 1))}
                className="flex h-11 w-11 items-center justify-center text-navy-950/60 transition-colors hover:text-brand-600"
              >
                <Icon name="minus" className="h-4 w-4" />
              </button>
              <span className="w-10 text-center text-sm font-bold text-navy-950">
                {qty}
              </span>
              <button
                aria-label="Increase quantity"
                onClick={() => setQty((v) => v + 1)}
                className="flex h-11 w-11 items-center justify-center text-navy-950/60 transition-colors hover:text-brand-600"
              >
                <Icon name="plus" className="h-4 w-4" />
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className={`vr-btn flex flex-1 items-center justify-center gap-2 rounded-md px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-colors sm:flex-none ${
                justAdded
                  ? "bg-green-600"
                  : "vr-btn-primary bg-brand-600 hover:bg-brand-700"
              }`}
            >
              <Icon name={justAdded ? "check" : "cart"} className="h-4 w-4" />
              {justAdded ? "Added to Cart" : "Add to Cart"}
            </button>
          </div>

          <div className="mt-9 grid grid-cols-2 gap-5 sm:grid-cols-4">
            {TRUST_POINTS.map((t) => (
              <div key={t.label} className="flex flex-col items-center gap-2 text-center">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                  <Icon name={t.icon} className="h-5 w-5" />
                </span>
                <p className="text-[11px] leading-tight text-navy-950/55">
                  {t.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {related.length > 0 && (
        <div className="mt-20">
          <h2 className="font-serif text-2xl font-bold text-navy-950">
            You May Also Like
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p, i) => (
              <Reveal
                key={p.slug}
                direction="up"
                delay={stagger(i, 60)}
                className="vr-lift group flex flex-col rounded-xl border border-navy-950/10 bg-white p-4"
              >
                <Link href={`/store/${p.slug}`} className="block">
                  <div className="vr-zoom relative aspect-square w-full overflow-hidden rounded-lg bg-navy-950/[0.03]">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                </Link>
                <Link
                  href={`/store/${p.slug}`}
                  className="mt-3 flex-1 text-sm font-semibold text-navy-950 hover:text-brand-600"
                >
                  {p.title}
                </Link>
                <p className="mt-2 font-serif text-lg font-bold text-brand-600">
                  ${p.price.toFixed(2)}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
