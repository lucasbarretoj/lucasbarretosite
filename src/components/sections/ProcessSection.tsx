import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processContent } from "@/data/process";

export function ProcessSection() {
  return (
    <section className="process section" aria-labelledby="process-title">
      <div className="container">
        <Reveal>
          <div id="process-title">
            <SectionHeading eyebrow={processContent.eyebrow} title={processContent.title} />
          </div>
        </Reveal>
        <ol className="process__list">
          {processContent.steps.map((step, index) => (
            <li key={step.title}>
              <Reveal delay={index * 0.06}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
