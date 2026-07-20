"use client";

import Icon, { IconName } from "./Icon";

type CategoryItem = { value: string; label: string; icon: string };

export default function StoreFilterSidebar({
  categories,
  activeCategory,
  query,
  maxPrice,
  filteredCount,
  onCategoryChange,
  onQueryChange,
  onMaxPriceChange,
  onClearFilters,
  isOpen,
}: {
  categories: CategoryItem[];
  activeCategory: string;
  query: string;
  maxPrice: number;
  filteredCount: number;
  onCategoryChange: (val: string) => void;
  onQueryChange: (val: string) => void;
  onMaxPriceChange: (val: number) => void;
  onClearFilters: () => void;
  isOpen: boolean;
}) {
  const hasFilters = activeCategory !== "all" || query || maxPrice < 20;

  return (
    <aside className={`${isOpen ? "block" : "hidden"} lg:block`}>
      <div className="sticky top-24 rounded-xl border border-navy-950/10 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold uppercase tracking-wider text-navy-950">
            Patch Filters
          </h3>
          {hasFilters && (
            <button
              onClick={onClearFilters}
              className="text-xs font-semibold text-brand-600 hover:text-brand-700"
            >
              Clear all
            </button>
          )}
        </div>

        {/* Search Filter */}
        <div className="relative mt-5">
          <Icon
            name="search"
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-950/35"
          />
          <input
            type="text"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Search patches..."
            className="h-10 w-full rounded-lg border border-navy-950/12 pl-9 pr-3 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15"
          />
        </div>

        {/* Category Filter */}
        <div className="mt-6">
          <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-navy-950/60">
            Patch Type
          </h4>
          <div className="flex flex-col gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => onCategoryChange(cat.value)}
                className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm font-medium transition-all ${
                  activeCategory === cat.value
                    ? "bg-brand-50 text-brand-700 ring-1 ring-brand-500/20"
                    : "text-navy-950/65 hover:bg-navy-950/[0.03] hover:text-navy-950"
                }`}
              >
                <Icon
                  name={cat.icon as IconName}
                  className={`h-4 w-4 ${activeCategory === cat.value ? "text-brand-600" : "text-navy-930/40"}`}
                />
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Price Range Filter */}
        <div className="mt-6">
          <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-navy-950/60">
            Price Range
          </h4>
          <input
            type="range"
            min="0"
            max="20"
            step="0.5"
            value={maxPrice}
            onChange={(e) => onMaxPriceChange(Number(e.target.value))}
            className="mt-2 w-full accent-brand-600"
          />
          <div className="mt-2 flex items-center justify-between text-xs text-navy-950/50">
            <span>$0</span>
            <span className="rounded-full bg-brand-50 px-2.5 py-1 font-semibold text-brand-700">
              Up to ${maxPrice.toFixed(2)}
            </span>
            <span>$20+</span>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-6 rounded-lg bg-navy-950/[0.02] p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-navy-950/50">
            Available Patches
          </p>
          <p className="mt-1 text-2xl font-bold text-brand-600">
            {filteredCount}
            <span className="ml-1 text-sm font-normal text-navy-950/40">
              designs
            </span>
          </p>
        </div>

        {/* Clear Filters Button */}
        <button
          onClick={onClearFilters}
          className="mt-6 w-full rounded-lg border border-brand-300 bg-white px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-brand-600 transition-all hover:bg-brand-600 hover:text-white hover:border-brand-600"
        >
          Clear All Filters
        </button>
      </div>
    </aside>
  );
}
