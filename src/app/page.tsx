import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/layout/FloatingContact";
import { AboutSection } from "@/components/sections/AboutSection";
import { AuthoritySection } from "@/components/sections/AuthoritySection";
import { DifferentialsSection } from "@/components/sections/DifferentialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { HeroSection } from "@/components/sections/HeroSection";
import { MethodSection } from "@/components/sections/MethodSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo">
        <HeroSection />
        <AboutSection />
        <AuthoritySection />
        <MethodSection />
        <ServicesSection />
        <DifferentialsSection />
        <ResultsSection />
        <ProcessSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
