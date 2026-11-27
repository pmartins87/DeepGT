# Auditoria de classificadores R10m × 154 rotas — 2026-11-26

Escopo autorizado: auditoria offline, sem alteração de código executável. Fonte integrada blob 10e49e9db803095e534064679ae94d76c46b8ff3 e manifesto charts/optimized_high_stack/route_manifest154.json. Classificadores da base R10m são fonte de verdade; não introduzir nova regra de committed. Matriz é inventário de correspondência candidata, não prova de cobertura nativa.

## Inventário
- unopened: 9
- open-raise: 15
- 3bet-raise: 20
- 4bet-shove: 39
- 3bet-shove: 27
- open-shove: 15
- limp: 6
- ISO-raise: 6
- limp-reraise-raise: 5
- limp-reraise-shove: 6
- ISO-shove: 6
Total 154. Nenhuma rota contém três raises não all-in; nenhum dos 33 sizings de saída normal constitui 4-bet. A terceira ação agressiva, quando existe, é shove. Limp não é raise. Não criar 4bet Normal/Over para este escopo.

## Lacunas demonstradas
- BTN facing 3bet usa AmountToCall <=4 vs >4. Squeeze nominal de 8 após abertura 2 (nós 7/64) já é Over (6 a pagar). SB que pagou abertura 2 frente a squeeze 8 (8/65/10/67) tem último Call e 6 a pagar; helper ISO tem corte 2.5 e não distingue squeeze de ISO. SB abre 3 e enfrenta 9 (39/97): 6 a pagar, Over pelo helper de 3H. Não confundir Over com all-in literal.
- BB enfrentando limp-reraise 9 após ISO 3 (34/92) tem 6 a pagar, excede corte 5 de helper 3H, se demais condições do helper satisfeitas; HU 7.5 após 2.5 (48/104/146) tem 5 a pagar e f$bb_got_LimpRaised_2H não tem split. Logo reuso literal não garante preservar todos os nós canônicos. Não inventar novos limiares.
- Cold 3bet (20/77/123) e cold shove exigem composição de raises, posição e identidade do agressor; helpers que exigem ação anterior do Hero não se aplicam. Terceiro jogador fold/call continua indispensável. Não remover histórico nem igualdade relativa de contribuições para comprovar call.
- BB open Normal e Over usam corte 2 AmountToCall, MNR <1.5, MID 1.5–3, 4xUp >3; MID e Over se sobrepõem (2,3] sem committed. A política real do R10m usa MNR/MID e 4xUp em ramos 3-handed; não tratar todo Over como shove sem observar contexto. HU usa Normal/Over. f$OpponentIsRaisingCommitted permanece somente onde já integra lógica legada.
- f$bb_got_4beted é amplo (BB e não primeira ação, exceto certas limp-reraises); não comprova sozinho número de raises. Usar histórico existente para auditoria.
- Classificação de uma aposta não equivale ao estado all-in, nem garante que uma resposta prescrita para shove seja válida diante de raise não all-in.
- Recomendação: não criar novos classificadores nesta etapa; resolver conflitos canônicos explicitamente antes de modificar roteamento. Preservar as 154 charts, frequências, sizing de saída, RNG, buckets, fallback, postflop. Para situações sem ramo compatível, manter fallback. Testar todos os nós canônicos e transições antes de ampliar cobertura; parser e replay nativos ainda não executados.

