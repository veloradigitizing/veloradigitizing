import type { Metadata } from "next";
import Link from "next/link";
import Hero from "../components/Hero";
import { Breadcrumb, SectionTag } from "../components/Section";
import Icon from "../components/Icon";
import ProcessSteps from "../components/ProcessSteps";
import CTABanner from "../components/CTABanner";

export const metadata: Metadata = {
  title: "Pricing | Vesper Digitizing",
  description:
    "Simple, transparent pricing for embroidery digitizing, vector conversion and rush orders.",
};

const PLANS = [
  {
    name: "Basic",
    price: "$6.99",
    unit: "/ design",
    description: "Great for simple logos and small text designs.",
    features: [
      "Up to 5,000 stitches",
      "Left chest / cap size",
      "1 free revision",
      "24-48 hr delivery",
      "DST, PES, EXP, JEF",
    ],
    highlighted: false,
  },
  {
    name: "Standard",
    price: "$12.99",
    unit: "/ design",
    description: "Best for detailed logos, jacket backs and patches.",
    features: [
      "Up to 15,000 stitches",
      "Any placement size",
      "3 free revisions",
      "12-24 hr delivery",
      "All embroidery formats",
      "Free vector file",
    ],
    highlighted: true,
  },
  {
    name: "Rush",
    price: "$19.99",
    unit: "/ design",
    description: "For urgent, complex or 3D puff designs.",
    features: [
      "Unlimited stitches",
      "Any placement size",
      "Unlimited revisions",
      "2-4 hr delivery",
      "All embroidery formats",
      "Priority support",
    ],
    highlighted: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <Hero
        eyebrow="Pricing"
        titleLines={[
          { text: "Simple, Transparent" },
          { text: "Pricing Plans", accent: true },
        ]}
        description="No hidden fees. Choose the plan that fits your project and get flawless embroidery files at a price that works for you."
      />

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
        <Breadcrumb current="Pricing" />
        <div className="mt-8">
          <SectionTag
            eyebrow="Our Plans"
            title="Choose Your Digitizing Plan"
            subtitle="All plans include high quality stitching, free file re-sends, and a 100% satisfaction guarantee."
          />
        </div>

        <div className="mt-14 grid grid-cols-1 gap-7 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-2xl p-8 ${
                plan.highlighted
                  ? "bg-navy-950 text-white shadow-xl lg:-translate-y-3"
                  : "border border-navy-950/10 bg-white text-navy-950"
              }`}
            >
              {plan.highlighted && (
                <span className="mb-4 w-fit rounded-full bg-brand-600 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                  Most Popular
                </span>
              )}
              <h3 className="font-serif text-xl font-bold">{plan.name}</h3>
              <p className={`mt-2 text-sm ${plan.highlighted ? "text-white/60" : "text-navy-950/55"}`}>
                {plan.description}
              </p>
              <p className="mt-6 flex items-baseline gap-1">
                <span className="font-serif text-4xl font-bold">{plan.price}</span>
                <span className={`text-sm ${plan.highlighted ? "text-white/50" : "text-navy-950/50"}`}>
                  {plan.unit}
                </span>
              </p>
              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <Icon
                      name="badge-check"
                      className={`h-4 w-4 shrink-0 ${plan.highlighted ? "text-brand-50" : "text-brand-600"}`}
                    />
                    <span className={plan.highlighted ? "text-white/80" : "text-navy-950/70"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`mt-8 flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold transition-colors ${
                  plan.highlighted
                    ? "bg-white text-navy-950 hover:bg-brand-50"
                    : "bg-brand-600 text-white hover:bg-brand-700"
                }`}
              >
                GET STARTED <span aria-hidden>&rarr;</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <ProcessSteps />
      <CTABanner />
    </>
  );
}
