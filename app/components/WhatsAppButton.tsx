import { FaWhatsapp } from "react-icons/fa6";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/12134567880"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
    >
      {/* Pulse rings */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-full bg-[#25D366] vr-pulse-ring"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-full bg-[#25D366] vr-pulse-ring"
        style={{ animationDelay: "1.2s" }}
      />
      <FaWhatsapp size={26} className="relative" />
    </a>
  );
}
