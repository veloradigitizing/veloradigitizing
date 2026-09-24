import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Embroidery Digitizing Portfolio",
  description:
    "Explore our embroidery digitizing portfolio. Inspect 3D puff caps, left chest badges, jacket back stitches & vector art samples. View our work and order now!",
  keywords: [
    "embroidery digitizing portfolio",
    "digitizing work samples",
    "3D puff embroidery samples",
    "left chest logo samples",
    "jacket back embroidery portfolio",
    "cap logo embroidery",
    "embroidery stitch proof",
    "vector art portfolio",
  ],
  alternates: {
    canonical: "https://www.veloradigitizing.com/portfolio",
  },
  openGraph: {
    title: "Embroidery Digitizing Portfolio | Velora Digitizing",
    description:
      "Explore our embroidery digitizing portfolio. Inspect 3D puff caps, left chest badges, jacket back stitches & vector art samples. View our work and order now!",
    url: "https://www.veloradigitizing.com/portfolio",
    siteName: "Velora Digitizing",
    images: [
      {
        url: "/images/og/og-portfolio.webp",
        width: 1200,
        height: 630,
        alt: "Velora Digitizing Portfolio — High Quality Embroidery Digitizing Samples",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Embroidery Digitizing Portfolio | Velora Digitizing",
    description:
      "Browse our portfolio of 3D puff, left chest, jacket backs, and custom patch embroidery samples.",
    images: ["/images/og/og-portfolio.webp"],
  },
};

const portfolioJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "name": "Embroidery Digitizing Portfolio",
      "url": "https://www.veloradigitizing.com/portfolio",
      "description":
        "Showcase of master embroidery digitizing designs, 3D puff stitch samples, and vector conversion projects by Velora Digitizing.",
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
          "name": "Portfolio",
          "item": "https://www.veloradigitizing.com/portfolio",
        },
      ],
    },
  ],
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioJsonLd) }}
      />
      {children}
    </>
  );
}
