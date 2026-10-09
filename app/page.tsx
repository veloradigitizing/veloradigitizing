import Hero from "./components/Hero";
import FeaturesSection from "./components/FeaturesSection";
import homeBg from "./images/velora-embroidery-machine-lion.webp";
import ServicesGrid from "./components/ServicesGrid";
// import WhyChooseUs from "./components/WhyChooseUs";
//
import FeaturedCategories from "./components/FeaturedCategories";
import PatchesStoreSection from "./components/PatchesStoreSection";
import ProcessSteps from "./components/ProcessSteps";
import Testimonials from "./components/Testimonials";
import CTABanner from "./components/CTABanner";
import { FAQ } from "./components/FAQ";
import { HOME_FAQS } from "./components/faq-data";
import HomeStats from "./components/HomeStats";
import RelatedGuides from "./components/RelatedGuides";

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

export default function Home() {
  return (
    <>
      <Hero
        eyebrow="Precision Stitch Engineering"
        titleLines={[
          { text: "Custom Embroidery" },
          { text: "Digitizing Services", accent: true },
        ]}
        description="We convert logos & artwork into production-ready embroidery files (DST, PES, EXP). Specialized in 3D puff, cap logos, left chest & fast 8-24h delivery."
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

      <RelatedGuides
        title="Featured Embroidery Digitizing Guides"
        subtitle="Expert insights on manual vs AI digitizing, vector preparation, file formats, and stitch engineering."
        slugs={[
          "vector-art-for-screen-printing-vs-embroidery",
          "manual-digitizing-vs-ai-auto-digitizing",
          "best-online-embroidery-digitizing-services-comparison-guide",
          "what-is-embroidery-digitizing",
          "embroidery-digitizing-cost-pricing-guide",
          "3d-puff-embroidery-digitizing-guide",
        ]}
      />

      <FAQ
        items={HOME_FAQS}
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our embroidery digitizing services."
      />

      <CTABanner />
    </>
  );
}
