import Link from "next/link";
import Hero from "../components/Hero";
import PricingTable from "../components/PricingTable";
import patchesBg from "../images/velora-embroidery-showcase-2.webp";
import WhyChooseUs from "../components/WhyChooseUs";
import CTABanner from "../components/CTABanner";
import ServiceTypeGrid from "../components/ServiceTypeGrid";
import Icon, { type IconName } from "../components/Icon";
import { FAQ } from "../components/FAQ";
import RelatedServicesNav from "../components/RelatedServicesNav";
import PatchGallery from "../components/PatchGallery";
import { PRICING_PLANS, formatPrice } from "../components/pricing-data";

const PATCH_PLAN = PRICING_PLANS.find((p) => p.name === "Standard") ?? PRICING_PLANS[0];
const PATCH_PLAN_PRICE = formatPrice(PATCH_PLAN.price);

const PATCH_TYPES: { icon: IconName; title: string; desc: string }[] = [
  { icon: "layers", title: "Felt Patches", desc: "Soft felt bases with embroidered logos, mascots, and badges for apparel, uniforms, and custom branding." },
  { icon: "badge-check", title: "Twill Patches", desc: "Durable woven twill bases with detailed embroidery and clean stitched borders for logos, lettering, and custom designs." },
  { icon: "badge-check", title: "Merrow Border Patches", desc: "Classic overlocked edge with a raised thread border. The traditional patch look that is durable, clean, and timeless. Best for simple shapes like circles, squares, and rectangles." },
  { icon: "scissors", title: "Laser Cut Patches", desc: "Precision laser-cut edges for intricate shapes that merrow stitching cannot achieve. Perfect for detailed logos, custom outlines, and die-cut designs with tight corners." },
  { icon: "grid", title: "Woven Patches", desc: "Fine thread woven patches with photographic detail. Supports smaller text and tighter details than embroidered patches. Ideal for badges and uniform insignia." },
  { icon: "feather", title: "Chenille Patches", desc: "Fuzzy, raised chenille yarn for varsity letters and mascot patches. The classic letterman jacket look that is bold, textured, and nostalgic." },
  { icon: "shield", title: "PVC Patches", desc: "Rubber-like PVC patches for tactical gear, outdoor equipment and heavy-use apparel. Waterproof, fade-proof, and virtually indestructible in any environment." },
  { icon: "shirt", title: "Iron-On Patches", desc: "Heat-seal backing for easy at-home application. Just press with an iron for 30 seconds with no sewing required. Creates a permanent bond that survives the wash." },
];

const FILE_INCLUDES = [
  "Base fill or partial fill sized to the patch blank (twill, felt or free-standing on water-soluble stabilizer).",
  "Placement line and tackdown sequence when the patch uses an applique-style fabric layer.",
  "A border built for a cut edge: satin border in the file, or a clean outline ready for merrow finishing after stitching.",
  "Density and underlay set for the backing you choose: heat-seal, hook-and-loop or plain sew-on.",
  "All machine formats (DST, PES, EXP, JEF, VP3, XXX) plus a PDF production sheet with the color sequence.",
];

const BORDER_OPTIONS: { icon: IconName; title: string; desc: string }[] = [
  {
    icon: "badge-check",
    title: "Merrow border",
    desc: "Thick overlocked edge applied on a merrow machine after embroidery. Best for circles, ovals, squares and shields. The file carries a clean outline for the merrow operator.",
  },
  {
    icon: "layers",
    title: "Satin border",
    desc: "Stitched in the file on any embroidery machine, usually 2.5 to 4 mm wide. Works on any shape and is the standard choice when you do not have a merrow machine.",
  },
  {
    icon: "scissors",
    title: "Laser-cut edge",
    desc: "Satin border plus a matching vector cut path for laser or hot-knife cutting. Needed for intricate outlines, tight corners and die-cut shapes.",
  },
];

