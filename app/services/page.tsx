import type { Metadata } from "next";
import Hero from "../components/Hero";
import servicesBg from "../images/velora-embroidery-workstation.webp";
import Link from "next/link";
import ServiceOrderDetails from "../components/ServiceOrderDetails";
import WhyChooseUs from "../components/WhyChooseUs";
import CTABanner from "../components/CTABanner";
import TestimonialCTASection from "../components/TestimonialCTASection";
import { FAQ, SERVICES_FAQS } from "../components/FAQ";
import PortfolioSection from "../components/PortfolioSection";
import RelatedGuides from "../components/RelatedGuides";
import PricingTable from "../components/PricingTable";
import RelatedServicesNav from "../components/RelatedServicesNav";

export const metadata: Metadata = {
  title: { absolute: "Embroidery Digitizing Services & Prices | Velora Digitizing" },
  description:
    "Compare cap, 3D puff and applique digitizing services. See per-design prices, delivery plans and the artwork details needed for your embroidery quote.",
  alternates: {
    canonical: "https://www.veloradigitizing.com/services",
  },
  openGraph: {
    title: "Embroidery Digitizing Services & Prices | Velora Digitizing",
    description:
      "Choose the right digitizing service for your garment, compare pricing plans and prepare your artwork for a quote.",
    url: "https://www.veloradigitizing.com/services",
    siteName: "Velora Digitizing",
    images: [
      {
        url: "/images/og/og-services.jpg",
        width: 1200,
        height: 630,
        alt: "Velora Digitizing Services — Logo, 3D Puff, Cap & Patch Digitizing",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Embroidery Digitizing Services & Prices | Velora Digitizing",
    description:
      "Compare embroidery digitizing services, per-design prices and delivery plans before sending your artwork for a quote.",
    images: ["/images/og/og-services.jpg"],
  },
};

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Custom Embroidery Digitizing Services",
      "provider": {
        "@type": "Organization",
        "name": "Velora Digitizing",
        "url": "https://www.veloradigitizing.com",
      },
      "serviceType": "Embroidery Digitizing",
      "description":
        "Professional digitization of logos and artwork into commercial embroidery machine files (DST, PES, EXP, JEF) for left chest, caps, jackets, and patches.",
      "areaServed": ["United States", "Canada", "United Kingdom", "Worldwide"],
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "USD",
        "lowPrice": "6.99",
        "highPrice": "19.99",
        "offerCount": 3,
        "url": "https://www.veloradigitizing.com/services#pricing",
      },
    },
    {
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
          "name": "Services",
          "item": "https://www.veloradigitizing.com/services",
        },
      ],
    },
  ],
};

