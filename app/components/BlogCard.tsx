import Link from "next/link";
import BlogImagePlaceholder from "./BlogImagePlaceholder";
import { formatPostDate, type BlogPost } from "../blog/posts";

export default function BlogCard({ post }: { post: BlogPost }) {
  const href = `/blog/${post.slug}`;
  return (
    <article className="vr-lift group flex h-full flex-col overflow-hidden rounded-2xl border border-navy-950/10 bg-white shadow-sm transition-shadow hover:shadow-lg">
      <Link href={href} aria-label={post.title} className="block">
        <BlogImagePlaceholder
          image={post.image}
          alt={post.imageAlt}
          prompt={post.imagePrompt}
          compact
          className="rounded-none border-0 border-b border-dashed border-navy-950/10"
        />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider">
          <span className="rounded-full bg-brand-50 px-2.5 py-0.5 text-brand-600">
            {post.category}
          </span>
          <span className="text-navy-950/40">{post.readTime} min read</span>
        </div>
        <h3 className="mt-3 font-serif text-lg font-bold leading-snug text-navy-950 transition-colors group-hover:text-brand-600">
          <Link href={href}>{post.title}</Link>
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-navy-950/60">
          {post.excerpt}
        </p>
        <div className="mt-auto flex items-center justify-between pt-5 text-xs">
          <time dateTime={post.publishedAt} className="text-navy-950/45">
            {formatPostDate(post.publishedAt)}
          </time>
          <Link
            href={href}
            className="inline-flex items-center gap-1 font-semibold text-brand-600 hover:text-brand-700"
          >
            Read article
            <span aria-hidden className="vr-arrow">
              &rarr;
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
