"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Icon from "./Icon";
import { Reveal } from "./Reveal";
import { stagger } from "./stagger";

/* ------------------------------------------------------------------
   FAQ — Centralized, reusable accordion with search + categories
   ------------------------------------------------------------------ */

export interface FAQItem {
  question: string;
  answer: string;
  /** Optional category chip — when at least one item has a category,
   *  the category filter row appears. */
  category?: string;
}

export interface FAQProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
  /** Show / hide the search box. Default: true when items.length >= 5 */
  searchable?: boolean;
  /** Show / hide the "Still have questions" CTA. Default: true */
  showCta?: boolean;
  /** Override CTA label / href */
  ctaLabel?: string;
  ctaHref?: string;
  /** Optional eyebrow above the title */
  eyebrow?: string;
  /** Optional max-width class for the section. Defaults to max-w-4xl. */
  maxWidthClass?: string;
  className?: string;
}

export function FAQ({
  items,
  title = "Frequently Asked Questions",
  subtitle = "Find answers to common questions about our services.",
  searchable,
  showCta = true,
  ctaLabel = "Contact Our Team",
  ctaHref = "/contact",
  eyebrow = "FAQ",
  maxWidthClass = "max-w-4xl",
  className = "",
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const searchRef = useRef<HTMLInputElement | null>(null);

  /* Categories are derived from items that carry a `category` field. */
  const categories = useMemo(() => {
    const seen = new Set<string>();
    items.forEach((i) => i.category && seen.add(i.category));
    return Array.from(seen);
  }, [items]);

  const showSearch = searchable ?? (items.length >= 5 || categories.length > 0);
  const showCategories = categories.length > 0;

  /* Reset category if it disappears from the filtered set. */
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items
      .map((item, originalIndex) => ({ ...item, originalIndex }))
      .filter((item) => {
        if (activeCategory && item.category !== activeCategory) return false;
        if (!q) return true;
        return (
          item.question.toLowerCase().includes(q) ||
          item.answer.toLowerCase().includes(q)
        );
      });
  }, [items, query, activeCategory]);

  /* If the currently-open item gets filtered out, collapse the accordion. */
  useEffect(() => {
    if (openIndex === null) return;
    if (!filtered.some((f) => f.originalIndex === openIndex)) {
      setOpenIndex(null);
    }
  }, [filtered, openIndex]);

  /* Keyboard shortcut: "/" focuses the search box. */
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (
        e.key === "/" &&
        document.activeElement?.tagName !== "INPUT" &&
        document.activeElement?.tagName !== "TEXTAREA"
      ) {
        e.preventDefault();
        searchRef.current?.focus();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section
      className={`relative bg-gradient-to-b from-brand-50/40 via-white to-white py-16 lg:py-24 ${className}`}
    >
      {/* Soft decorative glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-brand-500/10 blur-3xl hidden sm:block"
      />

      <div className={`relative mx-auto ${maxWidthClass} px-5 lg:px-8`}>
        {/* Header */}
        <Reveal direction="up" className="text-center">
          {/* Tag */}
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-brand-500/30" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-600">
              {eyebrow}
            </span>
            <span className="h-px w-8 bg-brand-500/30" />
          </div>

          <h2 className="font-serif text-3xl font-bold text-navy-950 sm:text-4xl lg:text-[2.5rem]">
            {title}
          </h2>
          {subtitle && (
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-navy-950/60">
              {subtitle}
            </p>
          )}
        </Reveal>

        {/* Search + Categories */}
        {showSearch && (
          <Reveal direction="up" delay={80} className="mt-8">
            <div className="flex flex-col items-center gap-4">
              <div className="relative w-full max-w-xl">
                <Icon
                  name="search"
                  className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-950/40"
                />
                <input
                  ref={searchRef}
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search questions…  (press “/” to focus)"
                  aria-label="Search FAQ"
                  className="w-full rounded-full border border-navy-950/10 bg-white py-3 pl-11 pr-10 text-sm text-navy-950 shadow-sm transition-all placeholder:text-navy-950/40 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    aria-label="Clear search"
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-navy-950/40 transition-colors hover:bg-navy-950/5 hover:text-navy-950"
                  >
                    <Icon name="close" className="h-4 w-4" />
                  </button>
                )}
              </div>

              {showCategories && (
                <div className="flex flex-wrap items-center justify-center gap-2">
                  <CategoryChip
                    label="All"
                    active={activeCategory === null}
                    onClick={() => setActiveCategory(null)}
                  />
                  {categories.map((c) => (
                    <CategoryChip
                      key={c}
                      label={c}
                      active={activeCategory === c}
                      onClick={() =>
                        setActiveCategory(activeCategory === c ? null : c)
                      }
                    />
                  ))}
                </div>
              )}
            </div>
          </Reveal>
        )}

        {/* FAQ Items — Accordion */}
        <Reveal direction="up" delay={120} className="mt-10">
          <div className="space-y-3">
            {filtered.length === 0 ? (
              <EmptyState query={query} onReset={() => setQuery("")} />
            ) : (
              filtered.map((item, displayIndex) => {
                const isOpen = openIndex === item.originalIndex;
                return (
                  <div
                    key={item.originalIndex}
                    className={`group rounded-xl border transition-all duration-300 ${
                      isOpen
                        ? "border-brand-200 bg-white shadow-lg shadow-brand-100/40"
                        : "border-navy-950/10 bg-white hover:border-brand-200 hover:shadow-md"
                    }`}
                  >
                    <button
                      onClick={() =>
                        setOpenIndex(isOpen ? null : item.originalIndex)
                      }
                      className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left sm:px-6"
                      aria-expanded={isOpen}
                    >
                      <span
                        className={`text-base font-semibold transition-colors duration-200 sm:text-[17px] ${
                          isOpen ? "text-brand-700" : "text-navy-950"
                        }`}
                      >
                        {item.question}
                      </span>

                      <span
                        className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                          isOpen
                            ? "rotate-180 bg-brand-600 text-white"
                            : "bg-brand-50 text-brand-600 group-hover:bg-brand-100"
                        }`}
                        aria-hidden
                      >
                        <Icon name="chevron-down" className="h-4 w-4" />
                      </span>
                    </button>

                    {/* Smooth grid-rows animation — no jank, no scroll jump. */}
                    <div
                      className="grid transition-[grid-template-rows] duration-300 ease-out"
                      style={{
                        gridTemplateRows: isOpen ? "1fr" : "0fr",
                      }}
                      aria-hidden={!isOpen}
                    >
                      <div className="overflow-hidden">
                        <div className="border-t border-navy-950/5 px-5 pb-5 pt-4 sm:px-6">
                          <p className="text-sm leading-relaxed text-navy-950/70 sm:text-[15px]">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </Reveal>

        {/* Bottom CTA */}
        {showCta && (
          <Reveal direction="up" delay={160} className="mt-12 text-center">
            <p className="mb-4 text-sm text-navy-950/50">
              Still have questions? We&apos;re here 24/7.
            </p>
            <a
              href={ctaHref}
              className="vr-btn vr-btn-primary inline-flex items-center gap-2 rounded-md bg-brand-600 px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-brand-700 hover:shadow-md"
            >
              {ctaLabel}
              <span aria-hidden className="vr-arrow">
                &rarr;
              </span>
            </a>
          </Reveal>
        )}
      </div>

      {/* schema.org FAQ structured data — helps Google rich results. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: items.map((i) => ({
              "@type": "Question",
              name: i.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: i.answer,
              },
            })),
          }),
        }}
      />
    </section>
  );
}

/* ------------------------------------------------------------------
   Small subcomponents
   ------------------------------------------------------------------ */

function CategoryChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
        active
          ? "bg-brand-600 text-white shadow-sm"
          : "bg-white text-navy-950/70 ring-1 ring-navy-950/10 hover:ring-brand-200"
      }`}
    >
      {label}
    </button>
  );
}

function EmptyState({
  query,
  onReset,
}: {
  query: string;
  onReset: () => void;
}) {
  return (
    <div className="rounded-xl border border-dashed border-navy-950/10 bg-white/60 px-6 py-12 text-center">
      <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-brand-600">
        <Icon name="search" className="h-5 w-5" />
      </div>
      <p className="text-sm font-semibold text-navy-950">
        No questions match &ldquo;{query}&rdquo;
      </p>
      <p className="mt-1 text-sm text-navy-950/60">
        Try a different keyword or clear the search.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="mt-4 inline-flex items-center gap-1.5 rounded-md bg-navy-950 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-navy-900"
      >
        <Icon name="close" className="h-3.5 w-3.5" />
        Clear search
      </button>
    </div>
  );
}

/* ------------------------------------------------------------------
   Pre-defined FAQs per page
   ------------------------------------------------------------------ */

export const HOME_FAQS: FAQItem[] = [
  {
    question: "What is embroidery digitizing?",
    answer:
      "Embroidery digitizing is the process of converting your artwork, logo, or design into a digital stitch file (such as DST, PES, or JEF) that embroidery machines can read and sew onto fabric. Unlike simple auto-conversion, our expert digitizers manually plot every stitch — choosing underlay, pull-compensation, stitch type, and density — so the final sew-out is crisp, durable, and faithful to your original artwork on any fabric.",
    category: "General",
  },
  {
    question: "How long does it take to complete an order?",
    answer:
      "Standard orders are delivered within 12–24 hours. We also offer rush services including 2-hour, 4-hour, and same-day delivery for urgent projects. Weekend rush delivery is available on request — just select the rush option at checkout or mention it when you send your artwork.",
    category: "Turnaround",
  },
  {
    question: "What file formats do you deliver?",
    answer:
      "We deliver files in all major embroidery formats: DST (industry standard, Tajima), PES (Brother, Babylock), EXP (Melco), JEF (Janome), VP3 (Husqvarna Viking, Pfaff), XXX (Singer), HUS, CSD, SEW, and EMB. You receive every format you need in a single zip file — just let us know your machine model when ordering.",
    category: "Files",
  },
  {
    question: "Do you offer free revisions?",
    answer:
      "Yes! All plans include free revisions. Basic plans include 1 revision, Standard includes 3 revisions, and Rush / Complex orders include unlimited revisions until you're completely satisfied. Revisions are typically turned around within a few hours during business hours.",
    category: "Revisions",
  },
  {
    question: "What types of designs can you digitize?",
    answer:
      "We digitize virtually any design — corporate logos, monograms, text, 3D puff embroidery, appliqué, chenille patches, cap front and side logos, full jacket-back designs, left-chest logos, towel embroidery, shoulder designs, custom patches, and vector artwork conversions. If you can draw it or photograph it, we can stitch it.",
    category: "General",
  },
  {
    question: "Which artwork files can I send you?",
    answer:
      "We accept AI, EPS, PDF, PNG, JPG, SVG, CDR, PSD, and even clear photographs or hand-drawn scans. Vector artwork is ideal, but not required — if your file is low-resolution, our team can still work with it and we'll let you know if a vector redraw is recommended before we proceed.",
    category: "Files",
  },
  {
    question: "How do I place an order?",
    answer:
      "Three simple steps: (1) Upload your artwork through our contact form or email, (2) Tell us your fabric, size, and machine format, (3) Receive your digitized file via email within the turnaround window you selected. Payment is due on delivery for first-time clients and can be made by card, PayPal, or bank transfer.",
    category: "Ordering",
  },
  {
    question: "Is my artwork / design kept confidential?",
    answer:
      "Absolutely. Every file you send is treated as confidential intellectual property. We never publish client artwork in our portfolio without written permission, and all project files are stored on access-controlled servers. NDA agreements are available on request at no additional charge.",
    category: "General",
  },
];

export const ABOUT_FAQS: FAQItem[] = [
  {
    question: "How long has Velora Digitizing been in business?",
    answer:
      "Velora Digitizing has been providing professional embroidery digitizing services for years, serving thousands of clients worldwide — including embroidery shops, promotional product companies, fashion brands, and individual crafters across 50+ countries. Our senior digitizers each have 10+ years of hands-on production experience.",
    category: "Company",
  },
  {
    question: "What makes Velora different from other digitizing companies?",
    answer:
      "Three things set us apart. First, every design is hand-digitized by a senior digitizer — no auto-trace software. Second, we know fabric behavior: stitch density, underlay, and pull-compensation are tuned for the specific material you'll sew on. Third, we offer 24/7 live support, unlimited revisions on most plans, and a 100% satisfaction guarantee — if the file isn't right, we redo it.",
    category: "Company",
  },
  {
    question: "How many projects have you completed?",
    answer:
      "We've successfully delivered 15,000+ digitizing projects for 8,000+ happy clients worldwide. Our portfolio spans sports teams, corporate brands, fashion labels, schools, military and law enforcement units, and promotional product distributors. Each piece is reviewed by a second digitizer before delivery.",
    category: "Company",
  },
  {
    question: "Do you work with small businesses or only large companies?",
    answer:
      "We work with everyone — from individual hobbyists ordering their first logo to large corporations needing hundreds of designs per month. Every client receives the same premium quality and personal service regardless of order size. Volume discounts kick in automatically for repeat and bulk orders.",
    category: "Clients",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We serve diverse industries including sports apparel, corporate merchandise, fashion & retail, schools & universities, military & law enforcement, automotive, healthcare, hospitality, and promotional product distributors. Our digitizers understand the stitch requirements and compliance standards unique to each industry.",
    category: "Clients",
  },
  {
    question: "Where is your team located?",
    answer:
      "Our production studio is based in Los Angeles, CA, with a secondary operations team working across multiple time zones so we can offer true 24/7 coverage. Support is always live — when you message us, a real person replies, usually within minutes.",
    category: "Company",
  },
  {
    question: "Can I meet or speak with the digitizer working on my project?",
    answer:
      "Yes. For complex or high-volume projects we'll set up a direct call with the lead digitizer assigned to your account so you can walk through artwork, fabric, sizing, and stitch goals in detail. This is included at no extra cost for Rush and Standard plans.",
    category: "Clients",
  },
];

export const PORTFOLIO_FAQS: FAQItem[] = [
  {
    question: "Can I see samples before placing an order?",
    answer:
      "Absolutely. Our portfolio showcases real projects we've completed for clients, organized by category. You can also contact us with your specific design type and we'll send relevant samples — including the original artwork alongside the final stitch-out photo so you can judge translation quality apples-to-apples.",
    category: "Samples",
  },
  {
    question: "Are these actual client projects shown in the portfolio?",
    answer:
      "Yes — every image in our portfolio is from an actual client project (used with their permission). What you see is what we deliver: no stock photos, no mockups, no AI-generated previews. Each piece represents the true quality you can expect for your own designs.",
    category: "Samples",
  },
  {
    question: "Can I request a specific style similar to a portfolio item?",
    answer:
      "Definitely. When placing your order, reference any portfolio item by name or describe the style you prefer. Our team will match that quality level, stitch technique, and visual feel for your custom design — and we'll send a digital proof before final delivery so you can confirm direction.",
    category: "Ordering",
  },
  {
    question: "How often is the portfolio updated?",
    answer:
      "We refresh the portfolio every few weeks with new completed projects. With thousands of designs delivered each year, we continuously add fresh examples showcasing different styles, techniques, fabric types, and design complexities — so check back often or follow us on social for the latest additions.",
    category: "Samples",
  },
  {
    question: "Can I download high-resolution versions of portfolio images?",
    answer:
      "Portfolio images are displayed for reference purposes only. For high-resolution samples specific to your needs — including actual stitch files in your machine's format — please contact us directly and we'll provide appropriate sample files for your review, often within the same business day.",
    category: "Files",
  },
  {
    question:
      "Do you sign NDAs for client work that shouldn't appear publicly?",
    answer:
      "Yes. Many of our enterprise and fashion-brand clients require NDAs, and we never publish their work. If your project is sensitive or pre-launch, let us know and we'll sign a mutual NDA before any artwork is exchanged. Your confidentiality is part of our standard service.",
    category: "Ordering",
  },
];

export const PRICING_FAQS: FAQItem[] = [
  {
    question: "Is there a minimum order requirement?",
    answer:
      "No minimum order required. You can order a single design or bulk orders — the same great per-design pricing applies. Volume discounts kick in automatically for orders of 10+ designs, with steeper discounts at 25+, 50+, and 100+ designs. Contact us for a custom quote on bulk projects.",
    category: "Orders",
  },
  {
    question: "What's included in each pricing tier?",
    answer:
      "Basic ($6.99): up to 5,000 stitches, standard sizes, 1 revision, 24–48hr delivery. Standard ($12.99): up to 15,000 stitches, all sizes, 3 revisions, 12–24hr delivery, plus a free vector file. Rush ($19.99): unlimited stitches, unlimited revisions, 2–4hr priority delivery with dedicated support and a free sew-out simulation.",
    category: "Plans",
  },
  {
    question: "Are there any hidden fees?",
    answer:
      "Never. The price you see is the price you pay — no setup fees, no file-format fees, no per-color charges, no surprise add-ons. If your design requires special handling beyond standard parameters (extreme size, complex appliqué, multi-layer 3D puff), we'll always confirm the revised scope and price with you before proceeding.",
    category: "Plans",
  },
  {
    question: "Can I upgrade my plan after ordering?",
    answer:
      "Yes. You can upgrade at any time before production begins — just reply to your order confirmation. If your design turns out to be more complex than the chosen plan allows, our team will proactively recommend the best tier and you can choose to upgrade or simplify the design scope. No penalty fees.",
    category: "Plans",
  },
  {
    question: "Do you offer discounts for repeat customers?",
    answer:
      "Absolutely. We value our loyal customers and offer automatic discounts for repeat orders, plus a loyalty program with credits, free rush upgrades, and dedicated account management for clients sending 25+ designs per month. Contact us to enroll or to set up a monthly retainer at preferred rates.",
    category: "Discounts",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, bank transfers (ACH and wire), and various regional payment methods. All transactions are encrypted and processed through PCI-compliant gateways. Net-15 and Net-30 invoicing is available for verified business accounts.",
    category: "Payments",
  },
  {
    question: "Do you offer monthly retainers or subscription plans?",
    answer:
      "Yes. For embroidery shops, print houses, and promotional product companies with steady volume, we offer monthly retainers starting at 25 designs per month. Retainer clients enjoy priority turnaround, locked-in discounted pricing, a dedicated digitizer, and a single monthly invoice. Contact us for a custom retainer quote.",
    category: "Plans",
  },
  {
    question: "What happens if I'm not satisfied with the final design?",
    answer:
      "We stand behind every file with a 100% satisfaction guarantee. If the first delivery isn't right, we'll revise it free of charge based on your feedback — as many times as your plan allows (unlimited on Rush plans). If we still can't meet your expectations after good-faith revisions, we issue a full refund.",
    category: "Payments",
  },
];

export const SERVICES_FAQS: FAQItem[] = [
  {
    question: "Which digitizing service should I choose for my project?",
    answer:
      "It depends on your design and application. Logo Digitizing is perfect for brand logos on polos and shirts. 3D Puff creates raised, puffy effects popular on caps and streetwear. Appliqué combines fabric pieces with stitching for a layered look. Chenille produces textured patches common in varsity letters. Not sure? Send us your artwork and we'll recommend the right service within minutes.",
    category: "Choosing",
  },
  {
    question: "What is 3D puff embroidery digitizing?",
    answer:
      "3D puff digitizing creates raised, dimensional embroidery by stitching over a layer of foam. It's extremely popular on caps, sports jerseys, and streetwear logos because it adds tactile depth and visual punch. Our experts tune stitch density, edge definition, and foam thickness so the design holds its shape wash after wash without flattening or fraying at the edges.",
    category: "Techniques",
  },
  {
    question: "Can you digitize for any fabric type?",
    answer:
      "Yes. We optimize designs for your specific fabric — cotton, polyester, denim, leather, fleece, performance materials, terry cloth, sheer fabrics, and delicate silk. Just tell us your material when ordering and we'll adjust stitch density, underlay, needle recommendation, and stabilizer pairing accordingly so the sew-out is clean on the first run.",
    category: "Techniques",
  },
  {
    question: "Do you offer vector art conversion services?",
    answer:
      "Yes. Vector art conversion transforms raster images (JPEG, PNG, BMP) into scalable vector formats (AI, EPS, PDF, SVG, CDR). Vectors are essential for clean printing, laser engraving, vinyl cutting, and as a high-quality starting point for digitizing. Every vector is manually traced — no auto-trace — for smooth, anchor-efficient paths.",
    category: "Vector",
  },
  {
    question:
      "What's the difference between left chest and jacket back digitizing?",
    answer:
      "Left chest designs are smaller (typically 3–4 inches), simpler, and optimized for polo shirts — they use tighter stitch density and lighter underlay to avoid puckering on thin fabrics. Jacket back designs are much larger (up to 10+ inches), require more detail, much higher stitch count, and careful pull-compensation to prevent distortion across the larger sew area.",
    category: "Techniques",
  },
  {
    question: "Can you create custom patch designs?",
    answer:
      "Absolutely. We specialize in custom patch digitizing — iron-on, sew-on, velcro-backed, and adhesive-backed. Our patch files include proper merrow border settings, backing specifications, and size callouts ready to send to any professional patch manufacturer. We also help you choose between embroidered, woven, chenille, PVC, and leather patch types based on your design.",
    category: "Patches",
  },
  {
    question: "Do you digitize caps and headwear specifically?",
    answer:
      "Yes — cap digitizing is one of our specialties. Caps require special attention because of the curved frame and limited sewing field (usually under 2.25 inches tall). We tune stitch direction, sequencing, and underlay for cap frames so the design sews out cleanly from the bottom up without flagging or gaps.",
    category: "Techniques",
  },
  {
    question:
      "Can you work with multiple logo variations or color separations?",
    answer:
      "Yes. We routinely deliver multi-version files — full-color, one-color, two-color, reversed (knockout), and stacked layouts — all from a single order. For screen-printing clients we also provide proper color separations including underbase, trap, and halftone layers. Just describe your production setup and we'll structure the files accordingly.",
    category: "Vector",
  },
];

export const STORE_FAQS: FAQItem[] = [
  {
    question: "How does instant download work?",
    answer:
      "Once your payment is confirmed, you'll receive an immediate download link via email and the files will also appear in your account dashboard under \"My Downloads.\" There's no waiting — you can start stitching within seconds of checkout. Download links never expire, so you can re-download anytime from your account.",
    category: "Downloads",
  },
  {
    question: "What formats are included with store purchases?",
    answer:
      "All digitizing files include multiple format options — DST, PES, EXP, JEF, VP3, XXX, and more — bundled in a single zip. Product pages list every included format clearly. Need a specific format that isn't listed? Contact us after purchase and we'll deliver it at no extra cost, usually within a few hours.",
    category: "Files",
  },
  {
    question: "Can I use purchased designs on products I sell?",
    answer:
      "License terms vary by product. Most individual designs include commercial-use rights for physical products (embroidered apparel, patches, and accessories you sell). Mass production (1,000+ units) and digital resale require an extended license — check each product description for specifics or contact us for a commercial license quote.",
    category: "Licensing",
  },
  {
    question: "What if I have issues with my downloaded file?",
    answer:
      "We stand behind every file in our store. If you experience any technical issues — a corrupted download, wrong format, or stitch error on your machine — our support team is ready to help troubleshoot. If the file itself has a defect, we'll fix it immediately or issue a full refund, no questions asked.",
    category: "Support",
  },
  {
    question: "Do you offer refunds on store purchases?",
    answer:
      "Yes — we offer a 14-day satisfaction guarantee on all store purchases. If you're not happy with your purchase, contact us within 14 days for a full refund or exchange. Digital downloads that haven't been used qualify for immediate refund; once a file has been stitched out we'll usually issue store credit instead.",
    category: "Support",
  },
  {
    question: "Can I buy designs in bulk for my shop?",
    answer:
      "Yes. We offer special wholesale pricing for embroidery businesses, print shops, and resellers. Bulk packages start at 10 designs and scale to full library licenses. Custom bundle deals tailored to your shop's niche — apparel, caps, patches, kids, monograms — are available on request. Contact us for a wholesale catalog.",
    category: "Bulk",
  },
  {
    question: "Do store designs include stitch charts and thread color guides?",
    answer:
      "Yes — every store design ships with a PDF stitch chart listing stitch count, dimensions, recommended stabilizer, needle size, and a thread color guide matched to Madeira and Isacord polyester thread numbers. Robison-Anton and Sulky conversions are available on request at no extra charge.",
    category: "Files",
  },
  {
    question: "How often do you add new designs to the store?",
    answer:
      "We add new designs weekly — typically 20–40 fresh designs per week across categories like monograms, sports logos, holiday themes,patches, and trending streetwear. Subscribe to our newsletter to get notified of new drops, or follow us on social media for first-look previews and subscriber-only discounts.",
    category: "Catalog",
  },
];

export const CONTACT_FAQS: FAQItem[] = [
  {
    question: "How fast can I get my digitizing file?",
    answer:
      "Standard orders are delivered within 12–24 hours of artwork approval. Rush orders can be delivered in as fast as 2 hours, with 4-hour and same-day options also available. Weekend rush delivery is offered on request. When you send your artwork, let us know your deadline and we'll confirm the fastest feasible turnaround.",
    category: "Turnaround",
  },
  {
    question: "Do you offer rush orders?",
    answer:
      "Yes. We offer 2-hour, 4-hour, same-day, and weekend rush delivery options for an additional fee. Rush orders are queued ahead of standard orders and assigned to a dedicated digitizer who works your file start to finish. Rush pricing is +30% on the standard plan rate.",
    category: "Turnaround",
  },
  {
    question: "What file formats will I receive?",
    answer:
      "We deliver in all major embroidery formats including DST, PES, EXP, JEF, VP3, XXX, HUS, CSD, SEW, and EMB — all bundled in a single zip. You also receive a PDF stitch chart with thread color callouts. Just specify your machine model when ordering and we'll prioritize your format.",
    category: "Files",
  },
  {
    question: "Can I request a sample before placing an order?",
    answer:
      "Yes. Contact our team with your design type — logo, cap, jacket back, 3D puff, appliqué, etc. — and we'll send relevant sample files in your machine's format, often within the same business day. We can also schedule a quick call to walk through your project in detail.",
    category: "Samples",
  },
  {
    question: "How do I send you my artwork?",
    answer:
      "Three easy ways: (1) use the upload field on our contact form, (2) email it directly to info@veloradigitizing.com, or (3) share a cloud link (Google Drive, Dropbox, WeTransfer). We accept AI, EPS, PDF, PNG, JPG, SVG, CDR, PSD, and even clear photographs or hand-drawn scans.",
    category: "Ordering",
  },
  {
    question: "What information should I include with my order?",
    answer:
      "For the fastest accurate turnaround, include: (1) your artwork file, (2) the fabric or garment you'll sew on, (3) the finished design size, (4) your machine format, (5) any placement specifics (left chest, full back, cap front, sleeve), and (6) your deadline. The more detail you give us upfront, the less back-and-forth later.",
    category: "Ordering",
  },
  {
    question: "Do you offer quotes before I commit?",
    answer:
      "Yes — all quotes are free with no obligation. Send us your artwork and we'll come back within minutes with a fixed price, recommended plan, and estimated delivery window. If your design is complex, we'll flag it and explain the pricing rationale before you commit.",
    category: "Ordering",
  },
  {
    question: "What are your support hours?",
    answer:
      "Our live chat and email support is available 24/7 — yes, including weekends and holidays. Phone and WhatsApp support is available 8 AM–10 PM Pacific. When you message us, a real person (not a bot) replies, usually within a few minutes.",
    category: "Support",
  },
];
