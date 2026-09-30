import sharp from "sharp";
import fs from "fs";
import path from "path";

const blogDir = path.resolve("./public/images/blog");
const files = fs.readdirSync(blogDir).filter((f) => f.endsWith(".jpg") || f.endsWith(".jpeg") || f.endsWith(".png"));

console.log(`Found ${files.length} images to convert in ${blogDir}`);

for (const file of files) {
  const inputPath = path.join(blogDir, file);
  const baseName = path.parse(file).name;
  const outputPath = path.join(blogDir, `${baseName}.webp`);

  const initialStats = fs.statSync(inputPath);
  console.log(`Converting ${file} (${(initialStats.size / 1024).toFixed(1)} KB)...`);

  await sharp(inputPath)
    .resize({ width: 1200, withoutEnlargement: true })
    .webp({ quality: 82, effort: 6 })
    .toFile(outputPath);

  const finalStats = fs.statSync(outputPath);
  const reduction = (((initialStats.size - finalStats.size) / initialStats.size) * 100).toFixed(1);
  console.log(` -> Created ${baseName}.webp (${(finalStats.size / 1024).toFixed(1)} KB) - Saved ${reduction}%`);
}

console.log("All blog images successfully converted to WebP!");
