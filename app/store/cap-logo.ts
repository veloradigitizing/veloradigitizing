import { Product } from './products';

const FORMATS = ["DST", "PES", "EXP", "JEF", "VP3"];

function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const RAW_CAP_LOGO: Array<Omit<Product, "slug" | "formats">> = [
  {
    title: "3D Puff Cap Logo Embroidery Digitizing PES",
    price: 7.00,
    category: "cap-logo",
    image: "/images/cap-logo/3d-puff-cap-logo-embroidery-digitizing-pes.webp",
    description: "High quality cap logo digitizing ready for embroidery on dad hats, snapbacks, and fitted caps.",
  },
  {
    title: "Baseball Cap Logo Embroidery Digitizing DST",
    price: 7.00,
    category: "cap-logo",
    image: "/images/cap-logo/baseball-cap-logo-embroidery-digitizing-dst.webp",
    description: "High quality cap logo digitizing ready for embroidery on dad hats, snapbacks, and fitted caps.",
  },
  {
    title: "Classic Cap Logo Digitizing Services",
    price: 7.00,
    category: "cap-logo",
    image: "/images/cap-logo/classic-cap-logo-digitizing-services.webp",
    description: "High quality cap logo digitizing ready for embroidery on dad hats, snapbacks, and fitted caps.",
  },
  {
    title: "Corporate Cap Logo Embroidery Digitizing",
    price: 7.00,
    category: "cap-logo",
    image: "/images/cap-logo/corporate-cap-logo-embroidery-digitizing.webp",
    description: "High quality cap logo digitizing ready for embroidery on dad hats, snapbacks, and fitted caps.",
  },
  {
    title: "Custom Business Cap Logo Digitizing DST",
    price: 7.00,
    category: "cap-logo",
    image: "/images/cap-logo/custom-business-cap-logo-digitizing-dst.webp",
    description: "High quality cap logo digitizing ready for embroidery on dad hats, snapbacks, and fitted caps.",
  },
  {
    title: "Custom Cap Logo Embroidery Digitizing",
    price: 7.00,
    category: "cap-logo",
    image: "/images/cap-logo/custom-cap-logo-embroidery-digitizing.webp",
    description: "High quality cap logo digitizing ready for embroidery on dad hats, snapbacks, and fitted caps.",
  },
  {
    title: "Custom Dad Hat Logo Digitizing PES",
    price: 7.00,
    category: "cap-logo",
    image: "/images/cap-logo/custom-dad-hat-logo-digitizing-pes.webp",
    description: "High quality cap logo digitizing ready for embroidery on dad hats, snapbacks, and fitted caps.",
  },
  {
    title: "Detailed Cap Logo Embroidery Digitizing",
    price: 7.00,
    category: "cap-logo",
    image: "/images/cap-logo/detailed-cap-logo-embroidery-digitizing.webp",
    description: "High quality cap logo digitizing ready for embroidery on dad hats, snapbacks, and fitted caps.",
  },
  {
    title: "Fitted Cap Logo Embroidery Digitizing",
    price: 7.00,
    category: "cap-logo",
    image: "/images/cap-logo/fitted-cap-logo-embroidery-digitizing.webp",
    description: "High quality cap logo digitizing ready for embroidery on dad hats, snapbacks, and fitted caps.",
  },
  {
    title: "Flat Brim Cap Logo Digitizing DST",
    price: 7.00,
    category: "cap-logo",
    image: "/images/cap-logo/flat-brim-cap-logo-digitizing-dst.webp",
    description: "High quality cap logo digitizing ready for embroidery on dad hats, snapbacks, and fitted caps.",
  },
  {
    title: "Front Panel Cap Logo Embroidery Digitizing",
    price: 7.00,
    category: "cap-logo",
    image: "/images/cap-logo/front-panel-cap-logo-embroidery-digitizing.webp",
    description: "High quality cap logo digitizing ready for embroidery on dad hats, snapbacks, and fitted caps.",
  },
  {
    title: "High Quality Cap Logo Digitizing Services",
    price: 7.00,
    category: "cap-logo",
    image: "/images/cap-logo/high-quality-cap-logo-digitizing-services.webp",
    description: "High quality cap logo digitizing ready for embroidery on dad hats, snapbacks, and fitted caps.",
  },
  {
    title: "Intricate Cap Logo Embroidery Digitizing",
    price: 7.00,
    category: "cap-logo",
    image: "/images/cap-logo/intricate-cap-logo-embroidery-digitizing.webp",
    description: "High quality cap logo digitizing ready for embroidery on dad hats, snapbacks, and fitted caps.",
  },
  {
    title: "Premium Cap Logo Embroidery Digitizing",
    price: 7.00,
    category: "cap-logo",
    image: "/images/cap-logo/premium-cap-logo-embroidery-digitizing.webp",
    description: "High quality cap logo digitizing ready for embroidery on dad hats, snapbacks, and fitted caps.",
  },
  {
    title: "Small Text Cap Logo Digitizing PES",
    price: 7.00,
    category: "cap-logo",
    image: "/images/cap-logo/small-text-cap-logo-digitizing-pes.webp",
    description: "High quality cap logo digitizing ready for embroidery on dad hats, snapbacks, and fitted caps.",
  },
  {
    title: "Snapback Cap Logo Embroidery Digitizing",
    price: 7.00,
    category: "cap-logo",
    image: "/images/cap-logo/snapback-cap-logo-embroidery-digitizing.webp",
    description: "High quality cap logo digitizing ready for embroidery on dad hats, snapbacks, and fitted caps.",
  },
  {
    title: "Sports Team Cap Logo Digitizing DST",
    price: 7.00,
    category: "cap-logo",
    image: "/images/cap-logo/sports-team-cap-logo-digitizing-dst.webp",
    description: "High quality cap logo digitizing ready for embroidery on dad hats, snapbacks, and fitted caps.",
  },
  {
    title: "Trucker Cap Logo Embroidery Digitizing",
    price: 7.00,
    category: "cap-logo",
    image: "/images/cap-logo/trucker-cap-logo-embroidery-digitizing.webp",
    description: "High quality cap logo digitizing ready for embroidery on dad hats, snapbacks, and fitted caps.",
  },
  {
    title: "Vector To Cap Logo Embroidery Digitizing",
    price: 7.00,
    category: "cap-logo",
    image: "/images/cap-logo/vector-to-cap-logo-embroidery-digitizing.webp",
    description: "High quality cap logo digitizing ready for embroidery on dad hats, snapbacks, and fitted caps.",
  },
];

export const CAP_LOGO_PRODUCTS: Product[] = RAW_CAP_LOGO.map((p) => ({
  ...p,
  slug: slugify(p.title),
  formats: FORMATS,
}));
