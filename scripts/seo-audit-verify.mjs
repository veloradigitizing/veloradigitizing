import fs from 'node:fs';
const d = JSON.parse(fs.readFileSync('SEO_AUDIT_DATA.json','utf8'));
const base = 'https://www.veloradigitizing.com';
const assets = [...new Set(d.pages.flatMap(p => [...p.ogImages,...p.images.map(i=>i.src)]).filter(Boolean).map(src => { const u = new URL(src,base); return u.pathname==='/_next/image' ? new URL(u.searchParams.get('url'),base).href : u.href; }))];
const checked = [];
for(let i=0;i<assets.length;i+=8) checked.push(...await Promise.all(assets.slice(i,i+8).map(async url => {try {const r=await fetch(url,{method:'HEAD',signal:AbortSignal.timeout(15000)});return {url,status:r.status};}catch(e){return {url,error:e.message};}})));
const incoming = new Map(d.pages.map(p=>[p.url.replace(/\/$/,''),new Set()]));
for(const p of d.pages) for(const link of p.links) {try{const u=new URL(link,base);u.hash='';u.search='';const key=u.href.replace(/\/$/,'');if(key!==p.url.replace(/\/$/,'')) incoming.get(key)?.add(p.url);}catch{}}
const summary = { assetChecks:checked.length,assetFailures:checked.filter(r=>r.status!==200),orphanSitemapPages:[...incoming].filter(([,v])=>!v.size).map(([k])=>k),schemaJsonFailures:d.pages.filter(p=>p.schemas.includes('INVALID JSON')).map(p=>p.url),canonicalMismatches:d.pages.filter(p=>p.canonical[0].replace(/\/$/,'')!==p.url.replace(/\/$/,'')).map(p=>p.url),productRatings:d.pages.filter(p=>p.schemas.some(s=>s['@graph']?.some(g=>g['@type']==='Product'&&g.aggregateRating))).map(p=>p.url),blogCount:d.blogs.length,storeCount:d.catalog.total };
d.verification={...summary,assets:checked};
fs.writeFileSync('SEO_AUDIT_DATA.json',JSON.stringify(d,null,2));
console.log(JSON.stringify(summary,null,2));
