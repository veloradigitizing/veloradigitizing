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
    title: "3d  $args[0].Value.ToUpper() uff  $args[0].Value.ToUpper() ap  $args[0].Value.ToUpper() ogo  $args[0].Value.ToUpper() mbroidery  $args[0].Value.ToUpper() igitizing  $args[0].Value.ToUpper() es",
    price: 7.00,
    category: "cap-logo",
    image: "/images/cap-logo/3d-puff-cap-logo-embroidery-digitizing-pes.webp",
    description: "High quality cap logo digitizing ready for embroidery on dad hats, snapbacks, and fitted caps.",
  },
  {
    title: " $args[0].Value.ToUpper() aseball  $args[0].Value.ToUpper() ap  $args[0].Value.ToUpper() ogo  $args[0].Value.ToUpper() mbroidery  $args[0].Value.ToUpper() igitizing  $args[0].Value.ToUpper() st",
    price: 7.00,
    category: "cap-logo",
    image: "/images/cap-logo/baseball-cap-logo-embroidery-digitizing-dst.webp",
    description: "High quality cap logo digitizing ready for embroidery on dad hats, snapbacks, and fitted caps.",
  },
  {
    title: " $args[0].Value.ToUpper() lassic  $args[0].Value.ToUpper() ap  $args[0].Value.ToUpper() ogo  $args[0].Value.ToUpper() igitizing  $args[0].Value.ToUpper() ervices",
    price: 7.00,
    category: "cap-logo",
    image: "/images/cap-logo/classic-cap-logo-digitizing-services.webp",
    description: "High quality cap logo digitizing ready for embroidery on dad hats, snapbacks, and fitted caps.",
  },
  {
    title: " $args[0].Value.ToUpper() orporate  $args[0].Value.ToUpper() ap  $args[0].Value.ToUpper() ogo  $args[0].Value.ToUpper() mbroidery  $args[0].Value.ToUpper() igitizing",
    price: 7.00,
    category: "cap-logo",
    image: "/images/cap-logo/corporate-cap-logo-embroidery-digitizing.webp",
    description: "High quality cap logo digitizing ready for embroidery on dad hats, snapbacks, and fitted caps.",
  },
  {
    title: " $args[0].Value.ToUpper() ustom  $args[0].Value.ToUpper() usiness  $args[0].Value.ToUpper() ap  $args[0].Value.ToUpper() ogo  $args[0].Value.ToUpper() igitizing  $args[0].Value.ToUpper() st",
    price: 7.00,
    category: "cap-logo",
    image: "/images/cap-logo/custom-business-cap-logo-digitizing-dst.webp",
    description: "High quality cap logo digitizing ready for embroidery on dad hats, snapbacks, and fitted caps.",
  },
  {
    title: " $args[0].Value.ToUpper() ustom  $args[0].Value.ToUpper() ap  $args[0].Value.ToUpper() ogo  $args[0].Value.ToUpper() mbroidery  $args[0].Value.ToUpper() igitizing",
    price: 7.00,
    category: "cap-logo",
    image: "/images/cap-logo/custom-cap-logo-embroidery-digitizing.webp",
    description: "High quality cap logo digitizing ready for embroidery on dad hats, snapbacks, and fitted caps.",
  },
  {
    title: " $args[0].Value.ToUpper() ustom  $args[0].Value.ToUpper() ad  $args[0].Value.ToUpper() at  $args[0].Value.ToUpper() ogo  $args[0].Value.ToUpper() igitizing  $args[0].Value.ToUpper() es",
    price: 7.00,
    category: "cap-logo",
    image: "/images/cap-logo/custom-dad-hat-logo-digitizing-pes.webp",
    description: "High quality cap logo digitizing ready for embroidery on dad hats, snapbacks, and fitted caps.",
  },
  {
    title: " $args[0].Value.ToUpper() etailed  $args[0].Value.ToUpper() ap  $args[0].Value.ToUpper() ogo  $args[0].Value.ToUpper() mbroidery  $args[0].Value.ToUpper() igitizing",
    price: 7.00,
    category: "cap-logo",
    image: "/images/cap-logo/detailed-cap-logo-embroidery-digitizing.webp",
    description: "High quality cap logo digitizing ready for embroidery on dad hats, snapbacks, and fitted caps.",
  },
  {
    title: " $args[0].Value.ToUpper() itted  $args[0].Value.ToUpper() ap  $args[0].Value.ToUpper() ogo  $args[0].Value.ToUpper() mbroidery  $args[0].Value.ToUpper() igitizing",
    price: 7.00,
    category: "cap-logo",
    image: "/images/cap-logo/fitted-cap-logo-embroidery-digitizing.webp",
    description: "High quality cap logo digitizing ready for embroidery on dad hats, snapbacks, and fitted caps.",
  },
  {
    title: " $args[0].Value.ToUpper() lat  $args[0].Value.ToUpper() rim  $args[0].Value.ToUpper() ap  $args[0].Value.ToUpper() ogo  $args[0].Value.ToUpper() igitizing  $args[0].Value.ToUpper() st",
    price: 7.00,
    category: "cap-logo",
    image: "/images/cap-logo/flat-brim-cap-logo-digitizing-dst.webp",
    description: "High quality cap logo digitizing ready for embroidery on dad hats, snapbacks, and fitted caps.",
  },
  {
    title: " $args[0].Value.ToUpper() ront  $args[0].Value.ToUpper() anel  $args[0].Value.ToUpper() ap  $args[0].Value.ToUpper() ogo  $args[0].Value.ToUpper() mbroidery  $args[0].Value.ToUpper() igitizing",
    price: 7.00,
    category: "cap-logo",
    image: "/images/cap-logo/front-panel-cap-logo-embroidery-digitizing.webp",
    description: "High quality cap logo digitizing ready for embroidery on dad hats, snapbacks, and fitted caps.",
  },
  {
    title: " $args[0].Value.ToUpper() igh  $args[0].Value.ToUpper() uality  $args[0].Value.ToUpper() ap  $args[0].Value.ToUpper() ogo  $args[0].Value.ToUpper() igitizing  $args[0].Value.ToUpper() ervices",
    price: 7.00,
    category: "cap-logo",
    image: "/images/cap-logo/high-quality-cap-logo-digitizing-services.webp",
    description: "High quality cap logo digitizing ready for embroidery on dad hats, snapbacks, and fitted caps.",
  },
  {
    title: " $args[0].Value.ToUpper() ntricate  $args[0].Value.ToUpper() ap  $args[0].Value.ToUpper() ogo  $args[0].Value.ToUpper() mbroidery  $args[0].Value.ToUpper() igitizing",
    price: 7.00,
    category: "cap-logo",
    image: "/images/cap-logo/intricate-cap-logo-embroidery-digitizing.webp",
    description: "High quality cap logo digitizing ready for embroidery on dad hats, snapbacks, and fitted caps.",
  },
  {
    title: " $args[0].Value.ToUpper() remium  $args[0].Value.ToUpper() ap  $args[0].Value.ToUpper() ogo  $args[0].Value.ToUpper() mbroidery  $args[0].Value.ToUpper() igitizing",
    price: 7.00,
    category: "cap-logo",
    image: "/images/cap-logo/premium-cap-logo-embroidery-digitizing.webp",
    description: "High quality cap logo digitizing ready for embroidery on dad hats, snapbacks, and fitted caps.",
  },
  {
    title: " $args[0].Value.ToUpper() mall  $args[0].Value.ToUpper() ext  $args[0].Value.ToUpper() ap  $args[0].Value.ToUpper() ogo  $args[0].Value.ToUpper() igitizing  $args[0].Value.ToUpper() es",
    price: 7.00,
    category: "cap-logo",
    image: "/images/cap-logo/small-text-cap-logo-digitizing-pes.webp",
    description: "High quality cap logo digitizing ready for embroidery on dad hats, snapbacks, and fitted caps.",
  },
  {
    title: " $args[0].Value.ToUpper() napback  $args[0].Value.ToUpper() ap  $args[0].Value.ToUpper() ogo  $args[0].Value.ToUpper() mbroidery  $args[0].Value.ToUpper() igitizing",
    price: 7.00,
    category: "cap-logo",
    image: "/images/cap-logo/snapback-cap-logo-embroidery-digitizing.webp",
    description: "High quality cap logo digitizing ready for embroidery on dad hats, snapbacks, and fitted caps.",
  },
  {
    title: " $args[0].Value.ToUpper() ports  $args[0].Value.ToUpper() eam  $args[0].Value.ToUpper() ap  $args[0].Value.ToUpper() ogo  $args[0].Value.ToUpper() igitizing  $args[0].Value.ToUpper() st",
    price: 7.00,
    category: "cap-logo",
    image: "/images/cap-logo/sports-team-cap-logo-digitizing-dst.webp",
    description: "High quality cap logo digitizing ready for embroidery on dad hats, snapbacks, and fitted caps.",
  },
  {
    title: " $args[0].Value.ToUpper() rucker  $args[0].Value.ToUpper() ap  $args[0].Value.ToUpper() ogo  $args[0].Value.ToUpper() mbroidery  $args[0].Value.ToUpper() igitizing",
    price: 7.00,
    category: "cap-logo",
    image: "/images/cap-logo/trucker-cap-logo-embroidery-digitizing.webp",
    description: "High quality cap logo digitizing ready for embroidery on dad hats, snapbacks, and fitted caps.",
  },
  {
    title: " $args[0].Value.ToUpper() ector  $args[0].Value.ToUpper() o  $args[0].Value.ToUpper() ap  $args[0].Value.ToUpper() ogo  $args[0].Value.ToUpper() mbroidery  $args[0].Value.ToUpper() igitizing",
    price: 7.00,
    category: "cap-logo",
    image: "/images/cap-logo/vector-to-cap-logo-embroidery-digitizing.webp",
    description: "High quality cap logo digitizing ready for embroidery on dad hats, snapbacks, and fitted caps.",
  },
];
];

export const CAP_LOGO_PRODUCTS: Product[] = RAW_CAP_LOGO.map((p) => ({
  ...p,
  slug: slugify(p.title),
  formats: FORMATS,
}));
