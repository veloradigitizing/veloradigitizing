import type { StoreItem } from "./catalog";

/**
 * Customer reviews shown on /store/[slug] pages and emitted as `review` +
 * `aggregateRating` in the Product schema.
 *
 * Google only allows review markup for reviews that are genuinely from
 * customers and visible on the page, so add real reviews here as they come
 * in (WhatsApp / email feedback is fine with the customer's permission).
 *
 * Example entry:
 *
 *   "hike-more-worry-less": [
 *     {
 *       author: "Marcus T.",
 *       rating: 5,
 *       date: "2026-03-14",
 *       title: "Ran clean on our Tajima",
 *       body: "Zero thread breaks on twill, satin edges came out crisp.",
 *     },
 *   ],
 */
export type StoreReview = {
  author: string;
  /** 1 to 5 */
  rating: number;
  /** ISO 8601 date, e.g. 2026-03-14 */
  date: string;
  title?: string;
  body: string;
};

export const STORE_REVIEWS: Record<string, StoreReview[]> = {};

export function getStoreReviews(slug: string): StoreReview[] {
  return STORE_REVIEWS[slug] ?? [];
}

export type AggregateRating = {
  ratingValue: number;
  reviewCount: number;
};

/**
 * Prefers an average of the real reviews on the page; otherwise falls back to
 * the rating/reviewCount stored on the item itself (bundles carry these).
 */
export function getAggregateRating(item: StoreItem): AggregateRating | null {
  const reviews = getStoreReviews(item.slug);
  if (reviews.length > 0) {
    const sum = reviews.reduce((acc, r) => acc + r.rating, 0);
    return {
      ratingValue: Math.round((sum / reviews.length) * 10) / 10,
      reviewCount: reviews.length,
    };
  }
  if (item.rating && item.reviewCount && item.reviewCount > 0) {
    return { ratingValue: item.rating, reviewCount: item.reviewCount };
  }
  return null;
}
