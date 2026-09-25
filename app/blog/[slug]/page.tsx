import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import BlogImagePlaceholder from "../../components/BlogImagePlaceholder";
import BlogCard from "../../components/BlogCard";
import CTABanner from "../../components/CTABanner";
import { FAQ } from "../../components/FAQ";
import Icon from "../../components/Icon";
import {
  BLOG_POSTS,
  formatPostDate,
  getPostBySlug,
  getRelatedPosts,
  type BlogBlock,
} from "../posts";

const BASE_URL = "https://www.veloradigitizing.com";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return { robots: { index: false, follow: false } };
  }

  const url = `${BASE_URL}/blog/${post.slug}`;
  const ogImage = post.image ?? "/images/og/og-home.webp";

  return {
    title: post.metaTitle,
    description: post.description,
    keywords: post.tags,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: `${post.metaTitle} | Velora Digitizing`,
      description: post.description,
      url,
      siteName: "Velora Digitizing",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      authors: ["Velora Digitizing"],
      tags: post.tags,
      images: [{ url: ogImage, alt: post.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.metaTitle} | Velora Digitizing`,
      description: post.description,
      images: [ogImage],
    },
  };
}

/**
 * Renders inline markdown-style links `[text](/href)` and `**bold**` inside
 * a paragraph. Internal links use next/link.
 */
function renderInline(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  const pattern = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > last) parts.push(text.slice(last, match.index));
    if (match[1] !== undefined) {
      const href = match[2];
      const isInternal = href.startsWith("/");
      parts.push(
        isInternal ? (
          <Link
            key={key++}
            href={href}
            className="font-semibold text-brand-600 underline decoration-brand-600/30 underline-offset-2 hover:text-brand-700"
          >
            {match[1]}
          </Link>
        ) : (
          <a
            key={key++}
            href={href}
            className="font-semibold text-brand-600 underline decoration-brand-600/30 underline-offset-2 hover:text-brand-700"
            rel="noopener noreferrer"
            target="_blank"
          >
            {match[1]}
          </a>
        ),
      );
    } else {
      parts.push(
        <strong key={key++} className="font-semibold text-navy-950">
          {match[3]}
        </strong>,
      );
    }
    last = pattern.lastIndex;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

function Block({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="mt-10 font-serif text-2xl font-bold leading-snug text-navy-950 sm:text-3xl">
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 className="mt-7 text-lg font-bold text-navy-950 sm:text-xl">
          {block.text}
        </h3>
      );
    case "p":
      return (
        <p className="mt-5 text-[16px] leading-[1.8] text-navy-950/75">
          {renderInline(block.text)}
        </p>
      );
    case "ul":
      return (
        <ul className="mt-5 space-y-2.5 pl-1">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3 text-[16px] leading-[1.75] text-navy-950/75">
              <span aria-hidden className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" />
              <span>{renderInline(item)}</span>
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="mt-5 space-y-3 pl-1">
          {block.items.map((item, i) => (
            <li key={item} className="flex gap-3 text-[16px] leading-[1.75] text-navy-950/75">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-600 text-xs font-bold text-white">
                {i + 1}
              </span>
              <span>{renderInline(item)}</span>
            </li>
          ))}
        </ol>
      );
    case "tip":
      return (
        <aside className="mt-7 rounded-xl border-l-4 border-brand-600 bg-brand-50/60 px-5 py-4">
          <p className="text-[11px] font-bold uppercase tracking-wider text-brand-600">
            Pro tip
          </p>
          <p className="mt-1.5 text-[15px] leading-relaxed text-navy-950/80">
            {renderInline(block.text)}
          </p>
        </aside>
      );
    default:
      return null;
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const url = `${BASE_URL}/blog/${post.slug}`;
  const related = getRelatedPosts(post);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        headline: post.title,
        description: post.description,
        url,
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        datePublished: post.publishedAt,
        dateModified: post.updatedAt ?? post.publishedAt,
        articleSection: post.category,
        keywords: post.tags.join(", "),
        wordCount: post.content.reduce((total, block) => {
          const text =
            "text" in block ? block.text : block.items.join(" ");
          return total + text.split(/\s+/).length;
        }, 0),
        ...(post.image
          ? { image: [`${BASE_URL}${post.image}`] }
          : {}),
        author: {
          "@type": "Organization",
          name: "Velora Digitizing",
          url: BASE_URL,
        },
        publisher: { "@id": `${BASE_URL}/#organization` },
        isPartOf: { "@id": `${BASE_URL}/blog#blog` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE_URL}/blog` },
          { "@type": "ListItem", position: 3, name: post.title, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="mx-auto max-w-7xl px-5 pt-8 pb-16 lg:px-10 lg:pt-12">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-2 text-sm text-navy-950/60"
        >
          <Link href="/" className="hover:text-brand-600">
            Home
          </Link>
          <span aria-hidden>&rsaquo;</span>
          <Link href="/blog" className="hover:text-brand-600">
            Blog
          </Link>
          <span aria-hidden>&rsaquo;</span>
          <span className="line-clamp-1 text-navy-950/80">{post.title}</span>
        </nav>

        {/* Header */}
        <header className="mx-auto mt-8 max-w-3xl text-center">
          <div className="flex items-center justify-center gap-3 text-[11px] font-semibold uppercase tracking-wider">
            <span className="rounded-full bg-brand-50 px-3 py-1 text-brand-600">
              {post.category}
            </span>
            <span className="text-navy-950/45">{post.readTime} min read</span>
          </div>
          <h1 className="mt-5 font-serif text-3xl font-bold leading-[1.2] text-navy-950 sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 text-[17px] leading-relaxed text-navy-950/65">
            {post.excerpt}
          </p>
          <div className="mt-6 flex items-center justify-center gap-3 text-sm text-navy-950/55">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-600 text-white">
              <Icon name="award" className="h-4 w-4" />
            </span>
            <span>
              By <span className="font-semibold text-navy-950">Velora Digitizing</span>
            </span>
            <span aria-hidden>&middot;</span>
            <time dateTime={post.publishedAt}>
              {formatPostDate(post.publishedAt)}
            </time>
          </div>
        </header>

        {/* Cover image / prompt placeholder */}
        <div className="mx-auto mt-10 max-w-4xl">
          <BlogImagePlaceholder
            image={post.image}
            alt={post.imageAlt}
            prompt={post.imagePrompt}
            priority
            className="rounded-2xl"
          />
        </div>

        {/* Body */}
        <div className="mx-auto mt-6 max-w-3xl">
          {post.content.map((block, i) => (
            <Block key={i} block={block} />
          ))}

          {/* Tags */}
          <div className="mt-10 flex flex-wrap items-center gap-2 border-t border-navy-950/10 pt-6">
            <span className="text-xs font-bold uppercase tracking-wider text-navy-950/45">
              Tags
            </span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-navy-950/10 px-3 py-1 text-xs text-navy-950/65"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Related service CTA */}
          <div className="mt-8 flex flex-col items-start gap-4 rounded-2xl bg-navy-950 p-6 text-white sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-brand-50/70">
                Related service
              </p>
              <p className="mt-1 font-serif text-xl font-bold">
                {post.relatedService.label}
              </p>
            </div>
            <Link
              href={post.relatedService.href}
              className="vr-btn vr-btn-primary inline-flex items-center gap-2 rounded-md bg-brand-600 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-700"
            >
              LEARN MORE
              <span aria-hidden className="vr-arrow">
                &rarr;
              </span>
            </Link>
          </div>
        </div>
      </article>

      <FAQ
        items={post.faqs}
        title="Questions About This Topic"
        subtitle="Quick answers related to this article."
        searchable={false}
        maxWidthClass="max-w-3xl"
      />

      {related.length > 0 && (
        <section className="mx-auto max-w-7xl px-5 py-16 lg:px-10">
          <h2 className="font-serif text-2xl font-bold text-navy-950 sm:text-3xl">
            Keep Reading
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </section>
      )}

      <CTABanner />
    </>
  );
}
