import { getGuide } from "@/data/guides";
import { Avatar } from "@/components/ui/Avatar";

// Illustrative sample replies written for the landing page. Real replies come from the AI engine (Phase 6).
const replies = [
  { slug: "sarah", lens: "Emotional", lines: ["Okay. That probably landed harder than it looks.", "I wonder what you felt in the first few seconds, before you started thinking about it.", "What would you want from them, if you let yourself say it?"] },
  { slug: "anuj", lens: "Tarot", lines: ["Let's pull three cards: where this came from, where it is now, and what could come next.", "I'd read it as an opening, not a promise.", "Want me to draw them?"] },
  { slug: "daniel", lens: "Practical", lines: ["Six months is a long gap. What did the message actually say?", "I'd look at what they're asking for, then what you'd need to see before replying.", "You don't owe a fast answer."] },
  { slug: "maya", lens: "Reflective", lines: ["Messages like this tend to stir up an old chapter.", "Has this person shown up in your thoughts or dreams lately?", "That might tell us what the text is really touching."] },
];

export function PerspectiveDemo() {
  return (
    <section className="mx-auto mt-24 max-w-6xl px-5">
      <h2 className="font-display text-3xl md:text-5xl">Sometimes you don&apos;t need another answer.</h2>
      <p className="mt-3 text-lg text-slate">You just need another perspective.</p>

      <div className="mt-8 flex justify-end">
        <p className="max-w-sm rounded-2xl rounded-br-md bg-ink px-4 py-3 text-[15px] text-paper">My ex suddenly texted me after six months.</p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {replies.map((r) => {
          const g = getGuide(r.slug)!;
          return (
            <article key={r.slug} className="rounded-xl3 bg-white p-5 ring-1 ring-ink/5">
              <header className="flex items-center gap-3">
                <Avatar guide={g} size="sm" />
                <div>
                  <h3 className="font-display text-2xl leading-none">{g.name}</h3>
                  <p className="mt-1 text-xs text-slate">{r.lens} perspective</p>
                </div>
              </header>
              <div className="mt-4 space-y-2">
                {r.lines.map((l) => (
                  <p key={l} className="w-fit max-w-full rounded-2xl rounded-tl-md bg-mist px-3.5 py-2 text-[14px] leading-snug">{l}</p>
                ))}
              </div>
            </article>
          );
        })}
      </div>
      <p className="mt-4 text-xs text-slate">Sample replies for illustration.</p>
    </section>
  );
}
