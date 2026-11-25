# DeepGT Optimized — proposta de metodologia experimental offline
Data: 2026-11-24. Estado: PROPOSTA PARA DISCUSSÃO, não autorização de implementação nem mudança de roadmap.
Base: STRATEGIC_REVIEW.md, DIRETRIZES.md, PREFLOP_POLICY.md. Referência pura congelável de 25 BB: 56 prints (44 3-handed, 12 HU), src blob 0ba9bb04669e866a15f9723c25083a1da952af15. Há limitações de extração e gates ainda abertos. Não alterar código, fonte bruta, postflop, ou política de captura.

## Hipótese e objetivo
Testar se a realocação de massa de ação entre mãos, com frequências GTO como alvo e restrições de risco, melhora EV em modelos plausíveis offline. Não pressupor que uma mão visualmente forte é melhor para todas as ações. Não presumir superioridade sobre equilíbrio; mistura não implica sacrificar EV em equilíbrio exato. Não chamar variante de GTO exato.
Unidade: EV incremental chipEV em BB, com fold=0 no nó em que é legal. Confirmar premissas de prêmio/ICM antes de extrapolar a utilidade de torneio.

## Dados e avaliação
- Usar registry, CSV por mão e histórico completo; frequências condicionais por ação, multiplicidade 6/4/12 e distribuição de chegada. Para decisões posteriores, reconstruir reach por trajetória da mesma estratégia. Modelar cartas compatíveis e blockers; normalizar distribuição conjunta em multiway, inclusive cartas de jogador que foldou quando modeladas. Cinza/zero reach não significa fold. Identificar nós fora da trajetória e distribuição adversária desconhecida, sem normalização fictícia de zero.
- Call terminal em pote único chipEV: EV = equity * pote final - call incremental. Equity inclui fração do pote em empates. Para side pots calcular por pote; para decisões com jogador ainda a agir, avaliar as respostas, não tratar como terminal.
- Shove: avaliar cada combinação de fold/call/respostas e valores de showdown; para non-all-in, avaliar árvore e política de continuação incluindo postflop (não usar equity crua como EV). Se faltam dados, preservar Pure e marcar avaliação não concluída.
- Arquivo local PreFlopEquities.zip contém tabela heads-up de duas mãos específicas (percentuais com duas casas); validar cobertura, simetria, semântica de empate e precisão contra avaliador independente antes de uso. Não extrapolar para multiway.
- Cenários de adversários: referência reconstruída quando identificável, perturbações predefinidas tight/loose e modelos de sensibilidade; dados observados somente se obtidos legitimamente e separados treino/validação. Nenhum perfil real foi calibrado nesta etapa.

## Otimização proposta
Para nó n, mão h e ação a, x(h,a) é probabilidade candidata, p(h,a) referência, w(h) massa de chegada normalizada. Restrições: 0<=x<=1, soma_a x=1, somente ações legais; F_a=sum_h w(h)*p(h,a), F'_a=sum_h w(h)*x(h,a). Comparar três políticas: Pure; realocação com F'=F; realocação com frequência flexível limitada por segurança. Se não há ações suficientes com EV aceitável, não forçar frequência: preservar referência ou permitir desvio explicitamente medido e comparar. Para realocação dentro do nó, maximizar soma_h,a w(h)*x(h,a)*EV(h,a) sob restrições; avaliar penalidade de afastamento da referência e/ou limite de perda sob cenários adversários. Em fold/call terminal com EV confiável, ordenação pelo EV incremental e corte fracionário na fronteira é solução do caso linear simples. Para várias ações resolver alocação conjunta, não rankings independentes. Reavaliar EV/reach quando políticas anteriores ou posteriores mudarem; otimização local não prova ganho global. Não preencher células fora de suporte por mera conveniência.
Ação robustamente inferior: limite superior da diferença EV(ação)-EV(alternativa) < -epsilon em todos os modelos predefinidos com evidência suficiente. Proposta piloto epsilon 0,05 BB, IC simultâneo/erro numérico documentado; valor não homologado. Ações de diferença inconclusiva mantidas. Evitar confundir EV negativo em um modelo com dominância universal.
Critérios sugeridos de promoção piloto: integridade de dados e probabilidades, cobertura/reach, desvio de frequência <=0,5 p.p. quando restrição viável (registrar precisão raster), ganho pareado fora da amostra com limite inferior de IC95% >0, e nenhuma perda relevante nos cenários de estresse (margem a definir antes da avaliação). Avaliar também exposição a resposta adversária, especialmente HU; sem alegação de exploitability global em 3-handed. Frequência fixa é hipótese, não obrigação superior a EV/robustez.

