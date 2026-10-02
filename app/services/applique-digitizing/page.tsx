"use client";

import Image from "next/image";
import Link from "next/link";
import Hero from "../../components/Hero";
import servicesBg from "../../images/velora-embroidery-workstation.webp";
import WhyChooseUs from "../../components/WhyChooseUs";
import CTABanner from "../../components/CTABanner";
import { FAQ } from "../../components/FAQ";
import { SectionTag } from "../../components/Hero";
import Icon, { IconName } from "../../components/Icon";

const APPLIQUE_FAQS = [
  {
    question: "What is applique digitizing?",
    answer:
      "Applique digitizing is the process of creating embroidery machine instructions that combine fabric pieces with decorative stitching. The digitizer programs specific stops for placement lines, tackdown stitches to secure the fabric piece, and finishing borders (satin or blanket stitch) to prevent fraying.",
  },
  {
    question: "Do you provide vector cut files for laser or vinyl cutters?",
    answer:
      "Yes. If you use a laser cutter, plotter, or Cricut/Silhouette to pre-cut your applique fabric, we can provide matching vector cut files (AI, SVG, PDF, DXF) aligned with the digitized embroidery placement lines.",
  },
  {
    question: "Which stitch types are used for applique borders?",
    answer:
      "The most common finishing borders are Satin stitch (dense and smooth, ideal for heavy twill and sportswear), E-stitch / Blanket stitch (classic, vintage handcrafted look), and Motif / Zig-zag stitches depending on your design aesthetic.",
  },
  {
    question: "What embroidery machine formats do you deliver?",
    answer:
      "We deliver all major machine formats including DST (commercial standard), PES (Brother/Babylock), JEF (Janome), EXP (Melco/Bernina), VP3 (Husqvarna/Pfaff), and XXX (Singer), along with a complete PDF production sheet.",
  },
  {
    question: "Can I request revisions if something needs adjustment on my machine?",
    answer:
      "Yes, we provide free revisions to ensure your applique files run smoothly on your specific embroidery machine and fabric choice.",
  },
  {
    question: "How do I order or get a quote for applique digitizing?",
    answer:
      "You can send your artwork through our Contact page or WhatsApp with your required dimensions, target garment type, and preferred machine format. We will review your design and provide a prompt quote.",
  },
];

const APPLIQUE_USE_CASES: {
  title: string;
  desc: string;
  icon: IconName;
  tag: string;
}[] = [
  {
    title: "Sports Jerseys & Tackle Twill",
    desc: "Heavy-duty tackle twill numbers and letters digitized with precise zig-zag or satin tackdown for hockey, baseball, football, and basketball jerseys.",
    icon: "award",
    tag: "Jerseys & Uniforms",
  },
  {
    title: "Varsity & Bomber Jackets",
    desc: "Large multi-layered felt and twill chest emblems, mascots, and back logos digitized to minimize overall stitch count while keeping a bold texture.",
    icon: "badge",
    tag: "Jackets & Outerwear",
  },
  {
    title: "Hoodies & Sweatshirts",
    desc: "Soft-hand applique embroidery for collegiate hoodies, streetwear brands, and lifestyle apparel that drape comfortably without stiff embroidery puckering.",
    icon: "shirt-logo",
    tag: "Fleece & Streetwear",
  },
  {
    title: "Custom Patches & Emblems",
    desc: "Clean applique patches with twill base fabrics and clean merrow or satin finished borders for clubs, schools, uniforms, and corporate merch.",
    icon: "sticker",
    tag: "Patches & Emblems",
  },
];

const APPLIQUE_STEPS = [
  {
    step: "01",
    title: "Placement Line (Running Stitch)",
    desc: "The machine stitches an outline directly onto the base garment to show the operator exactly where to place the applique fabric piece.",
  },
  {
    step: "02",
    title: "Machine Stop & Material Laydown",
    desc: "A planned machine stop command allows the operator to lay down the pre-cut fabric or raw material over the stitched placement guide.",
  },
  {
    step: "03",
    title: "Tackdown Stitch",
    desc: "A running or light zig-zag stitch sews over the fabric edge to lock it firmly in place before final finishing. (If trimming in place, excess is trimmed here).",
  },
  {
    step: "04",
    title: "Cover Border & Detail Embroidery",
    desc: "A solid satin border or blanket stitch covers the raw edges cleanly, followed by any interior embroidery lettering, shading, or accents.",
  },
];

