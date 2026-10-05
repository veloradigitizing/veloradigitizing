import Link from "next/link";
import BlogCard from "./BlogCard";
import { BLOG_POSTS, type BlogPost } from "../blog/posts";

/**
 * A row of blog cards linking service and landing pages to the guides that
 * support them. Server component: keeps blog content out of client bundles.
 */
export default function RelatedGuides({
  slugs,
  title = "Related Embroidery Digitizing Guides",
  subtitle,
}: {
  slugs: string[];
  title?: string;
  subtitle?: string;
}) {
  const posts = slugs
    .map((slug) => BLOG_POSTS.find((p) => p.slug === slug))
    .filter((p): p is BlogPost => Boolean(p));

  if (posts.length === 0) return null;

  return (
    <section className="mx-auto max-w-7xl px-5 py-16 lg:px-10">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
            From the Blog
          </p>
          <h2 className="mt-2 font-serif text-2xl font-bold text-navy-950 sm:text-3xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-2 max-w-2xl text-[15px] text-navy-950/65">
              {subtitle}
            </p>
          )}
        </div>
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700"
        >
          View all guides
          <span aria-hidden className="vr-arrow">
            &rarr;
          </span>
        </Link>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}

/** The newest posts, for pages that should surface fresh content. */
export function latestGuideSlugs(count = 3): string[] {
  return [...BLOG_POSTS]
    .sort(
      (a, b) =>
        new Date(b.updatedAt ?? b.publishedAt).getTime() -
        new Date(a.updatedAt ?? a.publishedAt).getTime(),
    )
    .slice(0, count)
    .map((p) => p.slug);
}
