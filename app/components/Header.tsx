"use client";

// Enhanced Header — features copied from Vesper:
//   • Glass / blur backdrop
//   • Hides on scroll down, shows on scroll up (more screen real estate)
//   • Subtle shadow appears only after scrolling
//   • Live cart badge with count
//   • Mobile menu slides in with stagger animation
//   • Smooth transitions throughout
//   • VELORA THEME (navy/brand colors - NOT red)

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import Icon from "./Icon";
import { useCart } from "../context/CartContext";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/store", label: "Store" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

function CartButton() {
  const { itemCount, toggleCart } = useCart();

  return (
    <button
      onClick={toggleCart}
      className="relative flex h-9 w-9 items-center justify-center rounded-full border border-navy-950/15 text-navy-950/70 transition-colors hover:border-brand-600 hover:text-brand-600"
      aria-label="Open cart"
    >
      <Icon name="cart" className="h-[18px] w-[18px]" />
      {itemCount > 0 && (
        <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-brand-600 text-[9px] font-bold text-white">
          {itemCount > 9 ? "9+" : itemCount}
        </span>
      )}
    </button>
  );
}

function CartDrawer() {
  const { items, updateQty, removeItem, itemCount, subtotal, isCartOpen, closeCart } =
    useCart();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isCartOpen]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCart();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [closeCart]);

  if (!mounted) return null;

  return createPortal(
    <div
      className={`fixed inset-0 z-[70] transition-opacity duration-300 ${
        isCartOpen
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      }`}
      aria-hidden={!isCartOpen}
    >
      <div
        onClick={closeCart}
        className="absolute inset-0 bg-navy-950/40 backdrop-blur-sm"
      />
      <div
        className={`absolute right-0 top-0 flex h-full w-full max-w-sm flex-col bg-white shadow-[-16px_0_40px_-16px_rgba(6,14,40,0.35)] transition-transform duration-300 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-navy-950/10 px-5 py-4">
          <p className="font-serif text-lg font-bold text-navy-950">
            Your Cart {itemCount > 0 && `(${itemCount})`}
          </p>
          <button
            aria-label="Close cart"
            onClick={closeCart}
            className="flex h-8 w-8 items-center justify-center rounded-full text-navy-950/50 transition-colors hover:bg-navy-950/5 hover:text-navy-950"
          >
            <Icon name="close" className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 px-5 text-center">
            <Icon name="cart" className="h-10 w-10 text-navy-950/20" />
            <p className="text-sm text-navy-950/50">Your cart is empty.</p>
            <Link
              href="/store"
              onClick={closeCart}
              className="vr-btn vr-btn-primary mt-2 rounded-md bg-brand-600 px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-white hover:bg-brand-700"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-5 py-4">
              <div className="flex flex-col gap-5">
                {items.map((item) => (
                  <div key={item.id} className="flex items-start gap-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-16 w-16 flex-none rounded-lg object-cover"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-navy-950">
                        {item.title}
                      </p>
                      <p className="mt-0.5 text-sm font-bold text-brand-600">
                        ${item.price.toFixed(2)}
                      </p>
                      <div className="mt-2 flex items-center gap-2">
                        <button
                          aria-label="Decrease quantity"
                          onClick={() => updateQty(item.id, item.qty - 1)}
                          className="flex h-6 w-6 items-center justify-center rounded-md border border-navy-950/15 text-navy-950/60 transition-colors hover:border-brand-600 hover:text-brand-600"
                        >
                          <Icon name="minus" className="h-3 w-3" />
                        </button>
                        <span className="w-4 text-center text-xs font-semibold text-navy-950">
                          {item.qty}
                        </span>
                        <button
                          aria-label="Increase quantity"
                          onClick={() => updateQty(item.id, item.qty + 1)}
                          className="flex h-6 w-6 items-center justify-center rounded-md border border-navy-950/15 text-navy-950/60 transition-colors hover:border-brand-600 hover:text-brand-600"
                        >
                          <Icon name="plus" className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                    <button
                      aria-label="Remove item"
                      onClick={() => removeItem(item.id)}
                      className="flex h-7 w-7 flex-none items-center justify-center rounded-full text-navy-950/40 transition-colors hover:bg-red-50 hover:text-red-500"
                    >
                      <Icon name="trash" className="h-3.5 w-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-navy-950/10 px-5 py-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-navy-950/70">
                  Subtotal
                </span>
                <span className="font-serif text-lg font-bold text-navy-950">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <div className="mt-4 flex flex-col gap-2">
                <Link
                  href="/store"
                  onClick={closeCart}
                  className="vr-btn vr-btn-primary flex items-center justify-center gap-2 rounded-md bg-brand-600 px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-white hover:bg-brand-700"
                >
                  Checkout
                </Link>
                <Link
                  href="/store"
                  onClick={closeCart}
                  className="vr-btn flex items-center justify-center gap-2 rounded-md border border-navy-950/15 px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-navy-950/70 hover:border-brand-600 hover:text-brand-600"
                >
                  View Cart
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>,
    document.body
  );
}

function MobileNavDrawer({
  open,
  onClose,
  pathname,
}: {
  open: boolean;
  onClose: () => void;
  pathname: string;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  if (!mounted) return null;

  return createPortal(
    <div
      className={`fixed inset-0 z-[70] transition-opacity duration-300 lg:hidden ${
        open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-hidden={!open}
    >
      <div
        onClick={onClose}
        className="absolute inset-0 bg-navy-950/40 backdrop-blur-sm"
      />
      <div
        className={`absolute left-0 top-0 flex h-full w-full max-w-xs flex-col bg-white shadow-[16px_0_40px_-16px_rgba(6,14,40,0.35)] transition-transform duration-500 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-navy-950/10 px-5 py-4">
          <Logo />
          <button
            aria-label="Close menu"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full text-navy-950/50 transition-colors hover:bg-navy-950/5 hover:text-navy-950"
          >
            <Icon name="close" className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-5 py-4">
          {NAV_LINKS.map((link, idx) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className={`flex min-h-[44px] items-center rounded-md px-3 text-sm font-semibold uppercase tracking-wide transition-all ${
                  active
                    ? "bg-brand-600/10 text-brand-600"
                    : "text-navy-950/70 hover:bg-navy-950/5 hover:text-brand-600"
                } ${
                  open
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-4 opacity-0"
                }`}
                style={{ transitionDelay: open ? `${idx * 60}ms` : "0ms" }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-navy-950/10 px-5 py-4">
          <Link
            href="/contact"
            onClick={onClose}
            className="vr-btn vr-btn-primary flex items-center justify-center gap-2 rounded-md bg-brand-600 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-700"
          >
            GET FREE QUOTE
            <span aria-hidden className="vr-arrow">&rarr;</span>
          </Link>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Hide on scroll down, show on scroll up (from Vesper)
  const [hidden, setHidden] = useState(false);

  // Close mobile menu on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Scroll behavior — detect direction + scrolled state (from Vesper)
  useEffect(() => {
    let lastY = window.scrollY;
    
    const onScroll = () => {
      const y = window.scrollY;
      
      // Set scrolled state for background/shadow changes
      setScrolled(y > 20);
      
      // Hide header when scrolling down, show when scrolling up
      if (y > 200 && y > lastY + 8) {
        setHidden(true);
      } else if (y < lastY - 8 || y < 100) {
        setHidden(false);
      }
      
      lastY = y;
    };
    
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* 
        Enhanced Header with Velora theme:
        • sticky positioning for better layout flow
        • hide on scroll down / show on scroll up via transform
        • glass blur backdrop with transparency
        • subtle shadow only when scrolled
        • smooth 500ms transitions
        • NAVY/BRAND colors (not red!)
      */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-500 ${
          hidden ? "-translate-y-full" : "translate-y-0"
        } ${
          scrolled
            ? "border-b border-navy-950/10 bg-white/80 shadow-sm backdrop-blur-xl supports-[backdrop-filter]:bg-white/70"
            : "border-b border-transparent bg-white/95 backdrop-blur"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-2 px-3 sm:h-20 sm:gap-4 sm:px-6 lg:px-8 md:h-24">
          {/* Logo */}
          <Link
            href="/"
            aria-label="Velora Digitizing home"
            className="group flex shrink-0 items-center transition-transform hover:scale-105"
          >
            <Logo />
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden items-center gap-7 lg:flex"
            aria-label="Primary"
          >
            {NAV_LINKS.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`vr-underline group relative text-[13px] font-semibold uppercase tracking-wide transition-colors hover:text-brand-600 ${
                    active
                      ? "text-brand-600 is-active"
                      : "text-navy-950/70 hover:text-brand-600"
                  }`}
                >
                  {link.label}
                  {/* Animated underline */}
                  <span
                    className={`absolute -bottom-1.5 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-brand-600 transition-all duration-300 ${
                      active ? "w-5" : "w-0 group-hover:w-5"
                    }`}
                    style={{
                      transformOrigin: "center",
                    }}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right actions - VELORA THEME (navy shadows, not red!) */}
          <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
            <CartButton />

            {/* CTA Button - Using Velora navy/brand color scheme */}
            <Link
              href="/contact"
              className="group relative inline-flex h-9 shrink-0 items-center gap-1 overflow-hidden rounded-md bg-brand-600 px-2.5 text-xs font-semibold text-white shadow-[0_8px_20px_-6px_rgba(6,14,40,0.35)] transition-all hover:bg-brand-700 hover:shadow-[0_12px_28px_-6px_rgba(6,14,40,0.45)] sm:h-10 sm:gap-2 sm:px-5 sm:text-sm"
            >
              {/* Shine sweep effect */}
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative whitespace-nowrap">
                <span className="sm:hidden">Quote</span>
                <span className="hidden sm:inline">GET A QUOTE</span>
              </span>
              <span aria-hidden className="vr-arrow relative h-3.5 w-3.5 shrink-0 transition-transform group-hover:translate-x-0.5 sm:h-4 sm:w-4">&rarr;</span>
            </Link>

            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-navy-950/15 text-navy-950 transition-colors hover:border-brand-600 hover:text-brand-600 sm:h-10 sm:w-10"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile nav backdrop */}
      <div
        aria-hidden
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Mobile Nav Drawer */}
      <MobileNavDrawer
        open={open}
        onClose={() => setOpen(false)}
        pathname={pathname}
      />

      {/* Cart Drawer */}
      <CartDrawer />
    </>
  );
}