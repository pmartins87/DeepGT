# Gate 01 — RNG por decisão preflop
Data: 2026-11-24. Candidato offline, não homologado.

## Fundamento da implementação
Código OpenHoldem fornecido no projeto: CSymbolEngineRandom.cpp/.h: random chama Random_0_1 a cada avaliação; randomround muda por street, randomhand por mão, UpdateOnMyTurn do motor RNG é vazio. CEngineContainer chama UpdateOnMyTurn em cada heartbeat com IsMyTurn verdadeiro. CSymbolEngineIniFunctions avalia callbacks reservados. CSymbolEngineMemorySymbols persiste os registros até reset explícito ou conexão; aceita me_st_X_random e me_st_X_f$Func. CParseTreeOperatorNode e CParseTreeTerminalNodeUserVariable confirmam que SET grava e continua para o próximo WHEN. Manual OpenHoldem, seção Ini-functions, confirma f$ini_function_on_handreset. OpenPPL Library: BotsActionsOnThisRoundIncludingChecksAdapted soma didchec/didcall/didbetsize/didrais, com correção de update; ações manuais não são contabilizadas.

## Contrato
f$GT_DecisionIndex é 1 + contador BKP para história consistente. Primeira ação deve ter contador 0; posterior deve ter contador positivo; caso contrário índice 0. No callback my_turn preflop, se índice > memória, sortear random uma vez e armazenar índice. Na mesma decisão, ler apenas me_re_GTRandom. Em contador regredido ou inválido, não sortear novamente, e f$GT_RandomReady retorna falso. Reset de ambos registros no startup e handreset. O código de backup original continua após os SET novos. Nenhum consumidor estratégico adicionado neste gate.

O contador representa ações registradas pelo AutoPlayer, não necessariamente ações confirmadas pela mesa. Uma ação falha, contador incorreto, atraso de scrape, reconnect ou cache pode quebrar a hipótese de identidade da decisão. Uma ação manual não permite demonstrar renovação nativa pelo contador. Não confundir novo número com número diferente: sorteios independentes podem coincidir. PRNG nativo é discreto e pode incluir 0 e 1. A futura política de intervalo deve tratar ações puras e os extremos. Não usar stale RNG quando readiness é falso; resolver ownership/fallback antes de ativar cada chart.

## Validação já efetuada
Cópia do baseline com blob idêntico; diff por seções: 1268/1271 intactas, 3 alteradas, 4 adicionadas. Teste em modelo com sequência de 10 transições (1a decisão, repetição, não é turno, 2a decisão, contador inconsistente, recuperação, 3a decisão, regressão, pós-flop, reset). PASS. Não é um teste de parser, OpenHoldem, ações reais ou distribuição estatística nativa.

## Gate nativo offline/autorizado
1. Carregar src/DeepGT.txt em ambiente de teste, AutoPlayer desligado; nenhum Parse Error / Unknown symbol / Illegal character.
2. Observar f$GT_DecisionIndex, f$GT_RandomReady, f$GT_Random, me_re_GTDecision, me_re_GTRandom, f$FirstAction, f$BotsActionsOnThisRoundIncludingChecks_BKP, ismyturn, betround e logs ini/memory. Vários heartbeats da mesma decisão: uma gravação, valor constante.
3. Usar ambiente de simulação que reproduza ações registradas (não apenas ações manuais) ou harness instrumentado. Confirmar segunda/terceira decisão e uma gravação por índice crescente; fora do turno e pós-flop não gravam. Testar regressão, inconsistência, reset e conexão. Confirmar também ordem de avaliação/caching entre ini e consumidor. Sem ambiente capaz, manter gate pendente.
4. Parar em qualquer mismatch. Não promover nem ativar chart; anexar trace e reproduzir causa antes de corrigir. Não alterar o R10i congelado.

## Continuidade R10m — DeepGT Stage 1 R2 (2026-11-26)
Infraestrutura anterior reaproveitada no candidato [R2](../src/DeepGT_STAGE1_R2_OFFLINE.txt). FirstAction e contador BKP idênticos no R10m; callbacks startup/my_turn restaurados, handreset e três helpers adicionados. As 154 charts isoladas usam f$GT_RandomReady e f$GT_Random. Valor fixo de estudo eliminado. Dez transições em modelo PASS; validação nativa offline ainda pendente, não reabrir decisão de arquitetura. Ver [relatório R2](DEEPGT_STAGE1_R2.md).
