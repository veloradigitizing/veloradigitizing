import { IconName } from "./Icon";

export type Service = {
  slug: string;
  icon: IconName;
  iconImage?: string;
  title: string;
  description: string;
  image?: string;
  features?: string[];
  count?: number;
};

export const SERVICES: Service[] = [
  {
    slug: "patch-digitizing",
    icon: "sticker",
    iconImage: "/images/icons/services/patch-digitizing.png",
    title: "Patch Digitizing",
    description: "Custom embroidered patches for jackets, caps, bags and more.",
    count: 21,
  },
  {
    slug: "custom-patches",
    icon: "star",
    iconImage: "/images/icons/services/custom-patches.png",
    title: "Custom Patches",
    description:
      "Unique personalized patch designs for gaming, lifestyle & more.",
    count: 11,
  },
  {
    slug: "cap-logo-digitizing",
    icon: "cap",
    iconImage: "/images/icons/services/cap-logo-digitizing.png",
    title: "Cap / Hat Logo",
    description:
      "Professional cap embroidery logos for structured and unstructured caps.",
    count: 5,
  },
  {
    slug: "chenille-digitizing",
    icon: "feather",
    iconImage: "/images/icons/services/chenille-digitizing.png",
    title: "Chenille Patches",
    description: "Premium chenille lettering and patches for varsity jackets.",
    count: 6,
  },
  {
    slug: "jacket-back-digitizing",
    icon: "panel-top",
    iconImage: "/images/icons/services/jacket-back-digitizing.png",
    title: "Jacket Back Design",
    description:
      "Large format full back embroidery for denim and leather jackets.",
    count: 2,
  },
  {
    slug: "left-chest-logo",
    icon: "shirt-logo",
    iconImage: "/images/icons/services/left-chest-logo.png",
    title: "Left Chest Logo",
    description: "Corporate and sports logos for polo shirts and workwear.",
    count: 3,
  },
  {
    slug: "3d-puff-digitizing",
    icon: "layers",
    iconImage: "/images/icons/services/3d-puff-digitizing.png",
    title: "3D Puff Embroidery",
    description:
      "Raised dimensional puff embroidery for bold eye-catching designs.",
    count: 1,
  },
  {
    slug: "towel-embroidery",
    icon: "towel-rack",
    iconImage: "/images/icons/services/towel-embroidery.png",
    title: "Towel Embroidery",
    description: "Personalized monogram and custom embroidery on towels.",
    count: 4,
  },
  {
    slug: "applique-digitizing",
    icon: "scissors",
    iconImage: "/images/icons/services/applique-digitizing.png",
    title: "Applique Design",
    description: "Clean applique work with multiple fabric layer techniques.",
    count: 2,
  },
  {
    slug: "vector-art",
    icon: "pen-tool",
    iconImage: "/images/icons/services/vector-art.png",
    title: "Vector Art",
    description:
      "Convert any image to clean vector format for perfect digitizing.",
    count: 5,
  },
  {
    slug: "sleeve-embroidery",
    icon: "sleeve-patch",
    iconImage: "/images/icons/services/sleeve-embroidery.png",
    title: "Sleeve Design",
    description:
      "Flag designs and sleeve embroidery for uniforms and apparel.",
    count: 2,
  },
  {
    slug: "bundle-packages",
    icon: "box",
    iconImage: "/images/icons/services/bundle-packages.png",
    title: "Bundle Packages",
    description: "Save big with our curated design packs and bundle deals.",
    count: 6,
  },
];