const WHY_CHOOSE_ITEMS = [
  { icon: "award" as const, title: "Clean Tackdown Sequencing" },
  { icon: "rocket" as const, title: "Fast Turnaround" },
  { icon: "refresh" as const, title: "Free Revisions" },
  { icon: "sliders" as const, title: "Laser-Cut Alignment" },
  { icon: "headset" as const, title: "Responsive Support" },
  { icon: "shield" as const, title: "Tested Stitch Quality" },
];

export default function AppliqueDigitizingPage() {
  return (
    <>
      {/* 1. Hero Section (H1) */}
      <Hero
        eyebrow="Specialized Embroidery Service"
        titleLines={[
          { text: "Applique Digitizing" },
          { text: "Services", accent: true },
        ]}
        description="Professional applique embroidery digitizing for jerseys, varsity jackets, hoodies, and patches. Clean placement lines, secure tackdown stitches, and smooth cover borders in all machine formats."
        bgImage={servicesBg}
        imageLabel="Professional applique embroidery digitizing workspace"
        breadcrumbCurrent="Applique Digitizing"
        features={[
          { icon: "scissors", title: "Clean Tackdown", sub: "Engineered placement & tackdown" },
          { icon: "layers", title: "All Formats", sub: "DST, PES, JEF, EXP & vector cut files" },
          { icon: "refresh", title: "Free Revisions", sub: "Revisions until clean sew-out" },
          { icon: "tag", title: "Free Quote", sub: "Send artwork for free review" },
        ]}
      />

      {/* 2. What Is Applique Digitizing & Overview */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionTag
                eyebrow="Topical Authority"
                title="What Is Applique Digitizing?"
                center={false}
              />
              <p className="mt-6 text-base leading-relaxed text-navy-950/80">
                Applique digitizing is the specialized technique of turning artwork into embroidery files that incorporate pre-cut or trimmed fabric pieces rather than filling entire large areas with solid thread.
              </p>
              <p className="mt-4 text-base leading-relaxed text-navy-950/70">
                By replacing heavy blocks of hundreds of thousands of stitches with twill, felt, or printed fabrics, applique produces lighter, more flexible garments, prevents fabric puckering, and creates the distinctive, bold look popular on sports jerseys, collegiate apparel, and varsity jackets.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full bg-brand-50 px-3.5 py-1.5 text-xs font-semibold text-brand-700">
                  Tackle Twill
                </span>
                <span className="rounded-full bg-brand-50 px-3.5 py-1.5 text-xs font-semibold text-brand-700">
                  Pre-Cut Laser Alignment
                </span>
                <span className="rounded-full bg-brand-50 px-3.5 py-1.5 text-xs font-semibold text-brand-700">
                  Trim-in-Place Ready
                </span>
                <span className="rounded-full bg-brand-50 px-3.5 py-1.5 text-xs font-semibold text-brand-700">
                  Reduced Stitch Count
                </span>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-navy-950/10 bg-navy-50/50 p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-navy-950">
                Custom Applique Digitizing for Apparel & Embroidery
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-navy-950/70">
                A poorly digitized applique file leads to misaligned fabric edges, fraying threads, and needle jams. At Velora Digitizing, every applique file is mapped with calculated offsets so your borders cover the raw fabric edges without distortion.
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  "Precise placement outlines for single and multi-layer fabric applique.",
                  "Appropriate pull-compensation tailored to stretch and heavy garments.",
                  "Clean programmed stops (Color changes) for seamless machine workflow.",
                  "Smooth satin, zig-zag, or blanket stitch edge encapsulation.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-navy-950/80">
                    <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-600 text-[10px] text-white">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Applique Digitizing Process */}
      <section className="bg-slate-50/70 py-16 lg:py-24 border-y border-navy-950/5">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <SectionTag
            eyebrow="How It Works"
            title="Our Applique Digitizing Process"
            subtitle="How we structure every stitch file for reliable, clean production on your embroidery machines."
          />

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {APPLIQUE_STEPS.map((step) => (
              <div
                key={step.step}
                className="relative rounded-2xl border border-navy-950/10 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-brand-500/30"
              >
                <span className="font-serif text-3xl font-extrabold text-brand-600/30">
                  {step.step}
                </span>
                <h3 className="mt-3 text-base font-bold text-navy-950">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-navy-950/70">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Applique Digitizing for Caps, Jackets, Jerseys & Patches */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <SectionTag
            eyebrow="Applications"
            title="Applique Digitizing for Caps, Jackets, Jerseys & Patches"
            subtitle="Tailored digitizing parameters for different garment types, fabrics, and production methods."
          />

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {APPLIQUE_USE_CASES.map((useCase) => (
              <div
                key={useCase.title}
                className="flex flex-col rounded-2xl border border-navy-950/10 bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:border-brand-500/20"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon name={useCase.icon} className="h-6 w-6" />
                </div>
                <span className="mt-4 inline-block text-[11px] font-bold uppercase tracking-wider text-brand-600">
                  {useCase.tag}
                </span>
                <h3 className="mt-1 text-base font-bold text-navy-950">
                  {useCase.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-navy-950/70">
                  {useCase.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Machine Formats Delivered */}
      <section className="bg-navy-950 py-16 text-white lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-400">
            Compatibility
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl text-white">
            Applique Embroidery File Formats
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/70">
            Every order includes all standard commercial and home machine formats plus a detailed PDF color production sheet. Vector cut files are also available upon request.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {[
              { format: "DST", desc: "Tajima / Commercial" },
              { format: "PES", desc: "Brother / Babylock" },
              { format: "JEF", desc: "Janome / Elna" },
              { format: "EXP", desc: "Melco / Bernina" },
              { format: "VP3", desc: "Husqvarna / Pfaff" },
              { format: "XXX", desc: "Singer" },
              { format: "AI / SVG", desc: "Laser Cut Paths" },
              { format: "PDF", desc: "Production Sheet" },
            ].map((f) => (
              <div
                key={f.format}
                className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-center backdrop-blur-sm"
              >
                <p className="font-mono text-base font-bold text-brand-300">
                  {f.format}
                </p>
                <p className="text-[11px] font-medium text-slate-300">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Applique Digitizing Portfolio */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <SectionTag
            eyebrow="Recent Work"
            title="Applique Digitizing Portfolio"
            subtitle="Samples of real digitized applique stitch-outs and production files."
          />

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto">
            <div className="group overflow-hidden rounded-2xl border border-navy-950/10 bg-white shadow-sm transition-all hover:shadow-md">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <Image
                  src="/images/applique-design/ADesign.webp"
                  alt="Custom embroidered applique design sample"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-navy-950">
                  Collegiate Letter Applique
                </h3>
                <p className="mt-1 text-xs text-navy-950/60">
                  Clean tackdown running lines with tight satin border enclosure.
                </p>
              </div>
            </div>

            <div className="group overflow-hidden rounded-2xl border border-navy-950/10 bg-white shadow-sm transition-all hover:shadow-md">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <Image
                  src="/images/applique-design/Cougars.webp"
                  alt="Cougars mascot sports team applique digitizing sample"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-navy-950">
                  Mascot & Team Applique
                </h3>
                <p className="mt-1 text-xs text-navy-950/60">
                  Multi-fabric layer sequence optimized for sports jersey production.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/portfolio?category=applique"
              className="inline-flex items-center gap-2 rounded-lg border border-navy-950/15 bg-white px-6 py-3 text-sm font-semibold text-navy-950 shadow-sm transition-all hover:border-brand-600 hover:text-brand-600"
            >
              EXPLORE FULL APPLIQUE PORTFOLIO
              <span aria-hidden>&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Why Choose Velora Digitizing */}
      <WhyChooseUs
        eyebrow="Why Choose Velora"
        title="Why Choose Velora Digitizing?"
        items={WHY_CHOOSE_ITEMS}
      />

      {/* 8. Frequently Asked Questions */}
      <FAQ
        items={APPLIQUE_FAQS}
        title="Frequently Asked Questions"
        subtitle="Common questions about our custom applique digitizing services."
      />

      {/* 9. Get a Quote for Applique Digitizing (CTA) */}
      <CTABanner />
    </>
  );
}
