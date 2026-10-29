import Link from "next/link";
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
        showQuickServices
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

          {/* Direct Crawlable Core Services Navigation for Googlebot & Users */}
          <div className="mt-10 border-t border-navy-950/10 pt-8">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-brand-600">
              Direct Service Navigation
            </p>
            <h3 className="mt-1 font-serif text-xl font-bold text-navy-950">
              Specialized Digitizing Solutions &amp; Machine File Formats
            </h3>
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Link
                href="/services/3d-puff-digitizing"
                className="group flex flex-col justify-between rounded-xl border border-navy-950/10 bg-white p-4 shadow-sm transition-all hover:border-brand-600 hover:shadow-md"
              >
                <div>
                  <h4 className="font-serif text-base font-bold text-navy-950 group-hover:text-brand-600">
                    3D Puff Embroidery Digitizing &rarr;
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-navy-950/70">
                    Custom raised EVA foam digitizing for snapbacks, caps, and streetwear hoodies with calibrated density and end-capping.
                  </p>
                </div>
                <span className="mt-3 text-[11px] font-semibold text-brand-600">DST, PES Files &middot; 8-24h Turnaround</span>
              </Link>
              <Link
                href="/services/cap-logo-digitizing"
                className="group flex flex-col justify-between rounded-xl border border-navy-950/10 bg-white p-4 shadow-sm transition-all hover:border-brand-600 hover:shadow-md"
              >
                <div>
                  <h4 className="font-serif text-base font-bold text-navy-950 group-hover:text-brand-600">
                    Cap &amp; Hat Logo Digitizing &rarr;
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-navy-950/70">
                    Center-out curved frame digitizing engineered for baseball caps, trucker hats, and dad hats with zero seam bunching.
                  </p>
                </div>
                <span className="mt-3 text-[11px] font-semibold text-brand-600">Curved Frames &middot; High Density</span>
              </Link>
              <Link
                href="/services/applique-digitizing"
                className="group flex flex-col justify-between rounded-xl border border-navy-950/10 bg-white p-4 shadow-sm transition-all hover:border-brand-600 hover:shadow-md"
              >
                <div>
                  <h4 className="font-serif text-base font-bold text-navy-950 group-hover:text-brand-600">
                    Applique Embroidery Digitizing &rarr;
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-navy-950/70">
                    Accurate positioning lines, tackdown stitches, and satin edge borders for sports jerseys and varsity letter apparel.
                  </p>
                </div>
                <span className="mt-3 text-[11px] font-semibold text-brand-600">Fabric Cut Lines &middot; Laser Ready</span>
              </Link>
              <Link
                href="/patches"
                className="group flex flex-col justify-between rounded-xl border border-navy-950/10 bg-white p-4 shadow-sm transition-all hover:border-brand-600 hover:shadow-md"
              >
                <div>
                  <h4 className="font-serif text-base font-bold text-navy-950 group-hover:text-brand-600">
                    Custom Patch Digitizing &rarr;
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-navy-950/70">
                    Embroidered, woven, PVC, and chenille patch design with merrowed borders, iron-on, and velcro backing options.
                  </p>
                </div>
                <span className="mt-3 text-[11px] font-semibold text-brand-600">Physical &middot; Digital Patches</span>
              </Link>
              <Link
                href="/vector-art"
                className="group flex flex-col justify-between rounded-xl border border-navy-950/10 bg-white p-4 shadow-sm transition-all hover:border-brand-600 hover:shadow-md"
              >
                <div>
                  <h4 className="font-serif text-base font-bold text-navy-950 group-hover:text-brand-600">
                    Vector Art Conversion &rarr;
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-navy-950/70">
                    High-resolution manual raster-to-vector artwork recreation for screen printing, vinyl cutting, and DTF heat transfers.
                  </p>
                </div>
                <span className="mt-3 text-[11px] font-semibold text-brand-600">AI, EPS, SVG &middot; Clean Paths</span>
              </Link>
              <Link
                href="/services"
                className="group flex flex-col justify-between rounded-xl border border-brand-600/20 bg-brand-50/50 p-4 shadow-sm transition-all hover:border-brand-600 hover:shadow-md"
              >
                <div>
                  <h4 className="font-serif text-base font-bold text-navy-950 group-hover:text-brand-600">
                    All Digitizing Services &rarr;
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-navy-950/70">
                    Explore our complete digitizing portfolio including jacket back, left chest, towel monogram, and custom packages.
                  </p>
                </div>
                <span className="mt-3 text-[11px] font-semibold text-brand-600">View Full Catalog &middot; Free Quote</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ServicesGrid showAllLink />

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
          "best-free-embroidery-digitizing-software-inkstitch-guide",
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
