import Image from "next/image";
import { Reveal } from "./Reveal";

export default function OurStorySection({
  imageSrc = "/images/about/embroidery-machine.png",
  imageAlt = "Industrial embroidery machine stitching the velora logo",
  eyebrow = "Our Story",
  title = "Passion. Precision. Perfection.",
  paragraphs = [
    "velora Digitizing was founded with a simple mission — to provide world-class embroidery digitizing services with unmatched quality and reliability.",
    "We understand that every stitch represents your brand. That's why we use advanced digitizing technology and skilled expertise to ensure every design looks perfect on fabric.",
    "From small logos to complex patches, we treat every project with the same level of care and dedication.",
  ],
  signature = "velora Digitizing",
  signatureTitle = "Founder, velora Digitizing",
}: {
  imageSrc?: string;
  imageAlt?: string;
  eyebrow?: string;
  title?: string;
  paragraphs?: string[];
  signature?: string;
  signatureTitle?: string;
}) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <Reveal
          direction="left"
          className="vr-zoom overflow-hidden rounded-2xl border border-navy-950/10"
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={1200}
            height={900}
            className="h-full w-full object-cover"
            priority
          />
        </Reveal>
        <Reveal direction="right">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
            {eyebrow}
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-navy-950 sm:text-4xl">
            {title}
          </h2>
          <div className="mt-4 h-[3px] w-16 rounded-full bg-brand-600" />
          <div className="mt-6 flex flex-col gap-4 text-[15px] leading-relaxed text-navy-950/60">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <p className="mt-6 font-script text-2xl text-brand-600">
            {signature}
          </p>
          <p className="text-xs text-navy-950/50">{signatureTitle}</p>
        </Reveal>
      </div>
    </section>
  );
}
