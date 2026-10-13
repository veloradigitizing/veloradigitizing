"use client";

import Link from "next/link";
import Icon, { type IconName } from "./Icon";
import { Reveal } from "./Reveal";

interface RelatedServicesNavProps {
  currentSlug: string;
}

interface ServiceNavItem {
  slug: string;
  title: string;
  href: string;
  description: string;
  icon: IconName;
  blogHref?: string;
  blogTitle?: string;
}

const CORE_SERVICES: ServiceNavItem[] = [
  {
    slug: "3d-puff-digitizing",
    title: "3D Puff Digitizing",
    href: "/services/3d-puff-digitizing",
    description: "Raised dimensional foam embroidery for caps, snapbacks and hoodies.",
    icon: "layers",
    blogHref: "/blog/3d-puff-embroidery-digitizing-guide",
    blogTitle: "Complete 3D Puff Digitizing Guide & Formulas",
  },
  {
    slug: "cap-logo-digitizing",
    title: "Cap Logo Digitizing",
    href: "/services/cap-logo-digitizing",
    description: "Center-out digitizing engineered for curved cap frames with zero seam bunching.",
    icon: "cap",
    blogHref: "/blog/cap-hat-logo-embroidery-digitizing-guide",
    blogTitle: "Cap & Hat Center-Out Digitizing Master Guide",
  },
  {
    slug: "applique-digitizing",
    title: "Applique Digitizing",
    href: "/services/applique-digitizing",
    description: "Tackdown and satin border stitches for jerseys, varsity jackets and large text.",
    icon: "scissors",
    blogHref: "/blog/applique-embroidery-digitizing-guide",
    blogTitle: "Appliqué Tack-Down & Cut Lines Guide",
  },
  {
    slug: "vector-art",
    title: "Vector Art Conversion",
    href: "/vector-art",
    description: "Manual raster-to-vector artwork tracing for screen print, vinyl and DTF.",
    icon: "pen-tool",
    blogHref: "/blog/vector-art-for-screen-printing-vs-embroidery",
    blogTitle: "Vector Art for Screen Printing vs Embroidery Guide",
  },
  {
    slug: "patches",
    title: "Custom Patches",
    href: "/patches",
    description: "Embroidered, PVC, woven, and leather patches with merrowed borders.",
    icon: "sticker",
    blogHref: "/blog/custom-patch-types-embroidered-woven-pvc-leather-chenille",
    blogTitle: "Custom Patch Types & Backings Master Guide",
  },
];

export default function RelatedServicesNav({ currentSlug }: RelatedServicesNavProps) {
  const currentService = CORE_SERVICES.find((s) => s.slug === currentSlug);
  const otherServices = CORE_SERVICES.filter((s) => s.slug !== currentSlug);

  return (
    <section className="border-t border-navy-950/10 bg-slate-50/60 py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        {currentService?.blogHref && (
          <div className="mb-10 mx-auto max-w-2xl rounded-2xl border border-brand-600/25 bg-gradient-to-r from-brand-50/70 to-blue-50/40 p-5 shadow-xs flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-brand-600">
                Technique Deep Dive
              </p>
              <h3 className="mt-1 font-serif text-base font-bold text-navy-950">
                {currentService.blogTitle}
              </h3>
              <p className="mt-1 text-xs text-navy-950/65">
                Learn stitch densities, needle choices, and machine hooping rules for this technique.
              </p>
            </div>
            <Link
              href={currentService.blogHref}
              className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-lg bg-navy-950 px-4 py-2.5 text-xs font-semibold text-white transition-all hover:bg-brand-600 shadow-xs"
            >
              Read Guide &rarr;
            </Link>
          </div>
        )}

        <Reveal direction="up" className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
            Explore More Services
          </p>
          <h2 className="mt-2 font-serif text-2xl font-bold text-navy-950 sm:text-3xl">
            More Professional Digitizing &amp; Artwork Services
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-navy-950/65">
            Looking for something else? Velora Digitizing covers every stitch technique and format for high-production apparel businesses.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {otherServices.slice(0, 4).map((s) => (
            <Link
              key={s.slug}
              href={s.href}
              className="group relative flex flex-col justify-between rounded-xl border border-navy-950/10 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-600/40 hover:shadow-lg"
            >
              <div>
                <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                  <Icon name={s.icon} className="h-5 w-5" />
                </span>
                <h3 className="font-serif text-base font-bold text-navy-950 transition-colors group-hover:text-brand-600">
                  {s.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-navy-950/60">
                  {s.description}
                </p>
              </div>
              <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 group-hover:underline">
                Learn more &rarr;
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-lg border border-navy-950/15 bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-navy-950 transition-colors hover:border-brand-600 hover:text-brand-600"
          >
            View All Services &amp; Pricing &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
