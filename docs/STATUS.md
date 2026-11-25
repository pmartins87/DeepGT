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
