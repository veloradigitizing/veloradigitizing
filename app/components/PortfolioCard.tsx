import Image from "next/image";

export type PortfolioItem = {
  title: string;
  tag: string;
  category: string;
  image: string;
};

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  // === PATCHES (from /images/patches/) ===
  {
    title: "Hike More Worry Less",
    tag: "Adventure Patch",
    category: "custom-patches",
    image: "/images/patches/hike-more-worry-less-patch-embroidery-digitizing-dst.webp",
  },
  {
    title: "Wild Adventure Patch",
    tag: "Nature Patch",
    category: "custom-patches",
    image: "/images/patches/wild-adventure-patch-embroidery-digitizing-dst.webp",
  },
  {
    title: "Stay Wild Patch",
    tag: "Motivational",
    category: "custom-patches",
    image: "/images/patches/stay-wild-patch-embroidery-digitizing-dst.webp",
  },
  {
    title: "Explore The Path",
    tag: "Adventure Patch",
    category: "custom-patches",
    image: "/images/patches/explore-the-path-patch-embroidery-digitizing-dst.webp",
  },
  {
    title: "Find Your Path",
    tag: "Inspirational",
    category: "custom-patches",
    image: "/images/patches/find-your-path-patch-embroidery-digitizing-dst.webp",
  },
  {
    title: "Happy Place Patch",
    tag: "Lifestyle",
    category: "custom-patches",
    image: "/images/patches/happy-place-patch-embroidery-digitizing-dst.webp",
  },
  {
    title: "Keep It Simple",
    tag: "Minimalist",
    category: "custom-patches",
    image: "/images/patches/keep-it-simple-patch-embroidery-digitizing-dst.webp",
  },
  {
    title: "Life Is Better",
    tag: "Quote Patch",
    category: "custom-patches",
    image: "/images/patches/life-is-better-patch-embroidery-digitizing-dst.webp",
  },
  {
    title: "Chase The Sun",
    tag: "Motivational",
    category: "custom-patches",
    image: "/images/patches/chase-the-sun-patch-embroidery-digitizing-dst.webp",
  },
  {
    title: "Adventure Awaits",
    tag: "Outdoor",
    category: "custom-patches",
    image: "/images/patches/adventure-awaits-patch-embroidery-digitizing-dst.webp",
  },

  // === CUSTOM PATCHES (from /images/custom-patches/) ===
  {
    title: "Dad By Day Gamer",
    tag: "Gaming Patch",
    category: "custom-patches",
    image: "/images/custom-patches/dad-by-day-gamer-patch-embroidery-digitizing-dst.webp",
  },
  {
    title: "Endeavour Patch",
    tag: "Motivational",
    category: "custom-patches",
    image: "/images/custom-patches/endeavour-patch-embroidery-digitizing-dst.webp",
  },
  {
    title: "Gumshoe Detective",
    tag: "Fun Design",
    category: "custom-patches",
    image: "/images/custom-patches/gumshoe-detective-patch-embroidery-digitizing-dst.webp",
  },
  {
    title: "Home Of Hustle",
    tag: "Motivational",
    category: "custom-patches",
    image: "/images/custom-patches/home-of-hustle-patch-embroidery-digitizing-dst.webp",
  },
  {
    title: "Love Heart Patch",
    tag: "Romantic",
    category: "custom-patches",
    image: "/images/custom-patches/love-heart-patch-embroidery-digitizing-dst.webp",
  },
  {
    title: "Mentally Strong",
    tag: "Inspirational",
    category: "custom-patches",
    image: "/images/custom-patches/mentally-strong-patch-embroidery-digitizing-dst.webp",
  },
  {
    title: "Paranormal Patch",
    tag: "Mystery",
    category: "custom-patches",
    image: "/images/custom-patches/paranormal-mystery-patch-embroidery-digitizing-dst.webp",
  },
  {
    title: "People Safety",
    tag: "Community",
    category: "custom-patches",
    image: "/images/custom-patches/people-safety-patch-embroidery-digitizing-dst.webp",
  },
  {
    title: "Search Rescan",
    tag: "Gaming",
    category: "custom-patches",
    image: "/images/custom-patches/search-rescan-patch-embroidery-digitizing-dst.webp",
  },
  {
    title: "Veracruz Mexico",
    tag: "Travel",
    category: "custom-patches",
    image: "/images/custom-patches/veracruz-mexico-patch-embroidery-digitizing-dst.webp",
  },
  {
    title: "Wild Spirit",
    tag: "Adventure",
    category: "custom-patches",
    image: "/images/custom-patches/wild-spirit-patch-embroidery-digitizing-dst.webp",
  },

  // === CAP LOGO (from /images/cap-logo/) ===
  {
    title: "Cap Logo Design 02",
    tag: "Custom Logo",
    category: "cap-logo",
    image: "/images/cap-logo/custom-headwear-cap-logo-embroidery-digitizing-dst.webp",
  },
  {
    title: "Cap Logo Design 03",
    tag: "Embroidery",
    category: "cap-logo",
    image: "/images/cap-logo/sports-team-cap-logo-embroidery-digitizing-dst.webp",
  },
  {
    title: "Custom 3D Puff Cap",
    tag: "3D Puff Digitizing",
    category: "cap-logo",
    image: "/images/cap-logo/custom-3d-puff-cap-embroidery-digitizing.webp",
  },
  {
    title: "Snapback Hat Logo",
    tag: "Hat Embroidery",
    category: "cap-logo",
    image: "/images/cap-logo/snapback-hat-logo-digitizing-dst-pes.webp",
  },
  {
    title: "Baseball Cap Front",
    tag: "Cap Digitizing",
    category: "cap-logo",
    image: "/images/cap-logo/baseball-cap-front-embroidery-digitizing.webp",
  },
  {
    title: "Trucker Hat Logo",
    tag: "Custom Headwear",
    category: "cap-logo",
    image: "/images/cap-logo/trucker-hat-custom-logo-digitizing.webp",
  },
  {
    title: "Beanie Hat Logo",
    tag: "Beanie Digitizing",
    category: "cap-logo",
    image: "/images/cap-logo/beanie-hat-embroidery-digitizing-services.webp",
  },
  {
    title: "Structured Cap Design",
    tag: "Center-Out Sequence",
    category: "cap-logo",
    image: "/images/cap-logo/structured-cap-center-out-digitizing.webp",
  },
  {
    title: "Dad Hat Embroidery",
    tag: "Unstructured Cap",
    category: "cap-logo",
    image: "/images/cap-logo/unstructured-dad-hat-embroidery-digitizing.webp",
  },
  {
    title: "Sports Team Cap",
    tag: "Sports Logo",
    category: "cap-logo",
    image: "/images/cap-logo/sports-team-cap-logo-digitizing-service.webp",
  },
  {
    title: "Corporate Headwear",
    tag: "Corporate Cap",
    category: "cap-logo",
    image: "/images/cap-logo/corporate-headwear-embroidery-digitizing.webp",
  },
  {
    title: "Flat Cap Embroidery",
    tag: "Flat Embroidery",
    category: "cap-logo",
    image: "/images/cap-logo/flat-embroidery-cap-logo-digitizing.webp",
  },
  {
    title: "Custom Hat Patch",
    tag: "Hat Patch",
    category: "cap-logo",
    image: "/images/cap-logo/custom-hat-patch-embroidery-digitizing.webp",
  },
  {
    title: "Raised 3D Puff Logo",
    tag: "Raised Embroidery",
    category: "cap-logo",
    image: "/images/cap-logo/raised-3d-puff-embroidery-hat-logo.webp",
  },
  {
    title: "Premium Cap Design",
    tag: "Premium Quality",
    category: "cap-logo",
    image: "/images/cap-logo/premium-cap-embroidery-digitizing-dst.webp",
  },

  // === CHENILLE (from /images/chenille/) ===
  {
    title: "Chenille Design 01",
    tag: "Chenille Patch",
    category: "chenille",
    image: "/images/chenille/varsity-letter-chenille-patch-embroidery-digitizing-dst.webp",
  },
  {
    title: "Strategy Chenille",
    tag: "Letter Patch",
    category: "chenille",
    image: "/images/chenille/strategy-chenille-patch-embroidery-digitizing-dst.webp",
  },
  {
    title: "Chenille Design 03",
    tag: "Varsity Style",
    category: "chenille",
    image: "/images/chenille/collegiate-chenille-patch-embroidery-digitizing-dst.webp",
  },
  {
    title: "Chenille Design 04",
    tag: "Text Patch",
    category: "chenille",
    image: "/images/chenille/athletic-number-chenille-patch-embroidery-digitizing-dst.webp",
  },
  {
    title: "Chenille Design 05",
    tag: "Custom",
    category: "chenille",
    image: "/images/chenille/custom-jacket-chenille-patch-embroidery-digitizing-dst.webp",
  },
  {
    title: "Chenille Design 06",
    tag: "Premium",
    category: "chenille",
    image: "/images/chenille/premium-fluffy-chenille-patch-embroidery-digitizing-dst.webp",
  },

  // === JACKET BACK (from /images/jacket-back-design/) ===
  {
    title: "Large Format Jacket Back",
    tag: "Large Format",
    category: "jacket-back",
    image: "/images/jacket-back-design/large-format-jacket-back-embroidery-digitizing.webp",
  },
  {
    title: "Custom Motorcycle Jacket",
    tag: "Biker Jacket",
    category: "jacket-back",
    image: "/images/jacket-back-design/custom-motorcycle-jacket-back-digitizing-dst.webp",
  },
  {
    title: "Denim Jacket Full Back",
    tag: "Denim Back",
    category: "jacket-back",
    image: "/images/jacket-back-design/denim-jacket-full-back-embroidery-digitizing.webp",
  },
  {
    title: "Leather Bomber Logo",
    tag: "Bomber Jacket",
    category: "jacket-back",
    image: "/images/jacket-back-design/leather-bomber-jacket-back-logo-digitizing.webp",
  },
  {
    title: "Premium Jacket Embroidery",
    tag: "Premium Quality",
    category: "jacket-back",
    image: "/images/jacket-back-design/premium-jacket-back-embroidery-digitizing-pes.webp",
  },
  {
    title: "Custom Biker Patch",
    tag: "Back Patch",
    category: "jacket-back",
    image: "/images/jacket-back-design/custom-biker-patch-jacket-back-digitizing.webp",
  },
  {
    title: "Large Scale Back Patch",
    tag: "Large Patch",
    category: "jacket-back",
    image: "/images/jacket-back-design/large-scale-back-patch-embroidery-digitizing.webp",
  },
  {
    title: "Varsity Jacket Back",
    tag: "Varsity Design",
    category: "jacket-back",
    image: "/images/jacket-back-design/varsity-jacket-back-embroidery-digitizing.webp",
  },
  {
    title: "Custom Back Service",
    tag: "Custom Design",
    category: "jacket-back",
    image: "/images/jacket-back-design/custom-jacket-back-digitizing-services-dst.webp",
  },
  {
    title: "Detailed Jacket Back",
    tag: "Detailed Stitching",
    category: "jacket-back",
    image: "/images/jacket-back-design/detailed-jacket-back-embroidery-digitizing.webp",
  },
  {
    title: "Intricate Full Back",
    tag: "Intricate Design",
    category: "jacket-back",
    image: "/images/jacket-back-design/intricate-full-back-jacket-digitizing.webp",
  },
  {
    title: "Custom Logo Jacket",
    tag: "Custom Logo",
    category: "jacket-back",
    image: "/images/jacket-back-design/custom-logo-jacket-back-embroidery-pes.webp",
  },
  {
    title: "Large Apparel Design",
    tag: "Apparel Back",
    category: "jacket-back",
    image: "/images/jacket-back-design/large-apparel-jacket-back-digitizing.webp",
  },
  {
    title: "Sports Jacket Back",
    tag: "Sports Design",
    category: "jacket-back",
    image: "/images/jacket-back-design/sports-jacket-back-embroidery-digitizing.webp",
  },
  {
    title: "Club Jacket Back",
    tag: "Club Emblem",
    category: "jacket-back",
    image: "/images/jacket-back-design/club-jacket-back-embroidery-digitizing-dst.webp",
  },
  {
    title: "Jacket Back Patch",
    tag: "Patch Digitizing",
    category: "jacket-back",
    image: "/images/jacket-back-design/jacket-back-patch-embroidery-digitizing.webp",
  },
  {
    title: "High Quality Jacket",
    tag: "High Quality",
    category: "jacket-back",
    image: "/images/jacket-back-design/high-quality-jacket-back-digitizing-pes.webp",
  },
  {
    title: "Custom Back Piece",
    tag: "Back Piece",
    category: "jacket-back",
    image: "/images/jacket-back-design/custom-back-piece-embroidery-digitizing.webp",
  },
  {
    title: "Full Size Jacket Back",
    tag: "Full Size",
    category: "jacket-back",
    image: "/images/jacket-back-design/full-size-jacket-back-embroidery-digitizing.webp",
  },

  // === LEFT CHEST LOGO (from /images/left-chest-logo/) ===
  {
    title: "Corporate Left Chest",
    tag: "Corporate Logo",
    category: "left-chest",
    image: "/images/left-chest-logo/corporate-left-chest-logo-embroidery-digitizing.webp",
  },
  {
    title: "Custom Business Logo",
    tag: "Business Logo",
    category: "left-chest",
    image: "/images/left-chest-logo/custom-business-left-chest-embroidery-digitizing.webp",
  },
  {
    title: "Polo Shirt Logo",
    tag: "Polo Shirt",
    category: "left-chest",
    image: "/images/left-chest-logo/polo-shirt-left-chest-logo-digitizing-dst.webp",
  },
  {
    title: "Left Chest Monogram",
    tag: "Monogram",
    category: "left-chest",
    image: "/images/left-chest-logo/left-chest-monogram-embroidery-digitizing.webp",
  },
  {
    title: "Company Uniform",
    tag: "Uniform Logo",
    category: "left-chest",
    image: "/images/left-chest-logo/company-uniform-left-chest-logo-digitizing.webp",
  },
  {
    title: "Sports Team Logo",
    tag: "Sports Team",
    category: "left-chest",
    image: "/images/left-chest-logo/sports-team-left-chest-embroidery-digitizing.webp",
  },
  {
    title: "Medical Scrubs",
    tag: "Medical Scrubs",
    category: "left-chest",
    image: "/images/left-chest-logo/medical-scrubs-left-chest-logo-digitizing.webp",
  },
  {
    title: "Custom Apparel",
    tag: "Custom Apparel",
    category: "left-chest",
    image: "/images/left-chest-logo/custom-apparel-left-chest-embroidery-digitizing.webp",
  },
  {
    title: "Left Chest Patch",
    tag: "Patch Logo",
    category: "left-chest",
    image: "/images/left-chest-logo/left-chest-patch-logo-digitizing-services.webp",
  },
  {
    title: "Small Text Logo",
    tag: "Small Text",
    category: "left-chest",
    image: "/images/left-chest-logo/small-text-left-chest-embroidery-digitizing.webp",
  },
  {
    title: "Intricate Logo",
    tag: "Intricate Design",
    category: "left-chest",
    image: "/images/left-chest-logo/intricate-left-chest-logo-digitizing-pes.webp",
  },
  {
    title: "Workwear Logo",
    tag: "Workwear",
    category: "left-chest",
    image: "/images/left-chest-logo/workwear-left-chest-embroidery-digitizing.webp",
  },
  {
    title: "Custom Crest",
    tag: "Crest Logo",
    category: "left-chest",
    image: "/images/left-chest-logo/custom-crest-left-chest-logo-digitizing.webp",
  },
  {
    title: "Restaurant Uniform",
    tag: "Restaurant Logo",
    category: "left-chest",
    image: "/images/left-chest-logo/restaurant-uniform-left-chest-embroidery.webp",
  },
  {
    title: "Detailed Left Chest",
    tag: "Detailed Logo",
    category: "left-chest",
    image: "/images/left-chest-logo/detailed-left-chest-logo-embroidery-digitizing.webp",
  },
  {
    title: "Jacket Left Chest",
    tag: "Jacket Logo",
    category: "left-chest",
    image: "/images/left-chest-logo/jacket-left-chest-logo-digitizing-dst.webp",
  },
  {
    title: "Custom Brand Logo",
    tag: "Brand Logo",
    category: "left-chest",
    image: "/images/left-chest-logo/custom-brand-left-chest-embroidery-digitizing.webp",
  },
  {
    title: "High Quality Logo",
    tag: "High Quality",
    category: "left-chest",
    image: "/images/left-chest-logo/high-quality-left-chest-logo-digitizing.webp",
  },
  {
    title: "Premium Embroidery",
    tag: "Premium Quality",
    category: "left-chest",
    image: "/images/left-chest-logo/premium-left-chest-embroidery-digitizing-pes.webp",
  },
  {
    title: "Left Chest Emblem",
    tag: "Emblem Logo",
    category: "left-chest",
    image: "/images/left-chest-logo/left-chest-emblem-embroidery-digitizing.webp",
  },
  {
    title: "Promotional Wear",
    tag: "Promo Wear",
    category: "left-chest",
    image: "/images/left-chest-logo/promotional-wear-left-chest-logo-digitizing.webp",
  },
  {
    title: "Custom Design",
    tag: "Custom Design",
    category: "left-chest",
    image: "/images/left-chest-logo/custom-design-left-chest-embroidery-digitizing.webp",
  },
  {
    title: "Expert Services Logo",
    tag: "Expert Services",
    category: "left-chest",
    image: "/images/left-chest-logo/left-chest-logo-digitizing-expert-services.webp",
  },

  // === 3D PUFF (from /images/3d-puff/) ===
  {
    title: "3D Puff Sample",
    tag: "Puff Embroidery",
    category: "3d-puff",
    image: "/images/3d-puff/custom-3d-puff-cap-embroidery-digitizing-dst.webp",
  },

  // === TOWEL DESIGN (from /images/towel-design/) ===
  {
    title: "Elena Monogram Towel",
    tag: "Personalized",
    category: "towel",
    image: "/images/towel-design/elena-monogram-bath-towel-embroidery-digitizing-dst.webp",
  },
  {
    title: "Towel Design 02",
    tag: "Custom Text",
    category: "towel",
    image: "/images/towel-design/hotel-spa-luxury-towel-embroidery-digitizing-dst.webp",
  },
  {
    title: "Towel Design 03",
    tag: "Embroidery",
    category: "towel",
    image: "/images/towel-design/personalized-gift-towel-embroidery-digitizing-dst.webp",
  },
  {
    title: "Towel Design 04",
    tag: "Gift Item",
    category: "towel",
    image: "/images/towel-design/floral-script-hand-towel-embroidery-digitizing-dst.webp",
  },

  // === APPLIQUE (from /images/applique-design/) ===
  {
    title: "Applique A Design",
    tag: "Applique Work",
    category: "applique",
    image: "/images/applique-design/varsity-letter-a-applique-embroidery-digitizing-dst.webp",
  },
  {
    title: "Cougars Applique",
    tag: "Sports Mascot",
    category: "applique",
    image: "/images/applique-design/cougars-sports-team-applique-embroidery-digitizing-dst.webp",
  },

  // === VECTOR ART (from /images/vector-art/) ===
  {
    title: "Goku Vector Art",
    tag: "Anime Style",
    category: "vector-art",
    image: "/images/vector-art/goku-anime-character-vector-art-conversion-dst.webp",
  },
  {
    title: "Never Stop Vector",
    tag: "Motivational",
    category: "vector-art",
    image: "/images/vector-art/never-stop-motivational-vector-art-conversion-dst.webp",
  },
  {
    title: "Paint Vector Art",
    tag: "Artistic",
    category: "vector-art",
    image: "/images/vector-art/paint-splash-artistic-vector-art-conversion-dst.webp",
  },
  {
    title: "Raven Vector",
    tag: "Bird Design",
    category: "vector-art",
    image: "/images/vector-art/raven-bird-illustration-vector-art-conversion-dst.webp",
  },
  {
    title: "Volf Vector",
    tag: "Animal Art",
    category: "vector-art",
    image: "/images/vector-art/wolf-wildlife-animal-vector-art-conversion-dst.webp",
  },
  {
    title: "Messi Vector Art",
    tag: "Sports Illustration",
    category: "vector-art",
    image: "/images/vector-art/messi-football-sports-vector-art-conversion-dst.webp",
  },
  {
    title: "Dragon Ball Vector",
    tag: "Anime Style",
    category: "vector-art",
    image: "/images/vector-art/dragon-ball-anime-vector-art-conversion-dst.webp",
  },
  {
    title: "Skull Van Vector",
    tag: "Artistic",
    category: "vector-art",
    image: "/images/vector-art/vintage-skull-van-vector-art-conversion-dst.webp",
  },


  // === BUNDLES (from /images/bundles/) ===
  {
    title: "Bundle Pack 01",
    tag: "Value Pack",
    category: "bundles",
    image: "/images/bundles/adventure-outdoor-embroidery-designs-bundle-pack-dst.webp",
  },
  {
    title: "Bundle Pack 02",
    tag: "Multi Design",
    category: "bundles",
    image: "/images/bundles/vintage-typography-embroidery-designs-bundle-pack-dst.webp",
  },
  {
    title: "Bundle Pack 03",
    tag: "Collection",
    category: "bundles",
    image: "/images/bundles/sports-mascot-embroidery-designs-bundle-pack-dst.webp",
  },
  {
    title: "Bundle Pack 04",
    tag: "Premium Set",
    category: "bundles",
    image: "/images/bundles/floral-nature-embroidery-designs-bundle-pack-dst.webp",
  },
  {
    title: "Bundle Pack 05",
    tag: "Mega Pack",
    category: "bundles",
    image: "/images/bundles/gaming-pop-culture-embroidery-designs-bundle-pack-dst.webp",
  },
  {
    title: "Bundle Pack 06",
    tag: "Complete Kit",
    category: "bundles",
    image: "/images/bundles/commercial-mega-embroidery-designs-bundle-pack-dst.webp",
  },
];

