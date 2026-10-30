// Render the final count on the server; no animation loop or hydration is needed.
export default function HeroStatsCard() {
  return (
    <div
      className="vr-hero-fade absolute hidden lg:flex lg:top-40 lg:right-10 xl:top-48"
      style={{ animationDelay: "0.5s" }}
    >
      <div className="flex items-center gap-4 rounded-2xl bg-white px-6 py-4 shadow-2xl ring-1 ring-navy-950/5 vr-float">
        <div>
          <div className="font-serif text-3xl font-extrabold text-brand-600">
            <span>3,200+</span>
          </div>
          <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-700">
            Completed Projects
          </div>
        </div>
        <div className="h-10 w-px bg-navy-950/10" aria-hidden />
        <div>
          <div className="flex items-center gap-1.5">
            {["DST", "PES", "JEF"].map((format) => (
              <span key={format} className="rounded-md bg-brand-50 px-2 py-1 text-xs font-bold tracking-wide text-brand-700">
                {format}
              </span>
            ))}
          </div>
          <div className="mt-1.5 text-[10px] font-semibold uppercase tracking-wider text-slate-700">
            Machine File Formats
          </div>
        </div>
      </div>
    </div>
  );
}
