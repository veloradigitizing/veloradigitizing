import assert from 'node:assert/strict';

const origin = process.argv[2] ?? 'http://localhost:3011';
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
const paths = ['/services', '/services/cap-logo-digitizing', '/services/3d-puff-digitizing', '/services/applique-digitizing'];
try {
  for (const path of paths) {
    await call('Page.navigate', { url: origin + path });
    for (let i = 0; i < 60; i++) {
      if (await evaluate(`location.pathname === ${JSON.stringify(path)} && document.readyState === 'complete' && !!document.querySelector('main h1')`)) break;
      await new Promise(resolve => setTimeout(resolve, 250));
    }
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Check the unscrolled hydrated page, including content below the fold.
    const result = await evaluate(`(() => {
      const headings = [...document.querySelectorAll('main h1, main h2')];
      const hidden = headings.filter(heading => {
        for (let node = heading; node; node = node.parentElement) {
          const style = getComputedStyle(node);
          if (Number(style.opacity) === 0 || style.display === 'none' || style.visibility === 'hidden') return true;
        }
        return false;
      }).map(e => e.textContent);
      return { headingCount: headings.length, hidden, scrollY, canonical: document.querySelector('link[rel="canonical"]')?.href, pendingAnimations: document.querySelectorAll('[data-reveal-pending]').length };
    })()`);
    assert.ok(result.headingCount > 5, `Expected service content: ${path}`);
    assert.equal(result.scrollY, 0, 'Content must be visible without scrolling');
    assert.deepEqual(result.hidden, [], `Hidden service headings: ${path}`);
    assert.equal(result.canonical, 'https://www.veloradigitizing.com' + path);
    console.log(JSON.stringify({ path, ...result }));
  }
  console.log('PASS: all four hydrated service pages expose their headings without scrolling.');
} finally {
  ws.close();
  await fetch(`http://localhost:9222/json/close/${target.id}`);
}
