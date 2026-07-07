import Link from "next/link";

export default function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5 shrink-0">
      <span
        className={`flex h-10 w-10 items-center justify-center rounded-full border-2 font-serif text-lg italic ${
          dark
            ? "border-white text-white"
            : "border-brand-600 text-brand-600"
        }`}
      >
        V
      </span>
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
