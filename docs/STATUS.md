# Status DeepGT — 2026-11-24

- Gate 00: PASS, baseline copiado de R10i upstream; blob confirmado 5e9b732723f94c88f645c21fbe63c188ec850f5a.
- Gate 01: implementação estática entregue em src/DeepGT.txt, commit bc47eec118cbf0682a80b0ea433818796ff913a5, blob 319a8cf7e0fbd13e5456331fbb6ef59ae2626e7e.
- 1.268 das 1.271 seções originais idênticas; 3 modificadas (notes, startup, my_turn), 4 adicionadas (handreset, GT_DecisionIndex, GT_RandomReady, GT_Random). Zero ranges e zero funções estratégicas postflop alteradas.
- Verificação da cópia remota e modelo em JavaScript: 1.282/1.282 asserts PASS, incluindo 1.268 comparações de seção e 10 transições determinísticas; não representam execução nativa ou mãos simuladas.
- Nenhuma chart GTO ativa. BTN 25 catalogada como preliminar; frequências e buckets ainda requerem revisão.
- R10i upstream é candidato com teste nativo pendente; R10h é baseline operacional upstream segundo a auditoria R10I-OWN-02. DeepGT não foi promovido.
- Próximo passo: executar teste offline do Gate 01 e registrar logs. Depois receber grade de stacks e avançar para Gate 02. Ver docs/GATE_01_RNG.md.

## Lote de nove charts 25 BB (rascunho, sem ativação)
- Dados e 26 predicados isolados publicados em charts/draft_25bb/. 1521 células, 888 com ação estimada, 633 sem ação atribuída, 89688 verificações de partição PASS (modelo, não nativo).
- Catálogo e auditoria: docs/CHARTS_CATALOG.md e docs/AUDIT_25BB_DRAFT.md. Nó 5 bloqueado por desvio de 3,154 p.p.; nó 8 com seis classes de reach pai sem leitura; nó 9 sem chart pai de squeeze. Nenhum resultado foi forçado a coincidir com a legenda.
- src/DeepGT.txt e baseline permanecem intactos. Gate 01 nativo continua pendente; grade de stacks e definição de buckets pendentes. Receber BB vs BTN open + SB call e detalhes numéricos dos casos em revisão. Não ativar predicados nesta fase.

## Checkpoint atual — buckets e esqueleto (substitui pendências antigas de grade e código intacto)
- Grade definida: 25, 23, 20, 17, 15, 12, 10, 8, 6, 4, 2; política em PREFLOP_POLICY.md. Implementados 12 helpers (bucket + 11 predicados), sem consumidores ativos. Stack efetivo R10i é provisório até verificar geometria inicial/assimétrica e histórico.
- src/DeepGT.txt atualizado: commit d6acb112e1c6b1f5861ef2008e87e49208e82168, blob be9bb3963f14824baedf3be4c8273165b31fc0f3. Prefixo inteiro anterior preservado; 1275 -> 1336 seções, 61 novas (12 stack, 26 chart, 23 listas), zero colisões; 24 verificações modeladas de buckets PASS. Nenhuma chart conectada ao roteamento. Nó 5 permanece bloqueado, demais rascunhos não homologados.
- Registry charts/PREFLOP_REGISTRY.json criado; receber demais prints, não preencher nós ausentes artificialmente. Grade resolvida, mas ainda faltam fontes, gates de seleção por nó e RNG nativo. Status de código não significa estratégia GTO ativa.
- Nove JPG originais organizados em pacote ZIP local (entregue ao usuário), paths e SHA256 publicados em sources/25bb/manifest.csv. Upload binário ao GitHub ainda não realizado; pendente ação do usuário, pois conector não recebe bytes dos anexos. Verificar SHA256 após upload. Repositório é público: confirmar que compartilhar originais do aplicativo é autorizado.

## Painel visual permanente
- Registry v2 com metadados de história por stack e relação pai/aresta para dez nós conhecidos a 25 BB. Painel em docs/PREFLOP_DASHBOARD.md: 9 recebidos de 10 identificados nesse stack (6 revisão normal, 2 revisão especial, 1 bloqueado, 1 pendente). Zero homologados/ativos. Não representa cobertura total da árvore.
- Gerador em tools/render_preflop_dashboard.cjs; atualização obrigatória a cada lote. Nenhuma alteração em src, ranges, gates ou baseline neste checkpoint.

