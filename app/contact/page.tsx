import type { Metadata } from "next";
import Hero from "../components/Hero";
import contactBg from "../images/velora-contact-workspace.webp";
import ContactInfoPanel from "../components/ContactInfoPanel";
import ContactForm from "../components/ContactForm";
import WhatsAppBanner from "../components/WhatsAppBanner";
import TestimonialCTASection from "../components/TestimonialCTASection";
import Icon, { IconName } from "../components/Icon";
import { FAQ, CONTACT_FAQS } from "../components/FAQ";
import CTABanner from "../components/CTABanner";

export const metadata: Metadata = {
  title: "Contact Us for Free Digitizing Quote",
  description:
    "Contact Velora Digitizing for free quotes, rush orders, or embroidery inquiries. Available 24/7 via WhatsApp, phone, or email. Get your free estimate now!",
  alternates: {
    canonical: "https://www.veloradigitizing.com/contact",
  },
  openGraph: {
    title: "Contact Velora Digitizing | Free Quote & 24/7 Support",
    description:
      "Contact Velora Digitizing for free quotes, rush orders, or embroidery inquiries. Available 24/7 via WhatsApp, phone, or email. Get your free estimate now!",
    url: "https://www.veloradigitizing.com/contact",
    siteName: "Velora Digitizing",
    images: [
      {
        url: "/images/og/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Velora Digitizing — 24/7 Customer Support and Free Quotes",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Velora Digitizing | Free Quote & 24/7 Support",
    description:
      "Get in touch with our embroidery digitizing specialists for free quotes and rapid project turnaround.",
    images: ["/images/og/og-contact.jpg"],
  },
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "name": "Contact Velora Digitizing",
      "url": "https://www.veloradigitizing.com/contact",
      "description":
        "Contact page for requesting free embroidery digitizing quotes, vector conversions, and customer support.",
      "mainEntity": {
        "@type": "ProfessionalService",
        "name": "Velora Digitizing",
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
          "name": "Contact",
          "item": "https://www.veloradigitizing.com/contact",
        },
      ],
    },
  ],
};

const CONTACT_INFO: { icon: IconName; title: string; lines: string[] }[] = [
  {
    icon: "mail",
    title: "Email Us",
    lines: ["info@veloradigitizing.com", "24/7 Order Intake & Inquiries"],
  },
  {
    icon: "phone",
    title: "Phone & WhatsApp",
    lines: ["+1 (213) 635-8137", "WhatsApp: 24/7 | Phone: Mon-Sat 9AM-7PM PT"],
  },
  {
    icon: "globe",
    title: "Website",
    lines: ["www.veloradigitizing.com", "Send your order any time"],
  },
  {
    icon: "pin",
    title: "Office Location",
    lines: ["128 Business Blvd, Suite 204", "Los Angeles, CA 90017, USA"],
  },
];

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <Hero
        eyebrow="Let's Talk"
        titleLines={[
          { text: "We're Here to" },
          { text: "Bring Your Designs", accent: true },
          { text: "to Life" },
        ]}
        description="Have a question or need a quote? Get in touch with us today. We're always ready to help you with premium digitizing services."
        bgImage={contactBg}
        imageLabel="Close-up of hands embroidering intricate blue and gold floral patterns"
        features={[
          { icon: "headset", title: "24/7 Support", sub: "Round-the-clock assistance" },
          { icon: "send", title: "1h Response", sub: "1-hour average reply time" },
          { icon: "tag", title: "Free Quotes", sub: "Free quotes, no obligation" },
          { icon: "shield", title: "100% Satisfaction", sub: "100% money-back guaranteed" },
        ]}
      />

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[380px_1fr]">
          <ContactInfoPanel contactInfo={CONTACT_INFO} />
          <ContactForm />
        </div>
      </section>

      <WhatsAppBanner />

      <FAQ
        items={CONTACT_FAQS}
        title="Frequently Asked Questions"
        subtitle="Quick answers about turnaround, file formats, and how to send us your artwork. Can't find what you're looking for? Reach out anytime."
        eyebrow="FAQ"
        showCta
        ctaLabel="Send Us a Message"
        ctaHref="#contact-form"
      />

      <TestimonialCTASection
        eyebrow="Client Story"
        title="Responsive. Reliable. Ready to Help."
        testimonials={[
          {
            quote:
              "Turnaround was under 10 hours. Stitch pathing was optimized with minimal trims. Ran clean on our 6-head Tajima with zero thread breaks.",
            author: "Marcus T.",
            authorOrigin: "Screen Printing & Embroidery (Ohio, USA)",
            authorInitial: "MT",
          },
          {
            quote:
              "Clean pull-compensation on pique cotton polos. Even the 4mm secondary text was sharp and legible.",
            author: "Jason L.",
            authorOrigin: "Workwear & Uniforms (Ontario, Canada)",
            authorInitial: "JL",
          },
          {
            quote:
              "High density fill without puckering. Excellent communication via WhatsApp for rush delivery.",
            author: "Liam W.",
            authorOrigin: "Merch Designer (Manchester, UK)",
            authorInitial: "LW",
          },
        ]}
        ctaTitle="Let's Start Your Project"
        ctaSubtitle="Send us your design and get a free quote within 1 hour."
        ctaLabel="SEND YOUR DESIGN"
        ctaHref="#contact-form"
      />

      <CTABanner />
    </>
  );
}
