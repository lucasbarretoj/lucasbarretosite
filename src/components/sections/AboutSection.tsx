import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutContent } from "@/data/about";

export function AboutSection() {
  return (
    <section className="about section" id="sobre" aria-labelledby="about-title">
      <div className="container about__grid">
        <Reveal className="about__portrait">
          <div
            className="about__portrait-placeholder"
            role="img"
            aria-label="Espaço reservado para uma fotografia de Lucas Barreto"
          >
            <span>LB</span>
            <small>Foto original pendente</small>
          </div>
        </Reveal>

        <Reveal className="about__content" delay={0.08}>
          <div id="about-title">
            <SectionHeading
              eyebrow={aboutContent.eyebrow}
              title={aboutContent.title}
            />
          </div>
          <div className="about__body">
            {aboutContent.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ul className="about__principles" aria-label="Princípios de atuação">
            {aboutContent.principles.map((principle) => (
              <li key={principle}>{principle}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