## Checkpoint — segundo lote de 25 BB e correção de histórico
- 10 prints adicionais registrados, nós 10–19, com frequências da legenda, trecho visível, pai proposto e prefixo reconstruído a conferir. Não houve extração por mão nem alteração de src neste checkpoint. Os originais binários desse lote ainda não foram arquivados remotamente.
- Correção confirmada pelo usuário: BB shove → BTN fold → SB: fold 79,39%, call 20,61%; BB shove → BTN call → SB: fold 96,58%, call 3,41%. São nós distintos, sem contradição.
- Painel v3: 19 charts recebidas em 20 cenários identificados a 25 BB; 10 a extrair (azul), 6 codificadas em revisão normal, 2 revisão especial, 1 bloqueada, 1 sem print (pai BB vs BTN + SB). Zero homologadas/ativas. Prefixos ocultos não confirmados pelo print isolado; revisar antes de codificar. Não representa toda a árvore.

## Checkpoint atual — 19 charts codificadas; painel simplificado
- 10 charts do lote 2 extraídas (1.690 classes; 404 com reach visível), acrescentadas ao src/DeepGT.txt como 21 predicados e 17 listas, 38 novas seções (1.336 → 1.374); prefixo anterior intacto; 40.804 verificações modeladas de partição passaram. Commit 25a8429153abf61c8b2de6477a0c5de3a0304b86; blob 2e5e62d2d12417d867b16dc7488037e61b3f9fbc. Nenhum consumidor ativo, nenhuma alteração postflop.
- 25 BB: 19 charts codificadas de 20 cenários identificados, 0 recebidas a codificar. Falta a chart pai BB vs BTN raise 2 + SB call. Isso não significa cobertura total da árvore. Os históricos do lote 2 foram reconstruídos a partir dos pais e dos blocos visíveis; ainda devem ser conferidos antes de ativar.
- Detalhes de precisão (incluindo nó 5 do lote 1, resíduos 0,15% e 0,03% nos nós 12/14) ficam na auditoria, não são tarefas delegadas ao usuário. Gate 01 nativo e validação de integração seguem pendentes. O painel simplificado contabiliza código escrito, não homologação.
- 19 JPG originais organizados em ZIP único, hashes locais conferidos 19/19; manifestos de ambos lotes no GitHub. Upload dos binários ao GitHub continua não realizado pelo limite do conector. Não pedir reenvio das imagens existentes. Arquivo principal, CSVs, painel e documentação estão no GitHub.

## Checkpoint — lista contínua e revisão estratégica
- Painel e gerador atualizados: lista global 1–19 no topo, próximo print 20; cenários sem print separados. Nenhum print novo recebido neste checkpoint. Código e baseline não modificados.
- Política de revisão estratégica criada (STRATEGIC_REVIEW.md). Exemplo T3o em BB contra BTN open shove 25 e SB call registrado como candidato EX-001, fonte ainda não recebida. Não confundir com nó 16. Não afirmar EV sem ranges/premissas nem aplicar ajuste a outros nós. As 19 charts continuam como referência extraída em rascunho offline.

## Checkpoint atual — prints 20–39, 25 BB
- 39 charts codificadas em rascunho de 44 nós conhecidos; nenhuma recebida sem codificação. Último print 39, próximo 40. Cinco lacunas: BTN R2/SB call/BB; BTN fold/SB open; BTN fold/SB shove/BB; BTN fold/SB R3/BB shove/SB; BTN fold/SB R3/BB R9/SB shove/BB.
- src/DeepGT.txt atualizado no commit 087b8ca4f02080bc0d333a30980efce02c261c5c, blob 3712a1dfbcd850b80c09dea417c5cd477768c2e5. 95 novas seções (49 charts, 46 listas), 1374 → 1469, prefixo anterior íntegro. 3380 classes extraídas, 2279 visíveis, 230179 verificações de partição em modelo PASS. Nenhum consumidor ativo; zero alteração postflop ou baseline.
- EX-001 implementada no rascunho do print 31: T3o fold 100%, source CSV preserva estimativa 69% fold / 31% call. Não afirmar EV exata sem ranges. Nós 32 e 35 têm divergência raster elevada; detalhes em auditoria. Outras decisões contraintuitivas requerem análise antes da ativação.
- Originais 1–39 em ZIP local, manifestos no GitHub; binários remotos continuam pendentes. Gates nativos e integração não concluídos.

