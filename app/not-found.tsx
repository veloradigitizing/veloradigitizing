import Link from "next/link";
import { Reveal } from "./components/Reveal";
import HomeIcon from "lucide-react/dist/esm/icons/home";
import SearchIcon from "lucide-react/dist/esm/icons/search";
import ArrowLeftIcon from "lucide-react/dist/esm/icons/arrow-left";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden bg-navy-950 px-4 py-20">
      {/* Decorative background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-gold-400/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-brand-600/8 blur-3xl" />

      {/* Shimmer line top */}
      <div className="vr-shimmer-line pointer-events-none absolute inset-x-0 top-0 h-px" />

      {/* Content */}
      <Reveal as="div" direction="scale" duration={0.8} className="relative z-10 mx-auto max-w-2xl text-center">
        {/* Giant 404 */}
        <h1 className="font-serif text-[8rem] font-bold leading-none tracking-tight text-white/[0.04] select-none sm:text-[12rem]">
          404
        </h1>

        <h2 className="-mt-14 font-serif text-3xl font-bold leading-tight text-white sm:-mt-20 sm:text-5xl">
          Page Not{" "}
          <span className="bg-gradient-to-r from-brand-500 to-gold-400 bg-clip-text text-transparent">
            Found
          </span>
        </h2>

        <p className="mx-auto mt-4 max-w-md text-base text-white/50 sm:text-lg">
          The page you are looking for doesn&apos;t exist or has been moved.
          Let us help you find your way back.
        </p>

        {/* Action buttons */}
        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="vr-btn vr-btn-primary group inline-flex items-center gap-2 rounded-md bg-white px-7 py-3.5 text-sm font-semibold text-navy-950 transition-colors hover:bg-brand-50"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            Back to Home
            <span aria-hidden className="vr-arrow">&rarr;</span>
          </Link>
          <Link
            href="/contact"
            className="vr-btn group inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white/80 backdrop-blur-sm transition-colors hover:border-brand-500/40 hover:bg-white/10 hover:text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            Contact Us
          </Link>
        </div>

        {/* Quick links */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-white/30">
          <span className="text-white/20">Popular:</span>
          <Link href="/services" className="vr-link transition-colors hover:text-gold-400">Services</Link>
          <span className="text-white/10">&middot;</span>
          <Link href="/portfolio" className="vr-link transition-colors hover:text-gold-400">Portfolio</Link>
          <span className="text-white/10">&middot;</span>
          <Link href="/store" className="vr-link transition-colors hover:text-gold-400">Store</Link>
          <span className="text-white/10">&middot;</span>
          <Link href="/about" className="vr-link transition-colors hover:text-gold-400">About</Link>
        </div>
      </Reveal>
    </section>
  );
}
