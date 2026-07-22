import type { Metadata } from "next";
import Hero from "../components/Hero";
import servicesBg from "../images/velora-embroidery-workstation.webp";
import ServicesGrid from "../components/ServicesGrid";
import WhyChooseUs from "../components/WhyChooseUs";
import ProcessSteps from "../components/ProcessSteps";
import CTABanner from "../components/CTABanner";
import TestimonialCTASection from "../components/TestimonialCTASection";
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
        eyebrow="What We Digitize"
        titleLines={[
          { text: "Premium Embroidery" },
          { text: "Digitizing Services", accent: true },
        ]}
        description="We offer high quality embroidery digitizing services with fast turnaround, perfect stitching and 100% customer satisfaction."
        bgImage={servicesBg}
        imageLabel="Professional Velora embroidery digitizing workspace"
        features={[
          { icon: "clock", title: "Fast Delivery", sub: "8-24 hours turnaround" },
          { icon: "layers", title: "All Formats", sub: "DST, PES, JEF & more" },
          { icon: "tag", title: "Free Quote", sub: "No hidden charges" },
          { icon: "shield", title: "Satisfaction", sub: "100% money back guarantee" },
        ]}
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

      <TestimonialCTASection
        eyebrow="Client Story"
        title="Service That Exceeds Expectations"
        testimonials={[
          {
            quote:
              "Best digitizing service I have worked with. Very professional and reliable.",
            author: "Michael Brown",
            authorOrigin: "Canada",
            authorImage: "/images/testimonials/michael-brown.png",
          },
          {
            quote:
              "From flat embroidery to complex patches, they nail the stitch density every single time.",
            author: "Laura Bennett",
            authorOrigin: "USA",
            authorInitial: "L",
          },
          {
            quote:
              "Great value for the quality delivered. Their vector art service saved us hours of manual cleanup.",
            author: "Ahmed Khan",
            authorOrigin: "UAE",
            authorInitial: "A",
          },
        ]}
        ctaTitle="Need Help Choosing a Service?"
        ctaSubtitle="Tell us about your project and we'll recommend the perfect digitizing solution."
        ctaLabel="TALK TO AN EXPERT"
        ctaHref="/contact"
      />

      <CTABanner />
    </>
  );
}
