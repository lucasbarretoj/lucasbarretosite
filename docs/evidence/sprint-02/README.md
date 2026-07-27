# Evidências — Sprint 02

As capturas automatizadas por âncora não foram versionadas porque o Edge
headless posicionou incorretamente o Header fixo, produzindo imagens que não
representam a navegação real.

## Validação manual

Execute:

```bash
npm run dev
```

Confira:

- `http://localhost:3000/#sobre`
- `http://localhost:3000/#resultados`

## Viewports

- Mobile: 375 × 812 e 430 × 932.
- Tablet: 768 × 1024.
- Notebook: 1280 × 800.
- Desktop: 1440 × 900 e 1920 × 1080.

## Checklist

- About empilhado no mobile e em duas colunas no desktop.
- Placeholder de fotografia claramente identificado.
- Texto integral legível sem overflow.
- Princípios quebrando linha sem cortes.
- Cards de autoridade em uma coluna no mobile e três no desktop.
- Cases em cards empilhados no mobile.
- Três métricas por case sem colisões.
- Segundo case com borda verde discreta.
- Header permanece legível durante o scroll.
- Reduced motion remove transições prolongadas.
