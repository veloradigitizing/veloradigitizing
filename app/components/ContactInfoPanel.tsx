import Icon, { IconName } from "./Icon";
import { Reveal } from "./Reveal";

export default function ContactInfoPanel({
  contactInfo,
  socialIcons = ["mail", "phone", "globe"],
}: {
  contactInfo: { icon: IconName; title: string; lines: string[] }[];
  socialIcons?: IconName[];
}) {
  return (
    <Reveal
      direction="left"
      className="rounded-2xl border border-navy-950/10 bg-white p-8"
    >
      <h3 className="font-serif text-2xl font-bold text-navy-950">
        Get In Touch
      </h3>
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
              <p className="text-sm font-bold text-brand-600">{info.title}</p>
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
          {socialIcons.map((icon) => (
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
  );
}
