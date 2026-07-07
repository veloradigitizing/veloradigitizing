import Icon from "./Icon";
import { SectionTag, StarRating } from "./Section";

const TESTIMONIALS = [
  {
    quote:
      "Excellent quality digitizing and super fast delivery. Highly recommended!",
    name: "John Smith",
    location: "USA",
    initial: "JS",
  },
  {
    quote:
      "Best digitizing service I have worked with. Very professional and reliable.",
    name: "Michael Brown",
    location: "Canada",
    initial: "MB",
  },
  {
    quote:
      "Very fast turnaround and the quality was beyond my expectations.",
    name: "James Wilson",
    location: "United Kingdom",
    initial: "JW",
  },
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
      <SectionTag eyebrow="TESTIMONIALS" title="What Our Clients Say" />
      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <div
            key={t.name}
            className="flex flex-col items-center rounded-2xl border border-navy-950/10 bg-white p-7 text-center shadow-sm"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 text-sm font-bold text-brand-600 ring-2 ring-brand-600 ring-offset-2">
              {t.initial}
            </span>
            <div className="mt-4">
              <StarRating />
            </div>
            <Icon name="quote" className="mt-4 h-6 w-6 text-brand-600/30" filled />
            <p className="mt-2 text-sm italic leading-relaxed text-navy-950/70">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="mt-5">
              <p className="text-sm font-bold text-brand-600">{t.name}</p>
              <p className="text-xs text-navy-950/50">{t.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
