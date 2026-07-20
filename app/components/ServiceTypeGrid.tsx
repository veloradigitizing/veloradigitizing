"use client";

import Icon, { IconName } from "./Icon";
import { SectionTag } from "./Section";
import { Reveal } from "./Reveal";
import { stagger } from "./stagger";

export default function ServiceTypeGrid({
  items,
  eyebrow,
  title,
  subtitle,
}: {
  items: { icon: IconName; title: string; desc: string }[];
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <section className="bg-brand-50/50 py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal direction="up">
          <SectionTag
            eyebrow={eyebrow}
            title={title}
            subtitle={subtitle}
          />
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.title} direction="up" delay={stagger(i, 80)}>
              <div className="group relative flex h-full flex-col items-start overflow-hidden rounded-xl border border-navy-950/10 bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-2xl">
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-500/0 to-brand-500/0 transition-all duration-500 group-hover:from-brand-500/5 group-hover:to-transparent" />
                <span className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-600/10 text-brand-600 ring-1 ring-brand-600/20 transition-all duration-500 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white group-hover:shadow-[0_8px_20px_-6px_rgba(26,63,196,0.5)]">
                  <Icon name={item.icon} className="h-7 w-7" />
                </span>
                <h3 className="relative font-serif text-lg font-bold text-navy-950">{item.title}</h3>
                <p className="relative mt-2 flex-1 text-sm leading-relaxed text-navy-950/60">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
