# DeepGT

Fork estratégico incremental do DeepCrusher R10i para estudo e validação offline de charts preflop GTO em Spin & Go. O postflop, os roteadores e a infraestrutura R10i são preservados salvo mudança localizada, justificada e autorizada.

## Acompanhamento visual

**[Abrir painel preflop: cobertura, sequências e árvores por stack](docs/PREFLOP_DASHBOARD.md)**

## Fonte de verdade
- [Diretrizes](docs/DIRETRIZES.md) — regras vinculantes do projeto.
- [Roadmap](docs/ROADMAP.md) — gates, dependências e critérios de parada.
- [Status](docs/STATUS.md) — estado atualizado, evidência e próximo passo.
- [Catálogo de charts](docs/CHARTS_CATALOG.md) — origem, frequências e cobertura.
- [Histórico](docs/CHANGELOG.md) — alterações versionadas.
- [Gate 01](docs/GATE_01_RNG.md) — desenho, riscos e validação offline.
- [Baseline congelado](baseline/DeepCrusher_R10i.txt) e [candidato](src/DeepGT.txt).

- [Política de buckets e ingestão](docs/PREFLOP_POLICY.md) — decisão vinculante de 11 stacks e fluxo obrigatório.
- [Registro preflop](charts/PREFLOP_REGISTRY.json) — cobertura por nó e stack.
- [Manifesto dos prints 25 BB](sources/25bb/manifest.csv) — hashes dos originais; upload binário pendente.

Antes de qualquer mudança, consultar essas páginas e atualizar as afetadas no mesmo ciclo. Nenhuma promoção operacional foi feita. Utilizar apenas em ambiente offline/autorizado, respeitando as regras da plataforma.
