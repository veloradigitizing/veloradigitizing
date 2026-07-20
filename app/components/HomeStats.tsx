import Icon, { IconName } from "./Icon";
import { Reveal } from "./Reveal";
import { stagger } from "./stagger";

export const DEFAULT_STATS: { icon: IconName; value: string; label: string }[] = [
  { icon: "award", value: "15,000+", label: "Projects Completed" },
  { icon: "smile", value: "8,000+", label: "Happy Clients" },
  { icon: "clock", value: "2-24 Hrs", label: "Turnaround Time" },
  { icon: "globe", value: "50+", label: "Countries Served" },
];

export default function HomeStats({
  stats = DEFAULT_STATS,
  variant = "default",
}: {
  stats?: { icon: IconName; value: string; label: string }[];
  variant?: "default" | "compact";
}) {
  return (
    <section className={variant === "compact" ? "bg-navy-950" : "bg-navy-950 py-12 lg:py-14"}>
      <div className={variant === "compact" ? "mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 py-10 sm:grid-cols-4 lg:px-10" : "mx-auto max-w-7xl px-5 lg:px-10"}>
        <div className={variant === "compact" ? "" : "grid grid-cols-2 gap-8 sm:grid-cols-4"}>
          {stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              direction="up"
              delay={stagger(i, 100)}
              className="flex items-center justify-center gap-3"
            >
              <Icon
                name={stat.icon}
                className="h-8 w-8 shrink-0 text-brand-50/80"
              />
              <div>
                <p className="font-serif text-2xl font-bold text-white">
                  {stat.value}
                </p>
                <p className="text-xs text-white/50">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
