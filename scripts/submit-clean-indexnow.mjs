const INDEXNOW_KEY = '2e86448a719e4063934826a1195b1159';
const SITE_HOST = 'www.veloradigitizing.com';
const KEY_LOCATION = `https://${SITE_HOST}/${INDEXNOW_KEY}.txt`;
const BASE_URL = `https://${SITE_HOST}`;

const staticRoutes = [
  '/',
  '/services',
  '/pricing',
  '/services/3d-puff-digitizing',
  '/services/cap-logo-digitizing',
  '/services/applique-digitizing',
  '/vector-art',
  '/patches',
  '/portfolio',
  '/store',
  '/blog',
  '/about',
  '/contact',
  '/privacy-policy',
  '/terms-and-conditions',
];

const storeSlugs = [
  'hike-more-worry-less',
  'wild-adventure-patch',
  'stay-wild-patch',
  'explore-the-path',
  'find-your-path-patch',
  'adventure-awaits-patch',
  'wild-spirit-patch',
  'happy-place-patch',
  'keep-it-simple-patch',
  'life-is-better-patch',
  'chase-the-sun-patch',
  'love-heart-patch',
  'dad-by-day-gamer-by-night',
  'search-rescan-patch',
  'endeavour-patch',
  'home-of-hustle-patch',
  'mentally-strong-patch',
  'gumshoe-detective-patch',
  'paranormal-patch',
  'people-safety-patch',
  'veracruz-patch',
  '70-patches-pack-1',
  '100-patches-mega-pack',
  '70-patches-pack-3',
  '50-patches-starter-pack',
  '50-patches-value-pack',
  '100-patches-ultimate-pack',
];

const blogSlugs = [
  '3d-puff-embroidery-digitizing-guide',
  'applique-embroidery-digitizing-guide',
  'best-online-embroidery-digitizing-services-comparison-guide',
  'cap-hat-logo-embroidery-digitizing-guide',
  'common-embroidery-digitizing-mistakes',
  'convert-png-jpg-to-dst-embroidery-file',
  'custom-patch-types-embroidered-woven-pvc-leather-chenille',
  'digitize-logo-illustrator-embroidery',
  'dst-vs-pes-vs-jef-embroidery-file-formats',
  'embroidery-stabilizer-guide-cutaway-vs-tearaway',
  'embroidery-digitizing-cost-pricing-guide',
  'embroidery-underlay-types-explained',
  'fix-embroidery-fabric-puckering-and-thread-breaks',
  'how-to-estimate-embroidery-stitch-count',
  'how-to-prepare-logo-for-embroidery-digitizing',
  'jacket-back-embroidery-digitizing-guide',
  'left-chest-logo-embroidery-digitizing-guide',
  'manual-digitizing-vs-ai-auto-digitizing',
  'vector-art-for-screen-printing-vs-embroidery',
  'what-is-embroidery-digitizing',
  'wilcom-vs-hatch-vs-brother-pe-design-embroidery-software',
  'how-to-digitize-small-text-micro-lettering-embroidery',
  'embroidery-on-towels-and-fleece-knockdown-stitch-guide',
  'best-free-embroidery-digitizing-software-inkstitch-guide',
  'chenille-and-varsity-jacket-patch-digitizing-guide',
  'hoodie-embroidery-digitizing-guide',
  'custom-leather-patches-for-hats-guide',
  'why-outsource-embroidery-digitizing-usa-guide',
];

const allUrls = [
  ...staticRoutes.map((r) => (r === '/' ? BASE_URL : `${BASE_URL}${r}`)),
  ...storeSlugs.map((s) => `${BASE_URL}/store/${s}`),
  ...blogSlugs.map((b) => `${BASE_URL}/blog/${b}`),
];

console.log(`📋 Total clean URLs ready for Bing / IndexNow: ${allUrls.length}`);
console.log(`   - Core Pages & Services: ${staticRoutes.length}`);
console.log(`   - Quality Store Patches & Bundles: ${storeSlugs.length}`);
console.log(`   - Blog Guides: ${blogSlugs.length}\n`);

const payload = {
  host: SITE_HOST,
  key: INDEXNOW_KEY,
  keyLocation: KEY_LOCATION,
  urlList: allUrls,
};

async function submitToEndpoint(endpoint, payload) {
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(payload),
  });
  return { status: res.status, text: await res.text() };
}

async function main() {
  const endpoints = [
    { name: 'Bing IndexNow Direct', url: 'https://www.bing.com/indexnow' },
    { name: 'IndexNow Central API', url: 'https://api.indexnow.org/indexnow' },
    { name: 'Yandex IndexNow', url: 'https://yandex.com/indexnow' },
  ];

  for (const ep of endpoints) {
    try {
      const { status, text } = await submitToEndpoint(ep.url, payload);
      if (status === 200 || status === 202) {
        console.log(`✅ [${ep.name}] HTTP ${status} (Accepted) -> Successfully broadcasted ${allUrls.length} URLs!`);
      } else {
        console.log(`ℹ️ [${ep.name}] HTTP ${status} -> Response: ${text.slice(0, 150)}`);
      }
    } catch (err) {
      console.log(`❌ [${ep.name}] Error: ${err.message}`);
    }
  }

  console.log('\n🎉 Submission to Bing & IndexNow network finished successfully!');
}

main();
