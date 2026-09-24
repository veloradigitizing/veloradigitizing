import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Embroidered Patches | Merrow Border, PVC & Chenille Patches",
  description:
    "Custom patch digitizing & manufacturing by Velora Digitizing. Merrowed borders, laser cut, woven, varsity chenille, iron-on, velcro and tactical PVC patches. Wash-tested durability.",
  keywords: [
    "custom embroidered patches",
    "patch digitizing",
    "merrow border patches",
    "custom velcro patches",
    "iron on patches custom",
    "chenille varsity patches",
    "tactical PVC patches",
    "custom woven patches",
    "military morale patches",
    "biker patches embroidery",
  ],
  alternates: {
    canonical: "https://www.veloradigitizing.com/patches",
  },
  openGraph: {
    title: "Custom Embroidered Patches | Velora Digitizing",
    description:
      "Merrowed borders, laser-cut, chenille, woven, and tactical PVC patches digitized with precision stitch density.",
    url: "https://www.veloradigitizing.com/patches",
    siteName: "Velora Digitizing",
    images: [
      {
        url: "/images/og/og-patches.webp",
        width: 1200,
        height: 630,
        alt: "Velora Digitizing Custom Patches — Merrow Border, Chenille & PVC Emblems",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Embroidered Patches | Velora Digitizing",
    description:
      "Custom patch digitizing and manufacturing in any shape, size, or backing. Merrow, Chenille, Woven, PVC, Iron-on.",
    images: ["/images/og/og-patches.webp"],
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
    </>
  );
}
