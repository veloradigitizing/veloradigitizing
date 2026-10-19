import type { Metadata } from "next";
import RelatedGuides from "../components/RelatedGuides";

export const metadata: Metadata = {
  title: { absolute: "Custom Patch Digitizing: Embroidered, PVC & Chenille Files" },
  description:
    "Professional custom patch digitizing for embroidered, PVC, chenille & leather patches. Merrowed borders, iron-on backing & machine stitch files in 8-24 hours.",
  alternates: {
    canonical: "https://www.veloradigitizing.com/patches",
  },
  openGraph: {
    title: "Custom Patch Digitizing: Embroidered, PVC & Chenille Files",
    description:
      "Professional custom patch digitizing for embroidered, PVC, chenille & leather patches. Merrowed borders, iron-on backing & machine stitch files in 8-24 hours.",
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
    title: "Custom Patch Digitizing: Embroidered, PVC & Chenille Files",
    description:
      "Custom patch digitizing in any shape, size or backing: merrow, chenille, woven, PVC and iron-on patch files in 8-24h.",
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
      "serviceType": "Custom Patch Digitizing",
      "description":
        "Custom patch digitizing and production services covering merrowed border, laser cut, woven, chenille, tactical PVC, and heat-seal iron-on patches.",
      "areaServed": ["United States", "Canada", "United Kingdom", "Worldwide"],
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "USD",
        "lowPrice": "6.99",
        "highPrice": "19.99",
        "offerCount": 3,
        "url": "https://www.veloradigitizing.com/patches#pricing",
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
          "name": "Patches",
          "item": "https://www.veloradigitizing.com/patches",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.veloradigitizing.com/patches#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the minimum order quantity for patches?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For digital patch files, there is no minimum order. For physical patch manufacturing, the minimum is typically 50 pieces. Contact us for exact pricing based on your quantity, size, and backing type.",
          },
        },
        {
          "@type": "Question",
          "name": "How long does patch digitizing take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Standard turnaround is 24 hours for the digitized file. Rush delivery under 12 hours is available for an additional 30% fee. Physical patch manufacturing takes 7-10 business days after file approval.",
          },
        },
        {
          "@type": "Question",
          "name": "What file formats do you deliver for custom patches?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We deliver all major embroidery formats: DST, PES, JEF, EXP, VP3, and XXX. You will receive all formats in a single zip file.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the difference between embroidered and woven patches?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Embroidered patches have raised stitching on a twill backing, which is thicker and more tactile. Woven patches are made entirely from thread woven together, which is flatter with finer detail and smaller text.",
          },
        },
        {
          "@type": "Question",
          "name": "Do you offer physical patch manufacturing too?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we handle the full process from digitizing to manufacturing. After you approve the digital proof, we produce the physical patches in your chosen type, size, and backing.",
          },
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