const PATCH_FAQS: { question: string; answer: string }[] = [
  {
    question: "Do you make the physical patches or just the file?",
    answer: `Both. Most orders are for the digitized patch file only, which is priced per design (${PATCH_PLAN_PRICE} on the ${PATCH_PLAN.name} plan) and sent to you or your patch maker. If you also want finished patches, say so in your quote request with the patch type, size, quantity and backing, and we produce them after you approve the digital proof.`,
  },
  {
    question: "What is the difference between a patch file and a garment logo file?",
    answer: "A garment logo file is digitized for a specific fabric and placement, such as a polo left chest or a cap front. A patch file is digitized for the patch blank itself: it includes the base fill or fabric layer, a border that covers a cut edge, and settings for the backing. A logo file sewn onto twill and cut out will not have a finished edge.",
  },
  {
    question: "What border should I choose, merrow or satin?",
    answer: "Choose merrow for classic round, oval, square and shield patches when you or your patch maker have a merrow machine; it gives the thick rope-like edge. Choose a satin border for complex outlines, tight corners, or when the patch is stitched entirely on an embroidery machine. Laser-cut shapes use a satin border plus a vector cut path.",
  },
  {
    question: "Can I digitize a patch myself with free software?",
    answer: "Yes. Free tools such as Ink/Stitch can produce a patch file with a fill and a satin border, and our guide on how to make embroidered patches walks through the sequence. The difficult parts are border coverage on the cut edge, density on twill or felt, and tackdown for applique layers, which is where a professionally digitized file saves test sew-outs.",
  },
  { question: "What is the minimum order quantity for patches?", answer: "For digital patch files, there is no minimum order. For physical patch manufacturing, the minimum is typically 50 pieces. Contact us for exact pricing based on your quantity, size, and backing type." },
  { question: "How long does patch digitizing take?", answer: "Standard turnaround is 24 hours for the digitized file. Rush delivery under 12 hours is available for an additional 30% fee. Physical patch manufacturing takes 7-10 business days after file approval." },
  { question: "What file formats do you deliver?", answer: "We deliver all major embroidery formats: DST, PES, JEF, EXP, VP3, and XXX. You will receive all formats in a single zip file." },
  { question: "Can you match my brand colors exactly?", answer: "Yes. We use Madeira and Isacord polyester thread in 380+ colors and cross-reference your brand PMS/HEX codes against physical thread charts under daylight-balanced bulbs. Color matching is included at no extra cost." },
  { question: "What is the difference between embroidered and woven patches?", answer: "Embroidered patches have raised stitching on a twill backing, which is thicker and more tactile. Woven patches are made entirely from thread woven together, which is flatter with finer detail and smaller text." },
];

const WHY_CHOOSE_ITEMS = [
  { icon: "headset" as const, title: "24/7 Support" },
  { icon: "rocket" as const, title: "Fast Delivery" },
  { icon: "refresh" as const, title: "Unlimited Revisions" },
  { icon: "award" as const, title: "High Stitch Quality" },
  { icon: "tag" as const, title: "Affordable Pricing" },
  { icon: "shield" as const, title: "100% Satisfaction Guaranteed" },
];

export default function PatchesPage() {
  return (
    <>
      <Hero
        eyebrow="Patch File Digitizing"
        titleLines={[{ text: "Custom Patch" }, { text: "Digitizing Services", accent: true }]}
        description={`Patch digitizing files for embroidered, woven, chenille and PVC patches: merrow or satin border, backing-specific settings, and every machine format (DST, PES, EXP, JEF). Patch files are priced per design from ${PATCH_PLAN_PRICE}. Finished patches can be produced after proof approval.`}
        bgImage={patchesBg}
        imageLabel="Curated display of Velora embroidered patches, cap, and apparel"
        features={[
          { icon: "tag", title: `Patch File from ${PATCH_PLAN_PRICE}`, sub: `${PATCH_PLAN.name} plan, all formats included` },
          { icon: "scissors", title: "Merrow or Satin Border", sub: "Laser-cut paths for complex shapes" },
          { icon: "layers", title: "Backing Options", sub: "Heat-seal, hook-and-loop, sew-on" },
          { icon: "clock", title: "Fast Turnaround", sub: "Delivery within 8-24 hours" },
        ]}
      />

      <section className="bg-white py-16 lg:py-20" aria-labelledby="patch-file-title">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">The Patch File</p>
              <h2 id="patch-file-title" className="mt-2 font-serif text-2xl font-bold text-navy-950 sm:text-3xl">
                What a Patch Digitizing File Includes
              </h2>
              <p className="mt-4 leading-relaxed text-navy-950/70">
                A patch is digitized for the blank, not the garment. The file has to build the base, hold any fabric layer in place and finish a cut edge, in the right order for your patch type and backing.
              </p>
              <ul className="mt-6 space-y-3">
                {FILE_INCLUDES.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed text-navy-950/80">
                    <span aria-hidden className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold">
                <Link href="/pricing" className="text-brand-700 underline underline-offset-4">
                  See the {PATCH_PLAN.name} plan and all prices
                </Link>
                <Link href="/blog/how-to-make-embroidered-patches" className="text-navy-950/70 underline underline-offset-4 hover:text-brand-600">
                  How to make embroidered patches yourself
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">Border Options</p>
              {BORDER_OPTIONS.map((option) => (
                <div key={option.title} className="flex gap-4 rounded-xl border border-navy-950/10 bg-slate-50 p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-600/10 text-brand-600 ring-1 ring-brand-600/20">
                    <Icon name={option.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-navy-950">{option.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-navy-950/75">{option.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ServiceTypeGrid
        items={PATCH_TYPES}
        eyebrow="Physical Patch Production"
        title="Patch Types We Digitize and Produce"
        subtitle="Once the file is approved we can also produce the finished patches. Choose the construction that fits your design, garment, and budget."
      />

      <PatchGallery />

      <WhyChooseUs
        eyebrow="Why Choose Velora?"
        title="We Make The Difference"
        items={WHY_CHOOSE_ITEMS}
      />

      <PricingTable title="Patch Digitizing Prices" />

      <FAQ items={PATCH_FAQS} title="Patches - Frequently Asked Questions" subtitle="Everything you need to know before ordering patch digitizing services." />

      <RelatedServicesNav currentSlug="patches" />

      <CTABanner />
    </>
  );
}
