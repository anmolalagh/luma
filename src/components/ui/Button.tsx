import Link from "next/link";
import { cn } from "@/lib/cn";

const styles = {
  primary: "bg-glow text-ink hover:bg-[#f6c566] shadow-[0_6px_24px_-8px_rgba(242,181,68,0.7)]",
  dark: "bg-ink text-paper hover:bg-night",
  ghost: "border border-ink/20 text-ink hover:bg-ink/5",
  onDark: "border border-white/30 text-white hover:bg-white/10",
} as const;

export function ButtonLink({ href, variant = "primary", className, children }: {
  href: string; variant?: keyof typeof styles; className?: string; children: React.ReactNode;
}) {
  return (
    <Link href={href} className={cn("inline-flex min-h-[44px] items-center justify-center rounded-full px-6 text-[15px] font-semibold transition-colors", styles[variant], className)}>
      {children}
    </Link>
  );
}
