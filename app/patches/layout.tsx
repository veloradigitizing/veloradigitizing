import type { Metadata } from "next";
import RelatedGuides from "../components/RelatedGuides";

export const metadata: Metadata = {
  title: { absolute: "Custom Patch Digitizing: Embroidered, PVC & Chenille Files" },
  description:
    "Patch digitizing files from $12.99 per design: merrow or satin borders, backing-specific settings, DST, PES, EXP & JEF formats in 12-24 hours. Finished patches on request.",
  alternates: {
    canonical: "https://www.veloradigitizing.com/patches",
  },
  openGraph: {
    title: "Custom Patch Digitizing: Embroidered, PVC & Chenille Files",
    description:
      "Patch digitizing files from $12.99 per design: merrow or satin borders, backing-specific settings and all machine formats in 12-24 hours. Finished patches on request.",
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
      "Custom patch digitizing in any shape, size or backing: merrow, chenille, woven, PVC and iron-on patch files in 12-24h.",
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
        "lowPrice": "12.99",
        "highPrice": "19.99",
        "offerCount": 2,
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
          "name": "Do you make the physical patches or just the file?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Both. Most orders are for the digitized patch file only, priced per design on the Standard plan ($12.99) and sent to you or your patch maker. If you also want finished patches, say so in your quote request with the patch type, size, quantity and backing, and we produce them after you approve the digital proof.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the difference between a patch file and a garment logo file?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A garment logo file is digitized for a specific fabric and placement, such as a polo left chest or a cap front. A patch file is digitized for the patch blank itself: it includes the base fill or fabric layer, a border that covers a cut edge, and settings for the backing.",
          },
        },
        {
          "@type": "Question",
          "name": "What border should I choose, merrow or satin?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Choose merrow for classic round, oval, square and shield patches when a merrow machine is available; it gives the thick rope-like edge. Choose a satin border for complex outlines, tight corners, or when the patch is stitched entirely on an embroidery machine. Laser-cut shapes use a satin border plus a vector cut path.",
          },
        },
        {
          "@type": "Question",
          "name": "Can I digitize a patch myself with free software?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Free tools such as Ink/Stitch can produce a patch file with a fill and a satin border. The difficult parts are border coverage on the cut edge, density on twill or felt, and tackdown for applique layers, which is where a professionally digitized file saves test sew-outs.",
          },
        },
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
            "text": "Patch files on the Standard plan are delivered in 12 to 24 hours, and on the Basic plan in 24 to 48 hours. The Rush plan ($19.99) delivers in 2 to 4 hours. Physical patch manufacturing takes 7-10 business days after file approval.",
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
          "how-to-make-embroidered-patches",
          "custom-patch-types-embroidered-woven-pvc-leather-chenille",
          "custom-leather-patches-for-hats-guide",
          "applique-embroidery-digitizing-guide",
          "iron-on-vs-sew-on-patches",
          "chenille-and-varsity-jacket-patch-digitizing-guide",
        ]}
      />
    </>
  );
}
