# Roadmap DeepGT
2026-11-24

| Gate | Objetivo | Estado | Critério de saída |
|---|---|---|---|
| 00 | Congelar R10i e fonte de verdade | PASS | Blob idêntico e documentação |
| 01 | RNG por decisão preflop | Implementado, validação nativa pendente | Parser sem erros; sorteio estável no mesmo índice, renovação em nova decisão, reset por mão, nenhuma regressão |
| 02 | BTN open: grade e charts | Pendente | Grade definida; política de seleção por cenário e 169 classes por nó, frequência e ownership verificadas; sizing |
| 03 | 3wSB open vs BB | Pendente | Limp/raise/shove/fold exclusivos |
| 04 | 3-handed defesa e continuations | Pendente | Cobertura por história de ações, sizing e fallback legítimo |
| 05 | HU preflop HUSB/HUBB | Pendente | Distinção HU nativo e 3w de origem, cobertura de stacks |
| 06 | Auditoria integral | Pendente | Diff postflop, regressão de nós legados, cobertura, testes nativos offline |

Gate 01 precede a ativação das charts. Pode catalogar imagens enquanto aguarda validação. Não ativar chart de 25 BB antes de confirmar topologia, prioridade e validação do RNG. Em falha, preservar baseline, corrigir apenas causa confirmada, atualizar status e repetir teste focado.

Lote 25 BB recebido: nove nós foram catalogados antecipadamente, inclusive defesa (Gate 04), sem modificar a ordem de ativação. Gate 02 depende do Gate 01 nativo, confirmação da medição de stack por cenário e revisão do nó raiz. Gate 04 exige também resolução de discrepância nó 5, reach não legível nó 8 e pai ausente nó 9. Ver AUDIT_25BB_DRAFT.md.

2026-11-24: grade confirmada pelo usuário e helpers isolados adicionados. Registro extensível de dez famílias já conhecidas × onze slots (nove rascunhos de 25 BB e um pai ausente nesse stack; outros slots MISSING, não pressupõem que a história/sizing seja legal). Arquivamento binário dos nove JPGs está pendente de upload, manifesto publicado. Ver PREFLOP_POLICY.md. Receber novos prints, atualizar código sem ativar roteamento até gates.

Acompanhamento transversal obrigatório: atualizar painel visual e registry no mesmo ciclo de cada lote; consultar docs/PREFLOP_DASHBOARD.md para identificar lacunas, sem alterar ordem ou critérios dos gates.

Segundo lote 25 BB: dez charts recebidas e registradas, extração pendente; confirmar prefixos truncados e obter chart pai BB vs BTN + SB. Não avançar gates com base apenas em recebimento. Aplicar protocolo de histórico parcial.

Checkpoint: segundo lote 25 BB codificado em rascunho, 19/20 cenários identificados. Painel simplificado; prosseguir com prints e codificação no mesmo ciclo. A chart pai BB vs BTN open + SB call segue ausente; ressalvas internas documentadas, gates de integração/validação não alterados.

Requisito transversal: aplicar revisão estratégica documentada aos nós de estudo antes da validação final, sem alterar grade, ordem de captura nem gates; preservar fonte e registrar ajustes específicos. Ver STRATEGIC_REVIEW.md. A lista contínua no painel deve orientar a próxima captura.

Checkpoint 25 BB: prints 1–39 codificados em rascunho; cinco lacunas identificadas no painel. Fechar esses ramos antes de considerar captura 25 BB concluída. Gate 01 nativo/validação de roteamento e revisão estratégica permanecem. EX-001 implementada no rascunho; não alterar grade nem postflop.
