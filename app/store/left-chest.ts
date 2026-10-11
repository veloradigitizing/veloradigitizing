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
    title: " $args[0].Value.ToUpper() orporate  $args[0].Value.ToUpper() eft  $args[0].Value.ToUpper() hest  $args[0].Value.ToUpper() ogo  $args[0].Value.ToUpper() mbroidery  $args[0].Value.ToUpper() igitizing",
    price: 8.00,
    category: "left-chest",
    image: "/images/left-chest-logo/corporate-left-chest-logo-embroidery-digitizing.webp",
    description: "High quality left chest logo digitizing ready for embroidery on polo shirts, uniforms, and jackets.",
  },
  {
    title: " $args[0].Value.ToUpper() ustom  $args[0].Value.ToUpper() usiness  $args[0].Value.ToUpper() eft  $args[0].Value.ToUpper() hest  $args[0].Value.ToUpper() mbroidery  $args[0].Value.ToUpper() igitizing",
    price: 8.00,
    category: "left-chest",
    image: "/images/left-chest-logo/custom-business-left-chest-embroidery-digitizing.webp",
    description: "High quality left chest logo digitizing ready for embroidery on polo shirts, uniforms, and jackets.",
  },
  {
    title: " $args[0].Value.ToUpper() olo  $args[0].Value.ToUpper() hirt  $args[0].Value.ToUpper() eft  $args[0].Value.ToUpper() hest  $args[0].Value.ToUpper() ogo  $args[0].Value.ToUpper() igitizing  $args[0].Value.ToUpper() st",
    price: 8.00,
    category: "left-chest",
    image: "/images/left-chest-logo/polo-shirt-left-chest-logo-digitizing-dst.webp",
    description: "High quality left chest logo digitizing ready for embroidery on polo shirts, uniforms, and jackets.",
  },
  {
    title: " $args[0].Value.ToUpper() eft  $args[0].Value.ToUpper() hest  $args[0].Value.ToUpper() onogram  $args[0].Value.ToUpper() mbroidery  $args[0].Value.ToUpper() igitizing",
    price: 8.00,
    category: "left-chest",
    image: "/images/left-chest-logo/left-chest-monogram-embroidery-digitizing.webp",
    description: "High quality left chest logo digitizing ready for embroidery on polo shirts, uniforms, and jackets.",
  },
  {
    title: " $args[0].Value.ToUpper() ompany  $args[0].Value.ToUpper() niform  $args[0].Value.ToUpper() eft  $args[0].Value.ToUpper() hest  $args[0].Value.ToUpper() ogo  $args[0].Value.ToUpper() igitizing",
    price: 8.00,
    category: "left-chest",
    image: "/images/left-chest-logo/company-uniform-left-chest-logo-digitizing.webp",
    description: "High quality left chest logo digitizing ready for embroidery on polo shirts, uniforms, and jackets.",
  },
  {
    title: " $args[0].Value.ToUpper() ports  $args[0].Value.ToUpper() eam  $args[0].Value.ToUpper() eft  $args[0].Value.ToUpper() hest  $args[0].Value.ToUpper() mbroidery  $args[0].Value.ToUpper() igitizing",
    price: 8.00,
    category: "left-chest",
    image: "/images/left-chest-logo/sports-team-left-chest-embroidery-digitizing.webp",
    description: "High quality left chest logo digitizing ready for embroidery on polo shirts, uniforms, and jackets.",
  },
  {
    title: " $args[0].Value.ToUpper() edical  $args[0].Value.ToUpper() crubs  $args[0].Value.ToUpper() eft  $args[0].Value.ToUpper() hest  $args[0].Value.ToUpper() ogo  $args[0].Value.ToUpper() igitizing",
    price: 8.00,
    category: "left-chest",
    image: "/images/left-chest-logo/medical-scrubs-left-chest-logo-digitizing.webp",
    description: "High quality left chest logo digitizing ready for embroidery on polo shirts, uniforms, and jackets.",
  },
  {
    title: " $args[0].Value.ToUpper() ustom  $args[0].Value.ToUpper() pparel  $args[0].Value.ToUpper() eft  $args[0].Value.ToUpper() hest  $args[0].Value.ToUpper() mbroidery  $args[0].Value.ToUpper() igitizing",
    price: 8.00,
    category: "left-chest",
    image: "/images/left-chest-logo/custom-apparel-left-chest-embroidery-digitizing.webp",
    description: "High quality left chest logo digitizing ready for embroidery on polo shirts, uniforms, and jackets.",
  },
  {
    title: " $args[0].Value.ToUpper() eft  $args[0].Value.ToUpper() hest  $args[0].Value.ToUpper() atch  $args[0].Value.ToUpper() ogo  $args[0].Value.ToUpper() igitizing  $args[0].Value.ToUpper() ervices",
    price: 8.00,
    category: "left-chest",
    image: "/images/left-chest-logo/left-chest-patch-logo-digitizing-services.webp",
    description: "High quality left chest logo digitizing ready for embroidery on polo shirts, uniforms, and jackets.",
  },
  {
    title: " $args[0].Value.ToUpper() mall  $args[0].Value.ToUpper() ext  $args[0].Value.ToUpper() eft  $args[0].Value.ToUpper() hest  $args[0].Value.ToUpper() mbroidery  $args[0].Value.ToUpper() igitizing",
    price: 8.00,
    category: "left-chest",
    image: "/images/left-chest-logo/small-text-left-chest-embroidery-digitizing.webp",
    description: "High quality left chest logo digitizing ready for embroidery on polo shirts, uniforms, and jackets.",
  },
  {
    title: " $args[0].Value.ToUpper() ntricate  $args[0].Value.ToUpper() eft  $args[0].Value.ToUpper() hest  $args[0].Value.ToUpper() ogo  $args[0].Value.ToUpper() igitizing  $args[0].Value.ToUpper() es",
    price: 8.00,
    category: "left-chest",
    image: "/images/left-chest-logo/intricate-left-chest-logo-digitizing-pes.webp",
    description: "High quality left chest logo digitizing ready for embroidery on polo shirts, uniforms, and jackets.",
  },
  {
    title: " $args[0].Value.ToUpper() orkwear  $args[0].Value.ToUpper() eft  $args[0].Value.ToUpper() hest  $args[0].Value.ToUpper() mbroidery  $args[0].Value.ToUpper() igitizing",
    price: 8.00,
    category: "left-chest",
    image: "/images/left-chest-logo/workwear-left-chest-embroidery-digitizing.webp",
    description: "High quality left chest logo digitizing ready for embroidery on polo shirts, uniforms, and jackets.",
  },
  {
    title: " $args[0].Value.ToUpper() ustom  $args[0].Value.ToUpper() rest  $args[0].Value.ToUpper() eft  $args[0].Value.ToUpper() hest  $args[0].Value.ToUpper() ogo  $args[0].Value.ToUpper() igitizing",
    price: 8.00,
    category: "left-chest",
    image: "/images/left-chest-logo/custom-crest-left-chest-logo-digitizing.webp",
    description: "High quality left chest logo digitizing ready for embroidery on polo shirts, uniforms, and jackets.",
  },
  {
    title: " $args[0].Value.ToUpper() estaurant  $args[0].Value.ToUpper() niform  $args[0].Value.ToUpper() eft  $args[0].Value.ToUpper() hest  $args[0].Value.ToUpper() mbroidery",
    price: 8.00,
    category: "left-chest",
    image: "/images/left-chest-logo/restaurant-uniform-left-chest-embroidery.webp",
    description: "High quality left chest logo digitizing ready for embroidery on polo shirts, uniforms, and jackets.",
  },
  {
    title: " $args[0].Value.ToUpper() etailed  $args[0].Value.ToUpper() eft  $args[0].Value.ToUpper() hest  $args[0].Value.ToUpper() ogo  $args[0].Value.ToUpper() mbroidery  $args[0].Value.ToUpper() igitizing",
    price: 8.00,
    category: "left-chest",
    image: "/images/left-chest-logo/detailed-left-chest-logo-embroidery-digitizing.webp",
    description: "High quality left chest logo digitizing ready for embroidery on polo shirts, uniforms, and jackets.",
  },
  {
    title: " $args[0].Value.ToUpper() acket  $args[0].Value.ToUpper() eft  $args[0].Value.ToUpper() hest  $args[0].Value.ToUpper() ogo  $args[0].Value.ToUpper() igitizing  $args[0].Value.ToUpper() st",
    price: 8.00,
    category: "left-chest",
    image: "/images/left-chest-logo/jacket-left-chest-logo-digitizing-dst.webp",
    description: "High quality left chest logo digitizing ready for embroidery on polo shirts, uniforms, and jackets.",
  },
  {
    title: " $args[0].Value.ToUpper() ustom  $args[0].Value.ToUpper() rand  $args[0].Value.ToUpper() eft  $args[0].Value.ToUpper() hest  $args[0].Value.ToUpper() mbroidery  $args[0].Value.ToUpper() igitizing",
    price: 8.00,
    category: "left-chest",
    image: "/images/left-chest-logo/custom-brand-left-chest-embroidery-digitizing.webp",
    description: "High quality left chest logo digitizing ready for embroidery on polo shirts, uniforms, and jackets.",
  },
  {
    title: " $args[0].Value.ToUpper() igh  $args[0].Value.ToUpper() uality  $args[0].Value.ToUpper() eft  $args[0].Value.ToUpper() hest  $args[0].Value.ToUpper() ogo  $args[0].Value.ToUpper() igitizing",
    price: 8.00,
    category: "left-chest",
    image: "/images/left-chest-logo/high-quality-left-chest-logo-digitizing.webp",
    description: "High quality left chest logo digitizing ready for embroidery on polo shirts, uniforms, and jackets.",
  },
  {
    title: " $args[0].Value.ToUpper() remium  $args[0].Value.ToUpper() eft  $args[0].Value.ToUpper() hest  $args[0].Value.ToUpper() mbroidery  $args[0].Value.ToUpper() igitizing  $args[0].Value.ToUpper() es",
    price: 8.00,
    category: "left-chest",
    image: "/images/left-chest-logo/premium-left-chest-embroidery-digitizing-pes.webp",
    description: "High quality left chest logo digitizing ready for embroidery on polo shirts, uniforms, and jackets.",
  },
  {
    title: " $args[0].Value.ToUpper() eft  $args[0].Value.ToUpper() hest  $args[0].Value.ToUpper() mblem  $args[0].Value.ToUpper() mbroidery  $args[0].Value.ToUpper() igitizing",
    price: 8.00,
    category: "left-chest",
    image: "/images/left-chest-logo/left-chest-emblem-embroidery-digitizing.webp",
    description: "High quality left chest logo digitizing ready for embroidery on polo shirts, uniforms, and jackets.",
  },
  {
    title: " $args[0].Value.ToUpper() romotional  $args[0].Value.ToUpper() ear  $args[0].Value.ToUpper() eft  $args[0].Value.ToUpper() hest  $args[0].Value.ToUpper() ogo  $args[0].Value.ToUpper() igitizing",
    price: 8.00,
    category: "left-chest",
    image: "/images/left-chest-logo/promotional-wear-left-chest-logo-digitizing.webp",
    description: "High quality left chest logo digitizing ready for embroidery on polo shirts, uniforms, and jackets.",
  },
  {
    title: " $args[0].Value.ToUpper() ustom  $args[0].Value.ToUpper() esign  $args[0].Value.ToUpper() eft  $args[0].Value.ToUpper() hest  $args[0].Value.ToUpper() mbroidery  $args[0].Value.ToUpper() igitizing",
    price: 8.00,
    category: "left-chest",
    image: "/images/left-chest-logo/custom-design-left-chest-embroidery-digitizing.webp",
    description: "High quality left chest logo digitizing ready for embroidery on polo shirts, uniforms, and jackets.",
  },
  {
    title: " $args[0].Value.ToUpper() eft  $args[0].Value.ToUpper() hest  $args[0].Value.ToUpper() ogo  $args[0].Value.ToUpper() igitizing  $args[0].Value.ToUpper() xpert  $args[0].Value.ToUpper() ervices",
    price: 8.00,
    category: "left-chest",
    image: "/images/left-chest-logo/left-chest-logo-digitizing-expert-services.webp",
    description: "High quality left chest logo digitizing ready for embroidery on polo shirts, uniforms, and jackets.",
  },
];
];

export const LEFT_CHEST_PRODUCTS: Product[] = RAW_LEFT_CHEST.map((p) => ({
  ...p,
  slug: slugify(p.title),
  formats: FORMATS,
}));
