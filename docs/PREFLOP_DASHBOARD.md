# Painel preflop — DeepGT

Gerado a partir de [PREFLOP_REGISTRY.json](../charts/PREFLOP_REGISTRY.json). Não editar manualmente; atualizar o registro e regenerar este painel.

🟡 Codificado em revisão · 🟠 Revisão de reach/pai · 🔴 Bloqueado · ⚪ Pendente · 🟢 Validado/ativo (estado distinto no registro) · — Não aplicável confirmado.

## 1. Matriz de cobertura

| Cenário | 25 | 23 | 20 | 17 | 15 | 12 | 10 | 8 | 6 | 4 | 2 |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| BTN Open | 🟡 | ⚪ | ⚪ | ⚪ | ⚪ | ⚪ | ⚪ | ⚪ | ⚪ | ⚪ | ⚪ |
| SB vs BTN | 🟡 | ⚪ | ⚪ | ⚪ | ⚪ | ⚪ | ⚪ | ⚪ | ⚪ | ⚪ | ⚪ |
| BB vs BTN (SB fold) | 🟡 | ⚪ | ⚪ | ⚪ | ⚪ | ⚪ | ⚪ | ⚪ | ⚪ | ⚪ | ⚪ |
| BTN vs BB 3bet | 🟡 | ⚪ | ⚪ | ⚪ | ⚪ | ⚪ | ⚪ | ⚪ | ⚪ | ⚪ | ⚪ |
| BB vs BTN 4bet AI | 🔴 | ⚪ | ⚪ | ⚪ | ⚪ | ⚪ | ⚪ | ⚪ | ⚪ | ⚪ | ⚪ |
| BTN vs BB shove | 🟡 | ⚪ | ⚪ | ⚪ | ⚪ | ⚪ | ⚪ | ⚪ | ⚪ | ⚪ | ⚪ |
| BTN vs squeeze | 🟡 | ⚪ | ⚪ | ⚪ | ⚪ | ⚪ | ⚪ | ⚪ | ⚪ | ⚪ | ⚪ |
| SB vs squeeze | 🟠 | ⚪ | ⚪ | ⚪ | ⚪ | ⚪ | ⚪ | ⚪ | ⚪ | ⚪ | ⚪ |
| BB vs SB 4bet AI | 🟠 | ⚪ | ⚪ | ⚪ | ⚪ | ⚪ | ⚪ | ⚪ | ⚪ | ⚪ | ⚪ |
| BB vs BTN + SB | ⚪ | ⚪ | ⚪ | ⚪ | ⚪ | ⚪ | ⚪ | ⚪ | ⚪ | ⚪ | ⚪ |

A matriz abrange apenas famílias já identificadas; não mede a cobertura de toda a árvore GTO. Slots pendentes não implicam que o cenário seja legal em todos os stacks.

| Stack | Recebidos/identificados | Revisão normal | Revisão especial | Bloqueados | Validados/ativos | Pendentes |
|---:|---:|---:|---:|---:|---:|---:|
| 25 | 9/10 | 6 | 2 | 1 | 0 | 1 |
| 23 | 0/10 | 0 | 0 | 0 | 0 | 10 |
| 20 | 0/10 | 0 | 0 | 0 | 0 | 10 |
| 17 | 0/10 | 0 | 0 | 0 | 0 | 10 |
| 15 | 0/10 | 0 | 0 | 0 | 0 | 10 |
| 12 | 0/10 | 0 | 0 | 0 | 0 | 10 |
| 10 | 0/10 | 0 | 0 | 0 | 0 | 10 |
| 8 | 0/10 | 0 | 0 | 0 | 0 | 10 |
| 6 | 0/10 | 0 | 0 | 0 | 0 | 10 |
| 4 | 0/10 | 0 | 0 | 0 | 0 | 10 |
| 2 | 0/10 | 0 | 0 | 0 | 0 | 10 |

## 2. Sequências e árvores por stack

Apenas históricos explicitamente registrados são desenhados. Uma chart faltante conhecida pode aparecer como nó pendente. Os demais ramos ainda não identificados não são inferidos.

### 25 BB

| Print | Sequência anterior | Hero | Estado |
|---:|---|---|---|
| 1 | Pote não aberto | BTN | 🟡 DRAFT_REVIEW |
| 2 | BTN raise 2 | SB | 🟡 DRAFT_REVIEW |
| 3 | BTN raise 2 → SB fold | BB | 🟡 DRAFT_REVIEW |
| 4 | BTN raise 2 → SB fold → BB raise 6 | BTN | 🟡 DRAFT_REVIEW |
| 5 | BTN raise 2 → SB fold → BB raise 6 → BTN shove | BB | 🔴 BLOCKED_AGGREGATE |
| 6 | BTN raise 2 → SB fold → BB shove | BTN | 🟡 DRAFT_REVIEW |
| 7 | BTN raise 2 → SB call → BB raise 8 | BTN | 🟡 DRAFT_REVIEW |
| 8 | BTN raise 2 → SB call → BB raise 8 → BTN fold | SB | 🟠 REVIEW_MISSING_REACH |
| 9 | BTN raise 2 → SB call → BB raise 8 → BTN fold → SB shove | BB | 🟠 REVIEW_MISSING_PARENT |
| — | BTN raise 2 → SB call | BB | ⚪ MISSING |

```mermaid
flowchart TD
  N1["1 · BTN Open · DRAFT_REVIEW"]
  N2["2 · SB vs BTN · DRAFT_REVIEW"]
  N1 -->|"BTN raise 2"| N2
  N3["3 · BB vs BTN (SB fold) · DRAFT_REVIEW"]
  N2 -->|"SB fold"| N3
  N4["4 · BTN vs BB 3bet · DRAFT_REVIEW"]
  N3 -->|"BB raise 6"| N4
  N5["5 · BB vs BTN 4bet AI · BLOCKED_AGGREGATE"]
  N4 -->|"BTN shove"| N5
  N6["6 · BTN vs BB shove · DRAFT_REVIEW"]
  N3 -->|"BB shove"| N6
  N7["7 · BTN vs squeeze · DRAFT_REVIEW"]
  N10 -->|"BB raise 8"| N7
  N8["8 · SB vs squeeze · REVIEW_MISSING_REACH"]
  N7 -->|"BTN fold"| N8
  N9["9 · BB vs SB 4bet AI · REVIEW_MISSING_PARENT"]
  N8 -->|"SB shove"| N9
  N10["? · BB vs BTN + SB · MISSING"]
  N2 -->|"SB call"| N10
  classDef draft fill:#fff1c2,stroke:#b88728,color:#222
  classDef blocked fill:#fdd9d9,stroke:#bd4242,color:#222
  classDef pending fill:#f1f1f1,stroke:#777,stroke-dasharray:5 3,color:#222
  classDef special fill:#ffe2c1,stroke:#c56a22,color:#222
  classDef done fill:#d8f1dc,stroke:#438747,color:#222
  class N1 draft
  class N2 draft
  class N3 draft
  class N4 draft
  class N5 blocked
  class N6 draft
  class N7 draft
  class N8 special
  class N9 special
  class N10 pending
```

## 3. Referências

- [Catálogo de charts](CHARTS_CATALOG.md): frequências, desvios e fontes.
- [Status atual](STATUS.md): gates e pendências.
- [Política de ingestão](PREFLOP_POLICY.md): regras de atualização.

Nenhum estado de revisão equivale a homologação. Consulte o status para confirmar ativação e testes nativos.
