"use client";

import Icon from "./Icon";
import { SectionTag, StarRating } from "./Section";
import { Reveal } from "./Reveal";
import { stagger } from "./stagger";
import Image from "next/image";

type Testimonial = {
  quote: string;
  name: string;
  location: string;
  image: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Excellent quality digitizing and super fast delivery. Highly recommended!",
    name: "John Smith",
    location: "USA",
    image: "/images/testimonials/john-smith.png",
  },
  {
    quote:
      "Best digitizing service I have worked with. Very professional and reliable.",
    name: "Michael Brown",
    location: "Canada",
    image: "/images/testimonials/michael-brown.png",
  },
  {
    quote:
      "Very fast turnaround and the quality was beyond my expectations.",
    name: "James Wilson",
    location: "United Kingdom",
    image: "/images/testimonials/james-wilson.png",
  },
];

function TestimonialCard({ t }: { t: Testimonial }) {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative flex h-full cursor-pointer flex-col rounded-2xl border border-navy-950/10 bg-white p-7 shadow-sm transition-all duration-200 ease-out hover:shadow-xl hover:shadow-brand-500/10"
      style={{
        transformStyle: "preserve-3d",
        transition: "transform 0.15s ease-out, box-shadow 0.3s ease",
      }}
    >
      <div
        className="flex items-center justify-between"
        style={{ transform: "translateZ(20px)" }}
      >
        <Icon
          name="quote"
          className="vr-icon-pop h-7 w-7 text-brand-600/70 transition-transform duration-300 group-hover:scale-110"
          filled
        />
        <StarRating />
      </div>

      <p
        className="mt-4 text-sm leading-relaxed text-navy-950/70"
        style={{ transform: "translateZ(12px)" }}
      >
        {t.quote}
      </p>

      <div
        className="mt-6 flex items-center gap-3"
        style={{ transform: "translateZ(18px)" }}
      >
        <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-brand-100 ring-offset-2 transition-transform duration-300 group-hover:scale-105">
          <Image
            src={t.image}
            alt={`${t.name} - ${t.location}`}
            fill
            sizes="48px"
            className="object-cover object-center"
          />
        </span>
        <div>
          <p className="text-sm font-bold text-navy-950 transition-colors group-hover:text-brand-600">
            &mdash; {t.name}
          </p>
          <p className="text-xs text-navy-950/50">{t.location}</p>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-500/10 via-transparent to-brand-600/5" />
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
      <Reveal direction="up">
        <SectionTag eyebrow="TESTIMONIALS" title="What Our Clients Say" />
      </Reveal>
      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <Reveal
            key={t.name}
            direction="up"
            delay={stagger(i, 110)}
            className="h-full"
          >
            <TestimonialCard t={t} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
