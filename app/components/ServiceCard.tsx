import Link from "next/link";
import Icon, { IconName } from "./Icon";
import { IconCircle } from "./Section";

export type Service = {
  slug: string;
  icon: IconName;
  title: string;
  features: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "embroidery-digitizing",
    icon: "stitch",
    title: "Embroidery Digitizing",
    features: ["Left Chest", "Jacket Back", "Cap / Hat", "3D Puff", "Applique", "Monogram"],
  },
  {
    slug: "vector-conversion",
    icon: "share",
    title: "Vector Conversion",
    features: ["AI, EPS, SVG", "PDF to Vector", "Logo Redraw", "Image to Vector", "High Quality Output"],
  },
  {
    slug: "rush-orders",
    icon: "clock",
    title: "Rush Orders",
    features: ["2 Hours Delivery", "4 Hours Delivery", "Same Day Delivery", "Emergency Orders", "Weekend Orders"],
  },
  {
    slug: "3d-puff-digitizing",
    icon: "layers",
    title: "3D Puff Digitizing",
    features: ["3D Puff Logo", "High Density Puff", "Regular Puff", "Cap Puff", "Jacket Puff"],
  },
  {
    slug: "applique-digitizing",
    icon: "scissors",
    title: "Applique Digitizing",
    features: ["Clean Applique", "Raw Edge Applique", "Laser Cut Applique", "Twill Applique", "Custom Applique"],
  },
  {
    slug: "chenille-digitizing",
    icon: "grid",
    title: "Chenille Digitizing",
    features: ["Chenille Patches", "Chain Stitch", "Jacket Back", "Letterman Jackets", "High Quality"],
  },
  {
    slug: "patch-digitizing",
    icon: "badge-check",
    title: "Patch Digitizing",
    features: ["Embroidered Patches", "Badge Digitizing", "Merrow Border", "Heat Cut Border", "Sew On Patches"],
  },
  {
    slug: "logo-digitizing",
    icon: "tag",
    title: "Logo Digitizing",
    features: ["Business Logo", "Small Logos", "Complex Logos", "Multi Color Logos", "High Stitch Quality"],
  },
];

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="vr-lift group flex flex-col rounded-2xl border border-navy-950/10 bg-white p-7">
      <span className="vr-icon-pop inline-flex">
        <IconCircle icon={service.icon} size="lg" />
      </span>
      <h3 className="mt-5 text-[15px] font-bold uppercase tracking-wide text-navy-950">
        {service.title}
      </h3>
      <ul className="mt-4 flex flex-1 flex-col gap-2.5">
        {service.features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-sm text-navy-950/60">
            <Icon name="badge-check" className="h-4 w-4 shrink-0 text-brand-600" />
            {f}
          </li>
        ))}
      </ul>
      <Link
        href="/services"
        className="vr-btn mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-bold text-brand-600 hover:text-brand-700"
      >
        LEARN MORE <span aria-hidden className="vr-arrow">&rarr;</span>
      </Link>
    </div>
  );
}
