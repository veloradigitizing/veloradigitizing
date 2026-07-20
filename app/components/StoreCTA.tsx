import Icon, { IconName } from "./Icon";
import { Reveal } from "./Reveal";

export default function StoreCTA({
  title = "Need a Custom Patch Design?",
  subtitle = "Cannot find what you need? We can digitize any logo or design into a custom patch for you.",
  ctaLabel = "GET CUSTOM QUOTE",
  ctaHref = "/contact",
  features = [
    { icon: "rocket" as IconName, label: "Super Fast Turnaround" },
    { icon: "award" as IconName, label: "High Quality Stitching" },
    { icon: "refresh" as IconName, label: "Unlimited Revisions" },
    { icon: "shield" as IconName, label: "100 Percent Satisfaction Guaranteed" },
  ],
}: {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  features?: { icon: IconName; label: string }[];
}) {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-10">
      <Reveal
        direction="up"
        className="vr-lift group flex flex-col gap-8 rounded-2xl bg-navy-950 p-9 lg:flex-row lg:items-center lg:justify-between"
      >
        <div>
          <h3 className="font-serif text-2xl font-bold text-white">
            {title}
          </h3>
          <p className="mt-2 max-w-md text-sm text-white/60">
            {subtitle}
          </p>
          <a
            href={ctaHref}
            className="vr-btn vr-btn-primary mt-5 inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-navy-950 hover:bg-brand-50"
          >
            {ctaLabel}{" "}
            <span aria-hidden className="vr-arrow">
              →
            </span>
          </a>
        </div>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.label}
              className="flex flex-col items-center gap-2 text-center"
            >
              <span className="vr-icon-pop flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors group-hover:bg-white/15">
                <Icon name={f.icon} className="h-5 w-5" />
              </span>
              <p className="max-w-[6.5rem] [11px] text-white/60">{f.label}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
