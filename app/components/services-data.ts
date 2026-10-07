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
  transform?: boolean;
};

export const SERVICES: Service[] = [
  {
    slug: "patch-digitizing",
    icon: "sticker",
    iconImage: "/images/icons/services/patchdigitizing.png",
    title: "Custom Patch Digitizing",
    description: "Custom embroidery patch digitizing with merrowed borders for hats, jackets and bags.",
    count: 21,
  },
  {
    slug: "custom-patches",
    icon: "star",
    iconImage: "/images/icons/services/custompatch.png",
    title: "Ready-to-Stitch Patch Files",
    description:
      "Ready-to-stitch patch files and custom designs for gaming, outdoor & lifestyle brands.",
    count: 11,
  },
  {
    slug: "cap-logo-digitizing",
    icon: "cap",
    iconImage: "/images/icons/services/capIcon1.png",
    title: "Cap & Hat Logo Digitizing",
    description:
      "Specialized center-out digitizing for structured snapbacks, dad hats, visors & beanies.",
    count: 5,
  },
  {
    slug: "chenille-digitizing",
    icon: "feather",
    iconImage: "/images/icons/services/chenille-digitizing1.png",
    title: "Chenille Patch Digitizing",
    description: "Fluffy loop chenille lettering and emblem digitizing for varsity jackets.",
    count: 6,
  },
  {
    slug: "jacket-back-digitizing",
    icon: "panel-top",
    iconImage: "/images/icons/services/jacket-back-digitizing1.png",
    title: "Jacket Back Digitizing",
    description:
      "Large-format full back embroidery digitizing for denim, bomber & leather jackets.",
    count: 2,
  },
  {
    slug: "left-chest-logo",
    icon: "shirt-logo",
    iconImage: "/images/icons/services/left-chest-logo1.png",
    title: "Left Chest Logo Digitizing",
    description: "Crisp lettering and corporate logo digitizing for polo shirts & uniforms.",
    count: 3,
  },
  {
    slug: "3d-puff-digitizing",
    icon: "layers",
    iconImage: "/images/icons/services/3d-puff-digitizing1.png",
    title: "3D Puff Embroidery Digitizing",
    description:
      "Raised 3D foam puff embroidery digitizing for bold dimensional logos on headwear.",
    count: 1,
  },
  {
    slug: "towel-embroidery",
    icon: "towel-rack",
    iconImage: "/images/icons/services/towel-embroidery1.png",
    title: "Towel Monogram Digitizing",
    description: "Knockdown stitch digitizing for plush towels, bathrobes & blankets.",
    count: 4,
  },
  {
    slug: "applique-digitizing",
    icon: "scissors",
    iconImage: "/images/icons/services/applique-digitizing1.png",
    title: "Applique Embroidery Digitizing",
    description: "Positioning line, tackdown & satin border applique digitizing for jerseys.",
    count: 2,
  },
  {
    slug: "vector-art",
    icon: "pen-tool",
    iconImage: "/images/icons/services/vector.png",
    title: "Vector Art Conversion Service",
    description:
      "Manual raster to vector tracing (AI, EPS, SVG, PDF) for screen printing & DTF.",
    count: 5,
  },
  {
    slug: "sleeve-embroidery",
    icon: "sleeve-patch",
    iconImage: "/images/icons/services/sleeve-embroidery1.png",
    title: "Sleeve Design",
    description: "Flag designs and sleeve embroidery for uniforms and apparel.",
    count: 2,
  },
  {
    slug: "bundle-packages",
    icon: "box",
    iconImage: "/images/icons/services/bundle1.png",
    title: "Bundle Packages",
    description: "Save big with our curated design packs and bundle deals.",
    count: 6,
    transform: true,
  },
];
