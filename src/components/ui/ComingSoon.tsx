import { ButtonLink } from "./Button";

export function ComingSoon({ title, phase, note }: { title: string; phase: string; note: string }) {
  return (
    <section className="mx-auto max-w-xl px-5 py-24 text-center">
      <h1 className="font-display text-4xl md:text-5xl">{title}</h1>
      <p className="mt-4 text-slate">{note}</p>
      <p className="mt-2 text-sm text-slate/80">Built in {phase}.</p>
      <ButtonLink href="/" variant="dark" className="mt-8">Back to home</ButtonLink>
    </section>
  );
}
