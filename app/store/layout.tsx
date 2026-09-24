import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Embroidery Designs & Patches Store | Velora Digitizing",
  description:
    "Shop premium ready-to-stitch embroidery design packages and digital patches. Instant download in DST, PES, JEF, EXP formats with verified stitch counts.",
  keywords: [
    "embroidery designs store",
    "buy embroidery files",
    "digital embroidery patches",
    "DST files download",
    "PES embroidery designs",
    "embroidery bundle packs",
    "instant embroidery download",
    "machine embroidery patterns",
  ],
  alternates: {
    canonical: "https://www.veloradigitizing.com/store",
  },
  openGraph: {
    title: "Digital Embroidery Designs & Patches Store | Velora Digitizing",
    description:
      "Instant download embroidery stitch files (DST, PES, JEF, EXP). Premium tested designs with complete color run sheets.",
    url: "https://www.veloradigitizing.com/store",
    siteName: "Velora Digitizing",
    images: [
      {
        url: "/images/og/og-store.webp",
        width: 1200,
        height: 630,
        alt: "Velora Digitizing Store — Digital Embroidery Designs & Patches",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Embroidery Designs Store | Velora Digitizing",
    description:
      "Instant download ready-to-stitch embroidery designs and patch packs (DST, PES, JEF, EXP).",
    images: ["/images/og/og-store.webp"],
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
      "provider": {
        "@type": "Organization",
        "name": "Velora Digitizing",
        "url": "https://www.veloradigitizing.com",
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
