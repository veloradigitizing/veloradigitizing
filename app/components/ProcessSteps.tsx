import { Fragment } from "react";
import Icon from "./Icon";
import { IconCircle, SectionTag } from "./Section";

const STEPS: { icon: Parameters<typeof Icon>[0]["name"]; step: string; title: string; sub: string }[] = [
  {
    icon: "cloud-upload",
    step: "STEP 01",
    title: "Upload Design",
    sub: "Upload your logo or artwork in any format.",
  },
  {
    icon: "monitor",
    step: "STEP 02",
    title: "Digitizing",
    sub: "Our experts digitize your design with precision.",
  },
  {
    icon: "badge-check",
    step: "STEP 03",
    title: "Quality Check",
    sub: "We ensure 100% quality and accuracy.",
  },
  {
    icon: "send",
    step: "STEP 04",
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
              <IconCircle icon={s.icon} size="lg" />
              <p className="text-xs font-bold uppercase tracking-wide text-brand-600">
                {s.step}
              </p>
              <h4 className="font-semibold text-navy-950">{s.title}</h4>
              <p className="max-w-[14rem] text-sm text-navy-950/55">{s.sub}</p>
            </div>
            {i < STEPS.length - 1 && (
              <div className="hidden shrink-0 pt-7 text-brand-600/30 lg:block">
                <Icon name="chevron-down" className="h-5 w-5 -rotate-90" />
              </div>
            )}
          </Fragment>
        ))}
      </div>
    </section>
  );
}
