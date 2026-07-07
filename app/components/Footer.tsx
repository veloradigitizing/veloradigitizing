import Link from "next/link";
import Logo from "./Logo";

const SOCIALS = [
  { label: "Facebook", d: "M13 22v-8h3l1-4h-4V7.5C13 6.5 13.5 6 14.7 6H17V2.2C16.6 2.1 15.3 2 14 2c-3 0-5 1.8-5 5.2V10H6v4h3v8h4z" },
  { label: "Instagram", d: "M12 2c2.7 0 3 0 4.1.06 1.1.05 1.8.22 2.4.47.7.27 1.2.62 1.7 1.13.5.5.86 1 1.13 1.7.25.6.42 1.3.47 2.4C22 8.4 22 8.7 22 12s0 3.6-.06 4.7c-.05 1.1-.22 1.8-.47 2.4a4.6 4.6 0 0 1-1.13 1.7 4.6 4.6 0 0 1-1.7 1.13c-.6.25-1.3.42-2.4.47C14.6 22 14.3 22 12 22s-3.6 0-4.7-.06c-1.1-.05-1.8-.22-2.4-.47a4.6 4.6 0 0 1-1.7-1.13 4.6 4.6 0 0 1-1.13-1.7c-.25-.6-.42-1.3-.47-2.4C2 15.6 2 15.3 2 12s0-3.6.06-4.7c.05-1.1.22-1.8.47-2.4.27-.7.62-1.2 1.13-1.7A4.6 4.6 0 0 1 5.36 1.6c.6-.25 1.3-.42 2.4-.47C8.87 1 9.2 1 12 1zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2A3.2 3.2 0 1 1 12 8.8a3.2 3.2 0 0 1 0 6.4zm5.2-8.4a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4z" },
  { label: "WhatsApp", d: "M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.2-.1-1-.4-2-1.2-.7-.6-1.2-1.4-1.4-1.6-.1-.2 0-.4.1-.5l.4-.4c.1-.1.2-.3.2-.4 0-.2 0-.3 0-.4L9 8.9c-.1-.2-.5-1.2-.7-1.6-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 2s.8 2.3 1 2.5c.1.2 1.6 2.5 3.9 3.5.5.2 1 .4 1.3.5.5.2 1 .1 1.4 0 .4-.1 1.5-.6 1.7-1.2.2-.6.2-1 .1-1.2-.1-.1-.2-.2-.5-.3z" },
  { label: "YouTube", d: "M22 12s0-3.4-.4-5A2.9 2.9 0 0 0 19.5 5c-2.5-.2-6.5-.2-6.5-.2s-4 0-6.5.2A2.9 2.9 0 0 0 2.4 7C2 8.6 2 12 2 12s0 3.4.4 5a2.9 2.9 0 0 0 2.1 2c2.5.2 6.5.2 6.5.2s4 0 6.5-.2a2.9 2.9 0 0 0 2.1-2c.4-1.6.4-5 .4-5zM10 15.5v-7l6 3.5-6 3.5z" },
  { label: "LinkedIn", d: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97V21H9z" },
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
              <span
                key={s.label}
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d={s.d} />
                </svg>
              </span>
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
            <li>info@veloradigitizing.com</li>
            <li>www.veloradigitizing.com</li>
            <li>24/7 Support</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-5 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-xs text-white/50 sm:flex-row">
          <p>&copy; 2026 Velora Digitizing. All Rights Reserved.</p>
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
