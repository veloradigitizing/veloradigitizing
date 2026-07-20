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
}: {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  services?: Service[];
  className?: string;
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
    </section>
  );
}
