import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { methodContent } from "@/data/method";

export function MethodSection() {
  return (
    <section className="method section" id="metodo" aria-labelledby="method-title">
      <div className="container">
        <Reveal>
          <div id="method-title">
            <SectionHeading
              eyebrow={methodContent.eyebrow}
              title={methodContent.title}
              description={methodContent.description}
            />
          </div>
        </Reveal>
        <div className="method__grid">
          {methodContent.steps.map((step, index) => (
            <Reveal className="method__step" delay={index * 0.06} key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
