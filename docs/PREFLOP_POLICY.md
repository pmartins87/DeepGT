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

## Painel de acompanhamento obrigatório
Após cada mudança no registry, registrar label, hero e histories por stack (sequence, parent_id, edge, print), quando conhecidos. Gerar docs/PREFLOP_DASHBOARD.md com `node tools/render_preflop_dashboard.cjs` e conferir com `node tools/render_preflop_dashboard.cjs --check`. O painel reúne tabela de sequências, árvore Mermaid por stack e matriz de cobertura. Consultar no começo de cada lote e atualizar junto do registro. Não editar a tabela/árvore manualmente. Estados preliminares não equivalem a validação ou ativação. O número total de famílias pode crescer; não interpretar a matriz como cobertura exaustiva.

## Protocolo de histórico parcial (decisão de 2026-11-24)
O aplicativo mostra apenas os três últimos blocos de ação. Ler cada bloco inferior: posição, stack exibido, ação destacada e ordem; o bloco rosa identifica o Hero atual. Não confundir ações disponíveis com ação selecionada. Registrar trecho visível (visible_tail) e origem/confiança (history_status) separados da sequência completa reconstruída. Conferir pai, posição e sequência, valores de raise total vs call adicional e consistência dos stacks; não usar ordem dos arquivos nem semelhança das matrizes como prova única. Se houver mais de um pai possível, manter pendência de histórico e pedir somente a informação discriminante (ou print de contexto). Cada lote pode conter 5 a 10 imagens consecutivas, com âncora textual de stack e ramo quando mudar de caminho; não exigir legenda individual se o histórico for inequívoco. Dois prints com as mesmas posições mas ações selecionadas diferentes são nós distintos. Não codificar histórico não resolvido. Usar RECEIVED_PENDING_EXTRACTION no registry antes de gerar predicados; não contar recebidos como codificados.

## Fluxo simplificado de acompanhamento (decisão do usuário)
Receber prints → organizar → identificar histórico → extrair frequências → adicionar as charts ao src/DeepGT.txt em rascunho offline → atualizar painel/registro/documentos. Fazer no mesmo ciclo sempre que os dados permitirem. O painel exibe codificada, falta print e excepcionalmente recebida a codificar; as classificações internas de revisão ficam na auditoria. Não transformar revisão técnica em tarefa do usuário. Se um detalhe não for legível, registrar a estimativa e sua limitação no rascunho, sem inventar frequências e sem ativar. Perguntar apenas se a informação for indispensável para resolver uma ambiguidade real. A atualização da apresentação não modifica os gates de validação e ativação.

## Continuidade da captura e revisão estratégica
O painel inicia com a lista global de prints ordenada por número contínuo; lacunas da árvore não recebem número até o recebimento. Em cada lote, devolver no chat pelo menos os últimos prints numerados e o próximo número. Antes de consolidar estratégia de estudo, aplicar STRATEGIC_REVIEW.md, preservando frequências brutas e separando desvios deliberados de erros de extração. Não alterar mãos apenas por aparência; exceções justificadas ou restrições explícitas do usuário são registradas.

## Referência pura (decisão vigente)
A cada lote, converter a fonte sem ajustes deliberados de combos; preservar dados brutos, registrar hipóteses estratégicas separadamente. A futura variante será avaliada após consolidar a referência, conforme STRATEGIC_REVIEW.md. A revisão de leitura, cobertura e validação nativa não muda.

## Origem da mão
A topologia inicial distingue 3-handed de origem e HU nativo, mesmo com dois jogadores ativos. Usar scope no registry e prefixos HUSB/HUBB nos nós nativos; respeitar sizing da fonte por stack. Painel separa árvores e conserva numeração global.

Escopo do release R10m: preflop <=17 BB e postflop R10m; >17 charts 20/23/25 com otimização de calls conforme ranking absoluto. Gate de identificação de história e bucket inicial ainda aberto; fallback R10m off-tree é recomendação não habilitada. Ver R10M_HIGH_STACK_STAGE1.md.

Checkpoint G1: preservar Pure previamente codificado em nós não-call; divergências da releitura registradas em [auditoria G1](HIGH_STACK_GATE_G1_AUDIT.md). Não habilitar roteamento durante inconsistência de fonte. Captura encerrada para este release.

Stage 1 R2: formato de ação pura em lista e mistura em f$chart_, RNG por decisão reaproveitado; dados efetivos rastreados no manifesto e matrizes R2. Não converter indeterminado em fold. Sem alteração de grade/escopo ou autorização para ativação.
