import fs from 'node:fs/promises';
import crypto from 'node:crypto';
import sharp from 'sharp';

const directory = 'public/images/portfolio-thumbnails';
await fs.mkdir(directory, { recursive: true });
const manifest = {};
for (const material of ['felt-patch', 'twill-patch']) {
  const folder = `public/images/${material}`;
  for (const filename of (await fs.readdir(folder)).filter(name => name.endsWith('.webp')).sort()) {
    const input = await fs.readFile(`${folder}/${filename}`);
    const hash = crypto.createHash('sha256').update(input).update('thumbnail-640-webp68-v1').digest('hex').slice(0, 12);
    const outputName = `${filename.replace(/\.webp$/, '')}.${hash}.webp`;
    const destination = `${directory}/${outputName}`;
    try { await fs.access(destination); }
    catch { await sharp(input).rotate().resize({ width: 640, height: 640, fit: 'inside', withoutEnlargement: true }).webp({ quality: 68, effort: 4 }).toFile(destination); }
    manifest[`/images/${material}/${filename}`] = `/images/portfolio-thumbnails/${outputName}`;
  }
}
const output = JSON.stringify(manifest, null, 2) + '\n';
const manifestPath = 'lib/portfolio-thumbnails.json';
const current = await fs.readFile(manifestPath, 'utf8').catch(() => '');
if (current !== output) await fs.writeFile(manifestPath, output);
console.log(`Prepared ${Object.keys(manifest).length} patch thumbnails; previews retain the originals.`);
