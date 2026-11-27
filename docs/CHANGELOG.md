# Changelog

## 2026-11-24 — Gate 00/01 (candidato offline)
- Baseline R10i copiado integralmente, commit ce3b096b8bceb0818c227f3fa75db8df1642436b.
- Candidato src/DeepGT.txt criado, commit bc47eec118cbf0682a80b0ea433818796ff913a5.
- Randomização por índice de decisão preflop; armazenamento único, reset, readiness e proteção contra contador regredido.
- R10i original, ranges e postflop estratégico intactos. Nenhuma chart GTO ativada; validação nativa pendente.
- Fonte de verdade e catálogo inicial instituídos.

## 2026-11-24 — lote 25 BB (rascunho)
- Reconstruídos nove históricos preflop, CSV 169 classes por nó, código isolado de 26 predicados e auditoria condicional à chegada ao nó.
- Nenhuma integração em src. Cinza não equivale a fold; revisão obrigatória para faixa estreita/ausente. Nó 5 bloqueado; nó 9 sem pai de squeeze. Gate 01 e buckets permanecem pendentes.

## 2026-11-24 — definição de buckets e esqueleto
- Decisão vinculante de 11 níveis e limites conforme PREFLOP_POLICY.md.
- Acrescentadas 61 seções isoladas a src/DeepGT.txt, sem consumidores ativos: bucket, 11 helpers, 26 charts e 23 listas. 24 testes modelados de fronteira PASS; prefixo Gate 01 intacto.
- Registry extensível, manifesto dos nove JPGs e política de ingestão publicados. Binários organizados em ZIP entregue ao usuário; upload remoto pendente. Atualização contínua de docs obrigatória.

## 2026-11-24 — painel visual permanente
- Preferência explícita do usuário registrada: sequência/Hero, árvore e matriz visual sempre disponíveis e atualizadas no GitHub.
- Registry v2, painel Markdown/Mermaid e gerador versionados; README oferece acesso direto. Sem mudança estratégica.

## 2026-11-24 — histórico parcial e segundo lote recebido
- Corrigida a interpretação de BTN fold versus BTN call diante de shove do BB; registrados 10 nós como recebidos, a extrair, com histórico visível separado do reconstruído.
- Painel e gerador atualizados para distinguir recebimento de codificação. Protocolo de conferência obrigatório. Sem alteração estratégica.

## 2026-11-24 — lote 2 codificado e acompanhamento simplificado
- Acrescentadas dez charts ao candidato offline, 38 novas seções; sem ativação e sem mudanças nas seções anteriores. CSV, predicados e manifesto publicados.
- Painel principal simplificado por solicitação do usuário: codificada, falta print, recebida ainda a codificar apenas se necessário. Ressalvas de precisão e homologação permanecem em auditoria. 19 charts codificadas de 20 cenários identificados no stack 25 BB.
- ZIP único com 19 originais e hashes conferidos preparado; transferência de JPGs ao GitHub pendente por limitação do conector.

## 2026-11-24 — lista cumulativa e revisão de decisões contraintuitivas
- Painel inicia com lista global 1–19; próximo print 20. Cenários sem fonte separados. Gerador verifica numeração sem lacunas/duplicatas.
- Política de revisão estratégica e candidato EX-001 (T3o, fonte ainda não recebida) registrados; sem alterações de ranges/código nesta etapa.

## 2026-11-24 — prints 20–39
- 20 charts acrescentadas ao candidato offline, 49 predicados e 46 listas; 1469 seções totais. Registro e painel atualizados para 39/44 cenários conhecidos, próximo print 40.
- EX-001 T3o aplicada apenas no print 31, mantendo extração bruta. Manifesto, auditoria e CSV publicados. ZIP cumulativo de originais preparado; upload remoto de JPGs pendente.

