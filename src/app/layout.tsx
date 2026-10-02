import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Figtree } from "next/font/google";
import "./globals.css";
import { TopNav } from "@/components/layout/TopNav";
import { BottomTabBar } from "@/components/layout/BottomTabBar";
import { Footer } from "@/components/layout/Footer";

const display = Instrument_Serif({ weight: "400", subsets: ["latin"], variable: "--font-display" });
const body = Figtree({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: { default: "Luma: a different perspective on what's on your mind", template: "%s | Luma" },
  description: "Explore love, life, dreams, decisions, astrology, tarot and more through virtual guides, each with their own perspective.",
};

export const viewport: Viewport = { themeColor: "#F5F4F0", width: "device-width", initialScale: 1, viewportFit: "cover" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-paper">Skip to content</a>
        <TopNav />
        <main id="main">{children}</main>
        <Footer />
        <BottomTabBar />
      </body>
    </html>
  );
}
