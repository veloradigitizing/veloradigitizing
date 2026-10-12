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
  const homeFaqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://www.veloradigitizing.com/#faq",
    "mainEntity": HOME_FAQS.slice(0, 8).map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqJsonLd) }}
      />
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

      {/* AI Search & Overview Quick Reference */}
      <section className="bg-slate-50 border-y border-navy-950/10 py-14">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
              Quick Reference &amp; Specifications
            </p>
            <h2 className="mt-2 font-serif text-2xl font-bold text-navy-950 sm:text-3xl">
              Commercial Embroidery Digitizing Services at a Glance
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-navy-950/75">
              Velora Digitizing provides precision manual embroidery digitizing and vector conversion services for commercial apparel decorators, uniform suppliers, promotional product distributors, and embroidery businesses worldwide.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-navy-950/10 bg-white p-5 shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-wider text-navy-950/60">Turnaround Speed</h3>
              <p className="mt-2 font-serif text-lg font-bold text-navy-950">8 to 24 Hours</p>
              <p className="mt-1 text-xs text-navy-950/70">Rush turnaround available in 2–4 hours for urgent production deadlines.</p>
            </div>
            <div className="rounded-xl border border-navy-950/10 bg-white p-5 shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-wider text-navy-950/60">Supported Formats</h3>
              <p className="mt-2 font-serif text-lg font-bold text-navy-950">DST, PES, EXP, JEF</p>
              <p className="mt-1 text-xs text-navy-950/70">Plus VP3, XXX, HUS, CSD, SEW, and native EMB source stitch files.</p>
            </div>
            <div className="rounded-xl border border-navy-950/10 bg-white p-5 shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-wider text-navy-950/60">Digitizing Method</h3>
              <p className="mt-2 font-serif text-lg font-bold text-navy-950">100% Manual Punching</p>
              <p className="mt-1 text-xs text-navy-950/70">Hand-plotted stitch angles, custom underlays, and zero automated auto-tracing.</p>
            </div>
            <div className="rounded-xl border border-navy-950/10 bg-white p-5 shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-wider text-navy-950/60">Quality Assurance</h3>
              <p className="mt-2 font-serif text-lg font-bold text-navy-950">Machine Sew-Out Tested</p>
              <p className="mt-1 text-xs text-navy-950/70">Free revisions, simulated stitch previews, and 100% money-back satisfaction guarantee.</p>
            </div>
          </div>
        </div>
      </section>

      <ServicesGrid />

      <FeaturedCategories />

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
