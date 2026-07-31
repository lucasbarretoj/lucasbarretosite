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
- `docs/google-apps-script-form.md`

## Formulário de contato

O formulário envia os leads para um Google Apps Script Web App, que grava os
dados no Google Sheets e envia a notificação por e-mail. Configure no ambiente
de build:

```env
NEXT_PUBLIC_CONTACT_ENDPOINT=https://script.google.com/macros/s/SEU_DEPLOYMENT_ID/exec
```

No deploy automatizado, configure o mesmo nome como GitHub Actions Variable no
environment `production` antes do próximo merge em `main`.

Consulte `docs/google-apps-script-form.md` para preparar a planilha, configurar
as Script Properties, publicar o Web App e testar o fluxo completo.
