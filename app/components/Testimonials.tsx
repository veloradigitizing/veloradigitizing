import Icon from "./Icon";
import { SectionTag, StarRating } from "./Section";
import { Reveal } from "./Reveal";
import { stagger } from "./stagger";
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
      <Reveal direction="up">
        <SectionTag eyebrow="TESTIMONIALS" title="What Our Clients Say" />
      </Reveal>
      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <Reveal
            key={t.name}
            direction="up"
            delay={stagger(i, 110)}
            className="vr-lift group flex flex-col rounded-2xl border border-navy-950/10 bg-white p-7 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <Icon
                name="quote"
                className="vr-icon-pop h-7 w-7 text-brand-600/70"
                filled
              />
              <StarRating />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-navy-950/70">
              {t.quote}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-50 text-xs font-bold text-brand-600">
                {t.initial}
              </span>
              <div>
                <p className="text-sm font-bold text-navy-950">&mdash; {t.name}</p>
                <p className="text-xs text-navy-950/50">{t.location}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
