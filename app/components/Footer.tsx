import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa6";
import Logo from "./Logo";

const SOCIALS = [
  { label: "Facebook", Icon: FaFacebookF },
  { label: "Instagram", Icon: FaInstagram },
  { label: "LinkedIn", Icon: FaLinkedinIn },
  { label: "Email", Icon: FaEnvelope },
];

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact Us", href: "/contact" },
];

const SERVICE_LINKS = [
  { label: "Embroidery Digitizing", href: "/services" },
  { label: "Vector Conversion", href: "/services" },
  { label: "Rush Orders", href: "/services" },
  { label: "Patches", href: "/services" },
  { label: "3D Puff Digitizing", href: "/services" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white/70">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
        <div>
          <Logo dark />
          <p className="mt-4 text-sm leading-relaxed">
            We provide premium quality embroidery digitizing services with
            fast turnaround, high stitch quality and 100% satisfaction.
          </p>
          <div className="mt-5 flex gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-white/40 hover:bg-white/5 hover:text-white"
              >
                <s.Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-3 text-sm">
            {QUICK_LINKS.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">
            Services
          </h4>
          <ul className="flex flex-col gap-3 text-sm">
            {SERVICE_LINKS.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">
            Contact Us
          </h4>
          <ul className="flex flex-col gap-3 text-sm">
            <li>+1 (213) 456-7880</li>
            <li>info@vesperdigitizing.com</li>
            <li>www.vesperdigitizing.com</li>
            <li>24/7 Support</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-5 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-xs text-white/50 sm:flex-row">
          <p>&copy; 2026 Vesper Digitizing. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
