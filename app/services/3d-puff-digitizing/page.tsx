import Image from "next/image";
import Link from "next/link";
import Hero from "../../components/Hero";
import PricingTable from "../../components/PricingTable";
import ServiceOrderDetails from "../../components/ServiceOrderDetails";
import servicesBg from "../../images/velora-embroidery-workstation.webp";
import WhyChooseUs from "../../components/WhyChooseUs";
import CTABanner from "../../components/CTABanner";
import { FAQ } from "../../components/FAQ";
import { SectionTag } from "../../components/Hero";
import Icon, { IconName } from "../../components/Icon";
import RelatedServicesNav from "../../components/RelatedServicesNav";

const PUFF_FAQS = [
  {
    question: "What is 3D puff embroidery digitizing?",
    answer:
      "3D puff digitizing is a technique where high-density satin stitches are programmed over a layer of EVA embroidery foam. When stitched, the needle punctures and cuts the foam along the satin edges, leaving a three-dimensional, raised embroidery effect.",
  },
  {
    question: "Can any design be digitized for 3D puff?",
    answer:
      "Bold letters, block fonts, and simple solid shapes work best. Thin lines (under 3mm) cannot hold foam, and very wide shapes (over 12mm) require split satin or flat fill. Many designs combine 3D puff for main lettering with flat embroidery for smaller details.",
  },
  {
    question: "What foam thickness should I use?",
    answer:
      "2mm foam is the industry standard for caps and snapbacks, offering a crisp raised look without straining machine needles. 3mm foam is used for heavier lettering on structured jackets and heavy twill.",
  },
  {
    question: "Why does foam poke out of poor digitizing files?",
    answer:
      "Foam pokes out when the digitizer misses end-capping stitches at the open ends of satin columns, or when stitch density is too loose to cut through the foam cleanly. Our files include precise end-caps and density calibrated to cleanly perforate the foam.",
  },
  {
    question: "What machine file formats are provided?",
    answer:
      "We provide DST, PES, JEF, EXP, VP3, and XXX formats, complete with a PDF production sheet showing color sequence and programmed foam stops.",
  },
  {
    question: "How do I order 3D puff digitizing?",
    answer:
      "Upload your artwork on our Contact page or message us via WhatsApp with your target dimensions, cap type (structured/unstructured), and required format for a free quote.",
  },
];

const PUFF_USE_CASES: {
  title: string;
  desc: string;
  icon: IconName;
  tag: string;
}[] = [
    {
      title: "Snapbacks & Fitted Caps",
      desc: "Bold 3D letters and sports team initials programmed with center-out sequencing for curved cap frames.",
      icon: "cap",
      tag: "Headwear",
    },
    {
      title: "Streetwear Hoodies & Fleece",
      desc: "High-density puff emblems on heavyweight cotton hoodies and sweatshirts with custom underlay adjustments.",
      icon: "shirt-logo",
      tag: "Outerwear",
    },
    {
      title: "Trucker Hats & Dad Hats",
      desc: "Calibrated density for structured foam fronts and soft unstructured panels without fabric puckering.",
      icon: "badge",
      tag: "Lifestyle Caps",
    },
    {
      title: "Combination Flat + 3D Puff",
      desc: "Smart multi-step sequences where background details sew flat first before the machine stops for foam placement.",
      icon: "layers",
      tag: "Hybrid Designs",
    },
  ];

const PUFF_SHOWCASE_SAMPLES = [
  {
    title: "High-Rise 3D Puff Monogram",
    type: "2mm EVA Foam · Snapback",
    desc: "Clean sculpted letter with 90° end-cap stitches and tight 0.19mm satin pitch ensuring zero foam protrusion.",
    image: "/images/3d-puff/custom-3d-puff-cap-embroidery-digitizing-dst.webp",
    specs: "Height: 2.25\" · Tajima DST · 7,890 Stitches",
  },
  {
    title: "Commercial 3D Puff Cap Crest",
    type: "Structured Front Crown",
    desc: "Perpendicular needle perforation line cuts clean foam boundaries along complex crest curves with no manual trimming.",
    image: "/images/cap-logo/raised-3d-puff-embroidery-hat-logo.webp",
    specs: "Height: 2.10\" · Barudan DST · 9,450 Stitches",
  },
  {
    title: "Hybrid Flat + 3D Puff Headwear",
    type: "Dual-Layer Sequence",
    desc: "Background flat embroidery sews first, followed by programmed machine stop for foam insertion over primary typography.",
    image: "/images/cap-logo/custom-3d-puff-cap-embroidery-digitizing.webp",
    specs: "Height: 2.20\" · Brother PES · 8,320 Stitches",
  },
  {
    title: "Streetwear Heavyweight 3D Foam",
    type: "3mm High-Density Foam",
    desc: "Heavy-duty puff digitizing with reinforced underlay designed for heavyweight fleece hoodies and premium structured hats.",
    image: "/behance-ready/3d-puff-cap-sample.jpg",
    specs: "Height: 2.50\" · Tajima DST · 11,200 Stitches",
  },
];

