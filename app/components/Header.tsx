"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import Icon from "./Icon";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-navy-950/10 bg-white/90 backdrop-blur-md shadow-[0_6px_24px_-12px_rgba(6,14,40,0.18)]"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-10">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`vr-underline text-[13px] font-semibold uppercase tracking-wide transition-colors ${
                  active
                    ? "text-brand-600 is-active"
                    : "text-navy-950/70 hover:text-brand-600"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          {pathname.startsWith("/store") && (
            <Link
              href="/store"
              className="relative flex h-9 w-9 items-center justify-center rounded-full border border-navy-950/15 text-navy-950/70 transition-colors hover:border-brand-600 hover:text-brand-600"
              aria-label="Cart"
            >
              <Icon name="cart" className="h-[18px] w-[18px]" />
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-brand-600 text-[9px] font-bold text-white">
                1
              </span>
            </Link>
          )}
          <Link
            href="/contact"
            className="vr-btn vr-btn-primary flex items-center gap-2 rounded-md bg-brand-600 px-5 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-brand-700"
          >
            GET FREE QUOTE
            <span aria-hidden className="vr-arrow">&rarr;</span>
          </Link>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-md border border-navy-950/15 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-navy-950/10 bg-white px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`text-sm font-semibold uppercase tracking-wide ${
                    active ? "text-brand-600" : "text-navy-950/70"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="vr-btn vr-btn-primary mt-2 flex items-center justify-center gap-2 rounded-md bg-brand-600 px-5 py-3 text-sm font-semibold text-white"
            >
              GET FREE QUOTE
              <span aria-hidden className="vr-arrow">&rarr;</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
