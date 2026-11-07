import type { BlogPost } from '../types';

export const post: BlogPost = {
  slug: 'embroidery-machine-thread-tension-guide',
  title: 'Embroidery Machine Thread Tension: How to Check and Adjust It',
  metaTitle: 'Embroidery Machine Thread Tension Guide',
  description:
    'Fix embroidery machine thread tension with the one-third bobbin rule, adjust top and bobbin tension and solve loops, bobbin showing and breaks.',
  excerpt:
    'Balanced tension makes embroidery smooth on top and neat underneath. Here is how to test it with the one-third rule and fix the most common tension problems.',
  category: 'Guides',
  tags: [
    'embroidery machine thread tension',
    'embroidery thread tension',
    'embroidery thread tension gauge',
    'bobbin thread showing on top embroidery',
    'embroidery tension guide',
  ],
  publishedAt: '2026-11-07',
  readTime: 7,
  image: '/images/blog/embroidery-machine-thread-tension-guide.webp',
  imagePrompt:
    'Close-up of tension knobs on a multi-needle embroidery machine head with threads in the guides and a test swatch showing bobbin thread in the center third, 16:9.',
  imageAlt: 'Thread tension knobs on a multi-needle embroidery machine with a tension test swatch',
  relatedService: { label: 'Custom Embroidery Digitizing', href: '/services' },
  faqs: [
    {
      question: 'What is the correct thread tension for embroidery?',
      answer:
        'A common check is the one-third rule: on the back of a satin column, the white bobbin thread should cover roughly the center third, with the top thread showing on each side. That means the top and bobbin tensions are balanced.',
    },
    {
      question: 'Why is my bobbin thread showing on top of the embroidery?',
      answer:
        'Usually the top tension is too tight or the bobbin tension is too loose. It can also come from threading errors, lint in the bobbin case or a damaged needle. Rethread first, clean the bobbin area, then adjust the top tension slightly looser.',
    },
    {
      question: 'Why are there loops on top of my embroidery?',
      answer:
        'Loops on top usually mean the top tension is too loose or the thread has slipped out of a tension disc. Rethread with the presser foot or tension engaged correctly, check the thread path and tighten the top tension a little.',
    },
    {
      question: 'Should I adjust the bobbin or the top tension first?',
      answer:
        'Set the bobbin tension first, because it is the base for every needle, then balance each needle\'s top tension against it. On commercial machines a bobbin tension gauge makes this consistent.',
    },
    {
      question: 'Do I need an embroidery thread tension gauge?',
      answer:
        'It is not required, but a tension gauge removes guesswork, especially on multi-needle machines with many needles and when switching thread brands. Many shops measure bobbin tension with a gauge and fine-tune top tension with a test sew-out.',
    },
  ],
  content: [
    {
      type: 'p',
      text: '**Embroidery machine thread tension** is balanced when the top thread and bobbin thread meet just under the fabric. The easiest test is the one-third rule: stitch a satin column, turn it over and look for white bobbin thread covering about the middle third, with the top color on each side. Set the bobbin tension first, then adjust each top tension until the back looks like that.',
    },
    {
      type: 'p',
      text: 'This guide explains how to test, adjust and troubleshoot tension on single and multi-needle machines. Tension problems are often confused with file problems; a clean file from our [digitizing team](/services) rules the design out.',
    },
    { type: 'h2', text: 'How Embroidery Tension Works' },
    {
      type: 'p',
      text: 'Each stitch is a tug-of-war between the top thread and the bobbin thread. When the top tension is tighter, the bobbin gets pulled up and shows on the surface. When the top tension is looser, the top thread loops and the bobbin pulls it to the back. Balanced tension keeps the lock point hidden and the stitches smooth.',
    },
    { type: 'h2', text: 'The One-Third Bobbin Test' },
    {
      type: 'ol',
      items: [
        'Hoop a scrap of medium woven fabric with a medium cutaway or tearaway stabilizer.',
        'Stitch a test design with a satin column about 5 mm wide for each needle in use (a simple capital "I" or "H" works well).',
        'Turn the swatch over and look at each column.',
        '**Balanced:** bobbin covers about the center third.',
        '**Top too tight:** bobbin covers much more than a third, or shows on top.',
        '**Top too loose:** little or no bobbin showing on the back, loops on top.',
      ],
    },
    {
      type: 'tip',
      text: 'Label your test design by needle number. On a multi-needle machine one needle can be out of balance while the rest are fine.',
    },
    { type: 'h2', text: 'How to Adjust Top Thread Tension' },
    {
      type: 'ul',
      items: [
        'Turn the tension knob clockwise to tighten and counterclockwise to loosen, in small steps.',
        'Rethread before adjusting; a missed guide changes tension more than any knob.',
        'Pull the thread through the needle by hand; it should feel smooth with light, even resistance.',
        'Re-run the test and compare.',
      ],
    },
    { type: 'h2', text: 'How to Adjust Bobbin Tension' },
    {
      type: 'ul',
      items: [
        'Clean lint from the bobbin case and hook area first.',
        'Use a bobbin tension gauge if you have one, or the drop test your manual recommends.',
        'Turn the small screw on the bobbin case in tiny increments.',
        'Use the same bobbin type and brand consistently; switching changes tension.',
      ],
    },
    { type: 'h2', text: 'Common Tension Problems and Fixes' },
    {
      type: 'ul',
      items: [
        '**Bobbin thread showing on top:** loosen top tension, check bobbin tension, rethread, clean the bobbin case.',
        '**Loops on top:** tighten top tension, make sure thread sits in the tension discs.',
        '**Birdnesting under the fabric:** usually a threading error or the presser foot or take-up path missed; rethread completely.',
        '**Thread breaks:** top tension too tight, old needle or poor thread. See the [needle size guide](/blog/embroidery-machine-needle-size-guide) and [thread weight guide](/blog/embroidery-thread-weight-guide).',
        '**Puckering:** tension too tight or stabilizer too light. See [how to fix puckering and thread breaks](/blog/fix-embroidery-fabric-puckering-and-thread-breaks).',
        '**Metallic thread problems:** use looser top tension and slower speed. See the [metallic embroidery thread guide](/blog/metallic-embroidery-thread-guide).',
      ],
    },
    { type: 'h2', text: 'When It Is Not Tension: Check the Design' },
    {
      type: 'p',
      text: 'If tension looks balanced on a test but one design still loops, breaks or puckers, the file may be the cause: density too high, stacked layers, columns too wide or missing underlay. Read [common digitizing mistakes](/blog/common-embroidery-digitizing-mistakes), [embroidery underlay types](/blog/embroidery-underlay-types-explained) and the [satin stitch guide](/blog/satin-stitch-embroidery-guide).',
    },
    {
      type: 'p',
      text: 'Running a new [multi-needle machine](/blog/multi-needle-embroidery-machine-guide)? Start every session with a tension test. If your files cause trouble even with balanced tension, [send them to us](/contact) for a check or new digitizing; see [digitizing prices](/pricing).',
    },
  ],
};

export default post;
