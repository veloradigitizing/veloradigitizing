import type { Metadata } from "next";
import { PATCH_PORTFOLIO_ITEMS } from "../../lib/patch-portfolio";

const description = "Browse custom felt and twill patch samples from Velora Digitizing. Send your logo, size, and quantity to request a custom patch quote.";

export const metadata: Metadata = {
  title: { default: "Custom Felt & Twill Patch Samples", template: "%s | Velora Digitizing" },
  description,
  alternates: { canonical: "https://www.veloradigitizing.com/store" },
  openGraph: {
    title: "Custom Felt & Twill Patch Samples | Velora Digitizing",
    description,
    url: "https://www.veloradigitizing.com/store",
    siteName: "Velora Digitizing",
    images: [{ url: PATCH_PORTFOLIO_ITEMS[0].image, alt: "Custom felt patch sample by Velora Digitizing" }],
  },
  twitter: { card: "summary_large_image", title: "Custom Felt & Twill Patch Samples | Velora Digitizing", description, images: [PATCH_PORTFOLIO_ITEMS[0].image] },
};

export default function StoreLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
