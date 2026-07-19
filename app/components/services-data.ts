import { IconName } from "./Icon";

export type Service = {
  slug: string;
  icon: IconName;
  title: string;
  description: string;
  image?: string;
  features?: string[];
  count?: number;
};

export const SERVICES: Service[] = [
  {
    slug: "patch-digitizing",
    icon: "badge-check",
    title: "Patch Digitizing",
    description: "Custom embroidered patches for jackets, caps, bags and more.",
    count: 21,
  },
  {
    slug: "custom-patches",
    icon: "star",
    title: "Custom Patches",
    description:
      "Unique personalized patch designs for gaming, lifestyle & more.",
    count: 11,
  },
  {
    slug: "cap-logo-digitizing",
    icon: "cap",
    title: "Cap / Hat Logo",
    description:
      "Professional cap embroidery logos for structured and unstructured caps.",
    count: 5,
  },
  {
    slug: "chenille-digitizing",
    icon: "grid",
    title: "Chenille Patches",
    description: "Premium chenille lettering and patches for varsity jackets.",
    count: 6,
  },
  {
    slug: "jacket-back-digitizing",
    icon: "layers",
    title: "Jacket Back Design",
    description:
      "Large format full back embroidery for denim and leather jackets.",
    count: 2,
  },
  {
    slug: "left-chest-logo",
    icon: "shirt",
    title: "Left Chest Logo",
    description: "Corporate and sports logos for polo shirts and workwear.",
    count: 3,
  },
  {
    slug: "3d-puff-digitizing",
    icon: "rocket",
    title: "3D Puff Embroidery",
    description:
      "Raised dimensional puff embroidery for bold eye-catching designs.",
    count: 1,
  },
  {
    slug: "towel-embroidery",
    icon: "heart",
    title: "Towel Embroidery",
    description: "Personalized monogram and custom embroidery on towels.",
    count: 4,
  },
  {
    slug: "applique-digitizing",
    icon: "scissors",
    title: "Applique Design",
    description: "Clean applique work with multiple fabric layer techniques.",
    count: 2,
  },
  {
    slug: "vector-art",
    icon: "share",
    title: "Vector Art",
    description:
      "Convert any image to clean vector format for perfect digitizing.",
    count: 5,
  },
  {
    slug: "shoulder-embroidery",
    icon: "award",
    title: "Shoulder Design",
    description:
      "Flag designs and shoulder embroidery for uniforms and apparel.",
    count: 2,
  },
  {
    slug: "bundle-packages",
    icon: "box",
    title: "Bundle Packages",
    description: "Save big with our curated design packs and bundle deals.",
    count: 6,
  },
];
