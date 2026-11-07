import type { BlogPost } from '../types';

export const post: BlogPost = {
  slug: 'satin-stitch-embroidery-guide',
  title: 'Satin Stitch Embroidery: How to Do It by Hand and by Machine',
  metaTitle: 'Satin Stitch Embroidery: Hand & Machine Guide',
  description:
    'Learn satin stitch embroidery by hand and by machine: smooth technique, ideal column widths, underlay and density, and fixes for gaps and loops.',
  excerpt:
    'Satin stitch gives embroidery its smooth shine. Here is how to sew it neatly by hand, how machine satin columns are digitized and the limits that keep them crisp.',
  category: 'Guides',
  tags: [
    'satin stitch embroidery',
    'satin embroidery stitches',
    'how to satin stitch embroidery',
    'embroidery satin stitch',
    'machine satin stitch width',
  ],
  publishedAt: '2026-11-07',
  readTime: 8,
  image: '/images/blog/satin-stitch-embroidery-guide.webp',
  imagePrompt:
    'Macro close-up of glossy satin stitch embroidery columns forming smooth letters and a leaf shape on navy twill, showing parallel thread texture, 16:9.',
  imageAlt: 'Macro view of glossy satin stitch embroidery columns on navy fabric',
  relatedService: { label: 'Custom Embroidery Digitizing', href: '/services' },
  faqs: [
    {
      question: 'What is a satin stitch in embroidery?',
      answer:
        'A satin stitch is a series of straight, closely spaced stitches laid side by side across a shape, so the thread forms a smooth, shiny surface with no fabric showing. It is used for lettering, borders, outlines and small filled shapes.',
    },
    {
      question: 'How do you do a satin stitch by hand?',
      answer:
        'Outline the shape with a split or back stitch, then bring the needle up on one edge and down on the opposite edge, laying each stitch right next to the last. Keep stitches parallel, at an even tension and not too long. Covering the outline gives a crisp, slightly raised edge.',
    },
    {
      question: 'How wide can a machine satin stitch be?',
      answer:
        'Machine satin columns usually look best between about 1 and 7 mm wide. Narrower columns can disappear, and much wider ones create long stitches that snag and loosen. Wider areas are digitized as split satin or fill stitches instead.',
    },
    {
      question: 'Why does my satin stitch have gaps?',
      answer:
        'Gaps usually come from density that is too open for the thread, missing underlay, or fabric pulling the column narrower. Adding a center or zigzag underlay, tightening density slightly and adding pull compensation fixes most gaps.',
    },
    {
      question: 'Satin stitch vs fill stitch: which should I use?',
      answer:
        'Use satin for narrow shapes, lettering and borders where you want shine. Use a fill stitch for wide areas, because long satin stitches would snag. See our [embroidery fill stitches guide](/blog/embroidery-fill-stitches-guide).',
    },
  ],
  content: [
    {
      type: 'p',
      text: '**Satin stitch embroidery** covers a shape with straight, closely spaced stitches laid side by side, so the thread forms a smooth, glossy surface. By hand, you outline the shape and fill it edge to edge with parallel stitches. By machine, satin "columns" zigzag across a shape with underlay and pull compensation, and they work best roughly 1 to 7 mm wide. It is the stitch behind crisp lettering, borders and patch edges.',
    },
    {
      type: 'p',
      text: 'This guide covers hand satin stitch for crafters and machine satin stitch for embroidery shops, including the settings our [digitizing team](/services) uses for clean, shiny columns.',
    },
    { type: 'h2', text: 'How to Do a Satin Stitch by Hand' },
    {
      type: 'ol',
      items: [
        'Transfer the design and outline the shape with a split stitch or back stitch.',
        'Choose a stitch direction; angled stitches often look better on curves.',
        'Bring the needle up just outside the outline on one side.',
        'Take it down just outside the outline on the opposite side.',
        'Lay the next stitch right beside the first, with no fabric showing between them.',
        'Keep tension even so stitches lie flat and do not pucker the fabric.',
        'For a raised look, pad the shape first with a layer of stitches in the opposite direction (padded satin stitch).',
      ],
    },
    {
      type: 'tip',
      text: 'Keep hand satin stitches short, ideally under about 1 cm. For larger shapes, split the area into sections or use long-and-short stitch so threads do not snag.',
    },
    { type: 'h2', text: 'Machine Satin Stitch: How Satin Columns Work' },
    {
      type: 'p',
      text: 'In machine embroidery, a satin column is a zigzag of stitches across a shape between two edges. The digitizer sets the angle, density and underlay. Because each stitch spans the whole width, column width matters more than anything else:',
    },
    {
      type: 'ul',
      items: [
        '**Under about 1 mm:** too narrow to read; use a running or bean stitch instead.',
        '**About 1 to 7 mm:** the sweet spot for lettering, borders and outlines.',
        '**Above about 7 to 8 mm:** stitches get long, loose and easy to snag; use split satin or a [fill stitch](/blog/embroidery-fill-stitches-guide).',
      ],
    },
    { type: 'h2', text: 'Underlay, Density and Pull Compensation' },
    {
      type: 'ul',
      items: [
        '**Underlay:** a center run for narrow columns, edge run or zigzag for wider ones. It stabilizes the fabric and lifts the satin. See [embroidery underlay types explained](/blog/embroidery-underlay-types-explained).',
        '**Density:** spacing tight enough for coverage but not so tight that stitches pile up. Finer thread needs tighter spacing; see the [thread weight guide](/blog/embroidery-thread-weight-guide).',
        '**Pull compensation:** satin pulls fabric inward, so columns are widened slightly to stay true to the artwork.',
        '**Short stitches:** on curves, inner points get shortened so they do not bunch up.',
      ],
    },
    { type: 'h2', text: 'Where Satin Stitch Is Used' },
    {
      type: 'ul',
      items: [
        '**Lettering:** most embroidered text; see [best fonts for embroidery](/blog/best-fonts-for-embroidery) and [small text embroidery](/blog/how-to-digitize-small-text-micro-lettering-embroidery).',
        '**Borders and outlines:** clean edges around logos and [applique](/services/applique-digitizing) pieces.',
        '**Patch edges:** the satin border on [embroidered patches](/blog/how-to-make-embroidered-patches).',
        '**3D puff:** puff foam is covered with dense satin columns; see [3D puff digitizing](/services/3d-puff-digitizing).',
        '**Tackle twill borders:** see [what is tackle twill](/blog/what-is-tackle-twill).',
      ],
    },
    { type: 'h2', text: 'Fixing Common Satin Stitch Problems' },
    {
      type: 'ul',
      items: [
        '**Gaps or fabric showing:** add underlay, tighten density slightly, add pull compensation.',
        '**Loose, loopy stitches:** column too wide; split it or switch to fill.',
        '**Bobbin thread showing on top:** check tension; see [embroidery machine thread tension](/blog/embroidery-machine-thread-tension-guide).',
        '**Puckering around columns:** use firmer stabilizer and check density; see [how to fix puckering](/blog/fix-embroidery-fabric-puckering-and-thread-breaks).',
        '**Thread breaks on satin:** change the needle and slow down; see the [needle size guide](/blog/embroidery-machine-needle-size-guide).',
      ],
    },
    {
      type: 'p',
      text: 'Need logos with smooth, professional satin lettering and borders? Send your artwork through our [contact page](/contact) or see [digitizing prices](/pricing). For caps, ask about [cap logo digitizing](/services/cap-logo-digitizing).',
    },
  ],
};

export default post;
