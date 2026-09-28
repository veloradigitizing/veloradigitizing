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

const CAP_FAQS = [
  {
    question: "Why can't I use a standard flat chest logo file on a cap?",
    answer:
      "Flat files sew from one side across to the other. On a curved cap frame, this pushes the fabric across the center seam, resulting in distorted circles, misaligned outlines, and needle breaks. Cap files require special 'center-out' and 'bottom-up' stitch sequencing.",
  },
  {
    question: "What is the maximum embroidery size for caps and hats?",
    answer:
      "For standard structured snapbacks and baseball caps, the maximum front height is typically 2.25 to 2.5 inches (57–63mm), and width is 4.0 to 4.5 inches. Unstructured dad hats generally require designs under 2.0 inches in height.",
  },
  {
    question: "How do you handle the center seam on 6-panel caps?",
    answer:
      "We apply specialized underlay stitching that bridges and stabilizes the center seam valley before top stitches are sewn, preventing stitches from sinking into the seam crease.",
  },
  {
    question: "Can you digitize 3D puff embroidery specifically for caps?",
    answer:
      "Yes. We offer both flat cap digitizing and 3D puff cap digitizing with appropriate end-capping and calibrated density for foam embroidery.",
  },
  {
    question: "What embroidery machine formats do you provide?",
    answer:
      "We deliver all major formats (DST, PES, JEF, EXP, VP3, XXX) plus a complete PDF stitch-out simulation and color sequence sheet.",
  },
  {
    question: "Do you offer free revisions on cap files?",
    answer:
      "Yes, we provide free revisions to ensure your cap design sews out cleanly on your specific cap frames and machine model.",
  },
];

const CAP_APPLICATIONS: {
  title: string;
  desc: string;
  icon: IconName;
  tag: string;
}[] = [
  {
    title: "6-Panel Structured Snapbacks",
    desc: "Engineered center-out sequencing with seam-bridge underlay for stiff buckram front panels.",
    icon: "cap",
    tag: "Snapbacks & Fitted",
  },
  {
    title: "Unstructured 'Dad' Hats",
    desc: "Soft pull compensation and lighter stitch density designed for flexible cotton and washed twill crowns.",
    icon: "badge",
    tag: "Dad Hats",
  },
  {
    title: "Knit Beanies & Toques",
    desc: "Heavy grid underlay that keeps fine text and stitches from sinking into ribbed and chunky knit fabrics.",
    icon: "shirt-logo",
    tag: "Winter Headwear",
  },
  {
    title: "Side & Back Cap Arch Placements",
    desc: "Custom curved text and small side logo digitizing calibrated for cylindrical side clamp embroidery frames.",
    icon: "layers",
    tag: "Side & Back Arches",
  },
];

const CAP_STEPS = [
  {
    step: "01",
    title: "Crown & Frame Calculation",
    desc: "We analyze your target hat model (6-panel vs 5-panel, structured vs unstructured) to calibrate height and width limits.",
  },
  {
    step: "02",
    title: "Center-Out & Bottom-Up Sequencing",
    desc: "Stitches are programmed to sew from the center outwards and from the bottom band upwards, stabilizing the curved fabric.",
  },
  {
    step: "03",
    title: "Seam-Bridging Underlay",
    desc: "Hidden foundation stitches bridge the center seam valley so satin letters never sink or distort across the join.",
  },
  {
    step: "04",
    title: "Curved Pull-Compensation",
    desc: "Calculated push-and-pull allowances keep circular badges perfectly round and horizontal lettering crisp.",
  },
];

const WHY_CHOOSE_ITEMS = [
  { icon: "award" as const, title: "Center-Out Sequencing" },
  { icon: "rocket" as const, title: "Fast Turnaround" },
  { icon: "refresh" as const, title: "Free Revisions" },
  { icon: "sliders" as const, title: "Seam-Bridge Underlay" },
  { icon: "headset" as const, title: "Responsive Support" },
  { icon: "shield" as const, title: "Tested Stitch Quality" },
];

