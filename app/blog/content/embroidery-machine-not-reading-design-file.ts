import type { BlogPost } from '../types';

export const post: BlogPost = {
  "slug": "embroidery-machine-not-reading-design-file",
  "title": "Embroidery Machine Not Reading USB or Design File? 9 Fixes",
  "metaTitle": "Embroidery Machine Not Reading USB or Design File? 9 Fixes",
  "description": "Embroidery machine not reading your USB or design? Check file format, zipped files, folder location, hoop size, file names and FAT32 formatting with this list.",
  "excerpt": "A step-by-step checklist for when the machine shows an empty USB, says file not supported, or refuses to load a design: format by brand, folder rules, hoop size, file names and USB formatting.",
  "category": "Troubleshooting",
  "tags": [
    "embroidery machine not reading usb",
    "embroidery machine won't read design file",
    "file not supported embroidery machine",
    "embroidery design not showing on usb",
    "brother embroidery machine not reading usb"
  ],
  "publishedAt": "2026-11-14",
  "readTime": 8,
  "image": "/images/blog/brother-embroidery-machine-file-type.webp",
  "imagePrompt": "Close-up of a hand inserting a small USB flash drive into the side port of a home embroidery machine, the touchscreen showing an empty file list, hoop with stabilizer in the foreground, warm workshop light, 16:9, no text.",
  "imageAlt": "USB flash drive being inserted into an embroidery machine with an empty design list on the screen",
  "relatedService": {
    "label": "Custom Embroidery Digitizing",
    "href": "/services"
  },
  "faqs": [
    {
      "question": "Why is my embroidery machine not reading my USB?",
      "answer": "The most common causes are a file in the wrong format for the machine (for example DST on a Janome that expects JEF), a file still inside a ZIP folder, a file saved in a folder the machine does not look in, a USB stick formatted as NTFS or exFAT instead of FAT32, or a stick larger than the machine supports. Work through these in order before assuming the port is faulty."
    },
    {
      "question": "Why does my embroidery machine say file not supported?",
      "answer": "The machine sees the file but cannot use it. Usually the format is wrong for the brand, the design is larger than the largest hoop the machine accepts, the file has more stitches or colors than the machine allows, or the file was corrupted in conversion. Re-export it in the machine's native format at a size that fits the hoop."
    },
    {
      "question": "What file format does my embroidery machine need?",
      "answer": "Brother and Baby Lock use PES (some older models use PHC or DST), Janome uses JEF, Husqvarna Viking and Pfaff use VP3, Bernina uses EXP or ART, Singer uses XXX or PES depending on the model, and most commercial machines such as Tajima, Ricoma and Happy read DST. Check the format list in your manual before ordering a design."
    },
    {
      "question": "Where should I put embroidery files on a USB stick?",
      "answer": "Brother machines generally read files in the root of the stick or one folder level below it, not in deeper subfolders. Janome machines usually expect a folder named EMB with a subfolder named Embf, and the JEF files inside that. When in doubt, put the file in the root of a freshly formatted stick with nothing else on it."
    },
    {
      "question": "What size USB drive works best for an embroidery machine?",
      "answer": "Many machines read small drives more reliably. A basic 4 GB to 16 GB stick formatted as FAT32 is the safest choice; some older models have trouble with anything above 4 GB or with sticks that have multiple partitions. Check your manual for the maximum supported size."
    },
    {
      "question": "Can a digitizer send the file in my machine's format?",
      "answer": "Yes. A good digitizer delivers the design in your machine's native format, sized to fit your hoop, so you do not need to convert it. Tell them the machine brand and model and the hoop you plan to use when you order."
    }
  ],
  "content": [
    {
      "type": "p",
      "text": "**If your embroidery machine is not reading a USB stick or a design file**, the cause is almost always one of five things: the wrong file format for your machine, a file still inside a ZIP, a file saved in the wrong folder, a design too big for the hoop, or a USB stick formatted in a way the machine cannot read. Work through the nine checks below in order; most problems are solved by the third one."
    },
    {
      "type": "h2",
      "text": "Quick diagnosis: what the machine is telling you"
    },
    {
      "type": "table",
      "caption": "Embroidery machine USB symptoms and likely causes",
      "headers": ["Symptom", "Most likely cause", "Check"],
      "rows": [
        ["USB icon does not appear", "Stick format, size or faulty port", "Checks 7-9"],
        ["USB opens but the list is empty", "Wrong format, ZIP file, wrong folder", "Checks 1-3"],
        ["Design is listed but greyed out", "Design larger than the selected or largest hoop", "Check 4"],
        ["\"File not supported\" or \"data error\"", "Wrong format, too many stitches or colors, corrupted conversion", "Checks 1, 5, 6"],
        ["Some designs show, others do not", "File names, folder depth or file limit", "Checks 3, 5, 6"]
      ]
    },
    {
      "type": "h2",
      "text": "1. Check the file format for your machine brand"
    },
    {
      "type": "p",
      "text": "Embroidery machines only read certain formats, and most home machines read only their own. A DST file will not show up on most Janome models, and a JEF file will not show up on a Brother."
    },
    {
      "type": "table",
      "caption": "Embroidery file format by machine brand",
      "headers": ["Machine brand", "Native format", "Notes"],
      "rows": [
        ["Brother, Baby Lock", "PES", "Some models also read DST and PHC"],
        ["Janome, Elna", "JEF", "Older models may need JEF in an EMB/Embf folder"],
        ["Husqvarna Viking, Pfaff", "VP3", "Older models use HUS or PCS"],
        ["Bernina", "EXP, ART", "ART is the native editable format"],
        ["Singer", "XXX or PES", "Depends on model; check the manual"],
        ["Tajima, Ricoma, Happy, SWF, Barudan", "DST", "DST stores no colors; set thread colors on the machine"]
      ]
    },
    {
      "type": "p",
      "text": "For more detail, see [the Brother embroidery file type guide](/blog/brother-embroidery-machine-file-type) and [DST vs PES vs JEF formats](/blog/dst-vs-pes-vs-jef-embroidery-file-formats)."
    },
    {
      "type": "h2",
      "text": "2. Unzip the design"
    },
    {
      "type": "p",
      "text": "Designs are usually downloaded as ZIP files that hold several formats. The machine cannot open a ZIP. Extract it on your computer first, then copy only the file in your machine's format to the USB stick, not the whole folder."
    },
    {
      "type": "h2",
      "text": "3. Put the file in the folder the machine looks in"
    },
    {
      "type": "ul",
      "items": [
        "**Brother and Baby Lock:** save the file in the root of the stick or in a folder one level down. Brother manuals say files in deeper subfolders cannot be retrieved.",
        "**Janome:** many models expect a folder named EMB with a subfolder named Embf, and the JEF files inside Embf. Let the machine format the stick, or create the folders yourself.",
        "**Commercial machines:** most read DST from the root of the stick; some only show files with short names."
      ]
    },
    {
      "type": "h2",
      "text": "4. Check the design size against your hoop"
    },
    {
      "type": "p",
      "text": "A design that is larger than the biggest hoop the machine supports will either be hidden or appear greyed out. A design sized for a 6x10 hoop will not open on a machine with a 4x4 maximum field. Check the design dimensions in mm, compare them with your hoop's sewing field in the [embroidery hoop sizes chart](/blog/embroidery-hoop-sizes-chart), and remember the real sewing field is smaller than the hoop's name suggests."
    },
    {
      "type": "h2",
      "text": "5. Shorten and simplify the file name"
    },
    {
      "type": "p",
      "text": "Some machines skip files with long names, spaces or special characters such as &, #, accents or emoji. Rename the file to something short with letters and numbers only, such as LOGO01.PES."
    },
    {
      "type": "h2",
      "text": "6. Check stitch, color and file limits"
    },
    {
      "type": "p",
      "text": "Older and entry-level machines have limits on stitches per design, the number of color stops and the number of files they will list from one folder. A design with a very high stitch count, or a stick holding hundreds of designs, can fail. Keep only the designs you need on the stick, and check your manual for the limits."
    },
    {
      "type": "h2",
      "text": "7. Format the USB stick as FAT32"
    },
    {
      "type": "p",
      "text": "Most embroidery machines read FAT32 only. Sticks formatted as NTFS or exFAT, which is common on new large drives and on Mac-formatted drives, are often ignored. Back up anything on the stick, then format it as FAT32 on your computer, or use the machine's own format function if it has one so it creates the folder structure it expects."
    },
    {
      "type": "h2",
      "text": "8. Use a smaller, plain USB stick"
    },
    {
      "type": "p",
      "text": "Machines built before large drives were common may not read sticks above 4 GB or above 16 GB, and sticks with security software or multiple partitions can cause problems. A basic 4-16 GB stick from a known brand is the safest choice."
    },
    {
      "type": "h2",
      "text": "9. Rule out the port and the file itself"
    },
    {
      "type": "p",
      "text": "Try a different stick with a design you know works. If that fails too, the port or the machine's firmware may need service. If the known design works but your new one does not, the file may have been damaged in conversion; ask for a fresh export rather than converting it again with a free converter. See [free embroidery file converters compared](/blog/free-embroidery-file-converters) for what those tools can and cannot do."
    },
    {
      "type": "h2",
      "text": "Mac users: hidden files and formatting"
    },
    {
      "type": "p",
      "text": "When a Mac copies files to a USB stick, it also writes hidden files whose names start with a dot and an underscore, such as ._LOGO01.PES. Some machines list these as broken designs or stop reading the folder. Empty the trash before ejecting, or use a free utility that removes the hidden files. When formatting on a Mac, choose MS-DOS (FAT) in Disk Utility, which is FAT32, with the Master Boot Record scheme, not ExFAT or APFS."
    },
    {
      "type": "h2",
      "text": "Files converted from another format"
    },
    {
      "type": "p",
      "text": "A design converted from DST to PES or JEF with a free tool often opens but sews badly: thread colors are lost because DST stores none, trims can turn into jumps, and the size can shift slightly. If the machine rejects a converted file, or it opens but the colors and stops look wrong, ask the digitizer for a direct export in your format instead of converting again. A digitizer exports from the original object file, so stitches, trims and colors come out correctly."
    },
    {
      "type": "h2",
      "text": "Before you order a design, check these"
    },
    {
      "type": "ol",
      "items": [
        "Your machine brand and exact model.",
        "The largest hoop you own and its sewing field in mm.",
        "The format the machine reads, from the manual.",
        "Whether the machine trims jumps automatically, which affects how the digitizer builds the file."
      ]
    },
    {
      "type": "tip",
      "text": "Keep a small working stick that holds only one test design you know sews well. When something stops working, you can tell in one minute whether the problem is the machine, the stick or the new file."
    },
    {
      "type": "h2",
      "text": "Get the file in your machine's exact format"
    },
    {
      "type": "p",
      "text": "Most of these problems disappear when the design is delivered in the right format and size from the start. When you order from Velora, tell us your machine brand, model and hoop, and we will deliver the file in its native format and sized to fit. Plans start at $6.99 for designs up to 5,000 stitches. See [embroidery digitizing services](/services) or [contact us](/contact) with your machine details."
    }
  ]
};

export default post;
