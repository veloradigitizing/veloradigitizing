import type { Metadata } from "next";
import Link from "next/link";
import PricingTable from "../components/PricingTable";
import StitchCountCalculator from "../components/StitchCountCalculator";
import { FAQ } from "../components/FAQ";
import CTABanner from "../components/CTABanner";
import Icon, { IconName } from "../components/Icon";

export const metadata: Metadata = {
  title: "Embroidery Digitizing Pricing & Rates | Flat Prices from $8",
  description:
    "Transparent embroidery digitizing pricing starting from $8 per design. Left chest, cap logos, 3D puff, and jacket backs with free revisions & 24h turnaround.",
  alternates: {
    canonical: "https://www.veloradigitizing.com/pricing",
  },
  openGraph: {
    title: "Embroidery Digitizing Pricing & Rates | Velora Digitizing",
    description:
      "Simple, flat-rate pricing per design with no hidden stitch surcharges. Commercial machine files delivered in 24 hours.",
    url: "https://www.veloradigitizing.com/pricing",
    siteName: "Velora Digitizing",
    images: [
      {
        url: "/images/og/og-services.jpg",
        width: 1200,
        height: 630,
        alt: "Velora Digitizing Pricing Table and Transparent Rates",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Embroidery Digitizing Pricing & Rates | Velora Digitizing",
    description:
      "Flat prices from $8 per design. Free revisions, multi-format delivery, and 24-hour turnaround.",
    images: ["/images/og/og-services.jpg"],
  },
};

const DETAILED_PRICE_MATRIX = [
  {
    service: "Left Chest Logo Digitizing",
    idealFor: "Polo shirts, company uniforms, t-shirts, scrub tops",
    sizeLimit: "Up to 4.0\" × 4.0\"",
    turnaround: "8 – 24 Hours",
    price: "$8.00",
    popular: true,
  },
  {
    service: "Cap & Hat Logo Digitizing",
    idealFor: "Structured snapbacks, baseball caps, dad hats, beanies",
    sizeLimit: "Up to 2.5\" H × 4.5\" W",
    turnaround: "8 – 24 Hours",
    price: "$8.00",
    popular: true,
  },
  {
    service: "3D Puff Foam Digitizing",
    idealFor: "Raised dimensional cap fronts, hoodies, heavy beanies",
    sizeLimit: "Up to 2.75\" H × 5.0\" W",
    turnaround: "8 – 24 Hours",
    price: "$12.00",
    popular: false,
  },
  {
    service: "Applique Digitizing",
    idealFor: "Varsity jackets, cheer jerseys, sports lettering",
    sizeLimit: "Up to 8.0\" × 8.0\"",
    turnaround: "12 – 24 Hours",
    price: "$12.00",
    popular: false,
  },
  {
    service: "Mid-Size / Sleeve / Pocket",
    idealFor: "Hoodie sleeves, tote bags, pant legs, apron bibs",
    sizeLimit: "Up to 6.0\" × 6.0\"",
    turnaround: "12 – 24 Hours",
    price: "$14.00",
    popular: false,
  },
  {
    service: "Jacket Back / Large Format",
    idealFor: "Denim jackets, biker vests, varsity back panels",
    sizeLimit: "Up to 12.0\" × 12.0\"+",
    turnaround: "12 – 24 Hours",
    price: "$18 – $25",
    popular: false,
  },
  {
    service: "Vector Artwork Conversion",
    idealFor: "Screen printing, vinyl cutting, sublimation, signage",
    sizeLimit: "Infinite vector scale",
    turnaround: "12 – 24 Hours",
    price: "$10 – $20",
    popular: false,
  },
];

const VALUE_PROPOSITIONS: { icon: IconName; title: string; desc: string }[] = [
  {
    icon: "refresh",
    title: "100% Free Unlimited Revisions",
    desc: "Need density adjusted for fleece, size scaled ±15%, or push-pull compensation tuned for stretch knits? We make free tweaks until your sewout runs cleanly.",
  },
  {
    icon: "layers",
    title: "All Machine Formats Included",
    desc: "Every order ships with DST, PES, EXP, JEF, VP3, HUS, and XXX files plus a printable thread run sheet PDF. No conversion fees ever.",
  },
  {
    icon: "shield",
    title: "Zero Stitch Count Surprises",
    desc: "We quote transparent flat rates. You never get hit with extra $1 per 1,000 stitches surcharges after your file is punched.",
  },
  {
    icon: "clock",
    title: "Fast 8 to 24-Hour Delivery",
    desc: "Standard orders deliver within 8 to 24 hours. Emergency rush orders (under 4 to 8 hours) are available for urgent production runs.",
  },
  {
    icon: "smile",
    title: "Manual Punching by Experts",
    desc: "Every node and stitch path is set by hand in industrial software by senior digitizers with 12+ years of experience — zero auto-tracing.",
  },
  {
    icon: "badge-check",
    title: "Commercial Licensing Rights",
    desc: "Full rights to stitch and sell your finished embroidered apparel, caps, and patches commercially with zero royalty obligations.",
  },
];

const TURNAROUND_TIERS = [
  {
    tier: "Standard Turnaround",
    time: "8 – 24 Hours",
    cost: "Included Free",
    description: "Ideal for everyday apparel production, quote requests, and store orders.",
    badge: "Most Popular",
  },
  {
    tier: "Rush Delivery",
    time: "6 – 12 Hours",
    cost: "+$5.00 Flat",
    description: "Priority queue placement for tight embroidery machine deadlines.",
    badge: "Urgent Orders",
  },
  {
    tier: "Super Rush Emergency",
    time: "Under 4 Hours",
    cost: "Contact Support",
    description: "Dedicated digitizer on stand-by. Connect directly on WhatsApp.",
    badge: "Same-Day Run",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Upload Your Artwork",
    desc: "Send your JPG, PNG, PDF, AI, or smartphone photo along with desired placement (cap, chest, jacket) and garment fabric.",
  },
  {
    num: "02",
    title: "Get Flat Quote in 1h",
    desc: "We review the detail and confirm the guaranteed flat price (starting at $8) with no hidden fees before work starts.",
  },
  {
    num: "03",
    title: "Master Digitizing & Test Run",
    desc: "Our senior digitizers calibrate underlay, pull compensation, and stitch direction, then simulate the file for zero thread breaks.",
  },
  {
    num: "04",
    title: "Download Production Files",
    desc: "Receive your clean ZIP archive with DST, PES, and all formats plus color sequence sheet. Free revisions on request anytime.",
  },
];

const PRICING_FAQS = [
  {
    question: "How do your flat-rate digitizing prices work?",
    answer:
      "We quote simple, transparent flat rates based on the placement and size of your design (such as standard left chest and cap logos for $8, up to large jacket backs for $18–$25). Unlike other digitizing houses, we never charge extra per stitch count surprise fees or per-color charges.",
  },
  {
    question: "Do you charge extra for rush turnaround?",
    answer:
      "Our standard delivery turnaround is 8 to 24 hours at no extra charge. If you have an urgent order requiring turnaround in under 6 to 12 hours, rush service is available for a modest $5 surcharge upon request.",
  },
  {
    question: "Are revisions and minor format adjustments really free?",
    answer:
      "Yes, 100%. If you need stitch density adjusted for a different fabric (such as switching from pique knit to heavy fleece), needle sizes changed, or size scaled within ±15%, our senior digitizers provide free adjustments until your sewout runs perfectly.",
  },
  {
    question: "What machine embroidery formats are included in the price?",
    answer:
      "Every purchase includes all standard commercial and home machine formats (DST, PES, EXP, JEF, VP3, HUS, XXX) along with a complete stitch PDF production sheet. You never pay extra for additional formats.",
  },
  {
    question: "Do you offer discounts for high-volume shops?",
    answer:
      "Yes. For commercial embroidery shops, apparel decorators, and contract embroiderers running 10+ designs per week, we offer custom monthly billing and volume discount packages up to 30% off. Contact us directly to set up a trade account.",
  },
  {
    question: "What if my design does not sew out cleanly?",
    answer:
      "We stand behind our work with a 100% money-back guarantee. If a design experiences thread breaks, birdnesting, or registration issues, send us a photo of the sewout and machine tension details. We will troubleshoot and repunch the file for free, or issue a full refund.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit and debit cards (Visa, MasterCard, American Express), PayPal, and direct WhatsApp invoice confirmation. Invoices are generated with transparent USD pricing.",
  },
  {
    question: "Can you digitize 3D puff foam and small micro-text?",
    answer:
      "Yes, absolutely. We specialize in 3D puff cap digitizing with reinforced underlay columns and high-density satin caps ($12 flat), as well as micro-lettering down to 4mm with specialized 60-weight thread settings.",
  },
];

const pricingJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.veloradigitizing.com/pricing#webpage",
      "name": "Embroidery Digitizing Pricing & Rates",
      "url": "https://www.veloradigitizing.com/pricing",
      "description":
        "Flat-rate pricing for professional commercial embroidery digitizing and vector conversion services.",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.veloradigitizing.com",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Pricing",
            "item": "https://www.veloradigitizing.com/pricing",
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.veloradigitizing.com/pricing#faq",
      "mainEntity": PRICING_FAQS.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer,
        },
      })),
    },
  ],
};

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pricingJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <main className="bg-white">
        {/* Header Hero Banner */}
        <section className="relative bg-navy-950 pb-20 pt-32 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-900/30 via-navy-950 to-navy-950 pointer-events-none" />
          <div className="relative mx-auto max-w-7xl px-5 lg:px-10">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="text-xs text-white/50 mb-6">
              <Link href="/" className="hover:text-brand-300 transition-colors">
                Home
              </Link>
              <span className="mx-2">&rsaquo;</span>
              <span className="text-brand-400 font-semibold">Pricing &amp; Plans</span>
            </nav>

            <span className="inline-block rounded-full bg-brand-500/15 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-brand-300 border border-brand-500/25">
              Transparent Flat Rates
            </span>
            <h1 className="mt-4 font-serif text-3xl font-bold sm:text-4xl md:text-5xl text-white">
              Embroidery Digitizing <span className="text-brand-400">Pricing &amp; Rates</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base text-white/75 sm:text-lg leading-relaxed">
              Transparent, flat-rate pricing per design with zero stitch surcharges. Commercial machine files delivered in 8 to 24 hours with free unlimited revisions and all formats included.
            </p>

            {/* Quick Guarantees Strip */}
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 pt-6 border-t border-white/10 text-xs sm:text-sm text-white/80">
              <div className="flex items-center gap-2">
                <Icon name="clock" className="h-4 w-4 text-brand-400 shrink-0" />
                <span>8 – 24h Turnaround</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="refresh" className="h-4 w-4 text-brand-400 shrink-0" />
                <span>Unlimited Free Revisions</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="layers" className="h-4 w-4 text-brand-400 shrink-0" />
                <span>All Machine Formats</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="shield" className="h-4 w-4 text-brand-400 shrink-0" />
                <span>100% Sewout Guarantee</span>
              </div>
            </div>
          </div>
        </section>

        {/* Flat Rate Pricing Cards */}
        <PricingTable
          title="Simple, Transparent Flat Rates"
          subtitle="No per-stitch surprise fees. What you see is what you pay."
        />

        {/* Comprehensive Placement & Price Matrix Table */}
        <section className="bg-white py-16 lg:py-20 border-t border-navy-950/10">
          <div className="mx-auto max-w-7xl px-5 lg:px-10">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
                Detailed Rates
              </span>
              <h2 className="mt-2 font-serif text-2xl font-bold text-navy-950 sm:text-3xl">
                Placement &amp; Size Price Matrix
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-navy-950/65">
                Every project is priced according to design placement, dimensions, and production complexity. Compare our rates below:
              </p>
            </div>

            <div className="mt-8 overflow-hidden rounded-2xl border border-navy-950/10 shadow-sm bg-white">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-50 text-navy-950 font-bold uppercase tracking-wider text-xs border-b border-navy-950/10">
                    <tr>
                      <th className="py-4 px-6">Service &amp; Placement</th>
                      <th className="py-4 px-6">Ideal Garment / Usage</th>
                      <th className="py-4 px-6">Standard Size</th>
                      <th className="py-4 px-6">Turnaround</th>
                      <th className="py-4 px-6 text-right">Flat Rate</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-navy-950/5 text-navy-950/80">
                    {DETAILED_PRICE_MATRIX.map((row) => (
                      <tr key={row.service} className="hover:bg-slate-50/50 transition-colors">
                        <td className="py-4 px-6 font-semibold text-navy-950">
                          {row.service}
                          {row.popular && (
                            <span className="ml-2 rounded-full bg-brand-50 text-brand-600 px-2 py-0.5 text-[10px] font-bold">
                              Popular
                            </span>
                          )}
                        </td>
                        <td className="py-4 px-6 text-xs sm:text-sm text-navy-950/70">
                          {row.idealFor}
                        </td>
                        <td className="py-4 px-6 text-xs sm:text-sm font-mono text-navy-950/60">
                          {row.sizeLimit}
                        </td>
                        <td className="py-4 px-6 text-xs sm:text-sm">
                          {row.turnaround}
                        </td>
                        <td className="py-4 px-6 text-right font-serif text-base font-bold text-brand-600">
                          {row.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included Grid */}
        <section className="bg-slate-50/60 py-16 lg:py-20 border-t border-navy-950/10">
          <div className="mx-auto max-w-7xl px-5 lg:px-10">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
                Velora Standards
              </span>
              <h2 className="mt-2 font-serif text-2xl font-bold text-navy-950 sm:text-3xl">
                What&apos;s Included In Every Order
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-navy-950/65">
                We believe in complete transparency. Every file delivered by Velora Digitizing includes our full commercial feature suite at zero extra cost.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {VALUE_PROPOSITIONS.map((prop) => (
                <div
                  key={prop.title}
                  className="rounded-2xl border border-navy-950/10 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600">
                    <Icon name={prop.icon} className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-serif text-lg font-bold text-navy-950">
                    {prop.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-950/70">
                    {prop.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Turnaround Options */}
        <section className="bg-white py-16 lg:py-20 border-t border-navy-950/10">
          <div className="mx-auto max-w-7xl px-5 lg:px-10">
            <div className="max-w-2xl mb-10">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
                Speed &amp; Delivery
              </span>
              <h2 className="mt-2 font-serif text-2xl font-bold text-navy-950 sm:text-3xl">
                Turnaround &amp; Rush Options
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-navy-950/65">
                Choose the turnaround that fits your production schedule. Fast, reliable delivery so your embroidery machines never sit idle.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {TURNAROUND_TIERS.map((tier) => (
                <div
                  key={tier.tier}
                  className="rounded-2xl border border-navy-950/10 bg-slate-50/50 p-6 flex flex-col justify-between"
                >
                  <div>
                    <span className="rounded-full bg-brand-600/10 text-brand-600 px-3 py-1 text-xs font-bold uppercase tracking-wider">
                      {tier.badge}
                    </span>
                    <h3 className="mt-4 font-serif text-xl font-bold text-navy-950">
                      {tier.tier}
                    </h3>
                    <p className="mt-2 font-serif text-3xl font-bold text-brand-600">
                      {tier.time}
                    </p>
                    <p className="mt-1 text-xs font-bold uppercase tracking-wider text-navy-950/60">
                      Cost: {tier.cost}
                    </p>
                    <p className="mt-3 text-sm text-navy-950/70 leading-relaxed">
                      {tier.description}
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="mt-6 inline-flex items-center justify-center rounded-lg border border-navy-950/15 bg-white py-2.5 text-xs font-bold uppercase tracking-wider text-navy-950 transition-colors hover:border-brand-600 hover:text-brand-600"
                  >
                    Select Option
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Stitch Count Calculator */}
        <section className="border-t border-navy-950/10 bg-slate-50/70 py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-5 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
                Interactive Tool
              </span>
              <h2 className="mt-2 font-serif text-2xl font-bold text-navy-950 sm:text-3xl">
                Estimate Your Stitch Count &amp; Cost
              </h2>
              <p className="mt-3 text-sm sm:text-base text-navy-950/65 leading-relaxed">
                Enter your artwork&apos;s dimensions and style below to get an instant calculation of density, stitch count, and recommended flat-rate plan.
              </p>
            </div>

            <div className="rounded-2xl border border-navy-950/10 bg-white p-6 sm:p-10 shadow-sm">
              <StitchCountCalculator />
            </div>
          </div>
        </section>

        {/* 4-Step How It Works Process */}
        <section className="bg-white py-16 lg:py-20 border-t border-navy-950/10">
          <div className="mx-auto max-w-7xl px-5 lg:px-10">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
                Simple Workflow
              </span>
              <h2 className="mt-2 font-serif text-2xl font-bold text-navy-950 sm:text-3xl">
                How Ordering Works
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-navy-950/65">
                From initial artwork upload to stitching out on your machine in 4 simple steps:
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {STEPS.map((step) => (
                <div key={step.num} className="relative">
                  <span className="font-serif text-4xl font-extrabold text-brand-600/20">
                    {step.num}
                  </span>
                  <h3 className="mt-2 font-serif text-lg font-bold text-navy-950">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-950/70">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Wholesale B2B Volume Discount Strip */}
        <section className="bg-navy-950 text-white py-12 border-t border-white/10">
          <div className="mx-auto max-w-7xl px-5 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-3 py-1 text-xs font-bold uppercase tracking-wider">
                B2B &amp; Contract Decorators
              </span>
              <h2 className="mt-3 font-serif text-2xl font-bold">
                Run 10+ Embroidery Logos Per Week?
              </h2>
              <p className="mt-1 text-sm text-white/70 max-w-xl">
                Unlock wholesale trade pricing with dedicated senior digitizers, 30% volume discounts, and monthly consolidated invoicing.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 rounded-lg bg-emerald-500 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-navy-950 transition-colors hover:bg-emerald-400"
            >
              Apply for Trade Account &rarr;
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ
          items={PRICING_FAQS}
          title="Frequently Asked Pricing Questions"
          subtitle="Everything you need to know about our turnarounds, payment options, and revision policy."
        />

        {/* Bottom CTA Banner */}
        <CTABanner
          title="Ready to Digitize Your First Logo?"
          subtitle="Send your vector, JPEG, or sketch. We confirm the exact price and deliver production-ready embroidery files in under 24 hours."
          ctaLabel="Get a Free Quote"
          href="/contact"
        />
      </main>
    </>
  );
}
