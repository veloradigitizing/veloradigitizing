import Image from "next/image";

export type PortfolioItem = {
  title: string;
  tag: string;
  category: string;
  image: string;
};

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  // === PATCHES (from /images/patches/) ===
  { title: "Hike More Worry Less", tag: "Adventure Patch", category: "patches", image: "/images/patches/HikeMorePatch.jpeg" },
  { title: "Wild Adventure Patch", tag: "Nature Patch", category: "patches", image: "/images/patches/WildPatch.jpeg" },
  { title: "Stay Wild Patch", tag: "Motivational", category: "patches", image: "/images/patches/StayWIldPatch.jpeg" },
  { title: "Explore The Path", tag: "Adventure Patch", category: "patches", image: "/images/patches/ExplorePatch.jpeg" },
  { title: "Find Your Path", tag: "Inspirational", category: "patches", image: "/images/patches/FindYourPathPatch.jpeg" },
  { title: "Happy Place Patch", tag: "Lifestyle", category: "patches", image: "/images/patches/HappyPlacePatch.jpeg" },
  { title: "Keep It Simple", tag: "Minimalist", category: "patches", image: "/images/patches/KeepItSimplePatch.jpeg" },
  { title: "Life Is Better", tag: "Quote Patch", category: "patches", image: "/images/patches/LifeIsBetterPatch.jpeg" },
  { title: "Chase The Sun", tag: "Motivational", category: "patches", image: "/images/patches/ChaseTheSunPatch.jpeg" },
  { title: "Adventure Awaits", tag: "Outdoor", category: "patches", image: "/images/patches/AdventurePatch.jpeg" },

  // === CUSTOM PATCHES (from /images/custom-patches/) ===
  { title: "Dad By Day Gamer", tag: "Gaming Patch", category: "custom-patches", image: "/images/custom-patches/DadByDay.jpeg" },
  { title: "Endeavour Patch", tag: "Motivational", category: "custom-patches", image: "/images/custom-patches/Endeavour.jpeg" },
  { title: "Gumshoe Detective", tag: "Fun Design", category: "custom-patches", image: "/images/custom-patches/Gumshoe.jpeg" },
  { title: "Home Of Hustle", tag: "Motivational", category: "custom-patches", image: "/images/custom-patches/HomeOfHustle.jpeg" },
  { title: "Love Heart Patch", tag: "Romantic", category: "custom-patches", image: "/images/custom-patches/LovePatch.jpeg" },
  { title: "Mentally Strong", tag: "Inspirational", category: "custom-patches", image: "/images/custom-patches/Mentally.jpeg" },
  { title: "Paranormal Patch", tag: "Mystery", category: "custom-patches", image: "/images/custom-patches/Paranormal.jpeg" },
  { title: "People Safety", tag: "Community", category: "custom-patches", image: "/images/custom-patches/PeopleSafety.jpeg" },
  { title: "Search Rescan", tag: "Gaming", category: "custom-patches", image: "/images/custom-patches/SearchRescan.jpeg" },
  { title: "Veracruz Mexico", tag: "Travel", category: "custom-patches", image: "/images/custom-patches/Veracruz.jpeg" },
  { title: "Wild Spirit", tag: "Adventure", category: "custom-patches", image: "/images/custom-patches/Wild.jpeg" },

  // === CAP LOGO (from /images/cap-logo/) ===
  { title: "Diesel Masters Cap", tag: "Skull Design", category: "cap-logo", image: "/images/cap-logo/cap-design-01.jpeg" },
  { title: "Cap Logo Design 02", tag: "Custom Logo", category: "cap-logo", image: "/images/cap-logo/cap-logo-02.jpeg" },
  { title: "Cap Logo Design 03", tag: "Embroidery", category: "cap-logo", image: "/images/cap-logo/cap-logo-03.jpeg" },
  { title: "Cap Logo Design 04", tag: "Digitizing", category: "cap-logo", image: "/images/cap-logo/cap-logo-04.jpeg" },
  { title: "Cap Logo Design 05", tag: "Custom Work", category: "cap-logo", image: "/images/cap-logo/cap-logo-05.jpeg" },

  // === CHENILLE (from /images/chenille/) ===
  { title: "Chenille Design 01", tag: "Chenille Patch", category: "chenille", image: "/images/chenille/chenille-01.jpeg" },
  { title: "Strategy Chenille", tag: "Letter Patch", category: "chenille", image: "/images/chenille/chenille-02.jpeg" },
  { title: "Chenille Design 03", tag: "Varsity Style", category: "chenille", image: "/images/chenille/chenille-03.jpeg" },
  { title: "Chenille Design 04", tag: "Text Patch", category: "chenille", image: "/images/chenille/chenille-04.jpeg" },
  { title: "Chenille Design 05", tag: "Custom", category: "chenille", image: "/images/chenille/chenille-05.jpeg" },
  { title: "Chenille Design 06", tag: "Premium", category: "chenille", image: "/images/chenille/chenille-06.jpeg" },

  // === JACKET BACK (from /images/jacket-back-design/) ===
  { title: "Leopard Jacket Back", tag: "Full Back", category: "jacket-back", image: "/images/jacket-back-design/jacket-back-01.jpeg" },
  { title: "Jacket Back Original", tag: "Large Design", category: "jacket-back", image: "/images/jacket-back-design/jacket-back-original.jpeg" },

  // === LEFT CHEST LOGO (from /images/left-chest-logo/) ===
  { title: "Christ Tiger Logo", tag: "Sports Logo", category: "left-chest", image: "/images/left-chest-logo/ChristLogo.jpeg" },
  { title: "Knight Logo", tag: "Crest Design", category: "left-chest", image: "/images/left-chest-logo/KnightLogo.jpeg" },
  { title: "Left Chest Shirt", tag: "Corporate", category: "left-chest", image: "/images/left-chest-logo/left-chest-shirt-01.jpeg" },

  // === 3D PUFF (from /images/3d-puff/) ===
  { title: "3D Puff Sample", tag: "Puff Embroidery", category: "3d-puff", image: "/images/3d-puff/3d-puff-sample-01.jpeg" },

  // === TOWEL DESIGN (from /images/towel-design/) ===
  { title: "Elena Monogram Towel", tag: "Personalized", category: "towel", image: "/images/towel-design/towel-design-01.jpeg" },
  { title: "Towel Design 02", tag: "Custom Text", category: "towel", image: "/images/towel-design/towel-design-02.jpeg" },
  { title: "Towel Design 03", tag: "Embroidery", category: "towel", image: "/images/towel-design/towel-design-03.jpeg" },
  { title: "Towel Design 04", tag: "Gift Item", category: "towel", image: "/images/towel-design/towel-design-04.jpeg" },

  // === APPLIQUE (from /images/applique-design/) ===
  { title: "Applique A Design", tag: "Applique Work", category: "applique", image: "/images/applique-design/ADesign.jpeg" },
  { title: "Cougars Applique", tag: "Sports Mascot", category: "applique", image: "/images/applique-design/Cougars.jpeg" },

  // === VECTOR ART (from /images/vector-art/) ===
  { title: "Goku Vector Art", tag: "Anime Style", category: "vector-art", image: "/images/vector-art/GokuVector.jpeg" },
  { title: "Never Stop Vector", tag: "Motivational", category: "vector-art", image: "/images/vector-art/NeverStopVector.jpeg" },
  { title: "Paint Vector Art", tag: "Artistic", category: "vector-art", image: "/images/vector-art/PaintVector.jpeg" },
  { title: "Raven Vector", tag: "Bird Design", category: "vector-art", image: "/images/vector-art/RavenVector.jpeg" },
  { title: "Volf Vector", tag: "Animal Art", category: "vector-art", image: "/images/vector-art/VolfVector.jpeg" },

  // === SHOULDER DESIGN (from /images/shoulder-design/) ===
  { title: "Pilipinas Shoulder", tag: "Flag Design", category: "shoulder", image: "/images/shoulder-design/pilipinas-logo-01.jpeg" },
  { title: "Pilipinas Original", tag: "National", category: "shoulder", image: "/images/shoulder-design/pilipinas-original.jpeg" },

  // === BUNDLES (from /images/bundles/) ===
  { title: "Bundle Pack 01", tag: "Value Pack", category: "bundles", image: "/images/bundles/bundle1.jpeg" },
  { title: "Bundle Pack 02", tag: "Multi Design", category: "bundles", image: "/images/bundles/bundle2.jpeg" },
  { title: "Bundle Pack 03", tag: "Collection", category: "bundles", image: "/images/bundles/bundle3.jpeg" },
  { title: "Bundle Pack 04", tag: "Premium Set", category: "bundles", image: "/images/bundles/bundle4.jpeg" },
  { title: "Bundle Pack 05", tag: "Mega Pack", category: "bundles", image: "/images/bundles/bundle5.jpeg" },
  { title: "Bundle Pack 06", tag: "Complete Kit", category: "bundles", image: "/images/bundles/bundle6.jpeg" },
];

// Categories based on ACTUAL available images
export const PORTFOLIO_CATEGORIES = [
  { label: "All Work", value: "all" },
  { label: "Patches", value: "patches" },
  { label: "Custom Patches", value: "custom-patches" },
  { label: "Cap Logo", value: "cap-logo" },
  { label: "Chenille", value: "chenille" },
  { label: "Jacket Back", value: "jacket-back" },
  { label: "Left Chest", value: "left-chest" },
  { label: "3D Puff", value: "3d-puff" },
  { label: "Towel Design", value: "towel" },
  { label: "Applique", value: "applique" },
  { label: "Vector Art", value: "vector-art" },
  { label: "Shoulder", value: "shoulder" },
  { label: "Bundles", value: "bundles" },
];

export default function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <div className="vr-lift group overflow-hidden rounded-xl border border-navy-950/10 bg-white">
      <div className="vr-zoom relative aspect-[4/3] w-full overflow-hidden bg-navy-950/[0.03]">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
        <span className="absolute left-2 top-2 rounded bg-brand-600/95 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white backdrop-blur-sm">
          {item.tag}
        </span>
      </div>
      <div className="px-4 py-3">
        <p className="text-sm font-semibold text-navy-950">{item.title}</p>
      </div>
    </div>
  );
}
