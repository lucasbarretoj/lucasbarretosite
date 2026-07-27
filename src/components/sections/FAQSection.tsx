import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqContent } from "@/data/faq";

export function FAQSection() {
  return (
    <section className="faq section" id="faq" aria-labelledby="faq-title">
      <div className="container faq__grid">
        <Reveal>
          <div id="faq-title">
            <SectionHeading eyebrow={faqContent.eyebrow} title={faqContent.title} description={faqContent.description} />
          </div>
        </Reveal>
        <Reveal delay={0.08}><Accordion items={faqContent.items} /></Reveal>
      </div>
    </section>
  );
}
