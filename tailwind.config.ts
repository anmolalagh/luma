import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F5F4F0",
        ink: "#14202E",
        night: "#0E1726",
        glow: "#F2B544",
        glowsoft: "#FBE7BC",
        sea: "#3F7377",
        mist: "#E4E8EA",
        blush: "#EBCFC6",
        slate: "#5B6776",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: { xl2: "1.25rem", xl3: "1.75rem" },
      keyframes: {
        breathe: {
          "0%,100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.06)" },
        },
      },
      animation: { breathe: "breathe 7s ease-in-out infinite" },
    },
  },
  plugins: [],
};
export default config;
