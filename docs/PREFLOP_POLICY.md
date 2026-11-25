# Política vinculante de buckets e ingestão preflop
Data: 2026-11-24. Decisão explícita do usuário.

## Stacks
25: (23,+infinito); 23: (20,23]; 20: (17,20]; 17: (15,17]; 15: (12,15]; 12: (10,12]; 10: (8,10]; 8: (6,8]; 6: (4,6]; 4: (2,4]; 2: (0,2]. Zero ou negativo: inválido. Os limites pertencem ao bucket inferior; acima de 25 é aproximação autorizada. Não substituir helpers antigos. f$GT_StackBucket e onze f$GT_stack_* são novos, isolados. Usam provisoriamente f$EffectiveStack_BKP; não assumir que este valor prova stacks iniciais iguais ou preserva stack do nó após fold. Verificar snapshots, assimetria e topologia antes de ligar qualquer consumidor.

## Fluxo obrigatório a cada lote
1. Ler DIRETRIZES, ROADMAP, STATUS, CHARTS_CATALOG, CHANGELOG, GATE_01_RNG, este documento e registry. Ler auditorias dos nós afetados e comparar src/DeepGT.txt com o baseline.
2. Arquivar JPG original sem recompressão em sources/<stack>bb/ com nome de cenário, SHA256 e manifesto. Se binário não puder ser transferido, registrar pendência explícita e preparar pacote, sem declarar arquivamento remoto.
3. Identificar histórico exato (posição, jogadores, ordem, raise total, ação e stack inicial), distinguir reach de ação condicional. Não presumir mesmos sizings para todos os stacks.
4. Extrair todas as 169 classes em dados rastreáveis; classificar casos incertos, conferir frequências agregadas e reach com nó pai quando disponível. Não preencher lacunas artificialmente.
5. Gerar listas puras e charts mistas, atualizar código de rascunho e registry progressivamente conforme prints recebidos. Slots ausentes são MISSING, nunca fold implícito. Nenhuma estratégia de nó não recebido pode ser inventada.
6. Verificar colisões, integridade das seções originais, intervalos, cobertura e testes de modelo. Atualizar documentação e status no mesmo lote. Código novo fica sem consumidor ativo até cumprir gates de fonte, RNG, história, sizing e fallback.
7. Só ativar após validação offline nativa e autorização de promoção pertinente. Manter postflop e roteamento legado intactos enquanto não houver necessidade comprovada.

## Estrutura
sources/ originais; charts/ dados, predicados e registry; src/DeepGT.txt candidato incremental; baseline/ R10i imutável; docs/ decisões e auditorias. Registry é catálogo extensível de intake e não prova que todas as histórias são legais em todos os stacks.
