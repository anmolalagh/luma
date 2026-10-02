import { notFound } from "next/navigation";
import { getGuide } from "@/data/guides";
import { Avatar } from "@/components/ui/Avatar";
import { VirtualBadge } from "@/components/ui/VirtualBadge";
import { ButtonLink } from "@/components/ui/Button";

export default function GuidePage({ params }: { params: { slug: string } }) {
  const g = getGuide(params.slug);
  if (!g) notFound();
  return (
    <section className="mx-auto max-w-xl px-5 py-16 text-center">
      <Avatar guide={g} size="lg" className="mx-auto" />
      <h1 className="mt-5 font-display text-5xl">{g.name}</h1>
      <p className="mt-1 text-sea">{g.role}</p>
      <div className="mt-3"><VirtualBadge /></div>
      <p className="mt-5 text-slate">{g.description}</p>
      <p className="mt-2 text-sm text-slate/80">Full guide profiles arrive in Phase 4.</p>
      <ButtonLink href="/ask" className="mt-8">Start exploring</ButtonLink>
    </section>
  );
}
