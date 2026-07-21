export type Product = {
  slug: string;
  title: string;
  price: number;
  category: string;
  image: string;
  formats: string[];
  description: string;
};

const FORMATS = ["DST", "PES", "EXP", "JEF", "VP3"];

const RAW_PRODUCTS: Array<Omit<Product, "slug" | "formats">> = [
  {
    title: "Tiger Head Embroidery Digitizing File",
    price: 8.99,
    category: "digitizing-files",
    image: "/images/store/prod-01.webp",
    description:
      "A bold, high-detail tiger head design digitized for clean, consistent stitching on caps, jackets, and patches. Stitch density is tuned to keep the fine facial detail crisp even at smaller hoop sizes.",
  },
  {
    title: "LA Cap Logo Embroidery Digitizing File",
    price: 6.99,
    category: "digitizing-files",
    image: "/images/store/prod-02.webp",
    description:
      "A clean, flat-rate cap logo digitized specifically for structured cap fronts. Underlay and pull compensation are set for curved cap embroidery machines.",
  },
  {
    title: "Skull Patch Embroidery Digitizing File",
    price: 9.99,
    category: "digitizing-files",
    image: "/images/store/prod-03.webp",
    description:
      "A detailed skull patch design digitized with dense satin outlining, ideal for iron-on and sew-on patches on jackets and bags.",
  },
  {
    title: "Nike Logo Embroidery Digitizing File",
    price: 6.99,
    category: "digitizing-files",
    image: "/images/store/prod-04.webp",
    description:
      "A simple, precise swoosh digitized with smooth satin stitching for a crisp finish on shirts, hoodies, and caps.",
  },
  {
    title: "Bear Embroidery Digitizing File",
    price: 7.99,
    category: "digitizing-files",
    image: "/images/store/prod-05.webp",
    description:
      "A friendly bear illustration digitized with balanced fill and satin stitching, well suited to kidswear and outdoor apparel.",
  },
  {
    title: "3D Puff Embroidery Digitizing File",
    price: 12.99,
    category: "add-ons",
    image: "/images/store/prod-06.webp",
    description:
      "A 3D puff foam-ready digitizing file with wide satin columns and reinforced underlay, built for raised, dimensional cap embroidery.",
  },
  {
    title: "Applique Letter Embroidery Digitizing File",
    price: 7.99,
    category: "digitizing-files",
    image: "/images/store/prod-07.webp",
    description:
      "A full applique letter set digitized with placement, tackdown, and satin border stitches for fast fabric-applique lettering.",
  },
  {
    title: "NY Logo Embroidery Digitizing File",
    price: 6.99,
    category: "digitizing-files",
    image: "/images/store/prod-08.webp",
    description:
      "A classic interlocking monogram digitized with tight, even satin stitching for a sharp, professional cap or shirt finish.",
  },
  {
    title: "Bull Head Embroidery Digitizing File",
    price: 8.99,
    category: "digitizing-files",
    image: "/images/store/prod-09.webp",
    description:
      "A striking bull head design digitized with layered fill and satin detailing to keep horns and texture defined at production speed.",
  },
  {
    title: "College Logo Embroidery Digitizing File",
    price: 6.99,
    category: "digitizing-files",
    image: "/images/store/prod-10.webp",
    description:
      "A collegiate-style wordmark and crest digitized with clean block lettering, ready for varsity jackets and team apparel.",
  },
];

function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const PRODUCTS: Product[] = RAW_PRODUCTS.map((p) => ({
  ...p,
  slug: slugify(p.title),
  formats: FORMATS,
}));

export function getProductBySlug(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}

export const CATEGORY_LABELS: Record<string, string> = {
  "digitizing-files": "Digitizing Files",
  "add-ons": "Add-Ons",
  "design-templates": "Design Templates",
  "thread-charts": "Thread Charts",
  "software-tools": "Software & Tools",
};
