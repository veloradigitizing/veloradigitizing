import Image from "next/image";

export type PortfolioItem = {
  title: string;
  tag: string;
  category: string;
  image: string;
};

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  { title: "Tiger Logo",        tag: "Jacket Back",     category: "jacket-back",    image: "/images/portfolio/emb-01.jpg" },
  { title: "NY Logo",           tag: "3D Puff",         category: "3d-puff",        image: "/images/portfolio/emb-02.jpg" },
  { title: "Lakers Logo",       tag: "Left Chest",      category: "left-chest",     image: "/images/portfolio/emb-03.png" },
  { title: "Bear Design",       tag: "Patches",         category: "patches",        image: "/images/portfolio/emb-04.jpg" },
  { title: "Under Armour",      tag: "Logo Digitizing", category: "logo-digitizing",image: "/images/portfolio/emb-05.png" },
  { title: "Skull Patch",       tag: "Patches",         category: "patches",        image: "/images/portfolio/emb-06.jpg" },
  { title: "Nike Logo",         tag: "Left Chest",      category: "left-chest",     image: "/images/portfolio/emb-07.jpg" },
  { title: "LA Cap Logo",       tag: "Cap / Hat",       category: "cap-hat",        image: "/images/portfolio/emb-08.jpg" },
  { title: "Applique Design",   tag: "Applique",        category: "applique",       image: "/images/portfolio/emb-09.jpg" },
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
      <div className="flex items-center justify-between px-4 py-3">
        <p className="text-sm font-semibold text-navy-950">{item.title}</p>
        <span className="rounded-full bg-brand-50 px-2.5 py-1 text-[10px] font-medium text-brand-600">
          View
        </span>
      </div>
    </div>
  );
}
