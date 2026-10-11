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
    title: " $args[0].Value.ToUpper() lub  $args[0].Value.ToUpper() acket  $args[0].Value.ToUpper() ack  $args[0].Value.ToUpper() mbroidery  $args[0].Value.ToUpper() igitizing  $args[0].Value.ToUpper() st",
    price: 25,
    category: "jacket-back",
    image: "/images/jacket-back-design/club-jacket-back-embroidery-digitizing-dst.webp",
    description: "High detail jacket back digitizing. Perfect for denim, leather, and varsity jackets.",
  },
  {
    title: " $args[0].Value.ToUpper() ustom  $args[0].Value.ToUpper() ack  $args[0].Value.ToUpper() iece  $args[0].Value.ToUpper() mbroidery  $args[0].Value.ToUpper() igitizing",
    price: 18,
    category: "jacket-back",
    image: "/images/jacket-back-design/custom-back-piece-embroidery-digitizing.webp",
    description: "High detail jacket back digitizing. Perfect for denim, leather, and varsity jackets.",
  },
  {
    title: " $args[0].Value.ToUpper() ustom  $args[0].Value.ToUpper() iker  $args[0].Value.ToUpper() atch  $args[0].Value.ToUpper() acket  $args[0].Value.ToUpper() ack  $args[0].Value.ToUpper() igitizing",
    price: 20,
    category: "jacket-back",
    image: "/images/jacket-back-design/custom-biker-patch-jacket-back-digitizing.webp",
    description: "High detail jacket back digitizing. Perfect for denim, leather, and varsity jackets.",
  },
  {
    title: " $args[0].Value.ToUpper() ustom  $args[0].Value.ToUpper() acket  $args[0].Value.ToUpper() ack  $args[0].Value.ToUpper() igitizing  $args[0].Value.ToUpper() ervices  $args[0].Value.ToUpper() st",
    price: 18,
    category: "jacket-back",
    image: "/images/jacket-back-design/custom-jacket-back-digitizing-services-dst.webp",
    description: "High detail jacket back digitizing. Perfect for denim, leather, and varsity jackets.",
  },
  {
    title: " $args[0].Value.ToUpper() ustom  $args[0].Value.ToUpper() ogo  $args[0].Value.ToUpper() acket  $args[0].Value.ToUpper() ack  $args[0].Value.ToUpper() mbroidery  $args[0].Value.ToUpper() es",
    price: 25,
    category: "jacket-back",
    image: "/images/jacket-back-design/custom-logo-jacket-back-embroidery-pes.webp",
    description: "High detail jacket back digitizing. Perfect for denim, leather, and varsity jackets.",
  },
  {
    title: " $args[0].Value.ToUpper() ustom  $args[0].Value.ToUpper() otorcycle  $args[0].Value.ToUpper() acket  $args[0].Value.ToUpper() ack  $args[0].Value.ToUpper() igitizing  $args[0].Value.ToUpper() st",
    price: 22,
    category: "jacket-back",
    image: "/images/jacket-back-design/custom-motorcycle-jacket-back-digitizing-dst.webp",
    description: "High detail jacket back digitizing. Perfect for denim, leather, and varsity jackets.",
  },
  {
    title: " $args[0].Value.ToUpper() enim  $args[0].Value.ToUpper() acket  $args[0].Value.ToUpper() ull  $args[0].Value.ToUpper() ack  $args[0].Value.ToUpper() mbroidery  $args[0].Value.ToUpper() igitizing",
    price: 22,
    category: "jacket-back",
    image: "/images/jacket-back-design/denim-jacket-full-back-embroidery-digitizing.webp",
    description: "High detail jacket back digitizing. Perfect for denim, leather, and varsity jackets.",
  },
  {
    title: " $args[0].Value.ToUpper() etailed  $args[0].Value.ToUpper() acket  $args[0].Value.ToUpper() ack  $args[0].Value.ToUpper() mbroidery  $args[0].Value.ToUpper() igitizing",
    price: 15,
    category: "jacket-back",
    image: "/images/jacket-back-design/detailed-jacket-back-embroidery-digitizing.webp",
    description: "High detail jacket back digitizing. Perfect for denim, leather, and varsity jackets.",
  },
  {
    title: " $args[0].Value.ToUpper() ull  $args[0].Value.ToUpper() ize  $args[0].Value.ToUpper() acket  $args[0].Value.ToUpper() ack  $args[0].Value.ToUpper() mbroidery  $args[0].Value.ToUpper() igitizing",
    price: 18,
    category: "jacket-back",
    image: "/images/jacket-back-design/full-size-jacket-back-embroidery-digitizing.webp",
    description: "High detail jacket back digitizing. Perfect for denim, leather, and varsity jackets.",
  },
  {
    title: " $args[0].Value.ToUpper() igh  $args[0].Value.ToUpper() uality  $args[0].Value.ToUpper() acket  $args[0].Value.ToUpper() ack  $args[0].Value.ToUpper() igitizing  $args[0].Value.ToUpper() es",
    price: 22,
    category: "jacket-back",
    image: "/images/jacket-back-design/high-quality-jacket-back-digitizing-pes.webp",
    description: "High detail jacket back digitizing. Perfect for denim, leather, and varsity jackets.",
  },
  {
    title: " $args[0].Value.ToUpper() ntricate  $args[0].Value.ToUpper() ull  $args[0].Value.ToUpper() ack  $args[0].Value.ToUpper() acket  $args[0].Value.ToUpper() igitizing",
    price: 18,
    category: "jacket-back",
    image: "/images/jacket-back-design/intricate-full-back-jacket-digitizing.webp",
    description: "High detail jacket back digitizing. Perfect for denim, leather, and varsity jackets.",
  },
  {
    title: " $args[0].Value.ToUpper() acket  $args[0].Value.ToUpper() ack  $args[0].Value.ToUpper() atch  $args[0].Value.ToUpper() mbroidery  $args[0].Value.ToUpper() igitizing",
    price: 20,
    category: "jacket-back",
    image: "/images/jacket-back-design/jacket-back-patch-embroidery-digitizing.webp",
    description: "High detail jacket back digitizing. Perfect for denim, leather, and varsity jackets.",
  },
  {
    title: " $args[0].Value.ToUpper() arge  $args[0].Value.ToUpper() pparel  $args[0].Value.ToUpper() acket  $args[0].Value.ToUpper() ack  $args[0].Value.ToUpper() igitizing",
    price: 25,
    category: "jacket-back",
    image: "/images/jacket-back-design/large-apparel-jacket-back-digitizing.webp",
    description: "High detail jacket back digitizing. Perfect for denim, leather, and varsity jackets.",
  },
  {
    title: " $args[0].Value.ToUpper() arge  $args[0].Value.ToUpper() ormat  $args[0].Value.ToUpper() acket  $args[0].Value.ToUpper() ack  $args[0].Value.ToUpper() mbroidery  $args[0].Value.ToUpper() igitizing",
    price: 20,
    category: "jacket-back",
    image: "/images/jacket-back-design/large-format-jacket-back-embroidery-digitizing.webp",
    description: "High detail jacket back digitizing. Perfect for denim, leather, and varsity jackets.",
  },
  {
    title: " $args[0].Value.ToUpper() arge  $args[0].Value.ToUpper() cale  $args[0].Value.ToUpper() ack  $args[0].Value.ToUpper() atch  $args[0].Value.ToUpper() mbroidery  $args[0].Value.ToUpper() igitizing",
    price: 15,
    category: "jacket-back",
    image: "/images/jacket-back-design/large-scale-back-patch-embroidery-digitizing.webp",
    description: "High detail jacket back digitizing. Perfect for denim, leather, and varsity jackets.",
  },
  {
    title: " $args[0].Value.ToUpper() eather  $args[0].Value.ToUpper() omber  $args[0].Value.ToUpper() acket  $args[0].Value.ToUpper() ack  $args[0].Value.ToUpper() ogo  $args[0].Value.ToUpper() igitizing",
    price: 20,
    category: "jacket-back",
    image: "/images/jacket-back-design/leather-bomber-jacket-back-logo-digitizing.webp",
    description: "High detail jacket back digitizing. Perfect for denim, leather, and varsity jackets.",
  },
  {
    title: " $args[0].Value.ToUpper() remium  $args[0].Value.ToUpper() acket  $args[0].Value.ToUpper() ack  $args[0].Value.ToUpper() mbroidery  $args[0].Value.ToUpper() igitizing  $args[0].Value.ToUpper() es",
    price: 22,
    category: "jacket-back",
    image: "/images/jacket-back-design/premium-jacket-back-embroidery-digitizing-pes.webp",
    description: "High detail jacket back digitizing. Perfect for denim, leather, and varsity jackets.",
  },
  {
    title: " $args[0].Value.ToUpper() ports  $args[0].Value.ToUpper() acket  $args[0].Value.ToUpper() ack  $args[0].Value.ToUpper() mbroidery  $args[0].Value.ToUpper() igitizing",
    price: 25,
    category: "jacket-back",
    image: "/images/jacket-back-design/sports-jacket-back-embroidery-digitizing.webp",
    description: "High detail jacket back digitizing. Perfect for denim, leather, and varsity jackets.",
  },
  {
    title: " $args[0].Value.ToUpper() arsity  $args[0].Value.ToUpper() acket  $args[0].Value.ToUpper() ack  $args[0].Value.ToUpper() mbroidery  $args[0].Value.ToUpper() igitizing",
    price: 20,
    category: "jacket-back",
    image: "/images/jacket-back-design/varsity-jacket-back-embroidery-digitizing.webp",
    description: "High detail jacket back digitizing. Perfect for denim, leather, and varsity jackets.",
  },
];
];

export const JACKET_BACK_PRODUCTS: Product[] = RAW_JACKET_BACK.map((p) => ({
  ...p,
  slug: slugify(p.title),
  formats: FORMATS,
}));
