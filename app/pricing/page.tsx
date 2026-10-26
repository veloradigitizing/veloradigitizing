import type { Metadata } from "next";
import Link from "next/link";
import PricingTable from "../components/PricingTable";
import StitchCountCalculator from "../components/StitchCountCalculator";
import { FAQ } from "../components/FAQ";
import CTABanner from "../components/CTABanner";
import Icon from "../components/Icon";

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

const PRICING_FAQS = [
  {
    question: "How do your flat-rate digitizing prices work?",
    answer:
      "We quote simple, transparent flat rates based on the placement and size of your design (such as standard left chest and cap logos for $8, up to large jacket backs for $25). Unlike other services, we never charge extra per stitch count surprise fees or per-color changes.",
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
      "Yes. For commercial embroidery shops, apparel decorators, and contract embroiderers running 10+ designs per week, we offer custom monthly billing and volume discount packages. Contact us directly to set up a trade account.",
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
        {/* Header Banner */}
        <section className="relative bg-navy-950 pb-20 pt-32 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-900/30 via-navy-950 to-navy-950 pointer-events-none" />
          <div className="relative mx-auto max-w-7xl px-5 lg:px-10">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="text-xs text-white/50 mb-6">
              <Link href="/" className="hover:text-brand-300 transition-colors">
                Home
              </Link>
              <span className="mx-2">&rsaquo;</span>
              <span className="text-brand-400 font-semibold">Pricing</span>
            </nav>

            <span className="inline-block rounded-full bg-brand-500/15 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-brand-300 border border-brand-500/25">
              Transparent Flat Rates
            </span>
            <h1 className="mt-4 font-serif text-3xl font-bold sm:text-4xl md:text-5xl text-white">
              Embroidery Digitizing <span className="text-brand-400">Pricing &amp; Plans</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base text-white/75 sm:text-lg leading-relaxed">
              Straightforward pricing with zero stitch surcharges. Send your artwork and get a guaranteed quote in under 1 hour with free revisions and all machine formats included.
            </p>

            {/* Quick Guarantees Strip */}
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 pt-6 border-t border-white/10 text-xs sm:text-sm text-white/80">
              <div className="flex items-center gap-2">
                <Icon name="clock" className="h-4 w-4 text-brand-400 shrink-0" />
                <span>24h Turnaround</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="refresh" className="h-4 w-4 text-brand-400 shrink-0" />
                <span>Unlimited Revisions</span>
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

        {/* Pricing Table Section */}
        <PricingTable
          title="Simple, Transparent Flat Rates"
          subtitle="No per-stitch surprise fees. What you see is what you pay."
        />

        {/* Interactive Stitch Count Calculator */}
        <section className="border-t border-navy-950/10 bg-white py-16 lg:py-20">
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

            <div className="rounded-2xl border border-navy-950/10 bg-slate-50/70 p-6 sm:p-10 shadow-sm">
              <StitchCountCalculator />
            </div>
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
