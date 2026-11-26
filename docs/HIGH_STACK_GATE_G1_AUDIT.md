# DeepGT — G1: auditoria de integridade e paridade Pure (2026-11-26)

## Resultado
G1 BLOQUEADO; nenhuma promoção, roteamento ativo, mudança de ranges ou alteração em src. Nome oficial DeepGT; R10m identifica somente o baseline deste release. Stage 1 continua congelado. 

Fontes: PREFLOP_REGISTRY.json, optimized_high_stack/audit_154.csv, transfer154.csv, seis CSVs frequencies_25bb*.csv de draft_25bb e predicados de estudo anteriores. Comparação por print e classe (ordem matricial AKQJT98765432 conferida para os 56 CSVs por nó). Ações F/C/R/J; C representa call/check/limp segundo nó. Tokens mistos normalizados de milionésimos para porcentagem. Valores ausentes não tratados como zero.

| Stack | Nós | Células indeterminadas |
|---|---:|---:|
|25|56|3714|
|23|56|3837|
|20|42|2215|
|Total|154|9766|

154 prints únicos, todos com correspondência no audit, sem duplicata de chave stack/origem/Hero/sequence, sem pai ausente na mesma faixa, seis raízes (HU e 3-handed por stack), 169 tokens por print. Isso é integridade referencial, NÃO prova de semântica/observabilidade no motor. 16260 células resolvidas de 26026.

## Paridade não-call 25 BB
22 nós RASTER_UNCHANGED, 2966 células simultaneamente numéricas, 17 Pure visíveis agora sem decisão, zero novas células visíveis exclusivamente Stage 1. Comparação usa maior diferença absoluta entre as quatro frequências, por classe (não é média ponderada por reach). 813 >1 pp, 60 >5 pp, 2 >20 pp. Limiares são diagnósticos, não tolerância de promoção. Lista de 830 divergências em [CSV](../charts/optimized_high_stack/audit_pure25_noncall_diffs.csv).

- Print 10 QJs: 31% fold/69% call na referência, 100% call no Stage 1. Predicados Pure no lote 2 confirmam fronteira 0.31.
- Print 33 JTs: 58% call/36% raise/6% shove na referência, 100% call no Stage 1. Predicados Pure 20–39 confirmam fronteiras 0.58 e 0.94.

Não se trata de otimização de calls contra all-in: ambos são não-candidatos. A releitura não pode substituir Pure sem evidência de melhoria; preservar predicados anteriores como referência para os 22 nós e conferir divergências de CSV versus código. Não inferir ação em células sem reach. As demais 39 matrizes não-candidatas (23/20) precisam de conferência de fonte e os 93 nós candidatos precisam de auditoria de ações permitidas e suporte, sem alterar o objetivo definido pelo usuário.

## Gate de saída e próximo incremento
1. Restaurar paridade de referência Pure nos 22 nós de 25 BB após conferência dos predicados; auditar incertezas 23/20; preservar histórico e arquivo Stage 1.
2. Separar cenários com fonte completa de cenários desconhecidos; não contar cinza como fold.
3. Somente depois avançar roteamento de estudo e testes offline, sem ações em mesa. G2/G3 exigem política explícita para stacks assimétricos, histories e sizings; G4 exige parser/replay nativo; G5 exige ausência de overrides e regressão. Nenhuma captura nova <=17 BB.
4. Bloqueio adicional: fetch_file do src/DeepGT_R10m_STAGE1_OFFLINE.txt retornou blob identificado mas conteúdo vazio mesmo com intervalo de linhas solicitado. Não foi possível verificar byte a byte nem modificar o candidato integral neste ciclo. Recuperar arquivo exato (2.054.109 bytes no tree) e baseline upstream antes de qualquer alteração de código. Não usar R10i ou R8 como substituto.

Decisão técnica conservadora de preservar Pure previamente codificado até demonstração de leitura melhor; nenhuma decisão estratégica nova. Testes executados sobre dados remotos, não sobre OpenHoldem.

## Recuperação do código — 2026-11-26
Bloqueio de acesso ao candidato resolvido via fetch_blob pelo SHA 7e2d4011e963969170f6507ae2bc2ed3b33d0525. Baseline upstream R10m cd9a6d7eb8e85f6e27c355be6e640f5a39f89be8 recuperado pelo mesmo método. Comparação textual confirma prefixo integral exato, 1273 seções baseline, 1429 seções únicas Stage 1. Não é necessário solicitar upload do código. G1 permanece aberto pela divergência de leitura; nenhuma mudança em src.
