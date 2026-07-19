"use client";

import Hero from "../components/Hero";
import { Breadcrumb, SectionTag } from "../components/Section";
import { Reveal } from "../components/Reveal";
import { stagger } from "../components/stagger";
import WhyChooseUs from "../components/WhyChooseUs";
import ProcessSteps from "../components/ProcessSteps";
import CTABanner from "../components/CTABanner";
import Icon from "../components/Icon";

const VECTOR_TYPES = [
  { icon: "share", title: "Raster to Vector", desc: "Convert low-resolution JPEG, PNG, or BMP images into crisp, scalable vector files. Perfect for logos and artwork that need to be resized without losing quality." },
  { icon: "award", title: "Logo Vectorization", desc: "Recreate your existing logo as a clean vector file with precise paths, accurate colors, and proper layering. Ideal for print, embroidery, and large-format applications." },
  { icon: "scissors", title: "Applique Vector", desc: "Create vector files optimized for applique cutting machines. Includes proper tack-down stitches, placement lines, and material boundaries for clean production." },
  { icon: "sliders", title: "Color Separation", desc: "Separate complex multi-color designs into individual vector layers for screen printing, vinyl cutting, or multi-needle embroidery production workflows." },
  { icon: "refresh", title: "Vector Cleanup", desc: "Fix poor-quality vectors with proper node editing, curve smoothing, and path optimization. Transform messy auto-traced files into production-ready artwork." },
  { icon: "rocket", title: "Print-Ready Files", desc: "Prepare vector artwork for commercial printing with proper bleed, color profiles, and formatting. Compatible with offset, digital, and large-format print methods." },
];

const FORMATS = [
  { label: "AI", desc: "Adobe Illustrator" },
  { label: "EPS", desc: "Encapsulated PostScript" },
  { label: "SVG", desc: "Scalable Vector Graphics" },
  { label: "PDF", desc: "Print-ready format" },
  { label: "CDR", desc: "CorelDRAW" },
  { label: "DXF", desc: "CAD exchange format" },
];

const FAQS = [
  { q: "What file formats do you accept as input?", a: "We accept virtually any raster or vector format including JPEG, PNG, GIF, BMP, TIFF, PSD, PDF, AI, EPS, CDR, and even hand-drawn sketches or photographs." },
  { q: "What vector formats do you deliver?", a: "We deliver in AI, EPS, SVG, PDF, CDR, and DXF formats. You will receive all formats in a single delivery unless you specify a particular format preference. All files are fully editable with proper layers." },
  { q: "How long does vector conversion take?", a: "Standard turnaround is 12-24 hours for most designs. Complex illustrations may take up to 48 hours. Rush delivery under 6 hours is available for an additional 40% fee." },
  { q: "Can you vectorize a photograph?", a: "Yes, we can convert photographs into vector artwork. The result depends on the complexity and quality of the original. We can create realistic illustrations, stylized interpretations, or simplified graphic versions." },
  { q: "What is the difference between auto-trace and manual vectorization?", a: "Auto-trace uses software algorithms which often produce messy paths with too many nodes. Manual vectorization is done by skilled artists who trace every element by hand, producing clean paths with smooth curves." },
  { q: "Do you offer unlimited revisions on vector art?", a: "Yes, we provide unlimited revisions until the vector artwork matches your expectations exactly. This includes adjustments to paths, colors, layers, and overall composition." },
];

const WHY_CHOOSE_ITEMS = [
  { icon: "headset", title: "24/7 Support" },
  { icon: "rocket", title: "Fast Delivery" },
  { icon: "refresh", title: "Unlimited Revisions" },
  { icon: "award", title: "High Quality Output" },
  { icon: "tag", title: "Affordable Pricing" },
  { icon: "shield", title: "100% Satisfaction Guaranteed" },
];

export default function VectorArtPage() {
  return (
    <>
      <Hero
        eyebrow="Vector Art Services"
        titleLines={[{ text: "Pixel-Perfect" }, { text: "Vector Conversion", accent: true }]}
        description="Convert any raster image into clean, scalable vector art. Manual tracing by expert artists with unlimited revisions and 24-hour turnaround."
      />
      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-10">
        <Reveal direction="up"><Breadcrumb current="Vector Art" /></Reveal>
      </section>
      <section className="bg-brand-50/50 py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <Reveal direction="up"><SectionTag eyebrow="Our Services" title="Vector Art Solutions" subtitle="Professional vector conversion services for every application and industry." /></Reveal>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {VECTOR_TYPES.map((v, i) => (
              <Reveal key={v.title} direction="up" delay={stagger(i, 80)}>
                <div className="group relative flex h-full flex-col items-start overflow-hidden rounded-xl border border-navy-950/10 bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-2xl">
                  <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-500/0 to-brand-500/0 transition-all duration-500 group-hover:from-brand-500/5 group-hover:to-transparent" />
                  <span className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-600/10 text-brand-600 ring-1 ring-brand-600/20 transition-all duration-500 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white group-hover:shadow-[0_8px_20px_-6px_rgba(26,63,196,0.5)]">
                    <Icon name={v.icon} className="h-7 w-7" />
                  </span>
                  <h3 className="relative font-serif text-lg font-bold text-navy-950">{v.title}</h3>
                  <p className="relative mt-2 flex-1 text-sm leading-relaxed text-navy-950/60">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <Reveal direction="up"><SectionTag eyebrow="Formats" title="Delivered In Every Format You Need" subtitle="We provide all major vector file formats for maximum compatibility." /></Reveal>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {FORMATS.map((f, i) => (
              <Reveal key={f.label} direction="up" delay={stagger(i, 50)}>
                <div className="group flex flex-col items-center rounded-xl border border-navy-950/10 bg-white p-5 text-center transition-all duration-500 hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-xl">
                  <div className="font-serif text-2xl font-bold text-brand-600 transition-colors group-hover:text-brand-700">{f.label}</div>
                  <p className="mt-1 text-xs text-navy-950/50">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <WhyChooseUs
        eyebrow="Why Choose Velora for Vector Art?"
        title="Vectors Done Right"
        items={WHY_CHOOSE_ITEMS}
      />
      <ProcessSteps />
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-5 lg:px-10">
          <Reveal direction="up"><SectionTag eyebrow="FAQ" title="Vector Art Questions" subtitle="Common questions about our vector conversion services." /></Reveal>
          <div className="mt-10 space-y-4">
            {FAQS.map((faq, i) => (
              <Reveal key={faq.q} direction="up" delay={stagger(i, 60)}>
                <details className="group rounded-xl border border-navy-950/10 bg-white px-5 py-4 transition-all duration-300 hover:border-brand-500/30 hover:shadow-md [&_summary]:list-none">
                  <summary className="flex cursor-pointer items-center justify-between gap-4">
                    <span className="text-sm font-semibold text-navy-950">{faq.q}</span>
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-navy-950/15 text-brand-600 transition-transform duration-300 group-open:rotate-45">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-navy-950/60">{faq.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
