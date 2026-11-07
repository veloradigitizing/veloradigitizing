import type { BlogPost } from '../types';

export const post: BlogPost = {
  slug: 'embroidery-fill-stitches-guide',
  title: 'Embroidery Fill Stitches: Best Filling Stitches by Hand and Machine',
  metaTitle: 'Embroidery Fill Stitches: Hand & Machine Guide',
  description:
    'The best embroidery fill stitches for large areas: hand filling stitches like long-and-short and seed stitch, plus machine tatami fill settings.',
  excerpt:
    'Fill stitches cover large areas smoothly. Here are the best filling stitches for hand embroidery and how machine fills are set up with density, angles and underlay.',
  category: 'Guides',
  tags: [
    'embroidery fill stitches',
    'embroidery filling stitches',
    'fill stitch embroidery',
    'tatami fill stitch',
    'embroidery stitches to fill large areas',
  ],
  publishedAt: '2026-11-07',
  readTime: 8,
  image: '/images/blog/embroidery-fill-stitches-guide.webp',
  imagePrompt:
    'Macro close-up of machine embroidery tatami fill stitches covering a large shape with a subtle brick pattern, next to a satin border, 16:9.',
  imageAlt: 'Macro view of machine embroidery fill stitches covering a large shape',
  relatedService: { label: 'Custom Embroidery Digitizing', href: '/services' },
  faqs: [
    {
      question: 'What is a fill stitch in embroidery?',
      answer:
        'A fill stitch covers a large area with rows of shorter stitches instead of one long stitch across the whole shape. In machine embroidery it is often called a tatami or step fill. In hand embroidery, common filling stitches include long-and-short, satin, seed and brick stitch.',
    },
    {
      question: 'What is the best stitch to fill large areas in hand embroidery?',
      answer:
        'Long-and-short stitch is the best for smooth, shaded fills. Seed stitch and French knots give texture, and brick stitch gives an even, flat fill. Satin stitch is best only for small areas.',
    },
    {
      question: 'What density should a machine fill stitch use?',
      answer:
        'Many digitizers start around 0.4 mm row spacing for 40 weight thread on stable fabric and adjust from there. Lighter, stretchier or fluffier fabrics and thicker thread may need different spacing. Test sew-outs decide the final value.',
    },
    {
      question: 'Why does my fill stitch pucker?',
      answer:
        'Usually because density is too high, underlay is missing, the stabilizer is too light or the fill angle runs along the stretch of the fabric. Lower density slightly, add underlay and use a firmer cutaway.',
    },
    {
      question: 'Fill stitch vs satin stitch: when should I use each?',
      answer:
        'Use satin stitch for narrow shapes, borders and lettering, roughly 1 to 7 mm wide. Use fill stitch for wider areas so stitches stay short and secure. See our [satin stitch embroidery guide](/blog/satin-stitch-embroidery-guide).',
    },
  ],
  content: [
    {
      type: 'p',
      text: '**Embroidery fill stitches** cover large areas with rows of short stitches so the surface stays smooth and secure. In hand embroidery the best filling stitches are long-and-short (for shading), brick stitch (for flat color) and seed stitch or French knots (for texture). In machine embroidery, a tatami fill lays rows of stitches at a set angle and density over underlay, which is how most logos cover large shapes.',
    },
    {
      type: 'p',
      text: 'This guide covers both hand filling stitches and machine fills, including the density and angle settings our [digitizing team](/services) uses.',
    },
    { type: 'h2', text: 'Best Hand Embroidery Filling Stitches' },
    {
      type: 'ul',
      items: [
        '**Long-and-short stitch:** staggered stitches of different lengths that blend colors; ideal for petals, animals and shading.',
        '**Satin stitch:** smooth and shiny but only for small shapes; see the [satin stitch guide](/blog/satin-stitch-embroidery-guide).',
        '**Brick stitch:** rows of equal stitches offset like bricks for a flat, even fill.',
        '**Seed stitch:** tiny scattered stitches for a light, speckled texture.',
        '**French knots:** clustered knots for a raised, bumpy texture.',
        '**Chain stitch rows:** lines of [chain stitch](/blog/chain-stitch-embroidery-guide) packed together for a woven look.',
      ],
    },
    {
      type: 'tip',
      text: 'For hand fills, outline the shape with split stitch first. The outline gives every fill stitch a clean edge to finish against.',
    },
    { type: 'h2', text: 'How Machine Fill Stitches Work' },
    {
      type: 'p',
      text: 'A machine fill (tatami or step fill) stitches back and forth across a shape in rows, with each stitch limited to a set length so nothing is long enough to snag. The needle points in each row are offset to avoid visible lines. The digitizer controls four main settings:',
    },
    {
      type: 'ul',
      items: [
        '**Density (row spacing):** how close the rows are; a common starting point is around 0.4 mm for 40 wt thread.',
        '**Stitch length:** typically around 3 to 4 mm in fills.',
        '**Angle:** the direction of the rows, chosen to suit the shape and fabric stretch.',
        '**Underlay:** a lighter fill or grid underneath that stabilizes fabric; see [embroidery underlay types](/blog/embroidery-underlay-types-explained).',
      ],
    },
    { type: 'h2', text: 'Types of Machine Fill' },
    {
      type: 'ul',
      items: [
        '**Tatami fill:** the standard flat fill for logos.',
        '**Patterned fills:** fills with built-in textures such as waves or diamonds.',
        '**Gradient fills:** density changes across the shape to fade color.',
        '**Contour fills:** rows follow the shape\'s outline for a flowing look.',
        '**Open or light fills:** wider spacing to reduce stitches on delicate fabrics or [leather](/blog/embroidery-on-leather-guide).',
      ],
    },
    { type: 'h2', text: 'Choosing Fill Angles' },
    {
      type: 'ul',
      items: [
        'Avoid running fill rows along the main stretch of knit fabric; it causes distortion.',
        'Change angles between neighboring shapes so they read as separate areas.',
        'Use 45 degree angles as a safe default on many shapes.',
        'Follow the natural direction of the subject, such as fur or petals, for realistic designs; see [convert a photo to embroidery](/blog/convert-photo-to-embroidery-guide).',
      ],
    },
    { type: 'h2', text: 'Common Fill Stitch Problems' },
    {
      type: 'ul',
      items: [
        '**Puckering:** lower density, add underlay, use firmer stabilizer. See [how to fix puckering](/blog/fix-embroidery-fabric-puckering-and-thread-breaks).',
        '**Gaps between fill and outline:** add pull compensation or overlap.',
        '**Stiff, bulletproof designs:** density too high or layers stacked.',
        '**Fabric showing through:** density too open for the thread; see the [thread weight guide](/blog/embroidery-thread-weight-guide).',
      ],
    },
    { type: 'h2', text: 'Fill Stitch vs Applique for Big Areas' },
    {
      type: 'p',
      text: 'Very large filled areas, like jacket backs, add tens of thousands of stitches. Applique or tackle twill covers the same space with fabric and a border, which is faster, lighter and cheaper. See [applique digitizing](/services/applique-digitizing), [what is tackle twill](/blog/what-is-tackle-twill) and the [stitch count calculator](/blog/how-to-estimate-embroidery-stitch-count).',
    },
    {
      type: 'p',
      text: 'Need clean fills on a logo? [Send your artwork](/contact) or check [digitizing prices](/pricing). For caps, see [cap logo digitizing](/services/cap-logo-digitizing).',
    },
  ],
};

export default post;
