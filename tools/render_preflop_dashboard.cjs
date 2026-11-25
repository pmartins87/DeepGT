#!/usr/bin/env node
// Run from the repository root: node tools/render_preflop_dashboard.cjs [--check]
const fs = require("node:fs");
function render(reg){
 const levels=reg.stack_policy.levels,nodes=reg.nodes;
 const status={MISSING:"⚪",RECEIVED_PENDING_EXTRACTION:"🔵",DRAFT_REVIEW:"🟡",REVIEW_MISSING_REACH:"🟠",REVIEW_MISSING_PARENT:"🟠",BLOCKED_AGGREGATE:"🔴",VALIDATED:"🟢",ACTIVE:"🟢",NOT_APPLICABLE:"—"};
 const icon=s=>{if(!(s in status))throw Error("Status desconhecido: "+s);return status[s]};
 const esc=s=>String(s).replace(/\|/g,"\\|").replace(/\r?\n/g," ");
 let out=["# Painel preflop — DeepGT","","Gerado a partir de [PREFLOP_REGISTRY.json](../charts/PREFLOP_REGISTRY.json). Não editar manualmente; atualizar o registro e regenerar este painel.","","🔵 Print recebido, extração pendente · 🟡 Codificado em revisão · 🟠 Revisão de reach/pai · 🔴 Bloqueado · ⚪ Pendente · 🟢 Validado/ativo (estado distinto no registro) · — Não aplicável confirmado.","","## 1. Matriz de cobertura","","| Cenário | "+levels.join(" | ")+" |","|---|"+levels.map(()=>"---:").join("|")+"|"];
 const ids=new Set(nodes.map(n=>n.id));if(ids.size!==nodes.length)throw Error("IDs duplicados");
 for(const n of nodes)out.push("| "+esc(n.label||n.id)+" | "+levels.map(l=>icon(n.stack_slots[l])).join(" | ")+" |");
 out.push("","A matriz abrange apenas famílias já identificadas; não mede a cobertura de toda a árvore GTO. Slots pendentes não implicam que o cenário seja legal em todos os stacks.","","| Stack | Recebidos/identificados | A extrair | Revisão normal | Revisão especial | Bloqueados | Validados/ativos | Pendentes |","|---:|---:|---:|---:|---:|---:|---:|---:|");
 for(const l of levels){const s=nodes.map(n=>n.stack_slots[l]);const c=x=>s.filter(v=>v===x).length;out.push(`| ${l} | ${s.length-c("MISSING")-c("NOT_APPLICABLE")}/${s.length} | ${c("RECEIVED_PENDING_EXTRACTION")} | ${c("DRAFT_REVIEW")} | ${c("REVIEW_MISSING_REACH")+c("REVIEW_MISSING_PARENT")} | ${c("BLOCKED_AGGREGATE")} | ${c("VALIDATED")+c("ACTIVE")} | ${c("MISSING")} |`)}
 out.push("","## 2. Sequências e árvores por stack","","Históricos marcados como reconstruídos não foram integralmente exibidos no print. A sequência deve ser conferida com o pai e os blocos inferiores, antes de codificar. Os demais ramos ainda não identificados não são inferidos.");
 for(const l of levels){const g=nodes.filter(n=>n.histories?.[l]);if(!g.length)continue;out.push("",`### ${l} BB`,"","| Print | Sequência anterior | Hero | Trecho visível / conferência | Estado |","|---:|---|---|---|---|");for(const n of g){const h=n.histories[l];out.push(`| ${h.print??"—"} | ${esc(h.sequence)} | ${esc(n.hero)} | ${esc(h.visible_tail??"—")}${h.history_status?" · "+esc(h.history_status):""} | ${icon(n.stack_slots[l])} ${n.stack_slots[l]} |`)}
 out.push("","```mermaid","flowchart TD");
 const mapped=new Map(g.map((n,i)=>[n.id,"N"+(i+1)]));const safe=s=>String(s).replace(/"/g,"&quot;").replace(/[\r\n]/g," ");
 for(const n of g){const h=n.histories[l],id=mapped.get(n.id);out.push(`  ${id}["${h.print??"?"} · ${safe(n.label||n.id)} · ${safe(n.stack_slots[l])}"]`);if(h.parent_id){if(!mapped.has(h.parent_id))throw Error("Pai sem histórico: "+h.parent_id);out.push(`  ${mapped.get(h.parent_id)} -->|"${safe(h.edge)}"| ${id}`)}}
 out.push("  classDef received fill:#dbeafe,stroke:#3477bc,color:#222","  classDef draft fill:#fff1c2,stroke:#b88728,color:#222","  classDef blocked fill:#fdd9d9,stroke:#bd4242,color:#222","  classDef pending fill:#f1f1f1,stroke:#777,stroke-dasharray:5 3,color:#222","  classDef special fill:#ffe2c1,stroke:#c56a22,color:#222","  classDef done fill:#d8f1dc,stroke:#438747,color:#222");
 for(const n of g){const s=n.stack_slots[l],cl=s==="RECEIVED_PENDING_EXTRACTION"?"received":s==="MISSING"||s==="NOT_APPLICABLE"?"pending":s==="BLOCKED_AGGREGATE"?"blocked":s.startsWith("REVIEW_")?"special":s==="VALIDATED"||s==="ACTIVE"?"done":"draft";out.push(`  class ${mapped.get(n.id)} ${cl}`)}out.push("```");
 }
 out.push("","## 3. Referências","","- [Catálogo de charts](CHARTS_CATALOG.md): frequências, desvios e fontes.","- [Status atual](STATUS.md): gates e pendências.","- [Política de ingestão](PREFLOP_POLICY.md): regras de atualização.","","Nenhum estado de revisão equivale a homologação. Consulte o status para confirmar ativação e testes nativos.","");return out.join("\n");
}
const registry=JSON.parse(fs.readFileSync("charts/PREFLOP_REGISTRY.json","utf8"));
const result=render(registry),path="docs/PREFLOP_DASHBOARD.md";
if(process.argv.includes("--check")){if(fs.readFileSync(path,"utf8")!==result){console.error("Dashboard desatualizado; execute o gerador.");process.exit(1);}console.log("Dashboard atualizado.");}else fs.writeFileSync(path,result,"utf8");
