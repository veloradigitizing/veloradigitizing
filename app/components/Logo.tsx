import Image from "next/image";
import Link from "next/link";

export default function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5 shrink-0">
      <Image
        src="/images/veloralogo.jpeg"
        alt="Velora Digitizing"
        width={40}
        height={40}
        className={`h-10 w-10 rounded-full object-cover ${
          dark ? "ring-2 ring-white/80" : ""
        }`}
        priority
      />
      <span className="flex flex-col leading-none">
        <span
          className={`font-serif text-xl font-bold tracking-wide ${
            dark ? "text-white" : "text-navy-950"
          }`}
        >
          VELORA
        </span>
        <span
          className={`text-[9px] font-medium tracking-[0.3em] ${
            dark ? "text-white/60" : "text-navy-950/50"
          }`}
        >
          DIGITIZING
        </span>
      </span>
    </Link>
  );
}
