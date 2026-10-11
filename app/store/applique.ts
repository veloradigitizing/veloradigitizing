import { Product } from './products';

const FORMATS = ["DST", "PES", "EXP", "JEF", "VP3"];

function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const RAW_APPLIQUE: Array<Omit<Product, "slug" | "formats">> = [
  {
    title: "Applique A Design",
    price: 6.00,
    category: "applique",
    image: "/images/applique-design/varsity-letter-a-applique-embroidery-digitizing-dst.webp",
    description: "Varsity letter A applique embroidery digitizing file. Perfect for jackets and sports apparel.",
  },
  {
    title: "Cougars Applique",
    price: 6.00,
    category: "applique",
    image: "/images/applique-design/cougars-sports-team-applique-embroidery-digitizing-dst.webp",
    description: "Cougars sports team mascot applique embroidery digitizing file.",
  },
];

export const APPLIQUE_PRODUCTS: Product[] = RAW_APPLIQUE.map((p) => ({
  ...p,
  slug: slugify(p.title),
  formats: FORMATS,
}));
