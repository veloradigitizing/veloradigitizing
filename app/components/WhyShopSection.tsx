import Icon, { IconName } from "./Icon";
import { IconCircle, SectionTag } from "./Section";
import { Reveal } from "./Reveal";
import { stagger } from "./stagger";

export default function WhyShopSection({
  eyebrow = "Why Buy From Velora?",
  title = "Quality You Can Trust. Designs You Will Love.",
  items,
}: {
  eyebrow?: string;
  title?: string;
  items: { icon: IconName; title: string; description: string }[];
}) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
      <Reveal direction="up">
        <SectionTag eyebrow={eyebrow} title={title} />
      </Reveal>
      <div className="mt-14 grid grid-cols-2 gap-7 sm:grid-cols-3 lg:grid-cols-6">
        {items.map((item, i) => (
          <Reveal
            key={item.title}
            direction="up"
            delay={stagger(i, 80)}
            className="group flex flex-col items-center gap-3 text-center transition-transform duration-300 hover:-translate-y-1"
          >
            <span className="vr-icon-pop">
              <IconCircle icon={item.icon} size="md" />
            </span>
            <p className="text-xs font-bold text-navy-950">{item.title}</p>
            <p className="[11px] leading-relaxed text-navy-950/50">
              {item.description}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
