import sharp from "sharp";
import fs from "fs";
import path from "path";

const brainDir = "C:\\Users\\muhammad ukasha\\.gemini\\antigravity-ide\\brain\\03e8801b-f3d7-4790-9924-85d32fdb950c";
const outDir = path.resolve("./public/images/blog");

const mappings = [
  {
    inputPattern: "left_chest_logo_digitizing",
    slug: "left-chest-logo-embroidery-digitizing-guide",
  },
  {
    inputPattern: "jacket_back_embroidery_guide",
    slug: "jacket-back-embroidery-digitizing-guide",
  },
  {
    inputPattern: "vector_vs_embroidery_guide",
    slug: "vector-art-for-screen-printing-vs-embroidery",
  },
  {
    inputPattern: "custom_patch_types_showcase",
    slug: "custom-patch-types-embroidered-woven-pvc-leather-chenille",
  },
  {
    inputPattern: "applique_embroidery_guide",
    slug: "applique-embroidery-digitizing-guide",
  },
  {
    inputPattern: "embroidery_underlay_types",
    slug: "embroidery-underlay-types-explained",
  },
  {
    inputPattern: "fix_embroidery_puckering",
    slug: "fix-embroidery-fabric-puckering-and-thread-breaks",
  },
];

const brainFiles = fs.readdirSync(brainDir);

for (const map of mappings) {
  const match = brainFiles.find((f) => f.startsWith(map.inputPattern) && f.endsWith(".jpg"));
  if (!match) {
    console.error(`Could not find file matching ${map.inputPattern}`);
    continue;
  }
  const inputPath = path.join(brainDir, match);
  const outputPath = path.join(outDir, `${map.slug}.webp`);

  const initialStats = fs.statSync(inputPath);
  console.log(`Processing ${match} -> ${map.slug}.webp (${(initialStats.size / 1024).toFixed(1)} KB)...`);

  await sharp(inputPath)
    .resize({ width: 1200, withoutEnlargement: true })
    .webp({ quality: 82, effort: 6 })
    .toFile(outputPath);

  const finalStats = fs.statSync(outputPath);
  console.log(`  -> Successfully written ${map.slug}.webp (${(finalStats.size / 1024).toFixed(1)} KB)`);
}

console.log("Finished converting all new blog images!");
