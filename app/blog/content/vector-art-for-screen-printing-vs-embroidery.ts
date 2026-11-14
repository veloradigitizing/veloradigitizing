import type { BlogPost } from '../types';

export const post: BlogPost = {
  "slug": "vector-art-for-screen-printing-vs-embroidery",
  "title": "Vector Art for Screen Printing vs Embroidery: How to Prep One Logo for Both",
  "metaTitle": "Vector Art for Screen Printing vs Embroidery: File Prep",
  "description": "How to prep vector art for screen printing vs embroidery: minimum line widths, text sizes, color limits, gradients, trapping vs pull compensation.",
  "excerpt": "The same logo needs different prep for print and for thread. Compare line widths, text sizes, colors, gradients and file deliverables, with a checklist for both.",
  "category": "Design",
  "tags": [
    "vector art for screen printing vs embroidery",
    "how to prepare vector art for embroidery",
    "vector art for screen printing",
    "minimum line thickness for embroidery",
    "color separation",
    "vector art"
  ],
  "publishedAt": "2026-09-19",
  "updatedAt": "2026-11-14",
  "readTime": 8,
  "image": "/images/blog/vector-art-for-screen-printing-vs-embroidery.webp",
  "imagePrompt": "Side by side graphic of a t-shirt screen printing squeegee on the left and a multi-needle embroidery head on the right, connected by vector line paths, colorful commercial apparel studio, 16:9.",
  "imageAlt": "Comparing vector artwork preparation for screen printing versus embroidery digitizing",
  "relatedService": {
    "label": "Vector Art Services",
    "href": "/vector-art"
  },
  "faqs": [
    {
      "question": "Can I use the same vector file for screen printing and embroidery?",
      "answer": "You can start from the same vector logo, but each process needs its own version. Screen printing needs spot-color separations, trapping and halftones. Embroidery needs thicker lines (about 1 to 1.3 mm minimum), larger text, fewer tiny details and then a digitizer to convert the shapes into a stitch file such as DST or PES. An embroidery machine cannot read an AI, EPS or SVG file directly."
    },
    {
      "question": "What is the minimum line thickness for embroidery?",
      "answer": "Plan for at least 1 mm (about 0.04 in) for a run or narrow satin line, and 1.2 to 1.5 mm for a clean satin outline. Screen printing can usually hold lines around 0.3 to 0.5 mm. Lines thinner than the embroidery minimum either disappear or have to be thickened by the digitizer."
    },
    {
      "question": "What is the smallest text for embroidery vs screen printing?",
      "answer": "For embroidery, capital letters should be at least about 0.25 in (6 mm) tall, and lowercase letters about 0.2 in (5 mm). Screen printing can hold text around 6 to 8 pt depending on mesh and ink. Script and serif fonts need to be larger in embroidery than block fonts."
    },
    {
      "question": "What is the difference between trapping in print and pull compensation in embroidery?",
      "answer": "Trapping in screen printing slightly overlaps neighbouring ink colors (often 0.5 to 1 pt) so press movement does not leave gaps. Pull compensation in embroidery widens stitch shapes (often 0.2 to 0.4 mm on satins) because thread tension pulls the fabric inward as it sews."
    },
    {
      "question": "How are gradients handled in screen printing vs embroidery?",
      "answer": "Screen printing reproduces gradients with halftone dots. Embroidery either reduces the gradient to two or three solid thread colors or blends them with gradient fill density, which a digitizer sets by hand. Photo-style shading usually needs to be simplified for thread."
    }
  ],
  "content": [
    {
      "type": "p",
      "text": "**Vector art for screen printing vs embroidery** starts from the same logo but needs different preparation. Screen printing needs spot-color separations, trapping and halftones for gradients, and can hold fine lines and small text. Embroidery needs thicker lines (at least about 1 mm), text of at least about 0.25 inch, fewer tiny details and solid colors, and then a digitizer must convert the vector into a stitch file. A machine cannot sew an AI, EPS or SVG file directly."
    },
    {
      "type": "p",
      "text": "Shops often get both jobs from one customer: 500 printed event tees and 50 embroidered staff polos with the same logo. Below is a side-by-side comparison, how to adjust the art for each process, and a checklist you can use before sending files out."
    },
    {
      "type": "h2",
      "text": "Screen Printing vs Embroidery: File Requirements Compared"
    },
    {
      "type": "table",
      "caption": "Vector art requirements for screen printing vs embroidery",
      "headers": ["Requirement", "Screen printing", "Embroidery"],
      "rows": [
        ["Starting file", "Vector (AI, EPS, PDF, SVG) or high-res raster", "Vector or clean high-res raster"],
        ["Final production file", "Separated films or PDF per color", "Stitch file (DST, PES, EXP, JEF) made by a digitizer"],
        ["Minimum line width", "About 0.3 to 0.5 mm", "About 1 mm for runs, 1.2 to 1.5 mm for satin outlines"],
        ["Minimum text height", "About 6 to 8 pt", "About 0.25 in (6 mm) caps, 0.2 in (5 mm) lowercase"],
        ["Color count", "Each color is a screen; 1 to 8 spot colors typical", "Each color is a thread change; 12 to 15 needles common, cost by stitch count"],
        ["Gradients", "Halftone dots", "Two or three solid colors or gradient fill density"],
        ["Overlap handling", "Trapping (about 0.5 to 1 pt)", "Pull compensation (about 0.2 to 0.4 mm on satins)"],
        ["Textures and distressing", "Prints well", "Usually removed; creates tiny stitches and trims"],
        ["Fabric effect", "Ink sits on or in the fabric", "Thread sits on top; fabric pulls and shifts"]
      ]
    },
    {
      "type": "h2",
      "text": "How to Prepare Vector Art for Embroidery"
    },
    {
      "type": "ol",
      "items": [
        "**Set the final size first.** A left chest logo is usually 3 to 4 inches wide; check details at that size, not at poster size. See the [left chest placement guide](/blog/left-chest-logo-embroidery-digitizing-guide).",
        "**Thicken thin lines** to at least 1 to 1.5 mm at final size, or remove them.",
        "**Enlarge small text** so capitals are at least 0.25 inch tall. Swap very thin script fonts for bolder versions; see [best fonts for embroidery](/blog/best-fonts-for-embroidery).",
        "**Remove distressed textures and halftones.** Grunge effects create hundreds of tiny stitches and trims.",
        "**Reduce colors** to solid spot colors and give the digitizer thread color references if you have them.",
        "**Delete hidden overlapping shapes.** In print they are harmless; in embroidery stacked shapes double the stitch density.",
        "**Outline or embed fonts** so the text does not change when the file is opened elsewhere."
      ]
    },
    {
      "type": "p",
      "text": "More detail is in [how to prepare a logo for embroidery](/blog/how-to-prepare-logo-for-embroidery-digitizing). If you are building the file yourself, the [Illustrator digitizing guide](/blog/digitize-logo-illustrator-embroidery) shows how to set up vector shapes before digitizing."
    },
    {
      "type": "h2",
      "text": "How to Prepare Vector Art for Screen Printing"
    },
    {
      "type": "ol",
      "items": [
        "**Use spot colors** (often Pantone) and name each swatch clearly.",
        "**Separate colors** onto their own layers or plates, one per screen.",
        "**Add trapping** where colors touch, or knock out the underlying color.",
        "**Convert gradients to halftones** at a line count the printer can hold on the chosen mesh.",
        "**Plan a white underbase** for printing on dark garments.",
        "**Outline fonts and expand strokes** so lines keep their width when scaled."
      ]
    },
    {
      "type": "h2",
      "text": "One Logo, Two Versions: A Worked Example"
    },
    {
      "type": "p",
      "text": "Take a round badge logo with a distressed texture, a 0.5 pt inner ring, small 7 pt text around the edge and a two-color gradient in the center. The print version keeps the texture, the thin ring and the gradient as halftones. The embroidery version drops the texture, thickens the ring to about 1.5 mm or removes it, enlarges the edge text to at least 0.25 inch caps or removes the smaller line of text, and turns the gradient into two solid thread colors. Same brand, two production-ready files."
    },
    {
      "type": "h2",
      "text": "Trapping in Screen Printing vs Pull Compensation in Embroidery"
    },
    {
      "type": "p",
      "text": "In screen printing, **trapping** slightly expands neighbouring color boundaries (about 0.5 to 1 pt) so press movement does not leave gaps. In embroidery, **pull compensation** widens satin columns and fills (about 0.2 to 0.4 mm on satins, more on stretchy knits) because thread tension pulls fabric inward during sewing. Both solve registration problems, but only pull compensation changes with the fabric. That is one reason auto-traced files often sew with gaps; see [manual vs auto digitizing](/blog/manual-digitizing-vs-ai-auto-digitizing)."
    },
    {
      "type": "h2",
      "text": "Gradients: Halftone Dots vs Thread Blending"
    },
    {
      "type": "p",
      "text": "Screen printing reproduces gradients with halftone dot screens. Embroidery reproduces them with gradient fill density, where one thread color thins out while another builds up, or simply with two or three solid color steps. Thread blending is set by hand and adds stitches, so keep it for the parts of the design where it matters."
    },
    {
      "type": "h2",
      "text": "Checklist Before You Send Art to a Printer or Digitizer"
    },
    {
      "type": "ul",
      "items": [
        "Final print or stitch size written on the file or in the order (for example, 3.5 in wide left chest).",
        "Fonts outlined, strokes expanded, no linked images missing.",
        "Spot colors named for print; thread colors or Pantone references listed for embroidery.",
        "Garment type and color noted, because a dark polo, a cap or a towel each change the file.",
        "For embroidery: no lines under about 1 mm and no text under about 0.25 in at final size.",
        "For embroidery: the machine format you need (DST, PES, EXP, JEF); see [DST vs PES vs JEF](/blog/dst-vs-pes-vs-jef-embroidery-file-formats)."
      ]
    },
    {
      "type": "h2",
      "text": "Which Decoration Method Should You Choose?"
    },
    {
      "type": "p",
      "text": "Print suits large, colorful and detailed graphics on tees in bulk. Embroidery suits logos on polos, caps, jackets and bags where durability and a premium look matter. For a full cost and use-case comparison, see [embroidery vs screen printing](/blog/embroidery-vs-screen-printing)."
    },
    {
      "type": "h2",
      "text": "Get Vector Redrawing and Digitizing in One Place"
    },
    {
      "type": "p",
      "text": "Velora redraws low-resolution logos as clean vectors through our [vector art service](/vector-art) and converts them into stitch files through our [embroidery digitizing service](/services). Digitizing starts at $6.99 for designs up to 5,000 stitches; see [pricing](/pricing). For caps and raised designs, see [cap logo digitizing](/services/cap-logo-digitizing) and [3D puff digitizing](/services/3d-puff-digitizing)."
    }
  ]
};

export default post;
