import { Product } from './products';

const FORMATS = ["DST", "PES", "EXP", "JEF", "VP3"];

function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const RAW_LEFT_CHEST: Array<Omit<Product, "slug" | "formats">> = [
  {
    title: "Corporate Left Chest Logo Embroidery Digitizing",
    price: 8.00,
    category: "left-chest",
    image: "/images/left-chest-logo/corporate-left-chest-logo-embroidery-digitizing.webp",
    description: "High quality left chest logo digitizing ready for embroidery on polo shirts, uniforms, and jackets.",
  },
  {
    title: "Custom Business Left Chest Embroidery Digitizing",
    price: 8.00,
    category: "left-chest",
    image: "/images/left-chest-logo/custom-business-left-chest-embroidery-digitizing.webp",
    description: "High quality left chest logo digitizing ready for embroidery on polo shirts, uniforms, and jackets.",
  },
  {
    title: "Polo Shirt Left Chest Logo Digitizing DST",
    price: 8.00,
    category: "left-chest",
    image: "/images/left-chest-logo/polo-shirt-left-chest-logo-digitizing-dst.webp",
    description: "High quality left chest logo digitizing ready for embroidery on polo shirts, uniforms, and jackets.",
  },
  {
    title: "Left Chest Monogram Embroidery Digitizing",
    price: 8.00,
    category: "left-chest",
    image: "/images/left-chest-logo/left-chest-monogram-embroidery-digitizing.webp",
    description: "High quality left chest logo digitizing ready for embroidery on polo shirts, uniforms, and jackets.",
  },
  {
    title: "Company Uniform Left Chest Logo Digitizing",
    price: 8.00,
    category: "left-chest",
    image: "/images/left-chest-logo/company-uniform-left-chest-logo-digitizing.webp",
    description: "High quality left chest logo digitizing ready for embroidery on polo shirts, uniforms, and jackets.",
  },
  {
    title: "Sports Team Left Chest Embroidery Digitizing",
    price: 8.00,
    category: "left-chest",
    image: "/images/left-chest-logo/sports-team-left-chest-embroidery-digitizing.webp",
    description: "High quality left chest logo digitizing ready for embroidery on polo shirts, uniforms, and jackets.",
  },
  {
    title: "Medical Scrubs Left Chest Logo Digitizing",
    price: 8.00,
    category: "left-chest",
    image: "/images/left-chest-logo/medical-scrubs-left-chest-logo-digitizing.webp",
    description: "High quality left chest logo digitizing ready for embroidery on polo shirts, uniforms, and jackets.",
  },
  {
    title: "Custom Apparel Left Chest Embroidery Digitizing",
    price: 8.00,
    category: "left-chest",
    image: "/images/left-chest-logo/custom-apparel-left-chest-embroidery-digitizing.webp",
    description: "High quality left chest logo digitizing ready for embroidery on polo shirts, uniforms, and jackets.",
  },
  {
    title: "Left Chest Patch Logo Digitizing Services",
    price: 8.00,
    category: "left-chest",
    image: "/images/left-chest-logo/left-chest-patch-logo-digitizing-services.webp",
    description: "High quality left chest logo digitizing ready for embroidery on polo shirts, uniforms, and jackets.",
  },
  {
    title: "Small Text Left Chest Embroidery Digitizing",
    price: 8.00,
    category: "left-chest",
    image: "/images/left-chest-logo/small-text-left-chest-embroidery-digitizing.webp",
    description: "High quality left chest logo digitizing ready for embroidery on polo shirts, uniforms, and jackets.",
  },
  {
    title: "Intricate Left Chest Logo Digitizing PES",
    price: 8.00,
    category: "left-chest",
    image: "/images/left-chest-logo/intricate-left-chest-logo-digitizing-pes.webp",
    description: "High quality left chest logo digitizing ready for embroidery on polo shirts, uniforms, and jackets.",
  },
  {
    title: "Workwear Left Chest Embroidery Digitizing",
    price: 8.00,
    category: "left-chest",
    image: "/images/left-chest-logo/workwear-left-chest-embroidery-digitizing.webp",
    description: "High quality left chest logo digitizing ready for embroidery on polo shirts, uniforms, and jackets.",
  },
  {
    title: "Custom Crest Left Chest Logo Digitizing",
    price: 8.00,
    category: "left-chest",
    image: "/images/left-chest-logo/custom-crest-left-chest-logo-digitizing.webp",
    description: "High quality left chest logo digitizing ready for embroidery on polo shirts, uniforms, and jackets.",
  },
  {
    title: "Restaurant Uniform Left Chest Embroidery",
    price: 8.00,
    category: "left-chest",
    image: "/images/left-chest-logo/restaurant-uniform-left-chest-embroidery.webp",
    description: "High quality left chest logo digitizing ready for embroidery on polo shirts, uniforms, and jackets.",
  },
  {
    title: "Detailed Left Chest Logo Embroidery Digitizing",
    price: 8.00,
    category: "left-chest",
    image: "/images/left-chest-logo/detailed-left-chest-logo-embroidery-digitizing.webp",
    description: "High quality left chest logo digitizing ready for embroidery on polo shirts, uniforms, and jackets.",
  },
  {
    title: "Jacket Left Chest Logo Digitizing DST",
    price: 8.00,
    category: "left-chest",
    image: "/images/left-chest-logo/jacket-left-chest-logo-digitizing-dst.webp",
    description: "High quality left chest logo digitizing ready for embroidery on polo shirts, uniforms, and jackets.",
  },
  {
    title: "Custom Brand Left Chest Embroidery Digitizing",
    price: 8.00,
    category: "left-chest",
    image: "/images/left-chest-logo/custom-brand-left-chest-embroidery-digitizing.webp",
    description: "High quality left chest logo digitizing ready for embroidery on polo shirts, uniforms, and jackets.",
  },
  {
    title: "High Quality Left Chest Logo Digitizing",
    price: 8.00,
    category: "left-chest",
    image: "/images/left-chest-logo/high-quality-left-chest-logo-digitizing.webp",
    description: "High quality left chest logo digitizing ready for embroidery on polo shirts, uniforms, and jackets.",
  },
  {
    title: "Premium Left Chest Embroidery Digitizing PES",
    price: 8.00,
    category: "left-chest",
    image: "/images/left-chest-logo/premium-left-chest-embroidery-digitizing-pes.webp",
    description: "High quality left chest logo digitizing ready for embroidery on polo shirts, uniforms, and jackets.",
  },
  {
    title: "Left Chest Emblem Embroidery Digitizing",
    price: 8.00,
    category: "left-chest",
    image: "/images/left-chest-logo/left-chest-emblem-embroidery-digitizing.webp",
    description: "High quality left chest logo digitizing ready for embroidery on polo shirts, uniforms, and jackets.",
  },
  {
    title: "Promotional Wear Left Chest Logo Digitizing",
    price: 8.00,
    category: "left-chest",
    image: "/images/left-chest-logo/promotional-wear-left-chest-logo-digitizing.webp",
    description: "High quality left chest logo digitizing ready for embroidery on polo shirts, uniforms, and jackets.",
  },
  {
    title: "Custom Design Left Chest Embroidery Digitizing",
    price: 8.00,
    category: "left-chest",
    image: "/images/left-chest-logo/custom-design-left-chest-embroidery-digitizing.webp",
    description: "High quality left chest logo digitizing ready for embroidery on polo shirts, uniforms, and jackets.",
  },
  {
    title: "Left Chest Logo Digitizing Expert Services",
    price: 8.00,
    category: "left-chest",
    image: "/images/left-chest-logo/left-chest-logo-digitizing-expert-services.webp",
    description: "High quality left chest logo digitizing ready for embroidery on polo shirts, uniforms, and jackets.",
  },
];

export const LEFT_CHEST_PRODUCTS: Product[] = RAW_LEFT_CHEST.map((p) => ({
  ...p,
  slug: slugify(p.title),
  formats: FORMATS,
}));
