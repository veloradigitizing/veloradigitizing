import type { Metadata } from "next";
import Image from "next/image";
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

import StitchCountCalculator from "../../components/StitchCountCalculator";

const BASE_URL = "https://www.veloradigitizing.com";

const SERVICE_LINKS = [
  { label: "Embroidery Digitizing Services", href: "/services" },
  { label: "3D Puff Digitizing", href: "/services/3d-puff-digitizing" },
  { label: "Cap & Hat Logo Digitizing", href: "/services/cap-logo-digitizing" },
  { label: "Applique Digitizing", href: "/services/applique-digitizing" },
  { label: "Custom Patch Digitizing", href: "/patches" },
  { label: "Vector Art Conversion", href: "/vector-art" },
];

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
  const ogImage = post.image ?? "/images/og/og-home.jpg";

  return {
    title: post.metaTitle,
    description: post.description,
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

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

function Block({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "h2":
      const id = slugify(block.text);
      return (
        <h2 id={id} className="mt-12 scroll-mt-24 font-serif text-2xl font-bold leading-snug text-navy-950 sm:text-3xl">
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
    case "calculator":
      return <StitchCountCalculator />;
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
            "text" in block
              ? block.text
              : "items" in block
                ? block.items.join(" ")
                : "";
          return total + text.split(/\s+/).length;
        }, 0),
        ...(post.image
          ? { image: [`${BASE_URL}${post.image}`] }
          : {}),
        author: {
          "@type": "Organization",
          "@id": `${BASE_URL}/#service`,
          name: "Velora Digitizing",
          url: BASE_URL,
        },
        publisher: { "@id": `${BASE_URL}/#service` },
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
      ...(post.faqs && post.faqs.length > 0
        ? [
            {
              "@type": "FAQPage",
              "@id": `${url}#faq`,
              mainEntity: post.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            },
          ]
        : []),
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
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-navy-950/70">
            <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-brand-600/30 shadow-sm">
              <Image
                src="/images/veloralogo.webp"
                alt="Velora Digitizing logo"
                fill
                sizes="40px"
                className="object-cover"
              />
            </div>
            <div className="text-left">
              <Link href="/about" className="font-semibold text-navy-950 hover:text-brand-600">
                Velora Digitizing Team
              </Link>
              <p className="text-xs text-navy-950/55">Embroidery Digitizing Studio</p>
            </div>
            <span aria-hidden className="hidden sm:inline text-navy-950/30">&middot;</span>
            <time dateTime={post.publishedAt} className="text-xs text-navy-950/60 font-medium">
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
          {/* Table of Contents */}
          {(() => {
            const headings = post.content.filter(
              (b): b is { type: "h2"; text: string } => b.type === "h2"
            );
            if (headings.length < 2) return null;
            return (
              <nav
                aria-label="Table of contents"
                className="mb-8 rounded-2xl border border-navy-950/10 bg-brand-50/30 p-6"
              >
                <div className="flex items-center gap-2">
                  <Icon name="award" className="h-4 w-4 text-brand-600" />
                  <p className="font-serif text-base font-bold text-navy-950">
                    Table of Contents
                  </p>
                </div>
                <ol className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 text-sm">
                  {headings.map((h, index) => (
                    <li key={h.text} className="flex items-start gap-2">
                      <span className="font-mono text-xs font-bold text-brand-600">
                        {index + 1}.
                      </span>
                      <a
                        href={`#${slugify(h.text)}`}
                        className="text-navy-950/75 hover:text-brand-600 hover:underline transition-colors leading-snug"
                      >
                        {h.text}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            );
          })()}

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

          {/* E-E-A-T Author Bio Card */}
          <div className="mt-12 rounded-2xl border border-navy-950/10 bg-brand-50/40 p-6 sm:p-7">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-brand-600/20 shadow-sm">
                <Image
                  src="/images/veloralogo.webp"
                  alt="Velora Digitizing logo"
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h4 className="font-serif text-lg font-bold text-navy-950">
                    Written by the Velora Digitizing Team
                  </h4>
                  <span className="rounded-full bg-brand-600/10 px-2.5 py-0.5 text-xs font-semibold text-brand-700">
                    Digitizing Studio
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-navy-950/70">
                  This guide is written and reviewed by the digitizers at Velora Digitizing, who prepare embroidery files for caps, jackets, patches, and left chest logos every day. The advice here comes from the same stitch-path, underlay, and fabric choices we make on client orders.
                </p>
                <div className="mt-3 flex items-center gap-3 text-xs font-semibold text-brand-600">
                  <Link href="/about" className="hover:underline flex items-center gap-1">
                    About Velora Digitizing <span aria-hidden>&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
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
              aria-label={`Explore our ${post.relatedService.label}`}
              className="vr-btn vr-btn-primary inline-flex items-center gap-2 rounded-md bg-brand-600 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-700"
            >
              EXPLORE SERVICE
              <span aria-hidden className="vr-arrow">
                &rarr;
              </span>
            </Link>
          </div>

          {/* Links to the other service pages */}
          <nav aria-label="More Velora Digitizing services" className="mt-6">
            <p className="text-[11px] font-bold uppercase tracking-wider text-navy-950/50">
              More services from Velora Digitizing
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {SERVICE_LINKS.filter(
                (s) => s.href !== post.relatedService.href,
              ).map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="inline-block rounded-full border border-navy-950/15 px-3.5 py-1.5 text-sm font-medium text-navy-950/75 transition-colors hover:border-brand-600 hover:text-brand-600"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
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
