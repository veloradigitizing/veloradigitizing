import Link from "next/link";
import Icon from "./Icon";
import { StarRating } from "./Section";
import { Reveal } from "./Reveal";

export default function TestimonialCTA() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <Reveal direction="left">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
            What Our Clients Say
          </p>
          <div className="mt-3 flex items-center gap-3">
            <h3 className="font-serif text-2xl font-bold text-navy-950">
              Trusted by Thousands
            </h3>
            <StarRating />
          </div>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-navy-950/60">
            &ldquo;Velora Digitizing delivered excellent quality and super
            fast turnaround. Highly recommended!&rdquo;
          </p>
          <div className="mt-6 flex items-center gap-4">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-50 text-sm font-bold text-brand-600">
              J
            </span>
            <div>
              <p className="text-sm font-semibold text-navy-950">
                John Smith
              </p>
              <p className="text-xs text-navy-950/50">USA</p>
            </div>
            <div className="ml-auto flex gap-2">
              <button
                aria-label="Previous testimonial"
                className="vr-btn flex h-9 w-9 items-center justify-center rounded-full border border-navy-950/15 text-navy-950/50 hover:border-brand-600 hover:text-brand-600"
              >
                <Icon name="chevron-down" className="h-4 w-4 rotate-90" />
              </button>
              <button
                aria-label="Next testimonial"
                className="vr-btn flex h-9 w-9 items-center justify-center rounded-full border border-navy-950/15 text-navy-950/50 hover:border-brand-600 hover:text-brand-600"
              >
                <Icon name="chevron-down" className="h-4 w-4 -rotate-90" />
              </button>
            </div>
          </div>
        </Reveal>

        <Reveal
          direction="right"
          className="flex flex-col justify-center rounded-2xl bg-navy-950 p-9"
        >
          <h3 className="font-serif text-2xl font-bold text-white">
            Ready to Digitize Your Design?
          </h3>
          <p className="mt-2 text-sm text-white/60">
            Get your FREE quote now and experience premium quality digitizing.
          </p>
          <Link
            href="/contact"
            className="vr-btn vr-btn-primary mt-6 flex w-fit items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-navy-950 hover:bg-brand-50"
          >
            START YOUR ORDER{" "}
            <span aria-hidden className="vr-arrow">
              &rarr;
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
