/**
 * Published digitizing plans. Shown on the services pages and used by the
 * stitch count calculator to suggest a plan. Keep in sync with real pricing.
 */
export type PricingPlan = {
  name: string;
  price: number;
  maxStitches: number | null;
  description: string;
  features: string[];
  highlighted: boolean;
};

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Basic",
    price: 6.99,
    maxStitches: 5000,
    description: "Simple logos, small text and most left chest or cap designs.",
    features: [
      "Up to 5,000 stitches",
      "Left chest or cap size",
      "1 free revision",
      "24 to 48 hour delivery",
      "DST, PES, EXP, JEF",
    ],
    highlighted: false,
  },
  {
    name: "Standard",
    price: 12.99,
    maxStitches: 15000,
    description: "Detailed logos, jacket backs, applique and patch files.",
    features: [
      "Up to 15,000 stitches",
      "Any placement size",
      "3 free revisions",
      "12 to 24 hour delivery",
      "All embroidery formats",
      "Free vector file",
    ],
    highlighted: true,
  },
  {
    name: "Rush",
    price: 19.99,
    maxStitches: null,
    description: "Urgent, complex or 3D puff designs.",
    features: [
      "Unlimited stitches",
      "Any placement size",
      "Unlimited revisions",
      "2 to 4 hour delivery",
      "All embroidery formats",
      "Priority support",
    ],
    highlighted: false,
  },
];

export const PRICE_FROM = Math.min(...PRICING_PLANS.map((p) => p.price));
export const PRICE_TO = Math.max(...PRICING_PLANS.map((p) => p.price));

export function formatPrice(value: number) {
  return `$${value.toFixed(2)}`;
}

/** The cheapest plan whose stitch limit covers the given count. */
export function planForStitches(stitches: number): PricingPlan {
  return (
    PRICING_PLANS.find((p) => p.maxStitches !== null && stitches <= p.maxStitches) ??
    PRICING_PLANS[PRICING_PLANS.length - 1]
  );
}