const WHY_ITEMS: {
  icon: "award" | "rocket" | "refresh" | "tag" | "headset" | "shield";
  title: string;
}[] = [
    { icon: "award", title: "High Quality Stitching" },
    { icon: "rocket", title: "Super Fast Delivery" },
    { icon: "refresh", title: "Revisions Included by Plan" },
    { icon: "tag", title: "Affordable Pricing" },
    { icon: "headset", title: "24/7 Customer Support" },
    { icon: "shield", title: "100% Satisfaction Guaranteed" },
  ];

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <Hero
        eyebrow="What We Digitize"
        titleLines={[
          { text: "Embroidery Digitizing" },
          { text: "Services for Every Garment", accent: true },
        ]}
        description="Choose a stitch file prepared for your garment, logo size and embroidery technique. Compare cap, 3D puff and applique services, check prices, and send the production details needed for a quote."
        bgImage={servicesBg}
        imageLabel="Professional Velora embroidery digitizing workspace"
        features={[
          { icon: "clock", title: "Delivery Plans", sub: "Timing confirmed with your quote" },
          { icon: "layers", title: "All Formats", sub: "DST, PES, JEF & more formats" },
          { icon: "tag", title: "Free Quote", sub: "Free quote, no hidden charges" },
          { icon: "shield", title: "Satisfaction", sub: "100% money-back guaranteed" },
        ]}
      />

      <section className="bg-white py-16 lg:py-20" aria-labelledby="choose-service-title">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <h2 id="choose-service-title" className="font-serif text-2xl font-bold text-navy-950 sm:text-3xl">Which Digitizing Service Does Your Logo Need?</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-navy-950/70">Start with the placement and finish. The same artwork may need separate stitch files for a polo shirt, a curved cap and a raised foam design.</p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <caption className="sr-only">Compare embroidery services by placement, finish and required production details</caption>
              <thead className="bg-slate-50 text-navy-950"><tr>
                <th scope="col" className="p-4">Placement or finish</th><th scope="col" className="p-4">Service</th><th scope="col" className="p-4">What to confirm</th>
              </tr></thead>
              <tbody className="text-navy-950/75">
                {[
                  { placement: "Polo shirts, uniforms and jacket backs", label: "Flat logo digitizing", href: "/contact", details: "Finished size, fabric and placement; large and small versions need separate assessment." },
                  { placement: "Hat fronts, sides and backs", label: "Cap logo digitizing", href: "/services/cap-logo-digitizing", details: "Hat construction, centre seam and usable cap-frame sewing area." },
                  { placement: "Raised letters and bold emblems", label: "3D puff digitizing", href: "/services/3d-puff-digitizing", details: "Foam thickness and which areas should sew flat or raised." },
                  { placement: "Fabric letters and layered designs", label: "Applique digitizing", href: "/services/applique-digitizing", details: "Applique material, cutting method and preferred border finish." },
                  { placement: "Finished patches to attach to garments", label: "Custom patches", href: "/patches", details: "Patch type, dimensions, quantity and backing; specify whether you need physical patches or a file." },
                  { placement: "Artwork for print, vinyl or cutting", label: "Vector art conversion", href: "/vector-art", details: "Output format and production method; vector artwork alone is not an embroidery stitch file." },
                ].map((service) => <tr key={service.label} className="border-b border-navy-950/10">
                  <th scope="row" className="p-4 font-medium text-navy-950">{service.placement}</th>
                  <td className="p-4"><Link href={service.href} className="font-semibold text-brand-700 underline underline-offset-4">{service.label}</Link></td>
                  <td className="p-4 leading-relaxed">{service.details}</td>
                </tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <ServiceOrderDetails kind="services" />

      <PortfolioSection />

      <WhyChooseUs
        eyebrow="Why Choose velora?"
        title="We Deliver More Than Just Stitches"
        items={WHY_ITEMS}
      />

      <PricingTable />

      <FAQ
        items={SERVICES_FAQS}
        title="Services - Frequently Asked Questions"
        subtitle="Questions about our embroidery digitizing services and capabilities."
      />

      <TestimonialCTASection
        eyebrow="Client Story"
        title="Service That Exceeds Expectations"
        testimonials={[
          {
            quote:
              "Turnaround was under 10 hours. Stitch pathing was optimized with minimal trims. Ran clean on our 6-head Tajima with zero thread breaks.",
            author: "Marcus T.",
            authorOrigin: "Screen Printing & Embroidery (Ohio, USA)",
            authorInitial: "MT",
          },
          {
            quote:
              "Clean pull-compensation on pique cotton polos. Even the 4mm secondary text was sharp and legible.",
            author: "Jason L.",
            authorOrigin: "Workwear & Uniforms (Ontario, Canada)",
            authorInitial: "JL",
          },
          {
            quote:
              "High density fill without puckering. Excellent communication via WhatsApp for rush delivery.",
            author: "Liam W.",
            authorOrigin: "Merch Designer (Manchester, UK)",
            authorInitial: "LW",
          },
        ]}
        ctaTitle="Need Help Choosing a Service?"
        ctaSubtitle="Tell us about your project and we'll recommend the perfect digitizing solution."
        ctaLabel="TALK TO AN EXPERT"
        ctaHref="/contact"
      />

      <RelatedServicesNav currentSlug="services" />

      <RelatedGuides
        title="Embroidery Digitizing Guides"
        subtitle="New to digitizing? Start with how it works, what it costs, and how to size a logo."
        slugs={[
          "what-is-embroidery-digitizing",
          "embroidery-digitizing-cost-pricing-guide",
          "left-chest-logo-embroidery-digitizing-guide",
        ]}
      />

      <CTABanner />
    </>
  );
}
