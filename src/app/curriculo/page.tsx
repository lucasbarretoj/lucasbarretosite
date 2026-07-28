import type { Metadata } from "next";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { PrintResumeButton } from "@/components/resume/PrintResumeButton";
import { siteConfig } from "@/config/site";
import { resumeContent } from "@/data/resume";

export const metadata: Metadata = {
  title: "Currículo",
  description: "Conheça a experiência profissional, competências, formação e principais áreas de atuação de Lucas Barreto.",
  alternates: { canonical: "/curriculo" },
  openGraph: {
    title: "Currículo | Lucas Barreto",
    description: "Experiência profissional, competências, formação e áreas de atuação de Lucas Barreto.",
  },
};

export default function ResumePage() {
  return (
    <>
      <a className="skip-link" href="#curriculo-conteudo">Pular para o currículo</a>
      <header className="resume-nav">
        <div className="container resume-nav__inner">
          <Link href="/">Lucas Barreto<span>.</span></Link>
          <Link href="/"><ArrowLeft aria-hidden="true" />Voltar ao site</Link>
        </div>
      </header>
      <main className="resume-page" id="curriculo-conteudo">
        <div className="container">
          <section className="resume-hero">
            <Image src="/images/lucas/lucas-barreto-portrait.png" alt="Lucas Barreto" width={180} height={180} priority />
            <div>
              <p className="eyebrow">Currículo digital</p>
              <h1>{resumeContent.name}</h1>
              <p>{resumeContent.title}</p>
              <div className="resume-hero__actions">
                <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer">Instagram <ExternalLink aria-hidden="true" /></a>
                <a href={siteConfig.contactHref} target="_blank" rel="noopener noreferrer">Contato <ExternalLink aria-hidden="true" /></a>
                <PrintResumeButton />
              </div>
            </div>
          </section>

          <section className="resume-section" aria-labelledby="resumo-title">
            <p className="resume-section__label">Perfil</p>
            <div><h2 id="resumo-title">Resumo profissional</h2><p className="resume-copy">{resumeContent.summary}</p></div>
          </section>

          <section className="resume-section" aria-labelledby="experiencia-title">
            <p className="resume-section__label">Experiência</p>
            <div>
              <h2 id="experiencia-title">Experiência profissional</h2>
              {resumeContent.experience.map((item) => (
                <article className="resume-experience" key={item.company}>
                  <div><h3>{item.role}</h3><p>{item.company}</p><span>{item.period}</span></div>
                  <ul>{item.responsibilities.map((responsibility) => <li key={responsibility}>{responsibility}</li>)}</ul>
                </article>
              ))}
            </div>
          </section>

          <section className="resume-section" aria-labelledby="areas-title">
            <p className="resume-section__label">Atuação</p>
            <div><h2 id="areas-title">Projetos e áreas de atuação</h2><ul className="resume-tags">{resumeContent.areas.map((area) => <li key={area}>{area}</li>)}</ul></div>
          </section>

          <section className="resume-section" aria-labelledby="formacao-title">
            <p className="resume-section__label">Formação</p>
            <div><h2 id="formacao-title">Formação acadêmica</h2><article className="resume-education"><h3>{resumeContent.education.course}</h3><p>{resumeContent.education.institution} · {resumeContent.education.location}</p><span>{resumeContent.education.status}</span></article></div>
          </section>

          <section className="resume-section" aria-labelledby="competencias-title">
            <p className="resume-section__label">Competências</p>
            <div><h2 id="competencias-title">Competências profissionais</h2><div className="resume-skills">{resumeContent.skills.map((group) => <article key={group.title}><h3>{group.title}</h3><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div></div>
          </section>

          <section className="resume-section" aria-labelledby="ferramentas-title">
            <p className="resume-section__label">Stack</p>
            <div><h2 id="ferramentas-title">Ferramentas e plataformas</h2><ul className="resume-tags">{resumeContent.tools.map((tool) => <li key={tool}>{tool}</li>)}</ul></div>
          </section>

          <section className="resume-section" aria-labelledby="cursos-title">
            <p className="resume-section__label">Desenvolvimento</p>
            <div><h2 id="cursos-title">Cursos, mentorias e certificações</h2><p className="resume-copy">Informações em validação. Cursos e mentorias serão adicionados após confirmação de nomes, instituições e datas.</p></div>
          </section>

          <section className="resume-section" aria-labelledby="idiomas-title">
            <p className="resume-section__label">Idiomas</p>
            <div><h2 id="idiomas-title">Idiomas</h2>{resumeContent.languages.map((item) => <p className="resume-language" key={item.language}><strong>{item.language}</strong><span>{item.level}</span></p>)}</div>
          </section>
        </div>
      </main>
      <footer className="resume-footer"><div className="container"><span>Lucas Barreto</span><Link href="/">Voltar à página principal</Link></div></footer>
    </>
  );
}
