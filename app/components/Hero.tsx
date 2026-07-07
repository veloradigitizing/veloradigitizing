import Link from "next/link";
import Image from "next/image";
import heroImage from "../images/vesperHeroHd.png";
import { Breadcrumb } from "./Section";

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
    <section
      className="relative overflow-hidden bg-white"
      style={{
        backgroundImage:
          "radial-gradient(1400px 1100px at 78% 45%, #dbe6ff 0%, #e3ecff 28%, #eef3ff 55%, #f5f8ff 78%, #ffffff 100%)",
      }}
    >
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 py-14 lg:grid-cols-2 lg:items-center lg:px-10 lg:py-20">
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
        </div>

        <div className="relative -mx-5 flex justify-center sm:mx-0 lg:justify-end lg:-mr-[calc(50vw-37.5rem)]">
          <div className="pointer-events-none absolute -bottom-8 -right-4 h-40 w-40 rounded-full bg-[#a8b7f8]/60 blur-3xl sm:h-56 sm:w-56" />
          <Image
            src={heroImage}
            alt={imageLabel}
            priority
            className="relative h-auto w-auto max-w-full mix-blend-multiply"
          />
        </div>
      </div>
    </section>
  );
}
