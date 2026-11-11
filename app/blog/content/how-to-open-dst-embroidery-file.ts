import type { BlogPost } from '../types';

export const post: BlogPost = {
  "slug": "how-to-open-dst-embroidery-file",
  "title": "DST Embroidery File: What It Is and How to Open It (Windows, Mac, Phone)",
  "metaTitle": "DST Embroidery File: What It Is & How to Open It",
  "description": "What a DST embroidery file is and how to open it on Windows, Mac or phone with free viewers. See what the DST format stores, what it leaves out and how to convert it.",
  "excerpt": "A DST file is a stitch file, not an image, so normal photo viewers cannot open it. Here is how to view, check and convert DST files for free, and when you need the original artwork instead.",
  "category": "Guides",
  "tags": [
    "dst embroidery file",
    "dst file embroidery",
    "dst format for embroidery",
    "how to open dst file",
    "open dst file",
    "dst file viewer"
  ],
  "publishedAt": "2026-11-07",
  "updatedAt": "2026-11-12",
  "readTime": 9,
  "image": "/images/blog/how-to-open-dst-embroidery-file.webp",
  "imagePrompt": "Laptop showing embroidery software with a stitch preview of a flower emblem, a USB drive plugged in, and a multi-needle embroidery machine touchscreen beside it, bright light, 16:9.",
  "imageAlt": "Laptop showing an embroidery stitch preview next to an embroidery machine touchscreen",
  "relatedService": {
    "label": "Embroidery Digitizing Services",
    "href": "/services"
  },
  "faqs": [
    {
      "question": "What is a DST embroidery file?",
      "answer": "A DST file is a Tajima stitch file, the most common format for commercial embroidery machines. It contains the stitch positions, jumps, trims and color-change stops for a design, along with its name, stitch count and size. It does not contain thread colors or editable shapes, which is why it runs on almost any machine but is hard to edit."
    },
    {
      "question": "What program opens a DST file?",
      "answer": "DST files open in embroidery software. Free options include viewers such as Wilcom TrueSizer and Embrilliance Express, and the open-source Ink/Stitch extension for Inkscape. Commercial digitizing programs such as Wilcom, Hatch and Brother PE-Design also open DST files."
    },
    {
      "question": "Can I open a DST file in Illustrator or Photoshop?",
      "answer": "No. Illustrator and Photoshop cannot read DST files because a DST contains stitch coordinates, not vector paths or pixels. Ask for the original artwork (AI, EPS, SVG or PDF) instead, or export a picture of the design from an embroidery viewer."
    },
    {
      "question": "Why does my DST file show the wrong colors?",
      "answer": "DST files store color-change stops but not actual thread colors. Viewers fill in default colors, so the preview often looks wrong. Use the color sheet supplied with the file, or assign thread colors at the machine."
    },
    {
      "question": "Can I open a DST file on my phone?",
      "answer": "There are mobile apps and web-based viewers that can display DST files, but features vary and many are limited. For checking size and stitch count, a free desktop or browser-based embroidery viewer is usually more reliable."
    },
    {
      "question": "Can I edit or resize a DST file?",
      "answer": "Small changes are possible in embroidery software, but DST is a stitch-only format. Resizing more than about 10 to 20 percent can make stitches too dense or too loose, because the software cannot rebuild the original objects. For bigger changes, the design should be re-digitized."
    }
  ],
  "content": [
    {
      "type": "p",
      "text": "A **DST embroidery file** is a Tajima stitch file (DST is short for Data Stitch Tajima), the most widely accepted format on commercial embroidery machines. It stores the needle positions, jumps and color stops your machine follows, not a picture, so Windows Photos, Preview on Mac, Illustrator and Photoshop cannot display it. To open a DST file, use embroidery software or a free embroidery viewer such as Wilcom TrueSizer, Embrilliance Express or Ink/Stitch for Inkscape, which show the design, its size and its stitch count."
    },
    {
      "type": "p",
      "text": "This guide explains how to open a DST file on Windows, Mac and phone, what you can and cannot change and what to do if you actually need the artwork. To learn how DST compares with other machine formats, read [DST vs PES vs JEF file formats](/blog/dst-vs-pes-vs-jef-embroidery-file-formats)."
    },
    {
      "type": "h2",
      "text": "What Is a DST Embroidery File?"
    },
    {
      "type": "ul",
      "items": [
        "**Stitch coordinates:** every needle penetration as a short move from the previous point.",
        "**Jumps and trims:** moves between areas without stitching.",
        "**Color change stops:** where the machine pauses for the next thread, without the actual thread color.",
        "**Basic header data:** design name, stitch count and extents."
      ]
    },
    {
      "type": "table",
      "caption": "The DST format for embroidery at a glance",
      "headers": [
        "Property",
        "DST file"
      ],
      "rows": [
        [
          "Full name",
          "Tajima stitch file (.dst)"
        ],
        [
          "Type",
          "Machine stitch file: a list of needle movements, not shapes"
        ],
        [
          "Stores",
          "Stitches, jumps, trims and color-change stops, plus the design name, stitch count and size"
        ],
        [
          "Does not store",
          "Thread colors, object outlines, fonts or the original artwork"
        ],
        [
          "Unit and limits",
          "Positions in 0.1 mm steps; a single stitch or jump can move at most 12.1 mm"
        ],
        [
          "Read by",
          "Almost all commercial machines (Tajima, Barudan, SWF, Ricoma, Happy, Brother PR and others) and most embroidery software"
        ],
        [
          "Good for",
          "Running production and sending files between shops"
        ],
        [
          "Weak for",
          "Editing and large resizing, because the shapes behind the stitches are gone"
        ]
      ]
    },
    {
      "type": "p",
      "text": "Because DST stores stitches rather than shapes, it is great for running on machines but limited for editing. The editable working file stays with the digitizer in the software's native format."
    },
    {
      "type": "h2",
      "text": "Free Programs That Open DST Files"
    },
    {
      "type": "table",
      "caption": "Free DST file viewers compared",
      "headers": [
        "Program",
        "Runs on",
        "Cost",
        "What you can do with a DST"
      ],
      "rows": [
        [
          "Wilcom TrueSizer",
          "Web browser",
          "Free with a Wilcom account",
          "View, check size and stitch count, resize within limits, save to other machine formats"
        ],
        [
          "Embrilliance Express",
          "Windows and macOS",
          "Free mode of a paid program",
          "View the design, add lettering, save to machine formats"
        ],
        [
          "Ink/Stitch (Inkscape extension)",
          "Windows, macOS and Linux",
          "Free and open source",
          "View, convert to PES, JEF, EXP, VP3 and more, and digitize new designs"
        ],
        [
          "Ember browser converter",
          "Any browser, including tablets",
          "Free, no sign-up",
          "Preview and convert between DST, PES, JEF, EXP, VP3 and other formats"
        ],
        [
          "BERNINA ArtLink",
          "Windows",
          "Free",
          "View designs and convert them to other machine formats"
        ],
        [
          "Machine-brand utilities",
          "Mostly Windows",
          "Free",
          "View and convert for that brand of machine"
        ]
      ]
    },
    {
      "type": "p",
      "text": "For a fuller comparison of these tools, including what each one reads and writes, see [free embroidery file converters compared](/blog/free-embroidery-file-converters)."
    },
    {
      "type": "h2",
      "text": "How to Open a DST File on Windows"
    },
    {
      "type": "ol",
      "items": [
        "Install a free embroidery viewer, for example Wilcom TrueSizer or Embrilliance Express, or use Inkscape with the Ink/Stitch extension.",
        "Open the program and use File > Open, then choose your .dst file.",
        "Check the design width, height and stitch count against your hoop and order.",
        "Save a picture of the preview if you need to share it with a customer."
      ]
    },
    {
      "type": "tip",
      "text": "Double-clicking a DST file in Windows Explorer will not open it until an embroidery program is installed. After installing one, right-click the file, choose Open with, pick the embroidery program and tick the option to always use it for .dst files."
    },
    {
      "type": "h2",
      "text": "How to Open a DST File on Mac"
    },
    {
      "type": "p",
      "text": "Preview cannot read DST files. Use a Mac-compatible viewer such as Embrilliance Express, a browser-based viewer like TrueSizer on the web, or Inkscape with Ink/Stitch. Our [free embroidery software guide](/blog/best-free-embroidery-digitizing-software-inkstitch-guide) covers Ink/Stitch in more detail."
    },
    {
      "type": "h2",
      "text": "How to Open a DST File on a Phone"
    },
    {
      "type": "p",
      "text": "Some mobile apps and web viewers can preview DST files, which is handy for a quick look at a design a customer sent. They rarely show exact measurements or allow reliable editing, so check the file on a computer before sending it to production."
    },
    {
      "type": "h2",
      "text": "Opening a DST File in Illustrator"
    },
    {
      "type": "p",
      "text": "Illustrator cannot open DST files and there is no reliable way to convert stitches back into clean vector art. If you need the design for print, signage or a new embroidery file, ask for the original artwork. If the artwork is lost, our [vector art conversion service](/vector-art) can redraw it as clean AI, EPS, SVG or PDF files."
    },
    {
      "type": "h2",
      "text": "Converting DST to PES, JEF or Other Formats"
    },
    {
      "type": "p",
      "text": "Many viewers can save a DST in another machine format such as PES or JEF. This changes the container, not the stitches, so quality stays the same as the original DST. If your machine needs a format you do not have, it is often easier to ask your digitizer for it. We deliver DST, PES, EXP, JEF and other formats with every order."
    },
    {
      "type": "h2",
      "text": "When You Need a New File Instead"
    },
    {
      "type": "ul",
      "items": [
        "You need the design much larger or smaller than the original size.",
        "The design was made for a cap and now needs to go on a jacket, or the other way around.",
        "The file stitches poorly: puckering, gaps or thread breaks. See [common embroidery digitizing mistakes](/blog/common-embroidery-digitizing-mistakes).",
        "You only have a PNG or JPG and need a stitch file. See [how to convert PNG or JPG to DST](/blog/convert-png-jpg-to-dst-embroidery-file)."
      ]
    },
    {
      "type": "p",
      "text": "In those cases the design should be digitized again for the new size and fabric. Our [embroidery digitizing services](/services) start at the prices on our [pricing page](/pricing), and you can [send your file or artwork](/contact) for a quick quote."
    },
    {
      "type": "p",
      "text": "After opening a DST, check that it fits your machine with the [embroidery hoop sizes chart](/blog/embroidery-hoop-sizes-chart). Most commercial machines read DST natively; see the [multi-needle embroidery machine guide](/blog/multi-needle-embroidery-machine-guide)."
    }
  ]
};

export default post;
