import Icon, { IconName } from "./Icon";
import { SectionTag } from "./Section";
import { Reveal } from "./Reveal";
import { stagger } from "./stagger";
const COLS: Record<number, string> = {
  3: "sm:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
  6: "sm:grid-cols-3 lg:grid-cols-6",
  7: "sm:grid-cols-3 lg:grid-cols-7",
};

export default function WhyChooseUs({
  eyebrow,
  title,
  items,
  columns = 6,
}: {
  eyebrow: string;
  title: string;
  items: { icon: IconName; title: string; description?: string }[];
  columns?: number;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-800 py-16">
      <div className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full bg-brand-500/20 blur-3xl vr-float-soft" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-brand-400/10 blur-3xl vr-float-soft" style={{ animationDelay: "1.8s" }} />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal direction="up">
          <SectionTag eyebrow={eyebrow} title={title} dark />
        </Reveal>
        <div
          className={`mt-12 grid grid-cols-2 gap-4 ${COLS[columns] ?? COLS[6]}`}
        >
          {items.map((item, i) => (
            <Reveal
              key={item.title}
              direction="up"
              delay={stagger(i, 80)}
              className="vr-lift group flex flex-col items-center gap-3 rounded-xl border border-white/15 bg-white/[0.03] px-4 py-8 text-center transition-colors hover:border-white/30 hover:bg-white/[0.06]"
            >
              <span className="vr-icon-pop inline-flex text-white">
                <Icon name={item.icon} className="h-8 w-8" strokeWidth={1.75} />
              </span>
              <p className="text-sm font-semibold text-white">{item.title}</p>
              {item.description && (
                <p className="text-xs text-white/50">{item.description}</p>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
