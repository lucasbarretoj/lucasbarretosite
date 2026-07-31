import type { ContactPayload, ContactResponse } from "@/types/contact";

const REQUEST_TIMEOUT_MS = 12_000;

export class ContactServiceError extends Error {}

export async function submitContact(payload: ContactPayload): Promise<ContactResponse> {
  const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT?.trim();
  if (!endpoint) throw new ContactServiceError("O canal de contato ainda não está configurado.");

  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
      redirect: "follow",
      signal: controller.signal,
    });

    if (!response.ok) throw new ContactServiceError("O serviço de contato não respondeu corretamente.");

    const result = JSON.parse(await response.text()) as Partial<ContactResponse>;
    if (typeof result.success !== "boolean") throw new ContactServiceError("A resposta do serviço de contato é inválida.");
    if (!result.success) throw new ContactServiceError(result.message || "Não foi possível registrar seu contato.");

    return { success: true, message: result.message };
  } catch (error) {
    if (error instanceof ContactServiceError) throw error;
    if (error instanceof DOMException && error.name === "AbortError") {
      throw new ContactServiceError("O envio demorou mais que o esperado. Tente novamente.");
    }
    throw new ContactServiceError("Não foi possível enviar agora. Revise sua conexão e tente novamente.");
  } finally {
    window.clearTimeout(timeoutId);
  }
}
