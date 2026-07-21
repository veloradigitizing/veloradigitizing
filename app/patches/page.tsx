"use client";

import Hero from "../components/Hero";
import patchesBg from "../images/velora-embroidery-showcase-2.png";
import WhyChooseUs from "../components/WhyChooseUs";
import CTABanner from "../components/CTABanner";
import ServiceTypeGrid from "../components/ServiceTypeGrid";
import type { IconName } from "../components/Icon";
import { FAQ } from "../components/FAQ";

const PATCH_TYPES: { icon: IconName; title: string; desc: string }[] = [
  { icon: "badge-check", title: "Merrow Border Patches", desc: "Classic overlocked edge with a raised thread border. The traditional patch look that is durable, clean, and timeless. Best for simple shapes like circles, squares, and rectangles." },
  { icon: "scissors", title: "Laser Cut Patches", desc: "Precision laser-cut edges for intricate shapes that merrow stitching cannot achieve. Perfect for detailed logos, custom outlines, and die-cut designs with tight corners." },
  { icon: "grid", title: "Woven Patches", desc: "Fine thread woven patches with photographic detail. Supports smaller text and tighter details than embroidered patches. Ideal for badges and uniform insignia." },
  { icon: "feather", title: "Chenille Patches", desc: "Fuzzy, raised chenille yarn for varsity letters and mascot patches. The classic letterman jacket look that is bold, textured, and nostalgic." },
  { icon: "shield", title: "PVC Patches", desc: "Rubber-like PVC patches for tactical gear, outdoor equipment and heavy-use apparel. Waterproof, fade-proof, and virtually indestructible in any environment." },
  { icon: "shirt", title: "Iron-On Patches", desc: "Heat-seal backing for easy at-home application. Just press with an iron for 30 seconds with no sewing required. Creates a permanent bond that survives the wash." },
];

const PATCH_FAQS: { question: string; answer: string }[] = [
  { question: "What is the minimum order quantity for patches?", answer: "For digital patch files, there is no minimum order. For physical patch manufacturing, the minimum is typically 50 pieces. Contact us for exact pricing based on your quantity, size, and backing type." },
  { question: "How long does patch digitizing take?", answer: "Standard turnaround is 24 hours for the digitized file. Rush delivery under 12 hours is available for an additional 30% fee. Physical patch manufacturing takes 7-10 business days after file approval." },
  { question: "What file formats do you deliver?", answer: "We deliver all major embroidery formats: DST, PES, JEF, EXP, VP3, and XXX. You will receive all formats in a single zip file." },
  { question: "Can you match my brand colors exactly?", answer: "Yes. We use Madeira and Isacord polyester thread in 380+ colors and cross-reference your brand PMS/HEX codes against physical thread charts under daylight-balanced bulbs. Color matching is included at no extra cost." },
  { question: "What is the difference between embroidered and woven patches?", answer: "Embroidered patches have raised stitching on a twill backing, which is thicker and more tactile. Woven patches are made entirely from thread woven together, which is flatter with finer detail and smaller text." },
  { question: "Do you offer physical patch manufacturing too?", answer: "Yes, we handle the full process from digitizing to manufacturing. After you approve the digital proof, we produce the physical patches in your chosen type, size, and backing. Minimum 50 pieces applies." },
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
        eyebrow="Custom Patch Digitizing"
        titleLines={[{ text: "Patches That" }, { text: "Stand Out", accent: true }]}
        description="From merrow borders to laser-cut, woven, chenille and PVC — we digitize patches in any shape, size, or backing. Wash-tested up to 50 cycles, shipped worldwide."
        bgImage={patchesBg}
        imageLabel="Curated display of Velora embroidered patches, cap, and apparel"
        features={[
          { icon: "scissors", title: "Any Shape & Size", sub: "Fully custom die-cut" },
          { icon: "layers", title: "All Patch Types", sub: "Merrow, chenille, PVC & more" },
          { icon: "clock", title: "Fast Turnaround", sub: "8-24 hours" },
          { icon: "shield", title: "100% Satisfaction", sub: "Money-back guarantee" },
        ]}
      />

      <ServiceTypeGrid items={PATCH_TYPES} eyebrow="Patch Types" title="Every Patch Style Imaginable" subtitle="Choose the construction that fits your design, garment, and budget." />

      <WhyChooseUs
        eyebrow="Why Choose Velora?"
        title="We Make The Difference"
        items={WHY_CHOOSE_ITEMS}
      />

      <FAQ items={PATCH_FAQS} title="Patches - Frequently Asked Questions" subtitle="Everything you need to know before ordering patch digitizing services." />

      <CTABanner />
    </>
  );
}
