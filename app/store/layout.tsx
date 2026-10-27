import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Embroidery Patch Designs & DST Files Store",
    template: "%s | Velora Digitizing",
  },
  description:
    "Shop digital embroidery patch designs in DST, PES, EXP and JEF formats. Compare sizes and stitch counts, order files by email, or choose a design bundle.",
  alternates: {
    canonical: "https://www.veloradigitizing.com/store",
  },
  openGraph: {
    title: "Embroidery Patch Designs & DST Files Store | Velora Digitizing",
    description:
      "Shop digital embroidery patch designs in DST, PES, EXP and JEF formats. Compare sizes and stitch counts, order files by email, or choose a design bundle.",
    url: "https://www.veloradigitizing.com/store",
    siteName: "Velora Digitizing",
    images: [
      {
        url: "/images/og/og-store.jpg",
        width: 1200,
        height: 630,
        alt: "Velora Digitizing Store — Embroidery Patch Designs & DST Files",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Embroidery Patch Designs & DST Files Store | Velora Digitizing",
    description:
      "Ready-to-stitch machine embroidery designs and patch packs (DST, PES, JEF, EXP), delivered by email.",
    images: ["/images/og/og-store.jpg"],
  },
};



export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
