"use client";

import { useState } from "react";
import Link from "next/link";
import Icon from "./Icon";
import { StarRating } from "./Section";
import { Reveal } from "./Reveal";
import Image from "next/image";

export interface Testimonial {
  quote: string;
  author: string;
  authorOrigin: string;
  authorInitial?: string;
  authorImage?: string;
}

const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Velora Digitizing delivered excellent quality and super fast turnaround. Highly recommended!",
    author: "John Smith",
    authorOrigin: "USA",
    authorImage: "/images/testimonials/john-smith.png",
  },
  {
    quote:
      "Very fast turnaround and the quality was beyond my expectations.",
    author: "James Wilson",
    authorOrigin: "United Kingdom",
    authorImage: "/images/testimonials/james-wilson.png",
  },
  {
    quote:
      "Best digitizing service I have worked with. Very professional and reliable.",
    author: "Michael Brown",
    authorOrigin: "Canada",
    authorImage: "/images/testimonials/michael-brown.png",
  },
];

export default function TestimonialCTASection({
  eyebrow = "What Our Clients Say",
  title = "Trusted by Thousands",
  testimonials = DEFAULT_TESTIMONIALS,
  ctaTitle = "Ready to Digitize Your Design?",
  ctaSubtitle = "Get your FREE quote now and experience premium quality digitizing.",
  ctaLabel = "START YOUR ORDER",
  ctaHref = "/contact",
}: {
  eyebrow?: string;
  title?: string;
  testimonials?: Testimonial[];
  ctaTitle?: string;
  ctaSubtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const current = testimonials[index];

  const goNext = () => {
    setDirection("right");
    setIndex((i) => (i + 1) % testimonials.length);
  };

  const goPrev = () => {
    setDirection("left");
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <Reveal direction="left">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
            {eyebrow}
          </p>
          <div className="mt-3 flex items-center gap-3">
            <h3 className="font-serif text-2xl font-bold text-navy-950">
              {title}
            </h3>
            <StarRating />
          </div>

          <div
            key={index}
            className={
              direction === "right" ? "vr-testimonial-in-right" : "vr-testimonial-in-left"
            }
          >
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-navy-950/60">
              &ldquo;{current.quote}&rdquo;
            </p>
            <div className="mt-6 flex items-center gap-4">
              {current.authorImage ? (
                <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full ring-2 ring-brand-100 ring-offset-2">
                  <Image
                    src={current.authorImage}
                    alt={`${current.author} - ${current.authorOrigin}`}
                    fill
                    sizes="44px"
                    className="object-cover object-center"
                  />
                </span>
              ) : (
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-50 text-sm font-bold text-brand-600">
                  {current.authorInitial ?? current.author.charAt(0)}
                </span>
              )}
              <div>
                <p className="text-sm font-semibold text-navy-950">{current.author}</p>
                <p className="text-xs text-navy-950/50">{current.authorOrigin}</p>
              </div>
            </div>
          </div>

          {testimonials.length > 1 && (
            <div className="mt-6 flex items-center gap-4">
              <div className="flex gap-1.5">
                {testimonials.map((t, i) => (
                  <button
                    key={t.author}
                    aria-label={`Go to testimonial ${i + 1}`}
                    onClick={() => {
                      setDirection(i > index ? "right" : "left");
                      setIndex(i);
                    }}
                    className={`h-1.5 rounded-full transition-all ${
                      i === index ? "w-5 bg-brand-600" : "w-1.5 bg-navy-950/15 hover:bg-navy-950/30"
                    }`}
                  />
                ))}
              </div>
              <div className="ml-auto flex gap-2">
                <button
                  aria-label="Previous testimonial"
                  onClick={goPrev}
                  className="vr-btn flex h-9 w-9 items-center justify-center rounded-full border border-navy-950/15 text-navy-950/50 hover:border-brand-600 hover:text-brand-600"
                >
                  <Icon name="chevron-down" className="h-4 w-4 rotate-90" />
                </button>
                <button
                  aria-label="Next testimonial"
                  onClick={goNext}
                  className="vr-btn flex h-9 w-9 items-center justify-center rounded-full border border-navy-950/15 text-navy-950/50 hover:border-brand-600 hover:text-brand-600"
                >
                  <Icon name="chevron-down" className="h-4 w-4 -rotate-90" />
                </button>
              </div>
            </div>
          )}
        </Reveal>

        <Reveal
          direction="right"
          className="flex flex-col justify-center rounded-2xl bg-navy-950 p-9"
        >
          <h3 className="font-serif text-2xl font-bold text-white">
            {ctaTitle}
          </h3>
          <p className="mt-2 text-sm text-white/60">{ctaSubtitle}</p>
          <Link
            href={ctaHref}
            className="vr-btn vr-btn-primary mt-6 flex w-fit items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-navy-950 hover:bg-brand-50"
          >
            {ctaLabel}{" "}
            <span aria-hidden className="vr-arrow">
              &rarr;
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
