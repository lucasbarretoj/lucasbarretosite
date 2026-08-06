"use client";

import { ArrowUpRight, CheckCircle2, MessageCircle } from "lucide-react";
import { FormEvent, useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { normalizeContactForm, validateContactForm } from "@/lib/contactValidation";
import { ContactServiceError, submitContact } from "@/services/contactService";
import type { ContactFormValues } from "@/types/contact";

type SubmissionState = "idle" | "submitting" | "success" | "error";

export function FinalCTASection() {
  const [submissionState, setSubmissionState] = useState<SubmissionState>("idle");
  const [notice, setNotice] = useState("");
  const noticeRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (submissionState === "success" || submissionState === "error") noticeRef.current?.focus();
  }, [submissionState]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submissionState === "submitting") return;

    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const values = normalizeContactForm({
      name: String(form.get("name") ?? ""),
      phone: String(form.get("phone") ?? ""),
      email: String(form.get("email") ?? ""),
      company: String(form.get("company") ?? ""),
      instagram: String(form.get("instagram") ?? ""),
      message: String(form.get("message") ?? ""),
      website: String(form.get("website") ?? ""),
    } satisfies ContactFormValues);

    const validationError = validateContactForm(values);
    if (validationError) {
      setNotice(validationError);
      setSubmissionState("error");
      return;
    }

    setNotice("");
    setSubmissionState("submitting");

    try {
      await submitContact({
        ...values,
        source: window.location.href,
        submissionId: crypto.randomUUID(),
      });
      formElement.reset();
      setNotice("Recebi seus dados. Em breve entrarei em contato com você.");
      setSubmissionState("success");
    } catch (error) {
      const message = error instanceof ContactServiceError
        ? error.message
        : "Não foi possível enviar agora. Tente novamente.";
      setNotice(message);
      setSubmissionState("error");
    }
  }

  const isSubmitting = submissionState === "submitting";

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
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <label>Seu nome *<input name="name" autoComplete="name" required minLength={2} maxLength={100} placeholder="Como posso te chamar?" /></label>
          <label>WhatsApp ou telefone *<input name="phone" autoComplete="tel" inputMode="tel" required minLength={8} maxLength={30} placeholder="(75) 99999-9999" /></label>
          <label>E-mail<input name="email" type="email" autoComplete="email" maxLength={160} placeholder="voce@empresa.com.br" /></label>
          <label>Empresa / projeto<input name="company" autoComplete="organization" maxLength={120} placeholder="Opcional" /></label>
          <label>Instagram<input name="instagram" autoComplete="url" maxLength={200} placeholder="@seuinstagram" aria-describedby="instagram-help" /><small id="instagram-help">Aceita @ ou URL completa do perfil.</small></label>
          <label className="contact-form__wide">Conte seu objetivo *<textarea name="message" rows={5} required minLength={10} maxLength={2000} placeholder="O que você quer resolver ou alcançar?" /></label>
          <div className="contact-form__honeypot" aria-hidden="true">
            <label>Não preencha este campo<input name="website" tabIndex={-1} autoComplete="off" /></label>
          </div>
          <button className="button button--primary contact-form__wide" type="submit" disabled={isSubmitting} aria-disabled={isSubmitting}>
            {isSubmitting ? "Enviando..." : "Solicitar meu diagnóstico"} {!isSubmitting ? <ArrowUpRight aria-hidden="true" /> : null}
          </button>
          <p className="contact-form__privacy contact-form__wide">
            Ao enviar, você autoriza o uso dos dados informados exclusivamente para responder ao seu contato. Consulte o <a href={siteConfig.privacyHref}>Aviso de Privacidade</a>.
          </p>
          {notice ? (
            <p ref={noticeRef} className="contact-form__notice" data-state={submissionState} role={submissionState === "error" ? "alert" : "status"} tabIndex={-1}>{notice}</p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
