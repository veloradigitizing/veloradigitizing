import Link from "next/link";

export default function CTABanner({
  title = "Ready to Digitize Your Design?",
  subtitle = "Get your FREE quote now and experience premium quality digitizing.",
  ctaLabel = "START YOUR ORDER",
  href = "/contact",
}: {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  href?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-950">
      <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-brand-500/10 blur-3xl" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 py-12 text-center lg:flex-row lg:px-10 lg:text-left">
        <div>
          <h3 className="font-serif text-2xl font-bold text-white sm:text-3xl">
            {title}
          </h3>
          <p className="mt-2 text-sm text-white/60">{subtitle}</p>
        </div>
        <Link
          href={href}
          className="flex shrink-0 items-center gap-2 rounded-md bg-white px-7 py-3.5 text-sm font-semibold text-navy-950 transition-colors hover:bg-brand-50"
        >
          {ctaLabel} <span aria-hidden>&rarr;</span>
        </Link>
      </div>
    </section>
  );
}
