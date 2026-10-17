import type { Metadata } from "next";
import RelatedGuides from "../../components/RelatedGuides";

export const metadata: Metadata = {
  title: { absolute: "Cap & Hat Logo Embroidery Digitizing in 8-24h (DST, PES)" },
  description:
    "Specialized cap & hat logo digitizing with center-out sequencing for snapbacks, dad hats & beanies. Flawless stitch files in DST, PES & JEF in 8-24 hours.",
  alternates: {
    canonical: "https://www.veloradigitizing.com/services/cap-logo-digitizing",
  },
  openGraph: {
    title: { absolute: "Cap & Hat Logo Embroidery Digitizing in 8-24h (DST, PES)" },
    description:
      "Specialized cap & hat logo digitizing with center-out sequencing for snapbacks, dad hats & beanies. Flawless stitch files in DST, PES & JEF in 8-24 hours.",
    url: "https://www.veloradigitizing.com/services/cap-logo-digitizing",
    siteName: "Velora Digitizing",
    images: [
      {
        url: "/images/og/og-services.jpg",
        width: 1200,
        height: 630,
        alt: "Velora Cap & Hat Logo Embroidery Digitizing Services",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: { absolute: "Cap & Hat Logo Embroidery Digitizing in 8-24h (DST, PES)" },
    description:
      "Specialized cap & hat embroidery digitizing with center-out sequencing in 8-24h.",
    images: ["/images/og/og-services.jpg"],
  },
};

const capJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Cap & Hat Embroidery Digitizing Services",
      "provider": {
        "@type": "Organization",
        "name": "Velora Digitizing",
        "url": "https://www.veloradigitizing.com",
      },
      "serviceType": "Headwear Embroidery Digitizing",
      "description":
        "Specialized cap and hat logo embroidery digitizing using center-out, bottom-up stitch paths to eliminate seam bunching on curved cap frames.",
      "areaServed": ["United States", "Canada", "United Kingdom", "Worldwide"],
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "USD",
        "lowPrice": "6.99",
        "highPrice": "19.99",
        "offerCount": 3,
        "url": "https://www.veloradigitizing.com/services/cap-logo-digitizing#pricing",
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
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Cap Logo Digitizing",
          "item": "https://www.veloradigitizing.com/services/cap-logo-digitizing",
        },
      ],
    },
  ],
};

export default function CapDigitizingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(capJsonLd) }}
      />
      {children}
      <RelatedGuides
        title="Cap & Hat Embroidery Guides"
        subtitle="Practical reading on cap logo sizing, puff lettering and stabilizers for hats."
        slugs={[
          "cap-hat-logo-embroidery-digitizing-guide",
          "3d-puff-embroidery-digitizing-guide",
          "fix-embroidery-fabric-puckering-and-thread-breaks",
        ]}
      />
    </>
  );
}
