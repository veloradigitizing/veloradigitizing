import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  STORE_ITEMS,
  getStoreItemBySlug,
  getRelatedStoreItems,
  type StoreItem,
} from "../catalog";
import ProductDetail from "./ProductDetail";

const BASE_URL = "https://www.veloradigitizing.com";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return STORE_ITEMS.map((item) => ({ slug: item.slug }));
}

function metaDescription(text: string, max = 155) {
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(" "))}…`;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getStoreItemBySlug(slug);

  if (!item) {
    return {
      title: "Product Not Found",
      robots: { index: false, follow: false },
    };
  }

  const url = `${BASE_URL}/store/${item.slug}`;
  const description = metaDescription(item.description);
  const ogTitle = `${item.title} | Velora Digitizing`;

  return {
    title: item.title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      title: ogTitle,
      description,
      url,
      siteName: "Velora Digitizing",
      images: [{ url: item.image, alt: item.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [item.image],
    },
  };
}

/* ------------------------------------------------------------------
   Editorial content generated per item so every product page answers
   the practical questions buyers research before purchase.
   ------------------------------------------------------------------ */

const HEADING_NOUN: Record<StoreItem["kind"], string> = {
  product: "Design",
  patch: "Patch",
  bundle: "Bundle",
};

function buildFaqs(item: StoreItem) {
  const noun = HEADING_NOUN[item.kind].toLowerCase();
  const formatList = item.formats.join(", ");
  return [
    {
      question: `Which machines can run the ${item.title}?`,
      answer: `The ${noun} comes in ${formatList}, so it loads on commercial multi-head machines and single-needle home machines from Brother, Janome, Bernina, Tajima and most other brands without conversion software.`,
    },
    {
      question: `How do I order and receive the ${item.title}?`,
      answer: `Message us on WhatsApp or through the contact page with the ${noun} name. Once your order is confirmed, we email all ${item.formats.length} formats to you in a single ZIP archive.`,
    },
    {
      question: `Can I use the ${item.title} on products I sell?`,
      answer: `Yes. You can embroider the ${noun} on caps, shirts, jackets, bags or any finished goods you sell. Reselling or redistributing the digital file itself is not allowed.`,
    },
  ];
}

function StoreFaq({ item }: { item: StoreItem }) {
  const faqs = buildFaqs(item);
  return (
    <div className="mt-12">
      <h2 className="font-serif text-2xl font-bold text-navy-950 sm:text-3xl">
        Frequently Asked Questions
      </h2>
      <div className="mt-6 space-y-6">
        {faqs.map((faq) => (
          <div key={faq.question}>
            <h3 className="text-base font-bold text-navy-950">{faq.question}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-navy-950/70">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const item = getStoreItemBySlug(slug);

  if (!item) notFound();

  const related = getRelatedStoreItems(item);
  const url = `${BASE_URL}/store/${item.slug}`;
  const noun = HEADING_NOUN[item.kind];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "@id": `${url}#product`,
        name: item.title,
        description: item.description,
        image: `${BASE_URL}${item.image}`,
        url,
        sku: item.slug,
        category: item.categoryLabel,
        brand: {
          "@type": "Brand",
          name: "Velora Digitizing",
        },
        offers: {
          "@type": "Offer",
          url,
          price: item.price.toFixed(2),
          priceCurrency: "USD",
          priceValidUntil: "2027-12-31",
          availability: "https://schema.org/InStock",
          itemCondition: "https://schema.org/NewCondition",
          seller: {
            "@type": "Organization",
            name: "Velora Digitizing",
            url: BASE_URL,
          },
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "Store",
            item: `${BASE_URL}/store`,
          },
          { "@type": "ListItem", position: 3, name: item.title, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductDetail product={item} related={related} />

      <section className="mx-auto max-w-4xl px-5 pb-20 pt-4 lg:px-8">
        <h2 className="font-serif text-2xl font-bold text-navy-950 sm:text-3xl">
          About This {noun}
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-navy-950/75">
          Every {noun.toLowerCase()} in our store is punched by hand by Velora&apos;s
          senior digitizers — never auto-traced — and sewn out on industrial
          machines before it is listed. Need something unique
          instead? Our{" "}
          <Link
            href="/services"
            className="font-semibold text-brand-600 underline decoration-brand-600/30 underline-offset-2 hover:text-brand-700"
          >
            custom embroidery digitizing service
          </Link>{" "}
          turns your own logo or artwork into a production-ready file within
          8-24 hours, and you can{" "}
          <Link
            href="/contact"
            className="font-semibold text-brand-600 underline decoration-brand-600/30 underline-offset-2 hover:text-brand-700"
          >
            request a free quote
          </Link>{" "}
          in under an hour.
        </p>

        <h2 className="mt-12 font-serif text-2xl font-bold text-navy-950 sm:text-3xl">
          Specifications
        </h2>
        <ul className="mt-4 grid grid-cols-1 gap-2 text-[15px] text-navy-950/75 sm:grid-cols-2">
          <li>
            <strong className="text-navy-950">Formats included:</strong>{" "}
            {item.formats.join(", ")}
          </li>
          <li>
            <strong className="text-navy-950">Category:</strong>{" "}
            {item.categoryLabel}
          </li>
          <li>
            <strong className="text-navy-950">Delivery:</strong> ZIP archive
            by email once your order is confirmed
          </li>
          <li>
            <strong className="text-navy-950">License:</strong> commercial use
            on finished goods
          </li>
          <li>
            <strong className="text-navy-950">Revisions:</strong> free file
            adjustments on request
          </li>
          <li>
            <strong className="text-navy-950">Price:</strong> $
            {item.price.toFixed(2)} one-time — no per-color or per-format fees
          </li>
        </ul>

        <h2 className="mt-12 font-serif text-2xl font-bold text-navy-950 sm:text-3xl">
          Why Buy From Velora Digitizing
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-navy-950/75">
          <li>
            Manually digitized by professionals with 12+ years of commercial
            punching experience
          </li>
          <li>
            Test-sewn on industrial flatbed and cap-frame machines before every
            listing goes live
          </li>
          <li>
            Optimized stitch pathing with clean trims and minimal jump stitches
            for faster production
          </li>
          <li>
            Correct underlay and pull compensation for pique, twill, fleece and
            performance fabrics
          </li>
          <li>
            Responsive support and free revisions if your machine or fabric
            needs a tweak
          </li>
        </ul>

        <StoreFaq item={item} />
      </section>
    </>
  );
}
