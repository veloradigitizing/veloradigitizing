import Hero from "../components/Hero";
import Icon, { IconName } from "../components/Icon";
import { Reveal } from "../components/Reveal";
import { FAQ, CONTACT_FAQS } from "../components/FAQ";
const CONTACT_INFO: { icon: IconName; title: string; lines: string[] }[] = [
  {
    icon: "mail",
    title: "Email Us",
    lines: ["info@veloradigitizing.com", "We reply within minutes"],
  },
  {
    icon: "phone",
    title: "Call / WhatsApp",
    lines: ["+1 (213) 456-7880", "24/7 Available"],
  },
  {
    icon: "globe",
    title: "Website",
    lines: ["www.veloradigitizing.com", "Visit our website"],
  },
  {
    icon: "pin",
    title: "Location",
    lines: ["128 Business Blvd, Suite 204", "Los Angeles, CA 90017, USA"],
  },
];


export default function ContactPage() {

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
          <Reveal
            direction="left"
            className="rounded-2xl border border-navy-950/10 bg-white p-8"
          >
            <h3 className="font-serif text-2xl font-bold text-navy-950">
              Get In Touch
            </h3>
            <div className="mt-3 h-[3px] w-12 rounded-full bg-brand-600" />
            <div className="mt-8 flex flex-col gap-7">
              {CONTACT_INFO.map((info, i) => (
                <div
                  key={info.title}
                  className="vr-lift group flex items-start gap-4 rounded-lg p-1"
                  style={{ transitionDelay: `${i * 30}ms` }}
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand-600/25 text-brand-600 transition-colors duration-300 group-hover:bg-brand-50">
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
                    className="vr-lift flex h-9 w-9 items-center justify-center rounded-full border border-navy-950/15 text-navy-950/50 hover:border-brand-600 hover:text-brand-600"
                  >
                    <Icon name={icon} className="h-4 w-4" />
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal
            direction="right"
            className="rounded-2xl border border-navy-950/10 bg-white p-8"
          >
            <h3 className="font-serif text-2xl font-bold text-navy-950">
              Send Us a Message
            </h3>
            <div className="mt-3 h-[3px] w-12 rounded-full bg-brand-600" />
            <p className="mt-4 text-sm text-navy-950/55">
              Fill out the form and we&rsquo;ll get back to you as soon as
              possible.
            </p>

            <form id="contact-form" className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <label className="flex flex-col gap-1.5 text-sm font-medium text-navy-950">
                Your Name
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="rounded-md border border-navy-950/15 px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-600 focus:ring-2 focus:ring-brand-600/15"
                />
              </label>
              <label className="flex flex-col gap-1.5 text-sm font-medium text-navy-950">
                Email Address
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="rounded-md border border-navy-950/15 px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-600 focus:ring-2 focus:ring-brand-600/15"
                />
              </label>
              <label className="flex flex-col gap-1.5 text-sm font-medium text-navy-950 sm:col-span-2">
                Subject
                <input
                  type="text"
                  placeholder="Enter subject"
                  className="rounded-md border border-navy-950/15 px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-600 focus:ring-2 focus:ring-brand-600/15"
                />
              </label>
              <label className="flex flex-col gap-1.5 text-sm font-medium text-navy-950 sm:col-span-2">
                Service Needed
                <select className="rounded-md border border-navy-950/15 px-4 py-2.5 text-sm text-navy-950/70 outline-none transition-colors focus:border-brand-600 focus:ring-2 focus:ring-brand-600/15">
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
                  className="rounded-md border border-navy-950/15 px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-600 focus:ring-2 focus:ring-brand-600/15"
                />
              </label>

              <div className="sm:col-span-2">
                <p className="mb-2 text-sm font-medium text-navy-950">
                  Upload Design (Optional)
                </p>
                <div className="vr-lift group flex flex-col items-center gap-2 rounded-lg border border-dashed border-navy-950/20 bg-navy-950/[0.02] px-6 py-8 text-center transition-colors group-hover:border-brand-600/40 group-hover:bg-brand-50/30">
                  <Icon
                    name="paperclip"
                    className="h-6 w-6 text-navy-950/30 transition-colors group-hover:text-brand-600"
                  />
                  <p className="text-sm text-navy-950/50">
                    Drag &amp; drop your file here or{" "}
                    <span className="font-semibold text-brand-600">browse</span>
                  </p>
                  <p className="text-xs text-navy-950/35">
                    Supported formats: JPG, PNG, PDF, AI, EPS, CDR (Max file
                    size: 20MB)
                  </p>
                </div>
              </div>

              <button
                type="submit"
                className="vr-btn vr-btn-primary flex items-center justify-center gap-2 rounded-md bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700 sm:col-span-2"
              >
                SEND MESSAGE <Icon name="send" className="h-4 w-4" />
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      <Reveal
        as="section"
        direction="up"
        className="mx-auto max-w-7xl px-5 pb-20 lg:px-10"
      >
        <div className="vr-lift group flex flex-col items-center justify-between gap-5 rounded-2xl bg-navy-950 px-8 py-7 text-center sm:flex-row sm:text-left">
          <div className="flex items-center gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition-colors group-hover:bg-white/10">
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
            className="vr-btn flex items-center gap-2 rounded-md border border-white/25 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
          >
            CHAT ON WHATSAPP
          </a>
        </div>
      </Reveal>

      <FAQ
        items={CONTACT_FAQS}
        title="Frequently Asked Questions"
        subtitle="Quick answers about turnaround, file formats, and how to send us your artwork. Can't find what you're looking for? Reach out anytime."
        eyebrow="FAQ"
        showCta
        ctaLabel="Send Us a Message"
        ctaHref="#contact-form"
      />
    </>
  );
}