## Checkpoint atual — prints 40–42 e referência pura
- 42 charts codificadas de 44 cenários conhecidos a 25 BB; último print 42, próximo 43. Faltam somente dois nós conhecidos: BTN raise 2 → SB call → BB age; BTN fold → SB age. Confirmar cobertura do aplicativo antes de avançar a 23 BB.
- src/DeepGT.txt commit d20c72e073284c49ad27832fca1529d3375ce6a4, blob 423ab386822dac07fa04dfd12a95429ea8e50557: 12 seções novas (6 predicados, 6 listas), 1481 totais; 507 classes, 306 visíveis, 30906 testes de partição modelados. Sem consumidores ativos, sem mudança postflop. EX-001 revertida: T3o 69/31 estimado restaurado em src e predicados isolados. Variante ajustada não criada.
- Desvios estimados de call nos prints 40/41/42: 1,167/0,391/0,043 p.p. (fonte raster, não homologada). Originais organizados em ZIP local e manifesto publicado; JPGs no GitHub ainda pendentes.

## Checkpoint atual — prints 43–54, 25 BB
- 54 charts codificadas em rascunho de 56 nós conhecidos. 3-handed de origem: 44/44 (prints 43/44 incorporados neste ciclo); HU nativo: 10/12 (45–54). Último print 54, próximo 55. Faltam HU SB R2 → BB shove → SB e HU SB open shove → BB. Confirmar cobertura antes de passar a 23 BB.
- src commit 04eb2ba9d1c02a369b4e57e19e5c022aabca3229, blob d9ead2a3237d26b31eb8655a7ee9d9f2d07b3412: 72 seções novas (38 charts, 34 listas), 1481 → 1553, prefixo íntegro. 2028 células, 1631 visíveis, 164731 testes modelados de partição PASS. Sem consumidores ativos, alteração estratégica ou postflop. Referência pura mantida.
- Print 49: desvio agregado de 11,457 p.p. por reach fino/estimativa raster, necessita revisão técnica antes de validação. Print 47: legenda de shove truncada, valor exato não registrado. Outros desvios registrados na auditoria. ZIP 54 originais organizado localmente, manifesto novo publicado; binários remotos pendentes.

## Checkpoint atual — fechamento da captura 25 BB (prints 55–56)
- 56/56 nós identificados com charts codificadas em rascunho offline: 44 de origem 3-handed, 12 HU nativo. Sem nós conhecidos sem print a 25 BB. Próximo print global 57, stack 23 BB. Cobertura de captura não equivale a validação nativa nem prova de cobertura de árvores alternativas.
- src/DeepGT.txt commit 3fb8266bc787013fafd1e83c644fa754ff86efc7, blob 0ba9bb04669e866a15f9723c25083a1da952af15: 1553 → 1561 seções, 4 listas e 4 predicados novos; prefixo intacto. 338 classes, 301 com reach resolvido; 30401 testes modelados de partição PASS. Nenhum consumidor ativo; referência pura e postflop preservados.
- Estimativa call: print 55 24,664% vs 24,70%; print 56 20,617% vs 20,79%. Faixas finas não resolvidas continuam sem atribuição. Ressalvas anteriores (inclusive prints 5 e 49) e gates nativos continuam pendentes. ZIP cumulativo de 56 JPGs íntegro localmente; manifestos remotos, binários JPG remotos pendentes.

## Piloto experimental Optimized 01
Print 55 HU: tabela HU completa conferida, cinco confrontos verificados independentemente. Pure/Fixed 24,0845% call, Flexible 31,1467%; ganho nominal Fixed +0,002563 BB, Flexible +0,024909 BB por chegada. Contra modelo tight ambas perdem. Gate de promoção não atingido: divergência de reconstrução, falta avaliação independente real. Ver OPTIMIZED_PILOT_01.md. Sem alteração de src ou cobertura; 56 prints, próximo 57 (23 BB).

## Piloto Optimized 02 — encerrado sem promoção
Print 55 reproduzido; print 54 replicado. Segunda extração altera significativamente os ganhos: 55 Fixed +0,000100 e Flexible +0,000106 BB/chegada nominal, 54 ambos ~0. Divergências de call vs legenda >0,5 pp permanecem. Sem validação independente real ou resposta adaptativa. Uma rodada corretiva executada; não promover. Ver OPTIMIZED_PILOT_02.md. src/registry intactos; captura 23 BB pode prosseguir, print 57.

## Estudo amplo All-in 25 BB
56 fontes auditadas; 35 candidatas binárias, 30 comparações diagnósticas (25 origem 3-handed, 5 HU), 5 sem reach nominal identificável, 21 mistas preservadas. 40.632.000 amostras MC, ranking 300.000 testes independentes iguais. 13 dos 25 nós 3-handed passam gate preliminar local, nenhum ganho com IC positivo em todos os modelos retidos; nenhum HU passa nas duas leituras. Sem promoção. Ver OPTIMIZED_25BB_BATCH_STUDY.md. src/registry preservados; próximo print 57.
