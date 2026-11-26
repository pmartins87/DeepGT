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

Entregue catálogo híbrido v0.2 de estudo (56/56, 8 modificadas; print 16 pendente), método individual, não vencedor geral. Ver OPTIMIZED_HYBRID_25BB_V02.md. Revisar pendência e diferenças entre famílias somente com evidência suficiente; não relaxar gate de promoção. Print 57/23 BB permanece reservado.

23 BB recebido em arquivos compactados e mapeado integralmente: prints 57–112. Extração preliminar local concluída; revisão e codificação pendentes, sem ativação. Próximo print de captura 113 (20 BB); manter linha Optimized separada. Ver INGEST_23BB.md.

## Ingestão de 20 BB — 2026-11-26
42 imagens (30 origem 3-handed e 12 HU nativo), ZIPs íntegros e hashes distintos. Conferência visual dos menus e históricos: nenhuma lacuna na árvore oferecida pelo app. 14 famílias de 25/23 BB não aplicáveis: prints de referência 7–16 (raise 8 removido no squeeze após BTN raise e SB call; novo print 119), 34–35 (raise 9 removido após limp/iso 3; novo print 137), 39–40 (raise 9 removido após open SB 3 com BTN fold; novo print 140). Numerados 113–142 3-handed e 143–154 HU, por ordem cronológica dentro de cada origem e mantendo a convenção de listar 3-handed antes de HU. Arquivos originais nas duas cargas do usuário; sem upload binário ao GitHub. Frequências individuais ainda não extraídas e código intacto. Próximo print 155, stack 17 BB.

Novo escopo Optimized (2026-11-26): apenas realocação de combos por equity nas respostas finais fold/call contra all-in, preservando frequência agregada da fonte. Restante Pure. Estudos anteriores arquivados; nenhuma nova chart produzida nesta decisão. Definir ranges, reach, precisão e validação antes de gerar variante; captura principal continua 17 BB, print 155. Ver OPTIMIZED_PROPOSAL.md.

Correção do escopo Optimized: incluir calls contra all-in com terceiro ainda a agir; preservar demais ações. Frequência fixa permanece hipótese de comparação, não garantia GTO; decisão de implementar critérios finais após avaliação. Captura 17 BB print 155 inalterada.

Critério simplificado definido pelo usuário: variante de estudo com frequência agregada de call original e ordenação pela equity HU contra mão uniforme derivada da tabela PreFlopEquities.zip, para calls preflop contra all-in terminais e não terminais; demais ações Pure. Sem reconstrução de ranges adversários como requisito para gerar ranking. Implementação pendente; ver OPTIMIZED_PROPOSAL.md. Captura 17 BB, print 155, inalterada.

Novo release autorizado: R10m + charts 20/23/25 acima de 17 BB; cancelar captura abaixo/igual 17 para este escopo. Stage 1 offline publicado com 154 funções de estudo e R10m integral; faltam roteamento e validação nativa. Ver R10M_HIGH_STACK_STAGE1.md. Não considerar pronto para jogo.

## DeepGT — checkpoint G1 (2026-11-26)
G1 bloqueado por divergência não autorizada entre releitura e referência Pure 25 BB, não por falta de novos prints. Fechar G1 conforme [auditoria G1](HIGH_STACK_GATE_G1_AUDIT.md) antes de liberar roteamento de estudo. G2 (bucket inicial/assimetria), G3 (história e sizing), G4 (RNG/parser/replay), G5 (paridade e overrides) seguem pendentes. Não capturar <=17 BB. Candidato e baseline congelados.
