import type { BlogPost } from '../types';

export const post: BlogPost = {
  slug: 'how-to-make-embroidered-patches',
  title: 'How to Make Embroidered Patches (Machine and By Hand)',
  metaTitle: 'How to Make Embroidered Patches: Step by Step',
  description:
    'How to make embroidered patches with an embroidery machine or by hand: materials, satin borders, cutting and sealing edges and iron-on backing.',
  excerpt:
    'Making your own embroidered patches is easier than it looks. Here is the full process, from fabric and stabilizer to satin borders, hot-knife cutting and heat-seal backing.',
  category: 'Guides',
  tags: [
    'how to make embroidered patches',
    'how to make your own embroidered patches',
    'how to make a embroidered patch by hand',
    'how to make embroidered patches with embroidery machine',
    'diy embroidered patches',
  ],
  publishedAt: '2026-11-07',
  updatedAt: '2026-11-09',
  readTime: 10,
  image: '/images/blog/how-to-make-embroidered-patches.webp',
  imagePrompt:
    'Embroidery machine stitching a round patch on twill in a hoop, with finished patches, a hot knife and heat-seal backing sheets on the table, 16:9.',
  imageAlt: 'Embroidery machine stitching a round patch with finished embroidered patches on the table',
  relatedService: { label: 'Custom Patch Digitizing', href: '/patches' },
  faqs: [
    {
      question: 'What is patch digitizing?',
      answer:
        'Patch digitizing is creating the stitch file for a standalone patch rather than a garment logo. The file includes a base fill or fabric layer sized to the blank, any placement and tackdown stitches for applique-style patches, and a border built to cover a cut edge: a satin border stitched in the file, or a clean outline for a merrow machine.',
    },
    {
      question: 'Can I digitize a patch for free?',
      answer:
        'Yes. Free software such as Ink/Stitch can build a fill and a satin border, and the sequence in this guide works in any digitizing program. Expect a few test sew-outs to get border coverage and density right on twill or felt. If you want a production-ready file without testing, our patch digitizing service prices patch files per design.',
    },
    {
      question: 'What do I need to make embroidered patches with a machine?',
      answer:
        'You need a digitized patch file with a satin border, twill or felt fabric, a firm stabilizer (heavy tearaway, cutaway or water-soluble), 40 weight thread, sharp scissors or a hot knife for polyester twill, and optional heat-seal or hook-and-loop backing.',
    },
    {
      question: 'How do you make an embroidered patch by hand?',
      answer:
        'Draw the design on felt or twill, embroider it in a hoop, then cut it out leaving a small margin. Finish the edge with a dense blanket stitch or whip stitch and add fusible web or felt on the back. Sew it onto the garment.',
    },
    {
      question: 'What fabric is best for embroidered patches?',
      answer:
        'Polyester twill is the classic patch fabric because it is stable and its edges can be sealed with heat. Felt is easy for beginners and does not fray. Canvas and denim also work for rustic patches.',
    },
    {
      question: 'How do you stop patch edges from fraying?',
      answer:
        'Cover the edge with a wide satin border, and trim close to it. On polyester twill, a hot knife melts and seals the edge. On cotton, a little fray-stop liquid along the cut edge helps.',
    },
    {
      question: 'What is a merrowed border?',
      answer:
        'A merrowed border is an overlocked edge sewn on a special merrow machine after the patch is embroidered. It gives the thick, rope-like edge seen on classic round and oval patches. Without a merrow machine, a satin border is the standard choice.',
    },
  ],
  content: [
    {
      type: 'p',
      text: 'To **make embroidered patches** with an embroidery machine, hoop twill or felt with a firm stabilizer, stitch a patch file that includes underlay, the design and a wide satin border, then cut the patch out close to the border and seal the edge. Add heat-seal or hook-and-loop backing if you want it. By hand, embroider the design on felt, cut it out with a small margin and finish the edge with a dense blanket stitch.',
    },
    {
      type: 'p',
      text: 'This guide walks through both methods step by step. The most important part is the file: a patch needs a border built to cover a cut edge. Our [custom patch digitizing service](/patches) creates patch files ready for production.',
    },
    { type: 'h2', text: 'Materials for Machine-Made Patches' },
    {
      type: 'ul',
      items: [
        '**Fabric:** polyester twill (classic), felt (easy, no fraying) or canvas.',
        '**Stabilizer:** heavy tearaway or cutaway; water-soluble for free-standing patches. See the [stabilizer guide](/blog/embroidery-stabilizer-guide-cutaway-vs-tearaway).',
        '**Thread:** 40 weight polyester; see the [thread weight guide](/blog/embroidery-thread-weight-guide).',
        '**Cutting tools:** sharp curved scissors or a hot knife for polyester twill.',
        '**Backing (optional):** heat-seal film, fusible web or hook-and-loop.',
        '**A patch file:** with placement, tack-down, design and satin border.',
      ],
    },
    { type: 'h2', text: 'How to Make Embroidered Patches With an Embroidery Machine' },
    {
      type: 'ol',
      items: [
        '**Prepare the file:** the design plus a satin border about 3 to 4 mm wide around the shape.',
        '**Hoop:** hoop the stabilizer and twill tightly together. For felt, float it on adhesive stabilizer.',
        '**Stitch the underlay and design:** fills first, then details; see [fill stitches](/blog/embroidery-fill-stitches-guide).',
        '**Stitch the border:** the satin border runs last, covering the edge of the patch area.',
        '**Unhoop and trim:** cut close to the outside of the border without cutting stitches.',
        '**Seal the edge:** run a hot knife around polyester twill, or apply fray stop on cotton.',
        '**Add backing:** press heat-seal film or fusible web to the back if you want iron-on patches.',
      ],
    },
    {
      type: 'tip',
      text: 'For batches, stitch several patches in one large hoop with spacing between them. It saves hooping time and gives consistent results.',
    },
    { type: 'h2', text: 'Digitizing the Patch File: Fill, Tackdown and Border' },
    {
      type: 'p',
      text: 'A patch file is sequenced differently from a garment logo. The garment file assumes the fabric already exists under the stitches; the patch file has to build the base, hold any fabric layer, and finish an edge that will be cut. Whether you digitize it yourself in [free software like Ink/Stitch](/blog/best-free-embroidery-digitizing-software-inkstitch-guide) or order it from our [patch digitizing service](/patches), the order of operations is the same.',
    },
    {
      type: 'ol',
      items: [
        '**Base fill or partial fill:** on twill or felt, fill only the areas the design needs; on a free-standing patch, a dense full base becomes the patch fabric. Keep fill density moderate on twill so the blank does not curl.',
        '**Placement line and tackdown (applique-style patches only):** a running stitch marks where the fabric piece goes, the machine stops, the fabric is laid down, then a running or zig-zag tackdown locks it before trimming.',
        '**Design and lettering:** fills first, satin details and text last, with underlay set for a stable blank rather than a stretchy garment.',
        '**Border:** a satin border about 2.5 to 4 mm wide for small patches and wider on large emblems, with a running-stitch underlay so it sits on the cut edge. For a merrow finish, the file ends with a clean outline instead, and the merrow edge is applied after stitching.',
        '**Formats and sheet:** export DST for commercial machines plus your home format (PES, JEF, EXP), and keep a color-sequence sheet with the stop for fabric placement if there is one.',
      ],
    },
    {
      type: 'table',
      caption: 'Patch border reference',
      headers: ['Border type', 'Typical width', 'Best for', 'Notes'],
      rows: [
        ['Satin border (in file)', '2.5 to 4 mm small patches; 4 to 6 mm large emblems', 'Any shape, any embroidery machine', 'Add running underlay under the satin; trim close to the outside edge after stitching.'],
        ['Merrow (overlock) border', 'About 3 mm rope edge', 'Circles, ovals, squares, shields', 'Applied on a merrow machine after embroidery; file carries a clean outline, not a satin border.'],
        ['Satin border + laser-cut edge', '2.5 to 4 mm satin, cut path 0.5 to 1 mm outside', 'Intricate outlines, tight corners, die-cut shapes', 'Needs a matching vector cut path; polyester twill seals cleanly under heat.'],
        ['Blanket or E-stitch edge', '3 to 5 mm', 'Felt patches, handmade look', 'Less edge coverage than satin; better on felt, which does not fray.'],
      ],
    },
    { type: 'h2', text: 'How to Make a Free-Standing Patch' },
    {
      type: 'p',
      text: 'A free-standing patch is stitched entirely on water-soluble stabilizer, with a fill base that becomes the patch fabric. After stitching, the stabilizer is rinsed away. This needs a file with a dense base layer and a strong border, and works best for small patches.',
    },
    { type: 'h2', text: 'How to Make an Embroidered Patch by Hand' },
    {
      type: 'ol',
      items: [
        'Draw the design on felt or twill and place it in a hand embroidery hoop.',
        'Embroider the design using [satin stitch](/blog/satin-stitch-embroidery-guide), fill stitches or chain stitch.',
        'Remove from the hoop and cut out the patch, leaving about 3 to 5 mm of fabric around the design.',
        'Finish the edge with a dense blanket stitch or whip stitch.',
        'Fuse a piece of felt or fusible web to the back to hide the stitches.',
        'Sew or iron it onto your garment.',
      ],
    },
    { type: 'h2', text: 'Patch Borders and Backings' },
    {
      type: 'ul',
      items: [
        '**Satin border:** made on any embroidery machine; clean and durable.',
        '**Merrowed border:** thick overlocked edge made on a merrow machine.',
        '**Heat-seal backing:** iron-on; see iron-on vs sew-on patches.',
        '**Hook-and-loop:** removable patches for uniforms and bags.',
        '**Other styles:** see [custom patch types: embroidered, woven, PVC, leather and chenille](/blog/custom-patch-types-embroidered-woven-pvc-leather-chenille).',
      ],
    },
    { type: 'h2', text: 'Design Tips for Better Patches' },
    {
      type: 'ul',
      items: [
        'Keep shapes simple; round, oval, square and shield shapes are easiest to cut and border.',
        'Keep text bold and above about 5 mm tall; see [best fonts for embroidery](/blog/best-fonts-for-embroidery).',
        'Use a contrasting border color to frame the design.',
        'For name patches, see embroidered name patches.',
        'For photo patches, see [convert a photo to embroidery](/blog/convert-photo-to-embroidery-guide).',
      ],
    },
    {
      type: 'p',
      text: 'Want production-ready patch files? Send your artwork, size and border style through our [contact page](/contact), or see [digitizing prices](/pricing). For hats, also see [custom leather patches for hats](/blog/custom-leather-patches-for-hats-guide).',
    },
  ],
};

export default post;
