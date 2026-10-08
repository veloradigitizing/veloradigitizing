import { PRODUCTS, CATEGORY_LABELS } from "./products";
import { PATCHES, PATCH_CATEGORIES } from "./patches";
import { BUNDLES } from "./bundles";

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
  ...(SHOW_DIGITIZING_FILE_PRODUCTS ? PRODUCTS : []).map<StoreItem>((p) => ({
    slug: p.slug,
    title: p.title,
    price: p.price,
    categoryLabel: CATEGORY_LABELS[p.category] ?? p.category,
    image: p.image,
    formats: p.formats,
    description: p.description,
    kind: "product",
  })),
  ...PATCHES.map<StoreItem>((p) => ({
    slug: p.slug,
    title: p.title,
    price: p.price,
    originalPrice: p.originalPrice,
    categoryLabel: PATCH_CATEGORY_LABELS[p.category] ?? p.category,
    image: p.image,
    formats: p.formats,
    description: p.description,
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
    kind: "bundle",
    rating: b.rating,
    reviewCount: b.reviewCount,
  })),
];

export function getStoreItemBySlug(slug: string) {
  return STORE_ITEMS.find((item) => item.slug === slug);
}

export function getRelatedStoreItems(item: StoreItem, count = 4) {
  return STORE_ITEMS.filter(
    (other) => other.kind === item.kind && other.slug !== item.slug,
  ).slice(0, count);
}
