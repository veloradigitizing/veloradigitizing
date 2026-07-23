"use client";

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
import { Mail, Phone, Clock, MapPin, ArrowRight } from "lucide-react";
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
  { label: "Portfolio", href: "/portfolio" },
  { label: "Store", href: "/store" },
  { label: "Contact Us", href: "/contact" },
];

const SERVICE_LINKS = [
  { label: "Patches", href: "/portfolio?category=patches" },
  { label: "Custom Patches", href: "/portfolio?category=custom-patches" },
  { label: "Cap Logo", href: "/portfolio?category=cap-logo" },
  { label: "Chenille", href: "/portfolio?category=chenille" },
  { label: "Jacket Back", href: "/portfolio?category=jacket-back" },
  { label: "Left Chest", href: "/portfolio?category=left-chest" },
  { label: "3D Puff", href: "/portfolio?category=3d-puff" },
  { label: "Towel Design", href: "/portfolio?category=towel" },
  { label: "Applique", href: "/portfolio?category=applique" },
  { label: "Vector Art", href: "/portfolio?category=vector-art" },
  { label: "Sleeve", href: "/portfolio?category=sleeve" },
  { label: "Bundles", href: "/portfolio?category=bundles" },
];

const HELP_LINKS = [
  { label: "FAQs", href: "/contact#faq" },
  { label: "How It Works", href: "/services#process" },
  { label: "Shipping & Delivery", href: "/store#shipping" },
  { label: "Return Policy", href: "/terms-and-conditions#returns" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
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

            <p className="mt-4 text-sm leading-relaxed">
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
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${label}`}
                  className="group flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:scale-110 hover:bg-brand-600 hover:shadow-[0_4px_12px_-4px_rgba(26,63,196,0.5)] focus:outline-none focus:ring-2 focus:ring-brand-500/50"
                >
                  <Icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          {/* 2. Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-white/90 mb-4 leading-none">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="group inline-flex items-center text-sm text-white/70 transition-all duration-300 hover:text-brand-400 hover:translate-x-1 focus:outline-none focus:text-brand-400"
                  >
                    <span className="flex items-center w-0 opacity-0 transition-all duration-300 group-hover:w-3.5 group-hover:opacity-100">
                      <span className="h-px w-2.5 bg-brand-500" />
                    </span>
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
            <ul className="space-y-2.5">
              {SERVICE_LINKS.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="group inline-flex items-center text-sm text-white/70 transition-all duration-300 hover:text-brand-400 hover:translate-x-1 focus:outline-none focus:text-brand-400"
                  >
                    <span className="flex items-center w-0 opacity-0 transition-all duration-300 group-hover:w-3.5 group-hover:opacity-100">
                      <span className="h-px w-2.5 bg-brand-500" />
                    </span>
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Help & Support */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-white/90 mb-4 leading-none">
              Help &amp; Support
            </h3>
            <ul className="space-y-2.5">
              {HELP_LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="group inline-flex items-center text-sm text-white/70 transition-all duration-300 hover:text-brand-400 hover:translate-x-1 focus:outline-none focus:text-brand-400"
                  >
                    <span className="flex items-center w-0 opacity-0 transition-all duration-300 group-hover:w-3.5 group-hover:opacity-100">
                      <span className="h-px w-2.5 bg-brand-500" />
                    </span>
                    {l.label}
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

            <ul className="space-y-3 text-sm text-white/70">
              {/* Email */}
              <li className="group flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-500 transition-transform duration-300 group-hover:scale-110" />
                <a
                  href="mailto:info@veloradigitizing.com"
                  className="whitespace-nowrap transition-colors duration-300 hover:text-brand-400 focus:outline-none focus:text-brand-400"
                >
                  info@veloradigitizing.com
                </a>
              </li>

              {/* Phone */}
              <li className="group flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-500 transition-transform duration-300 group-hover:scale-110" />
                <span className="space-y-0.5">
                  <a
                    href="tel:+12134567880"
                    className="block transition-colors duration-300 hover:text-brand-400 focus:outline-none focus:text-brand-400"
                  >
                    +1 (213) 456-7880
                  </a>
                  <span className="block text-xs text-white/40">
                    WhatsApp Available
                  </span>
                </span>
              </li>

              {/* Business Hours */}
              <li className="group flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-500 transition-transform duration-300 group-hover:scale-110" />
                <span className="leading-relaxed">
                  Mon - Sat: 9:00 AM - 7:00 PM
                  <br />
                  Sunday: Closed
                </span>
              </li>

              {/* Location */}
              <li className="group flex items-start gap-3 pt-2 border-t border-white/10">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-500 transition-transform duration-300 group-hover:scale-110" />
                <div className="leading-relaxed">
                  <p className="font-medium text-white/90">Head Office</p>
                  <p className="text-sm text-white/60 mt-0.5">
                    128 Business Blvd, Suite 204
                  </p>
                  <p className="text-sm text-white/60">
                    Los Angeles, CA 90017, USA
                  </p>

                  <a
                    href="https://maps.google.com/?q=128+Business+Blvd+Suite+204+Los+Angeles+CA+90017"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-2 text-xs font-medium text-brand-400 hover:text-brand-300 transition-colors duration-300 focus:outline-none focus:underline"
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
          <p className="text-xs text-white/60 order-2 sm:order-1">
            &copy; 2026 Velora Digitizing. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-white/60 order-1 sm:order-2">
            <Link
              href="/privacy-policy"
              className="transition-colors duration-300 hover:text-white focus:outline-none focus:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="transition-colors duration-300 hover:text-white focus:outline-none focus:text-white"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
