import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vector Art Conversion Services | Raster to Vector Tracing",
  description:
    "Convert low-res JPEG, PNG, or hand drawings into clean, scalable vector files (AI, EPS, SVG, PDF). Expert manual tracing for screen printing, vinyl & embroidery. 12–24h delivery.",
  keywords: [
    "vector art conversion",
    "raster to vector conversion",
    "logo vectorization",
    "vector tracing services",
    "convert jpg to vector",
    "convert png to svg",
    "color separation vector",
    "vector artwork for screen printing",
    "vector cleanup services",
    "print ready vector files",
  ],
  alternates: {
    canonical: "https://www.veloradigitizing.com/vector-art",
  },
  openGraph: {
    title: "Vector Art Conversion Services | Raster to Vector | Velora",
    description:
      "Convert low-res JPEG/PNG images into crisp, scalable vector artwork (AI, EPS, SVG, PDF) with manual node precision and unlimited revisions.",
    url: "https://www.veloradigitizing.com/vector-art",
    siteName: "Velora Digitizing",
    images: [
      {
        url: "/images/og/og-vector-art.webp",
        width: 1200,
        height: 630,
        alt: "Velora Vector Art Conversion — Pixel Perfect Raster to Vector Tracing",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vector Art Conversion Services | Velora Digitizing",
    description:
      "Transform low-res images into infinitely scalable vector art (AI, EPS, SVG, PDF). Manual tracing with 12–24h turnaround.",
    images: ["/images/og/og-vector-art.webp"],
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
    </>
  );
}
