import sharp from "sharp";
import fs from "fs";
import path from "path";

const dirs = [
  path.resolve("./public/images/cap-logo"),
  path.resolve("./public/images/jacket-back-design"),
  path.resolve("./public/images/left-chest-logo")
];

for (const dir of dirs) {
  const files = fs.readdirSync(dir).filter(f => f.endsWith(".jpeg") || f.endsWith(".jpg") || f.endsWith(".png"));
  console.log(`Found ${files.length} images to convert in ${dir}`);
  
  for (const file of files) {
    const inputPath = path.join(dir, file);
    const baseName = path.parse(file).name;
    const outputPath = path.join(dir, `${baseName}.webp`);
    
    console.log(`Converting ${file}...`);
    
    await sharp(inputPath)
      .resize({ width: 1200, withoutEnlargement: true })
      .webp({ quality: 82, effort: 6 })
      .toFile(outputPath);
      
    fs.unlinkSync(inputPath); // Delete the original file
    console.log(` -> Created ${baseName}.webp and deleted original.`);
  }
}
