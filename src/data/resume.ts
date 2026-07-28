export type ResumeContact = {
  phone: string;
  phoneHref: string;
  email: string;
  emailHref: string;
  location: string;
  instagram: string;
  instagramHref: string;
};

export type ResumeExperience = {
  company: string;
  role: string;
  period: string;
  responsibilities: readonly string[];
};

export type ResumeEducation = {
  course: string;
  institution: string;
  location: string;
  status: string;
};

export type ResumeSkillGroup = {
  title: string;
  items: readonly string[];
};

export type ResumeCredential = {
  name: string;
  type: "Formação" | "Certificação" | "Curso";
  institution: string;
  description?: string;
};

export type ResumeLanguage = {
  language: string;
  level: string;
};

export const resumeContent = {
  name: "Lucas de Jesus Barreto",
  title: "Estrategista de crescimento, gestor de tráfego e fundador da Ascende",
  contact: {
    phone: "(75) 98235-1266",
    phoneHref: "tel:+5575982351266",
    email: "lucas@ascendedigital.com.br",
    emailHref: "mailto:lucas@ascendedigital.com.br",
    location: "Irará, Bahia",
    instagram: "@olucas.barreto",
    instagramHref: "https://www.instagram.com/olucas.barreto/",
  } satisfies ResumeContact,
  summary:
    "Profissional de marketing digital com experiência em estratégia, mídia paga, análise de dados e mensuração. Fundador da Ascende, atua na construção e gestão de operações de aquisição para empresas e negócios digitais, unindo planejamento, campanhas, análise de funil e tecnologia.",
  experience: [
    {
      company: "Ascende Marketing Digital",
      role: "Fundador e estrategista de crescimento",
      period: "2 anos",
      responsibilities: [
        "Planejamento e gestão de campanhas de mídia paga",
        "Construção de estratégias de aquisição para empresas e negócios digitais",
        "Gestão de campanhas de lançamento, perpétuo e geração de demanda",
        "Análise de funis, páginas, ofertas e indicadores de conversão",
        "Implementação de rastreamento, mensuração e dashboards",
        "Produção de relatórios estratégicos e debriefings",
        "Campanhas em Meta Ads, Google Ads, YouTube Ads e TikTok Ads",
        "Desenvolvimento de landing pages e sites de alta conversão",
        "Tecnologia, automações e inteligência artificial aplicadas ao marketing",
      ],
    },
    {
      company: "Convertix",
      role: "Gestor de tráfego",
      period: "1 ano e 6 meses",
      responsibilities: [
        "Planejamento e gestão de campanhas de mídia paga",
        "Construção de estratégias de aquisição",
        "Gestão e otimização de campanhas em Meta Ads, Google Ads e YouTube Ads",
        "Análise de métricas, funis e indicadores de conversão",
        "Produção de relatórios e acompanhamento de resultados",
        "Participação no planejamento de campanhas e projetos digitais",
      ],
    },
  ] satisfies readonly ResumeExperience[],
  areas: [
    "Lançamentos digitais",
    "Campanhas de aquisição",
    "Negócios locais",
    "Sites e sistemas",
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
  } satisfies ResumeEducation,
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
      items: ["Next.js", "React", "TypeScript", "Java", "Supabase", "n8n", "Make", "Integrações", "APIs", "Inteligência artificial aplicada a negócios"],
    },
  ] satisfies readonly ResumeSkillGroup[],
  strengths: ["Responsabilidade", "Transparência", "Dinamismo", "Curiosidade", "Organização", "Proatividade", "Capacidade analítica", "Comunicação", "Aprendizado contínuo", "Resolução de problemas"],
  technologies: ["Meta Ads", "Google Ads", "YouTube Ads", "TikTok Ads", "Google Analytics 4", "Google Tag Manager", "Looker Studio", "ActiveCampaign", "n8n", "Make", "Supabase", "GitHub", "VS Code", "Next.js", "Java", "Inteligência artificial"],
  credentials: [
    {
      name: "Subido PRO",
      type: "Formação",
      institution: "Mentoria Subido PRO",
      description: "Formação avançada em tráfego pago, primeira turma do programa Subido PRO.",
    },
    {
      name: "Meta Ads",
      type: "Certificação",
      institution: "Mentoria Subido PRO",
    },
    {
      name: "Google Ads",
      type: "Certificação",
      institution: "Mentoria Subido PRO",
    },
    {
      name: "Light Copy",
      type: "Curso",
      institution: "Leandro Ladeira",
    },
  ] satisfies readonly ResumeCredential[],
  languages: [
    { language: "Português", level: "Nativo" },
    { language: "Inglês", level: "Intermediário" },
  ] satisfies readonly ResumeLanguage[],
} as const;
