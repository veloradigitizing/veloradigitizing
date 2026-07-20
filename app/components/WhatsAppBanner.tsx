import Icon, { IconName } from "./Icon";
import { Reveal } from "./Reveal";

export default function WhatsAppBanner({
  icon = "headset",
  title = "Need Urgent Help?",
  subtitle = "Chat with us on WhatsApp for instant support.",
  ctaLabel = "CHAT ON WHATSAPP",
  ctaHref = "https://wa.me/12134567880",
}: {
  icon?: IconName;
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <Reveal
      as="section"
      direction="up"
      className="mx-auto max-w-7xl px-5 pb-20 lg:px-10"
    >
      <div className="vr-lift group flex flex-col items-center justify-between gap-5 rounded-2xl bg-navy-950 px-8 py-7 text-center sm:flex-row sm:text-left">
        <div className="flex items-center gap-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition-colors group-hover:bg-white/10">
            <Icon name={icon} className="h-5 w-5" />
          </span>
          <div>
            <p className="font-semibold text-white">{title}</p>
            <p className="text-sm text-white/60">{subtitle}</p>
          </div>
        </div>
        <a
          href={ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="vr-btn flex items-center gap-2 rounded-md border border-white/25 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
        >
          {ctaLabel}
        </a>
      </div>
    </Reveal>
  );
}
