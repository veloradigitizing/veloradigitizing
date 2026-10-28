import { FaInstagram, FaLinkedinIn, FaPinterestP, FaWhatsapp, FaYoutube } from "react-icons/fa6";
import Icon, { IconName } from "./Icon";
import { Reveal } from "./Reveal";

const SOCIAL_CHANNELS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/velora-digitizing-854396429",
    Icon: FaLinkedinIn,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/12136358137",
    Icon: FaWhatsapp,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/veloradigitizing",
    Icon: FaInstagram,
  },
  {
    label: "Pinterest",
    href: "https://www.pinterest.com/veloradigitizing/",
    Icon: FaPinterestP,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@VeloraDigitizing",
    Icon: FaYoutube,
  },
];

export default function ContactInfoPanel({
  contactInfo,
}: {
  contactInfo: { icon: IconName; title: string; lines: string[] }[];
  socialIcons?: IconName[];
}) {
  return (
    <Reveal
      direction="left"
      className="rounded-2xl border border-navy-950/10 bg-white p-6 sm:p-8"
    >
      <h2 className="font-serif text-2xl font-bold text-navy-950">
        Get In Touch
      </h2>
      <div className="mt-3 h-[3px] w-12 rounded-full bg-brand-600" />
      <div className="mt-8 flex flex-col gap-7">
        {contactInfo.map((info, i) => (
          <div
            key={info.title}
            className="vr-lift group flex items-start gap-4 rounded-lg p-1"
            style={{ transitionDelay: `${i * 30}ms` }}
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand-600/25 text-brand-600 transition-colors duration-300 group-hover:bg-brand-50">
              <Icon name={info.icon} className="h-5 w-5" />
            </span>
            <div>
              <h3 className="text-sm font-bold text-brand-600">{info.title}</h3>
              {info.lines.map((l) => (
                <p key={l} className="text-sm font-medium text-slate-600">
                  {l}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Follow Us with active clickable social channels */}
      <div className="mt-8 border-t border-navy-950/10 pt-6">
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-navy-950/75">
          Follow Us
        </p>
        <div className="flex flex-wrap gap-2.5">
          {SOCIAL_CHANNELS.map(({ label, href, Icon: SocialIcon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="nofollow noopener noreferrer"
              aria-label={`Follow Velora Digitizing on ${label}`}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-navy-950/15 text-slate-600 transition-all duration-200 hover:scale-110 hover:border-brand-600 hover:bg-brand-600 hover:text-white"
            >
              <SocialIcon size={14} />
            </a>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
