export default function PlaceholderBox({
  label,
  className = "",
  rounded = "rounded-xl",
  iconSize = 28,
}: {
  label?: string;
  className?: string;
  rounded?: string;
  iconSize?: number;
}) {
  return (
    <div
      className={`flex items-center justify-center border border-dashed border-navy-900/20 bg-navy-900/[0.035] text-navy-900/30 ${rounded} ${className}`}
    >
      <div className="flex flex-col items-center gap-1.5 px-2 text-center">
        <svg
          width={iconSize}
          height={iconSize}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="M21 15l-5-5L5 21" />
        </svg>
        {label && (
          <span className="text-[10px] font-semibold uppercase tracking-wide leading-tight">
            {label}
          </span>
        )}
      </div>
    </div>
  );
}
