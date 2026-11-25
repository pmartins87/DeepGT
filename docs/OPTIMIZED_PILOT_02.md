# Piloto 02 — replicação HU 25 BB e sensibilidade à extração
Data: 2026-11-24. Autorização: "Continue o experimento." Uma rodada corretiva prevista em OPTIMIZED_PROPOSAL.md. Pure congelado no blob 0ba9bb04669e866a15f9723c25083a1da952af15; sem alteração de src, registry, baseline, charts ou roteamento.
 
## Método
Reexecutados os cálculos do piloto 01 com a tabela de equity já verificada. Os vetores locais de shove do print 53 e call do 54 coincidem com o CSV remoto; o 55 reproduziu o resultado anterior. Print 54: SB raise 2, BB raise 6, SB shove 25; BB paga 19 para pote 50, equity mínima 38%. Print 55: SB paga 23 para pote 50, equity mínima 46%. Sem antes, stacks iguais, chipEV.
Distribuição conjunta de mãos disjuntas: print 55 peso P(SB open|h)*P(BB shove|v); print 54 peso P(BB raise6|h)*P(SB open|v)*P(SB shove após 3bet|v). Usar multiplicidade exata e blockers. Zero de massa não resolvida no modelo de ambos os conjuntos de extração, não evidência de ausência de reach real subpixel. Mesmos critérios: Fixed preserva frequência reconstruída; Flexible escolhe melhor ação fora da banda ±0,05 BB; estresse hipotético tight, loose e mistura de 10% de componente uniforme condicional ao caminho anterior; não dados reais. 
Segunda leitura independente do mesmo raster: distância RGB às paletas, exclusão de cores distantes, seleção de linhas com pelo menos 32% de ação reconhecida, votação por coluna em todas as linhas selecionadas; ajuste de sequência monotônica esquerda→direita com penalidade de 1,2 colunas por segmento extra. Print 45 exclui shove exibido 0%, resolução finita. Sem calibração para fechar totais. Método alternativo é hipótese de leitura, não fonte verdadeira nem amostra independente. 

## Conferência da reconstrução (%, condicionada à árvore)
| Ação | Legenda | Original | Segunda leitura |
|---|---:|---:|---:|
|45 SB raise|40,15|38,846154|39,667384|
|52 BB shove|11,97|12,867740|12,014776|
|52 BB raise6|11,82|10,831911|10,927620|
|55 SB call|24,70|24,084475|23,892944|
|54 BB call|52,94|54,469829|54,226656|

A divergência restante de call excede 0,5 pp vs legenda nos dois nós; não confundir com tolerância Fixed vs alvo reconstruído, que passou. As probabilidades condicionais não são estimadas apenas pela altura da célula.

## Resultados (delta BB por chegada ao nó)
| Fonte | Print | Modelo | Fixed | Flexible |
|---|---:|---|---:|---:|
|Original|55|Nominal|+0,002563|+0,024909|
|Original|55|Tight|-0,001515|-0,022607|
|Original|55|Loose|+0,010512|+0,117513|
|Original|55|Contaminação 10%|+0,005005|+0,067633|
|Original|54|Nominal|+0,000112|+0,000192|
|Original|54|Tight|+0,000109|+0,000207|
|Original|54|Loose|+0,000121|+0,000148|
|Original|54|Contaminação 10%|+0,000140|+0,000131|
|Segunda|55|Nominal|+0,000100|+0,000106|
|Segunda|55|Tight|-0,000147|+0,000388|
|Segunda|55|Loose|+0,000603|-0,000468|
|Segunda|55|Contaminação 10%|+0,000313|-0,000220|
|Segunda|54|Todos|0 (erro numérico)|0|

Print 55 Fixed frequência nominal 24,084475%/23,892944% nas leituras; Flexible 31,146743%/23,821561%. Print 54 Fixed 54,469829%/54,226656%; Flexible 54,458990%/54,226656%. 
A7o call EV muda de +0,560347 a -0,051248 BB; Q9s +0,286707 a -0,116961 BB; A5s +0,718118 a +0,031406 BB. No print 54 original, Q8o call 2% (EV -1,770317 BB) é removido; Fixed desloca massa para KJo (EV -0,733089 BB), ainda negativo; na segunda leitura nenhuma alteração se justifica, sugerindo artefato possível. A frequência fixa pode exigir ação negativa. Não inferir que segunda leitura é necessariamente correta.
A diferença nominal 55 Fixed equivale a ~0,01281 BB/100 mãos HU distribuídas no modelo original e ~0,00048 na segunda leitura, multiplicando pela probabilidade do caminho; não desempenho total do bot/torneio. Print 54 alcança ~0,51% das mãos, ganho negligenciável.

## Gate e decisão
Reprodução e replicação diagnóstica concluídas. Não promove Optimized: ganho é sensível à leitura, divergências restantes de fonte, cenários adversários hipotéticos, ausência de validação fora da amostra e resposta adaptativa. Não executar nova rodada indefinida: uma correção focada já realizada. Preservar Pure; retomar investigação com nova evidência (frequências numéricas por mão ou exportação fiel e ranges/EV verificáveis), sem exigir que usuário refaça 56 screenshots. Não generalizar para non-all-in ou multiway. Print 31 T3o permanece hipótese; ramo BTN open shove 0% exibido não identifica range adversário. Sem validação de motor multiway. Captura 23 BB pode prosseguir, print 57, conforme roadmap. 
Pacote local DeepGT_piloto_02_reproducibilidade.zip inclui scripts, JSON, log e cinco fontes originais; arquivos de execução ainda não publicados integralmente neste repositório.