const PUFF_STEPS = [
  {
    step: "01",
    title: "Flat Elements First",
    desc: "Any flat base embroidery, small taglines, or background outlines are sequenced to sew first on the base fabric.",
  },
  {
    step: "02",
    title: "Programmed Foam Stop",
    desc: "The machine automatically halts with a color stop so the operator can lay the foam sheet over the designated area.",
  },
  {
    step: "03",
    title: "End-Capping & Perforation",
    desc: "Perpendicular end-cap stitches lock and cut the foam edges, preventing any raw foam from protruding.",
  },
  {
    step: "04",
    title: "High-Density Satin Enclosure",
    desc: "Tight satin stitching (0.30mm-0.35mm spacing) wraps completely around the foam for a smooth, sculpted finish.",
  },
];

const WHY_CHOOSE_ITEMS = [
  { icon: "award" as const, title: "Clean Capped Satin Edges" },
  { icon: "rocket" as const, title: "Fast Turnaround" },
  { icon: "refresh" as const, title: "Free Revisions" },
  { icon: "sliders" as const, title: "Calibrated Foam Density" },
  { icon: "headset" as const, title: "24/7 Customer Support" },
  { icon: "shield" as const, title: "Tested Stitch Quality" },
];

export default function PuffDigitizingPage() {
  return (
    <>
      <Hero
        eyebrow="Dimensional Embroidery Files"
        titleLines={[
          { text: "3D Puff Embroidery" },
          { text: "Digitizing Services", accent: true },
        ]}
        description="Transform your logos and bold lettering into raised 3D puff embroidery. Engineered with precise end-capping, calibrated satin density, and center-out cap sequencing in all machine formats."
        bgImage={servicesBg}
        imageLabel="Professional 3D puff embroidery digitizing workstation"
        breadcrumbCurrent="3D Puff Digitizing"
        features={[
          { icon: "layers", title: "Sculpted 3D", sub: "Engineered for 2mm & 3mm foam" },
          { icon: "award", title: "Clean Edges", sub: "Perpendicular end-caps" },
          { icon: "refresh", title: "Included Revisions", sub: "Allowance depends on your plan" },
          { icon: "tag", title: "Free Quote", sub: "Send artwork for free review" },
        ]}
      />

      {/* What Is 3D Puff Digitizing */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionTag
                eyebrow="Dimensional Technique"
                title="What Is 3D Puff Digitizing?"
                center={false}
              />
              <p className="mt-6 text-base leading-relaxed text-navy-950/80">
                3D puff embroidery uses high-density EVA foam underneath satin stitches to create a raised, dimensional look that stands out from standard flat embroidery.
              </p>
              <p className="mt-4 text-base leading-relaxed text-navy-950/70">
                Puff digitizing requires different technical rules than standard embroidery: standard underlay is removed from puff sections so foam remains elevated, satin density is increased to perforate the foam cleanly, and every column is capped so foam never shows at the edges.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full bg-brand-50 px-3.5 py-1.5 text-xs font-semibold text-brand-700">
                  Caps & Snapbacks
                </span>
                <span className="rounded-full bg-brand-50 px-3.5 py-1.5 text-xs font-semibold text-brand-700">
                  Calibrated Satin Density
                </span>
                <span className="rounded-full bg-brand-50 px-3.5 py-1.5 text-xs font-semibold text-brand-700">
                  End-Cap Protection
                </span>
                <span className="rounded-full bg-brand-50 px-3.5 py-1.5 text-xs font-semibold text-brand-700">
                  Center-Out Sequencing
                </span>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-navy-950/10 bg-navy-50/50 p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-navy-950">
                Engineered for Flawless Cap & Garment Stitch-Outs
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-navy-950/70">
                Auto-digitized or standard flat files fail on 3D foam because needles tear the foam irregularly and create thread breaks. Our manual digitizing process ensures:
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  "Clean end-caps that seal the foam at column endpoints.",
                  "Appropriate satin density (0.30mm-0.35mm) to cut foam smoothly.",
                  "Center-out sequencing for curved hat frames without distortion.",
                  "Automated stop commands programmed for effortless foam placement.",
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
            eyebrow="Step-By-Step"
            title="Our 3D Puff Digitizing Process"
            subtitle="How we structure stitch sequences to make puff embroidery run smoothly on your machines."
          />

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PUFF_STEPS.map((step) => (
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
            eyebrow="Applications"
            title="3D Puff Digitizing for Caps, Hats & Outerwear"
            subtitle="Custom puff parameters for various fabrics, structured crowns, and garment weights."
          />

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PUFF_USE_CASES.map((useCase) => (
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

      {/* Formats */}
      <section className="bg-navy-950 py-16 text-white lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-400">
            Compatibility
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl text-white">
            Supported Embroidery Machine Formats
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/70">
            Every file includes all commercial and home machine formats with a comprehensive PDF production sheet.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {[
              { format: "DST", desc: "Tajima / Commercial" },
              { format: "PES", desc: "Brother / Babylock" },
              { format: "JEF", desc: "Janome / Elna" },
              { format: "EXP", desc: "Melco / Bernina" },
              { format: "VP3", desc: "Husqvarna / Pfaff" },
              { format: "XXX", desc: "Singer" },
              { format: "PDF", desc: "Color Sequence Sheet" },
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

      {/* Real 3D Puff Sew-Out Portfolio & Samples */}
      <section className="bg-slate-50 py-16 lg:py-24 border-b border-navy-950/5" aria-labelledby="puff-sewout-title">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <SectionTag
            eyebrow="Real Production Proof"
            title="3D Puff Embroidery Sew-Out Showcase"
            subtitle="Actual high-density foam stitch-outs featuring clean end-capping, zero exposed foam, and crisp 3D definition."
          />

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PUFF_SHOWCASE_SAMPLES.map((sample) => (
              <div
                key={sample.title}
                className="group flex flex-col overflow-hidden rounded-2xl border border-navy-950/10 bg-white shadow-sm transition-all hover:border-brand-600/30 hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={sample.image}
                    alt={`${sample.title} - ${sample.type}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute left-3 top-3 rounded-full bg-navy-950/80 px-3 py-1 text-[10px] font-semibold text-white backdrop-blur-md">
                    {sample.type}
                  </div>
                </div>
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <h3 className="text-sm font-bold text-navy-950 group-hover:text-brand-600">
                      {sample.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-navy-950/70">
                      {sample.desc}
                    </p>
                  </div>
                  <div className="mt-4 border-t border-navy-950/5 pt-3">
                    <span className="font-mono text-[10px] font-medium text-brand-600">
                      {sample.specs}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Technical 3D Puff Production Specs */}
          <div className="mt-14 rounded-2xl border border-navy-950/10 bg-white p-6 sm:p-8 lg:p-10 shadow-sm">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
                  Precision Engineering
                </p>
                <h3 className="mt-2 font-serif text-2xl font-bold text-navy-950 sm:text-3xl">
                  3D Foam Density &amp; Column Standards
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-950/75">
                  Standard digitizing formulas fail on foam. Our 3D puff digitizing applies 40% tighter satin pitch, perpendicular capping stitches, and specialized underlay that cuts cleanly without ripping fabric.
                </p>

                <div className="mt-6 flex flex-wrap gap-4 text-xs font-semibold text-navy-950">
                  <div className="flex items-center gap-2 rounded-lg bg-slate-100 px-3 py-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                    <span>Satin Pitch: 0.18mm - 0.22mm</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg bg-slate-100 px-3 py-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                    <span>Min Column: 3.0mm Width</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg bg-slate-100 px-3 py-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                    <span>End-Cap Angle: 90° Perpendicular</span>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-navy-950/10 bg-slate-50 p-6">
                <h4 className="text-sm font-bold text-navy-950">
                  Machine &amp; Operator Checklist for 3D Puff:
                </h4>
                <ul className="mt-4 space-y-2.5 text-xs text-navy-950/80">
                  <li className="flex justify-between border-b border-navy-950/5 pb-2">
                    <span className="font-medium text-navy-950/60">Foam Recommendation:</span>
                    <span className="font-semibold text-navy-950">2.0mm High-Density EVA (Color Matched)</span>
                  </li>
                  <li className="flex justify-between border-b border-navy-950/5 pb-2">
                    <span className="font-medium text-navy-950/60">Needle Recommendation:</span>
                    <span className="font-semibold text-navy-950">75/11 or 80/12 Sharp (Punctures foam cleanly)</span>
                  </li>
                  <li className="flex justify-between border-b border-navy-950/5 pb-2">
                    <span className="font-medium text-navy-950/60">Programmed Stops:</span>
                    <span className="font-semibold text-navy-950">Automatic halt for foam laydown</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium text-navy-950/60">Post-Sewing Clean-up:</span>
                    <span className="font-semibold text-brand-600">Quick heat-gun pass shrinks stray foam</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/portfolio?category=3d-puff"
              className="inline-flex items-center gap-2 rounded-lg border border-navy-950/15 bg-white px-6 py-3 text-sm font-semibold text-navy-950 shadow-sm transition-all hover:border-brand-600 hover:text-brand-600"
            >
              EXPLORE FULL 3D PUFF PORTFOLIO
              <span aria-hidden>&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs
        eyebrow="Why Choose Velora"
        title="Why Choose Velora for 3D Puff?"
        items={WHY_CHOOSE_ITEMS}
      />

      {/* FAQs */}
      <ServiceOrderDetails kind="3d-puff" />
      <PricingTable title="3D Puff Digitizing Prices" />

      <FAQ
        items={PUFF_FAQS}
        schema={false}
        title="Frequently Asked Questions"
        subtitle="Common questions about our 3D puff embroidery digitizing services."
      />

      <RelatedServicesNav currentSlug="3d-puff-digitizing" />

      {/* CTA */}
      <CTABanner />
    </>
  );
}
