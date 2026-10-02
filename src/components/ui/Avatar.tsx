import type { Guide } from "@/data/guides";

const sizes = { sm: 40, md: 64, lg: 112 } as const;

/**
 * Placeholder illustrated portrait. To use a final portrait, set `avatarUrl` on the
 * guide (Phase 4: persona.avatar_url from Supabase Storage). No other change is needed.
 */
export function Avatar({ guide, size = "md", className }: { guide: Guide; size?: keyof typeof sizes; className?: string }) {
  const px = sizes[size];
  if (guide.avatarUrl) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={guide.avatarUrl} alt={`${guide.name}, virtual guide`} width={px} height={px} className={`rounded-full object-cover ${className ?? ""}`} />;
  }
  const { bg, skin, hair, top } = guide.palette;
  const hairPath = [
    "M30 46c0-14 8-22 20-22s20 8 20 22c-4-8-10-11-20-11s-16 3-20 11z",
    "M27 52c-2-20 8-30 23-30s25 10 23 30c-2 8-4 14-4 14l-6-22c-8 0-18-4-22-10-2 8-6 14-8 18z",
    "M28 50c0-18 8-28 22-28s22 10 22 28c0 10-3 20-5 24l-4-26c-8-2-14-6-16-12-2 8-8 12-14 14z",
    "M26 48c0-18 10-28 24-28s24 10 24 28c0 4-1 8-3 10-2-10-8-18-21-18s-19 8-21 18c-2-2-3-6-3-10z",
  ][guide.hair];
  return (
    <svg viewBox="0 0 100 100" width={px} height={px} role="img" aria-label={`${guide.name}, virtual guide`} className={`rounded-full ${className ?? ""}`}>
      <rect width="100" height="100" fill={bg} />
      <ellipse cx="50" cy="104" rx="34" ry="26" fill={top} />
      <rect x="44" y="60" width="12" height="14" rx="5" fill={skin} />
      <ellipse cx="50" cy="46" rx="16" ry="19" fill={skin} />
      <path d={hairPath} fill={hair} />
    </svg>
  );
}
