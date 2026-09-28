import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Applique Digitizing Services | Custom Embroidery Files",
  description:
    "Professional custom applique embroidery digitizing for jackets, hoodies, jerseys & patches. Clean tackdown stitches, precise borders, and all machine formats (DST, PES, JEF).",
  keywords: [
    "applique digitizing",
    "applique embroidery digitizing",
    "custom applique digitizing",
    "tackle twill digitizing",
    "laser cut applique digitizing",
    "embroidery applique file",
    "convert logo to applique dst",
    "varsity applique embroidery",
    "applique digitizing services",
    "Velora Digitizing",
  ],
  alternates: {
    canonical: "https://www.veloradigitizing.com/services/applique-digitizing",
  },
  openGraph: {
    title: "Applique Digitizing Services | Velora Digitizing",
    description:
      "Professional custom applique embroidery digitizing for jackets, hoodies, jerseys & patches. Clean tackdown stitches, precise borders, and all machine formats.",
    url: "https://www.veloradigitizing.com/services/applique-digitizing",
    siteName: "Velora Digitizing",
    images: [
      {
        url: "/images/og/og-services.webp",
        width: 1200,
        height: 630,
        alt: "Velora Applique Digitizing Services — Master Tackdown & Border Files",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Applique Digitizing Services | Velora Digitizing",
    description:
      "Professional custom applique embroidery digitizing for jackets, hoodies, jerseys & patches. Clean tackdown stitches and all machine formats.",
    images: ["/images/og/og-services.webp"],
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
    </>
  );
}
