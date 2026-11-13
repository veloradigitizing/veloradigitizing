import type { BlogPost } from '../types';

export const post: BlogPost = {
  "slug": "brother-embroidery-machine-file-type",
  "title": "What File Type Does a Brother Embroidery Machine Use? (PES Explained)",
  "metaTitle": "Brother Embroidery File Type: PES Format Explained",
  "description": "Brother embroidery machines use the PES file type. Learn PES versions, how to load designs by USB, convert DST to PES and fix file errors.",
  "excerpt": "Brother and Baby Lock machines read PES files. Here is what PES is, which versions to use, how to transfer designs and what to do when your machine will not open a file.",
  "category": "Guides",
  "tags": [
    "brother embroidery file type",
    "file type for brother embroidery machine",
    "pes embroidery file",
    "brother pes format",
    "convert dst to pes"
  ],
  "publishedAt": "2026-11-13",
  "readTime": 8,
  "image": "/images/blog/brother-embroidery-machine-file-type.webp",
  "imagePrompt": "Home single-needle embroidery machine with a touchscreen showing a flower design, USB drive plugged in, laptop with design thumbnails, bright craft room, 16:9.",
  "imageAlt": "Home embroidery machine with touchscreen design preview and a USB drive plugged in",
  "relatedService": {
    "label": "Embroidery Digitizing Services",
    "href": "/services"
  },
  "faqs": [
    {
      "question": "What file type does a Brother embroidery machine use?",
      "answer": "Brother embroidery machines use the PES file format. Baby Lock machines use PES as well. Many Brother multi-needle models can also read DST. Always check your machine manual for the formats it supports."
    },
    {
      "question": "Can a Brother machine read DST files?",
      "answer": "Many Brother home machines cannot read DST directly, while some multi-needle Brother models can. If yours does not, convert the DST to PES in embroidery software or ask your digitizer for a PES version."
    },
    {
      "question": "Why can my Brother machine not read my PES file?",
      "answer": "Common causes are a PES version newer than the machine supports, a design larger than the hoop, an unsupported USB drive format, too many files in one folder or a long file name. Try saving an older PES version, resizing for your hoop and using a small USB drive."
    },
    {
      "question": "How do I transfer embroidery designs to a Brother machine?",
      "answer": "Copy the PES file to a USB flash drive, insert it into the machine and select the design from the USB menu. Some models also connect by cable or wireless app. Keep files in the main folder with short names."
    },
    {
      "question": "Is PES better than DST?",
      "answer": "Neither is better in stitch quality; they are containers for the same stitches. PES can store thread colors and preview information for Brother machines, while DST is the commercial standard and stores no colors. See [DST vs PES vs JEF](/blog/dst-vs-pes-vs-jef-embroidery-file-formats)."
    },
    {
      "question": "Can a Brother embroidery machine read JEF or VP3 files?",
      "answer": "Home Brother machines read PES, not JEF or VP3. Convert the design to PES first in embroidery software or a free converter, or ask the digitizer for a PES version. Converting changes the file format, not the stitches, so the design sews the same."
    }
  ],
  "content": [
    {
      "type": "p",
      "text": "The **Brother embroidery file type** is **PES**. Brother and Baby Lock home embroidery machines read PES files, which store the stitches, thread colors and a preview image. Many Brother multi-needle models can also read DST, the commercial standard. If your design is in another format, convert it to PES or ask your digitizer for a PES version sized for your hoop."
    },
    {
      "type": "p",
      "text": "This guide explains PES versions, how to load designs, how to convert other formats and how to fix files your machine will not open. We deliver PES, DST and other formats with every order from our [embroidery digitizing services](/services)."
    },
    {
      "type": "h2",
      "text": "What Is a PES File?"
    },
    {
      "type": "p",
      "text": "PES is Brother's embroidery format. Like DST, it stores stitch coordinates, jumps, trims and color changes. Unlike DST, it also stores thread colors and a design preview, so the machine shows the right colors on screen. It is a stitch file, not editable artwork; for big changes the design must be digitized again."
    },
    {
      "type": "h2",
      "text": "Which Machines Use PES?"
    },
    {
      "type": "table",
      "caption": "Embroidery file type by machine brand",
      "headers": [
        "Machine brand",
        "Main file type",
        "Notes"
      ],
      "rows": [
        [
          "Brother (home machines)",
          "PES",
          "The native Brother format; stores thread colors and a preview"
        ],
        [
          "Baby Lock",
          "PES",
          "Shares the Brother format"
        ],
        [
          "Brother multi-needle (PR series)",
          "PES and DST",
          "Check the manual for your model"
        ],
        [
          "Janome",
          "JEF",
          "Some models also read other formats"
        ],
        [
          "Husqvarna Viking and Pfaff",
          "VP3",
          "Older models use HUS (Viking) or PCS (Pfaff)"
        ],
        [
          "Bernina",
          "EXP and ART",
          "ART is Bernina software's own format"
        ],
        [
          "Singer",
          "XXX",
          "Some newer models read PES as well"
        ],
        [
          "Commercial machines (Tajima, SWF, Ricoma, Happy and others)",
          "DST",
          "The commercial standard; no thread colors stored"
        ]
      ]
    },
    {
      "type": "ul",
      "items": [
        "**Brother single-needle home machines:** PES is the main format.",
        "**Baby Lock embroidery machines:** also use PES.",
        "**Brother multi-needle machines:** usually read PES and often DST as well; check your manual.",
        "**Other brands:** Janome uses JEF, Husqvarna Viking and Pfaff use VP3, and most commercial machines use DST. See [embroidery file formats compared](/blog/dst-vs-pes-vs-jef-embroidery-file-formats)."
      ]
    },
    {
      "type": "h2",
      "text": "PES Versions and Older Machines"
    },
    {
      "type": "p",
      "text": "PES has been updated several times. Newer software can save newer PES versions that older machines may not read. If an older machine shows an error or a blank preview, save the design as an older PES version in your embroidery software or ask your digitizer for a compatible version."
    },
    {
      "type": "h2",
      "text": "How to Load a PES File on a Brother Machine"
    },
    {
      "type": "ol",
      "items": [
        "Use a small, standard USB flash drive formatted as FAT32.",
        "Copy the PES file to the main folder of the drive, not inside many subfolders.",
        "Keep the file name short, using letters and numbers only.",
        "Insert the drive into the machine and open the USB or memory menu.",
        "Select the design and check that it fits the hoop shown on screen."
      ]
    },
    {
      "type": "tip",
      "text": "If the design is too big for your hoop, the machine will not load it. Check sizes with our [embroidery hoop sizes chart](/blog/embroidery-hoop-sizes-chart) before ordering."
    },
    {
      "type": "h2",
      "text": "How to Convert DST or Other Formats to PES"
    },
    {
      "type": "p",
      "text": "Free and paid embroidery programs can open a DST and save it as PES; see [how to open a DST file](/blog/how-to-open-dst-embroidery-file) for free viewers. Converting changes the format, not the stitches, so quality stays the same. DST has no thread colors, so you may need to set colors after converting. Do not try to convert a JPG or PNG directly; images must be digitized. See [how to convert PNG or JPG to DST](/blog/convert-png-jpg-to-dst-embroidery-file) and [how to digitize embroidery designs](/blog/how-to-digitize-embroidery-designs)."
    },
    {
      "type": "h2",
      "text": "Fixing \"Cannot Read File\" Errors"
    },
    {
      "type": "table",
      "caption": "Brother machine cannot read the file: causes and fixes",
      "headers": [
        "Cause",
        "Fix"
      ],
      "rows": [
        [
          "The PES version is newer than the machine supports",
          "Save the design as an older PES version"
        ],
        [
          "The design is larger than the hoop or sewing field",
          "Resize slightly or ask for a version sized for your hoop"
        ],
        [
          "The USB drive is too large or not FAT32",
          "Use a small drive formatted as FAT32"
        ],
        [
          "The file name has special characters or is very long",
          "Rename it with short letters and numbers only"
        ],
        [
          "The file is in a subfolder or among many other files",
          "Put it in the main folder of an otherwise empty drive"
        ],
        [
          "The download was interrupted",
          "Download the file again"
        ]
      ]
    },
    {
      "type": "h2",
      "text": "Ordering Designs for Your Brother Machine"
    },
    {
      "type": "p",
      "text": "Tell us your machine model and hoop size, and we will deliver PES sized to fit, plus DST if you also use a commercial machine. Popular jobs include [cap logos](/services/cap-logo-digitizing), [applique](/services/applique-digitizing) and [3D puff](/services/3d-puff-digitizing). See [digitizing prices](/pricing) or [send your artwork](/contact)."
    }
  ]
};

export default post;
