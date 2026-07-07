import Icon from "./Icon";
import { SectionTag, StarRating } from "./Section";

const TESTIMONIALS = [
  {
    quote:
      "Excellent quality digitizing and super fast delivery. Highly recommended!",
    name: "John Smith",
    location: "USA",
  },
  {
    quote:
      "Best digitizing service I have worked with. Very professional and reliable.",
    name: "Michael Brown",
    location: "Canada",
  },
  {
    quote:
      "Very fast turnaround and the quality was beyond my expectations.",
    name: "James Wilson",
    location: "United Kingdom",
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
            className="rounded-2xl border border-navy-950/10 bg-white p-7 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <Icon name="quote" className="h-7 w-7 text-brand-600/30" filled />
              <StarRating />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-navy-950/70">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="mt-6 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-50 text-sm font-bold text-brand-600">
                {t.name.charAt(0)}
              </span>
              <div>
                <p className="text-sm font-semibold text-navy-950">{t.name}</p>
                <p className="text-xs text-navy-950/50">{t.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
