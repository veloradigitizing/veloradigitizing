import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaEnvelope,
  FaTiktok,
  FaXTwitter,
  FaYoutube,
  FaThreads,
} from "react-icons/fa6";
import Logo from "./Logo";

const SOCIALS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1Dtbi6tg9V/",
    Icon: FaFacebookF,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/veloradigitizing",
    Icon: FaInstagram,
  },
  {
    label: "Threads",
    href: "https://www.threads.com/@veloradigitizing?invite=0",
    Icon: FaThreads,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@muheeb.rehmani?_r=1&_t=ZS-9846QsaPrjY",
    Icon: FaTiktok,
  },
  {
    label: "X",
    href: "https://x.com/burlinleo",
    Icon: FaXTwitter,
  },
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
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact Us", href: "/contact" },
];

const SERVICE_LINKS = [
  {
    label: "Embroidery Digitizing",
    href: "/services?category=embroidery-digitizing",
  },
  {
    label: "3D Puff Design",
    href: "/services?category=3d-puff-design",
  },
  {
    label: "Left Chest Design",
    href: "/services?category=left-chest-design",
  },
  {
    label: "Applique Design",
    href: "/services?category=applique-design",
  },
  {
    label: "Shoulder Design",
    href: "/services?category=shoulder-design",
  },
  {
    label: "Cap Design",
    href: "/services?category=cap-design",
  },
  {
    label: "Jacket Back Design",
    href: "/services?category=jacket-back-design",
  },
  {
    label: "Custom Patches",
    href: "/services?category=custom-patches",
  },
  {
    label: "Vector Artwork",
    href: "/services?category=vector-artwork",
  },
];
export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white/70">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
        {/* Company */}
        <div>
          <Logo dark />

          <p className="mt-4 text-sm leading-relaxed">
            We provide premium quality embroidery digitizing services with fast
            turnaround, high stitch quality and 100% satisfaction.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                title={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition-all duration-300 hover:border-white/40 hover:bg-white/5 hover:text-white"
              >
                <s.Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">
            Quick Links
          </h4>

          <ul className="flex flex-col gap-3 text-sm">
            {QUICK_LINKS.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="transition-colors hover:text-white"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">
            Services
          </h4>

          <ul className="flex flex-col gap-3 text-sm">
            {SERVICE_LINKS.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="transition-colors hover:text-white"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">
            Contact Us
          </h4>

          <ul className="flex flex-col gap-3 text-sm">
            <li>
              <a
                href="tel:+12134567880"
                className="transition-colors hover:text-white"
              >
                +1 (213) 456-7880
              </a>
            </li>

            <li>
              <a
                href="mailto:info@veloradigitizing.com"
                className="transition-colors hover:text-white"
              >
                info@veloradigitizing.com
              </a>
            </li>

            <li>
              <a
                href="https://www.veloradigitizing.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                www.veloradigitizing.com
              </a>
            </li>

            <li>24/7 Support</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-5 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-xs text-white/50 sm:flex-row">
          <p>&copy; 2026 Velora Digitizing. All Rights Reserved.</p>

          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link href="/terms" className="transition-colors hover:text-white">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
