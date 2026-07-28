# Design system inicial

## Cores

| Token | Valor | Uso |
| --- | --- | --- |
| `background` | `#080a09` | Fundo principal |
| `surface` | `#101311` | Cards e campos |
| `text` | `#f4f7f5` | Texto principal |
| `text-muted` | `#8f9692` | Texto secundário |
| `accent` | `#38d9a9` | CTA e destaque |
| `border` | `#242925` | Bordas discretas |
| `feature-start` | `#4939d9` | Início do gradiente |
| `feature-end` | `#3d7bf2` | Fim do gradiente |

Os valores são aproximações iniciais das capturas e serão calibrados por
comparação visual.

## Tipografia

- Sans: Manrope via `next/font` como alternativa licenciada às fontes
  incorporadas da referência.
- Mono: Space Mono via `next/font`.
- Headings: tracking negativo e line-height compacto.
- Labels: caixa alta, mono e tracking amplo.

## Layout

- Container máximo inicial: `72rem`.
- Gutter mobile: `1.25rem` a `2rem`.
- Seções com respiro vertical amplo.
- Mobile first; grids progressivos em tablet e desktop.

## Componentes

- Botão primário: verde, texto escuro, formato pill.
- Botão secundário: transparente, borda discreta, formato pill.
- Card: superfície escura, borda fina e raio de `1rem`.
- Focus: outline visível em verde com offset.

## Motion

Reveals sutis por opacidade e deslocamento, staggers curtos e hover moderado.
Toda animação deverá respeitar `prefers-reduced-motion`.

## Breakpoints de validação

375, 430, 768, 1024, 1280, 1440 e 1920 px.
