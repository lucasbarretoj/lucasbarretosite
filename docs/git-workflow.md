# Fluxo de Git

## Branches permanentes

- `main`: código aprovado para produção.
- `develop`: integração das Sprints aprovadas.

## Branches de Sprint

Cada Sprint nasce da `develop` atualizada e usa o padrão
`sprint/NN-descricao`. A branch é enviada ao GitHub e abre Pull Request para
`develop`.

## Commits

Commits devem ser pequenos, coerentes e escritos no padrão Conventional
Commits, por exemplo: `docs: document reference audit`.

## Pull Requests

Todo PR inclui resumo, escopo, validações, evidências quando aplicável,
pendências e checklist. Revisão e aprovação antecedem o merge.

## Regras

- Não fazer commits diretos em `main`.
- Não fazer merge sem aprovação.
- Não usar force push.
- Não misturar Sprints.
- Releases partem de `develop` para `main`.
- Tags semânticas são criadas somente depois da aprovação da release.
