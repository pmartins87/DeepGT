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
