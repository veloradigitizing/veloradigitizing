import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import sharp from 'sharp';

// Pre-generate the critical backgrounds so the first visitor never waits for
// a cold image optimizer. Content hashes allow safe immutable browser caching.
const names = [
  'veloraHero3',
  'velora-embroidery-machine-lion',
  'velora-embroidery-showcase',
  'velora-embroidery-showcase-2',
  'velora-embroidery-workstation',
  'velora-embroidery-collection',
  'velora-embroidery-machine-shirt-cap',
  'velora-contact-workspace',
  'design-workspace-car-sketch',
  'embroidery-digitizing-process',
];
const directory = 'public/images/heroes';
await fs.mkdir(directory, { recursive: true });
const manifest = {};
for (const name of names) {
  const input = await fs.readFile(`app/images/${name}.webp`);
  const metadata = await sharp(input).metadata();
  const hash = crypto.createHash('sha256').update(input).update('webp-78-effort4-v1').digest('hex').slice(0, 12);
  const widths = [...new Set([480, 768, 1280, Math.min(1920, metadata.width)].filter(width => width <= metadata.width))].sort((a, b) => a - b);
  const variants = [];
  for (const width of widths) {
    const filename = `${name}.${hash}-${width}.webp`;
    const destination = path.join(directory, filename);
    try { await fs.access(destination); }
    catch { await sharp(input).rotate().resize({ width, withoutEnlargement: true }).webp({ quality: 78, effort: 4 }).toFile(destination); }
    variants.push({ width, src: `/images/heroes/${filename}` });
  }
  manifest[name] = { src: variants.at(-1).src, srcSet: variants.map(v => `${v.src} ${v.width}w`).join(', ') };
}
const output = JSON.stringify(manifest, null, 2) + '\n';
const manifestPath = 'lib/hero-images.json';
const current = await fs.readFile(manifestPath, 'utf8').catch(() => '');
if (current !== output) await fs.writeFile(manifestPath, output);
console.log(`Prepared ${names.length} responsive hero backgrounds.`);
