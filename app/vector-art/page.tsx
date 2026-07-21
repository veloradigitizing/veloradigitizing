"use client";

import Hero from "../components/Hero";
import vectorBg from "../images/design-workspace-car-sketch.png";
import WhyChooseUs from "../components/WhyChooseUs";
import CTABanner from "../components/CTABanner";
import ServiceTypeGrid from "../components/ServiceTypeGrid";
import type { IconName } from "../components/Icon";
import { FAQ } from "../components/FAQ";

const VECTOR_TYPES: { icon: IconName; title: string; desc: string }[] = [
  { icon: "share", title: "Raster to Vector", desc: "Convert low-resolution JPEG, PNG, or BMP images into crisp, scalable vector files. Perfect for logos and artwork that need to be resized without losing quality." },
  { icon: "badge", title: "Logo Vectorization", desc: "Recreate your existing logo as a clean vector file with precise paths, accurate colors, and proper layering. Ideal for print, embroidery, and large-format applications." },
  { icon: "scissors", title: "Applique Vector", desc: "Create vector files optimized for applique cutting machines. Includes proper tack-down stitches, placement lines, and material boundaries for clean production." },
  { icon: "sliders", title: "Color Separation", desc: "Separate complex multi-color designs into individual vector layers for screen printing, vinyl cutting, or multi-needle embroidery production workflows." },
  { icon: "refresh", title: "Vector Cleanup", desc: "Fix poor-quality vectors with proper node editing, curve smoothing, and path optimization. Transform messy auto-traced files into production-ready artwork." },
  { icon: "check", title: "Print-Ready Files", desc: "Prepare vector artwork for commercial printing with proper bleed, color profiles, and formatting. Compatible with offset, digital, and large-format print methods." },
];

const VECTOR_FAQS: { question: string; answer: string }[] = [
  { question: "What file formats do you accept as input?", answer: "We accept virtually any raster or vector format including JPEG, PNG, GIF, BMP, TIFF, PSD, PDF, AI, EPS, CDR, and even hand-drawn sketches or photographs." },
  { question: "What vector formats do you deliver?", answer: "We deliver in AI, EPS, SVG, PDF, CDR, and DXF formats. You will receive all formats in a single delivery unless you specify a particular format preference. All files are fully editable with proper layers." },
  { question: "How long does vector conversion take?", answer: "Standard turnaround is 12-24 hours for most designs. Complex illustrations may take up to 48 hours. Rush delivery under 6 hours is available for an additional 40% fee." },
  { question: "Can you vectorize a photograph?", answer: "Yes, we can convert photographs into vector artwork. The result depends on the complexity and quality of the original. We can create realistic illustrations, stylized interpretations, or simplified graphic versions." },
  { question: "What is the difference between auto-trace and manual vectorization?", answer: "Auto-trace uses software algorithms which often produce messy paths with too many nodes. Manual vectorization is done by skilled artists who trace every element by hand, producing clean paths with smooth curves." },
  { question: "Do you offer unlimited revisions on vector art?", answer: "Yes, we provide unlimited revisions until the vector artwork matches your expectations exactly. This includes adjustments to paths, colors, layers, and overall composition." },
];

const WHY_CHOOSE_ITEMS = [
  { icon: "headset" as const, title: "24/7 Support" },
  { icon: "rocket" as const, title: "Fast Delivery" },
  { icon: "refresh" as const, title: "Unlimited Revisions" },
  { icon: "award" as const, title: "High Quality Output" },
  { icon: "tag" as const, title: "Affordable Pricing" },
  { icon: "shield" as const, title: "100% Satisfaction Guaranteed" },
];

export default function VectorArtPage() {
  return (
    <>
      <Hero
        eyebrow="Raster to Vector Conversion"
        titleLines={[{ text: "Pixel-Perfect" }, { text: "Vector Conversion", accent: true }]}
        description="Convert any raster image into clean, scalable vector art. Manual tracing by expert artists with unlimited revisions and 24-hour turnaround."
        bgImage={vectorBg}
        imageLabel="Design workspace with car sketch — vector art conversion in progress"
        features={[
          { icon: "infinity", title: "Infinite Scaling", sub: "No pixelation ever" },
          { icon: "smile", title: "Manual Tracing", sub: "By expert artists" },
          { icon: "type", title: "All Formats", sub: "AI, SVG, EPS, PDF" },
          { icon: "refresh", title: "Unlimited Revisions", sub: "Until you\'re happy" },
        ]}
      />

      <ServiceTypeGrid items={VECTOR_TYPES} eyebrow="Our Services" title="Vector Art Solutions" subtitle="Professional vector conversion services for every application and industry." />

      <WhyChooseUs
        eyebrow="Why Choose Velora?"
        title="We Make The Difference"
        items={WHY_CHOOSE_ITEMS}
      />

      <FAQ items={VECTOR_FAQS} title="Vector Art - Frequently Asked Questions" subtitle="Common questions about our vector conversion services." />

      <CTABanner />
    </>
  );
}
