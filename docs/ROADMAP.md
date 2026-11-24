# Roadmap DeepGT
2026-11-24

| Gate | Objetivo | Estado | Critério de saída |
|---|---|---|---|
| 00 | Congelar R10i e fonte de verdade | PASS | Blob idêntico e documentação |
| 01 | RNG por decisão preflop | Implementado, validação nativa pendente | Parser sem erros; sorteio estável no mesmo índice, renovação em nova decisão, reset por mão, nenhuma regressão |
| 02 | BTN open: grade e charts | Pendente | Grade completa, política de stacks e 169 classes por nó, frequência e ownership verificadas; sizing |
| 03 | 3wSB open vs BB | Pendente | Limp/raise/shove/fold exclusivos |
| 04 | 3-handed defesa e continuations | Pendente | Cobertura por história de ações, sizing e fallback legítimo |
| 05 | HU preflop HUSB/HUBB | Pendente | Distinção HU nativo e 3w de origem, cobertura de stacks |
| 06 | Auditoria integral | Pendente | Diff postflop, regressão de nós legados, cobertura, testes nativos offline |

Gate 01 precede a ativação das charts. Pode catalogar imagens enquanto aguarda validação. Não ativar chart de 25 BB antes de confirmar grade, topologia, prioridade e validação do RNG. Em falha, preservar baseline, corrigir apenas causa confirmada, atualizar status e repetir teste focado.
