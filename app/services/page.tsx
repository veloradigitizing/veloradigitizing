import type { Metadata } from "next";
import Hero from "../components/Hero";
import ServicesGrid from "../components/ServicesGrid";
import WhyChooseUs from "../components/WhyChooseUs";
import ProcessSteps from "../components/ProcessSteps";
import CTABanner from "../components/CTABanner";
import { FAQ, SERVICES_FAQS } from "../components/FAQ";
import PortfolioSection from "../components/PortfolioSection";

export const metadata: Metadata = {
  title: "Services | Velora Digitizing",
  description:
    "Explore Velora Digitizing's full range of embroidery digitizing services — logos, patches, 3D puff, applique, chenille and more.",
};

const WHY_ITEMS: {
  icon: "award" | "rocket" | "refresh" | "tag" | "headset" | "shield";
  title: string;
}[] = [
  { icon: "award", title: "High Quality Stitching" },
  { icon: "rocket", title: "Super Fast Delivery" },
  { icon: "refresh", title: "Unlimited Revisions" },
  { icon: "tag", title: "Affordable Pricing" },
  { icon: "headset", title: "24/7 Customer Support" },
  { icon: "shield", title: "100% Satisfaction Guaranteed" },
];

export default function ServicesPage() {
  return (
    <>
      <Hero
        eyebrow="Our Services"
        titleLines={[
          { text: "Premium Embroidery" },
          { text: "Digitizing Services", accent: true },
        ]}
        description="We offer high quality embroidery digitizing services with fast turnaround, perfect stitching and 100% customer satisfaction."
        backgroundImage="/images/hero-images/ChatGPT Image Jul 20, 2026, 07_01_55 PM.png"
      />

      <ServicesGrid
        className="!py-10"
      />

      <PortfolioSection />

      <WhyChooseUs
        eyebrow="Why Choose velora?"
        title="We Deliver More Than Just Stitches"
        items={WHY_ITEMS}
      />

      <ProcessSteps />

      <FAQ
        items={SERVICES_FAQS}
        title="Services - Frequently Asked Questions"
        subtitle="Questions about our embroidery digitizing services and capabilities."
      />

      <CTABanner />
    </>
  );
}
