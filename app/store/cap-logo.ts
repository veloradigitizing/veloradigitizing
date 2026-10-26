import { Product } from './products';

const FORMATS = ["DST", "PES", "EXP", "JEF", "VP3"];

function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/**
 * Every entry below maps 1:1 to a real file in public/images/cap-logo so the
 * product page, share image and Product schema never point at a 404.
 * Slugs for the 19 earlier entries whose images never existed are redirected
 * to /store in next.config.ts (see LEGACY_STORE_SLUGS).
 */
const RAW_CAP_LOGO: Array<Omit<Product, "slug" | "formats">> = [
  {
    title: "Baseball Cap Front Embroidery Digitizing",
    price: 7.00,
    category: "cap-logo",
    image: "/images/cap-logo/baseball-cap-front-embroidery-digitizing.webp",
    description: "Front-panel baseball cap logo digitized with center-out sequencing and seam-bridge underlay for structured 6-panel crowns.",
  },
  {
    title: "Beanie Hat Embroidery Digitizing",
    price: 7.00,
    category: "cap-logo",
    image: "/images/cap-logo/beanie-hat-embroidery-digitizing-services.webp",
    description: "Knit beanie logo digitized with a heavy grid underlay so lettering stays on top of ribbed and chunky knit fabric.",
  },
  {
    title: "Corporate Headwear Embroidery Digitizing",
    price: 7.00,
    category: "cap-logo",
    image: "/images/cap-logo/corporate-headwear-embroidery-digitizing.webp",
    description: "Corporate logo digitized for uniform caps and visors with small-text satin lettering sized for curved cap frames.",
  },
  {
    title: "Custom 3D Puff Cap Embroidery Digitizing",
    price: 7.00,
    category: "cap-logo",
    image: "/images/cap-logo/custom-3d-puff-cap-embroidery-digitizing.webp",
    description: "3D puff cap logo with programmed foam stops, capped satin columns and 0.30 mm density calibrated for 2 mm EVA foam.",
  },
  {
    title: "Custom Hat Patch Embroidery Digitizing",
    price: 7.00,
    category: "cap-logo",
    image: "/images/cap-logo/custom-hat-patch-embroidery-digitizing.webp",
    description: "Patch-style hat emblem digitized with a satin border so it can be sewn as a cut patch or stitched directly onto the cap front.",
  },
  {
    title: "Custom Headwear Cap Logo Embroidery Digitizing DST",
    price: 7.00,
    category: "cap-logo",
    image: "/images/cap-logo/custom-headwear-cap-logo-embroidery-digitizing-dst.webp",
    description: "Custom cap logo delivered as a DST-first file for commercial Tajima and Barudan cap frames, with all home formats included.",
  },
  {
    title: "Flat Embroidery Cap Logo Digitizing",
    price: 7.00,
    category: "cap-logo",
    image: "/images/cap-logo/flat-embroidery-cap-logo-digitizing.webp",
    description: "Flat (non-puff) cap logo digitized with bottom-up stitch order and pull compensation tuned for twill fronts.",
  },
  {
    title: "Premium Cap Embroidery Digitizing DST",
    price: 7.00,
    category: "cap-logo",
    image: "/images/cap-logo/premium-cap-embroidery-digitizing-dst.webp",
    description: "Detailed multi-colour cap logo with optimised trims and jump counts to shorten commercial run times on multi-head machines.",
  },
  {
    title: "Raised 3D Puff Embroidery Hat Logo",
    price: 7.00,
    category: "cap-logo",
    image: "/images/cap-logo/raised-3d-puff-embroidery-hat-logo.webp",
    description: "Bold raised lettering digitized for foam with flat base elements sequenced first and perpendicular end-caps that seal the foam edges.",
  },
  {
    title: "Snapback Hat Logo Digitizing DST PES",
    price: 7.00,
    category: "cap-logo",
    image: "/images/cap-logo/snapback-hat-logo-digitizing-dst-pes.webp",
    description: "Snapback front logo digitized within the 2.25 inch cap height limit, supplied in DST and PES plus EXP, JEF and VP3.",
  },
  {
    title: "Sports Team Cap Logo Digitizing Service",
    price: 7.00,
    category: "cap-logo",
    image: "/images/cap-logo/sports-team-cap-logo-digitizing-service.webp",
    description: "Team mascot and initials digitized for game-day caps with clean registration between satin outlines and interior fills.",
  },
  {
    title: "Sports Team Cap Logo Embroidery Digitizing DST",
    price: 7.00,
    category: "cap-logo",
    image: "/images/cap-logo/sports-team-cap-logo-embroidery-digitizing-dst.webp",
    description: "Athletic team crest digitized for structured caps, with lettering kept above 4 mm so it stays legible on buckram fronts.",
  },
  {
    title: "Structured Cap Center-Out Digitizing",
    price: 7.00,
    category: "cap-logo",
    image: "/images/cap-logo/structured-cap-center-out-digitizing.webp",
    description: "Center-out, bottom-up cap file that pushes fabric away from the center seam to stop bunching on stiff structured crowns.",
  },
  {
    title: "Trucker Hat Custom Logo Digitizing",
    price: 7.00,
    category: "cap-logo",
    image: "/images/cap-logo/trucker-hat-custom-logo-digitizing.webp",
    description: "Trucker hat front logo digitized for foam-front mesh caps, with density set for the firm foam panel behind the fabric.",
  },
  {
    title: "Unstructured Dad Hat Embroidery Digitizing",
    price: 7.00,
    category: "cap-logo",
    image: "/images/cap-logo/unstructured-dad-hat-embroidery-digitizing.webp",
    description: "Soft dad hat logo kept under 2 inches tall with lighter density and softer pull compensation for flexible washed-cotton crowns.",
  },
];

export const CAP_LOGO_PRODUCTS: Product[] = RAW_CAP_LOGO.map((p) => ({
  ...p,
  slug: slugify(p.title),
  formats: FORMATS,
}));
