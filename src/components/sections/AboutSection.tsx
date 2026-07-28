import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutContent } from "@/data/about";

export function AboutSection() {
  return (
    <section className="about section" id="sobre" aria-labelledby="about-title">
      <div className="container about__grid">
        <Reveal className="about__portrait">
          <Image
            className="about__portrait-image"
            src="/images/lucas/lucas-barreto-portrait.png"
            alt="Lucas Barreto"
            fill
            sizes="(min-width: 1024px) 34vw, calc(100vw - 2.5rem)"
          />
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
import Image from "next/image";
