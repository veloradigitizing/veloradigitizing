import fs from 'fs';
import path from 'path';

const INDEXNOW_KEY = 'b6555280ca4340e2b6be80b0b61d8243';
const SITE_HOST = 'www.veloradigitizing.com';
const KEY_LOCATION = `https://${SITE_HOST}/${INDEXNOW_KEY}.txt`;
const BASE_URL = `https://${SITE_HOST}`;

const coreRoutes = [
  '/',
  '/services',
  '/vector-art',
  '/patches',
  '/portfolio',
  '/store',
  '/pricing',
  '/blog',
  '/about',
  '/contact',
  '/privacy-policy',
  '/terms-and-conditions',
];

function getPrerenderedRoutes() {
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
        .map(r => r === '/' ? BASE_URL : `${BASE_URL}${r}`);
    } catch (e) {}
  }
  return coreRoutes.map(r => r === '/' ? BASE_URL : `${BASE_URL}${r}`);
}

async function submitToEndpoint(endpoint, payload) {
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(payload),
  });
  return { status: res.status, text: await res.text() };
}

async function main() {
  const customArgs = process.argv.slice(2);
  const urlsToSubmit = customArgs.length > 0 ? customArgs : getPrerenderedRoutes();

  console.log(`📡 Submitting ${urlsToSubmit.length} URLs to IndexNow network...`);
  console.log(`🔑 Key: ${INDEXNOW_KEY}`);
  console.log(`📄 Key Location: ${KEY_LOCATION}\n`);

  const payload = {
    host: SITE_HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList: urlsToSubmit,
  };

  // Submit via IndexNow endpoints (IndexNow protocol shares data across Bing, Yandex, Seznam)
  const endpoints = [
    { name: 'IndexNow Central', url: 'https://api.indexnow.org/indexnow' },
    { name: 'Yandex IndexNow', url: 'https://yandex.com/indexnow' },
    { name: 'Bing IndexNow', url: 'https://www.bing.com/indexnow' },
  ];

  let successCount = 0;

  for (const ep of endpoints) {
    try {
      const { status, text } = await submitToEndpoint(ep.url, payload);
      if (status === 200 || status === 202) {
        console.log(`✅ [${ep.name}] HTTP ${status} (Accepted) -> Successfully broadcasted to search engines!`);
        successCount++;
      } else {
        console.log(`ℹ️ [${ep.name}] HTTP ${status} -> ${text.split('\n')[0]}`);
      }
    } catch (err) {
      console.log(`❌ [${ep.name}] Error: ${err.message}`);
    }
  }

  if (successCount > 0) {
    console.log(`\n🎉 Success: ${urlsToSubmit.length} URLs are submitted and being shared across the IndexNow network!`);
  }
}

main();
