import type { MetadataRoute } from "next";
import { STORE_ITEMS } from "./store/catalog";
import { BLOG_POSTS } from "./blog/posts";

const BASE_URL = "https://www.veloradigitizing.com";

export default function sitemap(): MetadataRoute.Sitemap {
  // Dynamic current date ensures Googlebot always discovers fresh lastmod timestamps
  const CURRENT_DATE = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: CURRENT_DATE,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: CURRENT_DATE,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/pricing`,
      lastModified: CURRENT_DATE,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services/applique-digitizing`,
      lastModified: CURRENT_DATE,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services/3d-puff-digitizing`,
      lastModified: CURRENT_DATE,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services/cap-logo-digitizing`,
      lastModified: CURRENT_DATE,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/vector-art`,
      lastModified: CURRENT_DATE,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/patches`,
      lastModified: CURRENT_DATE,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/portfolio`,
      lastModified: CURRENT_DATE,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/store`,
      lastModified: CURRENT_DATE,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: CURRENT_DATE,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: CURRENT_DATE,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: CURRENT_DATE,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: CURRENT_DATE,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms-and-conditions`,
      lastModified: CURRENT_DATE,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Submit only verified catalog patches and bundles with unique descriptions.
  const storeRoutes: MetadataRoute.Sitemap = STORE_ITEMS
    .filter((item) => item.kind === "patch" || item.kind === "bundle")
    .map((item) => ({
      url: `${BASE_URL}/store/${item.slug}`,
      lastModified: CURRENT_DATE,
      changeFrequency: "weekly",
      priority: item.kind === "bundle" ? 0.75 : 0.7,
    }));

  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: CURRENT_DATE,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...storeRoutes, ...blogRoutes];
}
