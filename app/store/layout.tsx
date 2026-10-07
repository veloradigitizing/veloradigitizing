import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Embroidery Patch Designs & DST Files Store",
    template: "%s | Velora Digitizing",
  },
  description:
    "Shop ready-to-stitch machine embroidery designs & custom patch DST files (DST, PES, JEF, EXP). Delivered by email with verified stitch counts. Order today!",
  alternates: {
    canonical: "https://www.veloradigitizing.com/store",
  },
  openGraph: {
    title: "Embroidery Patch Designs & DST Files Store | Velora Digitizing",
    description:
      "Shop ready-to-stitch machine embroidery designs & custom patch DST files (DST, PES, JEF, EXP). Delivered by email with verified stitch counts. Order today!",
    url: "https://www.veloradigitizing.com/store",
    siteName: "Velora Digitizing",
    images: [
      {
        url: "/images/og/og-store.jpg",
        width: 1200,
        height: 630,
        alt: "Velora Digitizing Store — Embroidery Patch Designs & DST Files",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Embroidery Patch Designs & DST Files Store | Velora Digitizing",
    description:
      "Ready-to-stitch machine embroidery designs and patch packs (DST, PES, JEF, EXP), delivered by email.",
    images: ["/images/og/og-store.jpg"],
  },
};

const storeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Store",
      "name": "Velora Digitizing Store",
      "url": "https://www.veloradigitizing.com/store",
      "description":
        "Online store for ready-to-stitch digital embroidery patterns, patch files, and design bundles.",
      "currenciesAccepted": "USD",
      "priceRange": "$2.99 - $299.99",
      "provider": {
        "@type": "Organization",
        "name": "Velora Digitizing",
        "url": "https://www.veloradigitizing.com",
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Embroidery Patch Designs & Bundles",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "Adventure Patches",
          },
          {
            "@type": "OfferCatalog",
            "name": "Lifestyle Patches",
          },
          {
            "@type": "OfferCatalog",
            "name": "Gaming Patches",
          },
          {
            "@type": "OfferCatalog",
            "name": "Motivational Patches",
          },
          {
            "@type": "OfferCatalog",
            "name": "Fun & Unique Patches",
          },
          {
            "@type": "OfferCatalog",
            "name": "Patch Bundles",
          },
        ],
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
          "name": "Store",
          "item": "https://www.veloradigitizing.com/store",
        },
      ],
    },
  ],
};

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(storeJsonLd) }}
      />
      {children}
    </>
  );
}
