import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Embroidery Patch Designs & DST Files Store",
    template: "%s | Velora Digitizing",
  },
  description:
    "Shop ready-to-stitch machine embroidery designs & custom patch DST files (DST, PES, JEF, EXP). Delivered by email with verified stitch counts. Order today!",
  alternates: {
    canonical: "https://www.veloradigitizing.com/store",
  },
  openGraph: {
    title: "Embroidery Patch Designs & DST Files Store | Velora Digitizing",
    description:
      "Shop ready-to-stitch machine embroidery designs & custom patch DST files (DST, PES, JEF, EXP). Delivered by email with verified stitch counts. Order today!",
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
