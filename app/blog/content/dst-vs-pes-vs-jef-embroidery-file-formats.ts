import type { BlogPost } from '../types';

export const post: BlogPost = {
  "slug": "dst-vs-pes-vs-jef-embroidery-file-formats",
  "title": "Embroidery File Formats by Machine Brand: DST vs PES vs JEF vs EXP",
  "metaTitle": "Embroidery File Formats by Machine Brand",
  "description": "Which embroidery file format does your machine use? Brand-by-brand chart (Brother PES, Janome JEF, Bernina EXP, Husqvarna VP3, Tajima DST) and how they differ.",
  "excerpt": "A brand-by-brand chart of embroidery file formats, plus how DST, PES, JEF, EXP and VP3 differ and which one to order.",
  "category": "File Formats",
  "tags": [
    "embroidery file formats by machine brand",
    "what embroidery format does my machine use",
    "embroidery file formats",
    "embroidery file types",
    "janome embroidery file format",
    "jef format",
    "machine compatibility"
  ],
  "publishedAt": "2026-08-19",
  "updatedAt": "2026-11-14",
  "readTime": 7,
  "image": "/images/blog/dst-vs-pes-vs-jef-embroidery-file-formats.webp",
  "imagePrompt": "Flat lay of different embroidery machine memory cards and USB sticks labelled with DST, PES, JEF, and EXP file extensions next to vibrant spools of Madeira embroidery threads and a precision thread snip, bright photography, studio lighting, 16:9.",
  "imageAlt": "Embroidery machine file formats DST, PES, JEF, and EXP illustrated alongside colorful thread spools",
  "relatedService": {
    "label": "Embroidery Digitizing Services",
    "href": "/services"
  },
  "faqs": [
    {
      "question": "What embroidery format does my machine use?",
      "answer": "Brother and Baby Lock use PES, Janome uses JEF, Bernina and Melco use EXP, Husqvarna Viking and Pfaff use VP3, Singer uses XXX, and commercial machines such as Tajima, Barudan, SWF and Ricoma use DST. Many home machines also read DST. Check the compatible formats list in your manual for older models."
    },
    {
      "question": "Can a home embroidery machine read DST files?",
      "answer": "Many can. Most newer Brother, Baby Lock, Janome, Bernina and Singer models read DST in addition to their own format, but DST carries no thread colors, so the screen shows default colors and you follow the color sheet. Older home machines may only read their native format (PES, JEF, EXP or VP3)."
    },
    {
      "question": "Can I convert a DST file directly into a PES file?",
      "answer": "Yes, using embroidery software like Wilcom TrueSizer, Hatch, or Embrilliance. However, DST files do not store exact thread RGB color codes (only color stop markers). When converting DST to PES, you must reassign the specific Madeira or Isacord thread numbers manually."
    },
    {
      "question": "Why is Tajima DST the universal commercial embroidery standard?",
      "answer": "Tajima developed the DST format in the early 1980s. Because Tajima dominated industrial multi-head manufacturing, nearly every commercial machine—including Barudan, SWF, Happy, Ricoma, and ZSK—reads DST files natively."
    },
    {
      "question": "Why does my DST file open with strange, random colors on my screen?",
      "answer": "DST files contain only binary needle coordinates, jump codes, and 'STOP' commands. They do not store RGB color metadata. The software viewing the DST file assigns default arbitrary colors. Commercial shops match colors using the provided PDF production run sheet."
    }
  ],
  "content": [
    {
      "type": "p",
      "text": "When ordering custom embroidery digitizing, you will almost certainly be asked: *'What machine format do you need?'* Selecting the wrong extension can result in your machine displaying a file error, refusing to load the hoop boundaries, or scrambling the color sequence."
    },
    {
      "type": "p",
      "text": "Embroidery file formats divide into two primary categories: **Commercial Industrial Formats** (such as Tajima DST and Melco EXP) and **Home & Prosumer Formats** (such as Brother PES, Janome JEF, and Husqvarna VP3). Understanding their technical differences ensures seamless production."
    },
    {
      "type": "h2",
      "text": "Embroidery File Format by Machine Brand"
    },
    {
      "type": "p",
      "text": "Each machine brand reads its own native format, and most also read one or two others. Find your brand below, then check the \"compatible formats\" page of your machine manual, because older models may not read newer versions of the same format. If the right format still will not show up, see [why an embroidery machine is not reading a design file](/blog/embroidery-machine-not-reading-design-file)."
    },
    {
      "type": "table",
      "caption": "Embroidery file format by machine brand",
      "headers": [
        "Machine brand",
        "Native format",
        "Also commonly read",
        "Notes"
      ],
      "rows": [
        [
          "Brother",
          "PES",
          "DST; PHC/PHX on some newer models",
          "See the [Brother file type guide](/blog/brother-embroidery-machine-file-type) for PES versions."
        ],
        [
          "Baby Lock",
          "PES",
          "DST",
          "Same format family as Brother."
        ],
        [
          "Janome and Elna",
          "JEF (JEF+ on newer models)",
          "DST on many models",
          "JEF is tied to hoop size; a design larger than the selected hoop is rejected."
        ],
        [
          "Bernina",
          "EXP",
          "DST on many models; ART is the software working file",
          "Bernina software saves ART; machines sew EXP."
        ],
        [
          "Husqvarna Viking and Pfaff",
          "VP3",
          "HUS (older Viking), VIP/PCS (older Pfaff)",
          "VP3 stores color and hoop data."
        ],
        [
          "Singer",
          "XXX",
          "PES and DST on many newer models",
          "Check the model list; Singer support varies widely."
        ],
        [
          "Melco",
          "EXP",
          "DST",
          "Melco and Bernina share the EXP stitch format."
        ],
        [
          "Tajima, Barudan, SWF, Ricoma, Happy, Redline",
          "DST",
          "Brand formats (Barudan FDR, Happy TAP)",
          "DST is the commercial standard and opens almost everywhere."
        ],
        [
          "ZSK",
          "Z00",
          "DST",
          "Commercial; DST works for most jobs."
        ],
        [
          "Toyota",
          "10O",
          "DST",
          "Older commercial machines."
        ]
      ]
    },
    {
      "type": "tip",
      "text": "Recommendation: If you are unsure which machine your contract decorator uses, always request Tajima DST with an accompanying PDF Production Run Sheet. Every professional embroidery shop can run DST without issue."
    },
    {
      "type": "h2",
      "text": "Commercial Embroidery Formats: The Industrial Workhorses"
    },
    {
      "type": "h3",
      "text": "1. Tajima DST (.dst)"
    },
    {
      "type": "p",
      "text": "Tajima DST is the universal language of commercial embroidery. Developed by the Tajima Corporation, it is supported by 99% of multi-head commercial machines globally, including Tajima, Barudan, SWF, Ricoma, Toyota, and Happy."
    },
    {
      "type": "ul",
      "items": [
        "**Core Architecture:** Compact, ultra-reliable binary coordinate format optimized for fast machine reading.",
        "**Color Handling:** Contains **no color metadata**. DST files only record a 'Color Stop' signal telling the machine to switch to the next active needle. The machine operator assigns spool cones based on a physical PDF production color sheet.",
        "**Trims & Jumps:** Uses standardized jump codes to trigger automated thread trimmers on modern commercial rigs."
      ]
    },
    {
      "type": "h3",
      "text": "2. Melco / Bernina EXP (.exp)"
    },
    {
      "type": "p",
      "text": "Melco EXP is standard for Melco EMT16X multi-head machines and commercial Bernina systems. Like DST, raw EXP files store pure stitch coordinates and stop triggers without embedding explicit thread brand color tables."
    },
    {
      "type": "h2",
      "text": "Home & Prosumer Formats: Color-Rich and Machine-Specific"
    },
    {
      "type": "h3",
      "text": "1. Brother / Baby Lock PES (.pes)"
    },
    {
      "type": "p",
      "text": "Brother PES is the most widely used format for home crafters and boutique embroiderers utilizing Brother Persona, Innov-ís, and PR multi-needle machines."
    },
    {
      "type": "ul",
      "items": [
        "**Color Palette Integration:** Embeds precise RGB color data and specific thread manufacturer catalogs (Brother, Madeira Polyneon, Sulky, Robison-Anton).",
        "**Hoop Boundaries:** Automatically informs the machine of maximum hoop dimensions, preventing accidental needle collisions with the frame."
      ]
    },
    {
      "type": "h3",
      "text": "2. Janome / Elna JEF (.jef)"
    },
    {
      "type": "p",
      "text": "Janome Memory Craft and Elna machines rely on JEF format. JEF files strictly enforce hoop bounding boxes; if a digitized design exceeds the selected hoop size by even 0.5mm, the machine will reject the file until it is resized."
    },
    {
      "type": "h3",
      "text": "3. Husqvarna Viking / Pfaff VP3 (.vp3)"
    },
    {
      "type": "p",
      "text": "VP3 is an advanced format that stores multi-hoop positioning data, thread weight calibrations, and precise color-layer sequencing for high-end European sewing and embroidery workstations."
    },
    {
      "type": "h2",
      "text": "The Master Source Format: Wilcom .EMB Explained"
    },
    {
      "type": "p",
      "text": "While machines read stitch-based files like DST, PES, or EXP, professional digitizers create and edit artwork in object-based master source files, most notably **Wilcom .EMB**."
    },
    {
      "type": "p",
      "text": "A DST file only records needle coordinates: if you enlarge a DST file by 25%, the space between stitches widens, destroying density and ruining the embroidery. In contrast, an EMB file stores vector wireframe outlines, stitch angles, pull compensation formulas, and density profiles. When an EMB file is resized, the digitizing software recalculates every single stitch dynamically to preserve pristine embroidery quality."
    },
    {
      "type": "tip",
      "text": "Master Files Included With Every Order: At Velora Digitizing, contract decorators never have to worry about file lock-in. Every order includes production machine stitch files (DST, PES, EXP) plus the native Wilcom EMB file and PDF color run sheets. Check our [Embroidery Digitizing Services](/services) or get specialized [Cap Logo Digitizing](/services/cap-logo-digitizing) tailored for high-speed commercial production."
    },
    {
      "type": "h2",
      "text": "Order All Formats in One Complete Package"
    },
    {
      "type": "p",
      "text": "At Velora Digitizing, you never have to guess formats. Every digitizing order includes the primary machine file (DST, PES, EXP, or JEF), a full-color visual PDF run sheet with stitch counts and thread stops, and the original master vector source. Visit our [services page](/services) to get your machine-ready files within 24 hours."
    },
    {
      "type": "h2",
      "text": "Technical Anatomy of Tajima DST: Header Bytes & Binary Stitch Codes"
    },
    {
      "type": "p",
      "text": "A Tajima DST file consists of a 512-byte ASCII header followed by a sequence of 3-byte binary stitch records. The header records the design title, total stitch count, maximum positive and negative X/Y coordinates, and the total count of color change stops. Each 3-byte record uses ternary bit-encoding to command relative X/Y stepper motor movements between -121 and +121 coordinate units."
    },
    {
      "type": "h2",
      "text": "Why Home Formats (PES, JEF, VP3) Store Color Palettes While Industrial Formats Do Not"
    },
    {
      "type": "p",
      "text": "Home embroidery machines (Brother, Janome, Viking) are designed for consumer single-needle or 4-needle operation where the screen guides the hobbyist on which thread spool to thread next. Industrial multi-head factories (running 12 to 15 needles per head across 20 machine heads) store production thread spools permanently on dedicated needle bars. The operator sets the color sequence on the central machine console based on the physical PDF production run sheet."
    },
    {
      "type": "h2",
      "text": "How to Safely Convert Between Machine Formats Without Losing Quality"
    },
    {
      "type": "ol",
      "items": [
        "**1. Always Keep the Native Master File (.EMB or .PXF):** If resizing or modifying stitch density is required, make adjustments in the object-based master file before exporting to machine format.",
        "**2. Avoid Re-Digitizing from Raw Stitch Data:** Opening a compiled DST file and scaling it by more than 10% in basic viewing software will stretch stitch spacing, turning solid satins into loose, unwearable threads.",
        "**3. Reassign Thread Numbers When Converting to PES/JEF:** When converting an industrial DST into a Brother PES file, manually assign the correct Madeira Polyneon or Isacord thread numbers in software before transferring to USB."
      ]
    },
    {
      "type": "p",
      "text": "For [custom patch digitizing](/patches), tell our team which machine and embroidery format you use, such as DST, PES, EXP, JEF, or VP3. Browse our [felt and twill patch samples](/store) and request the formats required for your project when you ask for a quote."
    },
    {
      "type": "p",
      "text": "Need to view a file before you stitch it? Our step-by-step guide shows [how to open a DST file](/blog/how-to-open-dst-embroidery-file) on Windows, Mac and phone, and the [embroidery hoop sizes chart](/blog/embroidery-hoop-sizes-chart) helps you confirm the design fits your sewing field."
    }
  ]
};

export default post;
