import { MessageCircle } from "lucide-react";

export function FloatingContact() {
  return (
    <a className="floating-contact" href="#contato" aria-label="Ir para a seção de contato">
      <MessageCircle aria-hidden="true" />
    </a>
  );
}
