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
  { label: "Store", href: "/store" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact Us", href: "/contact" },
];

// All Portfolio Categories - MUST MATCH PORTFOLIO_CATEGORIES values exactly!
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
  { label: "Shoulder", href: "/portfolio?category=shoulder" },
  { label: "Bundles", href: "/portfolio?category=bundles" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white/70">
      {/* Decorative top gradient line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:px-10">
        {/* Company */}
        <div className="lg:col-span-3">
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
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition-all duration-300 hover:border-brand-500 hover:bg-brand-500/10 hover:text-brand-400 hover:shadow-[0_4px_12px_-4px_rgba(26,63,196,0.4)]"
              >
                <s.Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="lg:col-span-2">
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">
            Quick Links
          </h4>

          <ul className="flex flex-col gap-3 text-sm">
            {QUICK_LINKS.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="group inline-flex items-center gap-2 transition-colors hover:text-white"
                >
                  <span className="relative">
                    <span className="h-px w-0 bg-brand-500 transition-all duration-300 group-hover:w-3" />
                    <ArrowRight className="absolute -right-4 top-1/2 -translate-y-1/2 h-3 w-3 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-brand-400" />
                  </span>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services - All Portfolio Categories */}
        <div className="lg:col-span-3">
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">
            Services
          </h4>

          <ul className="flex flex-col gap-3 text-sm">
            {SERVICE_LINKS.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="group inline-flex items-center gap-2 transition-colors hover:text-white"
                >
                  <span className="relative">
                    <span className="h-px w-0 bg-brand-500 transition-all duration-300 group-hover:w-3" />
                    <ArrowRight className="absolute -right-4 top-1/2 -translate-y-1/2 h-3 w-3 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-brand-400" />
                  </span>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us — Enhanced section inspired by Vesper, styled with Velora theme */}
        <div className="lg:col-span-4">
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">
            Contact Us
          </h4>

          <ul className="space-y-3 text-sm">
            {/* Email */}
            <li className="group flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-400 transition-transform duration-300 group-hover:scale-110" />
              <a
                href="mailto:info@veloradigitizing.com"
                className="transition-colors duration-300 hover:text-white"
              >
                info@veloradigitizing.com
              </a>
            </li>

            {/* Phone */}
            <li className="group flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-400 transition-transform duration-300 group-hover:scale-110" />
              <span className="space-y-0.5">
                <a
                  href="tel:+12134567880"
                  className="block transition-colors duration-300 hover:text-white"
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
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-400 transition-transform duration-300 group-hover:scale-110" />
              <span className="leading-relaxed">
                Mon - Sat: 9:00 AM - 7:00 PM
                <br />
                <span className="text-white/50">Sunday: Closed</span>
              </span>
            </li>

            {/* Location */}
            <li className="group flex items-start gap-3 pt-3 border-t border-white/10">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400 transition-transform duration-300 group-hover:scale-110" />
              <div className="leading-relaxed">
                <p className="font-medium text-white/90">Head Office</p>
                <p className="text-sm text-white/50 mt-0.5">
                  128 Business Blvd, Suite 204
                </p>
                <p className="text-sm text-white/50">
                  Los Angeles, CA 90017, USA
                </p>
                <a
                  href="https://maps.google.com/?q=128+Business+Blvd+Suite+204+Los+Angeles+CA+90017"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-2 text-xs font-medium text-brand-400 hover:text-brand-300 transition-colors duration-300 focus:outline-none focus:underline"
                >
                  View on Google Maps &rarr;
                </a>
              </div>
            </li>
          </ul>

          {/* Newsletter */}
          <div className="mt-6 pt-4 border-t border-white/10">
            <div className="text-xs font-bold uppercase tracking-wide text-white mb-2">
              Newsletter
            </div>
            <p className="text-xs text-white/50 mb-3 leading-relaxed">
              Subscribe for updates and exclusive offers.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your Email"
                aria-label="Your email address"
                className="h-9 w-full min-w-0 rounded-md border border-white/15 bg-white/5 px-3 text-sm text-white placeholder-white/40 outline-none transition-all duration-300 focus:border-brand-500 focus:bg-white/10 focus:ring-1 focus:ring-brand-500/50"
              />
              <button
                type="submit"
                className="group/btn inline-flex h-9 shrink-0 items-center justify-center rounded-md bg-brand-600 px-4 text-xs font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-brand-500 hover:shadow-[0_4px_12px_-4px_rgba(26,63,196,0.5)] focus:outline-none focus:ring-2 focus:ring-brand-500/50"
                aria-label="Subscribe to newsletter"
              >
                Subscribe
                <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
              </button>
            </form>
          </div>
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

            <Link
              href="/terms-and-conditions"
              className="transition-colors hover:text-white"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
