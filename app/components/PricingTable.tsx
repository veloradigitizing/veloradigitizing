import Link from "next/link";
import { PRICING_PLANS, formatPrice } from "./pricing-data";

/**
 * Flat per-design digitizing prices. Plain component with no hooks, so it can
 * be rendered from both server pages and the client service pages.
 */
export default function PricingTable({
  title = "Embroidery Digitizing Prices",
  subtitle = "Flat prices per design. Send your artwork and we confirm the plan and exact price before any work starts.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section id="pricing" className="scroll-mt-24 bg-slate-50/70 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
            Pricing
          </p>
          <h2 className="mt-2 font-serif text-2xl font-bold text-navy-950 sm:text-3xl">
            {title}
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-navy-950/65">
            {subtitle}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-2xl p-7 ${
                plan.highlighted
                  ? "bg-navy-950 text-white shadow-xl"
                  : "border border-navy-950/10 bg-white text-navy-950"
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-xl font-bold">{plan.name}</h3>
                {plan.highlighted && (
                  <span className="rounded-full bg-brand-600 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                    Most popular
                  </span>
                )}
              </div>
              <p
                className={`mt-2 text-sm ${
                  plan.highlighted ? "text-white/60" : "text-navy-950/55"
                }`}
              >
                {plan.description}
              </p>
              <p className="mt-5 flex items-baseline gap-1">
                <span className="font-serif text-4xl font-bold">
                  {formatPrice(plan.price)}
                </span>
                <span
                  className={`text-sm ${
                    plan.highlighted ? "text-white/50" : "text-navy-950/50"
                  }`}
                >
                  per design
                </span>
              </p>
              <ul className="mt-6 flex-1 space-y-2.5 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <span
                      aria-hidden
                      className={`mt-[0.45em] h-1.5 w-1.5 shrink-0 rounded-full ${
                        plan.highlighted ? "bg-brand-400" : "bg-brand-600"
                      }`}
                    />
                    <span className={plan.highlighted ? "text-white/80" : "text-navy-950/70"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`vr-btn mt-8 inline-flex items-center justify-center rounded-md px-5 py-3 text-xs font-bold uppercase tracking-wide transition-colors ${
                  plan.highlighted
                    ? "bg-white text-navy-950 hover:bg-brand-50"
                    : "vr-btn-primary bg-brand-600 text-white hover:bg-brand-700"
                }`}
              >
                Get a Free Quote
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs text-navy-950/50">
          Stitch counts are estimated from your artwork before work starts. If a
          design needs a higher plan, we tell you first and you decide.
        </p>
      </div>
    </section>
  );
}
