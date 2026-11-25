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

## Prints 20–39 — extração e conferência
Segmentação das matrizes 709×1536 em 169 células, classificação cromática por distância à paleta, máscara de texto e bordas, altura de reach visível, voto por coluna nas últimas oito linhas coloridas, preenchimento de pixels sem classificação pelo vizinho válido mais próximo e arredondamento por maiores restos. Resultados são estimativas raster, não exportação do solver. Check no print 32 está na coluna C. Cinza sem ação atribuída. Sem calibração para forçar legenda. Em nós com vermelho = shove, mapeamento conforme legenda. Bordas JPEG podem confundir vermelho e salmão, particularmente nó 32; reach de poucos pixels pode causar erro agregado, particularmente nó 35.

| Print | Fonte F/C/R/J (%) | Estimativa bruta F/C/R/J (%) | Desvio máx. p.p. | Visíveis |
|---:|---|---|---:|---:|
| 20 | 90.69/0/0/9.31 | 90.798/0/0/9.202 | 0.108 | 169 |
| 21 | 51.21/27.63/0/21.12 | 51.385/27.93/0/20.685 | 0.435 | 86 |
| 22 | 40.37/59.63/0/0 | 40.085/59.915/0/0 | 0.285 | 40 |
| 23 | 88.96/11.03/0/0 | 88.952/11.048/0/0 | 0.018 | 86 |
| 24 | 45.81/54.18/0/0 | 45.242/54.758/0/0 | 0.578 | 40 |
| 25 | 63.01/36.99/0/0 | 62.394/37.606/0/0 | 0.616 | 40 |
| 26 | 91.48/8.52/0/0 | 91.464/8.536/0/0 | 0.016 | 169 |
| 27 | 70.28/29.72/0/0 | 70.233/29.767/0/0 | 0.047 | 86 |
| 28 | 86.63/13.37/0/0 | 86.569/13.431/0/0 | 0.061 | 86 |
| 29 | 88/11.99/0/0 | 88.018/11.982/0/0 | 0.018 | 169 |
| 30 | 85.87/14.12/0/0 | 85.839/14.161/0/0 | 0.041 | 169 |
| 31 | 84.73/15.26/0/0 | 84.839/15.161/0/0 | 0.109 | 169 |
| 32 | 0/63.74/31.83/4.39 | 0/63.336/30.628/6.035 | 1.645 | 169 |
| 33 | 39.81/48.14/1.42/10.59 | 40.15/47.883/1.196/10.772 | 0.34 | 124 |
| 34 | 59.76/12.26/0/27.97 | 59.73/12.638/0/27.632 | 0.378 | 129 |
| 35 | 12.73/87.27/0/0 | 8.977/91.023/0/0 | 3.753 | 11 |
| 36 | 67.5/32.49/0/0 | 66.965/33.035/0/0 | 0.545 | 129 |
| 37 | 85.37/14.62/0/0 | 85.465/14.535/0/0 | 0.095 | 124 |
| 38 | 36.39/51.6/4.36/7.62 | 36.393/51.549/3.948/8.11 | 0.49 | 169 |
| 39 | 60.64/14.04/0/25.3 | 60.912/14.286/0/24.802 | 0.498 | 115 |

3380 células, 2279 visíveis, 230179 testes de partição do rascunho. 95 seções novas sem colisão; prefixo anterior íntegro. EX-001: print 31, T3o, 69/31/0/0 original estimado → 100/0/0/0 no rascunho por decisão explícita do usuário; sem redistribuição. Os demais valores não foram ajustados sem justificativa. Revisão estratégica de outros calls estranhos no ramo de shove 0% e validação dos nós 32/35 ainda necessárias antes de ativação. Os cinco cenários faltantes permanecem sem ação inventada.

## Prints 40–42 e reversão EX-001
Extração por proximidade cromática azul/verde em matriz 13×13, faixa colorida inferior e voto por coluna nas últimas oito linhas visíveis. Estimativas call: 40=73,967% vs 72,80%, 41=32,101% vs 31,71%, 42=15,017% vs 15,06%. Reach fino/JPEG limitam precisão; 507 classes, 306 visíveis, 30906 verificações de partição modelada. 12 seções adicionadas; sem homologação nativa. EX-001 anteriormente aplicada foi revertida no src e predicados isolados; T3o 69/31 restaurado, CSV bruto preservado. A auditoria histórica 20–39 descreve o estado anterior à reversão. Nenhuma realocação de combos nesta versão.
