import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <main className="foundation">
      <div className="foundation__glow" aria-hidden="true" />
      <section className="foundation__content" aria-labelledby="page-title">
        <p className="eyebrow">Fundação técnica</p>
        <h1 id="page-title">{siteConfig.name}</h1>
        <p>
          A nova experiência digital está sendo construída com estratégia,
          clareza e método.
        </p>
        <span>Sprint 00 em preparação</span>
      </section>
    </main>
  );
}
