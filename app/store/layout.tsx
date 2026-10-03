import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Digital Embroidery Designs Store",
    template: "%s | Velora Digitizing",
  },
  description:
    "Shop premium ready-to-stitch embroidery designs & patch files in DST, PES, JEF and EXP formats with verified stitch counts. Delivered by email. Order today!",
  alternates: {
    canonical: "https://www.veloradigitizing.com/store",
  },
  openGraph: {
    title: "Digital Embroidery Designs & Patches Store | Velora Digitizing",
    description:
      "Shop premium ready-to-stitch embroidery designs & patch files in DST, PES, JEF and EXP formats with verified stitch counts. Delivered by email. Order today!",
    url: "https://www.veloradigitizing.com/store",
    siteName: "Velora Digitizing",
    images: [
      {
        url: "/images/og/og-store.jpg",
        width: 1200,
        height: 630,
        alt: "Velora Digitizing Store — Digital Embroidery Designs & Patches",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Embroidery Designs Store | Velora Digitizing",
    description:
      "Ready-to-stitch embroidery designs and patch packs (DST, PES, JEF, EXP), delivered by email.",
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