// Categories based on ACTUAL available images
export const PORTFOLIO_CATEGORIES = [
  { label: "All Work", value: "all" },
  { label: "Custom Patches", value: "custom-patches" },
  { label: "Cap Logo", value: "cap-logo" },
  { label: "Chenille", value: "chenille" },
  { label: "Jacket Back", value: "jacket-back" },
  { label: "Left Chest", value: "left-chest" },
  { label: "3D Puff", value: "3d-puff" },
  { label: "Towel Design", value: "towel" },
  { label: "Applique", value: "applique" },
  { label: "Vector Art", value: "vector-art" },
  { label: "Bundles", value: "bundles" },
];

export default function PortfolioCard({
  item,
  onClick,
}: {
  item: PortfolioItem;
  onClick?: () => void;
}) {
  return (
    <div
      className="vr-lift group cursor-pointer overflow-hidden rounded-xl border border-navy-950/10 bg-white"
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={
        onClick
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onClick();
              }
            }
          : undefined
      }
    >
      <div className="vr-zoom relative aspect-[4/3] w-full overflow-hidden bg-navy-950/[0.03]">
        <Image
          src={item.image}
          alt={`${item.title} - Custom ${item.tag} Embroidery Digitizing Sample in DST, PES & JEF Formats`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
        <span className="absolute left-2 top-2 rounded bg-brand-600/95 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white backdrop-blur-sm">
          {item.tag}
        </span>
        <div className="absolute inset-0 flex items-center justify-center bg-navy-950/0 transition-colors duration-300 group-hover:bg-navy-950/40">
          <span className="flex h-11 w-11 scale-75 items-center justify-center rounded-full bg-white text-navy-950 opacity-0 shadow-lg transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 8v6M8 11h6"
              />
            </svg>
          </span>
        </div>
      </div>
      <div className="px-4 py-3">
        <h3 className="text-sm font-semibold text-navy-950">{item.title}</h3>
      </div>
    </div>
  );
}
