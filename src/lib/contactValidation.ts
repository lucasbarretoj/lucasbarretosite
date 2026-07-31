import type { ContactFormValues } from "@/types/contact";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[\d\s()+.-]{8,30}$/;
const INSTAGRAM_PATTERN = /^@?[a-zA-Z0-9._]{1,30}$|^https?:\/\/(?:www\.)?instagram\.com\/[a-zA-Z0-9._]+\/?$/i;

export function normalizeContactForm(values: ContactFormValues): ContactFormValues {
  return Object.fromEntries(
    Object.entries(values).map(([key, value]) => [key, value.trim()]),
  ) as ContactFormValues;
}

export function validateContactForm(values: ContactFormValues): string | null {
  if (values.website) return "Não foi possível validar o envio.";
  if (values.name.length < 2 || values.name.length > 100) return "Informe um nome válido.";
  if (!PHONE_PATTERN.test(values.phone)) return "Informe um WhatsApp ou telefone válido.";
  if (values.email && (values.email.length > 160 || !EMAIL_PATTERN.test(values.email))) return "Informe um e-mail válido.";
  if (values.company.length > 120) return "O nome da empresa deve ter até 120 caracteres.";
  if (values.instagram && (values.instagram.length > 200 || !INSTAGRAM_PATTERN.test(values.instagram))) return "Informe o @ ou a URL completa do Instagram.";
  if (values.message.length < 10 || values.message.length > 2000) return "Conte seu objetivo em uma mensagem de 10 a 2.000 caracteres.";
  return null;
}