## Matriz por rota (proposta, não homologada)
| Print | BB | Hero | História | Família | Base candidata R10m | Observação |
|---:|---:|---|---|---|---|---|
| 1 | 25 | BTN | Pote não aberto | unopened | f$UnplayedPot | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 2 | 25 | SB | BTN raise 2 | open-raise | f$sb_vs_Open_Raise_Normal | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 3 | 25 | BB | BTN raise 2 → SB fold | open-raise | f$bb_vs_Open_Raise_MNR | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 4 | 25 | BTN | BTN raise 2 → SB fold → BB raise 6 | 3bet-raise | f$btn_got_Raised_Normal/Over | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 5 | 25 | BB | BTN raise 2 → SB fold → BB raise 6 → BTN shove | 4bet-shove | histórico + raiser + all-in; f$bb_got_4beted somente quando aplicável | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 6 | 25 | BTN | BTN raise 2 → SB fold → BB shove | 3bet-shove | histórico + raiser + all-in; família got_Raised/Over quando aplicável | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 7 | 25 | BTN | BTN raise 2 → SB call → BB raise 8 | 3bet-raise | f$btn_got_Raised_Normal/Over | Conflito nominal com limite legado; não promover Over para shove automaticamente. |
| 8 | 25 | SB | BTN raise 2 → SB call → BB raise 8 → BTN fold | 3bet-raise | histórico + última ação Call; ISO helper não prova squeeze | Conflito nominal com limite legado; não promover Over para shove automaticamente. |
| 9 | 25 | BB | BTN raise 2 → SB call → BB raise 8 → BTN fold → SB shove | 4bet-shove | histórico + raiser + all-in; f$bb_got_4beted somente quando aplicável | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 10 | 25 | SB | BTN raise 2 → SB call → BB raise 8 → BTN call 6 | 3bet-raise | histórico + última ação Call; ISO helper não prova squeeze | Conflito nominal com limite legado; não promover Over para shove automaticamente. |
| 11 | 25 | BB | BTN raise 2 → SB call → BB raise 8 → BTN call 6 → SB shove 25 | 4bet-shove | histórico + raiser + all-in; f$bb_got_4beted somente quando aplicável | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 12 | 25 | BTN | BTN raise 2 → SB call → BB raise 8 → BTN call 6 → SB shove 25 → BB fold | 4bet-shove | histórico + raiser + all-in; f$bb_got_4beted somente quando aplicável | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 13 | 25 | BTN | BTN raise 2 → SB call → BB raise 8 → BTN call 6 → SB shove 25 → BB call 17 | 4bet-shove | histórico + raiser + all-in; f$bb_got_4beted somente quando aplicável | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 14 | 25 | SB | BTN raise 2 → SB call → BB raise 8 → BTN shove 25 | 4bet-shove | histórico + raiser + all-in; f$bb_got_4beted somente quando aplicável | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 15 | 25 | BB | BTN raise 2 → SB call → BB raise 8 → BTN shove 25 → SB fold | 4bet-shove | histórico + raiser + all-in; f$bb_got_4beted somente quando aplicável | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 16 | 25 | BB | BTN raise 2 → SB call → BB raise 8 → BTN shove 25 → SB call 23 | 4bet-shove | histórico + raiser + all-in; f$bb_got_4beted somente quando aplicável | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 17 | 25 | BTN | BTN raise 2 → SB call → BB shove 25 | 3bet-shove | histórico + raiser + all-in; família got_Raised/Over quando aplicável | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 18 | 25 | SB | BTN raise 2 → SB call → BB shove 25 → BTN fold | 3bet-shove | histórico + raiser + all-in; família got_Raised/Over quando aplicável | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 19 | 25 | SB | BTN raise 2 → SB call → BB shove 25 → BTN call 23 | 3bet-shove | histórico + raiser + all-in; família got_Raised/Over quando aplicável | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 20 | 25 | BB | BTN raise 2 → SB raise 6 | 3bet-raise | histórico + agressor + contribuições relativas (cold 3bet) | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 21 | 25 | BTN | BTN raise 2 → SB raise 6 → BB fold | 3bet-raise | f$btn_got_Raised_Normal/Over | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 22 | 25 | SB | BTN raise 2 → SB raise 6 → BB fold → BTN shove 25 | 4bet-shove | histórico + raiser + all-in; f$bb_got_4beted somente quando aplicável | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 23 | 25 | BTN | BTN raise 2 → SB raise 6 → BB shove 25 | 4bet-shove | histórico + raiser + all-in; f$bb_got_4beted somente quando aplicável | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 24 | 25 | SB | BTN raise 2 → SB raise 6 → BB shove 25 → BTN fold | 4bet-shove | histórico + raiser + all-in; f$bb_got_4beted somente quando aplicável | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 25 | 25 | SB | BTN raise 2 → SB raise 6 → BB shove 25 → BTN call 23 | 4bet-shove | histórico + raiser + all-in; f$bb_got_4beted somente quando aplicável | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 26 | 25 | BB | BTN raise 2 → SB shove 25 | 3bet-shove | histórico + raiser + all-in; família got_Raised/Over quando aplicável | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 27 | 25 | BTN | BTN raise 2 → SB shove 25 → BB fold | 3bet-shove | histórico + raiser + all-in; família got_Raised/Over quando aplicável | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 28 | 25 | BTN | BTN raise 2 → SB shove 25 → BB call 24 | 3bet-shove | histórico + raiser + all-in; família got_Raised/Over quando aplicável | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 29 | 25 | SB | BTN shove 25 | open-shove | f$sb_vs_Open_Raise_Over | Over não implica all-in literal; avaliar precedência legada MNR/MID/4xUp e fallback. |
| 30 | 25 | BB | BTN shove 25 → SB fold | open-shove | f$bb_vs_Open_Raise_Over | Over não implica all-in literal; avaliar precedência legada MNR/MID/4xUp e fallback. |
| 31 | 25 | BB | BTN shove 25 → SB call 24.5 | open-shove | f$bb_vs_Open_Raise_Over | Over não implica all-in literal; avaliar precedência legada MNR/MID/4xUp e fallback. |
| 32 | 25 | BB | BTN fold → SB limp 0.5 | limp | f$bb_got_Limped | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 33 | 25 | SB | BTN fold → SB limp 0.5 → BB raise 3 | ISO-raise | f$sb_got_Isolated_Normal/Over_3H | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 34 | 25 | BB | BTN fold → SB limp 0.5 → BB raise 3 → SB raise 9 | limp-reraise-raise | f$bb_got_LimpRaised_by_SB_Normal/Over_3H | Normal nominal de 7.5/9; HU sem split, 3H nominal excede limite 5 BB. |
| 35 | 25 | SB | BTN fold → SB limp 0.5 → BB raise 3 → SB raise 9 → BB shove 25 | 4bet-shove | histórico + raiser + all-in; f$bb_got_4beted somente quando aplicável | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 36 | 25 | BB | BTN fold → SB limp 0.5 → BB raise 3 → SB shove 25 | limp-reraise-shove | f$bb_got_LimpRaised_by_SB_Normal/Over_3H | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 37 | 25 | SB | BTN fold → SB limp 0.5 → BB shove 25 | ISO-shove | f$sb_got_Isolated_Normal/Over_3H | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 38 | 25 | BB | BTN fold → SB raise 3 | open-raise | f$bb_vs_Open_Raise_MID | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 39 | 25 | SB | BTN fold → SB raise 3 → BB raise 9 | 3bet-raise | f$sb_got_Raised_Normal/Over_3H | Conflito nominal com limite legado; não promover Over para shove automaticamente. |
| 40 | 25 | BB | BTN fold → SB raise 3 → BB raise 9 → SB shove 25 | 4bet-shove | histórico + raiser + all-in; f$bb_got_4beted somente quando aplicável | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 41 | 25 | SB | BTN fold → SB raise 3 → BB shove 25 | 3bet-shove | histórico + raiser + all-in; família got_Raised/Over quando aplicável | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 42 | 25 | BB | BTN fold → SB shove 25 | open-shove | f$bb_vs_Open_Raise_Over | Over não implica all-in literal; avaliar precedência legada MNR/MID/4xUp e fallback. |
| 43 | 25 | BB | BTN raise 2 → SB call | open-raise | f$bb_vs_Open_Raise_MNR | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 44 | 25 | SB | BTN fold | unopened | f$UnplayedPot | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 45 | 25 | SB | Pote não aberto | unopened | f$UnplayedPot | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 46 | 25 | BB | SB limp 0.5 | limp | f$bb_got_Limped | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 47 | 25 | SB | SB limp 0.5 → BB raise 2.5 | ISO-raise | f$sb_got_Isolated_Normal/Over_2H | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 48 | 25 | BB | SB limp 0.5 → BB raise 2.5 → SB raise 7.5 | limp-reraise-raise | f$bb_got_LimpRaised_2H (sem divisão Normal/Over) | Normal nominal de 7.5/9; HU sem split, 3H nominal excede limite 5 BB. |
| 49 | 25 | SB | SB limp 0.5 → BB raise 2.5 → SB raise 7.5 → BB shove 25 | 4bet-shove | histórico + raiser + all-in; f$bb_got_4beted somente quando aplicável | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 50 | 25 | BB | SB limp 0.5 → BB raise 2.5 → SB shove 25 | limp-reraise-shove | f$bb_got_LimpRaised_2H (sem divisão Normal/Over) | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 51 | 25 | SB | SB limp 0.5 → BB shove 25 | ISO-shove | f$sb_got_Isolated_Normal/Over_2H | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 52 | 25 | BB | SB raise 2 | open-raise | f$bb_vs_Open_Raise_Normal | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 53 | 25 | SB | SB raise 2 → BB raise 6 | 3bet-raise | f$sb_got_Raised_Normal/Over_2H | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 54 | 25 | BB | SB raise 2 → BB raise 6 → SB shove 25 | 4bet-shove | histórico + raiser + all-in; f$bb_got_4beted somente quando aplicável | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 55 | 25 | SB | SB raise 2 → BB shove 25 | 3bet-shove | histórico + raiser + all-in; família got_Raised/Over quando aplicável | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 56 | 25 | BB | SB shove 25 | open-shove | f$bb_vs_Open_Raise_Over | Over não implica all-in literal; avaliar precedência legada MNR/MID/4xUp e fallback. |
| 57 | 23 | BTN | Pote não aberto | unopened | f$UnplayedPot | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 58 | 23 | SB | BTN raise 2 | open-raise | f$sb_vs_Open_Raise_Normal | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 59 | 23 | BB | BTN raise 2 → SB fold | open-raise | f$bb_vs_Open_Raise_MNR | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 60 | 23 | BTN | BTN raise 2 → SB fold → BB raise 6 | 3bet-raise | f$btn_got_Raised_Normal/Over | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 61 | 23 | BB | BTN raise 2 → SB fold → BB raise 6 → BTN shove 23 | 4bet-shove | histórico + raiser + all-in; f$bb_got_4beted somente quando aplicável | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 62 | 23 | BTN | BTN raise 2 → SB fold → BB shove 23 | 3bet-shove | histórico + raiser + all-in; família got_Raised/Over quando aplicável | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 63 | 23 | BB | BTN raise 2 → SB call 1.5 | open-raise | f$bb_vs_Open_Raise_MNR | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 64 | 23 | BTN | BTN raise 2 → SB call 1.5 → BB raise 8 | 3bet-raise | f$btn_got_Raised_Normal/Over | Conflito nominal com limite legado; não promover Over para shove automaticamente. |
| 65 | 23 | SB | BTN raise 2 → SB call 1.5 → BB raise 8 → BTN fold | 3bet-raise | histórico + última ação Call; ISO helper não prova squeeze | Conflito nominal com limite legado; não promover Over para shove automaticamente. |
| 66 | 23 | BB | BTN raise 2 → SB call 1.5 → BB raise 8 → BTN fold → SB shove 23 | 4bet-shove | histórico + raiser + all-in; f$bb_got_4beted somente quando aplicável | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 67 | 23 | SB | BTN raise 2 → SB call 1.5 → BB raise 8 → BTN call 6 | 3bet-raise | histórico + última ação Call; ISO helper não prova squeeze | Conflito nominal com limite legado; não promover Over para shove automaticamente. |
| 68 | 23 | BB | BTN raise 2 → SB call 1.5 → BB raise 8 → BTN call 6 → SB shove 23 | 4bet-shove | histórico + raiser + all-in; f$bb_got_4beted somente quando aplicável | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 69 | 23 | BTN | BTN raise 2 → SB call 1.5 → BB raise 8 → BTN call 6 → SB shove 23 → BB fold | 4bet-shove | histórico + raiser + all-in; f$bb_got_4beted somente quando aplicável | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 70 | 23 | BTN | BTN raise 2 → SB call 1.5 → BB raise 8 → BTN call 6 → SB shove 23 → BB call 15 | 4bet-shove | histórico + raiser + all-in; f$bb_got_4beted somente quando aplicável | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 71 | 23 | SB | BTN raise 2 → SB call 1.5 → BB raise 8 → BTN shove 23 | 4bet-shove | histórico + raiser + all-in; f$bb_got_4beted somente quando aplicável | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 72 | 23 | BB | BTN raise 2 → SB call 1.5 → BB raise 8 → BTN shove 23 → SB fold | 4bet-shove | histórico + raiser + all-in; f$bb_got_4beted somente quando aplicável | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 73 | 23 | BB | BTN raise 2 → SB call 1.5 → BB raise 8 → BTN shove 23 → SB call 21 | 4bet-shove | histórico + raiser + all-in; f$bb_got_4beted somente quando aplicável | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 74 | 23 | BTN | BTN raise 2 → SB call 1.5 → BB shove 23 | 3bet-shove | histórico + raiser + all-in; família got_Raised/Over quando aplicável | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 75 | 23 | SB | BTN raise 2 → SB call 1.5 → BB shove 23 → BTN fold | 3bet-shove | histórico + raiser + all-in; família got_Raised/Over quando aplicável | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 76 | 23 | SB | BTN raise 2 → SB call 1.5 → BB shove 23 → BTN call 21 | 3bet-shove | histórico + raiser + all-in; família got_Raised/Over quando aplicável | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 77 | 23 | BB | BTN raise 2 → SB raise 6 | 3bet-raise | histórico + agressor + contribuições relativas (cold 3bet) | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 78 | 23 | BTN | BTN raise 2 → SB raise 6 → BB fold | 3bet-raise | f$btn_got_Raised_Normal/Over | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 79 | 23 | SB | BTN raise 2 → SB raise 6 → BB fold → BTN shove 23 | 4bet-shove | histórico + raiser + all-in; f$bb_got_4beted somente quando aplicável | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 80 | 23 | BTN | BTN raise 2 → SB raise 6 → BB shove 23 | 4bet-shove | histórico + raiser + all-in; f$bb_got_4beted somente quando aplicável | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 81 | 23 | SB | BTN raise 2 → SB raise 6 → BB shove 23 → BTN fold | 4bet-shove | histórico + raiser + all-in; f$bb_got_4beted somente quando aplicável | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 82 | 23 | SB | BTN raise 2 → SB raise 6 → BB shove 23 → BTN call 21 | 4bet-shove | histórico + raiser + all-in; f$bb_got_4beted somente quando aplicável | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 83 | 23 | BB | BTN raise 2 → SB shove 23 | 3bet-shove | histórico + raiser + all-in; família got_Raised/Over quando aplicável | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 84 | 23 | BTN | BTN raise 2 → SB shove 23 → BB fold | 3bet-shove | histórico + raiser + all-in; família got_Raised/Over quando aplicável | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 85 | 23 | BTN | BTN raise 2 → SB shove 23 → BB call 22 | 3bet-shove | histórico + raiser + all-in; família got_Raised/Over quando aplicável | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 86 | 23 | SB | BTN shove 23 | open-shove | f$sb_vs_Open_Raise_Over | Over não implica all-in literal; avaliar precedência legada MNR/MID/4xUp e fallback. |
| 87 | 23 | BB | BTN shove 23 → SB fold | open-shove | f$bb_vs_Open_Raise_Over | Over não implica all-in literal; avaliar precedência legada MNR/MID/4xUp e fallback. |
| 88 | 23 | BB | BTN shove 23 → SB call 22.5 | open-shove | f$bb_vs_Open_Raise_Over | Over não implica all-in literal; avaliar precedência legada MNR/MID/4xUp e fallback. |
| 89 | 23 | SB | BTN fold | unopened | f$UnplayedPot | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 90 | 23 | BB | BTN fold → SB limp 0.5 | limp | f$bb_got_Limped | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 91 | 23 | SB | BTN fold → SB limp 0.5 → BB raise 3 | ISO-raise | f$sb_got_Isolated_Normal/Over_3H | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 92 | 23 | BB | BTN fold → SB limp 0.5 → BB raise 3 → SB raise 9 | limp-reraise-raise | f$bb_got_LimpRaised_by_SB_Normal/Over_3H | Normal nominal de 7.5/9; HU sem split, 3H nominal excede limite 5 BB. |
| 93 | 23 | SB | BTN fold → SB limp 0.5 → BB raise 3 → SB raise 9 → BB shove 23 | 4bet-shove | histórico + raiser + all-in; f$bb_got_4beted somente quando aplicável | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 94 | 23 | BB | BTN fold → SB limp 0.5 → BB raise 3 → SB shove 23 | limp-reraise-shove | f$bb_got_LimpRaised_by_SB_Normal/Over_3H | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 95 | 23 | SB | BTN fold → SB limp 0.5 → BB shove 23 | ISO-shove | f$sb_got_Isolated_Normal/Over_3H | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 96 | 23 | BB | BTN fold → SB raise 3 | open-raise | f$bb_vs_Open_Raise_MID | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 97 | 23 | SB | BTN fold → SB raise 3 → BB raise 9 | 3bet-raise | f$sb_got_Raised_Normal/Over_3H | Conflito nominal com limite legado; não promover Over para shove automaticamente. |
| 98 | 23 | BB | BTN fold → SB raise 3 → BB raise 9 → SB shove 23 | 4bet-shove | histórico + raiser + all-in; f$bb_got_4beted somente quando aplicável | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 99 | 23 | SB | BTN fold → SB raise 3 → BB shove 23 | 3bet-shove | histórico + raiser + all-in; família got_Raised/Over quando aplicável | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 100 | 23 | BB | BTN fold → SB shove 23 | open-shove | f$bb_vs_Open_Raise_Over | Over não implica all-in literal; avaliar precedência legada MNR/MID/4xUp e fallback. |
| 101 | 23 | SB | Pote não aberto | unopened | f$UnplayedPot | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 102 | 23 | BB | SB limp 0.5 | limp | f$bb_got_Limped | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 103 | 23 | SB | SB limp 0.5 → BB raise 2.5 | ISO-raise | f$sb_got_Isolated_Normal/Over_2H | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 104 | 23 | BB | SB limp 0.5 → BB raise 2.5 → SB raise 7.5 | limp-reraise-raise | f$bb_got_LimpRaised_2H (sem divisão Normal/Over) | Normal nominal de 7.5/9; HU sem split, 3H nominal excede limite 5 BB. |
| 105 | 23 | SB | SB limp 0.5 → BB raise 2.5 → SB raise 7.5 → BB shove 23 | 4bet-shove | histórico + raiser + all-in; f$bb_got_4beted somente quando aplicável | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 106 | 23 | BB | SB limp 0.5 → BB raise 2.5 → SB shove 23 | limp-reraise-shove | f$bb_got_LimpRaised_2H (sem divisão Normal/Over) | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 107 | 23 | SB | SB limp 0.5 → BB shove 23 | ISO-shove | f$sb_got_Isolated_Normal/Over_2H | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 108 | 23 | BB | SB raise 2 | open-raise | f$bb_vs_Open_Raise_Normal | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 109 | 23 | SB | SB raise 2 → BB raise 6 | 3bet-raise | f$sb_got_Raised_Normal/Over_2H | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 110 | 23 | BB | SB raise 2 → BB raise 6 → SB shove 23 | 4bet-shove | histórico + raiser + all-in; f$bb_got_4beted somente quando aplicável | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 111 | 23 | SB | SB raise 2 → BB shove 23 | 3bet-shove | histórico + raiser + all-in; família got_Raised/Over quando aplicável | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 112 | 23 | BB | SB shove 23 | open-shove | f$bb_vs_Open_Raise_Over | Over não implica all-in literal; avaliar precedência legada MNR/MID/4xUp e fallback. |
| 113 | 20 | BTN | Pote não aberto | unopened | f$UnplayedPot | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 114 | 20 | SB | BTN raise 2 | open-raise | f$sb_vs_Open_Raise_Normal | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 115 | 20 | BB | BTN raise 2 → SB fold | open-raise | f$bb_vs_Open_Raise_MNR | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 116 | 20 | BTN | BTN raise 2 → SB fold → BB raise 6 | 3bet-raise | f$btn_got_Raised_Normal/Over | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 117 | 20 | BB | BTN raise 2 → SB fold → BB raise 6 → BTN shove 20 | 4bet-shove | histórico + raiser + all-in; f$bb_got_4beted somente quando aplicável | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 118 | 20 | BTN | BTN raise 2 → SB fold → BB shove 20 | 3bet-shove | histórico + raiser + all-in; família got_Raised/Over quando aplicável | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 119 | 20 | BB | BTN raise 2 → SB call 1.5 | open-raise | f$bb_vs_Open_Raise_MNR | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 120 | 20 | BTN | BTN raise 2 → SB call 1.5 → BB shove 20 | 3bet-shove | histórico + raiser + all-in; família got_Raised/Over quando aplicável | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 121 | 20 | SB | BTN raise 2 → SB call 1.5 → BB shove 20 → BTN fold | 3bet-shove | histórico + raiser + all-in; família got_Raised/Over quando aplicável | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 122 | 20 | SB | BTN raise 2 → SB call 1.5 → BB shove 20 → BTN call 18 | 3bet-shove | histórico + raiser + all-in; família got_Raised/Over quando aplicável | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 123 | 20 | BB | BTN raise 2 → SB raise 6 | 3bet-raise | histórico + agressor + contribuições relativas (cold 3bet) | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 124 | 20 | BTN | BTN raise 2 → SB raise 6 → BB fold | 3bet-raise | f$btn_got_Raised_Normal/Over | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 125 | 20 | SB | BTN raise 2 → SB raise 6 → BB fold → BTN shove 20 | 4bet-shove | histórico + raiser + all-in; f$bb_got_4beted somente quando aplicável | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 126 | 20 | BTN | BTN raise 2 → SB raise 6 → BB shove 20 | 4bet-shove | histórico + raiser + all-in; f$bb_got_4beted somente quando aplicável | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 127 | 20 | SB | BTN raise 2 → SB raise 6 → BB shove 20 → BTN fold | 4bet-shove | histórico + raiser + all-in; f$bb_got_4beted somente quando aplicável | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 128 | 20 | SB | BTN raise 2 → SB raise 6 → BB shove 20 → BTN call 18 | 4bet-shove | histórico + raiser + all-in; f$bb_got_4beted somente quando aplicável | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 129 | 20 | BB | BTN raise 2 → SB shove 20 | 3bet-shove | histórico + raiser + all-in; família got_Raised/Over quando aplicável | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 130 | 20 | BTN | BTN raise 2 → SB shove 20 → BB fold | 3bet-shove | histórico + raiser + all-in; família got_Raised/Over quando aplicável | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 131 | 20 | BTN | BTN raise 2 → SB shove 20 → BB call 19 | 3bet-shove | histórico + raiser + all-in; família got_Raised/Over quando aplicável | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 132 | 20 | SB | BTN shove 20 | open-shove | f$sb_vs_Open_Raise_Over | Over não implica all-in literal; avaliar precedência legada MNR/MID/4xUp e fallback. |
| 133 | 20 | BB | BTN shove 20 → SB fold | open-shove | f$bb_vs_Open_Raise_Over | Over não implica all-in literal; avaliar precedência legada MNR/MID/4xUp e fallback. |
| 134 | 20 | BB | BTN shove 20 → SB call 19.5 | open-shove | f$bb_vs_Open_Raise_Over | Over não implica all-in literal; avaliar precedência legada MNR/MID/4xUp e fallback. |
| 135 | 20 | SB | BTN fold | unopened | f$UnplayedPot | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 136 | 20 | BB | BTN fold → SB limp 0.5 | limp | f$bb_got_Limped | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 137 | 20 | SB | BTN fold → SB limp 0.5 → BB raise 3 | ISO-raise | f$sb_got_Isolated_Normal/Over_3H | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 138 | 20 | BB | BTN fold → SB limp 0.5 → BB raise 3 → SB shove 20 | limp-reraise-shove | f$bb_got_LimpRaised_by_SB_Normal/Over_3H | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 139 | 20 | SB | BTN fold → SB limp 0.5 → BB shove 20 | ISO-shove | f$sb_got_Isolated_Normal/Over_3H | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 140 | 20 | BB | BTN fold → SB raise 3 | open-raise | f$bb_vs_Open_Raise_MID | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 141 | 20 | SB | BTN fold → SB raise 3 → BB shove 20 | 3bet-shove | histórico + raiser + all-in; família got_Raised/Over quando aplicável | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 142 | 20 | BB | BTN fold → SB shove 20 | open-shove | f$bb_vs_Open_Raise_Over | Over não implica all-in literal; avaliar precedência legada MNR/MID/4xUp e fallback. |
| 143 | 20 | SB | Pote não aberto | unopened | f$UnplayedPot | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 144 | 20 | BB | SB limp 0.5 | limp | f$bb_got_Limped | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 145 | 20 | SB | SB limp 0.5 → BB raise 2.5 | ISO-raise | f$sb_got_Isolated_Normal/Over_2H | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 146 | 20 | BB | SB limp 0.5 → BB raise 2.5 → SB raise 7.5 | limp-reraise-raise | f$bb_got_LimpRaised_2H (sem divisão Normal/Over) | Normal nominal de 7.5/9; HU sem split, 3H nominal excede limite 5 BB. |
| 147 | 20 | SB | SB limp 0.5 → BB raise 2.5 → SB raise 7.5 → BB shove 20 | 4bet-shove | histórico + raiser + all-in; f$bb_got_4beted somente quando aplicável | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 148 | 20 | BB | SB limp 0.5 → BB raise 2.5 → SB shove 20 | limp-reraise-shove | f$bb_got_LimpRaised_2H (sem divisão Normal/Over) | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 149 | 20 | SB | SB limp 0.5 → BB shove 20 | ISO-shove | f$sb_got_Isolated_Normal/Over_2H | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 150 | 20 | BB | SB raise 2 | open-raise | f$bb_vs_Open_Raise_Normal | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 151 | 20 | SB | SB raise 2 → BB raise 6 | 3bet-raise | f$sb_got_Raised_Normal/Over_2H | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 152 | 20 | BB | SB raise 2 → BB raise 6 → SB shove 20 | 4bet-shove | histórico + raiser + all-in; f$bb_got_4beted somente quando aplicável | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 153 | 20 | SB | SB raise 2 → BB shove 20 | 3bet-shove | histórico + raiser + all-in; família got_Raised/Over quando aplicável | Compor posicao, histórico, agressor, estados e ações; replay pendente. |
| 154 | 20 | BB | SB shove 20 | open-shove | f$bb_vs_Open_Raise_Over | Over não implica all-in literal; avaliar precedência legada MNR/MID/4xUp e fallback. |
