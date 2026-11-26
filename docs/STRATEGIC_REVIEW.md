# Revisão estratégica — DeepGT
2026-11-24. Diretriz do usuário: não reproduzir cegamente decisões contraintuitivas; admitir desvios deliberados e rastreáveis da fonte. O objetivo passa a ser estratégia de referência GTO com ajustes de robustez para estudo offline, sem alegação de equilíbrio exato após ajustes.

## Processo obrigatório
1. Preservar a fonte e as frequências extraídas (CSV) sem alteração. Separar erro de leitura, ausência de reach, arredondamento e divergência estratégica real.
2. Confirmar nó exato, posição, stack inicial, valores investidos, ação anterior, reach, premissas de prêmio/ICM/chipEV e ranges quando disponíveis. Um ramo de probabilidade zero ou próxima de zero não sustenta por si só confiança nas continuações; frequência de ação condicionada não mede rentabilidade.
3. Para ações suspeitas, examinar diferença de EV quando disponível; para all-in terminal, calcular pot odds e equity ponderada por ranges compatíveis, incluindo blockers, empates e potes laterais quando aplicáveis. Sem ranges/EV, registrar hipótese e incerteza. Misturas GTO não exigem deliberadamente escolher ação claramente inferior para equilibrar; ações de equilíbrio positivas em frequência devem ser aproximadamente indiferentes no modelo exato.
4. Preservar ação incomum tecnicamente justificada; não eliminar blefes, mãos fracas ou misturas em bloco por aparência. Distinguir ajuste robusto baseado em evidência de veto explícito do usuário (restrição de produto, não prova matemática). O usuário delega a revisão rotineira ao assistente; só pedir informação indispensável.
5. Ajustes aprovados: registrar ID, stack/nó, mão, ação/frequência original, ação/frequência final, justificativa, tipo de evidência, autor/decisão, versão e impacto em nós descendentes. Aplicar a todas as ações daquela classe de forma mutuamente exclusiva, sem redistribuição arbitrária para preservar percentual agregado. Manter comentário junto à estratégia de estudo, quando implementada. Não alterar dado bruto.
6. Conferir consequências para reach e nós filhos, registrar limites. Não extrapolar a exceção para outros stacks/histórias sem análise. Não ativar estratégia não homologada; gates de validação nativa/integração permanecem.

## Registro de exceções e candidatos
| ID | Nó | Mão | Fonte relatada | Proposta | Estado |
|---|---|---|---|---|---|
| EX-001 | 25 BB: BTN open shove 25 → SB call → BB age | T3o | Call com frequência não informada, relatado pelo usuário; print ainda não recebido | Fold 100%, como restrição conservadora solicitada para esse caso, após confirmar fonte e identidade | Candidato registrado; não implementado |

Observação EX-001: a chart raiz BTN open de 25 BB já recebida mostra open shove 0% na legenda (precisão limitada). Se for o mesmo modelo, esse ramo pode estar fora da trajetória de equilíbrio ou ter reach muito pequeno. Com três stacks iniciais iguais de 25 BB, sem antes e chipEV, BB já investiu 1 BB, paga 24 para disputar pote final de 75; equity de equilíbrio 32%. Não se conclui a EV de T3o sem ranges e premissas. O exemplo não corresponde a nenhum dos 19 prints já catalogados; não confundir com print 16 (squeeze 8 e 4bet shove do BTN). Sem edição da estratégia nesta etapa.

## EX-001 — confirmação e implementação (print 31)
Fonte agora recebida: BTN open shove 25 → SB call 24,5 → BB decide call 24/fold, 25 BB iniciais. T3o: estimativa 69% fold, 31% call na matriz; frequência exata desconhecida. Estratégia de estudo: 100% fold, 0% call, por veto explícito do usuário; sem alegação de EV calculada. CSV bruto preservado, comentário junto à chart, src commit 087b8ca4f02080bc0d333a30980efce02c261c5c. Nó terminal, sem descendente de decisão preflop após ação do BB. Não extrapolar para outros nós. Outros calls contraintuitivos no ramo de open shove de frequência exibida 0% devem ser examinados antes da homologação, sem excluir automaticamente mãos apenas pela aparência.

