# Estudo All-in 25 BB — auditoria das 56 charts
Autorização: comparar Pure, Fixed, Conservadora e Maximin em toda a cobertura conhecida de 25 BB. Pesquisa offline; nenhuma alteração em src, registry, baseline ou postflop. Snapshot src blob 0ba9bb04669e866a15f9723c25083a1da952af15.
## Cobertura
56 JPGs originais, ZIP íntegro, 9.464 células reextraídas com método secundário do piloto 02 (mesmos parâmetros, sem ajuste à legenda). 22 charts com desvio raster >0,5 pp da ação auditada (1,4,5,7,8,11,15,16,21,22,24,25,35,36,39,40,41,45,49,50,53,54); print 47 legenda de shove truncada. Não confundir agregado próximo à legenda com precisão por mão. Classificação:
- 28 calls terminais: 5,6,9,12,13,15,16,18,19,22,24,25,27,28,30,31,35,36,37,40,41,42,49,50,51,54,55,56.
- 6 calls com terceiro a agir: 11,14,17,23,26,29.
- 1 shove/fold: 20.
- 21 com ações não all-in além de fold/shove (preservadas como insumo): 1,2,3,4,7,8,10,21,32,33,34,38,39,43,44,45,46,47,48,52,53.
35 candidatas, 30 com comparação numérica diagnóstica: 25 de origem 3-handed (5,6,9,11,12,13,14,15,17,18,19,20,22,23,24,25,26,27,28,35,36,37,40,41,42) e cinco HU nativo (49,50,51,54,55). Cinco bloqueadas por reach nominal não identificável (16,29,30,31,56); print 31 conserva demonstração anterior com ranges hipotéticos, não validação nominal. Nenhuma promovida.
## Validação e método
Avaliador C++ de 7 cartas comparado com implementação independente de 5 cartas (máximo entre 21 subconjuntos) em 100.000 deals de três jogadores, 300.000 rankings iguais, 4.766 empates; soma das frações do pote =100% em todos (seed 25112026). Validação amostral de ranking, não prova de toda rotina de simulação.
Reconstrução por produto das frequências condicionais de trajetória por jogador, com mãos disjuntas e cartas do jogador que foldou (inclusive board sem essas cartas). Massa compatível calculada por inclusão-exclusão e conferida em caso esparso por produto de matrizes. Limites de reach desconhecido: produto com NaN=0 para inferior e NaN=1 para superior, nunca assumir cinza como fold; diagnóstico condicionado a suporte resolvido. Frequências de chegada são aproximações da segunda leitura, não observação real. Gate preliminar local: massa desconhecida <=1%, desvio do agregado reconstruído da ação atual <=0,5 pp da legenda. Não é auditoria de precisão de cada ancestral nem homologação de fonte. 13 dos 25 3-handed passam esse filtro (6,12,13,14,19,22,25,27,28,36,37,41,42). HU: nenhum passa o filtro em ambas as leituras; 49 segunda leitura 7,963% de massa desconhecida, sem comparação de políticas nessa leitura.
25 3-handed: 40.632.000 amostras aceitas de cartas e boards (26.784.000 terminais, 13.848.000 continuação/shove), 4.000 por classe com reach positivo e cenário, três cenários de ajuste e três de teste. Modelos hipotéticos multiplicam pesos de oponentes vivos (ambos nas continuações) por tilts de percentil de equity contra uniforme: nominal, 0,5+1,5p, 2-1,5p; avaliação independente com novas sementes nominal, 0,2+2,4p² e 2,4-2p². Continuation/shove também altera odds de call [1,.75,1.25,1,.5,1.7]; avalia os nós filhos da leitura original alternativa, resposta desconhecida medida separadamente, sem reotimização conjunta. Fold EV=0, custos incrementais, pote com dead money, chipEV sem antes; shove 20 inclui os quatro ramos de resposta. HU: expectativas por tabela de equity, 4 modelos de ajuste (piloto 02) e 2 cenários sintéticos retidos, sem amostragem de board. Não são dados independentes de jogadores.
Fixed = ordenar EV nominal, manter massa nominal de ação da referência reconstruída; Conservadora = mínimo dos EVs de ajuste >0,05 BB (MC desconta 1,96 SE pontual), fold caso contrário; Maximin = LP maximiza menor EV absoluto entre modelos de ajuste, não menor arrependimento nem ganho relativo a Pure. Preservar decisão no suporte não avaliado. Na comparação 3-handed a referência é a segunda leitura do raster (Pure_source_read), não o código publicado; HU compara leitura original e alternativa. Diferenças podem ser artefatos. IC pontual de diferenças pareadas por classe usando amostras de avaliação, sem correção múltipla e sem incerteza de pesos/ranges. Nenhum resultado prova superioridade global.
## Resultados 3-handed
Nos 13 nós que passam gate local, contagem de sinais da diferença nominal (positiva/negativa/zero; tolerância 1e-8): Fixed 4/3/6, Conservadora 2/10/1, Maximin 5/4/4. Pior delta entre três cenários de avaliação nesses 13: Fixed -0,022853 BB, Conservadora -0,205075, Maximin -0,094647. Nós com perda >0,05 BB em algum cenário de avaliação: 0/9/3 respectivamente. Apenas Maximin no print 42 tem IC nominal pontual inferior >0; nenhum método em nenhum dos 13 tem limite inferior positivo em todos os três cenários. Não somar EVs por nó como lucro global: trajetórias interdependentes, pesos mudam com política.
| Print | Gate local | Fixed | Conservadora | Maximin |
|---:|---|---:|---:|---:|
|6|sim|+0,00429|-0,00029|+0,00898|
|13|sim|0|-0,00928|+0,01035|
|22|sim|-0,01428|-0,03723|-0,00644|
|27|sim|+0,00275|-0,01805|+0,00095|
|37|sim|-0,01032|-0,03014|-0,01826|
|41|sim|+0,00343|-0,07421|-0,02501|
|42|sim|+0,00049|-0,00898|+0,01362|
|20|não|-0,00785|-0,01915|-0,01230|
|11|não|+0,05888|+0,05859|+0,05895|
Delta nominal de avaliação, BB por chegada ao nó. Print 11 Fixed/Maximin positivos com IC pontual nos três cenários, mas falha de fonte e reach extremamente raro (~0,000108% das mãos); não promover. Print 42 Maximin nominal +0,013621, SE 0,005147, pior delta +0,002649 (IC não passa em todos). Print 20 shove/fold: todos negativos nominalmente e gate local falha; não extrapolar um único nó.
## HU, nominal (BB por chegada)
| Print | Leitura | Fixed | Conservadora | Maximin |
|---:|---|---:|---:|---:|
|49|referência|+0,025113|+0,079068|+0,079068|
|50|referência|+0,002265|+0,008208|+0,011804|
|50|alternativa|+0,000855|-0,010199|-0,010199|
|51|referência|+0,001623|-0,009824|-0,009824|
|51|alternativa|+0,000107|-0,022059|-0,020026|
|54|referência|+0,000112|+0,000192|+0,000192|
|54|alternativa|0|0|0|
|55|referência|+0,002563|-0,006481|-0,006481|
|55|alternativa|+0,000100|-0,008842|-0,008842|
Gate em ambas as leituras falhou em todos. Print 49 alternativa não comparada devido a massa desconhecida. Conservadora e Maximin HU às vezes perdem >0,05 BB em modelos retidos; não equivalem ao Flexible do piloto 01.
## Decisão
Não há vencedor geral nem evidência suficiente para publicar charts modificadas. Fixed mostrou menor perda de estresse neste conjunto, mas não comprovou ganho robusto. Conservadora venceu a demonstração específica off-path do 31, não se generalizou. Maximin absoluto pode abandonar oportunidades lucrativas em favor do pior modelo; não protege por si só contra perda em relação a Pure. Recomendação: critério seletivo de superioridade robusta (diferença de EV frente à referência, margem material, validação com modelos/leituras independentes, fallback Pure), sem impor frequência se EV negativo; hipótese não testada como quinta política. Não repetir rodada sem nova evidência de precisão/ranges/EV; dados de adversários independentes e validação de árvore continuam necessários. Não afirmar desvios de GTO verdadeiro. Captura Pure prossegue 23 BB, print 57. Não alterar código.
Pacote local DeepGT_25BB_estudo_allin_56.zip, SHA256 b0b656166e2b16b647f0aa34bb6dfcd73b2480c7e40947232564b30b89b4f1d4 (27 arquivos, scripts, dados e resultados; requer ZIP de imagens e tabela de equidades). Scripts e binários JPG não publicados integralmente no GitHub.
