import type { Metadata } from "next";
import Hero from "../components/Hero";
import blogBg from "../images/embroidery-digitizing-process.webp";
import { SectionTag } from "../components/Section";
import BlogCard from "../components/BlogCard";
import CTABanner from "../components/CTABanner";
import { Reveal } from "../components/Reveal";
import { stagger } from "../components/stagger";
import { BLOG_POSTS } from "./posts";

const BASE_URL = "https://www.veloradigitizing.com";

export const metadata: Metadata = {
  title: "Embroidery Digitizing Blog: Guides & Tips",
  description:
    "Practical guides on embroidery digitizing, file formats, 3D puff, custom patches and artwork preparation from the digitizers at Velora Digitizing.",
  keywords: [
    "embroidery digitizing blog",
    "embroidery digitizing guide",
    "embroidery file formats",
    "3D puff embroidery",
    "custom patches guide",
    "embroidery tips",
  ],
  alternates: {
    canonical: `${BASE_URL}/blog`,
  },
  openGraph: {
    title: "Embroidery Digitizing Blog: Guides & Tips | Velora Digitizing",
    description:
      "Practical guides on embroidery digitizing, file formats, 3D puff, custom patches and artwork preparation from the digitizers at Velora Digitizing.",
    url: `${BASE_URL}/blog`,
    siteName: "Velora Digitizing",
    type: "website",
    images: [
      {
        url: "/images/og/og-home.webp",
        width: 1200,
        height: 630,
        alt: "Velora Digitizing Blog: Embroidery Digitizing Guides and Tips",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Embroidery Digitizing Blog: Guides & Tips | Velora Digitizing",
    description:
      "Guides on embroidery digitizing, file formats, 3D puff, custom patches and artwork preparation.",
    images: ["/images/og/og-home.webp"],
  },
};

const blogJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Blog",
      "@id": `${BASE_URL}/blog#blog`,
      name: "Velora Digitizing Blog",
      url: `${BASE_URL}/blog`,
      description:
        "Guides and tips on embroidery digitizing, file formats, 3D puff, custom patches and artwork preparation.",
      publisher: { "@id": `${BASE_URL}/#organization` },
      blogPost: BLOG_POSTS.map((post) => ({
        "@type": "BlogPosting",
        headline: post.title,
        url: `${BASE_URL}/blog/${post.slug}`,
        datePublished: post.publishedAt,
        dateModified: post.updatedAt ?? post.publishedAt,
        description: post.description,
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE_URL}/blog` },
      ],
    },
  ],
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <Hero
        eyebrow="Learn From Our Digitizers"
        titleLines={[
          { text: "Embroidery Digitizing" },
          { text: "Guides & Tips", accent: true },
        ]}
        description="Straightforward articles on digitizing, file formats, 3D puff, patches and artwork preparation, written by the people who sew out every file we deliver."
        bgImage={blogBg}
        imageLabel="Embroidery digitizing process with artwork and stitched sample"
        features={[
          { icon: "layers", title: "File Formats", sub: "DST, PES, JEF explained" },
          { icon: "cap", title: "3D Puff", sub: "Cap digitizing rules" },
          { icon: "badge", title: "Patches", sub: "Types, backings & costs" },
          { icon: "check", title: "Artwork Tips", sub: "Prepare logos for thread" },
        ]}
      />

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
        <Reveal direction="up">
          <SectionTag
            eyebrow="Latest Articles"
            title="Embroidery Digitizing Knowledge Base"
            subtitle="Everything we wish our customers knew before sending their first logo. New guides are added regularly."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post, i) => (
            <Reveal key={post.slug} direction="up" delay={stagger(i, 80)}>
              <BlogCard post={post} />
            </Reveal>
          ))}
        </div>
      </section>

      <CTABanner
        title="Have a Logo Ready to Digitize?"
        subtitle="Send your artwork and get a free quote within an hour. Every file is manually digitized and test-sewn before delivery."
        ctaLabel="GET FREE QUOTE"
      />
    </>
  );
}
