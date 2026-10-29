import type { MetadataRoute } from "next";
import { STORE_ITEMS } from "./store/catalog";
import { BLOG_POSTS } from "./blog/posts";

const BASE_URL = "https://www.veloradigitizing.com";
// Stable last-modified date prevents Googlebot from treating timestamps as dynamic noise
const STATIC_LASTMOD = new Date("2026-10-22T00:00:00.000Z");
// Service selection and ordering content updated on this date.
const SERVICES_LASTMOD = new Date("2026-10-28T00:00:00.000Z");
// Store product pages gained stitch-out notes and related guides on this date.
const STORE_LASTMOD = new Date("2026-10-30T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: STATIC_LASTMOD,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: SERVICES_LASTMOD,
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/pricing`,
      lastModified: STATIC_LASTMOD,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services/applique-digitizing`,
      lastModified: SERVICES_LASTMOD,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services/3d-puff-digitizing`,
      lastModified: SERVICES_LASTMOD,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services/cap-logo-digitizing`,
      lastModified: SERVICES_LASTMOD,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/vector-art`,
      lastModified: STATIC_LASTMOD,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/patches`,
      lastModified: STATIC_LASTMOD,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/portfolio`,
      lastModified: STATIC_LASTMOD,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/store`,
      lastModified: new Date("2026-10-27T00:00:00.000Z"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: STATIC_LASTMOD,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: STATIC_LASTMOD,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: STATIC_LASTMOD,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: STATIC_LASTMOD,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms-and-conditions`,
      lastModified: STATIC_LASTMOD,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Submit only verified catalog patches and bundles with unique descriptions.
  // Excludes the 61 non-catalog products with templated descriptions to conserve crawl budget.
  const storeRoutes: MetadataRoute.Sitemap = STORE_ITEMS
    .filter((item) => item.kind === "patch" || item.kind === "bundle")
    .map((item) => ({
      url: `${BASE_URL}/store/${item.slug}`,
      lastModified: STORE_LASTMOD,
      changeFrequency: "weekly",
      priority: item.kind === "bundle" ? 0.75 : 0.7,
    }));

  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt ?? post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...storeRoutes, ...blogRoutes];
}
