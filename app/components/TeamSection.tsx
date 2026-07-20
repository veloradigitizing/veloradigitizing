import Image from "next/image";
import Icon from "./Icon";
import { IconCircle, SectionTag } from "./Section";
import { Reveal } from "./Reveal";
import { stagger } from "./stagger";

export default function TeamSection({
  eyebrow = "Meet Our Team",
  title = "The Experts Behind Every Stitch",
  members = [],
  goalIcon = "award",
  goalTitle = "Our Goal",
  goalDescription = "To deliver world-class digitizing services that help brands look better, stitch better, and grow better.",
  goalSignature = "velora Digitizing",
}: {
  eyebrow?: string;
  title?: string;
  members: { name: string; role: string; image: string; initial: string }[];
  goalIcon?: string;
  goalTitle?: string;
  goalDescription?: string;
  goalSignature?: string;
}) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_320px]">
        <div>
          <Reveal direction="up">
            <SectionTag
              eyebrow={eyebrow}
              title={title}
              center={false}
            />
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {members.map((member, i) => (
              <Reveal
                key={member.name}
                direction="up"
                delay={stagger(i, 90)}
                className="vr-lift group text-center"
              >
                <div className="vr-zoom relative aspect-square w-full overflow-hidden rounded-xl border border-navy-950/10 bg-navy-950/[0.03]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <p className="mt-3 text-sm font-semibold text-navy-950">
                  {member.name}
                </p>
                <p className="text-xs text-navy-950/50">{member.role}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal
          direction="left"
          className="flex flex-col justify-center rounded-2xl bg-navy-950 p-8 text-center"
        >
          <span className="inline-flex justify-center">
            <IconCircle icon={goalIcon as any} size="lg" dark />
          </span>
          <h3 className="mt-5 font-serif text-xl font-bold text-white">
            {goalTitle}
          </h3>
          <div className="mx-auto mt-3 h-[3px] w-12 rounded-full bg-brand-600/60" />
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            {goalDescription}
          </p>
          <p className="mt-5 font-script text-xl text-white/80">
            {goalSignature}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
