import { Hero } from "@/components/home/Hero";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { GuideCarousel } from "@/components/home/GuideCarousel";
import { PerspectiveDemo } from "@/components/home/PerspectiveDemo";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <GuideCarousel />
      <PerspectiveDemo />
    </>
  );
}
