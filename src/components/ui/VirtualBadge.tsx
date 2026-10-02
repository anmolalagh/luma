export function VirtualBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-mist px-2.5 py-1 text-xs font-medium text-slate">
      <span className="h-1.5 w-1.5 rounded-full bg-sea" aria-hidden />
      Virtual Guide
    </span>
  );
}
