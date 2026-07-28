export type ResumeExperience = {
  company: string;
  role: string;
  period: string;
  responsibilities: readonly string[];
};

export type ResumeSkillGroup = {
  title: string;
  items: readonly string[];
};

export const resumeContent = {
  name: "Lucas Barreto",
  title: "Estrategista de crescimento, gestor de tráfego e fundador da Ascende",
  summary:
    "Profissional de marketing digital com experiência em estratégia, mídia paga, análise de dados e mensuração. Fundador da Ascende, atua na construção e gestão de operações de aquisição para empresas e negócios digitais, unindo planejamento, execução de campanhas, análise de funil e tecnologia para desenvolver estratégias de crescimento mais consistentes.",
  experience: [
    {
      company: "Ascende Marketing Digital",
      role: "Fundador e estrategista de crescimento",
      period: "Período a confirmar",
      responsibilities: [
        "Planejamento e gestão de campanhas de mídia paga",
        "Construção de estratégias de aquisição para empresas e negócios digitais",
        "Gestão de campanhas de lançamento, perpétuo e geração de demanda",
        "Análise de funis, páginas, ofertas e indicadores de conversão",
        "Implementação de rastreamento, mensuração e dashboards",
        "Produção de relatórios estratégicos e debriefings",
        "Acompanhamento de campanhas em Meta Ads, Google Ads, YouTube Ads e TikTok Ads",
      ],
    },
  ] satisfies readonly ResumeExperience[],
  areas: [
    "Lançamentos digitais",
    "Campanhas de aquisição",
    "Negócios locais",
    "Clínicas e profissionais",
    "Landing pages",
    "Mensuração e dashboards",
    "Automações de marketing",
    "Produtos digitais",
    "Tecnologia e inteligência artificial",
  ],
  education: {
    course: "Sistemas de Informação",
    institution: "UNEX",
    location: "Feira de Santana, Bahia",
    status: "Em andamento",
  },
  skills: [
    {
      title: "Estratégia e marketing",
      items: ["Estratégia de aquisição", "Mídia paga", "Planejamento de campanhas", "Análise de funil", "Lançamentos digitais", "Comunicação de oferta", "Relatórios e debriefings"],
    },
    {
      title: "Dados e mensuração",
      items: ["Google Analytics 4", "Google Tag Manager", "Looker Studio", "Rastreamento", "Dashboards", "Análise de indicadores"],
    },
    {
      title: "Tecnologia e automação",
      items: ["Next.js", "React", "TypeScript", "Supabase", "n8n", "Make", "Integrações", "APIs", "Inteligência artificial aplicada a negócios"],
    },
  ] satisfies readonly ResumeSkillGroup[],
  tools: ["Meta Ads", "Google Ads", "YouTube Ads", "TikTok Ads", "Google Analytics 4", "Google Tag Manager", "Looker Studio", "ActiveCampaign", "n8n", "Make", "Supabase", "GitHub", "VS Code", "Next.js", "ChatGPT", "Codex"],
  languages: [{ language: "Português", level: "Nativo" }],
} as const;
