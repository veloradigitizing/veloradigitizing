import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cap & Hat Logo Embroidery Digitizing Services | Velora Digitizing",
  description:
    "Specialized cap & hat embroidery digitizing services. Engineered center-out sequencing for structured snapbacks, dad hats, beanies & visors in DST, PES & JEF formats.",
  keywords: [
    "cap logo digitizing",
    "hat embroidery digitizing",
    "snapback logo digitizing",
    "cap digitizing services",
    "beanie embroidery digitizing",
    "baseball hat embroidery files",
    "convert logo to cap dst",
    "Velora Digitizing",
  ],
  alternates: {
    canonical: "https://www.veloradigitizing.com/services/cap-logo-digitizing",
  },
  openGraph: {
    title: "Cap & Hat Logo Embroidery Digitizing Services | Velora Digitizing",
    description:
      "Specialized cap & hat embroidery digitizing services. Engineered center-out sequencing for structured snapbacks, dad hats, beanies & visors.",
    url: "https://www.veloradigitizing.com/services/cap-logo-digitizing",
    siteName: "Velora Digitizing",
    images: [
      {
        url: "/images/og/og-services.webp",
        width: 1200,
        height: 630,
        alt: "Velora Cap & Hat Logo Embroidery Digitizing Services",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cap & Hat Logo Embroidery Digitizing Services | Velora Digitizing",
    description:
      "Specialized cap & hat embroidery digitizing with center-out sequencing.",
    images: ["/images/og/og-services.webp"],
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
    </>
  );
}
