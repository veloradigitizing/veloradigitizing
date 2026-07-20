import Icon, { IconName } from "./Icon";
import { SectionTag } from "./Section";
import { Reveal } from "./Reveal";
import { stagger } from "./stagger";

export default function ExpertiseStrip({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string;
  title: string;
  items: { icon: IconName; label: string }[];
}) {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-10">
      <Reveal direction="up">
        <SectionTag eyebrow={eyebrow} title={title} />
      </Reveal>
      <div className="mt-14 grid grid-cols-2 gap-y-8 sm:grid-cols-4 lg:grid-cols-7">
        {items.map((item, i) => (
          <Reveal
            key={item.label}
            direction="up"
            delay={stagger(i, 70)}
            className="group flex flex-col items-center gap-3 text-center transition-transform duration-300 hover:-translate-y-1"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-brand-600/25 text-brand-600 transition-colors duration-300 group-hover:bg-brand-50">
              <Icon name={item.icon} className="h-6 w-6" />
            </span>
            <p className="max-w-[7rem] text-xs font-medium text-navy-950/70">
              {item.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
