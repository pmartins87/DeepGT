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

## Lote 2 — extração raster e validação estática
Recortes 13×13 dos JPG originais 709×1536, classes por limiares cromáticos azul/verde/vermelho. Seleção de faixa colorida contígua próxima à base; largura estimada por voto por coluna e preenchimento de lacunas de texto pela evidência mais próxima. Percentuais arredondados para inteiros; cinza sem ação atribuída. Bordas JPEG, faixas finas e reach rasterizado limitam a precisão. Agregados ponderados pela altura observada e número de combos; não constituem confirmação de cada frequência.

| Nó | Fonte F/C/J (%) | Estimativa F/C/J (%) | Classes visíveis |
|---:|---|---|---:|
|10|81,76/13,70/4,54|82,448/12,977/4,575|40|
|11|5,52/94,47/0|6,018/93,982/0|41|
|12|0,15/99,86/0|0/100/0|18|
|13|0/100/0|0/100/0|18|
|14|99,97/0,03/0|100/0/0|40|
|15|8,39/91,62/0|9,155/90,845/0|41|
|16|46,79/53,21/0|47,430/52,570/0|40|
|17|68,45/31,55/0|68,634/31,366/0|86|
|18|79,39/20,61/0|79,751/20,249/0|40|
|19|96,58/3,41/0|96,761/3,239/0|40|

Nos nós 12 e 14, a ação minoritária da legenda não foi localizada com segurança em uma mão; preservar a ressalva em vez de inventar a distribuição. O nó 5 permanece discrepante; teste adicional com reach do pai no CSV inicial deu ~58,073% de call, versus 55,93% da fonte, e não resolve o desvio. O painel não apresenta mais estados internos de revisão. A validação nativa continua obrigatória antes de qualquer ativação. 40.804 testes de partição em modelo sobre as 404 classes visíveis; ausência de colisão entre seções e prefixo anterior preservado. 21 predicados e 17 listas acrescentados, 1.374 seções totais.
