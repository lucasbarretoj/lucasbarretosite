import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { authorityContent } from "@/data/about";

export function AuthoritySection() {
  return (
    <section
      className="authority section"
      aria-labelledby="authority-title"
    >
      <div className="container">
        <Reveal>
          <div id="authority-title">
            <SectionHeading
              eyebrow={authorityContent.eyebrow}
              title={authorityContent.title}
              description={authorityContent.description}
            />
          </div>
        </Reveal>

        <div className="authority__grid">
          {authorityContent.pillars.map((pillar, index) => (
            <Reveal
              className="authority__card"
              delay={index * 0.06}
              key={pillar.label}
            >
              <strong>{pillar.value}</strong>
              <span>{pillar.label}</span>
              <p>{pillar.detail}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
