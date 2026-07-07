import Link from "next/link";
import Image from "next/image";
import heroImage from "../images/vesperHeroHd.png";
import { Breadcrumb, HeroFeatures } from "./Section";

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
  return (
    <section className="relative overflow-hidden bg-[#fefefe] border-y border-navy-950/5 border-0 border-b-2">
      {/* Decorative gradient blobs (subtle, animated) */}
      <div className="pointer-events-none absolute -top-24 left-[-10%] h-72 w-72 rounded-full bg-brand-500/10 blur-3xl vr-float-soft" />
      <div className="pointer-events-none absolute bottom-[-10%] right-[-5%] h-80 w-80 rounded-full bg-navy-700/10 blur-3xl vr-float-soft" style={{ animationDelay: "1.5s" }} />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 pt-28 lg:grid-cols-2 lg:items-center lg:px-10  lg:pt-10">
        <div className="min-w-0">
          {breadcrumbCurrent && (
            <div className="mb-4 vr-hero-down" style={{ animationDelay: "0.05s" }}>
              <Breadcrumb current={breadcrumbCurrent} />
            </div>
          )}
          <p
            className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600 vr-hero-down"
            style={{ animationDelay: "0.12s" }}
          >
            {eyebrow}
          </p>
          <h1 className="mt-4 font-serif text-4xl font-bold leading-[1.15] text-navy-950 sm:text-5xl">
            {titleLines.map((line, i) => (
              <span
                key={i}
                className={`block vr-hero-up ${line.accent ? "vr-text-gradient" : "text-navy-950"}`}
                style={{ animationDelay: `${0.18 + i * 0.12}s` }}
              >
                {line.text}
              </span>
            ))}
          </h1>
          <p
            className="mt-5 max-w-lg text-[15px] leading-relaxed text-navy-950/60 vr-hero-up"
            style={{ animationDelay: "0.5s" }}
          >
            {description}
          </p>
          <div className="mt-7 flex flex-wrap gap-4 vr-hero-up" style={{ animationDelay: "0.62s" }}>
            <Link
              href="/contact"
              className="vr-btn vr-btn-primary flex items-center gap-2 rounded-md bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
            >
              GET FREE QUOTE <span aria-hidden className="vr-arrow">&rarr;</span>
            </Link>
            <Link
              href="/portfolio"
              className="vr-btn flex items-center gap-2 rounded-md border border-navy-950/15 bg-white px-6 py-3.5 text-sm font-semibold text-navy-950 transition-colors hover:border-brand-600 hover:text-brand-600"
            >
              VIEW PORTFOLIO <span aria-hidden className="vr-arrow">&rarr;</span>
            </Link>
          </div>

          {!breadcrumbCurrent && (
            <div className="vr-hero-fade" style={{ animationDelay: "0.85s" }}>
              <HeroFeatures />
            </div>
          )}
        </div>

        <div className="relative -mx-5 flex justify-center sm:mx-0 lg:justify-end lg:-mr-[calc(50vw-37.5rem)]">
          <div className="pointer-events-none absolute right-[-5%] top-[-8%] aspect-square w-[28%] min-w-24 rounded-full bg-[#e8f0fb] blur-3xl" />
          <div className="pointer-events-none absolute bottom-[-6%] right-[-3%] aspect-square w-[28%] min-w-24 rounded-full bg-[#a8b7f8]/60 blur-3xl" />
          <div className="pointer-events-none absolute bottom-[-4%] left-[-6%] aspect-square w-1/5 min-w-16 rounded-full bg-[#e8f0fb] blur-3xl" />
          <div className="vr-hero-scale" style={{ animationDelay: "0.35s" }}>
            <Image
              src={heroImage}
              alt={imageLabel}
              priority
              className="relative h-auto w-auto max-w-full vr-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
