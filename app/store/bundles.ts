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
    slug: "3d-puff-mega-pack",
    name: "3D Puff Mega Pack",
    category: "bundles",
    categoryLabel: "3D Puff Bundles",
    price: 89.99,
    originalPrice: 120,
    image: "/images/bundles/bundle1.jpeg",
    badge: "popular",
    isBundle: true,
    bundleDiscount: 25,
    tagline: "25 premium 3D puff designs — perfect for caps and bold logos.",
    description:
      "A curated collection of 25 premium 3D puff embroidery designs. Each design features wide satin columns, reinforced underlay, and foam-ready digitizing optimized for dimensional cap embroidery.",
    features: [
      "25 premium 3D puff designs",
      "Foam-ready underlay included",
      "Multiple size variants",
      "Optimized for structured caps",
      "Commercial license included",
    ],
    includes: [
      "25 designs in 5 formats",
      "Foam placement guides",
      "Thread color charts",
      "Size variant guide",
      "Commercial license",
    ],
    formats: ["DST", "PES", "EXP", "JEF", "VP3"],
    rating: 4.9,
    reviewCount: 156,
    designs: 25,
    fileSize: "145 MB",
  },
  {
    slug: "chenille-collection-pack",
    name: "Chenille Collection Pack",
    category: "bundles",
    categoryLabel: "Chenille Bundles",
    price: 79.99,
    originalPrice: 100,
    image: "/images/bundles/bundle2.jpeg",
    badge: "new",
    isBundle: true,
    bundleDiscount: 20,
    tagline: "20 soft chenille designs — for varsity jackets and patches.",
    description:
      "20 beautiful chenille embroidery designs perfect for varsity jackets, letterman jackets, and patches. Each design uses traditional chenille stitch techniques with clean loop heights and proper chain-stitch borders.",
    features: [
      "20 chenille designs",
      "Traditional loop stitching",
      "Chain-stitch borders included",
      "Optimized for felt/twill backing",
      "Varsity & letterman ready",
    ],
    includes: [
      "20 designs in 5 formats",
      "Loop height guide",
      "Backing material recommendations",
      "Color combination charts",
      "Commercial license",
    ],
    formats: ["DST", "PES", "EXP", "JEF", "VP3"],
    rating: 4.8,
    reviewCount: 98,
    designs: 20,
    fileSize: "98 MB",
  },
  {
    slug: "towel-embroidery-bundle",
    name: "Towel Embroidery Bundle",
    category: "bundles",
    categoryLabel: "Towel Design Bundles",
    price: 59.99,
    originalPrice: 75,
    image: "/images/bundles/bundle3.jpeg",
    badge: "sale",
    isBundle: true,
    bundleDiscount: 20,
    tagline: "15 towel embroidery designs — monograms, borders & motifs.",
    description:
      "15 elegant towel embroidery designs including monogram sets, decorative borders, and floral motifs. Each design uses low-density underlay and appropriate topping stabilization for terry cloth, ensuring clean results on bath towels, hand towels, and beach towels.",
    features: [
      "15 towel-optimized designs",
      "Low density for terry cloth",
      "Topping stabilization included",
      "Monogram alphabets included",
      "Bath, hand & beach sizes",
    ],
    includes: [
      "15 designs in 5 formats",
      "Topping/stabilizer guide",
      "Monogram A-Z set",
      "Border pattern variations",
      "Commercial license",
    ],
    formats: ["DST", "PES", "EXP", "JEF", "VP3"],
    rating: 4.7,
    reviewCount: 73,
    designs: 15,
    fileSize: "67 MB",
  },
  {
    slug: "cap-logo-starter-kit",
    name: "Cap Logo Starter Kit",
    category: "bundles",
    categoryLabel: "Cap Logo Bundles",
    price: 69.99,
    originalPrice: 90,
    image: "/images/bundles/bundle4.jpeg",
    badge: "popular",
    isBundle: true,
    bundleDiscount: 22,
    tagline: "30 cap logo designs — sports, corporate & casual styles.",
    description:
      "30 professional cap logo embroidery designs covering sports teams, corporate branding, and casual fashion. Each design is specifically digitized for curved cap fronts with proper underlay and pull compensation for consistent results.",
    features: [
      "30 cap-optimized designs",
      "Curved surface compensation",
      "Small & large size variants",
      "Sports, corporate & casual themes",
      "Structured & unstructured support",
    ],
    includes: [
      "30 designs in 5 formats",
      "Size variation guide (2 inch to 4 inch)",
      "Pull compensation charts",
      "Thread color palettes",
      "Commercial license",
    ],
    formats: ["DST", "PES", "EXP", "JEF", "VP3"],
    rating: 4.9,
    reviewCount: 234,
    designs: 30,
    fileSize: "112 MB",
  },
  {
    slug: "left-chest-premium-pack",
    name: "Left Chest Premium Pack",
    category: "bundles",
    categoryLabel: "Left Chest Logo Bundles",
    price: 74.99,
    originalPrice: 95,
    image: "/images/bundles/bundle5.jpeg",
    badge: "sale",
    isBundle: true,
    bundleDiscount: 21,
    tagline: "25 left chest designs — corporate, school & fashion.",
    description:
      "25 premium left chest logo embroidery designs optimized for polo shirts, button-downs, and workwear. Features small-format precision with clean finishes that look professional on any garment.",
    features: [
      "25 left chest designs",
      "Small format optimization (2.5 to 4 inch)",
      "Light underlay for dress shirts",
      "Multiple density options",
      "Corporate & casual styles",
    ],
    includes: [
      "25 designs in 5 formats",
      "Placement guide templates",
      "Density variation files",
      "Hooping position diagrams",
      "Commercial license",
    ],
    formats: ["DST", "PES", "EXP", "JEF", "VP3"],
    rating: 4.8,
    reviewCount: 167,
    designs: 25,
    fileSize: "88 MB",
  },
  {
    slug: "ultimate-digitizer-bundle",
    name: "Ultimate Digitizer Bundle",
    category: "bundles",
    categoryLabel: "Complete Bundles",
    price: 199.99,
    originalPrice: 280,
    image: "/images/bundles/bundle6.jpeg",
    badge: "best-value",
    isBundle: true,
    bundleDiscount: 29,
    tagline: "100+ designs across ALL categories — complete collection.",
    description:
      "The ultimate bundle for serious embroidery businesses. Get over 100 premium designs covering every category: 3D puff, chenille, applique, logos, left chest, jacket back, and more. Everything you need to offer a full range of embroidery services.",
    features: [
      "100+ premium designs",
      "All categories included",
      "Full commercial license",
      "Priority support access",
      "Free future updates",
    ],
    includes: [
      "100+ designs in all formats",
      "Complete category coverage",
      "Design source files (where available)",
      "Lifetime updates",
      "Priority email support",
    ],
    formats: ["DST", "PES", "EXP", "JEF", "HUS", "VP3", "XXX"],
    rating: 4.9,
    reviewCount: 412,
    designs: 100,
    fileSize: "520 MB",
  },
];
