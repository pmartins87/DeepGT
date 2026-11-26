# DeepGT

Projeto de estudo e validação offline de estratégia híbrida em Spin & Go. Nome oficial: DeepGT. Base deste release: DeepCrusher R10m, integral no postflop e no preflop até 17 BB inclusive; charts de 20/23/25 BB acima de 17 BB, com ajuste experimental restrito ao call contra all-in. R10i e o candidato Pure anterior são históricos preservados. Nenhuma estratégia híbrida está homologada.

## Acompanhamento visual

**[Abrir painel preflop: cobertura, sequências e árvores por stack](docs/PREFLOP_DASHBOARD.md)**

## Fonte de verdade
- [Revisão estratégica](docs/STRATEGIC_REVIEW.md) — critérios de desvios deliberados e registro de exceções.
- [Diretrizes](docs/DIRETRIZES.md) — regras vinculantes do projeto.
- [Roadmap](docs/ROADMAP.md) — gates, dependências e critérios de parada.
- [Status](docs/STATUS.md) — estado atualizado, evidência e próximo passo.
- [Catálogo de charts](docs/CHARTS_CATALOG.md) — origem, frequências e cobertura.
- [Histórico](docs/CHANGELOG.md) — alterações versionadas.
- [Gate 01](docs/GATE_01_RNG.md) — desenho, riscos e validação offline.
- [Stage 1 R2 offline atual](src/DeepGT_STAGE1_R2_OFFLINE.txt), [relatório R2](docs/DEEPGT_STAGE1_R2.md), [Stage 1 R1](src/DeepGT_STAGE1_R1_OFFLINE.txt), [Stage 1 congelado](src/DeepGT_R10m_STAGE1_OFFLINE.txt), [relatório de arquitetura](docs/R10M_HIGH_STACK_STAGE1.md) e [auditoria G1](docs/HIGH_STACK_GATE_G1_AUDIT.md).
- [Baseline histórico R10i](baseline/DeepCrusher_R10i.txt) e [candidato Pure histórico](src/DeepGT.txt).

- [Política de buckets e ingestão](docs/PREFLOP_POLICY.md) — escopo atual de 3 charts de stack e fluxo obrigatório; histórico de grade preservado.
- [Registro preflop](charts/PREFLOP_REGISTRY.json) — cobertura por nó e stack.
- [Manifesto dos prints 25 BB](sources/25bb/manifest.csv) — hashes dos originais; upload binário pendente.

Antes de qualquer mudança, consultar essas páginas e atualizar as afetadas no mesmo ciclo. Nenhuma promoção operacional foi feita. Utilizar apenas em ambiente offline/autorizado, respeitando as regras da plataforma.
