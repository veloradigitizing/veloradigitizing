import type { Metadata } from "next";
import Hero from "../components/Hero";
import aboutBg from "../images/velora-embroidery-machine-shirt-cap.webp";
import OurStorySection from "../components/OurStorySection";
import FeatureCards from "../components/FeatureCards";
import ExpertiseStrip from "../components/ExpertiseStrip";
import TeamSection from "../components/TeamSection";
import CTABanner from "../components/CTABanner";
import HomeStats from "../components/HomeStats";
import { FAQ, ABOUT_FAQS } from "../components/FAQ";
import { IconName } from "../components/Icon";

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
  { icon: "badge", label: "Patch Digitizing" },
  { icon: "cap", label: "Cap / Hat Digitizing" },
  { icon: "shirt", label: "Jacket Back Digitizing" },
  { icon: "feather", label: "Chenille Digitizing" },
];

const TEAM = [
  {
    name: "Michael Anderson",
    role: "Founder & CEO",
    image: "/images/team/team-01.webp",
    initial: "MA",
  },
  {
    name: "David Thompson",
    role: "Lead Digitizer",
    image: "/images/team/team-02.webp",
    initial: "DT",
  },
  {
    name: "James Wilson",
    role: "Senior Digitizer",
    image: "/images/team/team-03.webp",
    initial: "JW",
  },
  {
    name: "Daniel Carter",
    role: "Quality Analyst",
    image: "/images/team/team-04.webp",
    initial: "DC",
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="Our Story"
        titleLines={[
          { text: "Crafting Perfection," },
          { text: "Stitch by Stitch", accent: true },
        ]}
        description="At velora Digitizing, we turn your ideas into flawless embroidery designs. With precision, experience, and passion, we deliver digitizing services that elevate your brand."
        bgImage={aboutBg}
        imageLabel="Velora embroidered polo shirt, cap, and multi-needle embroidery machine"
        features={[
          { icon: "award", title: "10+ Years", sub: "Of digitizing expertise" },
          { icon: "smile", title: "Master Digitizers", sub: "Hand-crafted perfection" },
          { icon: "heart", title: "Trusted by 500+", sub: "Brands worldwide" },
          { icon: "shield", title: "100% Satisfaction", sub: "Money-back guarantee" },
        ]}
      />

      <OurStorySection />

      <FeatureCards
        eyebrow="Why Choose Us"
        title="Why Thousands Choose velora Digitizing"
        items={WHY_ITEMS}
      />

      <ExpertiseStrip
        eyebrow="Our Expertise"
        title="We Specialize In"
        items={EXPERTISE}
      />

      <HomeStats />

      <TeamSection members={TEAM} />

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
