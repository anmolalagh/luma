import Link from "next/link";
import { categories } from "@/data/categories";
import { cn } from "@/lib/cn";

export function CategoryGrid() {
  return (
    <section className="mx-auto mt-20 max-w-6xl px-5">
      <h2 className="font-display text-3xl md:text-5xl">What are you looking for?</h2>
      <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {categories.map((c) => (
          <li key={c.slug}>
            <Link href={`/explore?category=${c.slug}`}
              className={cn("flex min-h-[72px] items-center gap-3 rounded-xl2 px-4 py-3 text-[16px] font-medium transition-transform hover:-translate-y-0.5", c.tint)}>
              <span className="text-2xl" aria-hidden>{c.emoji}</span>
              {c.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
