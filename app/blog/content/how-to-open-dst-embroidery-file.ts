import type { BlogPost } from '../types';

export const post: BlogPost = {
  slug: 'how-to-open-dst-embroidery-file',
  title: 'How to Open a DST File (Windows, Mac, Phone & Illustrator)',
  metaTitle: 'How to Open a DST File: Free Embroidery Viewers',
  description:
    'Learn how to open a DST embroidery file on Windows, Mac or phone with free viewers, why Illustrator cannot open it and what to do if you need to edit it.',
  excerpt:
    'A DST file is a stitch file, not an image, so normal photo viewers cannot open it. Here is how to view, check and convert DST files for free, and when you need the original artwork instead.',
  category: 'Guides',
  tags: [
    'how to open dst file',
    'how to open a dst file',
    'dst file viewer',
    'open dst file in windows',
    'dst embroidery file',
  ],
  publishedAt: '2026-11-07',
  readTime: 6,
  image: '/images/blog/how-to-open-dst-embroidery-file.webp',
  imagePrompt:
    'Laptop showing embroidery software with a stitch preview of a flower emblem, a USB drive plugged in, and a multi-needle embroidery machine touchscreen beside it, bright light, 16:9.',
  imageAlt: 'Laptop showing an embroidery stitch preview next to an embroidery machine touchscreen',
  relatedService: { label: 'Embroidery Digitizing Services', href: '/services' },
  faqs: [
    {
      question: 'What program opens a DST file?',
      answer:
        'DST files open in embroidery software. Free options include viewers such as Wilcom TrueSizer and Embrilliance Express, and the open-source Ink/Stitch extension for Inkscape. Commercial digitizing programs such as Wilcom, Hatch and Brother PE-Design also open DST files.',
    },
    {
      question: 'Can I open a DST file in Illustrator or Photoshop?',
      answer:
        'No. Illustrator and Photoshop cannot read DST files because a DST contains stitch coordinates, not vector paths or pixels. Ask for the original artwork (AI, EPS, SVG or PDF) instead, or export a picture of the design from an embroidery viewer.',
    },
    {
      question: 'Why does my DST file show the wrong colors?',
      answer:
        'DST files store color-change stops but not actual thread colors. Viewers fill in default colors, so the preview often looks wrong. Use the color sheet supplied with the file, or assign thread colors at the machine.',
    },
    {
      question: 'Can I open a DST file on my phone?',
      answer:
        'There are mobile apps and web-based viewers that can display DST files, but features vary and many are limited. For checking size and stitch count, a free desktop or browser-based embroidery viewer is usually more reliable.',
    },
    {
      question: 'Can I edit or resize a DST file?',
      answer:
        'Small changes are possible in embroidery software, but DST is a stitch-only format. Resizing more than about 10 to 20 percent can make stitches too dense or too loose, because the software cannot rebuild the original objects. For bigger changes, the design should be re-digitized.',
    },
  ],
  content: [
    {
      type: 'p',
      text: 'To **open a DST file**, use embroidery software or a free embroidery viewer, not a photo viewer. A DST file is a Tajima stitch file: it stores the needle positions, jumps and color stops your machine follows, so Windows Photos, Preview on Mac, Illustrator and Photoshop cannot display it. Free viewers such as Wilcom TrueSizer, Embrilliance Express and Ink/Stitch for Inkscape can show the design, its size and stitch count.',
    },
    {
      type: 'p',
      text: 'This guide explains how to open a DST file on Windows, Mac and phone, what you can and cannot change and what to do if you actually need the artwork. To learn how DST compares with other machine formats, read [DST vs PES vs JEF file formats](/blog/dst-vs-pes-vs-jef-embroidery-file-formats).',
    },
    { type: 'h2', text: 'What Is Inside a DST File' },
    {
      type: 'ul',
      items: [
        '**Stitch coordinates:** every needle penetration as a short move from the previous point.',
        '**Jumps and trims:** moves between areas without stitching.',
        '**Color change stops:** where the machine pauses for the next thread, without the actual thread color.',
        '**Basic header data:** design name, stitch count and extents.',
      ],
    },
    {
      type: 'p',
      text: 'Because DST stores stitches rather than shapes, it is great for running on machines but limited for editing. The editable working file stays with the digitizer in the software\'s native format.',
    },
    { type: 'h2', text: 'How to Open a DST File on Windows' },
    {
      type: 'ol',
      items: [
        'Install a free embroidery viewer, for example Wilcom TrueSizer or Embrilliance Express, or use Inkscape with the Ink/Stitch extension.',
        'Open the program and use File > Open, then choose your .dst file.',
        'Check the design width, height and stitch count against your hoop and order.',
        'Save a picture of the preview if you need to share it with a customer.',
      ],
    },
    {
      type: 'tip',
      text: 'Double-clicking a DST file in Windows Explorer will not open it until an embroidery program is installed and set as the default app for .dst files.',
    },
    { type: 'h2', text: 'How to Open a DST File on Mac' },
    {
      type: 'p',
      text: 'Preview cannot read DST files. Use a Mac-compatible viewer such as Embrilliance Express, a browser-based viewer like TrueSizer on the web, or Inkscape with Ink/Stitch. Our [free embroidery software guide](/blog/best-free-embroidery-digitizing-software-inkstitch-guide) covers Ink/Stitch in more detail.',
    },
    { type: 'h2', text: 'How to Open a DST File on a Phone' },
    {
      type: 'p',
      text: 'Some mobile apps and web viewers can preview DST files, which is handy for a quick look at a design a customer sent. They rarely show exact measurements or allow reliable editing, so check the file on a computer before sending it to production.',
    },
    { type: 'h2', text: 'Opening a DST File in Illustrator' },
    {
      type: 'p',
      text: 'Illustrator cannot open DST files and there is no reliable way to convert stitches back into clean vector art. If you need the design for print, signage or a new embroidery file, ask for the original artwork. If the artwork is lost, our [vector art conversion service](/vector-art) can redraw it as clean AI, EPS, SVG or PDF files.',
    },
    { type: 'h2', text: 'Converting DST to PES, JEF or Other Formats' },
    {
      type: 'p',
      text: 'Many viewers can save a DST in another machine format such as PES or JEF. This changes the container, not the stitches, so quality stays the same as the original DST. If your machine needs a format you do not have, it is often easier to ask your digitizer for it. We deliver DST, PES, EXP, JEF and other formats with every order.',
    },
    { type: 'h2', text: 'When You Need a New File Instead' },
    {
      type: 'ul',
      items: [
        'You need the design much larger or smaller than the original size.',
        'The design was made for a cap and now needs to go on a jacket, or the other way around.',
        'The file stitches poorly: puckering, gaps or thread breaks. See [common embroidery digitizing mistakes](/blog/common-embroidery-digitizing-mistakes).',
        'You only have a PNG or JPG and need a stitch file. See [how to convert PNG or JPG to DST](/blog/convert-png-jpg-to-dst-embroidery-file).',
      ],
    },
    {
      type: 'p',
      text: 'In those cases the design should be digitized again for the new size and fabric. Our [embroidery digitizing services](/services) start at the prices on our [pricing page](/pricing), and you can [send your file or artwork](/contact) for a quick quote.',
    },
    {
      type: 'p',
      text: "After opening a DST, check that it fits your machine with the [embroidery hoop sizes chart](/blog/embroidery-hoop-sizes-chart). Most commercial machines read DST natively; see the [multi-needle embroidery machine guide](/blog/multi-needle-embroidery-machine-guide).",
    },
  ],
};

export default post;
