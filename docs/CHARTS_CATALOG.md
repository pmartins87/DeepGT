# Catálogo de charts DeepGT — 2026-11-24

Lote 25 BB, SPINS Classic, GTO Ranges+. Todos os nós abaixo são **rascunhos offline, não ativos**. Os valores na legenda são percentuais condicionais ao nó, não percentuais das 1326 combinações na raiz para decisões posteriores.

| Nó | Print (hora) | Histórico e Hero | Fold / Call / Raise / Shove da fonte | Maior desvio estimado (p.p.) | Classes visíveis / revisão de faixa fina |
|---|---|---|---|---:|---:|
| 1 BTN_Open_25 | 18:11:50 | BTN open | 61,68 / — / 38,31 / 0 | 0,019 | 169 / 1 |
| 2 SBvBTN_Open2_25 | 18:54:31 | BTN R2 → SB | 76,75 / 6,84 / 7,56 / 8,83 | 0,184 | 169 / 12 |
| 3 3wBBvBTN_Open2_SBFold_25 | 18:54:45 | BTN R2 → SB F → BB | 26,24 / 57,93 / 7,77 / 8,04 | 0,293 | 169 / 8 |
| 4 BTNvBB_3bet6_SBFold_25 | 18:55:07 | BTN R2 → SB F → BB R6 → BTN | 39,20 / 47,09 / — / 13,66 | 0,390 | 86 / 5 |
| 5 3wBBvBTN_4betShove_SBFold_25 | 18:55:27 | BTN R2 → SB F → BB R6 → BTN J25 → BB | 44,07 / 55,93 / — / — | 3,154 | 43 / 8 |
| 6 BTNvBB_3betShove_SBFold_25 | 18:56:22 | BTN R2 → SB F → BB J25 → BTN | 71,03 / 28,97 / — / — | 0,004 | 86 / 1 |
| 7 BTNvBB_Squeeze8_SBCall_25 | 18:57:29 | BTN R2 → SB C → BB R8 → BTN | 66,35 / 3,44 / — / 30,21 | 0,288 | 86 / 5 |
| 8 SBvBB_Squeeze8_BTNFold_25 | 18:57:41 | BTN R2 → SB C → BB R8 → BTN F → SB | 73,43 / 10,98 / — / 15,56 | 0,256 | 39 / 9 |
| 9 3wBBvSB_4betShove_AfterSqueeze8_BTNFold_25 | 18:57:57 | BTN R2 → SB C → BB R8 → BTN F → SB J25 → BB | 2,36 / 97,64 / — / — | 0,341 | 41 / 15 |

Dados completos: [frequencies_25bb.csv](../charts/draft_25bb/frequencies_25bb.csv). Predicados isolados: [DeepGT_25BB_charts_DRAFT.txt](../charts/draft_25bb/DeepGT_25BB_charts_DRAFT.txt).
R = raise total, C = call, F = fold, J = shove. Cinza representa ausência de reach visível, não fold. Em nós posteriores, altura colorida estima reach e largura estima frequência condicional. A conferência agregada pondera combos por altura relativa, aproximação sujeita a rasterização e potencial diferença de ponderação do aplicativo. Células sem ação observada têm percentuais vazios. Faixas de até 2 px ou altura de até 3 px exigem revisão. Nenhuma frequência foi ajustada para forçar igualdade com a legenda.

Nó 5: BLOQUEADO para homologação pela divergência 3,154 p.p. (call estimado 59,084%). Nó 8: seis classes com reach estimado no pai e sem ação visível no filho; massa estimada não resolvida ~1,019% do reach ponderado do pai. Nó 9: falta chart inicial do BB vs BTN R2 + SB C, que é pai estratégico do squeeze; reach só inferido da altura. Todos os nós precisam de revisão da fonte. J6s no nó 1 aparece raise puro; leitura anterior de 97% não confirmada.

Ainda faltam os outros ramos e Gate 01 nativo. Grade definida em PREFLOP_POLICY.md. Os predicados foram acrescentados a src/DeepGT.txt sem consumidores ativos; não ativar até homologação. Ver [auditoria](AUDIT_25BB_DRAFT.md).

Registro por stack/nó: [PREFLOP_REGISTRY.json](../charts/PREFLOP_REGISTRY.json). Originais: [manifesto](../sources/25bb/manifest.csv) (JPGs preparados, upload binário pendente). Todos os dados permanecem preliminares.

## Segundo lote 25 BB — recebido, extração pendente
Ver registry e painel para as dez sequências dos prints 10–19. Frequências da legenda registradas no registry, não são frequências individuais extraídas. Os prefixos anteriores aos três últimos blocos foram reconstruídos por continuidade e devem ser conferidos. Correção do usuário: print 18, BB shove/BTN fold/SB, 79,39% fold e 20,61% call; print 19, BB shove/BTN call/SB, 96,58% fold e 3,41% call. Print 14 é outro ramo: BB squeeze 8/BTN shove/SB, 99,97% fold e 0,03% call. Os três não devem ser fundidos. Arquivamento binário pendente.

## Segundo lote — extração e código concluídos em rascunho
[CSV com as 169 classes por nó](../charts/draft_25bb/frequencies_25bb_lote2.csv) · [Predicados isolados](../charts/draft_25bb/DeepGT_25BB_lote2_DRAFT.txt) · [Manifesto dos originais](../sources/25bb/manifest_lote2.csv). As dez charts estão também em src/DeepGT.txt, sem consumidores ativos. Ver auditoria para diferenças agregadas e alcance visível; não confundir codificação com homologação. Todos os 19 prints foram organizados em pacote local; JPGs remotos pendentes.

## Prints 20–39 — lote 3 e 4 codificados em rascunho
[Dados brutos por mão](../charts/draft_25bb/frequencies_25bb_20_39.csv) · [Predicados de estudo](../charts/draft_25bb/DeepGT_25BB_20_39_DRAFT.txt) · [Auditoria numérica](../charts/draft_25bb/audit_20_39.json) · [Manifesto](../sources/25bb/manifest_20_39.csv). Numeração e sequência no painel. Print 32: coluna call_or_check representa CHECK, não call. Print 31: EX-001 aplicada somente na estratégia de estudo, CSV bruto intacto. O ramo BTN fold é 3-handed de origem, não HU nativo. Cinco nós sem imagem conhecidos; não numerar antes do recebimento. Ver auditoria e status.

## Prints 40–42
[CSV](../charts/draft_25bb/frequencies_25bb_40_42.csv) · [Predicados](../charts/draft_25bb/DeepGT_25BB_40_42_DRAFT.txt) · [Auditoria](../charts/draft_25bb/audit_40_42.json) · [Manifesto](../sources/25bb/manifest_40_42.csv). As três charts estão em src. EX-001 do print 31 revertida por decisão posterior; fonte bruta inalterada. Dois nós conhecidos sem print no painel.
