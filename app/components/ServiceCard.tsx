import Link from "next/link";
import Image from "next/image";
import Icon, { IconName } from "./Icon";
import { IconCircle } from "./Section";

export type Service = {
  slug: string;
  icon: IconName;
  title: string;
  description: string;
  image: string;
  features: string[];
  count?: number;
};

export const SERVICES: Service[] = [
  {
    slug: "patch-digitizing",
    icon: "badge-check",
    title: "Patch Digitizing",
    description: "Custom embroidered patches for jackets, caps, bags and more.",
    image: "/images/patches/HikeMorePatch.jpeg",
    features: ["Embroidered Patches", "Badge Digitizing", "Merrow Border", "Heat Cut Border", "Sew On Patches"],
    count: 21
  },
  {
    slug: "custom-patches",
    icon: "star",
    title: "Custom Patches",
    description: "Unique personalized patch designs for gaming, lifestyle & more.",
    image: "/images/custom-patches/DadByDay.jpeg",
    features: ["Gaming Patches", "Motivational", "Travel Souvenirs", "Personalized Designs", "Any Theme"],
    count: 11
  },
  {
    slug: "cap-logo-digitizing",
    icon: "cap",
    title: "Cap / Hat Logo",
    description: "Professional cap embroidery logos for structured and unstructured caps.",
    image: "/images/cap-logo/cap-design-01.jpeg",
    features: ["Front Panel Logos", "Side Designs", "Back Logos", "Multi-color", "Small Format"],
    count: 5
  },
  {
    slug: "chenille-digitizing",
    icon: "grid",
    title: "Chenille Patches",
    description: "Premium chenille lettering and patches for varsity jackets.",
    image: "/images/chenille/chenille-02.jpeg",
    features: ["Chenille Letters", "Chain Stitch", "Letterman Jackets", "Varsity Style", "High Density"],
    count: 6
  },
  {
    slug: "jacket-back-digitizing",
    icon: "layers",
    title: "Jacket Back Design",
    description: "Large format full back embroidery for denim and leather jackets.",
    image: "/images/jacket-back-design/jacket-back-01.jpeg",
    features: ["Full Back Designs", "Large Format", "High Stitch Count", "Denim Jackets", "Leather Jackets"],
    count: 2
  },
  {
    slug: "left-chest-logo",
    icon: "shirt",
    title: "Left Chest Logo",
    description: "Corporate and sports logos for polo shirts and workwear.",
    image: "/images/left-chest-logo/ChristLogo.jpeg",
    features: ["Business Logos", "Sports Teams", "Small Logos", "Corporate Wear", "Quick Turnaround"],
    count: 3
  },
  {
    slug: "3d-puff-digitizing",
    icon: "rocket",
    title: "3D Puff Embroidery",
    description: "Raised dimensional puff embroidery for bold eye-catching designs.",
    image: "/images/3d-puff/3d-puff-sample-01.jpeg",
    features: ["3D Puff Logo", "High Density", "Cap Puff", "Jacket Puff", "Foam Ready"],
    count: 1
  },
  {
    slug: "towel-embroidery",
    icon: "heart",
    title: "Towel Embroidery",
    description: "Personalized monogram and custom embroidery on towels.",
    image: "/images/towel-design/towel-design-01.jpeg",
    features: ["Monogram Names", "Gift Items", "Bath Towels", "Hand Towels", "Personalized"],
    count: 4
  },
  {
    slug: "applique-digitizing",
    icon: "scissors",
    title: "Applique Design",
    description: "Clean applique work with multiple fabric layer techniques.",
    image: "/images/applique-design/ADesign.jpeg",
    features: ["Clean Applique", "Raw Edge", "Twill Applique", "Multi-layer", "Sports Mascots"],
    count: 2
  },
  {
    slug: "vector-art",
    icon: "share",
    title: "Vector Art Conversion",
    description: "Convert any image to clean vector format for perfect digitizing.",
    image: "/images/vector-art/GokuVector.jpeg",
    features: ["AI, EPS, SVG", "Logo Redraw", "Image to Vector", "High Quality", "Print Ready"],
    count: 5
  },
  {
    slug: "shoulder-embroidery",
    icon: "award",
    title: "Shoulder Design",
    description: "Flag designs and shoulder embroidery for uniforms and apparel.",
    image: "/images/shoulder-design/pilipinas-logo-01.jpeg",
    features: ["Flag Designs", "Shoulder Placement", "Uniforms", "National Themes", "Custom Art"],
    count: 2
  },
  {
    slug: "bundle-packages",
    icon: "box",
    title: "Bundle Packages",
    description: "Save big with our curated design packs and bundle deals.",
    image: "/images/bundles/bundle1.jpeg",
    features: ["Value Packs", "Multi Designs", "25% Savings", "Instant Download", "Complete Kits"],
    count: 6
  }
];

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="vr-lift group flex h-full flex-col overflow-hidden rounded-2xl border border-navy-950/10 bg-white shadow-sm transition-all hover:shadow-lg">
      {/* Image Section */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-gray-100 via-gray-50 to-white">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {service.count && (
          <span className="absolute right-2 top-2 rounded-full bg-brand-600 px-2.5 py-1 text-[10px] font-bold text-white shadow-lg">
            {service.count}+ Designs
          </span>
        )}
      </div>
      
      {/* Content Section - Fixed Height */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3">
          <span className="vr-icon-pop inline-flex shrink-0">
            <IconCircle icon={service.icon} size="sm" />
          </span>
          <h3 className="text-[15px] font-bold uppercase tracking-wide text-navy-950">
            {service.title}
          </h3>
        </div>
        
        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-navy-950/60">
          {service.description}
        </p>
        
        {/* Features - Fixed height with exactly 4 items */}
        <ul className="mt-4 flex flex-1 flex-col gap-2">
          {service.features.slice(0, 4).map((f) => (
            <li key={f} className="flex items-center gap-2 text-xs text-navy-950/55">
              <Icon name="check" className="h-3.5 w-3.5 shrink-0 text-green-500" />
              {f}
            </li>
          ))}
        </ul>
        
        <Link
          href="/store"
          className="vr-btn mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-bold text-brand-600 hover:text-brand-700"
        >
          VIEW DESIGNS <span aria-hidden className="vr-arrow">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}