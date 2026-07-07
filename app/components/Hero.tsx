import Link from "next/link";
import PlaceholderBox from "./PlaceholderBox";
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
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-brand-50">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-brand-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-[350px] w-[350px] rounded-full bg-brand-700/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-14 lg:grid-cols-2 lg:items-center lg:px-10 lg:py-20">
        <div>
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
          <HeroFeatures />
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <PlaceholderBox
            label={imageLabel}
            className="aspect-[6/5] w-full max-w-md"
            rounded="rounded-[2rem]"
            iconSize={40}
          />
        </div>
      </div>
    </section>
  );
}
