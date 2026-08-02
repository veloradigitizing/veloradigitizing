import type { Metadata } from "next";
import Hero from "../components/Hero";
import portfolioBg from "../images/velora-embroidery-showcase.webp";
import PortfolioContent from "./PortfolioContent";

export const metadata: Metadata = {
  title: "Embroidery Digitizing Portfolio",
  description:
    "Browse Velora Digitizing's portfolio of 500+ embroidery digitizing projects — logos, caps, jacket backs, patches, 3D puff and more. Every design crafted with precision.",
  keywords: [
    "embroidery portfolio",
    "digitizing portfolio",
    "embroidery samples",
    "embroidery designs",
    "custom embroidery examples",
    "digitizing examples",
  ],
  alternates: {
    canonical: "https://www.veloradigitizing.com/portfolio",
  },
  openGraph: {
    title: "Embroidery Digitizing Portfolio | Velora Digitizing",
    description:
      "500+ embroidery digitizing projects — logos, caps, patches, 3D puff & more. View our work and get inspired.",
    url: "https://www.veloradigitizing.com/portfolio",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Velora Digitizing Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Embroidery Digitizing Portfolio | Velora Digitizing",
    description:
      "500+ embroidery digitizing projects. View our work and get inspired.",
  },
};

export default function PortfolioPage() {
  return (
    <>
      <Hero
        eyebrow="Work That Speaks"
        titleLines={[
          { text: "Precision Work," },
          { text: "Perfect Results", accent: true },
        ]}
        description="Explore our latest embroidery digitizing projects. Every design is crafted with precision, quality, and perfection."
        bgImage={portfolioBg}
        imageLabel="Showcase of embroidered Velora apparel and accessories"
        features={[
          { icon: "trophy", title: "500+ Projects", sub: "500+ projects delivered well" },
          { icon: "grid", title: "All Categories", sub: "Caps, jackets, bags & more" },
          { icon: "scissors", title: "Custom Work", sub: "Tailored to your design needs" },
          { icon: "star", title: "Top Rated", sub: "Top-rated by happy clients" },
        ]}
      />

      <PortfolioContent />
    </>
  );
}
