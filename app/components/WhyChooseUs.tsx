import { IconName } from "./Icon";
import { IconCircle, SectionTag } from "./Section";

const COLS: Record<number, string> = {
  3: "sm:grid-cols-3",
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
    <section className="bg-navy-950 py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <SectionTag eyebrow={eyebrow} title={title} dark />
        <div
          className={`mt-12 grid grid-cols-2 gap-4 ${COLS[columns] ?? COLS[6]}`}
        >
          {items.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center gap-3 rounded-xl border border-white/10 px-4 py-8 text-center"
            >
              <IconCircle icon={item.icon} dark size={item.description ? "lg" : "md"} />
              <p className="text-sm font-semibold text-white">{item.title}</p>
              {item.description && (
                <p className="text-xs text-white/50">{item.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
