import { PRODUCTS, CATEGORY_LABELS } from "./products";
import { PATCHES, PATCH_CATEGORIES } from "./patches";
import { BUNDLES } from "./bundles";
import { STORE_LONG_DESCRIPTIONS } from "./descriptions";
import { LEFT_CHEST_PRODUCTS } from "./left-chest";
import { APPLIQUE_PRODUCTS } from "./applique";
import { JACKET_BACK_PRODUCTS } from "./jacket-back";
import { CAP_LOGO_PRODUCTS } from "./cap-logo";

/**
 * A single, normalized shape for everything sold under /store/[slug]:
 * digitizing files, individual patches and bundle packs.
 */
export type StoreItem = {
  slug: string;
  title: string;
  price: number;
  originalPrice?: number;
  categoryLabel: string;
  image: string;
  formats: string[];
  description: string;
  kind: "product" | "patch" | "bundle";
  /** Average customer rating (1 to 5) shown on the product page. */
  rating?: number;
  reviewCount?: number;
  /** Unique long-form copy shown in the About section of the product page. */
  longDescription?: string;
};

const PATCH_CATEGORY_LABELS: Record<string, string> = Object.fromEntries(
  PATCH_CATEGORIES.map((c) => [c.value, c.label]),
);

/**
 * The digitizing-file products in ./products are hidden until their images
 * exist in public/images/store (prod-01.webp to prod-10.webp). Without them
 * the product pages, share images and Product schema all point at 404s.
 * Set this to true once the image files are added.
 */
const SHOW_DIGITIZING_FILE_PRODUCTS = false;

export const STORE_ITEMS: StoreItem[] = [
  ...(SHOW_DIGITIZING_FILE_PRODUCTS
    ? [
        ...PRODUCTS.map<StoreItem>((p) => ({
          slug: p.slug,
          title: p.title,
          price: p.price,
          categoryLabel: CATEGORY_LABELS[p.category] ?? p.category,
          image: p.image,
          formats: p.formats,
          description: p.description,
          kind: "product" as const,
        })),
        ...LEFT_CHEST_PRODUCTS.map<StoreItem>((p) => ({
          slug: p.slug,
          title: p.title,
          price: p.price,
          categoryLabel: "Left Chest Logo",
          image: p.image,
          formats: p.formats,
          description: p.description,
          kind: "product" as const,
        })),
        ...APPLIQUE_PRODUCTS.map<StoreItem>((p) => ({
          slug: p.slug,
          title: p.title,
          price: p.price,
          categoryLabel: "Applique Digitizing",
          image: p.image,
          formats: p.formats,
          description: p.description,
          kind: "product" as const,
        })),
        ...JACKET_BACK_PRODUCTS.map<StoreItem>((p) => ({
          slug: p.slug,
          title: p.title,
          price: p.price,
          categoryLabel: "Jacket Back Logo",
          image: p.image,
          formats: p.formats,
          description: p.description,
          kind: "product" as const,
        })),
        ...CAP_LOGO_PRODUCTS.map<StoreItem>((p) => ({
          slug: p.slug,
          title: p.title,
          price: p.price,
          categoryLabel: "Cap Logo",
          image: p.image,
          formats: p.formats,
          description: p.description,
          kind: "product" as const,
        })),
      ]
    : []),
  ...PATCHES.map<StoreItem>((p) => ({
    slug: p.slug,
    title: p.title,
    price: p.price,
    originalPrice: p.originalPrice,
    categoryLabel: PATCH_CATEGORY_LABELS[p.category] ?? p.category,
    image: p.image,
    formats: p.formats,
    description: p.description,
    longDescription: STORE_LONG_DESCRIPTIONS[p.slug],
    kind: "patch",
  })),
  ...BUNDLES.map<StoreItem>((b) => ({
    slug: b.slug,
    title: b.name,
    price: b.price,
    originalPrice: b.originalPrice,
    categoryLabel: b.categoryLabel,
    image: b.image,
    formats: b.formats,
    description: b.description,
    longDescription: STORE_LONG_DESCRIPTIONS[b.slug],
    kind: "bundle",
  })),
];

export function getStoreItemBySlug(slug: string) {
  return STORE_ITEMS.find((item) => item.slug === slug);
}

/**
 * Related items for the product page. Walks the same-kind list circularly
 * from the current item, preferring the same category, so every patch and
 * bundle is linked from several sibling pages instead of only the first few.
 */
export function getRelatedStoreItems(item: StoreItem, count = 4) {
  const siblings = STORE_ITEMS.filter((other) => other.kind === item.kind);
  const start = siblings.findIndex((other) => other.slug === item.slug);
  const total = siblings.length;
  const rotated: StoreItem[] = [];
  for (let step = 1; step < total; step += 1) {
    const candidate = siblings[(start + step + total) % total];
    if (candidate.slug !== item.slug) rotated.push(candidate);
  }
  const sameCategory = rotated.filter(
    (other) => other.categoryLabel === item.categoryLabel,
  );
  const others = rotated.filter(
    (other) => other.categoryLabel !== item.categoryLabel,
  );
  return [...sameCategory, ...others].slice(0, count);
}
