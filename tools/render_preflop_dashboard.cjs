#!/usr/bin/env node
const fs=require("node:fs");
function render(reg){
 const levels=reg.stack_policy.levels,nodes=reg.nodes;
 const code=s=>s==="MISSING"?"⚪":s==="NOT_APPLICABLE"?"—":s==="RECEIVED_PENDING_EXTRACTION"?"🔵":"🟢";
 const name=s=>s==="MISSING"?"Falta print":s==="NOT_APPLICABLE"?"Não aplicável":s==="RECEIVED_PENDING_EXTRACTION"?"Recebida, falta codificar":"Codificada";
 const esc=s=>String(s).replace(/\|/g,"\\|").replace(/\r?\n/g," ");
 const out=["# Painel preflop — DeepGT","","🟢 Codificada · ⚪ Falta print · 🔵 Recebida, falta codificar (apenas se houver trabalho realmente pendente) · — Não aplicável.","","Codificada significa que a chart já está no arquivo de desenvolvimento; não significa estratégia homologada ou ativa. As ressalvas de precisão e validação ficam na [auditoria técnica](AUDIT_25BB_DRAFT.md), sob responsabilidade do desenvolvimento.","","## 1. Matriz de cobertura","","| Cenário | "+levels.join(" | ")+" |","|---|"+levels.map(()=>":---:").join("|")+"|"];
 for(const n of nodes)out.push("| "+esc(n.label||n.id)+" | "+levels.map(l=>code(n.stack_slots[l])).join(" | ")+" |");
 out.push("","| Stack | Codificadas | Falta print | Recebidas a codificar |","|---:|---:|---:|---:|");
 for(const l of levels){const s=nodes.map(n=>n.stack_slots[l]);out.push(`| ${l} | ${s.filter(x=>code(x)==="🟢").length} | ${s.filter(x=>x==="MISSING").length} | ${s.filter(x=>x==="RECEIVED_PENDING_EXTRACTION").length} |`)}
 out.push("","Somente famílias identificadas; a matriz cresce conforme novos cenários são mapeados. Os espaços vazios nos demais stacks não confirmam que os históricos sejam aplicáveis.","","## 2. Sequências e árvores por stack");
 for(const l of levels){const g=nodes.filter(n=>n.histories?.[l]);if(!g.length)continue;out.push("",`### ${l} BB`,"","| Print | Sequência anterior | Hero | Estado |","|---:|---|---|---|");for(const n of g){const h=n.histories[l];out.push(`| ${h.print??"—"} | ${esc(h.sequence)} | ${esc(n.hero)} | ${code(n.stack_slots[l])} ${name(n.stack_slots[l])} |`)}
 out.push("","```mermaid","flowchart TD");const map=new Map(g.map((n,i)=>[n.id,"N"+(i+1)]));const safe=s=>String(s).replace(/"/g,"&quot;").replace(/[\r\n]/g," ");
 for(const n of g){const h=n.histories[l],id=map.get(n.id);out.push(`  ${id}["${h.print??"?"} · ${safe(n.label||n.id)}"]`);if(h.parent_id){if(!map.has(h.parent_id))throw Error("Pai sem histórico");out.push(`  ${map.get(h.parent_id)} -->|"${safe(h.edge)}"| ${id}`)}}
 out.push("  classDef coded fill:#d8f1dc,stroke:#438747,color:#222","  classDef pending fill:#f1f1f1,stroke:#777,stroke-dasharray:5 3,color:#222","  classDef received fill:#dbeafe,stroke:#3477bc,color:#222");
 for(const n of g){const s=n.stack_slots[l];out.push(`  class ${map.get(n.id)} ${code(s)==="🟢"?"coded":s==="RECEIVED_PENDING_EXTRACTION"?"received":"pending"}`)}out.push("```");}
 out.push("","## 3. Referências","","- [Registro fonte](../charts/PREFLOP_REGISTRY.json) — histórico, fontes, detalhes técnicos.","- [Catálogo](CHARTS_CATALOG.md) — frequências e arquivos.","- [Status](STATUS.md) — situação e pendências reais.","- [Política de ingestão](PREFLOP_POLICY.md) — fluxo obrigatório.","");return out.join("\n");
}
const registry=JSON.parse(fs.readFileSync("charts/PREFLOP_REGISTRY.json","utf8"));
const result=render(registry),path="docs/PREFLOP_DASHBOARD.md";
if(process.argv.includes("--check")){if(fs.readFileSync(path,"utf8")!==result){console.error("Dashboard desatualizado; execute o gerador.");process.exit(1);}console.log("Dashboard atualizado.");}else fs.writeFileSync(path,result,"utf8");
