import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  STORE_ITEMS,
  getStoreItemBySlug,
  getRelatedStoreItems,
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

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const item = getStoreItemBySlug(slug);

  if (!item) notFound();

  const related = getRelatedStoreItems(item);
  const url = `${BASE_URL}/store/${item.slug}`;

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
    </>
  );
}
