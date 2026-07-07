import { Fragment } from "react";
import Icon, { IconName } from "./Icon";
import { SectionTag } from "./Section";

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
      <SectionTag eyebrow="OUR PROCESS" title="Simple 4 Steps Process" />
      <div className="mt-14 flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-4">
        {STEPS.map((s, i) => (
          <Fragment key={s.title}>
            <div className="flex flex-1 flex-col items-center gap-3 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-navy-950/10 bg-white shadow-sm">
                <Icon name={s.icon} className="h-7 w-7 text-brand-600" strokeWidth={1.6} />
              </div>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.15em] text-brand-600">
                Step {s.step}
              </p>
              <h4 className="-mt-2 font-semibold text-navy-950">{s.title}</h4>
              <p className="max-w-[14rem] text-sm text-navy-950/55">{s.sub}</p>
            </div>
            {i < STEPS.length - 1 && (
              <div className="hidden shrink-0 pt-10 text-brand-600/40 lg:block">
                <Icon name="chevron-down" className="h-5 w-5 -rotate-90" strokeWidth={2} />
              </div>
            )}
          </Fragment>
        ))}
      </div>
    </section>
  );
}