## Decisão vigente — referência pura primeiro, variante ajustada depois (2026-11-24)
Substitui a política anterior de aplicar exceções estratégicas à versão de referência. src/DeepGT.txt é o candidato de referência fiel às frequências por mão estimadas dos screenshots, sem alterações deliberadas de combos. "Pura" não significa exportação exata nem prova de equilíbrio: limitações de raster, nós sem reach e gates continuam. EX-001 foi revertida no código do print 31: T3o volta a fold 69% / call 31% estimados. Preservar o histórico da exceção como hipótese para uma variante futura, não implementada.
Após consolidar a referência, estudar separadamente variante de realocação de combos mantendo frequências agregadas por ação como restrição experimental. Não usar contagem de classes como frequência: ponderar por multiplicidade 6/4/12, reach condicional e, quando disponível, distribuição com blockers; recalcular reach dos descendentes e explicitar erro/resíduos. Definir "melhores" por EV contextual por ação, não ranking universal de força pré-flop; blefes/blockers e realização de equity podem alterar ordenação. Não alegar superioridade ou GTO exato da variante sem comparação offline. Fixar versão de referência, critérios e teste antes de implementar variante. Nenhum ajuste estratégico adicional na referência; correções de leitura continuam permitidas e auditadas.

## Proposta de metodologia experimental
Ver [OPTIMIZED_PROPOSAL.md](OPTIMIZED_PROPOSAL.md): critérios de EV, realocação de massa de ação, robustez e piloto offline. Proposta não aprovada para execução; referência pura continua intacta.

Piloto 01 autorizado e executado offline: [OPTIMIZED_PILOT_01.md](OPTIMIZED_PILOT_01.md). Nenhuma exceção aplicada à referência. Não há evidência para promover a variante.

Piloto 02 [resultado](OPTIMIZED_PILOT_02.md): sensibilidade significativa à extração. Nenhuma exceção aplicada; EX-001 permanece hipótese futura, não conclusão de EV. Preservar Pure.

Estudo amplo autorizado: [OPTIMIZED_25BB_BATCH_STUDY.md](OPTIMIZED_25BB_BATCH_STUDY.md). Conservadora do 31 não generalizou, Fixed e Maximin não homologadas. EX-001 segue hipótese; referência não alterada. Só reabrir com evidência nova.

EX-001: a Conservadora completa do print 31 foi incluída no catálogo Optimized All-in v0.1 experimental, separada da Pure, conforme solicitação de seleção individual. Não é promoção/homologação e não altera a referência. Print 42 Maximin reconstituído, arquivado sem seleção. Ver OPTIMIZED_25BB_SELECTION.md.

Print 42: MonoFixed e MonoRobust eliminam inversão KQo/KJo/KTo, escolhendo fold para as três. MonoRobust candidata, não homologada. Ver OPTIMIZED_MONOTONIC_STUDY.md. Catálogo anterior permanece histórico.

Seleção híbrida reafirmada: MonoRobust é mais uma candidata, não método obrigatório. Print 31 Conservadora condicional segue referência experimental local; MonoRobust ainda não foi testada nesse nó. Print 42 MonoRobust candidata local. Nenhuma alteração de código ou chart nesta discussão.

V0.2 híbrida: 31 Conservadora TT+/AK (99 retirado sob hipótese tight adicional), 42 MonoRobust + JTo fold após confirmação MC em mesmas distribuições sintéticas. 16 não selecionada. Ver OPTIMIZED_HYBRID_25BB_V02.md; nenhuma alteração da referência ou promoção.

Decisão de 2026-11-26: futura Optimized limitada a call terminal vs all-in, com frequência agregada original fixa e seleção por equity contextual máxima. Catálogos híbridos anteriores preservados como histórico experimental, não como especificação vigente. Print 31 Conservadora anterior reduz frequência e portanto não atende ao novo requisito. Ranges não identificáveis e conflitos entre frequência e pot odds devem ser sinalizados, sem fabricar dados nem alterar frequência unilateralmente.

Correção de 2026-11-26: escopo experimental abrange calls contra all-in mesmo com terceiro ainda a agir. Frequência fixa não garante inexporabilidade. Caso 31 Conservadora é evidência condicional, não prova de ganho geral; preservar experimentos históricos e Pure. Calls não terminais requerem EV contextual e atualização do reach subsequente. Nenhuma nova política homologada.

Novo critério escolhido: ranking de equity HU vs mão uniforme derivado de PreFlopEquities.zip e frequência agregada original em calls a all-in. É hipótese simplificada, não garantia de equilíbrio ou EV contextual, sobretudo multiway. Catálogos experimentais anteriores mantidos como histórico, Pure inalterada.

Stage 1 R10m acima de 17 BB: 93 calls candidatos pelo ranking HU absoluto; versão offline e inativa. As otimizações anteriores são históricas. Não alegar ganho ou inexporabilidade. Ver R10M_HIGH_STACK_STAGE1.md.
