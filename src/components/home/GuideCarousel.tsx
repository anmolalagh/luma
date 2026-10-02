import Link from "next/link";
import { guides } from "@/data/guides";
import { Avatar } from "@/components/ui/Avatar";
import { VirtualBadge } from "@/components/ui/VirtualBadge";
import { ButtonLink } from "@/components/ui/Button";

export function GuideCarousel() {
  return (
    <section id="guides" className="mt-24 scroll-mt-24">
      <div className="mx-auto flex max-w-6xl items-end justify-between px-5">
        <h2 className="font-display text-3xl md:text-5xl">Meet your guides</h2>
        <Link href="/explore" className="hidden text-[15px] font-medium underline underline-offset-4 md:inline">Explore all guides</Link>
      </div>
      <ul className="no-scrollbar mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 md:px-[max(1.25rem,calc((100vw-72rem)/2+1.25rem))]" aria-label="Guides">
        {guides.map((g) => (
          <li key={g.slug} className="w-[260px] shrink-0 snap-start">
            <Link href={`/guides/${g.slug}`} className="block h-full rounded-xl3 bg-white p-5 ring-1 ring-ink/5 transition-shadow hover:shadow-[0_18px_40px_-24px_rgba(20,32,46,0.5)]">
              <Avatar guide={g} size="lg" />
              <h3 className="mt-4 font-display text-3xl leading-none">{g.name}</h3>
              <p className="mt-1 text-sm font-medium text-sea">{g.role}</p>
              <p className="mt-3 text-sm text-slate">{g.tagline}</p>
              <div className="mt-4"><VirtualBadge /></div>
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-6 px-5 text-center md:hidden"><ButtonLink href="/explore" variant="dark">Explore all guides</ButtonLink></div>
    </section>
  );
}
