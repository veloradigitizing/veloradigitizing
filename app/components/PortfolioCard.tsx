import PlaceholderBox from "./PlaceholderBox";

export type PortfolioItem = {
  title: string;
  tag: string;
  category: string;
};

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  { title: "Tiger Logo", tag: "Jacket Back", category: "jacket-back" },
  { title: "NY Logo", tag: "3D Puff", category: "3d-puff" },
  { title: "Lakers Logo", tag: "Left Chest", category: "left-chest" },
  { title: "Bear Design", tag: "Patches", category: "patches" },
  { title: "Under Armour", tag: "Logo Digitizing", category: "logo-digitizing" },
  { title: "Skull Patch", tag: "Patches", category: "patches" },
  { title: "Nike Logo", tag: "Left Chest", category: "left-chest" },
  { title: "LA Cap Logo", tag: "Cap / Hat", category: "cap-hat" },
  { title: "Applique Design", tag: "Applique", category: "applique" },
];

export const PORTFOLIO_CATEGORIES = [
  { label: "All Work", value: "all" },
  { label: "3D Puff", value: "3d-puff" },
  { label: "Left Chest", value: "left-chest" },
  { label: "Jacket Back", value: "jacket-back" },
  { label: "Cap / Hat", value: "cap-hat" },
  { label: "Patches", value: "patches" },
  { label: "Applique", value: "applique" },
  { label: "Logo Digitizing", value: "logo-digitizing" },
];

export default function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <div className="overflow-hidden rounded-xl border border-navy-950/10 bg-white transition-shadow hover:shadow-lg">
      <div className="grid grid-cols-2">
        <div className="relative">
          <PlaceholderBox
            label={item.title}
            className="aspect-square w-full"
            rounded="rounded-none"
          />
          <span className="absolute left-2 top-2 rounded bg-white/90 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-navy-950/70">
            Before
          </span>
        </div>
        <div className="relative">
          <PlaceholderBox
            label={item.title}
            className="aspect-square w-full"
            rounded="rounded-none"
          />
          <span className="absolute left-2 top-2 rounded bg-brand-600 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white">
            After
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between px-4 py-3">
        <p className="text-sm font-semibold text-navy-950">{item.title}</p>
        <span className="rounded-full bg-brand-50 px-2.5 py-1 text-[10px] font-medium text-brand-600">
          {item.tag}
        </span>
      </div>
    </div>
  );
}
