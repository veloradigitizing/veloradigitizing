import type { BlogPost } from '../types';

export const post: BlogPost = {
  slug: 'tote-bag-embroidery-guide',
  title: 'Tote Bag Embroidery: Design Size, Placement and How to Hoop a Tote',
  metaTitle: 'Tote Bag Embroidery: Size, Placement & Hooping',
  description:
    'Embroidery on tote bags: design size by bag size, placement below the handles, how to hoop a tote without stitching it shut, and stabilizer and needle settings.',
  excerpt:
    'Embroidered tote bags are easy to sell and fun to make. Here is how to choose the bag, size the design, hoop a single layer and stitch canvas cleanly.',
  category: 'Guides',
  tags: [
    'embroidery on tote bags',
    'how to hoop a tote bag for embroidery',
    'tote bag embroidery size',
    'embroidery tote bag',
    'tote bag embroidery',
    'custom embroidered canvas bags',
  ],
  publishedAt: '2026-11-10',
  updatedAt: '2026-11-14',
  readTime: 8,
  image: '/images/blog/tote-bag-embroidery-guide.webp',
  imagePrompt:
    'Natural canvas tote bags with colorful embroidered floral and lemon designs on a wooden table, one tote hooped under an embroidery machine needle, 16:9.',
  imageAlt: 'Canvas tote bags with embroidered designs and one tote hooped on an embroidery machine',
  relatedService: { label: 'Custom Embroidery Digitizing', href: '/services' },
  faqs: [
    {
      question: 'How do you hoop a tote bag for machine embroidery?',
      answer:
        'Hoop only the front panel. Turn the bag inside out or slide the hoop in through the top opening, place stabilizer behind the front panel, and keep the back panel and handles out of the hoop. On a multi-needle machine, slide the bag onto the free arm and clip the extra fabric back. Run a trace before stitching to make sure only one layer is in the stitch area.',
    },
    {
      question: 'What size should embroidery be on a tote bag?',
      answer:
        'On a standard 15 x 16 inch tote, a centered design of about 6 to 8 inches wide works well. Small totes suit 3 to 5 inch designs, and a corner logo looks good at 2.5 to 3.5 inches. Check your hoop sewing field before ordering the design.',
    },
    {
      question: 'Where do you place embroidery on a tote bag?',
      answer:
        'Center the design horizontally and start the top of it about 3 to 4 inches below the top edge, below the handle stitching. For a tall design, place its visual center slightly above the middle of the bag so it is not hidden when the bag is carried.',
    },
    {
      question: 'What kind of tote bag is best for embroidery?',
      answer:
        'A medium to heavy cotton canvas tote, roughly 10 to 12 oz, is the easiest to embroider. It holds stitches well and does not pucker. Very thin totes need cutaway stabilizer and lighter designs.',
    },
    {
      question: 'What stabilizer do I use on canvas totes?',
      answer:
        'Firm canvas can use a medium tearaway, which leaves a clean inside. Thinner totes and dense designs need a cutaway. Our [stabilizer guide](/blog/embroidery-stabilizer-guide-cutaway-vs-tearaway) compares both.',
    },
    {
      question: 'Can I embroider a tote bag that is already lined?',
      answer:
        'It is harder, because you would stitch through the lining. Open a seam in the lining to reach the outer layer, or use an embroidered patch sewn on afterward. See [iron-on vs sew-on patches](/blog/iron-on-vs-sew-on-patches).',
    },
  ],
  content: [
    {
      type: 'p',
      text: '**Embroidery on tote bags** works best on medium to heavy cotton canvas (about 10 to 12 oz), with a design around 6 to 8 inches wide on a standard tote, placed 3 to 4 inches below the top edge. The key is to hoop only the front layer so you do not stitch the bag shut. Use an 80/12 or 90/14 sharp needle, tearaway on firm canvas or cutaway on thin totes, and a design with moderate density.',
    },
    {
      type: 'p',
      text: 'This guide covers choosing totes, sizing, placement, hooping and stitching. Our [digitizing team](/services) prepares tote designs sized for your hoop.',
    },
    { type: 'h2', text: 'Choosing the Right Tote Bag' },
    {
      type: 'table',
      caption: 'Tote bag fabrics and how they embroider',
      headers: ['Tote fabric', 'Weight', 'Stabilizer', 'Design advice'],
      rows: [
        ['Heavy cotton canvas', '10 to 12 oz', 'Medium tearaway', 'Holds fills, satins and small text well'],
        ['Light cotton (promo totes)', '4 to 6 oz', 'Cutaway', 'Lighter density, avoid big solid fills'],
        ['Jute and burlap', 'Open weave', 'Cutaway plus topping', 'Bold shapes, wide satins, no fine text'],
        ['Polyester / non-woven', 'Thin and slippery', 'Cutaway with spray adhesive', 'Low density; needle holes show'],
        ['Lined or zippered', 'Two layers', 'Depends on outer fabric', 'Open the lining or use a sew-on patch'],
      ],
    },
    { type: 'h2', text: 'Tote Bag Embroidery Size Guide' },
    {
      type: 'table',
      caption: 'Typical design sizes by tote bag size',
      headers: ['Tote size', 'Centered design width', 'Corner or small logo', 'Common hoop'],
      rows: [
        ['Small / mini (about 10 x 12 in)', '3 to 5 in (75 to 125 mm)', '2 to 3 in', '5 x 7 in (130 x 180 mm)'],
        ['Standard (about 15 x 16 in)', '6 to 8 in (150 to 200 mm)', '2.5 to 3.5 in', '8 x 8 in or 6 x 10 in'],
        ['Large / beach (about 18 x 20 in)', '8 to 11 in (200 to 280 mm)', '3 to 4 in', '8 x 12 in or larger'],
      ],
    },
    {
      type: 'p',
      text: 'Measure the flat front panel between the side seams and leave at least 1.5 inches of space on each side so the hoop and presser foot clear the seams. Check the sewing field of your machine in our [embroidery hoop size chart](/blog/embroidery-hoop-sizes-chart) before you order the design, and use the [stitch count calculator](/blog/how-to-estimate-embroidery-stitch-count) to estimate run time for larger designs.',
    },
    { type: 'h2', text: 'Where to Place Embroidery on a Tote Bag' },
    {
      type: 'ul',
      items: [
        '**Center front:** centered horizontally, top of the design about 3 to 4 inches below the top edge.',
        '**Below the handles:** keep the whole hoop below the handle stitching so the straps do not catch.',
        '**Lower corner:** a small logo about 2 to 3 inches up from the bottom and in from the side seam.',
        '**Names and monograms:** centered, often slightly above the middle so they stay visible when the bag is carried. See [best fonts for embroidery](/blog/best-fonts-for-embroidery).',
      ],
    },
    { type: 'h2', text: 'How to Hoop a Tote Bag for Embroidery' },
    {
      type: 'ol',
      items: [
        'Print the design at full size and pin it to the bag to check size and position.',
        'Mark the center point and a vertical line through it with chalk or a water-soluble pen.',
        'Turn the bag inside out, or slide the hoop inside the bag from the top opening.',
        'Hoop the front layer with the stabilizer behind it; keep the back panel and handles out of the way.',
        'On a multi-needle machine, slide the bag onto the free arm, use the straps as straight guides, and clip the extra fabric back.',
        'Check underneath that only one layer is in the hoop, then run a trace of the design area.',
      ],
    },
    {
      type: 'tip',
      text: 'Thick canvas can be hard to clamp in a standard hoop. Magnetic hoops hold heavy totes without hoop burn, or you can hoop sticky-back stabilizer and float the bag on top, pinning it outside the stitch area.',
    },
    { type: 'h2', text: 'Needles, Thread and Machine Settings' },
    {
      type: 'table',
      caption: 'Starting settings for tote bag embroidery',
      headers: ['Setting', 'Canvas tote', 'Thin promo tote'],
      rows: [
        ['Needle', '80/12 or 90/14 sharp', '75/11 sharp'],
        ['Thread', '40 wt polyester', '40 wt polyester'],
        ['Stabilizer', 'Medium tearaway', 'Cutaway, 2.5 oz'],
        ['Speed', 'Moderate, about 600 to 750 spm', 'Normal'],
        ['Density', 'Standard', 'About 10 to 15 percent lighter'],
      ],
    },
    {
      type: 'p',
      text: 'See the [needle size guide](/blog/embroidery-machine-needle-size-guide) and the [thread weight guide](/blog/embroidery-thread-weight-guide) for more detail. If the canvas puckers or thread breaks, our [puckering and thread break fixes](/blog/fix-embroidery-fabric-puckering-and-thread-breaks) cover the usual causes.',
    },
    { type: 'h2', text: 'Design Tips for Canvas Totes' },
    {
      type: 'ul',
      items: [
        'Canvas holds detail well, so [fill stitches](/blog/embroidery-fill-stitches-guide) and [satin borders](/blog/satin-stitch-embroidery-guide) both look crisp.',
        'Large designs can use applique to cut stitch count; see [applique digitizing](/services/applique-digitizing).',
        'Metallic accents work well on canvas; see the [metallic thread guide](/blog/metallic-embroidery-thread-guide).',
        'Jute and burlap need wide, bold shapes; thin lines sink into the weave.',
      ],
    },
    { type: 'h2', text: 'Common Tote Bag Embroidery Mistakes' },
    {
      type: 'ul',
      items: [
        '**Stitching through both layers:** always check underneath before pressing start; it is the most common way to ruin a tote.',
        '**Design too close to the handles:** the presser foot hits the strap stitching and the design shifts. Keep the hoop fully below the handles.',
        '**Hoop burn on canvas:** over-tightening leaves a ring that does not wash out of heavy canvas. Use a magnetic hoop or float the bag.',
        '**Too much density on thin totes:** promo totes pucker and tunnel under heavy fills. Ask for a lighter file or switch to cutaway.',
        '**Crooked placement:** canvas weave is easy to misalign. Use the straps or the side seams as vertical guides and mark a center line.',
      ],
    },
    { type: 'h2', text: 'Can You Embroider a Tote by Hand?' },
    {
      type: 'p',
      text: 'Yes. Canvas is a good surface for hand embroidery: use a 6 or 8 inch hoop on the front panel only, 3 to 6 strands of cotton floss and a sharp crewel needle. Back stitch, satin stitch and chain stitch all hold up well on a bag that gets handled every day. See [chain stitch embroidery](/blog/chain-stitch-embroidery-guide) for an outline stitch that looks good on canvas.',
    },
    { type: 'h2', text: 'Selling Embroidered Tote Bags' },
    {
      type: 'p',
      text: 'Totes are a popular product for small businesses, markets and corporate gifts. Compare costs in [how much embroidery costs](/blog/how-much-does-embroidery-cost), and for large color graphics see [embroidery vs screen printing](/blog/embroidery-vs-screen-printing). For bulk orders, a patch can be faster than direct embroidery; see [how to make embroidered patches](/blog/how-to-make-embroidered-patches).',
    },
    {
      type: 'p',
      text: 'Need a tote design digitized? [Send your artwork](/contact) with the finished size. A design up to 5,000 stitches is $6.99 and up to 15,000 stitches is $12.99; see [digitizing prices](/pricing).',
    },
  ],
};

export default post;
