"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ButtonLink } from "@/components/ui/Button";

const placeholders = [
  "I don't know what to do about my relationship...",
  "I had a strange dream last night...",
  "Should I take this new job?",
  "Why has someone suddenly become distant?",
  "I want to understand my birth chart.",
  "I have a decision I can't make.",
];

export function Hero() {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [i, setI] = useState(0);

  useEffect(() => {
    if (value) return; // stop rotating once the person starts typing
    const t = setInterval(() => setI((n) => (n + 1) % placeholders.length), 3600);
    return () => clearInterval(t);
  }, [value]);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const q = value.trim();
    router.push(q ? `/ask?q=${encodeURIComponent(q)}` : "/ask");
  }

  return (
    <section className="mx-3 mt-3 md:mx-6 md:mt-5">
      <div className="relative overflow-hidden rounded-xl3 bg-night px-5 pb-10 pt-14 text-white md:px-14 md:pb-16 md:pt-24">
        <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] animate-breathe rounded-full bg-[radial-gradient(circle,rgba(242,181,68,0.55)_0%,rgba(242,181,68,0.12)_45%,transparent_70%)] md:h-[640px] md:w-[640px]" />
        <div className="relative max-w-2xl">
          <h1 className="font-display text-[44px] leading-[1.02] tracking-tight sm:text-6xl md:text-[84px]">What&apos;s on your mind?</h1>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-white/75 md:text-lg">
            Explore love, life, dreams, decisions, astrology, tarot and more, through a perspective that feels right for you.
          </p>

          <form onSubmit={submit} className="mt-8 rounded-xl2 bg-paper p-2 text-ink shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]">
            <label htmlFor="hero-input" className="sr-only">Tell us what&apos;s on your mind</label>
            <input
              id="hero-input"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder={placeholders[i]}
              autoComplete="off"
              className="h-14 w-full rounded-xl bg-transparent px-4 text-base text-ink placeholder:text-slate/70 focus:outline-none md:text-lg"
            />
            <div className="flex flex-col gap-2 p-1 sm:flex-row sm:items-center sm:justify-between">
              <span className="px-3 text-sm text-slate">Tell us what&apos;s on your mind...</span>
              <button type="submit" className="min-h-[48px] rounded-full bg-glow px-7 text-[15px] font-semibold text-ink transition-colors hover:bg-[#f6c566]">
                Start exploring
              </button>
            </div>
          </form>

          <div className="mt-5">
            <ButtonLink href="#guides" variant="onDark">Meet the guides</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
