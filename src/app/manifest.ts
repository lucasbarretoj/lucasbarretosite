import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Lucas Barreto",
    short_name: "Lucas Barreto",
    description: "Estratégia, mídia paga e dados para negócios que buscam crescer com previsibilidade.",
    start_url: `${siteConfig.basePath}/`,
    scope: `${siteConfig.basePath}/`,
    display: "standalone",
    background_color: "#080a09",
    theme_color: "#38d9a9",
    lang: "pt-BR",
  };
}
