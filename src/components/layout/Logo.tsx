import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="Luma home">
      <span className="relative inline-block h-6 w-6" aria-hidden>
        <span className="absolute inset-0 rounded-full bg-glow" />
        <span className="absolute inset-[5px] rounded-full bg-paper" />
        <span className="absolute inset-[9px] rounded-full bg-glow" />
      </span>
      <span className="font-display text-[26px] leading-none tracking-tight">Luma</span>
    </Link>
  );
}
