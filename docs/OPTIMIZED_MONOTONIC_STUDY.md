# Monotonicidade — experimento offline 25 BB (2026-11-25)
Autorização do usuário: testar restrições de monotonicidade. Referência: OPTIMIZED_25BB_BATCH_STUDY.md e OPTIMIZED_25BB_SELECTION.md; nenhuma alteração de política ativa ou promoção.

## Protocolo
Auditoria das 35 charts binárias na segunda leitura raster. Restrição p(forte) >= p(fraca) para pares em ordem de rank e famílias de mesma carta alta e mesmo suitedness, entre classes adjacentes no suporte disponível. Sem ordenação entre famílias. Trata-se de preferência estrutural, não teorema de dominância de equity. 70 inversões em nove charts: 31=27, 56=17, 30=11, 29=6, 16=4, 42=2, 6=1, 11=1, 50=1.
Comparação por programação linear sobre estatísticas armazenadas do estudo anterior (40.632.000 amostras MC, sem novas simulações). 30 nós únicos, 34 avaliações contando as duas leituras HU quando disponíveis. Cinco bloqueados por reach nominal não identificável: 16,29,30,31,56. 21 mistas fora do escopo. Reproduzidos os resultados anteriores de Fixed, Conservadora e Maximin com tolerância 1e-8 BB. MonoFixed maximiza EV nominal preservando massa nominal da ação e impondo monotonicidade. MonoRobust maximiza o mínimo do ganho frente à Pure nos modelos de ajuste, com restrições de monotonicidade, sem fixar frequência; ação bloqueada se em todos os modelos de ajuste EV+1,96 SE < -0,05 BB. Fora do suporte avaliado, conservar referência. O shove binário 20 foi testado como diagnóstico, com EV de ação incluindo respostas e fold equity, não como prova de ordem universal. Não recalcular a árvore conjunta. O conjunto anteriormente retido é reutilizado nesta etapa exploratória e não constitui nova validação independente. Nenhuma política deve ser promovida por esses números.

## Comparação: 13 nós de origem 3-handed que passaram no filtro preliminar local anterior
| Política | Inversões no suporte | Pior delta (BB/chegada) | Nós com perda >0,05 BB | Nós com delta positivo em todos os três modelos de avaliação |
|---|---:|---:|---:|---:|
| Pure | 3 | 0 | 0 | 0 |
| Fixed | 8 | -0,022853 | 0 | 0 |
| Conservadora | 3 | -0,205075 | 9 | 0 |
| Maximin | 5 | -0,094647 | 3 | 1 |
| MonoFixed | 0 | -0,022853 | 0 | 1 |
| MonoRobust | 0 | -0,009011 | 0 | 1 |
Nenhum candidato tem limite inferior pontual de 95% positivo em todos os modelos nesses 13 nós. Todos os modelos são sintéticos e condicionais; não há validação contra jogadores reais. Nas 34 avaliações, incluindo diagnósticos bloqueados no filtro, a pior perda foi -0,018087 para MonoRobust e -0,022853 para MonoFixed. Zero inversões no suporte comparável de ambas. Não confundir com garantia de monotonicidade em células sem reach/legibilidade. Nenhum HU passa em ambas as leituras.

## Print 42
| Política | Call nominal (%) | KQo (%) | KJo (%) | KTo (%) | Deltas nominal/tight/loose (BB) |
|---|---:|---:|---:|---:|---|
| Pure segunda leitura | 15,2776 | 7,4074 | 12,9630 | 53,7037 | 0/0/0 |
| Maximin | 17,7919 | 0 | 0 | 100 | +0,013621/+0,002649/+0,014667 |
| MonoFixed | 15,2776 | 0 | 0 | 0 | +0,003827/+0,006766/+0,004388 |
| MonoRobust | 16,1995 | 0 | 0 | 0 | +0,011721/+0,008725/+0,006174 |
MonoRobust apresenta pior delta positivo maior que Maximin, mas limites inferiores pontuais dos três deltas +0,001962/-0,000958/-0,003680; não passa gate de promoção. A escolha de fold das três mãos evita exigir call de KQo só para corrigir a inversão. A Pure publicada usa extração diferente (6/11/51), não alterar seus valores.

## Decisão
MonoRobust é candidata preferencial para nova validação independente; não homologada. Recomendar teste focado no print 42 com novas amostras e sensibilidade da leitura/ranges; para nós sem reach nominal, novas hipóteses explícitas ou dados, sem confundir correção estrutural com ganho. Print 31 Conservadora condicional continua no catálogo experimental; demais não alterados nesta etapa. Preservar catálogo histórico v0.1 e DeepGT Pure. Próximo print 57/23 BB permanece reservado. Código e registry não modificados. Reprodutibilidade local: experiment.py, results.json, comparison.csv e run.log; requer pacote do estudo anterior e PreFlopEquities.zip.