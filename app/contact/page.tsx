import Hero from "../components/Hero";
import ContactInfoPanel from "../components/ContactInfoPanel";
import ContactForm from "../components/ContactForm";
import WhatsAppBanner from "../components/WhatsAppBanner";
import Icon, { IconName } from "../components/Icon";
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
        backgroundImage="/images/hero-images/ChatGPT Image Jul 20, 2026, 07_06_57 PM.png"
      />

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[380px_1fr]">
          <ContactInfoPanel contactInfo={CONTACT_INFO} />
          <ContactForm />
        </div>
      </section>

      <WhatsAppBanner />

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
