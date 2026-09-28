import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "3D Puff Embroidery Digitizing Services | Raised Foam Files",
  description:
    "Professional 3D puff embroidery digitizing services for caps, hats, snapbacks & hoodies. Clean end-capping, foam perforations, and all machine formats (DST, PES, JEF).",
  keywords: [
    "3D puff embroidery digitizing",
    "3D puff digitizing services",
    "puff embroidery for caps",
    "raised embroidery digitizing",
    "3D foam digitizing",
    "custom snapback digitizing",
    "convert logo to 3D puff dst",
    "Velora Digitizing",
  ],
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
        url: "/images/og/og-services.webp",
        width: 1200,
        height: 630,
        alt: "Velora 3D Puff Embroidery Digitizing Services",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "3D Puff Embroidery Digitizing Services | Velora Digitizing",
    description:
      "Professional 3D puff embroidery digitizing services for caps, hats, snapbacks & hoodies.",
    images: ["/images/og/og-services.webp"],
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
    </>
  );
}
