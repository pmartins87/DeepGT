# DeepGT — Stage 1 R2: formato OpenPPL, RNG e reconciliação de referência (2026-11-26)

## Escopo
Atender à continuidade explicitamente solicitada pelo usuário. Não redefinir a estratégia. R10m é a base; charts 20/23/25 somente acima de 17 BB no futuro roteamento. Candidato exclusivamente offline, sem consumidores no roteador de ações.

## Artefatos
- [Candidato R2](../src/DeepGT_STAGE1_R2_OFFLINE.txt), blob 77d85a07f0b6fe2e8f16974b70ffe8edf6c88692, commit a840752b18b35239c862a4875b53e8f290a83870.
- [Matrizes efetivas R2](../charts/optimized_high_stack/transfer154_r2.csv), ordem matricial AKQJT98765432; F/C/R/J, C significa call, check ou limp conforme nó; '-' é indeterminado; misturas em milionésimos.
- [Manifesto de funções](../charts/optimized_high_stack/manifest154_r2.csv).
- R1, Stage 1 original, Pure anterior, CSVs e overlay manual preservados.

## Implementação
Restaurados do DeepGT anterior (blob 0ba9bb04669e866a15f9723c25083a1da952af15) os callbacks startup/my_turn e as quatro seções handreset, GT_DecisionIndex, GT_RandomReady, GT_Random. FirstAction e BotsActionsOnThisRoundIncludingChecks_BKP são idênticos entre R10m e a base anterior. Nenhum RNG de estudo fixo, nenhum randomround em predicados novos. Cada função de ação usa readiness, lista pura quando aplicável e intervalos de f$GT_Random; primeiro intervalo inclui 0, últimos incluem 1, limites internos pertencem ao intervalo à esquerda. Ações ausentes retornam false; seletor de estudo retorna -1 para estado RNG inválido/mão indeterminada. As funções f$GTStudy_Action_NNN apenas retornam códigos de estudo, não ações nativas. Bucket de preview provisório removido para evitar uso como decisão efetiva sem G2.

22 matrizes não-call 25 BB reconciliadas com os seis CSVs Pure arquivados: 1065 tokens diferem da releitura (incluindo pequenas diferenças e 17 células restauradas; número anterior à sobreposição manual); 2983 células numéricas. Overlay autorizado print 33/JTs = 0/60/40/0. O exemplo de formato fornecido pelo usuário não foi interpretado como instrução para modificar outras frequências; foram usados os CSVs anteriores versionados. 93 candidatas de call preservadas (92 alteradas no Stage 1 original), todas binárias F/C. Outras 39 não-call de 23/20 mantêm estimativas Stage 1. Isso é reconciliação de referência, não verificação visual independente; CSVs Pure de 23/20 completos não estão no repositório.

## Verificação
- 154 nós, 26.026 classes; 16.277 com ação, 9.749 indeterminadas; 2.827 mistas.
- 61 matrizes não-candidatas, 93 candidatas; 1 overlay manual.
- 2.419 seções únicas; comparação dos 1.273 blocos R10m: 1.271 inalterados, somente startup e my_turn modificados para RNG. Nenhuma função estratégica original alterada.
- 114.406 casos de partição no modelo de geração e 114.406 na verificação independente do texto remoto (mesmos vetores, não somar como amostras independentes). Todos os 154 seletores e guards conferidos. Modelo de RNG: dez transições (inclui reset) PASS.
- Nenhuma execução nativa do interpretador, nenhuma simulação de jogo nem teste de lucratividade; geração e auditoria de dados/código estático somente.

## Gate / próximos passos
G1: 22 nós de 25 BB reconciliados por referência; outras fontes raster e suporte indeterminado não homologados. Não exigir revisão visual de centenas de células pelo usuário; preservar estimativa, registrar incerteza, solicitar fonte apenas se indispensável. G2/G3 permanecem abertos (medição de stack inicial, assimetria, histórico, sizing, ownership e fallback). G4: implementação RNG restaurada e modelo PASS; parser e replay nativo em ambiente offline autorizado pendentes. G5: regressão estratégica nativa pendente. Não ativar roteamento ou AutoPlayer. Próxima ação possível: validar carregamento/parse offline do R2, com AutoPlayer desligado e sem mesa conectada; reportar erros ou ausência de erros. Isso não valida sozinho a renovação por decisão.