## Roadmap experimental proposto (não iniciado)
A. Congelar snapshot e corrigir problemas materiais de extração antes de utilizar nós afetados.
B. Validar motor de equity HU e multiway em casos analíticos e independentes.
C. Piloto HU 25 BB, print 55 (open 2, BB shove, SB fold/call), com caminho não nulo observado; print 54 como segundo caso se reach confiável. Print 31 (T3o) e print 56 como controles de caminho com shove inicial exibido 0%; avaliar sensibilidade e não alegar EV sem range identificável.
D. Comparar Pure / frequências fixas / frequências flexíveis sob cenários predefinidos, com amostra e orçamento predefinidos, sementes reproduzíveis, intervalos e relatório de desvios. Encerrar piloto após avaliação única fora da amostra; em falha material identificar causa, no máximo uma rodada corretiva previamente delimitada, ou preservar Pure.
E. Somente se piloto justificar, ampliar a shoves, depois non-all-in e outros stacks. Não executar sem decisão posterior. Captura de 23 BB continua como planejado, próximo print 57.
Referências conceituais: Johanson et al., Computing Robust Counter-Strategies (NeurIPS 2007), https://papers.nips.cc/paper_files/paper/2007/hash/6e7b33fdea3adc80ebd648fffb665bb8-Abstract.html ; Johanson e Bowling, Data Biased Robust Counter Strategies (AISTATS 2009), https://proceedings.mlr.press/v5/johanson09a.html . Referências motivam robustez, não validam esta proposta.

## Execução autorizada — piloto 01
Usuário autorizou estudo offline. Resultados em [OPTIMIZED_PILOT_01.md](OPTIMIZED_PILOT_01.md). Gate de promoção não atingido; não alterar referência ou ativar variante. Critérios permanecem sujeitos à evidência. Próximo passo recomendado: revisão focada de reach e replicação no print 54.

## Piloto 02 — rodada corretiva concluída
Ver [OPTIMIZED_PILOT_02.md](OPTIMIZED_PILOT_02.md). Repetição do print 55 e replicação 54; ganho praticamente desaparece sob segunda leitura. Gate não atingido. Encerrar rodada de testes e preservar Pure; reabrir apenas com nova evidência de precisão ou ranges/EV. Não ampliar sem justificativa.

## Alternativa em discussão — escopo all-in/fold
Sugestão do usuário: restringir a futura variante a decisões de all-in ou fold, realocando massa de ação para combos de maior equity. Não constitui autorização de mudança de roadmap ou implementação. Avaliar separadamente call terminal contra all-in (equity contextual determina chipEV em pote único), shove/fold (equity quando pago não basta: fold equity e blockers também importam) e decisões com terceiros ainda a agir. Preservar Pure e inicialmente deixar nós com ações não all-in fora do escopo. Considerar hipótese conservadora de substituições somente quando a vantagem for material e robusta a ranges plausíveis e incerteza de leitura; frequência ponderada por reach como alvo, não obrigação de inserir ações negativas. Pilotos 54/55 já eram terminais e não passaram no gate: restringir o escopo não resolve a incerteza da fonte. Nenhum teste novo ou mudança de estratégia autorizado nesta discussão.

## Escopo aprovado e demonstração — print 31
Usuário aprovou abranger ambos: fold/call all-in e fold/shove, preservando demais charts. A aprovação define o escopo de pesquisa, não homologa uma variante. Para calls terminais, equity contextual e pot odds; para shoves, EV incluindo fold equity e respostas. Pure intacto. Demonstração numérica do print 31 em OPTIMIZED_T3O_CASE.md. Pilotos anteriores continuam não promovidos; não alterar roadmap de captura nem src.

## Estudo amplo autorizado e concluído
[OPTIMIZED_25BB_BATCH_STUDY.md](OPTIMIZED_25BB_BATCH_STUDY.md): 56 auditadas, 35 candidatas, 30 comparadas numericamente, cinco sem reach identificável; 40.632.000 amostras 3-handed mais expectativa HU. Nenhuma variante passou promoção. Recomenda-se hipótese seletiva de ganho robusto frente a Pure, não implementada. Não repetir testes sem nova evidência.
