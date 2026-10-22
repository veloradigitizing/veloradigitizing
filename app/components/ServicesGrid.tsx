import Link from "next/link";
import { SectionTag } from "./Section";
import ServiceCard, { Service } from "./ServiceCard";
import { SERVICES } from "./services-data";
import { Reveal } from "./Reveal";
import { stagger } from "./stagger";

export default function ServicesGrid({
  eyebrow = "What We Offer",
  title = "Our Digitizing Services",
  subtitle = "We provide a wide range of embroidery digitizing services to meet all your needs.",
  services,
  className,
  showAllLink = false,
}: {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  services?: Service[];
  className?: string;
  showAllLink?: boolean;
}) {
  const items = services ?? SERVICES;

  return (
    <section className={`mx-auto max-w-7xl px-5 py-16 lg:px-10 lg:py-20 ${className ?? ""}`}>
      <div className="mt-8">
        <Reveal direction="up" delay={80}>
          <SectionTag eyebrow={eyebrow} title={title} subtitle={subtitle} />
        </Reveal>
      </div>
      <div className="mt-14 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((s, i) => (
          <Reveal key={s.slug} direction="up" delay={stagger(i, 80)}>
            <ServiceCard service={s} />
          </Reveal>
        ))}
      </div>
      {showAllLink && (
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-xl border border-brand-600/30 bg-brand-50/60 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-brand-600 transition-all hover:bg-brand-600 hover:text-white shadow-sm"
          >
            Explore All Digitizing Services &amp; Pricing Details &rarr;
          </Link>
        </div>
      )}
    </section>
  );
}
