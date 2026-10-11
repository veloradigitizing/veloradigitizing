import { Product } from './products';

const FORMATS = ["DST", "PES", "EXP", "JEF", "VP3"];

function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const RAW_JACKET_BACK: Array<Omit<Product, "slug" | "formats">> = [
  {
    title: "Club Jacket Back Embroidery Digitizing DST",
    price: 25,
    category: "jacket-back",
    image: "/images/jacket-back-design/club-jacket-back-embroidery-digitizing-dst.webp",
    description: "High detail jacket back digitizing. Perfect for denim, leather, and varsity jackets.",
  },
  {
    title: "Custom Back Piece Embroidery Digitizing",
    price: 18,
    category: "jacket-back",
    image: "/images/jacket-back-design/custom-back-piece-embroidery-digitizing.webp",
    description: "High detail jacket back digitizing. Perfect for denim, leather, and varsity jackets.",
  },
  {
    title: "Custom Biker Patch Jacket Back Digitizing",
    price: 20,
    category: "jacket-back",
    image: "/images/jacket-back-design/custom-biker-patch-jacket-back-digitizing.webp",
    description: "High detail jacket back digitizing. Perfect for denim, leather, and varsity jackets.",
  },
  {
    title: "Custom Jacket Back Digitizing Services DST",
    price: 18,
    category: "jacket-back",
    image: "/images/jacket-back-design/custom-jacket-back-digitizing-services-dst.webp",
    description: "High detail jacket back digitizing. Perfect for denim, leather, and varsity jackets.",
  },
  {
    title: "Custom Logo Jacket Back Embroidery PES",
    price: 25,
    category: "jacket-back",
    image: "/images/jacket-back-design/custom-logo-jacket-back-embroidery-pes.webp",
    description: "High detail jacket back digitizing. Perfect for denim, leather, and varsity jackets.",
  },
  {
    title: "Custom Motorcycle Jacket Back Digitizing DST",
    price: 22,
    category: "jacket-back",
    image: "/images/jacket-back-design/custom-motorcycle-jacket-back-digitizing-dst.webp",
    description: "High detail jacket back digitizing. Perfect for denim, leather, and varsity jackets.",
  },
  {
    title: "Denim Jacket Full Back Embroidery Digitizing",
    price: 22,
    category: "jacket-back",
    image: "/images/jacket-back-design/denim-jacket-full-back-embroidery-digitizing.webp",
    description: "High detail jacket back digitizing. Perfect for denim, leather, and varsity jackets.",
  },
  {
    title: "Detailed Jacket Back Embroidery Digitizing",
    price: 15,
    category: "jacket-back",
    image: "/images/jacket-back-design/detailed-jacket-back-embroidery-digitizing.webp",
    description: "High detail jacket back digitizing. Perfect for denim, leather, and varsity jackets.",
  },
  {
    title: "Full Size Jacket Back Embroidery Digitizing",
    price: 18,
    category: "jacket-back",
    image: "/images/jacket-back-design/full-size-jacket-back-embroidery-digitizing.webp",
    description: "High detail jacket back digitizing. Perfect for denim, leather, and varsity jackets.",
  },
  {
    title: "High Quality Jacket Back Digitizing PES",
    price: 22,
    category: "jacket-back",
    image: "/images/jacket-back-design/high-quality-jacket-back-digitizing-pes.webp",
    description: "High detail jacket back digitizing. Perfect for denim, leather, and varsity jackets.",
  },
  {
    title: "Intricate Full Back Jacket Digitizing",
    price: 18,
    category: "jacket-back",
    image: "/images/jacket-back-design/intricate-full-back-jacket-digitizing.webp",
    description: "High detail jacket back digitizing. Perfect for denim, leather, and varsity jackets.",
  },
  {
    title: "Jacket Back Patch Embroidery Digitizing",
    price: 20,
    category: "jacket-back",
    image: "/images/jacket-back-design/jacket-back-patch-embroidery-digitizing.webp",
    description: "High detail jacket back digitizing. Perfect for denim, leather, and varsity jackets.",
  },
  {
    title: "Large Apparel Jacket Back Digitizing",
    price: 25,
    category: "jacket-back",
    image: "/images/jacket-back-design/large-apparel-jacket-back-digitizing.webp",
    description: "High detail jacket back digitizing. Perfect for denim, leather, and varsity jackets.",
  },
  {
    title: "Large Format Jacket Back Embroidery Digitizing",
    price: 20,
    category: "jacket-back",
    image: "/images/jacket-back-design/large-format-jacket-back-embroidery-digitizing.webp",
    description: "High detail jacket back digitizing. Perfect for denim, leather, and varsity jackets.",
  },
  {
    title: "Large Scale Back Patch Embroidery Digitizing",
    price: 15,
    category: "jacket-back",
    image: "/images/jacket-back-design/large-scale-back-patch-embroidery-digitizing.webp",
    description: "High detail jacket back digitizing. Perfect for denim, leather, and varsity jackets.",
  },
  {
    title: "Leather Bomber Jacket Back Logo Digitizing",
    price: 20,
    category: "jacket-back",
    image: "/images/jacket-back-design/leather-bomber-jacket-back-logo-digitizing.webp",
    description: "High detail jacket back digitizing. Perfect for denim, leather, and varsity jackets.",
  },
  {
    title: "Premium Jacket Back Embroidery Digitizing PES",
    price: 22,
    category: "jacket-back",
    image: "/images/jacket-back-design/premium-jacket-back-embroidery-digitizing-pes.webp",
    description: "High detail jacket back digitizing. Perfect for denim, leather, and varsity jackets.",
  },
  {
    title: "Sports Jacket Back Embroidery Digitizing",
    price: 25,
    category: "jacket-back",
    image: "/images/jacket-back-design/sports-jacket-back-embroidery-digitizing.webp",
    description: "High detail jacket back digitizing. Perfect for denim, leather, and varsity jackets.",
  },
  {
    title: "Varsity Jacket Back Embroidery Digitizing",
    price: 20,
    category: "jacket-back",
    image: "/images/jacket-back-design/varsity-jacket-back-embroidery-digitizing.webp",
    description: "High detail jacket back digitizing. Perfect for denim, leather, and varsity jackets.",
  },
];

export const JACKET_BACK_PRODUCTS: Product[] = RAW_JACKET_BACK.map((p) => ({
  ...p,
  slug: slugify(p.title),
  formats: FORMATS,
}));
