import Link from "next/link";
import type { ReactNode } from "react";
import { SiNike, SiAdidas, SiPuma, SiUnderarmour } from "react-icons/si";
import Hero from "./components/Hero";
import { SectionTag } from "./components/Section";
import ServiceCard, { SERVICES } from "./components/ServiceCard";
import WhyChooseUs from "./components/WhyChooseUs";
import PortfolioCard, { PORTFOLIO_ITEMS } from "./components/PortfolioCard";
import BundleCarousel from "./components/BundleCarousel";
import FeaturedCategories from "./components/FeaturedCategories";
import ProcessSteps from "./components/ProcessSteps";
import Testimonials from "./components/Testimonials";
import CTABanner from "./components/CTABanner";
import { Reveal } from "./components/Reveal";
import { stagger } from "./components/stagger";
function NikeLogo() {
  return (
    <span className="flex items-center gap-1.5">
      <SiNike size={22} />
      <span className="text-xl font-black italic tracking-tighter">NIKE</span>
    </span>
  );
}

function NewEraLogo() {
  return (
    <span className="flex items-center gap-2">
      <span className="flex h-8 w-8 items-center justify-center rounded-[3px] bg-navy-950 text-[10px] font-black italic text-white">
        NE
      </span>
      <span className="text-[11px] font-extrabold uppercase leading-[1.05] tracking-wide">
        New
        <br />
        Era
      </span>
    </span>
  );
}

const BRANDS: { name: string; render: () => ReactNode }[] = [
  { name: "Nike", render: () => <NikeLogo /> },
  { name: "Adidas", render: () => <SiAdidas size={40} aria-label="Adidas" /> },
  { name: "Puma", render: () => <SiPuma size={40} aria-label="Puma" /> },
  {
    name: "Under Armour",
    render: () => <SiUnderarmour size={38} aria-label="Under Armour" />,
  },
  { name: "New Era", render: () => <NewEraLogo /> },
];

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
  const marqueeBrands = [...BRANDS, ...BRANDS];

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

      {/* Brand strip */}
      <section className="border-y border-navy-950/5 bg-white py-12 border-t-0">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <Reveal direction="up">
            <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
              Trusted By Global Brands
            </p>
          </Reveal>

          <div className="mt-8 hidden flex-wrap items-center justify-between divide-x divide-navy-950/10 lg:flex">
            {BRANDS.map((brand, i) => (
              <Reveal
                key={brand.name}
                direction="up"
                delay={stagger(i, 90)}
                className="flex h-14 flex-1 items-center justify-center px-4 text-navy-950 grayscale transition-all duration-300 hover:grayscale-0 hover:text-brand-600"
              >
                {brand.render()}
              </Reveal>
            ))}
          </div>

          <div className="vr-marquee mt-8 flex overflow-hidden lg:hidden">
            <div className="vr-marquee-track flex shrink-0 items-center gap-12 pr-12">
              {marqueeBrands.map((brand, i) => (
                <div key={`${brand.name}-${i}`} className="flex h-14 items-center justify-center text-navy-950">
                  {brand.render()}
                </div>
              ))}
            </div>
            <div className="vr-marquee-track flex shrink-0 items-center gap-12 pr-12" aria-hidden>
              {marqueeBrands.map((brand, i) => (
                <div key={`${brand.name}-dup-${i}`} className="flex h-14 items-center justify-center text-navy-950">
                  {brand.render()}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: Services */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
        <Reveal direction="up">
          <SectionTag eyebrow="Our Services" title="What We Offer" />
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.slice(0, 3).map((s, i) => (
            <Reveal key={s.slug} direction="up" delay={stagger(i, 120)}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* SECTION 2: Featured Categories Carousel (Vesper-style layout) */}
      <FeaturedCategories />

      <WhyChooseUs
        eyebrow="Why Choose Velora?"
        title="We Make The Difference"
        items={WHY_CHOOSE_ITEMS}
      />

      {/* Portfolio Grid */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
        <Reveal direction="up">
          <SectionTag eyebrow="Our Recent Work" title="Portfolio" />
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO_ITEMS.slice(0, 6).map((item, i) => (
            <Reveal key={item.title} direction="up" delay={stagger(i, 90)}>
              <PortfolioCard item={item} />
            </Reveal>
          ))}
        </div>
        <Reveal direction="up" className="mt-10 flex justify-center">
          <Link
            href="/portfolio"
            className="vr-btn vr-btn-primary flex items-center gap-2 rounded-md bg-brand-600 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
          >
            VIEW FULL PORTFOLIO{" "}
            <span aria-hidden className="vr-arrow">&rarr;</span>
          </Link>
        </Reveal>
      </section>

      {/* Bundle Carousel Section */}
      <BundleCarousel />

      <ProcessSteps />
      <Testimonials />
      <CTABanner />
    </>
  );
}
