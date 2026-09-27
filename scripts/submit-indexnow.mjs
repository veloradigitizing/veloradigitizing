import fs from 'fs';
import path from 'path';

const INDEXNOW_KEY = 'b6555280ca4340e2b6be80b0b61d8243';
const SITE_HOST = 'www.veloradigitizing.com';
const KEY_LOCATION = `https://${SITE_HOST}/${INDEXNOW_KEY}.txt`;
const BASE_URL = `https://${SITE_HOST}`;

// Core URLs
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
        .filter(r => !r.startsWith('/_') && !r.includes('.png') && !r.includes('.ico') && !r.includes('.txt') && !r.includes('.xml'))
        .map(r => r === '/' ? BASE_URL : `${BASE_URL}${r}`);
    } catch (e) {}
  }
  return coreRoutes.map(r => r === '/' ? BASE_URL : `${BASE_URL}${r}`);
}

async function main() {
  const customArgs = process.argv.slice(2);
  const urlsToSubmit = customArgs.length > 0 ? customArgs : getPrerenderedRoutes();

  console.log(`📡 Submitting ${urlsToSubmit.length} URLs to IndexNow (Bing / Yandex / Seznam)...`);
  console.log(`🔑 Key: ${INDEXNOW_KEY}`);
  console.log(`📄 Key Location: ${KEY_LOCATION}\n`);

  const payload = {
    host: SITE_HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList: urlsToSubmit,
  };

  try {
    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    if (res.status === 200 || res.status === 202) {
      console.log(`✅ SUCCESS! HTTP Status: ${res.status}`);
      console.log(`🚀 All ${urlsToSubmit.length} URLs have been successfully submitted to IndexNow!`);
    } else {
      const body = await res.text();
      console.error(`⚠️ IndexNow returned HTTP ${res.status}:`, body || 'No response body');
    }
  } catch (err) {
    console.error('❌ Network error during submission:', err.message);
  }
}

main();
