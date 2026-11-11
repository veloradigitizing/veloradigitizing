import Hero from "../components/Hero";
import portfolioBg from "../images/velora-embroidery-showcase.webp";
import PortfolioGallery from "../components/PortfolioGallery";
import { FAQ } from "../components/FAQ";
import { PORTFOLIO_FAQS } from "../components/faq-data";
import HomeStats from "../components/HomeStats";
import TestimonialCTASection from "../components/TestimonialCTASection";
import WhyChooseUs from "../components/WhyChooseUs";
import CTABanner from "../components/CTABanner";

const WHY_CHOOSE_ITEMS = [
  { icon: "diamond" as const, title: "Premium Quality", description: "Top-notch quality with perfect stitching and attention to every detail." },
  { icon: "clock" as const, title: "Fast Delivery", description: "Standard plan files in 12 to 24 hours. Rush plan in 2 to 4 hours for urgent needs." },
  { icon: "refresh" as const, title: "Free Revisions", description: "Every plan includes free revisions: 1 on Basic, 3 on Standard, unlimited on Rush." },
  { icon: "smile" as const, title: "Expert Digitizers", description: "Professional digitizers with 10+ years of experience in every stitch type." },
];

export default function PortfolioPage() {
  return (
    <>
      <Hero
        eyebrow="Work That Speaks"
        titleLines={[
          { text: "Precision Work," },
          { text: "Perfect Results", accent: true },
        ]}
        description="Explore our latest embroidery digitizing projects. Every design is crafted with precision, quality, and perfection."
        bgImage={portfolioBg}
        imageLabel="Showcase of embroidered Velora apparel and accessories"
        features={[
          { icon: "trophy", title: "3,200+ Projects", sub: "3,200+ projects delivered" },
          { icon: "grid", title: "All Categories", sub: "Caps, jackets, bags & more" },
          { icon: "scissors", title: "Custom Work", sub: "Tailored to your design needs" },
          { icon: "star", title: "Top Rated", sub: "Top-rated by happy clients" },
        ]}
      />

      <PortfolioGallery />
      <HomeStats />
      <WhyChooseUs eyebrow="Why Choose Velora" title="The Velora Difference" items={WHY_CHOOSE_ITEMS} columns={4} />
      <FAQ items={PORTFOLIO_FAQS} title="Portfolio - Frequently Asked Questions" subtitle="Questions about our portfolio, samples, and previous work." />
      <TestimonialCTASection />
      <CTABanner />
    </>
  );
}
