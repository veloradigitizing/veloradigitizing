import Icon, { IconName } from "./Icon";
import { SectionTag } from "./Section";
import { Reveal } from "./Reveal";
import { stagger } from "./stagger";

export default function FeatureCards({
  eyebrow,
  title,
  subtitle,
  items,
  columns = 3,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  items: { icon: IconName; title: string; description: string }[];
  columns?: 2 | 3 | 4 | 6;
}) {
  const colClass: Record<number, string> = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
    6: "sm:grid-cols-3 lg:grid-cols-6",
  };

  return (
    <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-10">
      <Reveal direction="up">
        <SectionTag eyebrow={eyebrow} title={title} subtitle={subtitle} />
      </Reveal>
      <div className={`mt-14 grid grid-cols-1 gap-7 ${colClass[columns] ?? colClass[3]}`}>
        {items.map((item, i) => (
          <Reveal
            key={item.title}
            direction="up"
            delay={stagger(i, 90)}
            className="vr-lift group flex flex-col items-center gap-3 rounded-2xl border border-navy-950/10 bg-white p-7 text-center"
          >
            <span className="vr-icon-pop inline-flex">
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-brand-600/25 bg-brand-50 text-brand-600">
                <Icon name={item.icon} className="h-6 w-6" />
              </span>
            </span>
            <p className="text-sm font-bold text-navy-950">{item.title}</p>
            <p className="text-xs leading-relaxed text-navy-950/55">
              {item.description}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