export default function CapDigitizingPage() {
  return (
    <>
      <Hero
        eyebrow="Headwear Embroidery Specialist"
        titleLines={[
          { text: "Cap & Hat Logo" },
          { text: "Digitizing Services", accent: true },
        ]}
        description="Specialized embroidery digitizing for snapbacks, baseball caps, dad hats, and beanies. Center-out sequencing engineered for curved cap frames to eliminate fabric bunching and seam distortion."
        bgImage={servicesBg}
        imageLabel="Professional cap embroidery digitizing workstation"
        breadcrumbCurrent="Cap Logo Digitizing"
        features={[
          { icon: "cap", title: "Center-Out", sub: "Engineered for curved frames" },
          { icon: "layers", title: "All Formats", sub: "DST, PES, JEF, EXP & more" },
          { icon: "refresh", title: "Free Revisions", sub: "Revisions until clean sew-out" },
          { icon: "tag", title: "Free Quote", sub: "Send artwork for free review" },
        ]}
      />

      {/* What Makes Cap Digitizing Different */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionTag
                eyebrow="Curved Surface Engineering"
                title="What Makes Cap Digitizing Different?"
                center={false}
              />
              <p className="mt-6 text-base leading-relaxed text-navy-950/80">
                Embroidering on a cylindrical cap frame is vastly different from stitching flat garments. As the cap rotates on the cylinder, fabric tension shifts continuously across the curved buckram panels.
              </p>
              <p className="mt-4 text-base leading-relaxed text-navy-950/70">
                If a file is digitized left-to-right like a flat chest logo, fabric gathers against the needle and creates noticeable puckering and distorted registration. Our cap digitizing files utilize **center-out and bottom-up sequencing** to smoothly push fabric away from the center seam.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full bg-brand-50 px-3.5 py-1.5 text-xs font-semibold text-brand-700">
                  Center-Out Stitch Paths
                </span>
                <span className="rounded-full bg-brand-50 px-3.5 py-1.5 text-xs font-semibold text-brand-700">
                  Bottom-Up Sequencing
                </span>
                <span className="rounded-full bg-brand-50 px-3.5 py-1.5 text-xs font-semibold text-brand-700">
                  Center Seam Bridging
                </span>
                <span className="rounded-full bg-brand-50 px-3.5 py-1.5 text-xs font-semibold text-brand-700">
                  Snapbacks & Dad Hats
                </span>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-navy-950/10 bg-navy-50/50 p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-navy-950">
                Custom Digitizing for All Cap Styles
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-navy-950/70">
                Whether you are running bulk production on commercial multi-needle Tajima or Barudan machines, or single-needle Brother machines, our files ensure:
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  "No bunching across the thick center seam of 6-panel caps.",
                  "Clean registration between outline satin borders and interior fills.",
                  "Maximized embroidery height while staying within cap frame limits.",
                  "Optimized trim and jump counts to speed up commercial run times.",
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

      {/* Digitizing Process */}
      <section className="bg-slate-50/70 py-16 lg:py-24 border-y border-navy-950/5">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <SectionTag
            eyebrow="Precision Workflow"
            title="Our Cap Logo Digitizing Process"
            subtitle="How every headwear file is engineered to run clean without needle breaks or fabric shifting."
          />

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CAP_STEPS.map((step) => (
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

      {/* Applications */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <SectionTag
            eyebrow="Headwear Types"
            title="Digitizing for Every Cap & Hat Style"
            subtitle="Parameters adjusted for structured crowns, soft washed panels, beanies, and side placements."
          />

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CAP_APPLICATIONS.map((app) => (
              <div
                key={app.title}
                className="flex flex-col rounded-2xl border border-navy-950/10 bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:border-brand-500/20"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon name={app.icon} className="h-6 w-6" />
                </div>
                <span className="mt-4 inline-block text-[11px] font-bold uppercase tracking-wider text-brand-600">
                  {app.tag}
                </span>
                <h3 className="mt-1 text-base font-bold text-navy-950">
                  {app.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-navy-950/70">
                  {app.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formats */}
      <section className="bg-navy-950 py-16 text-white lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-400">
            Compatibility
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl text-white">
            Supported Cap Machine Formats
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/70">
            Every delivery includes all commercial and home machine formats plus a PDF proof with thread sequence and stitch simulation.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {[
              { format: "DST", desc: "Tajima / Commercial" },
              { format: "PES", desc: "Brother / Babylock" },
              { format: "JEF", desc: "Janome / Elna" },
              { format: "EXP", desc: "Melco / Bernina" },
              { format: "VP3", desc: "Husqvarna / Pfaff" },
              { format: "XXX", desc: "Singer" },
              { format: "PDF", desc: "Production Sheet" },
            ].map((f) => (
              <div
                key={f.format}
                className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-center backdrop-blur-sm"
              >
                <p className="font-mono text-base font-bold text-brand-300">
                  {f.format}
                </p>
                <p className="text-[11px] text-white/50">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <SectionTag
            eyebrow="Recent Work"
            title="Cap Logo Digitizing Portfolio"
            subtitle="Samples of real digitized cap logos and headwear stitch-outs."
          />

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3 max-w-5xl mx-auto">
            <div className="group overflow-hidden rounded-2xl border border-navy-950/10 bg-white shadow-sm transition-all hover:shadow-md">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <Image
                  src="/images/cap-logo/cap-design-01.webp"
                  alt="Embroidered cap front logo with precise center-out stitching"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-navy-950">
                  Snapback Front Emblem
                </h3>
                <p className="mt-1 text-xs text-navy-950/60">
                  Center-out sequence with clean outline borders.
                </p>
              </div>
            </div>

            <div className="group overflow-hidden rounded-2xl border border-navy-950/10 bg-white shadow-sm transition-all hover:shadow-md">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <Image
                  src="/images/cap-logo/cap-logo-02.webp"
                  alt="Cap logo embroidery with fine script lettering"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-navy-950">
                  Fine Text Cap Logo
                </h3>
                <p className="mt-1 text-xs text-navy-950/60">
                  Stabilized satin lettering on curved cap panel.
                </p>
              </div>
            </div>

            <div className="group overflow-hidden rounded-2xl border border-navy-950/10 bg-white shadow-sm transition-all hover:shadow-md">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <Image
                  src="/images/cap-logo/cap-logo-05.webp"
                  alt="Custom baseball hat embroidered graphic"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-navy-950">
                  Baseball Team Emblem
                </h3>
                <p className="mt-1 text-xs text-navy-950/60">
                  Multi-color registration across the center seam.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/portfolio?category=cap-logo"
              className="inline-flex items-center gap-2 rounded-lg border border-navy-950/15 bg-white px-6 py-3 text-sm font-semibold text-navy-950 shadow-sm transition-all hover:border-brand-600 hover:text-brand-600"
            >
              EXPLORE FULL CAP PORTFOLIO
              <span aria-hidden>&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs
        eyebrow="Why Choose Velora"
        title="Why Choose Velora for Cap Digitizing?"
        items={WHY_CHOOSE_ITEMS}
      />

      {/* FAQs */}
      <FAQ
        items={CAP_FAQS}
        title="Frequently Asked Questions"
        subtitle="Common questions about our cap and hat embroidery digitizing services."
      />

      {/* CTA */}
      <CTABanner />
    </>
  );
}
