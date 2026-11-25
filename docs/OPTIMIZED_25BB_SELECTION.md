# DeepGT Optimized All-in — seleção 25 BB v0.1 experimental
Solicitação explícita: entregar as 56 charts selecionadas individualmente antes de 23 BB. A entrega é um catálogo de pesquisa offline, não uma homologação. O código Pure e o registry principal ficam intactos. Base: OPTIMIZED_25BB_BATCH_STUDY.md, OPTIMIZED_T3O_CASE.md, pacote de reproducibilidade do estudo com SHA256 b0b656166e2b16b647f0aa34bb6dfcd73b2480c7e40947232564b30b89b4f1d4.
## Regra de seleção e resultado
21 mistas fora do escopo; 30 comparadas numericamente preservadas devido ao gate de fonte/robustez; quatro sem reach nominal identificável preservadas; print 31 Conservadora condicional incluída a pedido de fechar o conjunto experimental. Total 56, 55 preservadas e uma modificada. Nenhuma promovida para uso. A seleção não implica que toda decisão original seja ótima. Os 55 JPGs são mantidos byte a byte. A fonte nominal do BTN shove 25 BB (print 1) exibe 0%; no 31, call 100% de AA KK QQ JJ TT 99 AKs AKo, demais fold, 3,39% condicionado ao modelo moderado, 52/1326 combos não condicionados (3,92%). Três ranges hipotéticos, sem teste independente de resposta adversária. Não tratar como correção comprovada de GTO.
O print 42 Maximin foi reconstruído a partir das amostras e pesos de ajuste LP armazenados, sem novas simulações: 12 classes mudam vs segunda leitura, call 17,791924% no modelo nominal. Deltas em avaliação +0,013621/+0,002649/+0,014667 BB por chegada; erro padrão do segundo +0,0050932086 BB, limite inferior pontual negativo. Alternativa arquivada, não selecionada. Print 11 e 49 apresentam ganhos diagnósticos, mas falham em qualidade da fonte; não adotar. A escolha de 31 é excepcional e condicional, não relaxa gates.
## Lista individual
| Print | Hero | Histórico | Seleção | Justificativa |
|---:|:---:|---|---|---|
| 1 | BTN | Pote não aberto | Pure | Fora do escopo, ações mistas |
| 2 | SB | BTN raise 2 | Pure | Fora do escopo, ações mistas |
| 3 | BB | BTN raise 2 → SB fold | Pure | Fora do escopo, ações mistas |
| 4 | BTN | BTN raise 2 → SB fold → BB raise 6 | Pure | Fora do escopo, ações mistas |
| 5 | BB | BTN raise 2 → SB fold → BB raise 6 → BTN shove | Pure | Filtro de qualidade da reconstrução não passou |
| 6 | BTN | BTN raise 2 → SB fold → BB shove | Pure | Nenhuma alternativa passou o gate de ganho robusto |
| 7 | BTN | BTN raise 2 → SB call → BB raise 8 | Pure | Fora do escopo, ações mistas |
| 8 | SB | BTN raise 2 → SB call → BB raise 8 → BTN fold | Pure | Fora do escopo, ações mistas |
| 9 | BB | BTN raise 2 → SB call → BB raise 8 → BTN fold → SB shove | Pure | Filtro de qualidade da reconstrução não passou |
| 10 | SB | BTN raise 2 → SB call → BB raise 8 → BTN call 6 | Pure | Fora do escopo, ações mistas |
| 11 | BB | BTN raise 2 → SB call → BB raise 8 → BTN call 6 → SB shove 25 | Pure | Filtro de qualidade da reconstrução não passou; Maximin: pior delta +0,055466 BB, fonte não passou |
| 12 | BTN | BTN raise 2 → SB call → BB raise 8 → BTN call 6 → SB shove 25 → BB fold | Pure | Nenhuma alternativa passou o gate de ganho robusto |
| 13 | BTN | BTN raise 2 → SB call → BB raise 8 → BTN call 6 → SB shove 25 → BB call 17 | Pure | Nenhuma alternativa passou o gate de ganho robusto |
| 14 | SB | BTN raise 2 → SB call → BB raise 8 → BTN shove 25 | Pure | Nenhuma alternativa passou o gate de ganho robusto |
| 15 | BB | BTN raise 2 → SB call → BB raise 8 → BTN shove 25 → SB fold | Pure | Filtro de qualidade da reconstrução não passou |
| 16 | BB | BTN raise 2 → SB call → BB raise 8 → BTN shove 25 → SB call 23 | Pure | Reach nominal não identificável |
| 17 | BTN | BTN raise 2 → SB call → BB shove 25 | Pure | Filtro de qualidade da reconstrução não passou; Fixed: pior delta +0,000736 BB, fonte não passou |
| 18 | SB | BTN raise 2 → SB call → BB shove 25 → BTN fold | Pure | Filtro de qualidade da reconstrução não passou |
| 19 | SB | BTN raise 2 → SB call → BB shove 25 → BTN call 23 | Pure | Nenhuma alternativa passou o gate de ganho robusto |
| 20 | BB | BTN raise 2 → SB raise 6 | Pure | Filtro de qualidade da reconstrução não passou |
| 21 | BTN | BTN raise 2 → SB raise 6 → BB fold | Pure | Fora do escopo, ações mistas |
| 22 | SB | BTN raise 2 → SB raise 6 → BB fold → BTN shove 25 | Pure | Nenhuma alternativa passou o gate de ganho robusto |
| 23 | BTN | BTN raise 2 → SB raise 6 → BB shove 25 | Pure | Filtro de qualidade da reconstrução não passou |
| 24 | SB | BTN raise 2 → SB raise 6 → BB shove 25 → BTN fold | Pure | Filtro de qualidade da reconstrução não passou |
| 25 | SB | BTN raise 2 → SB raise 6 → BB shove 25 → BTN call 23 | Pure | Nenhuma alternativa passou o gate de ganho robusto |
| 26 | BB | BTN raise 2 → SB shove 25 | Pure | Filtro de qualidade da reconstrução não passou |
| 27 | BTN | BTN raise 2 → SB shove 25 → BB fold | Pure | Nenhuma alternativa passou o gate de ganho robusto |
| 28 | BTN | BTN raise 2 → SB shove 25 → BB call 24 | Pure | Nenhuma alternativa passou o gate de ganho robusto |
| 29 | SB | BTN shove 25 | Pure | Reach nominal não identificável |
| 30 | BB | BTN shove 25 → SB fold | Pure | Reach nominal não identificável |
| 31 | BB | BTN shove 25 → SB call 24.5 | Conservadora_condicional | Conservadora condicional, três ranges hipotéticos, sem identificação de range nominal |
| 32 | BB | BTN fold → SB limp 0.5 | Pure | Fora do escopo, ações mistas |
| 33 | SB | BTN fold → SB limp 0.5 → BB raise 3 | Pure | Fora do escopo, ações mistas |
| 34 | BB | BTN fold → SB limp 0.5 → BB raise 3 → SB raise 9 | Pure | Fora do escopo, ações mistas |
| 35 | SB | BTN fold → SB limp 0.5 → BB raise 3 → SB raise 9 → BB shove 25 | Pure | Filtro de qualidade da reconstrução não passou |
| 36 | BB | BTN fold → SB limp 0.5 → BB raise 3 → SB shove 25 | Pure | Nenhuma alternativa passou o gate de ganho robusto |
| 37 | SB | BTN fold → SB limp 0.5 → BB shove 25 | Pure | Nenhuma alternativa passou o gate de ganho robusto |
| 38 | BB | BTN fold → SB raise 3 | Pure | Fora do escopo, ações mistas |
| 39 | SB | BTN fold → SB raise 3 → BB raise 9 | Pure | Fora do escopo, ações mistas |
| 40 | BB | BTN fold → SB raise 3 → BB raise 9 → SB shove 25 | Pure | Filtro de qualidade da reconstrução não passou |
| 41 | SB | BTN fold → SB raise 3 → BB shove 25 | Pure | Nenhuma alternativa passou o gate de ganho robusto |
| 42 | BB | BTN fold → SB shove 25 | Pure | Nenhuma alternativa passou o gate de ganho robusto; Maximin: pior delta +0,002649 BB, IC inferior negativo no segundo modelo |
| 43 | BB | BTN raise 2 → SB call | Pure | Fora do escopo, ações mistas |
| 44 | SB | BTN fold | Pure | Fora do escopo, ações mistas |
| 45 | SB | Pote não aberto | Pure | Fora do escopo, ações mistas |
| 46 | BB | SB limp 0.5 | Pure | Fora do escopo, ações mistas |
| 47 | SB | SB limp 0.5 → BB raise 2.5 | Pure | Fora do escopo, ações mistas |
| 48 | BB | SB limp 0.5 → BB raise 2.5 → SB raise 7.5 | Pure | Fora do escopo, ações mistas |
| 49 | SB | SB limp 0.5 → BB raise 2.5 → SB raise 7.5 → BB shove 25 | Pure | Filtro de qualidade da reconstrução não passou; Conservadora/Maximin: pior delta +0,065115 BB apenas na primeira leitura; segunda não comparável |
| 50 | BB | SB limp 0.5 → BB raise 2.5 → SB shove 25 | Pure | Filtro de qualidade da reconstrução não passou |
| 51 | SB | SB limp 0.5 → BB shove 25 | Pure | Filtro de qualidade da reconstrução não passou |
| 52 | BB | SB raise 2 | Pure | Fora do escopo, ações mistas |
| 53 | SB | SB raise 2 → BB raise 6 | Pure | Fora do escopo, ações mistas |
| 54 | BB | SB raise 2 → BB raise 6 → SB shove 25 | Pure | Filtro de qualidade da reconstrução não passou |
| 55 | SB | SB raise 2 → BB shove 25 | Pure | Filtro de qualidade da reconstrução não passou |
| 56 | BB | SB shove 25 | Pure | Reach nominal não identificável |
## Artefatos
- [Registro de seleção](../charts/optimized_25bb/selection_v0_1.json).
- [Frequências print 31](../charts/optimized_25bb/31_conservadora_experimental.csv).
- [Alternativa 42, não selecionada](../charts/optimized_25bb/42_maximin_not_selected.csv).
- PDF local de 56 páginas: DeepGT_25BB_56_charts_selecionadas.pdf (SHA256 665f5b9df25b0219921d2f306aef9da134c226c9c9ca1311184d73f4ef8a15bf).
- ZIP local de 56 imagens selecionadas + índice/alternativa/fonte 31: DeepGT_25BB_56_charts_experimentais.zip (SHA256 78e103b6e17a3be6f0ccc7aa65f4180331461a3011bbabb37d71efa19a10baf1). Binários não publicados no GitHub; manifesto e políticas textuais publicados.
## Limitações
A referência numérica do estudo 3-handed é uma segunda leitura raster, não o código Pure. Não houve novos testes de desempenho nesta entrega. Não foi feita integração de árvore, homologação nativa, nem prova de ganho em torneios. Preservar política de captura; 23 BB começa pelo print 57.