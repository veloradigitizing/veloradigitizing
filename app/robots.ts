import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: ["OAI-SearchBot", "Claude-SearchBot", "PerplexityBot", "Googlebot", "Bingbot", "Applebot"],
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://www.veloradigitizing.com/sitemap.xml",
    host: "https://www.veloradigitizing.com",
  };
}
