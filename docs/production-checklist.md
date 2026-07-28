# Checklist de produção

## Antes do merge em main

- [ ] PR da Sprint aprovada e integrada em `develop`
- [ ] PR de `develop` para `main` revisada e aprovada
- [ ] `npm run lint` aprovado
- [ ] `npm run typecheck` aprovado
- [ ] `npm run build` aprovado e pasta `out/` inspecionada
- [ ] Teste estático local sob `/lucasbarreto/`
- [ ] Landing e currículo revisados em desktop e mobile
- [ ] Impressão do currículo confirmada em uma página A4
- [ ] Formulário confirmado abrindo o WhatsApp com os dados
- [ ] Canonical, Open Graph, sitemap, robots e manifest revisados
- [ ] Nenhuma referência a localhost, Vercel, Emergent ou URL temporária
- [ ] Nenhuma credencial presente no código ou histórico

## Hostinger e GitHub

- [ ] Backup atual da hospedagem disponível
- [ ] `public_html/lucasbarreto/` criada
- [ ] WordPress e raiz `public_html/` intactos
- [ ] Raiz do usuário FTP confirmada
- [ ] FTPS confirmado ou workflow adaptado e revisado para SFTP
- [ ] `FTP_SERVER`, `FTP_USERNAME` e `FTP_PASSWORD` configurados
- [ ] Environment `production` protegido, se disponível
- [ ] Diretório remoto confirmado como `public_html/lucasbarreto/`
- [ ] Autorização explícita recebida para o primeiro deploy

## Depois do deploy

- [ ] Workflow concluído sem erros
- [ ] `https://ascendedigital.com.br/lucasbarreto/` responde corretamente
- [ ] `/lucasbarreto/curriculo/` responde corretamente
- [ ] Assets, fontes, ícones, favicon, CSS e JavaScript carregam
- [ ] Links internos e externos funcionam
- [ ] Formulário abre a conversa correta no WhatsApp
- [ ] Currículo imprime em uma página A4
- [ ] Metadata e sitemap usam a URL oficial
- [ ] Raiz do domínio e instalação atual continuam intactas
- [ ] Versão implantada registrada para eventual rollback
