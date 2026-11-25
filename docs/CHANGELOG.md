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
