import { MessageCircle } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { navigation } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div>
          <strong>Lucas Barreto<span>.</span></strong>
          <p>{siteConfig.description}</p>
          <Button href={siteConfig.contactHref} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden="true" />Vamos conversar</Button>
        </div>
        <nav aria-label="Navegação do rodapé"><span>Navegação</span>{navigation.slice(0, 4).map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}</nav>
        <div className="site-footer__social">
          <span>Redes</span>
          <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer">YouTube</a>
          <p className="site-footer__pending">Newsletter <small>Em breve</small></p>
          <Link href={siteConfig.resumeHref}>Currículo</Link>
        </div>
      </div>
      <div className="container site-footer__bottom"><span>© 2026 Lucas Barreto. Todos os direitos reservados.</span><span>Estratégia · Mídia Paga · Dados · IA</span></div>
    </footer>
  );
}
