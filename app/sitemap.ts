import type { MetadataRoute } from "next";
import { STORE_ITEMS } from "./store/catalog";
import { BLOG_POSTS } from "./blog/posts";

const BASE_URL = "https://www.veloradigitizing.com";

export default function sitemap(): MetadataRoute.Sitemap {
  // lastmod must reflect real content changes. A build-time date on every URL
  // makes all pages look changed on every deploy, so Google learns to ignore it.
  // Static pages: date of the last meaningful edit to that page (update when the
  // page content changes). Blog posts: their own updatedAt / publishedAt.
  const postDate = (p: (typeof BLOG_POSTS)[number]) => new Date(p.updatedAt ?? p.publishedAt);
  const latestPost = new Date(Math.max(...BLOG_POSTS.map((p) => postDate(p).getTime())));

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date("2026-11-04"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: new Date("2026-10-28"),
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/pricing`,
      lastModified: new Date("2026-10-26"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services/applique-digitizing`,
      lastModified: new Date("2026-10-28"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services/3d-puff-digitizing`,
      lastModified: new Date("2026-10-28"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services/cap-logo-digitizing`,
      lastModified: new Date("2026-10-28"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/vector-art`,
      lastModified: new Date("2026-10-17"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/patches`,
      lastModified: new Date("2026-10-30"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/portfolio`,
      lastModified: new Date("2026-10-31"),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/store`,
      lastModified: new Date("2026-10-31"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: latestPost,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date("2026-10-17"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date("2026-10-07"),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: new Date("2026-10-04"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms-and-conditions`,
      lastModified: new Date("2026-10-04"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Submit only verified catalog patches and bundles with unique descriptions.
  const storeRoutes: MetadataRoute.Sitemap = STORE_ITEMS
    .filter((item) => item.kind === "patch" || item.kind === "bundle")
    .map((item) => ({
      url: `${BASE_URL}/store/${item.slug}`,
      lastModified: new Date("2026-10-30"),
      changeFrequency: "weekly",
      priority: item.kind === "bundle" ? 0.75 : 0.7,
    }));

  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: postDate(post),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...storeRoutes, ...blogRoutes];
}
