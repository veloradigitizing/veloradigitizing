import Icon, { IconName } from "./Icon";
import { Reveal } from "./Reveal";
import { stagger } from "./stagger";
export function SectionTag({
  eyebrow,
  title,
  subtitle,
  dark = false,
  center = true,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
  center?: boolean;
}) {
  return (
    <div className={center ? "text-center" : ""}>
      <p
        className={`text-xs font-bold uppercase tracking-[0.2em] ${
          dark ? "text-brand-50/70" : "text-brand-600"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 font-serif text-3xl font-bold sm:text-4xl ${
          dark ? "text-white" : "text-navy-950"
        }`}
      >
        {title}
      </h2>
      <div
        className={`mt-4 h-[3px] w-16 rounded-full bg-brand-600 ${
          center ? "mx-auto" : ""
        }`}
      />
      {subtitle && (
        <p
          className={`mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed ${
            dark ? "text-white/60" : "text-navy-950/60"
          } ${center ? "text-center" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

const HERO_FEATURES: { icon: IconName; title: string; sub: string }[] = [
  { icon: "clock", title: "Fast Turnaround", sub: "Under 1-2 business days" },
  { icon: "award", title: "High Quality", sub: "Premium materials & craftsmanship" },
  { icon: "headset", title: "24/7 Support", sub: "Round-the-clock customer assistance" },
  { icon: "shield", title: "100% Satisfaction", sub: "Guaranteed or your money back" },
];

export function HeroFeatures() {
  return (
    <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
      {HERO_FEATURES.map((f) => (
        <div
          key={f.title}
          className="group flex flex-col items-center gap-3 text-center transition-transform duration-300 hover:-translate-y-1"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-full border border-navy-950/10 bg-white shadow-sm transition-colors duration-300 group-hover:border-brand-600/30 group-hover:bg-brand-50">
            <Icon
              name={f.icon}
              className="h-6 w-6 shrink-0 text-navy-950 transition-colors duration-300 group-hover:text-brand-600"
              strokeWidth={1.8}
            />
          </span>
          <div className="leading-tight">
            <p className="text-sm font-bold text-navy-950">{f.title}</p>
            <p className="mt-1 text-xs text-navy-950/55">{f.sub}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function Breadcrumb({ current }: { current: string }) {
  return (
    <p className="text-sm text-navy-950/50">
      <span className="text-brand-600">Home</span>
      <span className="mx-2">&rsaquo;</span>
      <span>{current}</span>
    </p>
  );
}

export function StatsBar({
  stats,
}: {
  stats: { icon: IconName; value: string; label: string }[];
}) {
  return (
    <div className="bg-navy-950">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 py-10 sm:grid-cols-4 lg:px-10">
        {stats.map((s, i) => (
          <Reveal
            key={s.label}
            direction="up"
            delay={stagger(i, 100)}
            className="flex items-center justify-center gap-3"
          >
            <Icon name={s.icon} className="h-8 w-8 shrink-0 text-brand-50/80" />
            <div>
              <p className="font-serif text-2xl font-bold text-white">
                {s.value}
              </p>
              <p className="text-xs text-white/50">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export function IconCircle({
  icon,
  size = "md",
  dark = false,
}: {
  icon: IconName;
  size?: "sm" | "md" | "lg";
  dark?: boolean;
}) {
  const dims = { sm: "h-10 w-10", md: "h-14 w-14", lg: "h-16 w-16" }[size];
  const iconDims = { sm: "h-4 w-4", md: "h-6 w-6", lg: "h-7 w-7" }[size];
  return (
    <span
      className={`flex ${dims} shrink-0 items-center justify-center rounded-full transition-transform duration-300 ${
        dark
          ? "bg-white/10 text-white"
          : "bg-brand-600 text-white"
      }`}
    >
      <Icon name={icon} className={iconDims} strokeWidth={1.6} />
    </span>
  );
}

export function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5 text-gold-400">
      {Array.from({ length: count }).map((_, i) => (
        <Icon key={i} name="star" className="h-4 w-4" filled />
      ))}
    </div>
  );
}
