# Auditoria da referência

## Materiais analisados

- `references/emergent-reference.html`: captura SingleFile com 4,54 MB, usada
  somente para inspeção.
- `references/referencia-desktop.png`: captura de 1920 × 8192.
- `references/referencia-mobile.png`: captura de 400 × 12907.

Não há `PROJECT_BRIEF.md`, fotografias separadas ou arquivo de links.

## Estrutura observada

1. Header com marca, navegação e CTA.
2. Hero com posicionamento, dois CTAs, indicadores e retrato.
3. Faixa de especialidades.
4. Apresentação pessoal.
5. Metodologia em quatro capítulos.
6. Serviços em quatro cards.
7. Diferenciais em faixa azul.
8. Resultados em dois cases.
9. Processo em quatro passos.
10. FAQ.
11. CTA com formulário.
12. Footer.

## Direção visual

- Base quase preta e superfícies discretamente mais claras.
- Verde menta para CTAs, indicadores e destaques.
- Faixa de diferenciais em gradiente índigo/azul.
- Bordas finas, raios médios e brilho verde difuso.
- Headings grandes, compactos e com tracking negativo.
- Labels e números em tipografia monoespaçada.
- Container central próximo de 1120–1152 px.

## Tipografia

O HTML referencia Cabinet Grotesk, Satoshi e Space Mono, incorporadas em
Base64. Esses arquivos não serão copiados ou redistribuídos. A fundação usa
Manrope e Space Mono via `next/font`; a aproximação será reavaliada na Sprint
visual correspondente.

## Imagens e assets

O retrato de Lucas aparece nas capturas e embutido no HTML, mas não foi
fornecido como arquivo separado. Nenhum asset Base64 será levado à aplicação.

## Comportamento observado

- Header compacto e navegação por âncoras.
- Composição em duas colunas no desktop e empilhada no mobile.
- Cards passam de grades de duas/quatro colunas para uma coluna.
- FAQ em accordion.
- Elementos indicam reveals, counters e efeitos de hover; durations e easing
  precisarão ser confirmados durante as Sprints visuais.

## Limitações

- A captura não permite validar todos os estados interativos.
- O HTML contém metadata genérica da Emergent e dependências incorporadas.
- Fotografias, URLs e dados de contato definitivos não estão disponíveis como
  materiais independentes.
- Em 27/07/2026, o `npm audit` reporta advisories transitórios de `postcss` e
  `sharp` dentro do Next.js estável atual. O próprio npm não oferece correção
  estável compatível e sugere um downgrade incorreto; não foi aplicado
  `audit fix --force`.
