import Link from "next/link";
import type { ReactNode } from "react";
import Hero from "./components/Hero";
import { SectionTag } from "./components/Section";
import ServiceCard from "./components/ServiceCard";
import { SERVICES } from "./components/services-data";
import WhyChooseUs from "./components/WhyChooseUs";
import FeaturedCategories from "./components/FeaturedCategories";
import PatchesStoreSection from "./components/PatchesStoreSection";
import ProcessSteps from "./components/ProcessSteps";
import Testimonials from "./components/Testimonials";
import CTABanner from "./components/CTABanner";
import { FAQ, HOME_FAQS } from "./components/FAQ";
import { Reveal } from "./components/Reveal";
import Icon from "./components/Icon";
import { stagger } from "./components/stagger";







const WHY_CHOOSE_ITEMS: {
  icon: Parameters<typeof WhyChooseUs>[0]["items"][number]["icon"];
  title: string;
}[] = [
  { icon: "headset", title: "24/7 Support" },
  { icon: "rocket", title: "Fast Delivery" },
  { icon: "refresh", title: "Unlimited Revisions" },
  { icon: "award", title: "High Stitch Quality" },
  { icon: "tag", title: "Affordable Pricing" },
  { icon: "shield", title: "100% Satisfaction Guaranteed" },
];

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
      />

      {/* Stats Section */}
      <section className="bg-navy-950 py-12 lg:py-14">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {[
              { icon: "award", value: "15,000+", label: "Projects Completed" },
              { icon: "smile", value: "8,000+", label: "Happy Clients" },
              { icon: "clock", value: "2-24 Hrs", label: "Turnaround Time" },
              { icon: "globe", value: "50+", label: "Countries Served" },
            ].map((stat, i) => (
              <Reveal
                key={stat.label}
                direction="up"
                delay={stagger(i, 100)}
                className="flex items-center justify-center gap-3"
              >
                <Icon name={stat.icon} className="h-8 w-8 shrink-0 text-brand-50/80" />
                <div>
                  <p className="font-serif text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-white/50">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: Our Digitizing Services - Same as Services Page */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-10 lg:py-20">
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
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} direction="up" delay={stagger(i, 80)}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* SECTION: Featured Categories Carousel */}
      <FeaturedCategories />

      <WhyChooseUs
        eyebrow="Why Choose Velora?"
        title="We Make The Difference"
        items={WHY_CHOOSE_ITEMS}
      />

      <ProcessSteps />
      <Testimonials />

      {/* Patches Store Section */}
      <PatchesStoreSection />

      {/* FAQ Section */}
      <FAQ
        items={HOME_FAQS}
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our embroidery digitizing services."
      />

      <CTABanner />
    </>
  );
}