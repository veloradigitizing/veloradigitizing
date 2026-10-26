import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const ts = require('typescript');
require.extensions['.ts'] = (module, filename) => module._compile(ts.transpileModule(fs.readFileSync(filename, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText, filename);
const { STORE_ITEMS } = require('../app/store/catalog.ts');
const { BLOG_POSTS } = require('../app/blog/posts.ts');
const base = 'https://www.veloradigitizing.com';
async function get(url) {
  try { const res = await fetch(url, { signal: AbortSignal.timeout(25000) }); return { status: res.status, url: res.url, text: await res.text(), headers: Object.fromEntries(res.headers) }; }
  catch (error) { return { url, error: error.message }; }
}
const sitemap = await get(base + '/sitemap.xml');
const robots = await get(base + '/robots.txt');
const urls = [...(sitemap.text ?? '').matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
const clean = s => s.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
const attr = (s, key) => s.match(new RegExp('\\b' + key + '="([^"]*)"', 'i'))?.[1];
const pages = [];
for (let i = 0; i < urls.length; i += 5) {
  const results = await Promise.all(urls.slice(i, i + 5).map(async url => {
    const r = await get(url); if (!r.text) return r;
    const tags = [...r.text.matchAll(/<meta\b[^>]*>/g)].map(m => m[0]);
    const meta = name => tags.filter(t => attr(t, 'name') === name || attr(t, 'property') === name).map(t => attr(t, 'content'));
    const canonicals = [...r.text.matchAll(/<link\b[^>]*>/g)].map(m => m[0]).filter(t => attr(t, 'rel') === 'canonical').map(t => attr(t, 'href'));
    const links = [...r.text.matchAll(/<a\b[^>]*>/g)].map(m => attr(m[0], 'href')).filter(Boolean);
    const imgs = [...r.text.matchAll(/<img\b[^>]*>/g)].map(m => ({ src: attr(m[0], 'src'), alt: attr(m[0], 'alt') }));
    const schemas = [...r.text.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(m => { try { return JSON.parse(m[1]); } catch { return 'INVALID JSON'; } });
    const main = r.text.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1] ?? '';
    return { url, status: r.status, finalUrl: r.url, title: clean(r.text.match(/<title>(.*?)<\/title>/)?.[1] ?? ''), description: meta('description'), robots: meta('robots'), googlebot: meta('googlebot'), canonical: canonicals, h1: [...r.text.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/g)].map(m => clean(m[1])), wordCount: clean(main.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '')).split(/\s+/).length, links, images: imgs, ogImages: meta('og:image'), schemas, htmlBytes: Buffer.byteLength(r.text), xRobotsTag: r.headers['x-robots-tag'] };
  }));
  pages.push(...results);
}
const localFiles = [];
function walk(dir) { for (const e of fs.readdirSync(dir, {withFileTypes:true})) { const p = path.join(dir,e.name); if(e.isDirectory()) walk(p); else if(/\.(tsx?|css)$/.test(p)) localFiles.push(p); } }
walk('app');
const missingAssets = [];
for (const file of localFiles) { const content = fs.readFileSync(file,'utf8'); for(const m of content.matchAll(/["'`](\/images\/[^"'`$\s]+)["'`]/g)) if(!fs.existsSync(path.join('public',m[1]))) missingAssets.push({file,asset:m[1]}); }
const probes = await Promise.all([base+'/seo-audit-nonexistent-404', 'http://veloradigitizing.com', 'https://veloradigitizing.com', base+'/store/tiger-head-embroidery-digitizing-file'].map(async url => { const r = await get(url); return {requested:url,status:r.status,finalUrl:r.url,error:r.error}; }));
const known = new Set(pages.map(p=>new URL(p.url).pathname));
const linkedPaths = [...new Set(pages.flatMap(p=>(p.links??[]).filter(l=>l.startsWith('/')&&!l.startsWith('//')).map(l=>l.split(/[?#]/)[0])))];
const extraPaths = linkedPaths.filter(p=>!known.has(p));
const extraProbes = await Promise.all(extraPaths.map(async p=> { const r=await get(base+p); return {path:p,status:r.status,finalUrl:r.url,error:r.error}; }));
const report = { checkedAt:new Date().toISOString(), sitemap:{status:sitemap.status,count:urls.length,error:sitemap.error}, robots:{status:robots.status,text:robots.text,error:robots.error}, pages, missingAssets, probes, extraProbes, catalog:{total:STORE_ITEMS.length,noLongDescription:STORE_ITEMS.filter(x=>!x.longDescription).map(x=>x.slug)}, blogs:BLOG_POSTS.map(p=>({slug:p.slug,title:p.title,metaTitle:p.metaTitle,tags:p.tags,publishedAt:p.publishedAt,updatedAt:p.updatedAt,words:p.content.reduce((n,b)=>n+('text' in b?b.text:'items' in b?b.items.join(' '):'').split(/\s+/).filter(Boolean).length,0),service:p.relatedService.href})) };
fs.writeFileSync('SEO_AUDIT_DATA.json',JSON.stringify(report,null,2));
const duplicates = key => Object.entries(Object.groupBy(pages,p=>JSON.stringify(p[key]))).filter(([,v])=>v.length>1).map(([value,v])=>({value,urls:v.map(p=>p.url)}));
console.log(JSON.stringify({sitemap:report.sitemap,robots:report.robots,probes,extraProbes,catalog:report.catalog,missingAssets,issues:pages.filter(p=>p.status!==200||p.h1?.length!==1||p.description?.length!==1||p.canonical?.length!==1||p.robots?.some(x=>x.includes('noindex'))).map(({links,images,schemas,...p})=>p),duplicateTitles:duplicates('title'),duplicateDescriptions:duplicates('description'),duplicateCanonicals:duplicates('canonical')},null,2));
