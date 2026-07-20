import type { Metadata } from "next";
import Image from "next/image";
import Hero from "../components/Hero";
import { IconCircle, SectionTag, StatsBar } from "../components/Section";
import Icon, { IconName } from "../components/Icon";
import CTABanner from "../components/CTABanner";
import { FAQ, ABOUT_FAQS } from "../components/FAQ";
import { Reveal } from "../components/Reveal";
import { stagger } from "../components/stagger";

export const metadata: Metadata = {
  title: "About Us | Velora Digitizing",
  description:
    "Velora Digitizing was founded to provide world-class embroidery digitizing services with unmatched quality and reliability.",
};

const WHY_ITEMS: { icon: IconName; title: string; description: string }[] = [
  {
    icon: "award",
    title: "Experienced Team",
    description: "Skilled digitizers with years of experience.",
  },
  {
    icon: "diamond",
    title: "Premium Quality",
    description: "Perfect stitches with high density & detail.",
  },
  {
    icon: "clock",
    title: "Super Fast Delivery",
    description: "Rush orders delivered in as fast as 2 hours.",
  },
  {
    icon: "headset",
    title: "24/7 Support",
    description: "We're always here to help you anytime.",
  },
  {
    icon: "infinity",
    title: "Unlimited Revisions",
    description: "Your satisfaction is our top priority.",
  },
  {
    icon: "shield",
    title: "100% Guaranteed",
    description: "We guarantee quality in every file.",
  },
];

const EXPERTISE: { icon: IconName; label: string }[] = [
  { icon: "tag", label: "Logo Digitizing" },
  { icon: "layers", label: "3D Puff Digitizing" },
  { icon: "scissors", label: "Applique Digitizing" },
  { icon: "cap", label: "Patch Digitizing" },
  { icon: "shirt", label: "Cap / Hat Digitizing" },
  { icon: "grid", label: "Jacket Back Digitizing" },
  { icon: "badge-check", label: "Chenille Digitizing" },
];

const STATS: {
  icon: "award" | "smile" | "clock" | "globe" | "shield";
  value: string;
  label: string;
}[] = [
  { icon: "award", value: "15,000+", label: "Projects Completed" },
  { icon: "smile", value: "8,000+", label: "Happy Clients" },
  { icon: "clock", value: "2-24 Hrs", label: "Turnaround Time" },
  { icon: "globe", value: "50+", label: "Countries Served" },
  { icon: "shield", value: "100%", label: "Satisfaction Rate" },
];

const TEAM = [
  {
    name: "Michael Anderson",
    role: "Founder & CEO",
    image: "/images/team/team-01.jpg",
    initial: "MA",
  },
  {
    name: "David Thompson",
    role: "Lead Digitizer",
    image: "/images/team/team-02.jpg",
    initial: "DT",
  },
  {
    name: "James Wilson",
    role: "Senior Digitizer",
    image: "/images/team/team-03.jpg",
    initial: "JW",
  },
  {
    name: "Daniel Carter",
    role: "Quality Analyst",
    image: "/images/team/team-04.jpeg",
    initial: "DC",
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About Us"
        titleLines={[
          { text: "Crafting Perfection," },
          { text: "Stitch by Stitch", accent: true },
        ]}
        description="At velora Digitizing, we turn your ideas into flawless embroidery designs. With precision, experience, and passion, we deliver digitizing services that elevate your brand."
      />

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Reveal
            direction="left"
            className="vr-zoom overflow-hidden rounded-2xl border border-navy-950/10"
          >
            <Image
              src="/images/about/embroidery-machine.png"
              alt="Industrial embroidery machine stitching the velora logo"
              width={1200}
              height={900}
              className="h-full w-full object-cover"
              priority
            />
          </Reveal>
          <Reveal direction="right">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
              Our Story
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-navy-950 sm:text-4xl">
              Passion. Precision. Perfection.
            </h2>
            <div className="mt-4 h-[3px] w-16 rounded-full bg-brand-600" />
            <div className="mt-6 flex flex-col gap-4 text-[15px] leading-relaxed text-navy-950/60">
              <p>
                velora Digitizing was founded with a simple mission — to provide
                world-class embroidery digitizing services with unmatched
                quality and reliability.
              </p>
              <p>
                We understand that every stitch represents your brand.
                That&rsquo;s why we use advanced digitizing technology and
                skilled expertise to ensure every design looks perfect on
                fabric.
              </p>
              <p>
                From small logos to complex patches, we treat every project with
                the same level of care and dedication.
              </p>
            </div>
            <p className="mt-6 font-script text-2xl text-brand-600">
              velora Digitizing
            </p>
            <p className="text-xs text-navy-950/50">
              Founder, velora Digitizing
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-10">
        <Reveal direction="up">
          <SectionTag
            eyebrow="Why Choose Us"
            title="Why Thousands Choose velora Digitizing"
          />
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_ITEMS.map((item, i) => (
            <Reveal
              key={item.title}
              direction="up"
              delay={stagger(i, 90)}
              className="vr-lift group flex flex-col items-center gap-3 rounded-2xl border border-navy-950/10 bg-white p-7 text-center"
            >
              <span className="vr-icon-pop inline-flex">
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-brand-600/25 bg-brand-50 text-brand-600">
                  <Icon name={item.icon} className="h-6 w-6" />
                </span>
              </span>
              <p className="text-sm font-bold text-navy-950">{item.title}</p>
              <p className="text-xs leading-relaxed text-navy-950/55">
                {item.description}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-10">
        <Reveal direction="up">
          <SectionTag eyebrow="Our Expertise" title="We Specialize In" />
        </Reveal>
        <div className="mt-14 grid grid-cols-2 gap-y-8 sm:grid-cols-4 lg:grid-cols-7">
          {EXPERTISE.map((item, i) => (
            <Reveal
              key={item.label}
              direction="up"
              delay={stagger(i, 70)}
              className="group flex flex-col items-center gap-3 text-center transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-brand-600/25 text-brand-600 transition-colors duration-300 group-hover:bg-brand-50">
                <Icon name={item.icon} className="h-6 w-6" />
              </span>
              <p className="max-w-[7rem] text-xs font-medium text-navy-950/70">
                {item.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <StatsBar stats={STATS} />

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_320px]">
          <div>
            <Reveal direction="up">
              <SectionTag
                eyebrow="Meet Our Team"
                title="The Experts Behind Every Stitch"
                center={false}
              />
            </Reveal>
            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {TEAM.map((member, i) => (
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
              <IconCircle icon="award" size="lg" dark />
            </span>
            <h3 className="mt-5 font-serif text-xl font-bold text-white">
              Our Goal
            </h3>
            <div className="mx-auto mt-3 h-[3px] w-12 rounded-full bg-brand-600/60" />
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              To deliver world-class digitizing services that help brands look
              better, stitch better, and grow better.
            </p>
            <p className="mt-5 font-script text-xl text-white/80">
              velora Digitizing
            </p>
          </Reveal>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ
        items={ABOUT_FAQS}
        title="About Velora - Frequently Asked Questions"
        subtitle="Learn more about our company, team, and what makes us different."
      />

      <CTABanner
        title="Ready to Digitize Your Design?"
        subtitle="Experience premium quality digitizing with fast delivery and 100% satisfaction."
      />
    </>
  );
}
