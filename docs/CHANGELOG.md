# Changelog

## 2026-11-24 — Gate 00/01 (candidato offline)
- Baseline R10i copiado integralmente, commit ce3b096b8bceb0818c227f3fa75db8df1642436b.
- Candidato src/DeepGT.txt criado, commit bc47eec118cbf0682a80b0ea433818796ff913a5.
- Randomização por índice de decisão preflop; armazenamento único, reset, readiness e proteção contra contador regredido.
- R10i original, ranges e postflop estratégico intactos. Nenhuma chart GTO ativada; validação nativa pendente.
- Fonte de verdade e catálogo inicial instituídos.

## 2026-11-24 — lote 25 BB (rascunho)
- Reconstruídos nove históricos preflop, CSV 169 classes por nó, código isolado de 26 predicados e auditoria condicional à chegada ao nó.
- Nenhuma integração em src. Cinza não equivale a fold; revisão obrigatória para faixa estreita/ausente. Nó 5 bloqueado; nó 9 sem pai de squeeze. Gate 01 e buckets permanecem pendentes.
