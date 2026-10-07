import type { Metadata } from "next";
import RelatedGuides from "../../components/RelatedGuides";

export const metadata: Metadata = {
  title: { absolute: "Applique Embroidery Digitizing Services | Velora Digitizing" },
  description:
    "Professional applique embroidery digitizing for jackets, hoodies, jerseys & patches. Clean tackdown stitches, precise borders & all formats (DST, PES, JEF).",
  alternates: {
    canonical: "https://www.veloradigitizing.com/services/applique-digitizing",
  },
  openGraph: {
    title: "Applique Embroidery Digitizing Services | Velora Digitizing",
    description:
      "Professional custom applique embroidery digitizing for jackets, hoodies, jerseys & patches. Clean tackdown stitches, precise borders, and all machine formats.",
    url: "https://www.veloradigitizing.com/services/applique-digitizing",
    siteName: "Velora Digitizing",
    images: [
      {
        url: "/images/og/og-services.jpg",
        width: 1200,
        height: 630,
        alt: "Velora Applique Digitizing Services — Master Tackdown & Border Files",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Applique Embroidery Digitizing Services | Velora Digitizing",
    description:
      "Professional custom applique embroidery digitizing for jackets, hoodies, jerseys & patches. Clean tackdown stitches and all machine formats.",
    images: ["/images/og/og-services.jpg"],
  },
};

const appliqueJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Applique Digitizing Services",
      "provider": {
        "@type": "Organization",
        "name": "Velora Digitizing",
        "url": "https://www.veloradigitizing.com",
      },
      "serviceType": "Applique Embroidery Digitizing",
      "description":
        "Custom applique embroidery digitizing services creating placement outlines, tackdown stitches, and satin cover borders for sports jerseys, varsity jackets, hoodies, and patches.",
      "areaServed": "Worldwide",
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "USD",
        "lowPrice": "6.99",
        "highPrice": "19.99",
        "offerCount": "3",
        "url": "https://www.veloradigitizing.com/services/applique-digitizing#pricing",
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
          "name": "Applique Digitizing",
          "item": "https://www.veloradigitizing.com/services/applique-digitizing",
        },
      ],
    },
  ],
};

export default function AppliqueDigitizingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appliqueJsonLd) }}
      />
      {children}
      <RelatedGuides
        title="Applique Embroidery Guides"
        subtitle="How applique files are built, where they work best, and how they compare with patches."
        slugs={[
          "applique-embroidery-digitizing-guide",
          "jacket-back-embroidery-digitizing-guide",
          "custom-patch-types-embroidered-woven-pvc-leather-chenille",
        ]}
      />
    </>
  );
}
