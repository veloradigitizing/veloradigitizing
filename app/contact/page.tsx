"use client";

import { useState } from "react";
import Hero from "../components/Hero";
import Icon, { IconName } from "../components/Icon";

const CONTACT_INFO: { icon: IconName; title: string; lines: string[] }[] = [
  {
    icon: "mail",
    title: "Email Us",
    lines: ["info@vesperdigitizing.com", "We reply within minutes"],
  },
  {
    icon: "phone",
    title: "Call / WhatsApp",
    lines: ["+1 (213) 456-7880", "24/7 Available"],
  },
  {
    icon: "globe",
    title: "Website",
    lines: ["www.vesperdigitizing.com", "Visit our website"],
  },
  {
    icon: "pin",
    title: "Location",
    lines: ["128 Business Blvd, Suite 204", "Los Angeles, CA 90017, USA"],
  },
];

const FAQS = [
  {
    q: "How fast can I get my digitizing file?",
    a: "Standard orders are delivered within 12-24 hours. Rush orders can be delivered in as fast as 2 hours.",
  },
  {
    q: "Do you offer rush orders?",
    a: "Yes, we offer 2 hour, 4 hour, same day, and weekend rush delivery options for an additional fee.",
  },
  {
    q: "What file formats will I receive?",
    a: "We deliver in all major embroidery formats including DST, PES, EXP, JEF, VP3 and more.",
  },
  {
    q: "Can I request a sample before placing an order?",
    a: "Yes, contact our team and we'll be happy to share sample work relevant to your design type.",
  },
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <Hero
        eyebrow="Contact Us"
        titleLines={[
          { text: "We're Here to" },
          { text: "Bring Your Designs", accent: true },
          { text: "to Life" },
        ]}
        description="Have a question or need a quote? Get in touch with us today. We're always ready to help you with premium digitizing services."
      />

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[380px_1fr]">
          <div className="rounded-2xl border border-navy-950/10 bg-white p-8">
            <h3 className="font-serif text-2xl font-bold text-navy-950">
              Get In Touch
            </h3>
            <div className="mt-3 h-[3px] w-12 rounded-full bg-brand-600" />
            <div className="mt-8 flex flex-col gap-7">
              {CONTACT_INFO.map((info) => (
                <div key={info.title} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand-600/25 text-brand-600">
                    <Icon name={info.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-brand-600">
                      {info.title}
                    </p>
                    {info.lines.map((l) => (
                      <p key={l} className="text-sm text-navy-950/60">
                        {l}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 border-t border-navy-950/10 pt-6">
              <p className="mb-3 text-xs font-bold uppercase tracking-wide text-navy-950/50">
                Follow Us
              </p>
              <div className="flex gap-3">
                {(["mail", "phone", "globe"] as IconName[]).map((icon) => (
                  <span
                    key={icon}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-navy-950/15 text-navy-950/50"
                  >
                    <Icon name={icon} className="h-4 w-4" />
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-navy-950/10 bg-white p-8">
            <h3 className="font-serif text-2xl font-bold text-navy-950">
              Send Us a Message
            </h3>
            <div className="mt-3 h-[3px] w-12 rounded-full bg-brand-600" />
            <p className="mt-4 text-sm text-navy-950/55">
              Fill out the form and we&rsquo;ll get back to you as soon as
              possible.
            </p>

            <form className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <label className="flex flex-col gap-1.5 text-sm font-medium text-navy-950">
                Your Name
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="rounded-md border border-navy-950/15 px-4 py-2.5 text-sm outline-none focus:border-brand-600"
                />
              </label>
              <label className="flex flex-col gap-1.5 text-sm font-medium text-navy-950">
                Email Address
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="rounded-md border border-navy-950/15 px-4 py-2.5 text-sm outline-none focus:border-brand-600"
                />
              </label>
              <label className="flex flex-col gap-1.5 text-sm font-medium text-navy-950 sm:col-span-2">
                Subject
                <input
                  type="text"
                  placeholder="Enter subject"
                  className="rounded-md border border-navy-950/15 px-4 py-2.5 text-sm outline-none focus:border-brand-600"
                />
              </label>
              <label className="flex flex-col gap-1.5 text-sm font-medium text-navy-950 sm:col-span-2">
                Service Needed
                <select className="rounded-md border border-navy-950/15 px-4 py-2.5 text-sm text-navy-950/70 outline-none focus:border-brand-600">
                  <option>Select a service</option>
                  <option>Embroidery Digitizing</option>
                  <option>Vector Conversion</option>
                  <option>Rush Orders</option>
                  <option>3D Puff Digitizing</option>
                  <option>Patch Digitizing</option>
                </select>
              </label>
              <label className="flex flex-col gap-1.5 text-sm font-medium text-navy-950 sm:col-span-2">
                Message
                <textarea
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="rounded-md border border-navy-950/15 px-4 py-2.5 text-sm outline-none focus:border-brand-600"
                />
              </label>

              <div className="sm:col-span-2">
                <p className="mb-2 text-sm font-medium text-navy-950">
                  Upload Design (Optional)
                </p>
                <div className="flex flex-col items-center gap-2 rounded-lg border border-dashed border-navy-950/20 bg-navy-950/[0.02] px-6 py-8 text-center">
                  <Icon name="paperclip" className="h-6 w-6 text-navy-950/30" />
                  <p className="text-sm text-navy-950/50">
                    Drag &amp; drop your file here or{" "}
                    <span className="font-semibold text-brand-600">
                      browse
                    </span>
                  </p>
                  <p className="text-xs text-navy-950/35">
                    Supported formats: JPG, PNG, PDF, AI, EPS, CDR (Max file
                    size: 20MB)
                  </p>
                </div>
              </div>

              <button
                type="submit"
                className="flex items-center justify-center gap-2 rounded-md bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700 sm:col-span-2"
              >
                SEND MESSAGE <Icon name="send" className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-10">
        <div className="flex flex-col items-center justify-between gap-5 rounded-2xl bg-navy-950 px-8 py-7 text-center sm:flex-row sm:text-left">
          <div className="flex items-center gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 text-white">
              <Icon name="headset" className="h-5 w-5" />
            </span>
            <div>
              <p className="font-semibold text-white">Need Urgent Help?</p>
              <p className="text-sm text-white/60">
                Chat with us on WhatsApp for instant support.
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/12134567880"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-md border border-white/25 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
          >
            CHAT ON WHATSAPP
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-20 lg:px-10">
        <h3 className="text-center font-serif text-2xl font-bold text-navy-950 sm:text-3xl">
          Frequently Asked Questions
        </h3>
        <div className="mx-auto mt-4 h-[3px] w-16 rounded-full bg-brand-600" />
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {FAQS.map((faq, i) => (
            <div
              key={faq.q}
              className="rounded-lg border border-navy-950/10 bg-white"
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left text-sm font-semibold text-navy-950"
              >
                {faq.q}
                <Icon
                  name="chevron-down"
                  className={`h-4 w-4 shrink-0 text-brand-600 transition-transform ${
                    openFaq === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openFaq === i && (
                <p className="px-5 pb-4 text-sm leading-relaxed text-navy-950/60">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
