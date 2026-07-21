export type BundleProduct = {
  slug: string;
  name: string;
  category: string;
  categoryLabel: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: string;
  isBundle: boolean;
  bundleDiscount: number;
  tagline: string;
  description: string;
  features: string[];
  includes: string[];
  formats: string[];
  rating: number;
  reviewCount: number;
  designs: number;
  fileSize: string;
};

export const BUNDLES: BundleProduct[] = [
  {
    slug: "70-patches-pack-1",
    name: "70 Patches Pack",
    category: "bundles",
    categoryLabel: "Patches Bundle",
    price: 209.99,
    originalPrice: 280,
    image: "/images/bundles/bundle1.webp",
    badge: "popular",
    isBundle: true,
    bundleDiscount: 25,
    tagline: "70 premium embroidery patches — perfect for jackets, caps & more.",
    description:
      "A curated collection of 70 premium embroidery patch designs. Each design features high-quality digitizing with clean edges and professional finish. Perfect for jacket backs, caps, and custom apparel.",
    features: [
      "70 premium patch designs",
      "Multiple size variants",
      "Optimized for various fabrics",
      "Commercial license included",
      "Print-ready quality",
    ],
    includes: [
      "70 designs in 5 formats",
      "Size variation guide",
      "Thread color charts",
      "Application instructions",
      "Commercial license",
    ],
    formats: ["DST", "PES", "EXP", "JEF", "VP3"],
    rating: 4.9,
    reviewCount: 156,
    designs: 70,
    fileSize: "145 MB",
  },
  {
    slug: "100-patches-mega-pack",
    name: "100 Patches Pack",
    category: "bundles",
    categoryLabel: "Patches Bundle",
    price: 299.99,
    originalPrice: 400,
    image: "/images/bundles/bundle2.webp",
    badge: "best-value",
    isBundle: true,
    bundleDiscount: 25,
    tagline: "100 premium embroidery patches — ultimate collection.",
    description:
      "The ultimate mega pack with 100 premium embroidery patch designs. Get the best value with our largest collection covering all styles: animals, logos, text, floral, and more. Everything you need for a complete embroidery business.",
    features: [
      "100 premium patch designs",
      "All style categories included",
      "Full commercial license",
      "Priority support access",
      "Free future updates",
    ],
    includes: [
      "100 designs in all formats",
      "Complete category coverage",
      "Design source files",
      "Lifetime updates",
      "Priority email support",
    ],
    formats: ["DST", "PES", "EXP", "JEF", "HUS", "VP3", "XXX"],
    rating: 4.9,
    reviewCount: 412,
    designs: 100,
    fileSize: "520 MB",
  },
  {
    slug: "70-patches-pack-3",
    name: "70 Patches Pack",
    category: "bundles",
    categoryLabel: "Patches Bundle",
    price: 209.99,
    originalPrice: 280,
    image: "/images/bundles/bundle3.webp",
    badge: "new",
    isBundle: true,
    bundleDiscount: 25,
    tagline: "70 premium embroidery patches — fresh new designs.",
    description:
      "A fresh collection of 70 premium embroidery patch designs featuring the latest trends in embroidery art. Each design is meticulously digitized for crisp, clean stitching on any fabric type.",
    features: [
      "70 new patch designs",
      "Trending styles included",
      "Multiple hoop sizes",
      "Commercial license included",
      "High-resolution output",
    ],
    includes: [
      "70 designs in 5 formats",
      "Hoop size guide",
      "Color palette recommendations",
      "Stabilizer guide",
      "Commercial license",
    ],
    formats: ["DST", "PES", "EXP", "JEF", "VP3"],
    rating: 4.8,
    reviewCount: 98,
    designs: 70,
    fileSize: "138 MB",
  },
  {
    slug: "50-patches-starter-pack",
    name: "50 Patches Pack",
    category: "bundles",
    categoryLabel: "Patches Bundle",
    price: 149.99,
    originalPrice: 200,
    image: "/images/bundles/bundle4.webp",
    badge: "sale",
    isBundle: true,
    bundleDiscount: 25,
    tagline: "50 premium embroidery patches — great value starter.",
    description:
      "An affordable starter pack with 50 premium embroidery patch designs. Perfect for small businesses or those just getting started with embroidery. Quality designs at an unbeatable price.",
    features: [
      "50 premium patch designs",
      "Beginner-friendly files",
      "Standard hoop sizes",
      "Basic commercial license",
      "Email support included",
    ],
    includes: [
      "50 designs in 5 formats",
      "Basic size guide",
      "Starter tutorial PDF",
      "Thread chart basics",
      "Standard license",
    ],
    formats: ["DST", "PES", "EXP", "JEF", "VP3"],
    rating: 4.7,
    reviewCount: 73,
    designs: 50,
    fileSize: "95 MB",
  },
  {
    slug: "50-patches-value-pack",
    name: "50 Patches Pack",
    category: "bundles",
    categoryLabel: "Patches Bundle",
    price: 149.99,
    originalPrice: 200,
    image: "/images/bundles/bundle5.webp",
    badge: "popular",
    isBundle: true,
    bundleDiscount: 25,
    tagline: "50 premium embroidery patches — curated selection.",
    description:
      "A carefully curated selection of 50 premium embroidery patch designs. This pack features our most popular and versatile designs that work great on caps, jackets, bags, and more.",
    features: [
      "50 curated designs",
      "Best-seller selection",
      "Versatile applications",
      "Commercial license included",
      "Fast download access",
    ],
    includes: [
      "50 designs in 5 formats",
      "Application guide",
      "Popular designs list",
      "Fabric recommendation guide",
      "Commercial license",
    ],
    formats: ["DST", "PES", "EXP", "JEF", "VP3"],
    rating: 4.8,
    reviewCount: 134,
    designs: 50,
    fileSize: "98 MB",
  },
  {
    slug: "100-patches-ultimate-pack",
    name: "100 Patches Pack",
    category: "bundles",
    categoryLabel: "Patches Bundle",
    price: 299.99,
    originalPrice: 400,
    image: "/images/bundles/bundle6.webp",
    badge: "best-value",
    isBundle: true,
    bundleDiscount: 25,
    tagline: "100 premium embroidery patches — complete collection.",
    description:
      "Our flagship 100 patches pack at an incredible price. Get 100 professionally digitized embroidery patch designs covering every category imaginable. The perfect bundle for serious embroidery businesses.",
    features: [
      "100 premium patch designs",
      "All categories covered",
      "Full commercial license",
      "Priority support access",
      "Free lifetime updates",
    ],
    includes: [
      "100 designs in all formats",
      "Complete style coverage",
      "Source files (where available)",
      "Lifetime update guarantee",
      "Priority support access",
    ],
    formats: ["DST", "PES", "EXP", "JEF", "HUS", "VP3", "XXX"],
    rating: 4.9,
    reviewCount: 389,
    designs: 100,
    fileSize: "510 MB",
  },
];
