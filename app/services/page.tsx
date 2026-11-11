import type { Metadata } from "next";
import Hero from "../components/Hero";
import servicesBg from "../images/velora-embroidery-workstation.webp";
import Link from "next/link";
import ServiceOrderDetails from "../components/ServiceOrderDetails";
import CTABanner from "../components/CTABanner";
import { FAQ, SERVICES_FAQS } from "../components/FAQ";
import PortfolioSection from "../components/PortfolioSection";
import RelatedGuides from "../components/RelatedGuides";
import RelatedServicesNav from "../components/RelatedServicesNav";
import Icon, { type IconName } from "../components/Icon";
import { PRICING_PLANS, formatPrice } from "../components/pricing-data";

const BASE_URL = "https://www.veloradigitizing.com";

export const metadata: Metadata = {
  title: { absolute: "Embroidery Digitizing Service Types: Cap, 3D Puff, Applique & Patch" },
  description:
    "Not sure which embroidery digitizing service your logo needs? Compare flat logo, cap, 3D puff, applique, patch and vector services by placement, finish and what to send with your quote.",
  alternates: {
    canonical: `${BASE_URL}/services`,
  },
  openGraph: {
    title: "Which Embroidery Digitizing Service Does Your Logo Need?",
    description:
      "Compare flat logo, cap, 3D puff, applique, patch and vector digitizing by placement and finish, then see exactly what to send for a quote.",
    url: `${BASE_URL}/services`,
    siteName: "Velora Digitizing",
    images: [
      {
        url: "/images/og/og-services.jpg",
        width: 1200,
        height: 630,
        alt: "Velora Digitizing service directory: cap, 3D puff, applique, patch and vector digitizing",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Which Embroidery Digitizing Service Does Your Logo Need?",
    description:
      "Compare digitizing services by garment placement and finish, and learn what each one includes before you order.",
    images: ["/images/og/og-services.jpg"],
  },
};

type ServiceGuide = {
  slug: string;
  name: string;
  href: string;
  icon: IconName;
  placement: string;
  chooseWhen: string;
  youReceive: string;
  watchOut: string;
  guideHref: string;
  guideLabel: string;
};

const SERVICE_GUIDES: ServiceGuide[] = [
  {
    slug: "flat-logo",
    name: "Flat logo digitizing",
    href: "/contact",
    icon: "shirt-logo",
    placement: "Polo shirts, uniforms, work shirts and jacket backs",
    chooseWhen:
      "Your logo sews on a flat, hooped garment with standard fill and satin stitches. This covers most left chest logos, uniform names and large jacket-back designs.",
    youReceive:
      "A stitch file in your machine's format, with underlay, pull compensation and stitch sequence set for the finished size and fabric you specify.",
    watchOut:
      "A jacket-back file reduced to left chest size loses small text and outlines. Each finished size is a separate file, and lettering under about 4 mm is usually simplified.",
    guideHref: "/blog/left-chest-logo-embroidery-digitizing-guide",
    guideLabel: "Left chest logo sizing and placement guide",
  },
  {
    slug: "cap",
    name: "Cap logo digitizing",
    href: "/services/cap-logo-digitizing",
    icon: "cap",
    placement: "Hat fronts, sides and backs on structured or unstructured caps",
    chooseWhen:
      "The design sews on a curved cap frame. Cap files are sequenced from the centre outward and from the bottom up so the fabric does not bunch against the centre seam.",
    youReceive:
      "A cap-specific stitch file built around your hat construction, the usable frame area and any centre seam that crosses the artwork.",
    watchOut:
      "A file digitized for a shirt is not a cap file. Small lettering across the centre seam needs extra attention and a test on the same hat blank.",
    guideHref: "/blog/cap-hat-logo-embroidery-digitizing-guide",
    guideLabel: "Cap and hat digitizing guide",
  },
  {
    slug: "3d-puff",
    name: "3D puff digitizing",
    href: "/services/3d-puff-digitizing",
    icon: "layers",
    placement: "Raised lettering and bold emblems on caps, snapbacks and heavy fleece",
    chooseWhen:
      "You want letters or shapes to stand up from the fabric. High-density satin is stitched over embroidery foam, and the needle perforates the foam along the edges.",
    youReceive:
      "A file with flat elements sequenced first, a programmed foam stop, end-capped satin columns and density set for the foam thickness you plan to use.",
    watchOut:
      "Lines under about 3 mm cannot hold foam, and shapes wider than about 12 mm need split satin or a flat fill. Fine detail usually stays flat.",
    guideHref: "/blog/3d-puff-embroidery-digitizing-guide",
    guideLabel: "3D puff digitizing guide",
  },
  {
    slug: "applique",
    name: "Applique digitizing",
    href: "/services/applique-digitizing",
    icon: "scissors",
    placement: "Fabric letters, varsity numbers and layered designs on jerseys and jackets",
    chooseWhen:
      "Large areas are covered with a fabric piece instead of fill stitches. This reduces stitch count on big designs and gives a layered, textured finish.",
    youReceive:
      "A file with a placement line, fabric stop, tackdown and finishing border in the order your cutting method needs. A vector cut file can be included on request.",
    watchOut:
      "In-hoop trimming and pre-cut pieces need different sequences. Confirm the border covers the cut edge on a sample with your actual fabric.",
    guideHref: "/blog/applique-embroidery-digitizing-guide",
    guideLabel: "Applique tackdown and cut line guide",
  },
  {
    slug: "patches",
    name: "Custom patch digitizing",
    href: "/patches",
    icon: "badge",
    placement: "Embroidered, woven, chenille, PVC and leather patches",
    chooseWhen:
      "The design is produced as a separate patch and then attached to the garment. Patch files carry a border and backing specification instead of garment-specific settings.",
    youReceive:
      "A patch-ready stitch file with the border and size callouts a patch maker needs, or finished patches if you order physical production.",
    watchOut:
      "Say clearly whether you need the digital file or finished patches. Patch type, size, quantity and backing all change the quote.",
    guideHref: "/blog/custom-patch-types-embroidered-woven-pvc-leather-chenille",
    guideLabel: "Patch types compared",
  },
  {
    slug: "vector-art",
    name: "Vector art conversion",
    href: "/vector-art",
    icon: "pen-tool",
    placement: "Artwork for screen printing, vinyl cutting, DTF and laser work",
    chooseWhen:
      "You have a blurry JPG or PNG and need clean, scalable artwork. Vector conversion is also the cleanest starting point when the same logo will later be digitized.",
    youReceive:
      "Manually redrawn vector artwork in AI, EPS, SVG or PDF with clean paths and separated colours.",
    watchOut:
      "A vector file is not an embroidery stitch file. If you need both, order vector conversion and digitizing together.",
    guideHref: "/blog/vector-art-for-screen-printing-vs-embroidery",
    guideLabel: "Vector art for print versus embroidery",
  },
];

const COMBINATIONS = [
  {
    title: "Same logo, several placements",
    body:
      "A logo for a polo, a cap and a jacket back is three separate stitch files, each quoted on its own stitch count. Send every placement and finished size in one request so the files share the same colours and proportions.",
  },
  {
    title: "Vector first, then digitizing",
    body:
      "If your only artwork is a small or blurry image, vector conversion before digitizing gives cleaner edges and avoids guessing at details. The Standard plan already includes a vector file with the stitch file.",
  },
  {
    title: "Flat and 3D puff in one design",
    body:
      "Many cap designs combine raised main lettering with flat secondary text. This is handled as one 3D puff order with the flat elements sequenced before the foam stop.",
  },
];

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${BASE_URL}/services#page`,
      "url": `${BASE_URL}/services`,
      "name": "Embroidery Digitizing Service Types",
      "description":
        "Directory of Velora Digitizing services: flat logo, cap, 3D puff, applique, patch and vector art, compared by garment placement and finish.",
      "isPartOf": { "@type": "WebSite", "url": BASE_URL, "name": "Velora Digitizing" },
      "mainEntity": { "@id": `${BASE_URL}/services#list` },
    },
    {
      "@type": "ItemList",
      "@id": `${BASE_URL}/services#list`,
      "name": "Embroidery digitizing services",
      "itemListOrder": "https://schema.org/ItemListUnordered",
      "numberOfItems": SERVICE_GUIDES.length,
      "itemListElement": SERVICE_GUIDES.map((service, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": service.name,
        "url": `${BASE_URL}${service.href}`,
      })),
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": BASE_URL,
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": `${BASE_URL}/services`,
        },
      ],
    },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <Hero
        eyebrow="Service Directory"
        titleLines={[
          { text: "Which Digitizing Service" },
          { text: "Does Your Logo Need?", accent: true },
        ]}
        description="A polo, a curved cap, foam lettering, an applique jersey and a patch each need a different stitch file. Use this page to pick the right service, see what each one includes and what to send with your quote."
        bgImage={servicesBg}
        imageLabel="Professional Velora embroidery digitizing workspace"
        features={[
          { icon: "layers", title: "6 Service Types", sub: "Flat, cap, puff, applique, patch, vector" },
          { icon: "cap", title: "Chosen by Placement", sub: "Chest, cap, jacket back or patch" },
          { icon: "sliders", title: "One File per Use", sub: "Each size and placement is its own file" },
          { icon: "tag", title: "Prices Listed Separately", sub: "Three flat plans on the pricing page" },
        ]}
      />

      <section className="bg-white py-16 lg:py-20" aria-labelledby="compare-services-title">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">Quick Comparison</p>
          <h2 id="compare-services-title" className="mt-2 font-serif text-2xl font-bold text-navy-950 sm:text-3xl">Compare Services by Placement and Finish</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-navy-950/70">Start with where the design sews and how it should look when finished. The same artwork may need separate stitch files for a polo shirt, a curved cap and a raised foam design.</p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <caption className="sr-only">Compare embroidery services by placement, finish and required production details</caption>
              <thead className="bg-slate-50 text-navy-950"><tr>
                <th scope="col" className="p-4">Placement or finish</th><th scope="col" className="p-4">Service</th><th scope="col" className="p-4">What to confirm</th>
              </tr></thead>
              <tbody className="text-navy-950/75">
                {[
                  { placement: "Polo shirts, uniforms and jacket backs", label: "Flat logo digitizing", href: "/contact", details: "Finished size, fabric and placement; large and small versions need separate assessment." },
                  { placement: "Hat fronts, sides and backs", label: "Cap logo digitizing", href: "/services/cap-logo-digitizing", details: "Hat construction, centre seam and usable cap-frame sewing area." },
                  { placement: "Raised letters and bold emblems", label: "3D puff digitizing", href: "/services/3d-puff-digitizing", details: "Foam thickness and which areas should sew flat or raised." },
                  { placement: "Fabric letters and layered designs", label: "Applique digitizing", href: "/services/applique-digitizing", details: "Applique material, cutting method and preferred border finish." },
                  { placement: "Finished patches to attach to garments", label: "Custom patches", href: "/patches", details: "Patch type, dimensions, quantity and backing; specify whether you need physical patches or a file." },
                  { placement: "Artwork for print, vinyl or cutting", label: "Vector art conversion", href: "/vector-art", details: "Output format and production method; vector artwork alone is not an embroidery stitch file." },
                ].map((service) => <tr key={service.label} className="border-b border-navy-950/10">
                  <th scope="row" className="p-4 font-medium text-navy-950">{service.placement}</th>
                  <td className="p-4"><Link href={service.href} className="font-semibold text-brand-700 underline underline-offset-4">{service.label}</Link></td>
                  <td className="p-4 leading-relaxed">{service.details}</td>
                </tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 border-y border-navy-950/10 py-16 lg:py-20" aria-labelledby="service-breakdown-title">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">Service by Service</p>
          <h2 id="service-breakdown-title" className="mt-2 font-serif text-2xl font-bold text-navy-950 sm:text-3xl">What Each Digitizing Service Includes</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-navy-950/70">When to choose each service, what the delivered file contains, and the limits that most often cause a redo. Open a service for its full order requirements and sample checks.</p>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {SERVICE_GUIDES.map((service) => (
              <article key={service.slug} className="flex h-full flex-col rounded-xl border border-navy-950/10 bg-white p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-600/10 text-brand-600 ring-1 ring-brand-600/20">
                    <Icon name={service.icon} className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-navy-950">
                      <Link href={service.href} className="hover:text-brand-600">{service.name}</Link>
                    </h3>
                    <p className="mt-1 text-sm text-navy-950/60">{service.placement}</p>
                  </div>
                </div>

                <dl className="mt-5 space-y-4 text-sm leading-relaxed text-navy-950/75">
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wider text-navy-950/60">Choose this when</dt>
                    <dd className="mt-1">{service.chooseWhen}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wider text-navy-950/60">You receive</dt>
                    <dd className="mt-1">{service.youReceive}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wider text-navy-950/60">Watch out for</dt>
                    <dd className="mt-1">{service.watchOut}</dd>
                  </div>
                </dl>

                <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-navy-950/10 pt-4 text-sm font-semibold">
                  <Link href={service.href} className="text-brand-700 underline underline-offset-4">
                    {service.href === "/contact" ? "Request a flat logo quote" : `Open ${service.name.toLowerCase()}`}
                  </Link>
                  <Link href={service.guideHref} className="text-navy-950/70 underline underline-offset-4 hover:text-brand-600">
                    {service.guideLabel}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20" aria-labelledby="combinations-title">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">Combining Services</p>
          <h2 id="combinations-title" className="mt-2 font-serif text-2xl font-bold text-navy-950 sm:text-3xl">How Orders Combine</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {COMBINATIONS.map((item) => (
              <div key={item.title} className="rounded-xl border border-navy-950/10 bg-slate-50 p-6">
                <h3 className="font-serif text-lg font-bold text-navy-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-950/75">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceOrderDetails kind="services" />

      <PortfolioSection />

      <section className="bg-navy-950 py-14 text-white" aria-labelledby="pricing-pointer-title">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-300">Pricing</p>
              <h2 id="pricing-pointer-title" className="mt-2 font-serif text-2xl font-bold sm:text-3xl">Every Service Uses the Same Three Plans</h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-white/75">
                Cap, 3D puff, applique and flat logo files are all priced per design by stitch count, not by service type. Full plan details, revision allowances and delivery windows are on the pricing page.
              </p>
              <Link href="/pricing" className="vr-btn vr-btn-primary mt-6 inline-flex items-center rounded-md bg-brand-600 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-700">
                See full pricing
              </Link>
            </div>
            <ul className="divide-y divide-white/10 rounded-xl border border-white/10 bg-white/5">
              {PRICING_PLANS.map((plan) => (
                <li key={plan.name} className="flex items-start justify-between gap-4 p-4">
                  <div>
                    <p className="font-semibold">{plan.name}</p>
                    <p className="mt-0.5 text-sm text-white/65">{plan.description}</p>
                  </div>
                  <p className="shrink-0 font-serif text-lg font-bold">{formatPrice(plan.price)}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <FAQ
        items={SERVICES_FAQS}
        title="Choosing a Service - Frequently Asked Questions"
        subtitle="Answers on picking between services, fabric types and combining digitizing with vector work."
      />

      <RelatedServicesNav currentSlug="services" />

      <RelatedGuides
        title="Guides for Choosing and Preparing an Order"
        subtitle="How to prepare artwork, size a logo for its placement and understand what drives the price."
        slugs={[
          "how-to-digitize-embroidery-designs",
          "how-to-prepare-logo-for-embroidery-digitizing",
          "left-chest-logo-embroidery-digitizing-guide",
          "jacket-back-embroidery-digitizing-guide",
          "embroidery-digitizing-cost-pricing-guide",
          "why-outsource-embroidery-digitizing-usa-guide",
          "best-online-embroidery-digitizing-services-comparison-guide",
        ]}
      />

      <CTABanner />
    </>
  );
}
