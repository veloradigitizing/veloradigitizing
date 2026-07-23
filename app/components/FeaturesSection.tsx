"use client";

import Icon, { type IconName } from "./Icon";
import { Reveal } from "./Reveal";

type Feature = { icon: IconName; title: string; desc: string };

const FEATURES: Feature[] = [
  {
    icon: "diamond",
    title: "Premium Quality",
    desc: "Flawless stitches, every single time",
  },
  {
    icon: "zap",
    title: "Fast Delivery",
    desc: "8 to 24 hour turnaround on orders",
  },
  {
    icon: "award",
    title: "100% Accuracy",
    desc: "Perfect stitch path optimization",
  },
  {
    icon: "globe",
    title: "Global Clients",
    desc: "Trusted by brands in 50+ countries",
  },
  {
    icon: "refresh",
    title: "Free Revisions",
    desc: "We refine until it is exactly right",
  },
  {
    icon: "headset",
    title: "24/7 Support",
    desc: "Round-the-clock team at your service",
  },
];

export default function FeaturesSection() {
  return (
    <section
      aria-label="Key features"
      className="relative z-20 bg-navy-950 py-10 shadow-2xl sm:py-14"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal direction="up">
          <div className="grid grid-cols-2 divide-x divide-white/20 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
            {FEATURES.map((f) => {
              return (
                <div
                  key={f.title}
                  className="group relative flex flex-col items-center justify-start text-center px-3 sm:px-5 py-4"
                >
                  <span className="pointer-events-none absolute -inset-2 rounded-2xl bg-brand-500/0 blur-xl transition-all duration-500 group-hover:bg-brand-500/20" />

                  <span className="relative mb-3 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-500/15 text-brand-50 ring-1 ring-brand-500/30 transition-all duration-500 group-hover:scale-110 group-hover:bg-brand-500 group-hover:text-white group-hover:ring-brand-500">
                    <Icon name={f.icon} className="h-6 w-6 transition-transform duration-500 group-hover:scale-110" strokeWidth={1.8} />
                  </span>

                  <div className="relative w-full text-center">
                    <div className="flex min-h-8 items-center justify-center text-xs font-bold uppercase tracking-wider text-white sm:min-h-5 sm:text-sm">
                      {f.title}
                    </div>
                    <div className="mt-1 flex min-h-10 items-start justify-center text-[11px] leading-snug text-white/60 sm:text-xs">
                      {f.desc}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
