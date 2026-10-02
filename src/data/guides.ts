/**
 * Display-level guide data for Phase 1.
 * In Phase 4 this moves to the `personas` table in Supabase. The shape below is
 * the public subset of the full persona config; prompts and dials stay server-side.
 * `avatarUrl` is optional: when set, it replaces the generated placeholder illustration.
 */
export type Guide = {
  slug: string;
  name: string;
  role: string; // short label, e.g. "Tarot"
  country: string;
  languages: string[];
  specialties: string[];
  tagline: string;
  description: string;
  avatarUrl?: string;
  palette: { bg: string; skin: string; hair: string; top: string };
  hair: 0 | 1 | 2 | 3;
};

export const guides: Guide[] = [
  {
    slug: "sarah", name: "Sarah", role: "Intuitive", country: "United Kingdom",
    languages: ["English"], specialties: ["Relationships", "Emotional clarity", "Life transitions", "Dreams"],
    tagline: "Relationships • Emotional clarity",
    description: "Warm, reflective and easy to talk to.",
    palette: { bg: "#E8D9D2", skin: "#E9C5A8", hair: "#6A4630", top: "#3F7377" }, hair: 1,
  },
  {
    slug: "anuj", name: "Anuj", role: "Tarot", country: "India",
    languages: ["English", "Hindi", "Hinglish"], specialties: ["Tarot", "Numerology", "Relationships"],
    tagline: "Love • Career • Decisions",
    description: "Direct, grounded and reassuring. Clear readings in plain language.",
    palette: { bg: "#DDE3E6", skin: "#B98560", hair: "#1E1A18", top: "#14202E" }, hair: 0,
  },
  {
    slug: "priya", name: "Priya", role: "Vedic astrology", country: "India",
    languages: ["English", "Hindi", "Hinglish"], specialties: ["Kundli", "Marriage", "Career", "Life periods"],
    tagline: "Marriage • Career • Kundli",
    description: "Calm and patient. Explains Vedic charts and dashas step by step.",
    palette: { bg: "#F0DFC0", skin: "#B8825C", hair: "#1B1614", top: "#8A4B5A" }, hair: 2,
  },
  {
    slug: "maya", name: "Maya", role: "Dreams", country: "United States",
    languages: ["English", "Spanish"], specialties: ["Dream interpretation", "Self-discovery", "Intuitive reflection"],
    tagline: "Dreams • Self-discovery",
    description: "Curious and empathetic. Helps you notice what a dream is pointing at.",
    palette: { bg: "#DCE3DD", skin: "#8E5E43", hair: "#2A1D17", top: "#C98F4A" }, hair: 3,
  },
  {
    slug: "daniel", name: "Daniel", role: "Life guidance", country: "Canada",
    languages: ["English", "French"], specialties: ["Career", "Life decisions", "Personal growth"],
    tagline: "Career • Decisions",
    description: "Practical and calm. Looks at your options instead of predicting outcomes.",
    palette: { bg: "#E2E4E8", skin: "#E3BFA0", hair: "#5A4A3A", top: "#3A4A5E" }, hair: 0,
  },
  {
    slug: "elena", name: "Elena", role: "Western astrology", country: "Spain",
    languages: ["English", "Spanish"], specialties: ["Western astrology", "Relationships", "Compatibility"],
    tagline: "Astrology • Compatibility",
    description: "Expressive and romantic. Reads natal charts with a human touch.",
    palette: { bg: "#EBD6D0", skin: "#D9A988", hair: "#2B1C17", top: "#A4524A" }, hair: 2,
  },
  {
    slug: "noor", name: "Noor", role: "Spiritual reflection", country: "United Arab Emirates",
    languages: ["English", "Arabic"], specialties: ["Spiritual reflection", "Self-discovery", "Life transitions"],
    tagline: "Reflection • Life transitions",
    description: "Gentle and respectful. A quiet space to think things through.",
    palette: { bg: "#DDE6E4", skin: "#C99A78", hair: "#2A211D", top: "#4C6F6A" }, hair: 1,
  },
  {
    slug: "aisha", name: "Aisha", role: "Tarot", country: "India",
    languages: ["English", "Hindi", "Hinglish"], specialties: ["Tarot", "Relationships", "Self-discovery"],
    tagline: "Tarot • Relationships",
    description: "Conversational and intuitive. Feels like talking to a friend who gets it.",
    palette: { bg: "#EFE0D2", skin: "#C08A66", hair: "#221915", top: "#D08B3C" }, hair: 3,
  },
  {
    slug: "leo", name: "Leo", role: "Numerology", country: "Australia",
    languages: ["English"], specialties: ["Numerology", "Career", "Decisions"],
    tagline: "Numbers • Career • Decisions",
    description: "Friendly and lighthearted. Straight answers, no fluff.",
    palette: { bg: "#E3E7DA", skin: "#E7C2A1", hair: "#8B6A3E", top: "#5F7A52" }, hair: 0,
  },
  {
    slug: "sofia", name: "Sofia", role: "Dreams", country: "Portugal",
    languages: ["English", "Portuguese"], specialties: ["Dreams", "Relationships", "Intuitive reflection"],
    tagline: "Dreams • Relationships",
    description: "Soft and curious. Takes her time with what you bring.",
    palette: { bg: "#E6DCE0", skin: "#DDB394", hair: "#4A3228", top: "#7B6A8C" }, hair: 1,
  },
  {
    slug: "amara", name: "Amara", role: "Intuitive", country: "United States",
    languages: ["English"], specialties: ["Intuitive guidance", "Relationships", "Life transitions"],
    tagline: "Relationships • Transitions",
    description: "Empathetic and deep. Good for the conversations that need room.",
    palette: { bg: "#E9DACB", skin: "#7A4E38", hair: "#18110E", top: "#B5673F" }, hair: 3,
  },
  {
    slug: "james", name: "James", role: "Life guidance", country: "United Kingdom",
    languages: ["English"], specialties: ["Practical guidance", "Career", "Decisions"],
    tagline: "Career • Decisions",
    description: "Rational, calm and honest. Tells you what he sees.",
    palette: { bg: "#DFE2E4", skin: "#DDB89A", hair: "#3B3A3C", top: "#2F3B4B" }, hair: 0,
  },
];

export const getGuide = (slug: string) => guides.find((g) => g.slug === slug);
