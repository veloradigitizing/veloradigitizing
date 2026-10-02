/**
 * Single source of truth for the site-wide client rating shown in the hero
 * card and published in the homepage structured data. Keep these in sync with
 * the real review source (Google Business, Trustpilot, etc.).
 */
export const SITE_RATING = {
  value: 4.8,
  count: 142,
  fiveStarPercent: 86,
  fourStarPercent: 11,
  threeStarPercent: 3,
  breakdownText: "★ 4.8 out of 5 based on 142 verified reviews (86% 5-star, 11% 4-star, 3% 3-star)",
} as const;


