import Link from "next/link";
import {
  FaInstagram,
  FaEnvelope,
  FaTiktok,
  FaXTwitter,
  FaYoutube,
  FaThreads,
  FaPinterestP,
} from "react-icons/fa6";
import { SiTrustpilot } from "react-icons/si";
import { Mail, Phone, Clock, MapPin, ArrowRight } from "lucide-react";
import Logo from "./Logo";

const SOCIALS = [
  {
    label: "Pinterest",
    href: "https://www.pinterest.com/veloradigitizing/",
    Icon: FaPinterestP,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/veloradigitizing",
    Icon: FaInstagram,
  },
  {
    label: "Threads",
    href: "https://www.threads.net/@veloradigitizing",
    Icon: FaThreads,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@muheeb.rehmani?_r=1&_t=ZS-9846QsaPrjY",
    Icon: FaTiktok,
  },
  { label: "X", href: "https://x.com/burlinleo", Icon: FaXTwitter },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@VeloraDigitizing",
    Icon: FaYoutube,
  },
  {
    label: "Email",
    href: "mailto:info@veloradigitizing.com",
    Icon: FaEnvelope,
  },
];

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Embroidery Store", href: "/store" },
  { label: "70 Patches Bundle", href: "/store/70-patches-pack-1" },
  { label: "100 Patches Pack", href: "/store/100-patches-mega-pack" },
  { label: "50 Patches Pack", href: "/store/50-patches-starter-pack" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

const SERVICE_LINKS = [
  { label: "All Digitizing Services & Pricing", href: "/services" },
  { label: "3D Puff Embroidery Digitizing", href: "/services/3d-puff-digitizing" },
  { label: "Cap & Hat Logo Digitizing", href: "/services/cap-logo-digitizing" },
  { label: "Applique Embroidery Digitizing", href: "/services/applique-digitizing" },
  { label: "Vector Art Conversion Service", href: "/vector-art" },
  { label: "Custom Patches Digitizing", href: "/patches" },
  { label: "Jacket Back Digitizing", href: "/portfolio?category=jacket-back" },
  { label: "Left Chest Logo Digitizing", href: "/portfolio?category=left-chest" },
  { label: "Chenille Patch Digitizing", href: "/portfolio?category=chenille" },
  { label: "Towel Monogram Digitizing", href: "/portfolio?category=towel" },
  { label: "Bundle Packages", href: "/portfolio?category=bundles" },
];

const BLOG_LINKS = [
  {
    label: "Convert PNG to DST",
    href: "/blog/convert-png-jpg-to-dst-embroidery-file",
  },
  {
    label: "3D Puff Cap Digitizing",
    href: "/blog/3d-puff-embroidery-digitizing-guide",
  },
  {
    label: "DST vs PES vs JEF Files",
    href: "/blog/dst-vs-pes-vs-jef-embroidery-file-formats",
  },
  {
    label: "What Is Digitizing?",
    href: "/blog/what-is-embroidery-digitizing",
  },
  {
    label: "Prepare Logo for Digitizing",
    href: "/blog/how-to-prepare-logo-for-embroidery-digitizing",
  },
  {
    label: "Patch Types Compared",
    href: "/blog/custom-patch-types-embroidered-woven-pvc-leather-chenille",
  },
  {
    label: "Small Text Micro-Lettering",
    href: "/blog/how-to-digitize-small-text-micro-lettering-embroidery",
  },
  {
    label: "Towel Knockdown Stitches",
    href: "/blog/embroidery-on-towels-and-fleece-knockdown-stitch-guide",
  },
  {
    label: "Free Digitizing Software",
    href: "/blog/best-free-embroidery-digitizing-software-inkstitch-guide",
  },
  {
    label: "Varsity Chenille Patches",
    href: "/blog/chenille-and-varsity-jacket-patch-digitizing-guide",
  },
  {
    label: "Common Digitizing Mistakes",
    href: "/blog/common-embroidery-digitizing-mistakes",
  },
];


export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-navy-950 text-white"
    >
      {/* Decorative top gradient line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />

      {/* Background pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(36,81,221,0.08) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-6">
          {/* 1. Brand + tagline + socials */}
          <div className="lg:col-span-3">
            <Logo dark />

            <p className="mt-4 text-sm leading-relaxed text-white/85">
              We provide premium quality embroidery digitizing services with
              fast delivery and unbeatable customer support.
            </p>

            {/* Social Icons */}
            <div className="mt-5 flex flex-wrap items-center gap-2.5">
              {SOCIALS.map(({ Icon, label, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  aria-label={`Follow Velora Digitizing on ${label}`}
                  className="group flex h-10 w-10 min-h-[40px] min-w-[40px] items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:scale-110 hover:bg-brand-600 hover:shadow-[0_4px_12px_-4px_rgba(26,63,196,0.5)] focus:outline-none focus:ring-2 focus:ring-brand-500/50"
                >
                  <Icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                </a>
              ))}
            </div>

            {/* Trustpilot Review Badge */}
            <a
              href="https://www.trustpilot.com/review/veloradigitizing.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Velora Digitizing on Trustpilot"
              className="mt-4 inline-flex items-center gap-2 rounded-lg border border-emerald-500/25 bg-emerald-950/30 px-3 py-1.5 text-xs font-medium text-emerald-200 transition-all duration-300 hover:border-emerald-500/50 hover:bg-emerald-900/40 hover:text-white"
            >
              <SiTrustpilot className="h-4 w-4 text-[#00b67a]" />
              <span>Find us on <strong className="font-semibold text-white">Trustpilot</strong></span>
            </a>
          </div>

          {/* 2. Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-white/90 mb-4 leading-none">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {QUICK_LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="inline-block py-1 text-sm text-white/80 transition-all duration-200 hover:text-white hover:translate-x-1 focus:outline-none focus:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Services */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-white/90 mb-4 leading-none">
              Services
            </h3>
            <ul className="space-y-2">
              {SERVICE_LINKS.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="inline-block py-1 text-sm text-white/80 transition-all duration-200 hover:text-white hover:translate-x-1 focus:outline-none focus:text-white"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Guides & Articles (Blog) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-white/90 mb-4 leading-none">
              Guides &amp; Blog
            </h3>
            <ul className="space-y-2">
              {BLOG_LINKS.map((b) => (
                <li key={b.label}>
                  <Link
                    href={b.href}
                    className="inline-block py-1 text-sm text-white/80 transition-all duration-200 hover:text-white hover:translate-x-1 focus:outline-none focus:text-white"
                  >
                    {b.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 5. Contact Us */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-white/90 mb-4 leading-none">
              Contact Us
            </h3>

            <ul className="space-y-3 text-sm text-white/80">
              {/* Email */}
              <li className="group flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-400 transition-transform duration-300 group-hover:scale-110" />
                <a
                  href="mailto:info@veloradigitizing.com"
                  aria-label="Email Velora Digitizing at info@veloradigitizing.com"
                  className="whitespace-nowrap transition-colors duration-300 hover:text-white focus:outline-none focus:text-white"
                >
                  info@veloradigitizing.com
                </a>
              </li>

              {/* Phone */}
              <li className="group flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-400 transition-transform duration-300 group-hover:scale-110" />
                <span className="space-y-0.5">
                  <a
                    href="tel:+12136358137"
                    aria-label="Call Velora Digitizing at +1 (213) 635-8137"
                    className="block transition-colors duration-300 hover:text-white focus:outline-none focus:text-white"
                  >
                    +1 (213) 635-8137
                  </a>
                  <span className="block text-xs text-white/60">
                    WhatsApp Available
                  </span>
                </span>
              </li>

              {/* Business & Support Hours */}
              <li className="group flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-400 transition-transform duration-300 group-hover:scale-110" />
                <div className="leading-relaxed">
                  <p className="font-medium text-white/95">24/7 Chat, Email &amp; Order Intake</p>
                  <p className="text-sm text-white/75 mt-0.5">
                    Phone Lines: Mon - Sat 9:00 AM - 7:00 PM PT
                  </p>
                  <p className="text-xs text-white/60 mt-0.5">
                    Sunday: Phone lines closed (WhatsApp &amp; Email active 24/7)
                  </p>
                </div>
              </li>

              {/* Location */}
              <li className="group flex items-start gap-3 pt-2 border-t border-white/10">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400 transition-transform duration-300 group-hover:scale-110" />
                <div className="leading-relaxed">
                  <p className="font-medium text-white/95">Head Office</p>
                  <p className="text-sm text-white/75 mt-0.5">
                    128 Business Blvd, Suite 204
                  </p>
                  <p className="text-sm text-white/75">
                    Los Angeles, CA 90017, USA
                  </p>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=128+Business+Blvd+Suite+204+Los+Angeles+CA+90017"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    aria-label="View Velora Digitizing office on Google Maps"
                    className="inline-flex items-center gap-1 mt-2 text-xs font-medium text-brand-300 hover:text-white transition-colors duration-300 focus:outline-none focus:underline py-1"
                  >
                    View on Google Maps
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-white/70 order-2 sm:order-1">
            &copy; 2026 Velora Digitizing. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-white/70 order-1 sm:order-2">
            <Link
              href="/privacy-policy"
              className="py-1 transition-colors duration-300 hover:text-white focus:outline-none focus:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="py-1 transition-colors duration-300 hover:text-white focus:outline-none focus:text-white"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
