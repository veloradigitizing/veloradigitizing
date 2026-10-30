import Hero from "../components/Hero";
import storeBg from "../images/velora-embroidery-collection.webp";
import PatchGallery from "../components/PatchGallery";
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
      <CTABanner />
    </>
  );
}
