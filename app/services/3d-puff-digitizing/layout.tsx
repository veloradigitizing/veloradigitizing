import type { Metadata } from "next";
import RelatedGuides from "../../components/RelatedGuides";

export const metadata: Metadata = {
  title: { absolute: "3D Puff Embroidery Digitizing Services | Velora Digitizing" },
  description:
    "Professional 3D puff embroidery digitizing for caps, hats, snapbacks & hoodies. Clean end-capping, foam perforations & all machine formats (DST, PES, JEF).",
  alternates: {
    canonical: "https://www.veloradigitizing.com/services/3d-puff-digitizing",
  },
  openGraph: {
    title: "3D Puff Embroidery Digitizing Services | Velora Digitizing",
    description:
      "Professional 3D puff embroidery digitizing services for caps, hats, snapbacks & hoodies. Clean end-capping, foam perforations, and all machine formats.",
    url: "https://www.veloradigitizing.com/services/3d-puff-digitizing",
    siteName: "Velora Digitizing",
    images: [
      {
        url: "/images/og/og-services.jpg",
        width: 1200,
        height: 630,
        alt: "Velora 3D Puff Embroidery Digitizing Services",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "3D Puff Embroidery Digitizing Services | Velora Digitizing",
    description:
      "Professional 3D puff embroidery digitizing services for caps, hats, snapbacks & hoodies.",
    images: ["/images/og/og-services.jpg"],
  },
};

const puffJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "3D Puff Embroidery Digitizing Services",
      "provider": {
        "@type": "Organization",
        "name": "Velora Digitizing",
        "url": "https://www.veloradigitizing.com",
      },
      "serviceType": "3D Puff Embroidery Digitizing",
      "description":
        "Custom 3D puff raised foam digitizing services with calculated satin density, column capping, and underlay adjustments for baseball caps, snapbacks, and apparel.",
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
          "name": "Services",
          "item": "https://www.veloradigitizing.com/services",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "3D Puff Digitizing",
          "item": "https://www.veloradigitizing.com/services/3d-puff-digitizing",
        },
      ],
    },
  ],
};

export default function PuffDigitizingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(puffJsonLd) }}
      />
      {children}
      <RelatedGuides
        title="3D Puff Embroidery Guides"
        subtitle="Learn how raised foam embroidery is digitized, underlaid and priced before you order."
        slugs={[
          "3d-puff-embroidery-digitizing-guide",
          "embroidery-underlay-types-explained",
          "how-to-estimate-embroidery-stitch-count",
        ]}
      />
    </>
  );
}
