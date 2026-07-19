"use client";

import Hero from "../components/Hero";
import { Breadcrumb, SectionTag } from "../components/Section";
import { Reveal } from "../components/Reveal";
import { stagger } from "../components/stagger";
import WhyChooseUs from "../components/WhyChooseUs";
import ProcessSteps from "../components/ProcessSteps";
import CTABanner from "../components/CTABanner";
import Icon from "../components/Icon";

const PATCH_TYPES = [
  { icon: "badge-check", title: "Merrow Border Patches", desc: "Classic overlocked edge with a raised thread border. The traditional patch look that is durable, clean, and timeless. Best for simple shapes like circles, squares, and rectangles." },
  { icon: "layers", title: "Laser Cut Patches", desc: "Precision laser-cut edges for intricate shapes that merrow stitching cannot achieve. Perfect for detailed logos, custom outlines, and die-cut designs with tight corners." },
  { icon: "grid", title: "Woven Patches", desc: "Fine thread woven patches with photographic detail. Supports smaller text and tighter details than embroidered patches. Ideal for badges and uniform insignia." },
  { icon: "star", title: "Chenille Patches", desc: "Fuzzy, raised chenille yarn for varsity letters and mascot patches. The classic letterman jacket look that is bold, textured, and nostalgic." },
  { icon: "shield", title: "PVC Patches", desc: "Rubber-like PVC patches for tactical gear, outdoor equipment and heavy-use apparel. Waterproof, fade-proof, and virtually indestructible in any environment." },
  { icon: "shirt", title: "Iron-On Patches", desc: "Heat-seal backing for easy at-home application. Just press with an iron for 30 seconds with no sewing required. Creates a permanent bond that survives the wash." },
];

const BACKINGS = [
  { label: "Iron-On", desc: "Heat-seal backing for fabric" },
  { label: "Sew-On", desc: "Stitched directly onto garment" },
  { label: "Velcro", desc: "Hook-and-loop, removable" },
  { label: "Adhesive", desc: "Peel-and-stick, temporary" },
];

const SIZES = [
  { size: '1\u201d \u2013 2\u201d', desc: "Small cap and collar patches" },
  { size: '2\u201d \u2013 3\u201d', desc: "Standard left-chest size" },
  { size: '3\u201d \u2013 4\u201d', desc: "Medium jacket and bag patches" },
  { size: '4\u201d \u2013 6\u201d', desc: "Large back and banner patches" },
  { size: '6\u201d+', desc: "Oversized and custom shapes" },
];

const FAQS = [
  { q: "What is the minimum order quantity for patches?", a: "For digital patch files, there is no minimum order. For physical patch manufacturing, the minimum is typically 50 pieces. Contact us for exact pricing based on your quantity, size, and backing type." },
  { q: "How long does patch digitizing take?", a: "Standard turnaround is 24 hours for the digitized file. Rush delivery under 12 hours is available for an additional 30% fee. Physical patch manufacturing takes 7-10 business days after file approval." },
  { q: "What file formats do you deliver?", a: "We deliver all major embroidery formats: DST, PES, JEF, EXP, VP3, and XXX. You will receive all formats in a single zip file." },
  { q: "Can you match my brand colors exactly?", a: "Yes. We use Madeira and Isacord polyester thread in 380+ colors and cross-reference your brand PMS/HEX codes against physical thread charts under daylight-balanced bulbs. Color matching is included at no extra cost." },
  { q: "What is the difference between embroidered and woven patches?", a: "Embroidered patches have raised stitching on a twill backing, which is thicker and more tactile. Woven patches are made entirely from thread woven together, which is flatter with finer detail and smaller text." },
  { q: "Do you offer physical patch manufacturing too?", a: "Yes, we handle the full process from digitizing to manufacturing. After you approve the digital proof, we produce the physical patches in your chosen type, size, and backing. Minimum 50 pieces applies." },
];

const WHY_CHOOSE_ITEMS = [
  { icon: "headset", title: "24/7 Support" },
  { icon: "rocket", title: "Fast Delivery" },
  { icon: "refresh", title: "Unlimited Revisions" },
  { icon: "award", title: "High Stitch Quality" },
  { icon: "tag", title: "Affordable Pricing" },
  { icon: "shield", title: "100% Satisfaction Guaranteed" },
];

export default function PatchesPage() {
  return (
    <>
      <Hero
        eyebrow="Custom Patches"
        titleLines={[{ text: "Patches That" }, { text: "Stand Out", accent: true }]}
        description="From merrow borders to laser-cut, woven, chenille and PVC \u2014 we digitize patches in any shape, size, or backing. Wash-tested up to 50 cycles, shipped worldwide."
      />
      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-10">
        <Reveal direction="up"><Breadcrumb current="Patches" /></Reveal>
      </section>
      <section className="bg-brand-50/50 py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <Reveal direction="up"><SectionTag eyebrow="Patch Types" title="Every Patch Style Imaginable" subtitle="Choose the construction that fits your design, garment, and budget." /></Reveal>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PATCH_TYPES.map((p, i) => (
              <Reveal key={p.title} direction="up" delay={stagger(i, 80)}>
                <div className="group relative flex h-full flex-col items-start overflow-hidden rounded-xl border border-navy-950/10 bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-2xl">
                  <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-500/0 to-brand-500/0 transition-all duration-500 group-hover:from-brand-500/5 group-hover:to-transparent" />
                  <span className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-600/10 text-brand-600 ring-1 ring-brand-600/20 transition-all duration-500 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white group-hover:shadow-[0_8px_20px_-6px_rgba(26,63,196,0.5)]">
                    <Icon name={p.icon} className="h-7 w-7" />
                  </span>
                  <h3 className="relative font-serif text-lg font-bold text-navy-950">{p.title}</h3>
                  <p className="relative mt-2 flex-1 text-sm leading-relaxed text-navy-950/60">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <Reveal direction="up"><SectionTag align="left" eyebrow="Backing Options" title="How Will You Attach It?" subtitle="Every patch comes with your choice of backing." /></Reveal>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {BACKINGS.map((b, i) => (
                  <Reveal key={b.label} direction="up" delay={stagger(i, 60)}>
                    <div className="group rounded-xl border border-navy-950/10 bg-white p-5 text-center transition-all duration-500 hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-xl">
                      <div className="font-serif text-lg font-bold text-navy-950 transition-colors group-hover:text-brand-600">{b.label}</div>
                      <p className="mt-1 text-xs text-navy-950/50">{b.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            <div>
              <Reveal direction="up"><SectionTag align="left" eyebrow="Patch Sizes" title="Any Size You Need" subtitle="From tiny collar patches to oversized back banners." /></Reveal>
              <div className="mt-8 space-y-3">
                {SIZES.map((s, i) => (
                  <Reveal key={s.size} direction="up" delay={stagger(i, 60)}>
                    <div className="group flex items-center justify-between rounded-xl border border-navy-950/10 bg-white px-5 py-3 transition-all duration-300 hover:border-brand-500/40 hover:bg-brand-50/50">
                      <span className="font-serif text-sm font-bold text-navy-950">{s.size}</span>
                      <span className="text-xs text-navy-950/50">{s.desc}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <WhyChooseUs
        eyebrow="Why Choose Velora for Patches?"
        title="Patches Done Right"
        items={WHY_CHOOSE_ITEMS}
      />
      <ProcessSteps />
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-5 lg:px-10">
          <Reveal direction="up"><SectionTag eyebrow="FAQ" title="Patches Questions" subtitle="Everything you need to know before ordering." /></Reveal>
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
