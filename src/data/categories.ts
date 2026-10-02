export type Category = { slug: string; label: string; emoji: string; tint: string };

export const categories: Category[] = [
  { slug: "love", label: "Love", emoji: "❤️", tint: "bg-blush" },
  { slug: "breakups", label: "Breakups", emoji: "💔", tint: "bg-mist" },
  { slug: "career", label: "Career", emoji: "💼", tint: "bg-glowsoft" },
  { slug: "dreams", label: "Dreams", emoji: "🌙", tint: "bg-mist" },
  { slug: "astrology", label: "Astrology", emoji: "🔮", tint: "bg-blush" },
  { slug: "tarot", label: "Tarot", emoji: "🃏", tint: "bg-glowsoft" },
  { slug: "self-discovery", label: "Self-discovery", emoji: "✨", tint: "bg-mist" },
  { slug: "decisions", label: "Decisions", emoji: "🧠", tint: "bg-blush" },
  { slug: "spirituality", label: "Spirituality", emoji: "🕯", tint: "bg-glowsoft" },
];
