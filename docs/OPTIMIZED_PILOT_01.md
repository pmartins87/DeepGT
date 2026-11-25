# Piloto 01 — HU 25 BB, print 55 (estudo offline)
2026-11-24. Autorizado pelo usuário ("Sim, continue") após OPTIMIZED_PROPOSAL.md. Escopo: experimento local de call terminal, não implementação no código principal.
Snapshot Pure: blob 0ba9bb04669e866a15f9723c25083a1da952af15. CSV pais prints 45/52 blob 4078fec62252c6491bde47d4f01b90f80582a1fb e decisão 55 blob 32042d463c6d147d1e762e53f430a4b42b485532. 25 BB iguais, SB open 2 → BB shove 25; call 23, pote final 50, threshold equity 46%. ChipEV, sem antes.

## Motor de equidade
PreFlopEquities.zip SHA256 52a0a87174b0d7cabd5b16fe43387b0807a6abd036e5a61c1aafbc008ecf50c2. 1.624.350 registros únicos ordenados, cobertura exata dos 1326*1225 pares de mãos disjuntas; sem valores fora de 0..100; erro máximo de simetria 0,01 ponto percentual. Cinco confrontos enumerados independentemente em C++ (1.712.304 boards cada): AcAd:AhAs 50/50; AcAd:KhKs 81,26/81,2555; AcKc:7d6d 60,36/60,3628; Tc3d:AhKs 32,83/32,8336; 7c6c:7d6d 50/50. Tabela/independente em %. Confirmação amostral, não validação independente integral; multiway não validado.
## Método
Reconstituir distribuição conjunta de mãos disjuntas ponderada por P(SB open|h) * P(BB shove|v), sem fatores arbitrários de altura de reach. 131 classes com massa positiva e ação 55 resolvida; 0% de massa desconhecida no modelo (não prova ausência de reach verdadeiro devido a pixels). Fold EV 0; call 50*equity-23. Fixed seleciona classes por EV médio ponderado até massa igual a Pure, corte fracionário; Flexible escolhe call se EV>0,05, fold se EV<-0,05, preserva Pure na banda. Empates de ordenação pela ordem da matriz. Critérios anteriores aos resultados: perda máxima de estresse 0,05 BB por chegada, massa desconhecida <=1%, frequência Fixed tolerância 0,5 pp em relação ao alvo reconstruído. Para estresse, pesos de shove nominal s(v) multiplicados por 0,5+1,5*p ou 2-1,5*p, onde p é percentil de equity contra mão aleatória; terceiro modelo mistura 90% s(v)+10% média(s). Cenários hipotéticos, sem dados reais e sem IC amostral; cálculo determinístico da expectativa, não simulação de partidas. 
## Resultado
| Modelo | Pure call % | Fixed call % | Flexible call % | Pure EV | Fixed delta | Flexible delta |
|---|---:|---:|---:|---:|---:|---:|---:|
| Nominal |24,084475|24,084475|31,146743|1,693775|+0,002563|+0,024909|
| Tight |23,965186|23,958696|31,019770|1,593989|-0,001515|-0,022607|
| Loose |24,316956|24,329605|31,394200|1,888249|+0,010512|+0,117513|
| Contaminação 10% |24,178634|24,190875|31,238709|1,773197|+0,005005|+0,067633|
EV em BB por chegada ao nó, não BB/100 mãos de torneio. Pure reconstruída 24,0845%, legenda 24,70% (diferença 0,6155 pp); altura raster havia estimado 24,6642%. Divergência não resolvida; não calibrar para fechar legenda. Pais também têm erros agregados de raster de até 1,309 e 1,001 pp. 
| Mão | EV nominal do call BB | Pure % | Fixed % | Flexible % |
|---|---:|---:|---:|---:|
| A5s |0,718118|94|100|100|
| K8s |0,162783|0|0|100|
| K7s |0,084884|0|0|100|
| Q9s |0,286707|2|0|100|
| KJo |0,490923|0|0|100|
| J9s |0,119297|0|0|100|
| KTo |0,326910|0|0|100|
| T9s |0,257022|100|0|100|
| A7o |0,560347|0|54,110950|100|
## Gate e recomendação
Não promover variante. Frequência Fixed e margem de estresse passam no modelo; ganho nominal Fixed diminuto, sinais negativos contra tight, nenhuma avaliação fora da amostra com dados independentes, erro de reconstrução da fonte acima de 0,5 pp se comparado à legenda, e nenhuma avaliação de resposta adaptativa. Não alegar superioridade. Próximo passo proposto: uma revisão focada de leitura dos pais e reach, replicação no print 54 com sua trajetória própria; depois decidir se há justificativa para expandir. Não tratar print 31 como EV demonstrado, pois shove inicial do BTN exibido 0% e range não identificável. Nenhuma alteração no Pure, postflop, registry ou roteamento. Captura 23 BB segue print 57.
