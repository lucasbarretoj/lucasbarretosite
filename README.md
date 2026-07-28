# Lucas Barreto Site

Landing page pessoal de Lucas Barreto, construída com Next.js, React,
TypeScript e Tailwind CSS. A aplicação é exportada como site estático e
publicada de forma independente sob `/lucasbarreto`.

## Desenvolvimento

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000/lucasbarreto/`.

## Validações

```bash
npm run lint
npm run typecheck
npm run build
```

O trabalho é organizado por Sprints. Consulte `docs/implementation-plan.md` e
`docs/git-workflow.md`.

## Produção

URL oficial:

```text
https://ascendedigital.com.br/lucasbarreto/
```

O comando `npm run build` gera a exportação estática em `out/`. O deploy
automatizado é exclusivo da branch `main` e do diretório remoto
`public_html/lucasbarreto/`.

O projeto não integra nem depende do WordPress presente na raiz da hospedagem.
Nenhum deploy deste repositório pode apontar para `public_html/`.

Consulte:

- `docs/hostinger-deployment.md`
- `docs/production-checklist.md`
