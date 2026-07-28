import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export function FloatingContact() {
  return (
    <a className="floating-contact" href={siteConfig.contactHref} target="_blank" rel="noopener noreferrer" aria-label="Conversar com Lucas Barreto pelo WhatsApp">
      <MessageCircle aria-hidden="true" />
    </a>
  );
}
