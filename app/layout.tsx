import type { Metadata } from "next";
import { Inter, Playfair_Display, Dancing_Script } from "next/font/google";
import Header from "./components/Header";
import ScrollProgress from "./components/ScrollProgress";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import AnnouncementBar from "./components/AnnouncementBar";
import { CartProvider } from "./context/CartContext";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const script = Dancing_Script({
  variable: "--font-script",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.veloradigitizing.com"),
  title: {
    default: "Velora Digitizing | Premium Embroidery Digitizing Services",
    template: "%s | Velora Digitizing",
  },
  description:
    "Velora Digitizing converts your artwork into flawless embroidery files with the highest stitch quality, fast turnaround, and 100% satisfaction guaranteed.",
  keywords: [
    "embroidery digitizing",
    "digitizing services",
    "embroidery digitizing services",
    "logo digitizing",
    "3D puff digitizing",
    "applique digitizing",
    "patch digitizing",
    "cap digitizing",
    "hat digitizing",
    "vector art conversion",
    "chenille digitizing",
    "jacket back digitizing",
    "custom embroidery",
    "embroidery files",
    "DST PES JEF files",
    "Velora Digitizing",
  ],
  authors: [{ name: "Velora Digitizing", url: "https://www.veloradigitizing.com" }],
  creator: "Velora Digitizing",
  publisher: "Velora Digitizing",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.veloradigitizing.com",
    siteName: "Velora Digitizing",
    title: "Velora Digitizing | Premium Embroidery Digitizing Services",
    description:
      "Convert your artwork into flawless embroidery files. Premium stitch quality, 8–24h delivery, unlimited revisions, and 100% satisfaction guaranteed.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1024,
        height: 1024,
        alt: "Velora Digitizing — Premium Embroidery Digitizing Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Velora Digitizing | Premium Embroidery Digitizing Services",
    description:
      "Convert your artwork into flawless embroidery files. Premium stitch quality, 8–24h delivery, unlimited revisions, and 100% satisfaction guaranteed.",
    images: ["/images/og-image.jpg"],
    site: "@veloradigitizing",
    creator: "@burlinleo",
  },
  alternates: {
    canonical: "https://www.veloradigitizing.com",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon1.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/apple-icon.png", type: "image/png", sizes: "180x180" },
    ],
    shortcut: "/favicon.ico",
  },
  other: {
    "og:see_also": [
      "https://www.facebook.com/share/1Dtbi6tg9V/",
      "https://www.instagram.com/veloradigitizing",
      "https://www.threads.com/@veloradigitizing?invite=0",
      "https://www.tiktok.com/@muheeb.rehmani?_r=1&_t=ZS-9846QsaPrjY",
      "https://x.com/burlinleo",
      "https://www.youtube.com/@VeloraDigitizing",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Velora Digitizing",
    "url": "https://www.veloradigitizing.com",
    "logo": "https://www.veloradigitizing.com/icon1.png",
    "description":
      "Velora Digitizing converts your artwork into flawless embroidery files with the highest stitch quality, fast turnaround, and 100% satisfaction guaranteed.",
    "sameAs": [
      "https://www.facebook.com/share/1Dtbi6tg9V/",
      "https://www.instagram.com/veloradigitizing",
      "https://www.threads.com/@veloradigitizing?invite=0",
      "https://www.tiktok.com/@muheeb.rehmani?_r=1&_t=ZS-9846QsaPrjY",
      "https://x.com/burlinleo",
      "https://www.youtube.com/@VeloraDigitizing",
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-213-456-7880",
      "contactType": "customer service",
      "email": "info@veloradigitizing.com",
      "availableLanguage": "English",
    },
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${script.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col text-navy-950">
        <CartProvider>
          <ScrollProgress />
          <AnnouncementBar />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </CartProvider>
      </body>
    </html>
  );
}