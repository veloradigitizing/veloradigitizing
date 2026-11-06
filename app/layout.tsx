import { Suspense } from "react";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Inter, Playfair_Display } from "next/font/google";
import Header from "./components/Header";
import ScrollProgress from "./components/ScrollProgress";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import AnnouncementBar from "./components/AnnouncementBar";
import VisitorTracker from "./components/VisitorTracker";
import { CartProvider } from "./context/CartContext";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Headings only use bold, so ship the single 700 weight instead of the full
// variable font (smaller download competing with the hero image on mobile).
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: "700",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#1a3fc4",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.veloradigitizing.com"),
  title: {
    default: "Custom Embroidery Digitizing Services | Velora Digitizing",
    template: "%s | Velora Digitizing",
  },
  description:
    "Professional embroidery digitizing & vector conversion. Flawless 3D puff, left chest logos & fast 8-24h delivery. Get your free quote today!",
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
  icons: {
    icon: [
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.veloradigitizing.com",
    siteName: "Velora Digitizing",
    title: "Velora Digitizing | Custom Embroidery Digitizing & Vector Art Services",
    description:
      "Convert your artwork into flawless embroidery files with premier stitch quality, 8-24h delivery, unlimited revisions, and 100% satisfaction guaranteed.",
    images: [
      {
        url: "/images/og/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Velora Digitizing — Master Embroidery Digitizing and Custom Patches",
        type: "image/jpeg",
      },
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Velora Digitizing — Embroidery Digitizing Services",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Velora Digitizing | Custom Embroidery Digitizing & Vector Art Services",
    description:
      "Convert your artwork into flawless embroidery files with premier stitch quality, 8-24h delivery, unlimited revisions, and 100% satisfaction guaranteed.",
    images: ["/images/og/og-home.jpg"],
    site: "@burlinleo",
    creator: "@burlinleo",
  },
  alternates: {
    canonical: "https://www.veloradigitizing.com",
  },
  verification: {
    other: {
      "msvalidate.01": "2E86448A719E4063934826A1195B1159",
      "p:domain_verify": "d840cd318d7d9d19c8d6727aa1fe1fb3",
    },
  },
  other: {
    "msvalidate.01": "2E86448A719E4063934826A1195B1159",
    "og:see_also": [
      "https://www.trustpilot.com/review/veloradigitizing.com",
      "https://www.pinterest.com/veloradigitizing/",
      "https://www.instagram.com/veloradigitizing",
      "https://www.linkedin.com/in/velora-digitizing-854396429",
      "https://www.threads.net/@veloradigitizing",
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
        "@type": ["ProfessionalService", "Organization"],
        "@id": "https://www.veloradigitizing.com/#service",
        "name": "Velora Digitizing",
        "url": "https://www.veloradigitizing.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.veloradigitizing.com/icon.png",
          "contentUrl": "https://www.veloradigitizing.com/images/veloralogo.webp",
          "caption": "Velora Digitizing Logo",
          "width": 512,
          "height": 512,
        },
        "image": [
          "https://www.veloradigitizing.com/images/og/og-home.jpg",
          "https://www.veloradigitizing.com/icon.png",
          "https://www.veloradigitizing.com/images/veloralogo.webp",
        ],
        "brand": {
          "@type": "Brand",
          "name": "Velora Digitizing",
          "logo": "https://www.veloradigitizing.com/icon.png",
        },
        "description":
          "Velora Digitizing provides custom embroidery digitizing, 3D puff cap digitizing, left chest logos, custom patch digitizing, and vector art conversion with 8-24h delivery and 100% satisfaction guaranteed.",
        "telephone": "+12136358137",
        "email": "info@veloradigitizing.com",
        "priceRange": "$6.99 - $19.99",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "128 Business Blvd, Suite 204",
          "addressLocality": "Los Angeles",
          "addressRegion": "CA",
          "postalCode": "90017",
          "addressCountry": "US",
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "34.0522",
          "longitude": "-118.2437",
        },
        "areaServed": [
          "United States",
          "Canada",
          "United Kingdom",
          "Worldwide",
        ],
        "serviceArea": [
          { "@type": "Country", "name": "United States" },
          { "@type": "Country", "name": "Canada" },
          { "@type": "Country", "name": "United Kingdom" },
          { "@type": "AdministrativeArea", "name": "Worldwide" },
        ],
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            "opens": "09:00",
            "closes": "19:00",
          },
        ],
        "sameAs": [
          "https://www.trustpilot.com/review/veloradigitizing.com",
          "https://www.pinterest.com/veloradigitizing/",
          "https://www.instagram.com/veloradigitizing",
          "https://www.linkedin.com/in/velora-digitizing-854396429",
          "https://www.threads.net/@veloradigitizing",
          "https://www.tiktok.com/@muheeb.rehmani?_r=1&_t=ZS-9846QsaPrjY",
          "https://x.com/burlinleo",
          "https://www.youtube.com/@VeloraDigitizing",
        ],
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+12136358137",
            "contactType": "customer service",
            "email": "info@veloradigitizing.com",
            "availableLanguage": ["English"],
            "areaServed": ["United States", "Canada", "United Kingdom", "Worldwide"],
            "hoursAvailable": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ],
              "opens": "09:00",
              "closes": "19:00",
            },
          },
          {
            "@type": "ContactPoint",
            "contactType": "sales",
            "name": "WhatsApp orders and support",
            "url": "https://wa.me/12136358137",
            "availableLanguage": ["English"],
            "areaServed": ["United States", "Canada", "United Kingdom", "Worldwide"],
            "hoursAvailable": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              "opens": "00:00",
              "closes": "23:59",
            },
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://www.veloradigitizing.com/#website",
        "url": "https://www.veloradigitizing.com",
        "name": "Velora Digitizing",
        "publisher": {
          "@id": "https://www.veloradigitizing.com/#service",
        },
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} antialiased`}
    >
      <head>
        {/* DNS only: analytics loads late, so a full preconnect would just
            compete with the hero image for bandwidth on mobile. */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* gtag.js (~180 KB, ~1s of CPU on a mid-range phone) is injected on the
            visitor's first interaction, or a few seconds after load. Calls made
            before then are queued in dataLayer and sent once it loads, so no
            page views are lost. */}
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', 'G-SF2BZRJZ7K');
            (function () {
              var done = false;
              var evts = ['scroll', 'pointerdown', 'keydown', 'touchstart', 'mousemove'];
              function load() {
                if (done) return;
                done = true;
                evts.forEach(function (e) { removeEventListener(e, load); });
                var s = document.createElement('script');
                s.async = true;
                s.src = 'https://www.googletagmanager.com/gtag/js?id=G-SF2BZRJZ7K';
                document.head.appendChild(s);
              }
              evts.forEach(function (e) { addEventListener(e, load, { once: true, passive: true }); });
              function later() { setTimeout(load, 7000); }
              if (document.readyState === 'complete') later();
              else addEventListener('load', later, { once: true });
            })();
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col text-navy-950">
        <Suspense fallback={null}>
          <VisitorTracker />
        </Suspense>
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
