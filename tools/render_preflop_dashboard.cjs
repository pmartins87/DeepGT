#!/usr/bin/env node
const fs=require("node:fs");
function render(reg){
 const levels=reg.stack_policy.levels,nodes=reg.nodes;
 const code=s=>s==="MISSING"?"⚪":s==="NOT_APPLICABLE"?"—":s==="RECEIVED_PENDING_EXTRACTION"?"🔵":"🟢";
 const name=s=>s==="MISSING"?"Falta print":s==="NOT_APPLICABLE"?"Não aplicável":s==="RECEIVED_PENDING_EXTRACTION"?"Recebida, falta codificar":"Codificada";
 const esc=s=>String(s).replace(/\|/g,"\\|").replace(/\r?\n/g," ");
 const entries=nodes.flatMap(n=>Object.entries(n.histories||{}).filter(([l,h])=>h.print!=null).map(([l,h])=>({n,l,h}))).sort((a,b)=>a.h.print-b.h.print);
 for(let i=0;i<entries.length;i++){if(entries[i].h.print!==i+1)throw Error("Numeração não contínua ou duplicada: "+entries[i].h.print);}
 const out=["# Painel preflop — DeepGT","","## 1. Lista contínua dos prints","","Numeração global, permanente, por ordem de recebimento (todos os stacks). Não intercalar cenários ainda sem print, nem renumerar ao preencher lacunas da árvore.","",`**Último print registrado: ${entries.length}. Próximo print novo: ${entries.length+1}.**`,"","| Print | Stack (BB) | Origem | Sequência anterior | Hero | Estado |","|---:|---:|---|---|:---:|---|"];
 for(const {n,l,h} of entries)out.push(`| ${h.print} | ${l} | ${n.scope==="HU native"?"HU nativo":"3-handed"} | ${esc(h.sequence)} | ${esc(n.hero)} | ${code(n.stack_slots[l])} ${name(n.stack_slots[l])} |`);
 out.push("","## 2. Matriz de cobertura","","🟢 Codificada · ⚪ Falta print · 🔵 Recebida, falta codificar · — Não aplicável.","","Codificada significa que a chart já está no arquivo de desenvolvimento, não que esteja homologada ou ativa. As ressalvas ficam na [auditoria técnica](AUDIT_25BB_DRAFT.md).","","| Cenário | "+levels.join(" | ")+" |","|---|"+levels.map(()=>":---:").join("|")+"|");
 for(const n of nodes)out.push("| "+esc(n.label||n.id)+" | "+levels.map(l=>code(n.stack_slots[l])).join(" | ")+" |");
 out.push("","| Stack | Codificadas | Falta print | Recebidas a codificar |","|---:|---:|---:|---:|");
 for(const l of levels){const s=nodes.map(n=>n.stack_slots[l]);out.push(`| ${l} | ${s.filter(x=>code(x)==="🟢").length} | ${s.filter(x=>x==="MISSING").length} | ${s.filter(x=>x==="RECEIVED_PENDING_EXTRACTION").length} |`);}
 out.push("","Somente famílias identificadas; os espaços vazios nos demais stacks não confirmam que os históricos sejam aplicáveis.","","## 3. Árvores por stack");
 for(const l of levels) for(const scope of ["3-handed origin","HU native"]){const g=nodes.filter(n=>n.histories?.[l]&&n.scope===scope);if(!g.length)continue;
 out.push("",`### ${l} BB — ${scope==="HU native"?"HU nativo":"3-handed de origem"}`,"","```mermaid","flowchart TD");
 const map=new Map(g.map((n,i)=>[n.id,"N"+(i+1)]));const safe=s=>String(s).replace(/"/g,"&quot;").replace(/[\r\n]/g," ");
 for(const n of g){const h=n.histories[l],id=map.get(n.id);out.push(`  ${id}["${h.print??"?"} · ${safe(n.label||n.id)}"]`);if(h.parent_id){if(!map.has(h.parent_id))throw Error("Pai sem histórico");out.push(`  ${map.get(h.parent_id)} -->|"${safe(h.edge)}"| ${id}`);}}
 out.push("  classDef coded fill:#d8f1dc,stroke:#438747,color:#222","  classDef pending fill:#f1f1f1,stroke:#777,stroke-dasharray:5 3,color:#222","  classDef received fill:#dbeafe,stroke:#3477bc,color:#222");
 for(const n of g){const s=n.stack_slots[l];out.push(`  class ${map.get(n.id)} ${code(s)==="🟢"?"coded":s==="RECEIVED_PENDING_EXTRACTION"?"received":"pending"}`);}out.push("```");}
 out.push("","## 4. Cenários conhecidos sem print","","Não recebem número até o recebimento da imagem.","","| Stack | Sequência anterior | Hero |","|---:|---|:---:|");
 for(const l of levels)for(const n of nodes){const h=n.histories?.[l];if(h&&h.print==null&&n.stack_slots[l]==="MISSING")out.push(`| ${l} | ${esc(h.sequence)} | ${esc(n.hero)} |`);}
 out.push("","## 5. Referências","","- [Registro fonte](../charts/PREFLOP_REGISTRY.json) — históricos, fontes, detalhes técnicos.","- [Catálogo](CHARTS_CATALOG.md) — frequências e arquivos.","- [Status](STATUS.md) — situação e pendências reais.","- [Política de ingestão](PREFLOP_POLICY.md) — fluxo obrigatório.","- [Política de revisão estratégica](STRATEGIC_REVIEW.md) — tratamento de decisões contraintuitivas.","");return out.join("\n");
}
const registry=JSON.parse(fs.readFileSync("charts/PREFLOP_REGISTRY.json","utf8"));
const result=render(registry),path="docs/PREFLOP_DASHBOARD.md";
if(process.argv.includes("--check")){if(fs.readFileSync(path,"utf8")!==result){console.error("Dashboard desatualizado; execute o gerador.");process.exit(1);}console.log("Dashboard atualizado.");}else fs.writeFileSync(path,result,"utf8");
