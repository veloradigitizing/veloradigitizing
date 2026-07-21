import Hero from "../components/Hero";
import contactBg from "../images/velora-contact-workspace.png";
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
        eyebrow="Let's Talk"
        titleLines={[
          { text: "We're Here to" },
          { text: "Bring Your Designs", accent: true },
          { text: "to Life" },
        ]}
        description="Have a question or need a quote? Get in touch with us today. We're always ready to help you with premium digitizing services."
        bgImage={contactBg}
        imageLabel="Close-up of hands embroidering intricate blue and gold floral patterns"
        features={[
          { icon: "headset", title: "24/7 Support", sub: "Round-the-clock assistance" },
          { icon: "send", title: "1h Response", sub: "Average reply time" },
          { icon: "tag", title: "Free Quotes", sub: "No obligation" },
          { icon: "shield", title: "100% Satisfaction", sub: "Money-back guarantee" },
        ]}
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