## 2026-11-24 — prints 40–42 e referência pura
- Acrescentadas três charts offline, 12 seções; painel 42/44, próximo 43. CSV, manifesto, auditoria e predicados publicados.
- Revertida EX-001 no código e no rascunho isolado; restaurada estimativa original T3o. Usuário decidiu preservar referência pura e estudar variante de realocação depois. Sem alteração postflop ou roteamento.

## 2026-11-24 — prints 43–54 e HU nativo
- Acrescentadas 12 charts, 72 seções; 1553 totais. 54/56 nós conhecidos, 44/44 de origem 3-handed, 10/12 HU nativo. Lista global e árvores separadas por origem atualizadas. CSV, manifesto e auditoria publicados. Referência pura preservada, nenhuma ativação.

## 2026-11-24 — fechamento de captura 25 BB
- Prints 55–56 incorporados ao candidato offline (4 predicados, 4 listas; 1561 seções totais). Registry v7 e painel: 56/56 nós conhecidos, 44 3-handed e 12 HU. Próximo print 57 (23 BB).
- CSV, auditoria e manifesto publicados; ZIP 56 originais local, binários remotos pendentes. Referência pura e baseline/postflop preservados; validação e integração ainda pendentes.

2026-11-24: registrada proposta de metodologia offline para variante otimizada (OPTIMIZED_PROPOSAL.md); sem mudanças de código, estratégia ou roadmap vigente.

2026-11-24: piloto 01 de otimização offline realizado, resultados/limitações documentados; nenhuma alteração de código estratégico.

2026-11-24: piloto 02 de replicação e sensibilidade raster concluído, sem promoção nem alteração de código/registry. Relatório OPTIMIZED_PILOT_02.md.

2026-11-24: estudo amplo All-in de 56 charts auditadas/30 comparadas, validação amostral de ranking multiway, sem promoção nem alteração de código. Relatório OPTIMIZED_25BB_BATCH_STUDY.md.

2026-11-25: catálogo experimental de seleção individual das 56 charts 25 BB (55 preservadas, 31 Conservadora condicional), alternativa 42 Maximin separada, manifesto e frequências publicados. Sem promoção ou mudança em src/registry. Ver OPTIMIZED_25BB_SELECTION.md.

2026-11-25: experimento MonoFixed/MonoRobust offline, auditadas 35 charts binárias e 30 comparadas numericamente. Sem alteração de charts, código ou registry. Relatório OPTIMIZED_MONOTONIC_STUDY.md.

2026-11-25: catálogo de pesquisa híbrido v0.2, 56 charts, oito modificadas experimentalmente, 16 pendente; 53.880.000 amostras novas. Manifesto/frequências versionadas, sem alteração de src ou registry.

2026-11-26: ingestão dos 56 prints de 23 BB via ZIP/RAR; mapeamento 57–112, painel regenerado e extração raster preliminar local; código preservado, revisão pendente.

## Ingestão de 20 BB — 2026-11-26
42 imagens (30 origem 3-handed e 12 HU nativo), ZIPs íntegros e hashes distintos. Conferência visual dos menus e históricos: nenhuma lacuna na árvore oferecida pelo app. 14 famílias de 25/23 BB não aplicáveis: prints de referência 7–16 (raise 8 removido no squeeze após BTN raise e SB call; novo print 119), 34–35 (raise 9 removido após limp/iso 3; novo print 137), 39–40 (raise 9 removido após open SB 3 com BTN fold; novo print 140). Numerados 113–142 3-handed e 143–154 HU, por ordem cronológica dentro de cada origem e mantendo a convenção de listar 3-handed antes de HU. Arquivos originais nas duas cargas do usuário; sem upload binário ao GitHub. Frequências individuais ainda não extraídas e código intacto. Próximo print 155, stack 17 BB.

2026-11-26: redefinido escopo de pesquisa Optimized para call terminal com frequência fixa e equity máxima; políticas anteriores arquivadas, sem alteração de código ou charts.

2026-11-26: definido critério simplificado de estudo de calls contra all-in por equity absoluta HU e frequência original; tabela de 169 classes conferida, sem alteração de código ou charts.

