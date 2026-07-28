import { Reveal } from "@/components/ui/Reveal";
import { differentialsContent } from "@/data/process";

export function DifferentialsSection() {
  return (
    <section className="differentials section" aria-labelledby="differentials-title">
      <div className="container">
        <Reveal>
          <header className="differentials__heading">
            <p className="eyebrow">{differentialsContent.eyebrow}</p>
            <h2 id="differentials-title">{differentialsContent.title}</h2>
          </header>
        </Reveal>
        <div className="differentials__grid">
          {differentialsContent.items.map((item, index) => (
            <Reveal className="differentials__item" delay={index * 0.06} key={item.title}>
              <span aria-hidden="true" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
