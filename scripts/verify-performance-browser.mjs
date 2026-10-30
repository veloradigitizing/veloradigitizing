import fs from 'node:fs/promises';
import assert from 'node:assert/strict';

const origin = 'http://localhost:3010';
const directory = 'reports/performance-local';
await fs.mkdir(directory, { recursive: true });
const checks = [];
const sitemap = await (await fetch(`${origin}/sitemap.xml`)).text();
const paths = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => new URL(match[1]).pathname);
let cursor = 0;
await Promise.all(Array.from({ length: 3 }, async () => {
  while (cursor < paths.length) {
    const path = paths[cursor++];
    const response = await fetch(origin + path);
    const html = await response.text();
    assert.equal(response.status, 200, `HTTP status ${path}`);
    assert.match(html, /<h1\b/, `Server-rendered heading ${path}`);
  }
}));
checks.push(`${paths.length} sitemap pages return HTTP 200 and server-rendered h1 headings`);

const manifest = JSON.parse(await fs.readFile('lib/hero-images.json', 'utf8'));
const asset = Object.values(manifest)[0].src;
const response = await fetch(origin + asset);
assert.match(response.headers.get('cache-control'), /max-age=31536000.*immutable/);
assert.match(response.headers.get('content-type'), /image\/webp/);
checks.push('Generated hero assets return WebP with immutable caching');

const target = await (await fetch('http://localhost:9222/json/new?about:blank', { method: 'PUT' })).json();
const ws = new WebSocket(target.webSocketDebuggerUrl);
await new Promise((resolve, reject) => { ws.addEventListener('open', resolve, { once: true }); ws.addEventListener('error', reject, { once: true }); });
let id = 0;
const pending = new Map();
ws.addEventListener('message', event => {
  const data = JSON.parse(event.data);
  const callback = pending.get(data.id);
  if (callback) { pending.delete(data.id); callback(data); }
});
function call(method, params = {}) {
  return new Promise((resolve, reject) => {
    const next = ++id;
    const timeout = setTimeout(() => { pending.delete(next); reject(new Error(`CDP timeout: ${method}`)); }, 20000);
    pending.set(next, data => { clearTimeout(timeout); if (data.error) reject(new Error(data.error.message)); else resolve(data.result); });
    ws.send(JSON.stringify({ id: next, method, params }));
  });
}
async function evaluate(expression) {
  const result = await call('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true });
  if (result.exceptionDetails) throw new Error(result.exceptionDetails.text);
  return result.result.value;
}
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
async function waitFor(expression, label) {
  for (let i = 0; i < 80; i++) { if (await evaluate(expression)) return; await delay(250); }
  throw new Error(`Browser verification failed: ${label}`);
}
async function navigate(path) {
  await call('Page.navigate', { url: origin + path });
  await waitFor(`location.pathname === ${JSON.stringify(path.split('?')[0])} && document.readyState === 'complete' && !!document.querySelector('main h1')`, `Page ready ${path}`);
}
const cards = `document.querySelectorAll('main .vr-lift[role="button"]')`;
async function screenshot(name) {
  const capture = await call('Page.captureScreenshot', { format: 'jpeg', quality: 80 });
  await fs.writeFile(`${directory}/${name}.jpg`, Buffer.from(capture.data, 'base64'));
}
try {
  await call('Page.enable');
  await call('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 1, mobile: true });
  for (const path of ['/', '/portfolio', '/services/cap-logo-digitizing']) {
    await navigate(path);
    await waitFor(`(() => {const image = document.querySelector('main > section img.object-cover'); return image?.complete && image.naturalWidth > 0 && image.currentSrc.includes('/images/heroes/');})()`, `Prepared hero loads ${path}`);
    assert.equal(await evaluate('document.documentElement.scrollWidth <= innerWidth + 1'), true, `Mobile overflow ${path}`);
    checks.push(`Responsive mobile hero loads without image optimizer or horizontal overflow: ${path}`);
    if (path === '/') await screenshot('home-mobile');
  }
  await navigate('/portfolio');
  await waitFor(`${cards}.length === 9`, 'Initial nine portfolio cards');
  await evaluate(`[...document.querySelectorAll('button')].find(button => button.textContent.includes('LOAD MORE DESIGNS')).click()`);
  await waitFor(`${cards}.length === 18`, 'Load more adds nine cards');
  for (const material of ['Felt', 'Twill']) {
    await evaluate(`[...document.querySelectorAll('button')].find(button => button.textContent.trim() === '${material} Patches').click()`);
    await waitFor(`${cards}.length === 9 && ${cards}[0]?.textContent.includes('${material} Patch')`, `${material} filter`);
    assert.equal(await evaluate(`${cards}[0].querySelector('img').src.includes('/images/portfolio-thumbnails/')`), true);
  }
  await evaluate(`${cards}[0].click()`);
  await waitFor(`(() => { const image = document.querySelector('.vr-modal-overlay img'); return image?.complete && image.naturalWidth > 0; })()`, 'Lazy modal loads');
  assert.equal(await evaluate(`decodeURIComponent(document.querySelector('.vr-modal-overlay img').src).includes('/images/twill-patch/')`), true, 'Modal retains original full-size image');
  await call('Input.dispatchKeyEvent', { type: 'keyDown', key: 'Escape', code: 'Escape' });
  await call('Input.dispatchKeyEvent', { type: 'keyUp', key: 'Escape', code: 'Escape' });
  await waitFor(`!document.querySelector('.vr-modal-overlay') && document.body.style.overflow !== 'hidden'`, 'Escape closes modal and restores scrolling');
  await screenshot('portfolio-mobile');
  checks.push('Portfolio load-more, Felt/Twill filters, lazy full-size previews, and Escape close work');
  await navigate('/portfolio?category=felt-patches');
  await waitFor(`${cards}[0]?.textContent.includes('Felt Patch')`, 'Felt category deep link');
  checks.push('Category URL deep links still select the right collection');
  await call('Emulation.setDeviceMetricsOverride', { width: 1440, height: 1000, deviceScaleFactor: 1, mobile: false });
  await navigate('/');
  await screenshot('home-desktop');
  await call('Emulation.setScriptExecutionDisabled', { value: true });
  await navigate('/about');
  assert.equal(await evaluate(`[...document.querySelectorAll('.vr-reveal')].every(node => getComputedStyle(node).opacity === '1')`), true);
  checks.push('Server-rendered reveal content stays readable with JavaScript disabled');
  await call('Emulation.setScriptExecutionDisabled', { value: false });
  await fs.writeFile(`${directory}/browser-checks.json`, JSON.stringify({ passed: checks.length, checks }, null, 2));
  console.log(JSON.stringify({ passed: checks.length, checks }, null, 2));
} finally {
  ws.close();
  await fetch(`http://localhost:9222/json/close/${target.id}`);
}
