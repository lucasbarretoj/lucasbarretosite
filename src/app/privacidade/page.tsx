import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { siteConfig } from "@/config/site";

const privacyUrl = `${siteConfig.url}/privacidade`;

export const metadata: Metadata = {
  title: "Aviso de Privacidade",
  description: "Saiba como os dados enviados pelo formulário de Lucas Barreto são utilizados e protegidos.",
  alternates: { canonical: privacyUrl },
  openGraph: { url: privacyUrl, title: "Aviso de Privacidade | Lucas Barreto" },
};

export default function PrivacyPage() {
  return (
    <main className="privacy-page">
      <article className="container privacy-page__content">
        <p className="eyebrow">Transparência no contato</p>
        <h1>Aviso de Privacidade</h1>
        <p>Este aviso explica como são tratados os dados enviados voluntariamente pelo formulário desta página.</p>

        <h2>Dados coletados</h2>
        <p>Podem ser coletados nome, telefone, e-mail, empresa ou projeto, Instagram, mensagem, página de origem e data do envio. E-mail, empresa e Instagram são opcionais.</p>

        <h2>Finalidade</h2>
        <p>Os dados são usados exclusivamente para analisar a solicitação, responder ao contato e dar continuidade a uma possível conversa profissional. Eles não são comercializados.</p>

        <h2>Armazenamento e acesso</h2>
        <p>Os registros são encaminhados por uma aplicação do Google Apps Script e armazenados em uma planilha privada do Google Sheets, com acesso restrito ao responsável pelo atendimento. Uma notificação também é enviada por e-mail.</p>

        <h2>Prazo e direitos</h2>
        <p>Os dados são mantidos pelo período necessário ao atendimento e às obrigações aplicáveis. Você pode solicitar confirmação, correção ou exclusão dos seus dados pelo e-mail <a href="mailto:lucas@ascendedigital.com.br">lucas@ascendedigital.com.br</a>.</p>

        <h2>Responsável</h2>
        <p>Lucas Barreto é o responsável pelo tratamento dos dados recebidos por esta página. Este aviso poderá ser atualizado se o funcionamento do formulário mudar.</p>

        <p>Última atualização: 5 de agosto de 2026.</p>
        <Link className="privacy-page__back" href="/"><ArrowLeft aria-hidden="true" />Voltar à página principal</Link>
      </article>
    </main>
  );
}
