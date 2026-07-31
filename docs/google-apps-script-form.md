# Formulário com Google Apps Script

## Arquitetura

```text
Landing estática na Hostinger
  -> POST para Google Apps Script Web App
  -> linha adicionada no Google Sheets
  -> notificação enviada com MailApp
```

O site continua usando `output: "export"`. Não existe API Route, Server Action,
runtime Node.js na Hostinger, Resend ou plataforma externa de automação.

## 1. Preparar a planilha

Crie ou escolha uma planilha existente e renomeie a aba de destino para
`Leads`. Na primeira linha, use estas colunas, nesta ordem:

1. Data e hora
2. Nome
3. WhatsApp ou telefone
4. Instagram
5. E-mail
6. Empresa / projeto
7. Objetivo ou mensagem
8. Página de origem
9. Status

Formate a coluna A como data e hora e as demais como texto simples. Não
publique a planilha na Web e não permita acesso público a ela.

O ID é o trecho da URL entre `/d/` e `/edit`:

```text
https://docs.google.com/spreadsheets/d/ID_DA_PLANILHA/edit
```

## 2. Criar o projeto do Apps Script

Na planilha, abra `Extensões -> Apps Script`. Renomeie o projeto e substitua o
conteúdo de `Código.gs` pelo conteúdo completo de:

```text
scripts/google-apps-script/contact-form.gs
```

O arquivo do repositório é a fonte oficial. Não coloque o ID da planilha ou
outro valor de configuração diretamente no código.

## 3. Configurar Script Properties

No Apps Script, abra `Configurações do projeto -> Propriedades do script` e
adicione:

| Propriedade | Valor |
| --- | --- |
| `SPREADSHEET_ID` | ID da planilha existente |
| `SHEET_NAME` | `Leads` |
| `NOTIFICATION_EMAIL` | `lucas@ascendedigital.com.br` |

Salve as propriedades. Elas ficam associadas ao projeto do Apps Script e não
são enviadas ao navegador.

## 4. Publicar como Web App

1. Clique em `Implantar -> Nova implantação`.
2. Escolha `App da Web`.
3. Em `Executar como`, selecione `Eu`.
4. Em `Quem pode acessar`, selecione `Qualquer pessoa`.
5. Autorize o acesso à planilha e o envio de e-mails.
6. Conclua a implantação e copie a URL terminada em `/exec`.

A URL `/dev` executa apenas para editores e não deve ser usada em produção.
Se a opção `Qualquer pessoa` não estiver disponível, verifique as políticas da
conta Google Workspace.

## 5. Configurar a landing

No ambiente usado para gerar o build, configure:

```env
NEXT_PUBLIC_CONTACT_ENDPOINT=https://script.google.com/macros/s/SEU_DEPLOYMENT_ID/exec
```

Essa URL é pública por natureza e não é uma credencial. Não adicione senhas,
tokens ou dados da conta Google ao projeto.

Depois, execute:

```bash
npm ci
npm run lint
npm run typecheck
npm run build
```

Como `NEXT_PUBLIC_*` é incorporada no JavaScript durante o build, uma mudança
na URL exige novo build e deploy da landing.

No GitHub, crie uma variável do environment `production` ou do repositório em
`Settings -> Secrets and variables -> Actions -> Variables`:

```text
NEXT_PUBLIC_CONTACT_ENDPOINT = URL /exec do Web App
```

O workflow valida a presença dessa variável e a fornece ao `npm run build`.
Não a cadastre como senha ou token: a URL será pública no bundle do site.

## 6. Testar de ponta a ponta

1. Abra a landing publicada.
2. Preencha todos os campos obrigatórios com dados de teste identificáveis.
3. Envie uma vez e aguarde a mensagem de sucesso.
4. Confirme uma nova linha na aba `Leads`.
5. Confirme a ordem das colunas e o status `Novo`.
6. Confirme o e-mail em `lucas@ascendedigital.com.br` e verifique o spam.
7. Teste uma entrada inválida e confirme que ela não cria linha.
8. Teste uma falha de rede e confirme que os campos permanecem preenchidos.

## Compatibilidade de requisição e redirects

O navegador envia JSON como `text/plain;charset=utf-8`. Esse tipo de conteúdo
mantém a requisição simples e evita um preflight CORS que o Web App não permite
configurar como um servidor Express. O cliente usa `redirect: "follow"`, pois o
`ContentService` entrega a resposta por um redirect para
`script.googleusercontent.com`.

Não use `mode: "no-cors"`: uma resposta opaca impediria confirmar o sucesso
real do envio.

## Segurança e limitações

O handler implementa:

- validação no cliente e no servidor;
- limites de tamanho;
- normalização e remoção de caracteres de controle;
- honeypot;
- bloqueio básico de repetição por 60 segundos com `CacheService`;
- `LockService` para gravações concorrentes;
- proteção contra formula injection para valores iniciados por `=`, `+`, `-`
  ou `@`;
- mensagens públicas sem stack trace ou dados internos.

O Apps Script não oferece rate limiting robusto por IP. O cache reduz envios
repetidos, mas não substitui captcha, WAF ou um backend dedicado. Também há
quotas diárias do Google para execução e envio de e-mails.

Se o e-mail falhar depois que a linha for salva, o status muda para
`E-mail pendente`; o lead permanece registrado na planilha.

## Troubleshooting

### “Canal de contato ainda não está configurado”

`NEXT_PUBLIC_CONTACT_ENDPOINT` não estava definida no momento do build. Defina
a URL `/exec`, gere novo build e publique novamente.

### Resposta inválida ou erro de rede

- confirme que a URL termina em `/exec`;
- confirme acesso como `Qualquer pessoa`;
- confirme que a implantação é do tipo Web App;
- publique uma nova versão após mudanças no script;
- não use a URL do editor ou `/dev`.

### Nenhuma linha aparece

- confirme `SPREADSHEET_ID`;
- confirme que a aba se chama exatamente `Leads`;
- consulte `Execuções` no Apps Script;
- confira se o projeto foi autorizado pelo proprietário.

### Linha aparece, mas o e-mail não chega

- confira o status da linha;
- verifique spam e as execuções do script;
- confirme `NOTIFICATION_EMAIL`;
- consulte a quota diária do `MailApp`.

## Publicar alterações futuras do script

Salvar o código não atualiza automaticamente a URL de produção. Abra
`Implantar -> Gerenciar implantações`, edite a implantação, selecione `Nova
versão` e publique. A URL `/exec` normalmente permanece a mesma.
