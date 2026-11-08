import fs from 'node:fs/promises';

const origin = process.argv[2] ?? 'https://www.veloradigitizing.com';
const directory = process.argv[3] ?? 'reports/service-indexing';
await fs.mkdir(directory, { recursive: true });
const paths = ['/', '/services', '/services/cap-logo-digitizing', '/services/3d-puff-digitizing', '/services/applique-digitizing', '/blog/cap-hat-logo-embroidery-digitizing-guide', '/blog/3d-puff-embroidery-digitizing-guide', '/blog/applique-embroidery-digitizing-guide'];
const strip = html => html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '').replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
const attr = (tag, name) => tag.match(new RegExp(`\\b${name}="([^"]*)"`, 'i'))?.[1];
async function get(path, bot = false) {
  const response = await fetch(new URL(path, origin), { signal: AbortSignal.timeout(30000), headers: bot ? { 'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)' } : {} });
  const html = await response.text();
  return { response, html };
}
const pages = [];
for (const path of paths) {
  const { response, html } = await get(path);
  const { response: botResponse, html: botHtml } = await get(path, true);
  const tags = [...html.matchAll(/<(?:meta|link)\b[^>]*>/gi)].map(m => m[0]);
  const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1] ?? html;
  const filename = path === '/' ? 'home' : path.slice(1).replaceAll('/', '--');
  await fs.writeFile(`${directory}/${filename}.html`, html);
  const text = strip(main);
  await fs.writeFile(`${directory}/${filename}.txt`, text);
  const anchors = [...html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi)].map(m => ({ href: attr(m[1], 'href'), text: strip(m[2]), rel: attr(m[1], 'rel') }));
  pages.push({ path, status: response.status, finalUrl: response.url, canonical: tags.filter(t => attr(t, 'rel') === 'canonical').map(t => attr(t, 'href')), robots: tags.filter(t => ['robots', 'googlebot'].includes(attr(t, 'name'))).map(t => attr(t, 'content')), xRobotsTag: response.headers.get('x-robots-tag'), title: strip(html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? ''), headings: [...main.matchAll(/<h([12])\b[^>]*>([\s\S]*?)<\/h\1>/gi)].map(m => ({ level: Number(m[1]), text: strip(m[2]) })), words: text.split(' ').length, anchors, botStatus: botResponse.status, botHasH1: /<h1\b/i.test(botHtml), bytes: Buffer.byteLength(html) });
}
const resources = [];
for (const path of ['/robots.txt', '/sitemap.xml', '/nonexistent-indexing-audit-404']) {
  const { response, html } = await get(path);
  resources.push({ path, status: response.status, text: path.endsWith('.txt') || path.endsWith('.xml') ? html : undefined });
}
const report = { checkedAt: new Date().toISOString(), origin, pages, resources };
await fs.writeFile(`${directory}/audit.json`, JSON.stringify(report, null, 2));
console.log(JSON.stringify({ ...report, pages: pages.map(({ anchors, ...p }) => ({ ...p, serviceLinks: anchors.filter(a => a.href?.startsWith('/services')) })), resources: resources.map(r => ({ path: r.path, status: r.status })) }, null, 2));
