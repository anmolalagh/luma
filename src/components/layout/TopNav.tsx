"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { navItems } from "./nav-items";
import { cn } from "@/lib/cn";

export function TopNav() {
  const pathname = usePathname();
  const links = navItems.filter((i) => i.href !== "/" && i.href !== "/ask");
  return (
    <header className="sticky top-0 z-40 border-b border-ink/5 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Logo />
        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} aria-current={pathname.startsWith(l.href) ? "page" : undefined}
              className={cn("text-[15px] text-slate transition-colors hover:text-ink", pathname.startsWith(l.href) && "text-ink font-medium")}>
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/login" className="hidden min-h-[44px] items-center px-3 text-[15px] text-slate hover:text-ink sm:inline-flex">Log in</Link>
          <Link href="/ask" className="inline-flex min-h-[44px] items-center rounded-full bg-ink px-5 text-[15px] font-semibold text-paper hover:bg-night">Start exploring</Link>
        </div>
      </div>
    </header>
  );
}
