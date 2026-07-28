# Deploy estático na Hostinger

## Arquitetura

O domínio oficial é `https://ascendedigital.com.br`. A instalação atual do
WordPress na raiz foi criada pela hospedagem, não faz parte deste projeto e não
é uma dependência da landing page.

Nesta etapa, nenhum arquivo da raiz `public_html/` pode ser removido, alterado
ou substituído. A aplicação de Lucas Barreto é independente e deve existir
somente em:

```text
public_html/lucasbarreto/
```

As URLs públicas são:

- `https://ascendedigital.com.br/lucasbarreto/`
- `https://ascendedigital.com.br/lucasbarreto/curriculo/`

A arquitetura futura será:

```text
public_html/                    novo site oficial da Ascende
public_html/lucasbarreto/       landing page de Lucas Barreto
public_html/lucasbarreto/curriculo/
```

O futuro deploy do site da Ascende deve preservar integralmente
`public_html/lucasbarreto/`.

## Build

O Next.js usa:

- `output: "export"`
- `basePath: "/lucasbarreto"`
- `trailingSlash: true`
- imagens sem o otimizador dinâmico

Execute:

```bash
npm ci
npm run lint
npm run typecheck
npm run build
```

O resultado é criado em `out/`. Essa pasta é um artefato de build e não deve
ser versionada.

O arquivo `.htaccess` exportado configura `index.html`, desabilita listagem de
diretório e direciona erros locais para `/lucasbarreto/404.html`. Ele fica
dentro da subpasta e não modifica as regras do WordPress na raiz.

## Automação no GitHub

O workflow `.github/workflows/deploy-hostinger.yml` executa somente:

- em push na branch `main`;
- manualmente por `workflow_dispatch`.

Branches `sprint/*`, Pull Requests e `develop` não publicam em produção. O
merge de `develop` para `main` depende de Pull Request e aprovação manual.

O workflow valida o projeto, gera `out/` e sincroniza somente seu conteúdo com
`public_html/lucasbarreto/`. A configuração não utiliza limpeza total e não
aponta para a raiz, `wp-content`, `wp-admin` ou `wp-includes`.

## Secrets

Crie no GitHub, preferencialmente no environment protegido `production`:

- `FTP_SERVER`
- `FTP_USERNAME`
- `FTP_PASSWORD`

Não registre esses valores no repositório, em `.env` ou nos logs.

## FTP, FTPS e SFTP

O workflow está configurado para FTPS explícito, que criptografa a conexão.
Confirme no painel da Hostinger o host, o usuário e se a raiz visível por essa
conta inclui `public_html/`.

Antes do primeiro deploy:

1. Crie `public_html/lucasbarreto/` pelo gerenciador de arquivos da hospedagem.
2. Confirme que o usuário FTP consegue acessar essa pasta.
3. Confirme que `public_html/lucasbarreto/` é o caminho correto a partir da
   raiz da conta FTP.
4. Configure os três secrets.
5. Proteja o environment `production` com aprovação, se disponível.

Se a conta fornecer somente SFTP/SSH, não use a action de FTP. Substitua a
etapa de publicação por uma solução SFTP com chave e host verificado, mantendo
o destino estritamente limitado à mesma subpasta. Essa mudança deve passar por
nova revisão antes de qualquer execução.

## Primeiro deploy

1. Revise a prévia estática local.
2. Faça merge da Sprint em `develop`.
3. Abra e aprove um Pull Request de `develop` para `main`.
4. Confirme novamente secrets, protocolo e diretório remoto.
5. Faça o merge em `main`.
6. Acompanhe o workflow até a conclusão.
7. Valide landing, currículo, assets, formulário, metadata e impressão.

Não execute o workflow manual antes dessa autorização.

## Deploys seguintes

Cada merge aprovado em `main` executa as validações e atualiza somente
`public_html/lucasbarreto/`. O arquivo de estado da action permanece dentro
dessa subpasta e limita a sincronização ao destino configurado.

## Rollback

Opção pelo Git:

1. Reverta o commit ou merge responsável.
2. Envie a reversão para `main` por Pull Request.
3. Execute novamente o workflow.

Opção manual emergencial:

1. Mantenha um backup versionado da pasta `lucasbarreto`.
2. Restaure somente `public_html/lucasbarreto/`.
3. Não restaure nem apague a raiz `public_html/`.

## Desativar a automação

Desabilite o workflow na aba Actions do GitHub ou remova seu gatilho em uma PR.
Não apague arquivos na hospedagem para “desativar” o deploy.

## Validação pública

Depois de uma publicação autorizada, verifique:

- status HTTP e certificado HTTPS;
- `/lucasbarreto/` e `/lucasbarreto/curriculo/`;
- navegação, imagens, fontes, JavaScript e CSS;
- formulário com abertura do WhatsApp;
- impressão do currículo em uma página A4;
- canonical, Open Graph, sitemap e manifest;
- ausência de qualquer alteração no conteúdo da raiz.

### Observação sobre robots.txt

O projeto exporta um `robots.txt` dentro da subpasta, mas mecanismos de busca
consultam principalmente o arquivo da raiz do domínio. A futura configuração
do site oficial da Ascende deverá referenciar o sitemap
`https://ascendedigital.com.br/lucasbarreto/sitemap.xml` sem apagar ou mover a
subpasta.
