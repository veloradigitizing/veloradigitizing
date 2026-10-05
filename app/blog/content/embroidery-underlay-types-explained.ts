import type { BlogPost } from '../types';

export const post: BlogPost = {
  "slug": "embroidery-underlay-types-explained",
  "title": "Embroidery Underlay Types Explained: Center Walk, Edge Run, Zig-Zag & Tatami",
  "metaTitle": "Embroidery Underlay Types Explained",
  "description": "Comprehensive guide to embroidery underlay types. Discover when to use Center Walk, Edge Run, Double Zig-Zag, and Full Tatami Grid for different fabrics.",
  "excerpt": "Underlay is the invisible foundation of every great embroidery file. Learn the specific use cases for Center Walk, Edge Run, Zig-Zag, and Tatami grids.",
  "category": "Technical",
  "tags": [
    "embroidery underlay",
    "underlay types",
    "edge run",
    "center walk",
    "tatami underlay",
    "digitizing technical"
  ],
  "publishedAt": "2026-09-25",
  "readTime": 8,
  "image": "/images/blog/embroidery-underlay-types-explained.webp",
  "imagePrompt": "Wireframe 3D blueprint schematic of embroidery stitches showing glowing blue underlay scaffolding beneath raised gold satin top stitches on dark textile texture, technical diagram style, 16:9.",
  "imageAlt": "Technical schematic showing embroidery underlay types beneath satin and tatami stitches",
  "relatedService": {
    "label": "Embroidery Digitizing Services",
    "href": "/services"
  },
  "faqs": [
    {
      "question": "Why can't I just increase top density instead of adding underlay?",
      "answer": "Increasing top density without underlay drives excessive thread into unsupported fabric, causing severe puckering, fabric cutting, and needle jams. Underlay anchors the fabric to the stabilizer backing and lifts the top stitches off the garment surface."
    },
    {
      "question": "What underlay is best for small satin lettering (under 4mm)?",
      "answer": "A single Center Walk (running stitch down the exact middle of the column) is best. Adding edge-run underlay to narrow letters under 3.5mm causes the underlay stitches to poke out from the column edges."
    },
    {
      "question": "What underlay is required for large background Tatami fills?",
      "answer": "A perpendicular Tatami or Double Grid (Net) underlay with light density (1.5mm-2.5mm spacing) laid at a 90-degree angle to the top fill stitches."
    }
  ],
  "content": [
    {
      "type": "p",
      "text": "In machine embroidery, what you *don't* see is what determines the quality of what you *do* see. That invisible foundation is **underlay**."
    },
    {
      "type": "p",
      "text": "Just as a skyscraper requires steel foundation pilings driven into bedrock before pouring concrete floors, top satin and tatami stitches require an underlay framework to anchor the garment to the stabilizer backing. Here is the technical breakdown of the 4 major underlay types and their fabric applications."
    },
    {
      "type": "h2",
      "text": "The 4 Core Embroidery Underlay Types"
    },
    {
      "type": "h3",
      "text": "1. Center Walk (Center Run)"
    },
    {
      "type": "p",
      "text": "A single row of walk stitches running down the exact centerline of a column. Ideal for narrow satin columns (1.5mm to 3.0mm wide) such as script lettering and fine border lines. It creates a subtle raised spine that lifts the top satin thread without adding bulk to the edges."
    },
    {
      "type": "h3",
      "text": "2. Edge Run (Contour Underlay)"
    },
    {
      "type": "p",
      "text": "Walk stitches that travel along both outer edges of a satin column (inset roughly 0.3mm-0.5mm from the border). Edge Run defines sharp, crisp borders, prevents fabric edges from curling, and provides an elevated rail for satin stitches to rest upon."
    },
    {
      "type": "h3",
      "text": "3. Zig-Zag & Double Zig-Zag"
    },
    {
      "type": "p",
      "text": "A loose zig-zag pattern stitched beneath wide satin columns (4mm to 8mm wide). When paired with an Edge Run (Double Underlay), it provides maximum loft, stability, and fabric compression on textured fabrics like fleece and pique."
    },
    {
      "type": "h3",
      "text": "4. Tatami Grid (Mesh / Net Underlay)"
    },
    {
      "type": "p",
      "text": "A light grid of crisscrossing parallel rows laid at a 45-degree or 90-degree angle to the top fill layer. Essential for large open fills, jacket back shields, and stretchy knit garments to eliminate fabric puckering."
    },
    {
      "type": "h2",
      "text": "Underlay Selection Matrix by Fabric Type"
    },
    {
      "type": "ul",
      "items": [
        "**Pique Knit Polos:** Edge Run + Zig-Zag underlay (plus Solvy water-soluble topping).",
        "**Performance Polyester (Dry-Fit):** Center Walk or Light Edge Run (keep underlay light to prevent stiffness).",
        "**Heavy Fleece Hoodies:** Double Zig-Zag + Edge Run (compresses fleece pile completely).",
        "**Structured Baseball Caps:** Firm Edge Run + Center Walk (anchors against cap buckram).",
        "**Woven Cotton / Canvas:** Standard Edge Run."
      ]
    },
    {
      "type": "tip",
      "text": "Underlay Margin Inset: Always set underlay inset between 0.3mm and 0.5mm inside the finished border. If inset is too shallow (<0.2mm), needle push will force underlay loops outside the satin edge during sewing."
    },
    {
      "type": "h2",
      "text": "Get Perfectly Engineered Digitizing Files"
    },
    {
      "type": "p",
      "text": "At Velora Digitizing, our punchers calibrate custom underlay recipes for your specific garment fabrics. Visit our [services page](/services) or upload your artwork on our [contact page](/contact) for a 24-hour turnaround."
    },
    {
      "type": "h2",
      "text": "Underlay Density & Inset Math: Engineering the Foundation"
    },
    {
      "type": "p",
      "text": "Underlay must always be inset between **0.30mm and 0.50mm** inside the outer boundary of the top satin stitch. If the inset is too narrow (<0.20mm), needle push will force underlay loops outside the satin border, creating messy raw edges. If the inset is too wide (>0.80mm), the satin edges collapse into the fabric fibers."
    },
    {
      "type": "h2",
      "text": "Double Underlays for Textured Fabrics"
    },
    {
      "type": "p",
      "text": "For high-pile textiles like fleece hoodies, terrycloth towels, and corduroy, digitizers apply a **Double Underlay** combining an Edge-Run contour with a dense interior Zig-Zag. This flattens and compresses the fabric pile completely, providing a solid elevated rail for the glossy top satin stitches."
    }
  ]
};

export default post;
