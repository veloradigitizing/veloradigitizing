import type { Metadata } from "next";
import Hero from "../components/Hero";
import servicesBg from "../images/velora-embroidery-workstation.webp";
import ServicesGrid from "../components/ServicesGrid";
import WhyChooseUs from "../components/WhyChooseUs";
import ProcessSteps from "../components/ProcessSteps";
import CTABanner from "../components/CTABanner";
import TestimonialCTASection from "../components/TestimonialCTASection";
import { FAQ, SERVICES_FAQS } from "../components/FAQ";
import PortfolioSection from "../components/PortfolioSection";

export const metadata: Metadata = {
  title: "Embroidery Digitizing Services",
  description:
    "Professional custom embroidery digitizing. Get flawless 3D puff, left chest logos & patches in 8–24h with free revisions. Request your free quote today!",
  alternates: {
    canonical: "https://www.veloradigitizing.com/services",
  },
  openGraph: {
    title: "Embroidery Digitizing Services | Velora Digitizing",
    description:
      "Professional custom embroidery digitizing. Flawless 3D puff, left chest logos & patches in 8–24h with free revisions. Request your free quote today!",
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
    title: "Embroidery Digitizing Services | Velora Digitizing",
    description:
      "Professional custom embroidery digitizing. Flawless 3D puff, left chest logos & patches in 8–24h with free revisions. Request your free quote today!",
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
      "areaServed": "Worldwide",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
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
  { icon: "refresh", title: "Unlimited Revisions" },
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
        description="We offer high quality embroidery digitizing services with fast turnaround, perfect stitching and 100% customer satisfaction."
        bgImage={servicesBg}
        imageLabel="Professional Velora embroidery digitizing workspace"
        features={[
          { icon: "clock", title: "Fast Delivery", sub: "Delivery within 8-24 hours" },
          { icon: "layers", title: "All Formats", sub: "DST, PES, JEF & more formats" },
          { icon: "tag", title: "Free Quote", sub: "Free quote, no hidden charges" },
          { icon: "shield", title: "Satisfaction", sub: "100% money-back guaranteed" },
        ]}
      />

      <ServicesGrid
        className="!py-10"
      />

      <PortfolioSection />

      <WhyChooseUs
        eyebrow="Why Choose velora?"
        title="We Deliver More Than Just Stitches"
        items={WHY_ITEMS}
      />

      <ProcessSteps />

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

      <CTABanner />
    </>
  );
}
