import fs from 'node:fs/promises';
import assert from 'node:assert/strict';

const origin = 'http://localhost:3010';
const checks = [];
const sitemap = await (await fetch(`${origin}/sitemap.xml`)).text();
const paths = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => new URL(match[1]).pathname);
assert(paths.length > 0);
assert(!paths.some(path => path.startsWith('/store/')), 'Hidden product URLs must leave the sitemap');
const hiddenImage = /(?:\/|%2f)images(?:\/|%2f)(?:patches|custom-patches|chenille|bundles)(?:\/|%2f)/i;
for (const path of paths) {
  const response = await fetch(origin + path);
  const html = await response.text();
  assert.equal(response.status, 200, path);
  assert.match(html, /<h1\b/, `Server heading: ${path}`);
  assert(!hiddenImage.test(html), `Legacy patch image in rendered HTML: ${path}`);
  assert(!/href="\/store\/[a-z0-9-]+"/.test(html), `Legacy product link: ${path}`);
}
checks.push(`${paths.length} current sitemap pages return 200 without legacy patch images or product links`);
const patches = await fs.readFile('app/store/patches.ts', 'utf8');
const bundles = await fs.readFile('app/store/bundles.ts', 'utf8');
const slugs = [
  ...[...patches.matchAll(/title:\s*"([^"]+)"/g)].map(match => match[1].toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')),
  ...[...bundles.matchAll(/slug:\s*"([^"]+)"/g)].map(match => match[1]),
];
assert.equal(slugs.length, 27);
for (const slug of slugs) {
  const response = await fetch(`${origin}/store/${slug}`);
  await response.text();
  assert.equal(response.status, 404, `Hidden product still accessible: ${slug}`);
}
checks.push('All 21 old patch pages and six patch bundle pages return 404');

const target = await (await fetch('http://localhost:9222/json/new?about:blank', { method: 'PUT' })).json();
const ws = new WebSocket(target.webSocketDebuggerUrl);
await new Promise((resolve, reject) => { ws.addEventListener('open', resolve, { once: true }); ws.addEventListener('error', reject, { once: true }); });
let id = 0;
const pending = new Map();
ws.addEventListener('message', event => { const data = JSON.parse(event.data); const callback = pending.get(data.id); if (callback) { pending.delete(data.id); callback(data); } });
function call(method, params = {}) {
  return new Promise((resolve, reject) => {
    const next = ++id;
    const timeout = setTimeout(() => { pending.delete(next); reject(new Error(`CDP timeout ${method}`)); }, 20000);
    pending.set(next, data => { clearTimeout(timeout); if (data.error) reject(new Error(data.error.message)); else resolve(data.result); });
    ws.send(JSON.stringify({ id: next, method, params }));
  });
}
async function evaluate(expression) {
  const result = await call('Runtime.evaluate', { expression, returnByValue: true });
  if (result.exceptionDetails) throw new Error(result.exceptionDetails.text);
  return result.result.value;
}
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
async function waitFor(expression, label) {
  for (let i = 0; i < 80; i++) { if (await evaluate(expression)) return; await delay(250); }
  throw new Error(label);
}
const cards = `document.querySelectorAll('main .vr-lift[role="button"]')`;
let savedCart;
try {
  await call('Page.enable');
  await call('Page.navigate', { url: origin + '/portfolio?category=custom-patches' });
  await waitFor(`${cards}.length === 9 && [...document.querySelectorAll('button')].some(button => button.textContent.trim() === 'Custom Patches' && button.className.includes('bg-brand-600'))`, 'Patch collection did not initialize');
  for (let i = 0; i < 4; i++) {
    await evaluate(`[...document.querySelectorAll('button')].find(button => button.textContent.includes('LOAD MORE DESIGNS'))?.click()`);
    await delay(200);
  }
  await waitFor(`${cards}.length === 40`, 'Expected exactly 40 approved patch samples');
  assert.equal(await evaluate(`[...${cards}].filter(card => card.textContent.includes('Felt Patch')).length`), 20);
  assert.equal(await evaluate(`[...${cards}].filter(card => card.textContent.includes('Twill Patch')).length`), 20);
  assert.equal(await evaluate(`[...document.querySelectorAll('button')].some(button => ['Chenille', 'Bundles'].includes(button.textContent.trim()))`), false);
  checks.push('All Patches contains exactly 20 Felt and 20 Twill samples; old patch filters are hidden');
  for (const [label, directory] of [['Cap Logo', 'cap-logo'], ['Vector Art', 'vector-art'], ['Jacket Back', 'jacket-back-design'], ['Left Chest', 'left-chest-logo']]) {
    await evaluate(`[...document.querySelectorAll('button')].find(button => button.textContent.trim() === ${JSON.stringify(label)}).click()`);
    await waitFor(`${cards}.length > 0 && decodeURIComponent(${cards}[0].querySelector('img').src).includes('/images/${directory}/')`, `${label} portfolio disappeared`);
  }
  checks.push('Cap Logo, Vector Art, Jacket Back, and Left Chest portfolio collections remain available');
  savedCart = await evaluate(`localStorage.getItem('velora-cart')`);
  await evaluate(`localStorage.setItem('velora-cart', JSON.stringify([{id:'hike-more-worry-less',title:'Hike More Worry Less',price:2.99,qty:1,image:'/images/patches/hike-more-worry-less-patch-embroidery-digitizing-dst.webp'}]))`);
  await call('Page.reload');
  await waitFor(`localStorage.getItem('velora-cart') === '[]'`, 'Retired patch remained in the saved cart');
  checks.push('Previously saved legacy patches are removed from the cart on load');
  await fs.mkdir('reports/patch-visibility', { recursive: true });
  await fs.writeFile('reports/patch-visibility/checks.json', JSON.stringify({ passed: checks.length, checks }, null, 2));
  console.log(JSON.stringify({ passed: checks.length, checks }, null, 2));
} finally {
  if (savedCart !== undefined) await evaluate(savedCart === null ? `localStorage.removeItem('velora-cart')` : `localStorage.setItem('velora-cart', ${JSON.stringify(savedCart)})`).catch(() => {});
  ws.close();
  await fetch(`http://localhost:9222/json/close/${target.id}`);
}