2026-11-26: nova especificação R10m e corte >17 BB; Stage 1 offline com 154 funções de estudo, 93 calls alvo e auditoria; sem roteamento ativo, sem mudança de Pure/registry. Captura restante não necessária para este release.

## 2026-11-26 — DeepGT, auditoria G1
Nome oficial DeepGT. Verificada integridade referencial dos 154 históricos e comparada releitura dos 22 nós não-call 25 BB com a referência Pure: 830 discrepâncias listadas (813 >1 pp e 17 células perdidas). G1 bloqueado, nenhum código estratégico modificado; relatório [auditoria G1](HIGH_STACK_GATE_G1_AUDIT.md).

2026-11-26: recuperação integral do Stage 1 e baseline R10m via blob SHA; prefixo textual exato e contagem de 1429/1273 seções confirmados. Sem mudança estratégica ou em src.

2026-11-26 — Stage 1 R1 offline: correção visual explicitamente autorizada de JTs no print 33 (60 call/40 raise), somente f$GTStudy_Action_033 alterada; overlay versionado, candidato anterior preservado e cópia remota conferida. Nenhuma promoção.

2026-11-26 — Stage 1 R2: recuperação da infraestrutura RNG já acordada e conversão das 154 charts ao formato list_ + f$chart_, restauração de referência nos 22 nós não-call de 25 BB e overlay JTs mantido. 2.419 seções únicas, modelo e verificação remota 114.406 partições PASS, sem ativação. [Relatório](DEEPGT_STAGE1_R2.md).

2026-11-26 — R3 offline: sincronização com R10m mais recente, overpair na defesa HU flop overdonk, notas upstream incorporadas. 2419 seções únicas; todo o conteúdo adicional DeepGT preservado. [Relatório](DEEPGT_STAGE1_R3.md).

2026-11-26 — DeepGT integrado: 154 rotas, 154 dispatches, 33 sizings; f$preflop conectado às charts, legado preservado; stack efetivo congelado na primeira decisão, histórico anterior armazenado. [Relatório](DEEPGT_INTEGRATED.md).

## 2026-11-26 — hotfix ASCII
Blob integrado 2b5807a787e5c642d2d549d8d519506424c10896, commit b1a7785499c67b66584edcb1efcade4d40871441. 299 caracteres Unicode em 142 linhas de comentários normalizados; nenhuma mudança executável. Repetir parser offline. Gate ASCII integral obrigatório.

## 2026-11-26 — hotfix hand$
Corrigidas 5678 expressoes de classe em 373 predicados de chart; 2661 suited e 3017 offsuit. Blob 9257350487bffd678c9db0604f03e6c8662788f2, commit 5db1e153d1c11db40ac2a95740b72ef0a0642e2d. Sem mudanca de frequencias, listas ou roteamento. Parser nativo pendente.

## Notação nativa offsuit — 2026-11-26
Revisão solicitada pelo usuário: a abreviatura existe no OH como `$XYo` (sem prefixo hand). CSymbolEngineCards::IsHand (linhas 26994–27064 do dump local) interpreta o/O como suited=2, rejeitando hole cards do mesmo naipe, e s/S como suited=1. EvaluateSymbol encaminha símbolos `$` a IsHand; o tokenizer reconhece `$` inicial como identificador. O engine hand$ é distinto e não reconhece o sufixo o como filtro de naipe. Substituídas 3017 expressões `(hand$XY && !issuited)` por `$XYo` em 300 seções de charts. Ambas são equivalentes em NLHE com cartas válidas; mantidas expressões suited e pares. Blob 10e49e9db803095e534064679ae94d76c46b8ff3, commit 1dca70781b3162ff497fec45f9dbdd0a66e2d89a. Releitura remota e transformação inversa reproduziram integralmente o blob anterior; ASCII, linhas, seções e política preservados. Parser nativo pendente; auditoria ampliada ainda não concluída.
