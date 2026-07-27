import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { servicesContent } from "@/data/services";

export function ServicesSection() {
  return (
    <section className="services section" id="servicos" aria-labelledby="services-title">
      <div className="container">
        <Reveal className="services__heading">
          <div id="services-title">
            <SectionHeading
              eyebrow={servicesContent.eyebrow}
              title={servicesContent.title}
              description={servicesContent.description}
            />
          </div>
        </Reveal>
        <div className="services__grid">
          {servicesContent.items.map((service, index) => (
            <Reveal className="services__card" delay={index * 0.06} key={service.title}>
              <div className="services__number">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <ArrowUpRight aria-hidden="true" />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul aria-label={`Recursos de ${service.title}`}>
                {service.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
