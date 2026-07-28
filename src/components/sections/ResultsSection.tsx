import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { resultsContent } from "@/data/results";

export function ResultsSection() {
  return (
    <section
      className="results section"
      id="resultados"
      aria-labelledby="results-title"
    >
      <div className="container">
        <Reveal>
          <div id="results-title">
            <SectionHeading
              eyebrow={resultsContent.eyebrow}
              title={resultsContent.title}
            />
          </div>
        </Reveal>

        <div className="results__list">
          {resultsContent.cases.map((item, index) => (
            <Reveal
              className="results__case"
              delay={index * 0.08}
              key={item.id}
            >
              <div className="results__case-copy">
                <span>{item.id}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <dl className="results__metrics">
                {item.metrics.map((metric) => (
                  <div key={metric.label}>
                    <dt>{metric.value}</dt>
                    <dd>{metric.label}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          ))}
        </div>

        <p className="results__disclaimer">{resultsContent.disclaimer}</p>
      </div>
    </section>
  );
}
