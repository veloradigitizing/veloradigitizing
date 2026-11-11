import Hero from "../components/Hero";
import storeBg from "../images/velora-embroidery-collection.webp";
import PatchGallery from "../components/PatchGallery";
import Link from "next/link";
import CTABanner from "../components/CTABanner";

export default function StorePage() {
  return (
    <>
      <Hero
        eyebrow="Our Latest Patch Work"
        titleLines={[{ text: "Custom Felt & Twill" }, { text: "Patch Samples", accent: true }]}
        description="Browse our latest felt and twill patch samples. Share your logo, size, and quantity with our team for a custom patch quote."
        bgImage={storeBg}
        imageLabel="Velora embroidery workspace and custom apparel"
        features={[
          { icon: "layers", title: "Felt & Twill", sub: "Two custom patch collections" },
          { icon: "scissors", title: "Custom Designs", sub: "Your logo, shape, and size" },
          { icon: "headset", title: "Personal Support", sub: "Discuss your project with us" },
          { icon: "send", title: "Request a Quote", sub: "Pricing for your requirements" },
        ]}
      />
      <PatchGallery />
      <section className="mx-auto max-w-4xl px-5 py-16 lg:px-10">
        <h2 className="font-serif text-2xl font-bold text-navy-950 sm:text-3xl">
          How Custom Felt and Twill Patch Orders Work
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-navy-950/75">
          The patches on this page are samples of work we have produced, not stock items. Every patch is made to
          order from your own logo, so the price depends on the size, the number of thread colors, the backing and
          the quantity. Send us the artwork with those details and we reply with a quote before any work starts.
        </p>
        <h3 className="mt-8 font-serif text-xl font-bold text-navy-950">Felt or twill: which one to choose</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-navy-950/75">
          Felt patches have a soft, matte surface with a slightly raised feel, which suits vintage, varsity and
          streetwear designs. Twill patches use a tightly woven base fabric that holds a crisp edge, so they are the
          usual choice for uniforms, team wear and name or number patches. Both can be finished with a stitched
          border and made as sew-on or iron-on. Our guide to{" "}
          <Link href="/blog/custom-patch-types-embroidered-woven-pvc-leather-chenille" className="font-semibold text-brand-600 hover:text-brand-700">
            custom patch types
          </Link>{" "}
          compares these with woven, PVC, leather and chenille patches, and{" "}
          <Link href="/blog/iron-on-vs-sew-on-patches" className="font-semibold text-brand-600 hover:text-brand-700">
            iron-on vs sew-on patches
          </Link>{" "}
          explains which backing lasts longer.
        </p>
        <h3 className="mt-8 font-serif text-xl font-bold text-navy-950">What to send for a patch quote</h3>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-navy-950/75">
          <li>Your logo or artwork in any format (vector, PNG, JPG or a clear photo).</li>
          <li>The finished patch size in inches and the shape you want.</li>
          <li>Felt or twill, plus the backing: sew-on, iron-on or velcro.</li>
          <li>The quantity and the date you need the patches by.</li>
        </ul>
        <p className="mt-6 text-[15px] leading-relaxed text-navy-950/75">
          If you run your own embroidery machine and only need the stitch file, our{" "}
          <Link href="/patches" className="font-semibold text-brand-600 hover:text-brand-700">
            custom patch digitizing service
          </Link>{" "}
          delivers a machine-ready patch file instead, on the same flat plans shown on the{" "}
          <Link href="/pricing" className="font-semibold text-brand-600 hover:text-brand-700">
            pricing page
          </Link>
          .
        </p>
      </section>
      <CTABanner />
    </>
  );
}
