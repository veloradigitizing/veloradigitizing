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
    default: "Velora Digitizing | #1 Custom Embroidery Digitizing & Vector Art Services",
    template: "%s | Velora Digitizing",
  },
  description:
    "Velora Digitizing provides premier custom embroidery digitizing and vector art conversion services. Flawless 3D puff, left chest logos, custom patches & rapid 8–24h turnaround. 100% satisfaction guaranteed.",
  keywords: [
    "embroidery digitizing",
    "custom embroidery digitizing",
    "embroidery digitizing services",
    "logo digitizing for embroidery",
    "3D puff embroidery digitizing",
    "custom embroidered patches",
    "vector art conversion",
    "raster to vector conversion",
    "applique digitizing",
    "chenille digitizing",
    "jacket back digitizing",
    "cap and hat digitizing",
    "DST PES JEF EXP embroidery files",
    "rush embroidery digitizing",
    "commercial embroidery digitizing",
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
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.veloradigitizing.com",
    siteName: "Velora Digitizing",
    title: "Velora Digitizing | #1 Custom Embroidery Digitizing & Vector Art Services",
    description:
      "Convert your artwork into flawless embroidery files with premier stitch quality, 8–24h delivery, unlimited revisions, and 100% satisfaction guaranteed.",
    images: [
      {
        url: "/images/og/og-home.webp",
        width: 1200,
        height: 630,
        alt: "Velora Digitizing — Master Embroidery Digitizing and Custom Patches",
        type: "image/webp",
      },
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Velora Digitizing — Embroidery Digitizing Services",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Velora Digitizing | #1 Custom Embroidery Digitizing & Vector Art Services",
    description:
      "Convert your artwork into flawless embroidery files with premier stitch quality, 8–24h delivery, unlimited revisions, and 100% satisfaction guaranteed.",
    images: ["/images/og/og-home.webp"],
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
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.veloradigitizing.com/#organization",
        "name": "Velora Digitizing",
        "url": "https://www.veloradigitizing.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.veloradigitizing.com/icon1.png",
          "width": 512,
          "height": 512,
        },
        "image": "https://www.veloradigitizing.com/images/og/og-home.webp",
        "description":
          "Velora Digitizing converts artwork into flawless embroidery and vector files with highest stitch quality, 8–24h delivery, and 100% satisfaction guaranteed.",
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
          "availableLanguage": ["English"],
          "areaServed": "Worldwide",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://www.veloradigitizing.com/#website",
        "url": "https://www.veloradigitizing.com",
        "name": "Velora Digitizing",
        "publisher": {
          "@id": "https://www.veloradigitizing.com/#organization",
        },
      },
    ],
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