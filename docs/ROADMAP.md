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

Checkpoint: 42/44 nós conhecidos a 25 BB, dois prints iniciais faltantes. Completar captura, seguir grade definida. Nova decisão: referência pura primeiro; variante ajustada posterior e separada, com critérios de comparação offline definidos antes de implementação. EX-001 revertida. Gates anteriores permanecem.

Checkpoint 25 BB: 44/44 nós conhecidos 3-handed de origem e 10/12 HU nativo codificados em rascunho. Fechar dois nós HU restantes antes de 23 BB. Preservar separação de topologia, tamanhos e referência pura; gates nativos continuam pendentes.

Checkpoint de captura 25 BB: 56/56 nós conhecidos (44 3-handed, 12 HU nativo) codificados em rascunho. Prosseguir com 23 BB a partir do print 57; não assumir que o número de nós ou os sizings de 25 BB se repetem nos demais stacks. Preservar referência pura, gates nativos e separação de origem. Fechamento de captura não autoriza ativação.

Proposta de estudo da variante otimizada documentada em OPTIMIZED_PROPOSAL.md, sem iniciar implementação nem alterar a sequência de captura ou gates. Próximo print permanece 57 (23 BB).

Piloto 01 offline autorizado e realizado; não promove variante. Ver OPTIMIZED_PILOT_01.md; revisão focada de reach e replicação print 54 recomendadas antes de expansão experimental. Roadmap principal preservado, próximo print 57.

Piloto 02 offline concluído sem promoção (OPTIMIZED_PILOT_02.md). Não ampliar a variante nesta fase; retomar quando houver dados mais precisos ou nova evidência. Prosseguir captura Pure 23 BB, print 57; gates anteriores permanecem.

Estudo All-in 25 BB autorizado e executado: OPTIMIZED_25BB_BATCH_STUDY.md. Nenhuma política promovida. Manter Pure, suspender expansão experimental até nova evidência de precisão/ranges/EV. Próximo print 57, 23 BB; gates e roadmap principal preservados.

Solicitação de fechar catálogo experimental 25 BB antes de 23 BB atendida: 56 charts selecionadas, apenas print 31 modificado condicionalmente; 42 alternativa não selecionada. Ver OPTIMIZED_25BB_SELECTION.md. Gates de promoção não alterados; próximo print 57. Nenhuma nova rodada de testes sem evidência adicional.

Experimento monotônico concluído, sem promoção (OPTIMIZED_MONOTONIC_STUDY.md). Próxima etapa de pesquisa recomendada: validação independente focada no print 42 e dados de reach dos bloqueados. Sem alteração do roadmap de captura ou código.

Esclarecimento do usuário: a entrega experimental revisada deve selecionar o método por chart, sem impor MonoRobust ou qualquer política universal. O gate comum de avaliação é mantido. Priorizar auditoria dos nós com inversões e comparação local de candidatos, distinguindo seleção exploratória e homologação independente. Catálogo histórico v0.1 e Pure preservados; próximo print 57 permanece reservado.
