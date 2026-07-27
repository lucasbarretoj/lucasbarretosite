import { Header } from "@/components/layout/Header";
import { AboutSection } from "@/components/sections/AboutSection";
import { AuthoritySection } from "@/components/sections/AuthoritySection";
import { HeroSection } from "@/components/sections/HeroSection";
import { MethodSection } from "@/components/sections/MethodSection";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <AuthoritySection />
        <MethodSection />
        <ServicesSection />
        <ResultsSection />
      </main>
    </>
  );
}
