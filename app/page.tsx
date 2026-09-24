import Hero from "./components/Hero";
import FeaturesSection from "./components/FeaturesSection";
import homeBg from "./images/velora-embroidery-machine-lion.webp";
import ServicesGrid from "./components/ServicesGrid";
// import WhyChooseUs from "./components/WhyChooseUs";
import FeaturedCategories from "./components/FeaturedCategories";
import PatchesStoreSection from "./components/PatchesStoreSection";
import ProcessSteps from "./components/ProcessSteps";
import Testimonials from "./components/Testimonials";
import CTABanner from "./components/CTABanner";
import { FAQ, HOME_FAQS } from "./components/FAQ";
import HomeStats from "./components/HomeStats";

// const WHY_CHOOSE_ITEMS: {
//   icon: Parameters<typeof WhyChooseUs>[0]["items"][number]["icon"];
//   title: string;
// }[] = [
//   { icon: "headset", title: "24/7 Support" },
//   { icon: "rocket", title: "Fast Delivery" },
//   { icon: "refresh", title: "Unlimited Revisions" },
//   { icon: "award", title: "High Stitch Quality" },
//   { icon: "tag", title: "Affordable Pricing" },
//   { icon: "shield", title: "100% Satisfaction Guaranteed" },
// ];

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.veloradigitizing.com/#localbusiness",
      "name": "Velora Digitizing",
      "url": "https://www.veloradigitizing.com",
      "logo": "https://www.veloradigitizing.com/icon1.png",
      "image": "https://www.veloradigitizing.com/images/og/og-home.webp",
      "telephone": "+1-213-456-7880",
      "email": "info@veloradigitizing.com",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "128 Business Blvd, Suite 204",
        "addressLocality": "Los Angeles",
        "addressRegion": "CA",
        "postalCode": "90017",
        "addressCountry": "US",
      },
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
            "Sunday",
          ],
          "opens": "00:00",
          "closes": "23:59",
        },
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "520",
        "bestRating": "5",
        "worstRating": "1",
      },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is embroidery digitizing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Embroidery digitizing is the process of converting your artwork, logo, or design into a digital stitch file (such as DST, PES, or JEF) that embroidery machines can read and sew onto fabric.",
          },
        },
        {
          "@type": "Question",
          "name": "How long does it take to complete an order?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Standard orders are delivered within 12–24 hours. We also offer rush services including 2-hour, 4-hour, and same-day delivery for urgent projects.",
          },
        },
        {
          "@type": "Question",
          "name": "What file formats do you deliver?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We deliver files in all major embroidery formats: DST, PES, EXP, JEF, VP3, XXX, HUS, CSD, SEW, and EMB.",
          },
        },
        {
          "@type": "Question",
          "name": "Do you offer free revisions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! All plans include free revisions until you're completely satisfied with the stitch quality.",
          },
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <Hero
        eyebrow="Precision. Quality. Perfection."
        titleLines={[
          { text: "Premium Embroidery" },
          { text: "Digitizing Services", accent: true },
        ]}
        description="We convert your artwork into flawless embroidery files with highest stitch quality, fast turnaround and 100% satisfaction."
        bgImage={homeBg}
        imageLabel="Velora multi-needle embroidery machine stitching a colorful lion-with-crown design"
        features={[
          {
            icon: "clock",
            title: "Fast Delivery",
            sub: "Delivery within 8-24 hours",
          },
          {
            icon: "award",
            title: "High Quality",
            sub: "Premium stitch craftsmanship",
          },
          {
            icon: "headset",
            title: "24/7 Support",
            sub: "Round-the-clock assistance",
          },
          {
            icon: "shield",
            title: "Satisfaction",
            sub: "100% money-back guaranteed",
          },
        ]}
      />

      <FeaturesSection />

      <ServicesGrid />

      <FeaturedCategories />

      {/* <WhyChooseUs
        eyebrow="Why Choose Velora?"
        title="We Make The Difference"
        items={WHY_CHOOSE_ITEMS}
      /> */}

      <ProcessSteps />

      <HomeStats />

      <Testimonials />

      <PatchesStoreSection />

      <FAQ
        items={HOME_FAQS}
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our embroidery digitizing services."
      />

      <CTABanner />
    </>
  );
}
