import Link from "next/link";
import Hero from "./components/Hero";
import PlaceholderBox from "./components/PlaceholderBox";
import { SectionTag } from "./components/Section";
import ServiceCard, { SERVICES } from "./components/ServiceCard";
import WhyChooseUs from "./components/WhyChooseUs";
import PortfolioCard, { PORTFOLIO_ITEMS } from "./components/PortfolioCard";
import ProcessSteps from "./components/ProcessSteps";
import Testimonials from "./components/Testimonials";
import CTABanner from "./components/CTABanner";

const BRANDS = ["Nike", "Adidas", "Puma", "Under Armour", "New Era"];

const WHY_CHOOSE_ITEMS: { icon: Parameters<typeof WhyChooseUs>[0]["items"][number]["icon"]; title: string }[] = [
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

      <section className="border-y border-navy-950/5 bg-white py-10">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
            Trusted By Global Brands
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 divide-x divide-navy-950/10">
            {BRANDS.map((brand) => (
              <div key={brand} className="px-6 first:pl-0">
                <PlaceholderBox
                  label={brand}
                  className="h-12 w-32"
                  rounded="rounded-md"
                  iconSize={18}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
        <SectionTag eyebrow="Our Services" title="What We Offer" />
        <div className="mt-14 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.slice(0, 3).map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>

      <WhyChooseUs
        eyebrow="Why Choose Velora?"
        title="We Make The Difference"
        items={WHY_CHOOSE_ITEMS}
      />

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
        <SectionTag eyebrow="Our Recent Work" title="Portfolio" />
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO_ITEMS.slice(0, 6).map((item) => (
            <PortfolioCard key={item.title} item={item} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link
            href="/portfolio"
            className="flex items-center gap-2 rounded-md bg-brand-600 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
          >
            VIEW FULL PORTFOLIO <span aria-hidden>&rarr;</span>
          </Link>
        </div>
      </section>

      <ProcessSteps />
      <Testimonials />
      <CTABanner />
    </>
  );
}
