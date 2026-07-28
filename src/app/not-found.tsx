import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

export default function NotFound() {
  return (
    <main className="not-found">
      <p className="eyebrow">Erro 404</p>
      <h1>Página não encontrada.</h1>
      <p>O endereço acessado não existe ou foi alterado.</p>
      <Button href={`${siteConfig.basePath}/`}>Voltar ao início</Button>
    </main>
  );
}
