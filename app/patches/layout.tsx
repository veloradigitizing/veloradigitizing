import type { Metadata } from "next";
import RelatedGuides from "../components/RelatedGuides";

export const metadata: Metadata = {
  title: "Custom Embroidered Patch Services",
  description:
    "Custom patch digitizing & manufacturing. Merrow border, chenille, tactical PVC & iron-on embroidered patches with wash durability. Order custom patches now!",
  alternates: {
    canonical: "https://www.veloradigitizing.com/patches",
  },
  openGraph: {
    title: "Custom Embroidered Patches | Velora Digitizing",
    description:
      "Custom patch digitizing & manufacturing. Merrow border, chenille, tactical PVC & iron-on embroidered patches with wash durability. Order custom patches now!",
    url: "https://www.veloradigitizing.com/patches",
    siteName: "Velora Digitizing",
    images: [
      {
        url: "/images/og/og-patches.jpg",
        width: 1200,
        height: 630,
        alt: "Velora Digitizing Custom Patches — Merrow Border, Chenille & PVC Emblems",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Embroidered Patches | Velora Digitizing",
    description:
      "Custom patch digitizing and manufacturing in any shape, size, or backing. Merrow, Chenille, Woven, PVC, Iron-on.",
    images: ["/images/og/og-patches.jpg"],
  },
};

const patchesJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Custom Patch Digitizing & Manufacturing",
      "provider": {
        "@type": "Organization",
        "name": "Velora Digitizing",
        "url": "https://www.veloradigitizing.com",
      },
      "serviceType": "Custom Embroidered Patches",
      "description":
        "Custom patch digitizing and production services covering merrowed border, laser cut, woven, chenille, tactical PVC, and heat-seal iron-on patches.",
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
          "name": "Patches",
          "item": "https://www.veloradigitizing.com/patches",
        },
      ],
    },
  ],
};

export default function PatchesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(patchesJsonLd) }}
      />
      {children}
      <RelatedGuides
        title="Custom Patch Guides"
        subtitle="Compare patch types and materials before you choose a style for your order."
        slugs={[
          "custom-patch-types-embroidered-woven-pvc-leather-chenille",
          "pvc-patches-vs-embroidered-patches",
          "applique-embroidery-digitizing-guide",
        ]}
      />
    </>
  );
}
