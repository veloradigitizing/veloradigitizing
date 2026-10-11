import fs from 'fs';
import path from 'path';

const API_KEY = '2e86448a719e4063934826a1195b1159';
const SITE_URL = 'https://veloradigitizing.com';
const BASE_URL = 'https://www.veloradigitizing.com';

function getAllRoutes() {
  const manifestPath = path.join(process.cwd(), '.next', 'prerender-manifest.json');
  if (fs.existsSync(manifestPath)) {
    try {
      const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
      return Object.keys(manifest.routes)
        .filter(r => 
          !r.startsWith('/_') && 
          !r.includes('.png') && 
          !r.includes('.ico') && 
          !r.includes('.txt') && 
          !r.includes('.xml') &&
          r !== '/pricing'
        )
        .map(r => r === '/' ? `${BASE_URL}/` : `${BASE_URL}${r}`);
    } catch (e) {
      console.error('Error reading prerender manifest:', e);
    }
  }

  return [
    `${BASE_URL}/`,
    `${BASE_URL}/services`,
    `${BASE_URL}/services/3d-puff-digitizing`,
    `${BASE_URL}/services/applique-digitizing`,
    `${BASE_URL}/services/cap-logo-digitizing`,
    `${BASE_URL}/vector-art`,
    `${BASE_URL}/patches`,
    `${BASE_URL}/portfolio`,
    `${BASE_URL}/store`,
    `${BASE_URL}/blog`,
    `${BASE_URL}/about`,
    `${BASE_URL}/contact`,
  ];
}

async function submitBatch(urls) {
  const endpoint = `https://ssl.bing.com/webmaster/api.svc/json/SubmitUrlbatch?apikey=${API_KEY}`;
  const payload = {
    siteUrl: SITE_URL,
    urlList: urls,
  };

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(payload),
  });

  return { status: res.status, text: await res.text() };
}

async function main() {
  const routes = getAllRoutes();
  console.log(`🚀 Found ${routes.length} pages to submit to Bing Webmaster Tools...`);

  // Bing allows up to 500 URLs per batch, we submit in chunks of 50
  const CHUNK_SIZE = 50;
  for (let i = 0; i < routes.length; i += CHUNK_SIZE) {
    const chunk = routes.slice(i, i + CHUNK_SIZE);
    console.log(`Submitting batch ${Math.floor(i / CHUNK_SIZE) + 1} (${chunk.length} URLs)...`);
    try {
      const res = await submitBatch(chunk);
      if (res.status === 200) {
        console.log(`✅ Batch ${Math.floor(i / CHUNK_SIZE) + 1} successfully submitted! Response: ${res.text || 'OK'}`);
      } else {
        console.log(`⚠️ Batch ${Math.floor(i / CHUNK_SIZE) + 1} status ${res.status}: ${res.text}`);
      }
    } catch (err) {
      console.error(`❌ Batch error:`, err.message);
    }
  }

  console.log(`\n🎉 All ${routes.length} URLs processed and queued on Bing Search!`);
}

main();
