import type { Metadata } from "next";
import Hero from "../components/Hero";
import { Breadcrumb, SectionTag } from "../components/Section";
import ServiceCard, { Service } from "../components/ServiceCard";
import { SERVICES } from "../components/services-data";
import WhyChooseUs from "../components/WhyChooseUs";
import ProcessSteps from "../components/ProcessSteps";
import CTABanner from "../components/CTABanner";
import { FAQ, SERVICES_FAQS } from "../components/FAQ";
import { Reveal } from "../components/Reveal";
import { stagger } from "../components/stagger";
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
      />

      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-10">
        <Reveal direction="up">
          <Breadcrumb current="Services" />
        </Reveal>
        <div className="mt-8">
          <Reveal direction="up" delay={80}>
            <SectionTag
              eyebrow="What We Offer"
              title="Our Digitizing Services"
              subtitle="We provide a wide range of embroidery digitizing services to meet all your needs."
            />
          </Reveal>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <Reveal key={s.slug} direction="up" delay={stagger(SERVICES.indexOf(s), 80)}>
              <ServiceCard service={s as Service} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Our Portfolio - Featured Digitizing Work */}
      <PortfolioSection />

      <WhyChooseUs
        eyebrow="Why Choose velora?"
        title="We Deliver More Than Just Stitches"
        items={WHY_ITEMS}
      />

      <ProcessSteps />
      
      {/* FAQ Section */}
      <FAQ 
        items={SERVICES_FAQS}
        title="Services - Frequently Asked Questions"
        subtitle="Questions about our embroidery digitizing services and capabilities."
      />
      
      <CTABanner />
    </>
  );
}