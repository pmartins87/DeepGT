# Auditoria — nove screenshots de 25 BB, rascunho de pesquisa offline
2026-11-24.

## Método
Imagens originais 709×1536, matriz 13×13. Segmentar células por coordenadas de grade. Classificar pixels pelas paletas azul, verde, vermelho, salmão e cinza; excluir texto e bordas na medida possível. Em nós posteriores, altura colorida aproxima reach do jogador no nó; proporção horizontal de cores aproxima distribuição condicional. Ajuste monotônico dos segmentos na ordem fold/call/raise/shove, arredondamento por maiores restos para somar 100%. Vermelho equivale a shove quando a legenda assim especifica. Sem reach visível, não atribuir ação. Revisão de faixas estreitas, compressão JPEG e divergências pai/filho. Não inferir estratégias não mostradas.

## Conferência aproximada
Ordem F/C/R/J. A estimativa abaixo usa 6 combos por par, 4 suited, 12 offsuit multiplicados pela altura colorida relativa da célula. Não equivale necessariamente à ponderação exata do aplicativo/solver.

| Nó | Fonte | Estimativa (%) | Maior desvio (p.p.) |
|---|---|---|---:|
| 1 | 61,68/0/38,31/0 | 61,671/0/38,329/0 | 0,019 |
| 2 | 76,75/6,84/7,56/8,83 | 76,721/7,024/7,465/8,790 | 0,184 |
| 3 | 26,24/57,93/7,77/8,04 | 26,262/58,084/7,477/8,176 | 0,293 |
| 4 | 39,20/47,09/0/13,66 | 39,118/47,480/0/13,403 | 0,390 |
| 5 | 44,07/55,93/0/0 | 40,916/59,084/0/0 | 3,154 |
| 6 | 71,03/28,97/0/0 | 71,034/28,966/0/0 | 0,004 |
| 7 | 66,35/3,44/0/30,21 | 66,411/3,667/0/29,922 | 0,288 |
| 8 | 73,43/10,98/0/15,56 | 73,686/10,917/0/15,397 | 0,256 |
| 9 | 2,36/97,64/0/0 | 2,019/97,981/0/0 | 0,341 |

Matriz de 1.521 registros, 888 classes com ação visível, 633 sem ação atribuída. 26 predicados isolados (inclui fold explícito e zero shove no nó 1); 89.688 verificações de partição em pontos de 0,00 a 1,00, com cada classe visível e exatamente uma ação por ponto. Isso verifica intervalos, não exatidão dos pixels nem execução nativa. Os 64 casos de faixa estreita são marcados LOW_RESOLUTION_REVIEW. Seis casos UNRESOLVED_PARENT_REACH no nó 8. Nó 5 bloqueado para aprovação. Nó 9 não tem pai de squeeze recebido.

## Integração futura
O código gerado é material de revisão, não uma fórmula autônoma. Nenhum consumidor foi conectado a src/DeepGT.txt. Fold observado e ausência de reach devem ser separados. Confirmar identidade do histórico/posição/stacks iniciais e valores de raise total (6 vs 8), e eventual discrepância com sizing R10i. Não confundir stack restante com inicial. Não mapear misturas para RFF/RCF/RCC/RRC sem a árvore correspondente. Preservar ownership e fallback explícito para nós não cobertos. Gate 01 nativo e aprovação de cobertura/sizing antes de qualquer ativação. Preferir modo do aplicativo que mostre frequências numéricas ou desative peso vertical de reach, se disponível; pedir exportação ou detalhe de mão especialmente para o nó 5.

Commits: CSV cd1aa35d9286c03b1ef920f419f6169632e18ea0; predicates 26a4c754d03693858979d75d734ca6d63f56b706.

## Adendo — esqueleto
As 49 seções de listas/charts acima foram copiadas para o fim de src/DeepGT.txt juntamente com 12 helpers de stack, sem consumidores ativos. A afirmação anterior de que nenhum consumidor foi conectado continua válida. A grade foi definida em PREFLOP_POLICY.md. As divergências e bloqueios não mudaram.
