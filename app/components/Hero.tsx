"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import heroImage from "../images/vesperHeroHd.png";
import { Breadcrumb, HeroFeatures } from "./Section";

function useIsDefaultZoom() {
  const [isDefaultZoom, setIsDefaultZoom] = useState(true);

  useEffect(() => {
    const initialDPR = window.devicePixelRatio;

    let mql: MediaQueryList | null = null;
    const handleChange = () => {
      setIsDefaultZoom(Math.abs(window.devicePixelRatio - initialDPR) < 0.01);
      watch();
    };
    function watch() {
      mql = window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`);
      mql.addEventListener("change", handleChange, { once: true });
    }
    watch();

    return () => mql?.removeEventListener("change", handleChange);
  }, []);

  return isDefaultZoom;
}

export default function Hero({
  eyebrow,
  titleLines,
  description,
  breadcrumbCurrent,
  imageLabel = "Embroidered Cap & Digitizing Software Mockup",
}: {
  eyebrow: string;
  titleLines: { text: string; accent?: boolean }[];
  description: string;
  breadcrumbCurrent?: string;
  imageLabel?: string;
}) {
  const isDefaultZoom = useIsDefaultZoom();

  return (
    <section className="relative overflow-hidden bg-[#fefefe] border-y border-navy-950/5 border-0 border-b-2">
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 pt-28 lg:grid-cols-2 lg:items-center lg:px-10  lg:pt-10">
        <div className="min-w-0">
          {breadcrumbCurrent && (
            <div className="mb-4">
              <Breadcrumb current={breadcrumbCurrent} />
            </div>
          )}
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
            {eyebrow}
          </p>
          <h1 className="mt-4 font-serif text-4xl font-bold leading-[1.15] text-navy-950 sm:text-5xl">
            {titleLines.map((line, i) => (
              <span
                key={i}
                className={`block ${line.accent ? "text-brand-600" : ""}`}
              >
                {line.text}
              </span>
            ))}
          </h1>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-navy-950/60">
            {description}
          </p>
          <div className="mt-7 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="flex items-center gap-2 rounded-md bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
            >
              GET FREE QUOTE <span aria-hidden>&rarr;</span>
            </Link>
            <Link
              href="/portfolio"
              className="flex items-center gap-2 rounded-md border border-navy-950/15 bg-white px-6 py-3.5 text-sm font-semibold text-navy-950 transition-colors hover:border-brand-600 hover:text-brand-600"
            >
              VIEW PORTFOLIO <span aria-hidden>&rarr;</span>
            </Link>
          </div>

          {!breadcrumbCurrent && <HeroFeatures />}
        </div>

        <div
          className={`relative -mx-5 flex justify-center sm:mx-0 lg:justify-end ${
            isDefaultZoom ? "lg:-mr-[calc(50vw-37.5rem)]" : ""
          }`}
        >
          <div className="pointer-events-none absolute right-[-5%] top-[-8%] aspect-square w-[28%] min-w-24 rounded-full bg-[#e8f0fb] blur-3xl" />
          <div className="pointer-events-none absolute bottom-[-6%] right-[-3%] aspect-square w-[28%] min-w-24 rounded-full bg-[#a8b7f8]/60 blur-3xl" />
          <div className="pointer-events-none absolute bottom-[-4%] left-[-6%] aspect-square w-1/5 min-w-16 rounded-full bg-[#e8f0fb] blur-3xl" />
          <Image
            src={heroImage}
            alt={imageLabel}
            priority
            className="relative h-auto w-auto max-w-full"
          />
        </div>
      </div>
    </section>
  );
}
