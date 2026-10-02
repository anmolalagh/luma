"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "./nav-items";
import { NavIcon } from "./NavIcon";
import { cn } from "@/lib/cn";

export function BottomTabBar() {
  const pathname = usePathname();
  // The chat screen needs the full viewport for its composer.
  if (pathname.startsWith("/chat/")) return null;
  return (
    <nav aria-label="Primary" className="safe-bottom fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-paper/95 backdrop-blur md:hidden">
      <ul className="mx-auto flex max-w-md items-stretch justify-between px-2">
        {navItems.map((item) => {
          const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
          const isAsk = item.icon === "spark";
          return (
            <li key={item.href} className="flex-1">
              <Link href={item.href} aria-current={active ? "page" : undefined}
                className={cn("flex min-h-[56px] flex-col items-center justify-center gap-0.5 text-[11px]", active ? "text-ink font-semibold" : "text-slate")}>
                {isAsk ? (
                  <span className="-mt-5 flex h-11 w-11 items-center justify-center rounded-full bg-glow text-ink shadow-[0_6px_18px_-6px_rgba(242,181,68,0.9)]">
                    <NavIcon name={item.icon} className="h-5 w-5" />
                  </span>
                ) : (
                  <NavIcon name={item.icon} className="h-[22px] w-[22px]" />
                )}
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
