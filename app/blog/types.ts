export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "tip"; text: string }
  | { type: "calculator"; id: "stitch-count" };

export type BlogPost = {
  slug: string;
  /** Page H1 */
  title: string;
  /** <title> tag, keep under ~60 characters */
  metaTitle: string;
  /** Meta description, keep under ~155 characters */
  description: string;
  /** Short teaser used on cards */
  excerpt: string;
  category: string;
  tags: string[];
  /** ISO date, e.g. 2026-08-15 */
  publishedAt: string;
  updatedAt?: string;
  /** Minutes */
  readTime: number;
  /** Prompt to generate the cover image with an AI image tool */
  imagePrompt: string;
  imageAlt: string;
  /** Path under /public once the cover image exists, e.g. /images/blog/xyz.webp */
  image?: string;
  relatedService: { label: string; href: string };
  faqs: { question: string; answer: string }[];
  content: BlogBlock[];
};
