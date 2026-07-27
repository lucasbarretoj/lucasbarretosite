import { Header } from "@/components/layout/Header";
import { AboutSection } from "@/components/sections/AboutSection";
import { AuthoritySection } from "@/components/sections/AuthoritySection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ResultsSection } from "@/components/sections/ResultsSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <AuthoritySection />
        <ResultsSection />
      </main>
    </>
  );
}
