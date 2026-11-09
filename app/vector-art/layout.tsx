import type { Metadata } from "next";
import RelatedGuides from "../components/RelatedGuides";

export const metadata: Metadata = {
  title: { absolute: "Vector Art Conversion Services | Raster to Vector from $10" },
  description:
    "Vector art services from $10: hand-traced raster to vector conversion of JPG and PNG logos into AI, EPS, SVG and PDF for screen printing, vinyl, DTF and embroidery. Free quote.",
  alternates: {
    canonical: "https://www.veloradigitizing.com/vector-art",
  },
  openGraph: {
    title: "Vector Art Conversion Services | Raster to Vector from $10",
    description:
      "Hand-traced vector art conversion: JPG and PNG logos redrawn as clean AI, EPS, SVG and PDF files for screen printing, vinyl and embroidery.",
    url: "https://www.veloradigitizing.com/vector-art",
    siteName: "Velora Digitizing",
    images: [
      {
        url: "/images/og/og-vector-art.jpg",
        width: 1200,
        height: 630,
        alt: "Velora Vector Art Conversion — Pixel Perfect Raster to Vector Tracing",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vector Art Conversion Services | Raster to Vector from $10",
    description:
      "Hand-traced raster to vector conversion from $10. Clean AI, EPS, SVG and PDF files for print, vinyl and embroidery.",
    images: ["/images/og/og-vector-art.jpg"],
  },
};

const vectorJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Vector Art Conversion Services",
      "provider": {
        "@type": "Organization",
        "name": "Velora Digitizing",
        "url": "https://www.veloradigitizing.com",
      },
      "serviceType": "Vector Graphic Design & Tracing",
      "description":
        "Manual raster-to-vector conversion and tracing service delivering AI, EPS, SVG, and PDF files for commercial print, screen printing, and embroidery.",
      "areaServed": ["United States", "Canada", "United Kingdom", "Worldwide"],
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
          "name": "Vector Art",
          "item": "https://www.veloradigitizing.com/vector-art",
        },
      ],
    },
  ],
};

export default function VectorArtLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(vectorJsonLd) }}
      />
      {children}
      <RelatedGuides
        title="Vector Art & Artwork Prep Guides"
        subtitle="How to prepare logos and vector files for embroidery and screen printing."
        slugs={[
          "vector-art-for-screen-printing-vs-embroidery",
          "digitize-logo-illustrator-embroidery",
          "how-to-prepare-logo-for-embroidery-digitizing",
        ]}
      />
    </>
  );
}
