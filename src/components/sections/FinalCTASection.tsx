"use client";

import { ArrowUpRight, CheckCircle2, MessageCircle } from "lucide-react";
import { FormEvent, useState } from "react";

import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

export function FinalCTASection() {
  const [notice, setNotice] = useState("");
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice("Envio pendente: confirme o WhatsApp ou e-mail de destino.");
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
          <label>Faturamento mensal<select name="revenue" defaultValue=""><option value="" disabled>Selecione</option><option>Prefiro informar na conversa</option></select></label>
          <label className="contact-form__wide">Conte um pouco do seu desafio<textarea name="challenge" rows={5} placeholder="O que você quer resolver ou alcançar?" /></label>
          <button className="button button--primary contact-form__wide" type="submit">Solicitar meu diagnóstico <ArrowUpRight aria-hidden="true" /></button>
          {notice ? <p className="contact-form__notice" role="status">{notice}</p> : null}
        </form>
      </div>
    </section>
  );
}
