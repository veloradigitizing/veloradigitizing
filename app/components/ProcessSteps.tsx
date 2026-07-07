import { Fragment } from "react";
import Icon, { IconName } from "./Icon";
import { SectionTag } from "./Section";
import { Reveal } from "./Reveal";
import { stagger } from "./stagger";
const STEPS: { icon: IconName; step: string; title: string; sub: string }[] = [
  {
    icon: "cloud-upload",
    step: "01",
    title: "Upload Design",
    sub: "Upload your logo or artwork in any format.",
  },
  {
    icon: "monitor",
    step: "02",
    title: "Digitizing",
    sub: "Our experts digitize your design with precision.",
  },
  {
    icon: "badge-check",
    step: "03",
    title: "Quality Check",
    sub: "We ensure 100% quality and accuracy.",
  },
  {
    icon: "send",
    step: "04",
    title: "Email Delivery",
    sub: "Final files delivered to your email on time.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
      <Reveal direction="up">
        <SectionTag eyebrow="OUR PROCESS" title="Simple 4 Steps Process" />
      </Reveal>
      <div className="mt-14 flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-4">
        {STEPS.map((s, i) => (
          <Fragment key={s.title}>
            <Reveal
              direction="up"
              delay={stagger(i, 120)}
              className="group flex flex-1 flex-col items-center gap-3 text-center"
            >
              <div className="vr-lift relative flex h-20 w-20 items-center justify-center rounded-full border border-navy-950/10 bg-white shadow-sm">
                <span
                  className="pointer-events-none absolute inset-0 rounded-full bg-brand-500/0 transition-colors duration-500 group-hover:bg-brand-500/10"
                  aria-hidden
                />
                <Icon
                  name={s.icon}
                  className="vr-icon-pop relative h-7 w-7 text-brand-600"
                  strokeWidth={1.6}
                />
              </div>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.15em] text-brand-600">
                Step {s.step}
              </p>
              <h4 className="-mt-2 font-semibold text-navy-950">{s.title}</h4>
              <p className="max-w-[14rem] text-sm text-navy-950/55">{s.sub}</p>
            </Reveal>
            {i < STEPS.length - 1 && (
              <Reveal
                direction="right"
                delay={stagger(i, 120, 60)}
                className="hidden shrink-0 pt-10 text-brand-600/40 lg:block"
              >
                <Icon name="chevron-down" className="h-5 w-5 -rotate-90" strokeWidth={2} />
              </Reveal>
            )}
          </Fragment>
        ))}
      </div>
    </section>
  );
}
