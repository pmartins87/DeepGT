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
