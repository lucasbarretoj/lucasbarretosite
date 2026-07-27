import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="not-found">
      <p className="eyebrow">Erro 404</p>
      <h1>Página não encontrada.</h1>
      <p>O endereço acessado não existe ou foi alterado.</p>
      <Button href="/">Voltar ao início</Button>
    </main>
  );
}
