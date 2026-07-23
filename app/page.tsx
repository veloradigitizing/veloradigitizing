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

export default function Home() {
  return (
    <>
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
