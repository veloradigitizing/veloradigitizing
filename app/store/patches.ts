export type Patch = {
  slug: string;
  title: string;
  price: number;
  category: string;
  image: string;
  formats: string[];
  description: string;
  size: string;
  stitchCount: string;
};

const FORMATS = ["DST", "PES", "EXP", "JEF", "VP3", "XXX"];

const RAW_PATCHES: Array<Omit<Patch, "slug" | "formats">> = [
  // === PATCHES FOLDER (Circular Text Patches) ===
  {
    title: "Hike More Worry Less",
    price: 2.99,
    originalPrice: 4.00,
    category: "adventure",
    image: "/images/patches/HikeMorePatch.jpeg",
    description: "Circular outdoor adventure patch featuring hiker silhouette against mountain backdrop. Perfect for backpacks and outdoor gear.",
    size: "4x4 inch",
    stitchCount: "15,000"
  },
  {
    title: "Wild Adventure Patch",
    price: 2.99,
    originalPrice: 4.00,
    category: "adventure",
    image: "/images/patches/WildPatch.jpeg",
    description: "Bold wilderness themed patch with nature-inspired design. Ideal for camping and hiking enthusiasts.",
    size: "3.5x3.5 inch",
    stitchCount: "12,000"
  },
  {
    title: "Stay Wild Patch",
    price: 2.99,
    originalPrice: 4.00,
    category: "adventure",
    image: "/images/patches/StayWIldPatch.jpeg",
    description: "Inspirational stay wild patch with adventurous spirit theme. Great for jackets and caps.",
    size: "3x3 inch",
    stitchCount: "10,000"
  },
  {
    title: "Explore The Path",
    price: 2.99,
    originalPrice: 4.00,
    category: "adventure",
    image: "/images/patches/ExplorePatch.jpeg",
    description: "Exploration themed patch encouraging adventure and discovery. Perfect for travel gear.",
    size: "3.5x3.5 inch",
    stitchCount: "14,000"
  },
  {
    title: "Find Your Path Patch",
    price: 2.99,
    originalPrice: 4.00,
    category: "adventure",
    image: "/images/patches/FindYourPathPatch.jpeg",
    description: "Motivational path-finding patch with compass theme. Great for adventurers.",
    size: "3x3 inch",
    stitchCount: "9,000"
  },
  {
    title: "Happy Place Patch",
    price: 2.99,
    originalPrice: 4.00,
    category: "lifestyle",
    image: "/images/patches/HappyPlacePatch.jpeg",
    description: "Cheerful happy place themed patch with positive vibes. Great for casual wear.",
    size: "3.5x3.5 inch",
    stitchCount: "13,000"
  },
  {
    title: "Keep It Simple Patch",
    price: 2.99,
    originalPrice: 4.00,
    category: "lifestyle",
    image: "/images/patches/KeepItSimplePatch.jpeg",
    description: "Minimalist text patch with clean typography. Modern design for everyday wear.",
    size: "3x2 inch",
    stitchCount: "6,000"
  },
  {
    title: "Life Is Better Patch",
    price: 2.99,
    originalPrice: 4.00,
    category: "lifestyle",
    image: "/images/patches/LifeIsBetterPatch.jpeg",
    description: "Inspirational life quote patch with cheerful message. Uplifting design.",
    size: "4x2 inch",
    stitchCount: "9,000"
  },
  {
    title: "Chase The Sun Patch",
    price: 2.99,
    originalPrice: 4.00,
    category: "lifestyle",
    image: "/images/patches/ChaseTheSunPatch.jpeg",
    description: "Sunny optimistic patch encouraging you to chase your dreams. Bright design.",
    size: "3x3 inch",
    stitchCount: "8,000"
  },
  {
    title: "Adventure Awaits Patch",
    price: 2.99,
    originalPrice: 4.00,
    category: "adventure",
    image: "/images/patches/AdventurePatch.jpeg",
    description: "Bold adventure awaits patch for thrill seekers and explorers.",
    size: "4x4 inch",
    stitchCount: "16,000"
  },

  // === CUSTOM PATCHES FOLDER (Unique Designs) ===
  {
    title: "Dad By Day Gamer By Night",
    price: 2.99,
    originalPrice: 4.00,
    category: "gaming",
    image: "/images/custom-patches/DadByDay.jpeg",
    description: "Fun gaming dad patch with controller graphic and retro styling. Great for gamer dads.",
    size: "4x4 inch",
    stitchCount: "18,000"
  },
  {
    title: "Endeavour Patch",
    price: 2.99,
    originalPrice: 4.00,
    category: "motivational",
    image: "/images/custom-patches/Endeavour.jpeg",
    description: "Endeavour motivational patch with bold lettering. Inspiring design for achievers.",
    size: "3.5x2.5 inch",
    stitchCount: "11,000"
  },
  {
    title: "Gumshoe Detective Patch",
    price: 2.99,
    originalPrice: 4.00,
    category: "fun",
    image: "/images/custom-patches/Gumshoe.jpeg",
    description: "Playful detective-themed gumshoe patch with mystery vibe.",
    size: "3x3 inch",
    stitchCount: "10,000"
  },
  {
    title: "Home Of Hustle Patch",
    price: 2.99,
    originalPrice: 4.00,
    category: "motivational",
    image: "/images/custom-patches/HomeOfHustle.jpeg",
    description: "Motivational hustle culture patch with bold typography. Perfect for workwear.",
    size: "3.5x2.5 inch",
    stitchCount: "12,000"
  },
  {
    title: "Love Heart Patch",
    price: 2.99,
    originalPrice: 4.00,
    category: "lifestyle",
    image: "/images/custom-patches/LovePatch.jpeg",
    description: "Elegant love-themed patch with heart motif. Romantic design for couples apparel.",
    size: "3x3 inch",
    stitchCount: "8,000"
  },
  {
    title: "Mentally Strong Patch",
    price: 2.99,
    originalPrice: 4.00,
    category: "motivational",
    image: "/images/custom-patches/Mentally.jpeg",
    description: "Powerful mental strength patch with inspiring message. Build resilience.",
    size: "4x3 inch",
    stitchCount: "20,000"
  },
  {
    title: "Paranormal Patch",
    price: 2.99,
    originalPrice: 4.00,
    category: "fun",
    image: "/images/custom-patches/Paranormal.jpeg",
    description: "Spooky paranormal themed patch for supernatural fans. Mysterious design.",
    size: "3.5x3.5 inch",
    stitchCount: "14,000"
  },
  {
    title: "People Safety Patch",
    price: 2.99,
    originalPrice: 4.00,
    category: "community",
    image: "/images/custom-patches/PeopleSafety.jpeg",
    description: "Community safety awareness patch with protective message.",
    size: "3x3 inch",
    stitchCount: "11,000"
  },
  {
    title: "Search Rescan Patch",
    price: 2.99,
    originalPrice: 4.00,
    category: "gaming",
       image: "/images/custom-patches/SearchRescan.jpeg",
    description: "Gaming-inspired search rescan action patch for gamers.",
    size: "3.5x2.5 inch",
    stitchCount: "13,000"
  },
  {
    title: "Veracruz Patch",
    price: 2.99,
    originalPrice: 4.00,
    category: "travel",
    image: "/images/custom-patches/Veracruz.jpeg",
    description: "Veracruz Mexico travel souvenir patch with cultural design.",
    size: "4x4 inch",
    stitchCount: "17,000"
  },
  {
    title: "Wild Spirit Patch",
    price: 2.99,
    originalPrice: 4.00,
    category: "adventure",
    image: "/images/custom-patches/Wild.jpeg",
    description: "Fierce wild spirit patch with untamed energy. Bold nature design.",
    size: "4x4 inch",
    stitchCount: "19,000"
  }
];

function slugify(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export const PATCHES: Patch[] = RAW_PATCHES.map((p) => ({
  ...p,
  slug: slugify(p.title),
  formats: FORMATS,
}));

export function getPatchBySlug(slug: string) {
  return PATCHES.find((p) => p.slug === slug);
}

// Updated categories based on actual patches
export const PATCH_CATEGORIES = [
  { label: "All Patches", value: "all", icon: "grid" },
  { label: "Adventure", value: "adventure", icon: "compass" },
  { label: "Lifestyle", value: "lifestyle", icon: "heart" },
  { label: "Gaming", value: "gaming", icon: "gamepad-2" },
  { label: "Motivational", value: "motivational", icon: "zap" },
  { label: "Fun & Unique", value: "fun", icon: "star" },
];

export const SIZE_OPTIONS = [
  { label: "All Sizes", value: "all" },
  { label: "Small (up to 3 inch)", value: "small" },
  { label: "Medium (3-5 inch)", value: "medium" },
  { label: "Large (5+ inch)", value: "large" },
];
