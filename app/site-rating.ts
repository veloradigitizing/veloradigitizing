/**
 * Single source of truth for the site-wide client rating shown in the hero
 * card and published in the homepage structured data. Keep these in sync with
 * the real review source (Google Business, Trustpilot, etc.).
 */
export const SITE_RATING = {
  value: 4.8,
  count: 137,
} as const;
