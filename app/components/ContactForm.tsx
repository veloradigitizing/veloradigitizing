"use client";

import { useState, type FormEvent } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import Icon from "./Icon";
import { Reveal } from "./Reveal";
import { SERVICES } from "./services-data";

const SERVICE_OPTIONS = [
  "Select a service",
  ...SERVICES.map((s) => s.title),
  "Other",
];

const WEB3FORMS_ACCESS_KEY = "ac346419-5c85-4f5d-a7bc-080c76cef9e7";
const WHATSAPP_QUOTE_URL =
  "https://wa.me/12136358137?text=Hi%20Velora%20Digitizing%2C%20I%20have%20an%20embroidery%20digitizing%20project%20and%20would%20like%20a%20free%20quote.%20Here%20is%20my%20artwork%3A";

export default function ContactForm({
  formId = "contact-form",
  services = SERVICE_OPTIONS,
}: {
  formId?: string;
  services?: string[];
}) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);

    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const service = String(formData.get("service") || "");
    const subject = String(formData.get("subject") || "");
    const artworkLink = String(formData.get("artwork_link") || "");
    const message = String(formData.get("message") || "");

    setStatus("submitting");

    // Fire ntfy alert in background
    const linkNotice = artworkLink ? `\nArtwork Link: ${artworkLink}` : "";
    fetch("https://ntfy.sh/velora-alerts", {
      method: "POST",
      headers: {
        "Title": `[Velora Digitizing] 🚀 New Lead: ${name}`,
        "Priority": "urgent",
        "Tags": "tada,briefcase,email",
      },
      body: `Name: ${name}\nEmail: ${email}\nService: ${service}\nSubject: ${subject}${linkNotice}\nMessage: ${message}`,
    }).catch((err) => console.error("Ntfy alert failed:", err));

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <Reveal
      direction="right"
      className="rounded-2xl border border-navy-950/10 bg-white p-6 sm:p-8"
    >
      {/* WhatsApp Fast-Track Artwork Card */}
      <div className="mb-7 rounded-xl border border-emerald-500/25 bg-emerald-50/80 p-4 transition-all sm:p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex min-w-0 items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#25D366] text-white shadow-sm">
              <FaWhatsapp size={22} aria-hidden />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 shrink-0 rounded-full bg-emerald-500 animate-pulse" />
                <p className="text-xs font-bold uppercase tracking-wide text-emerald-950">
                  Fastest Quote: Send Artwork via WhatsApp
                </p>
              </div>
              <p className="mt-0.5 text-xs text-emerald-900/80 leading-relaxed">
                Attach .AI, .DST, .PES, .PNG or photos directly on WhatsApp (+1 213-635-8137) for an instant 15–30 min reply.
              </p>
            </div>
          </div>
          <a
            href={WHATSAPP_QUOTE_URL}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#25D366] px-5 py-3 text-xs font-bold text-white shadow-sm transition-all hover:bg-[#20ba59] hover:shadow-md active:scale-95"
          >
            <FaWhatsapp size={16} className="shrink-0" aria-hidden />
            <span className="whitespace-nowrap">Send Artwork on WhatsApp</span>
          </a>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="h-px flex-1 bg-navy-950/10" />
        <span className="text-[11px] font-bold uppercase tracking-wider text-navy-950/45">
          Or Send a Message Online
        </span>
        <div className="h-px flex-1 bg-navy-950/10" />
      </div>

      <h2 className="mt-5 font-serif text-2xl font-bold text-navy-950">
        Request a Free Quote
      </h2>
      <div className="mt-3 h-[3px] w-12 rounded-full bg-brand-600" />
      <p className="mt-4 text-sm text-navy-950/60 leading-relaxed">
        Fill out your project details below. If your files are stored online, you can paste a Google Drive, Dropbox, or WeTransfer link.
      </p>

      <form
        id={formId}
        onSubmit={onSubmit}
        className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2"
      >
        <label className="flex flex-col gap-1.5 text-sm font-medium text-navy-950">
          Your Name
          <input
            type="text"
            name="name"
            required
            placeholder="Enter your name"
            className="rounded-md border border-navy-950/15 px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-600 focus:ring-2 focus:ring-brand-600/15"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium text-navy-950">
          Email Address
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email"
            className="rounded-md border border-navy-950/15 px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-600 focus:ring-2 focus:ring-brand-600/15"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium text-navy-950 sm:col-span-2">
          Subject
          <input
            type="text"
            name="subject"
            placeholder="e.g. Left chest logo embroidery digitizing quote"
            className="rounded-md border border-navy-950/15 px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-600 focus:ring-2 focus:ring-brand-600/15"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium text-navy-950 sm:col-span-2">
          Service Needed
          <select
            name="service"
            className="rounded-md border border-navy-950/15 px-4 py-2.5 text-sm text-navy-950/70 outline-none transition-colors focus:border-brand-600 focus:ring-2 focus:ring-brand-600/15"
          >
            {services.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>

        {/* Artwork / Cloud Link Input */}
        <label className="flex flex-col gap-1.5 text-sm font-medium text-navy-950 sm:col-span-2">
          <div className="flex items-center justify-between">
            <span>Artwork / Cloud Link <span className="text-xs font-normal text-navy-950/50">(Optional)</span></span>
            <span className="text-[11px] font-normal text-brand-600">Google Drive &middot; Dropbox &middot; WeTransfer</span>
          </div>
          <input
            type="url"
            name="artwork_link"
            placeholder="Paste your Google Drive, Dropbox, or WeTransfer link..."
            className="rounded-md border border-navy-950/15 px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-600 focus:ring-2 focus:ring-brand-600/15"
          />
          <span className="text-[11px] text-navy-950/50">
            Have raw files (.ai, .eps, .dst, .pes)? Send them directly via WhatsApp above or email info@veloradigitizing.com.
          </span>
        </label>

        <label className="flex flex-col gap-1.5 text-sm font-medium text-navy-950 sm:col-span-2">
          Message &amp; Project Details
          <textarea
            name="message"
            required
            rows={4}
            placeholder="Tell us about dimensions (e.g. 3.5 inches), garment type (cap, polo, jacket), machine format (DST, PES), deadline..."
            className="rounded-md border border-navy-950/15 px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-600 focus:ring-2 focus:ring-brand-600/15"
          />
        </label>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="vr-btn vr-btn-primary flex items-center justify-center gap-2 rounded-md bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-60 sm:col-span-2"
        >
          {status === "submitting" ? "SENDING..." : "SEND MESSAGE"}{" "}
          <Icon name="send" className="h-4 w-4" />
        </button>

        <p className="sm:col-span-2 text-center text-xs text-navy-950/60">
          By sending your request, you agree to our{" "}
          <a href="/terms-and-conditions" className="underline hover:text-brand-600">
            Terms &amp; Conditions
          </a>{" "}
          and{" "}
          <a href="/privacy-policy" className="underline hover:text-brand-600">
            Privacy Policy
          </a>.
        </p>

        {status === "success" && (
          <div className="rounded-lg border border-green-200 bg-green-50 p-4 text-sm font-medium text-green-800 sm:col-span-2">
            <p className="font-semibold">Message sent successfully!</p>
            <p className="mt-1 text-xs text-green-700">
              We&rsquo;ll review your project and email your free quote within 1 hour. Need an urgent reply? Message us on{" "}
              <a
                href={WHATSAPP_QUOTE_URL}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="font-bold underline hover:text-green-900"
              >
                WhatsApp (+1 213-635-8137)
              </a>
              .
            </p>
          </div>
        )}
        {status === "error" && (
          <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-800 sm:col-span-2">
            <p className="font-semibold">Something went wrong.</p>
            <p className="mt-1 text-xs text-red-700">
              Please try again or reach us directly on WhatsApp (+1 213-635-8137) or via info@veloradigitizing.com.
            </p>
          </div>
        )}
      </form>
    </Reveal>
  );
}
