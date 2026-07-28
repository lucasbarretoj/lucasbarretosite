"use client";

import { ArrowUpRight, CheckCircle2, MessageCircle } from "lucide-react";
import { FormEvent, useState } from "react";

import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

type ContactFormData = {
  name: string;
  contact: string;
  company: string;
  instagram: string;
  challenge: string;
};

export function FinalCTASection() {
  const [notice, setNotice] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const data: ContactFormData = {
      name: String(form.get("name") ?? "").trim(),
      contact: String(form.get("contact") ?? "").trim(),
      company: String(form.get("company") ?? "").trim(),
      instagram: String(form.get("instagram") ?? "").trim(),
      challenge: String(form.get("challenge") ?? "").trim(),
    };
    const message = [
      "Olá Lucas! Vim pela sua página e gostaria de solicitar um diagnóstico estratégico.",
      `Nome: ${data.name}`,
      `Contato: ${data.contact}`,
      data.company ? `Empresa / projeto: ${data.company}` : "",
      data.instagram ? `Instagram: ${data.instagram}` : "",
      data.challenge ? `Desafio: ${data.challenge}` : "",
    ].filter(Boolean).join("\n");

    window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    setNotice("Dados preparados. Continue o envio na conversa do WhatsApp.");
  }

  return (
    <section className="final-cta section" id="contato" aria-labelledby="contact-title">
      <div className="container final-cta__grid">
        <div className="final-cta__copy">
          <p className="eyebrow">Diagnóstico estratégico gratuito</p>
          <h2 id="contact-title">O próximo passo é uma conversa.</h2>
          <p>Preencha ao lado e receba uma análise sem compromisso da sua operação. Você sai com clareza sobre onde estão as maiores oportunidades de crescimento e decide depois se quer avançar.</p>
          <ul>
            {["Sem custo e sem compromisso", "Resposta pessoal do Lucas", "Foco em retorno real, não promessas"].map((item) => (
              <li key={item}><CheckCircle2 aria-hidden="true" />{item}</li>
            ))}
          </ul>
          <Button href={siteConfig.contactHref} target="_blank" rel="noopener noreferrer" variant="secondary"><MessageCircle aria-hidden="true" />Prefere ir direto ao WhatsApp?</Button>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>Seu nome *<input name="name" autoComplete="name" required placeholder="Como posso te chamar?" /></label>
          <label>WhatsApp ou e-mail *<input name="contact" autoComplete="email" inputMode="email" required placeholder="Seu melhor contato" /></label>
          <label>Empresa / projeto<input name="company" autoComplete="organization" placeholder="Opcional" /></label>
          <label>Instagram<input name="instagram" autoComplete="url" placeholder="@seuinstagram" aria-describedby="instagram-help" /><small id="instagram-help">Aceita @ ou URL completa do perfil.</small></label>
          <label className="contact-form__wide">Conte um pouco do seu desafio<textarea name="challenge" rows={5} placeholder="O que você quer resolver ou alcançar?" /></label>
          <button className="button button--primary contact-form__wide" type="submit">Solicitar meu diagnóstico <ArrowUpRight aria-hidden="true" /></button>
          {notice ? <p className="contact-form__notice" role="status">{notice}</p> : null}
        </form>
      </div>
    </section>
  );
}
