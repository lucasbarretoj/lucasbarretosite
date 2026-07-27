import { MessageCircle } from "lucide-react";

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
          <Button href="#contato"><MessageCircle aria-hidden="true" />Vamos conversar</Button>
        </div>
        <nav aria-label="Navegação do rodapé"><span>Navegação</span>{navigation.slice(0, 4).map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}</nav>
        <div className="site-footer__social"><span>Redes</span><p>@lucas.barreto</p><p>YouTube</p></div>
      </div>
      <div className="container site-footer__bottom"><span>© 2026 Lucas Barreto. Todos os direitos reservados.</span><span>Estratégia · Mídia Paga · Dados · IA</span></div>
    </footer>
  );
}
