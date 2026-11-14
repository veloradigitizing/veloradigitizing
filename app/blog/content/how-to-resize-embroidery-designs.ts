import type { BlogPost } from '../types';

export const post: BlogPost = {
  "slug": "how-to-resize-embroidery-designs",
  "title": "How to Resize Embroidery Designs Without Losing Quality",
  "metaTitle": "How to Resize Embroidery Designs Without Losing Quality",
  "description": "How much can you resize an embroidery design? Keep stitch files within 10-20%, resize object files with recalculation, and re-digitize for big size jumps.",
  "excerpt": "The 10-20% rule, why DST and PES files distort when scaled, how object files recalculate stitches, and a resize-or-re-digitize table for common size changes like left chest to cap or jacket back.",
  "category": "Guides",
  "tags": [
    "how to resize embroidery designs",
    "resize embroidery design without losing quality",
    "how much can you resize an embroidery design",
    "resizing embroidery files",
    "scale embroidery design"
  ],
  "publishedAt": "2026-11-14",
  "readTime": 8,
  "image": "/images/blog/how-to-estimate-embroidery-stitch-count.webp",
  "imagePrompt": "Two embroidered versions of the same round crest logo side by side on white twill, one small (about 2 inches) and one large (about 5 inches), a steel ruler lying under both, the large version showing clean even fill, laptop with embroidery software scaling handles blurred in the background, soft daylight, 16:9, no text.",
  "imageAlt": "The same embroidered crest stitched at a small and a large size next to a ruler",
  "relatedService": {
    "label": "Custom Embroidery Digitizing",
    "href": "/services"
  },
  "faqs": [
    {
      "question": "How much can you resize an embroidery design?",
      "answer": "A finished stitch file such as DST, PES or JEF is safe to scale by about 10% up or down, and up to about 20% if the design is simple and you test-stitch it first. An editable object file (EMB, the native file from the digitizing software) can usually go 50-150% because the software rebuilds the stitches at the new size. Beyond that, the design should be re-digitized for the new size."
    },
    {
      "question": "Why does my embroidery design look bad after resizing?",
      "answer": "Most machine formats store stitches as fixed needle positions. When you scale them, the stitch count stays the same, so a smaller design becomes too dense (stiff, bulletproof patches, broken needles) and a larger design becomes too sparse (fabric showing through, satin columns turning into long loose stitches that snag). Underlay and pull compensation also stay at the old size, so outlines stop lining up."
    },
    {
      "question": "Can you make an embroidery design smaller?",
      "answer": "Yes, but shrinking is riskier than enlarging. Small text drops below the minimum readable height of about 0.25 inch (6 mm) for capitals, satin columns fall under 1 mm wide, and details merge. Shrink stitch files by no more than 10% and check the smallest text first. For a big reduction, such as a jacket back design turned into a left chest logo, re-digitize and simplify the art."
    },
    {
      "question": "Do I need a new digitizing file for a cap and a shirt?",
      "answer": "Usually yes. A left chest logo at 3.5 inches wide and a cap front at about 2.25 inches high are different sizes, and caps also need a different sewing order (center-out, bottom-up) and stronger underlay to handle the curve and seam. Most digitizers build a separate cap version of the logo rather than scaling the shirt file."
    },
    {
      "question": "Which software can resize embroidery designs properly?",
      "answer": "Software that recalculates stitches when you scale, such as Wilcom EmbroideryStudio, Hatch, Brother PE-Design and Embrilliance, gives much better results than scaling on the machine screen. It still works best on an object file. Scaling an imported DST or PES in these programs is better than the machine but cannot rebuild underlay or pull compensation the way the original object file can."
    },
    {
      "question": "How much does it cost to resize a design professionally?",
      "answer": "If the change needs a new file, it is priced like any other design by stitch count. At Velora a design up to 5,000 stitches is $6.99 on the Basic plan and up to 15,000 stitches is $12.99 on the Standard plan, which covers most left chest, cap and sleeve versions of a logo."
    }
  ],
  "content": [
    {
      "type": "p",
      "text": "**Short answer:** you can resize a finished embroidery file (DST, PES, JEF, EXP) by about **10%** safely, and up to about **20%** on simple designs if you test-stitch first. An editable object file can go much further, roughly **50-150%**, because the software recalculates the stitches. Anything beyond that, such as turning a left chest logo into a jacket back, needs the design re-digitized at the new size."
    },
    {
      "type": "p",
      "text": "The reason is how embroidery files store information. This guide explains the difference between stitch files and object files, shows what breaks when you scale, gives a resize-or-re-digitize table for common size changes, and walks through a safe resizing workflow you can follow on any machine or software."
    },
    {
      "type": "h2",
      "text": "Why embroidery designs do not scale like images"
    },
    {
      "type": "p",
      "text": "A JPG or PNG logo is a picture. An embroidery design is a list of needle movements: go here, go there, trim, change color. A DST file, for example, records each stitch as a short jump in X and Y, with no idea that a group of stitches is supposed to be a letter or a satin border. When you drag the corner handle on the machine screen, the machine stretches those coordinates but keeps exactly the same number of stitches."
    },
    {
      "type": "ul",
      "items": [
        "**Scale down 30%:** the same stitches are packed into a smaller area, so density rises sharply. Fills become stiff and thread breaks increase. On thin fabric the design can cut the material.",
        "**Scale up 30%:** the stitches spread apart, so fabric shows through fills and satin stitches get longer. Satin columns over about 7-8 mm wide start to snag and loop.",
        "**Underlay and pull compensation stay fixed:** these settings were calculated for the original size, so outlines drift away from fills and small gaps appear between colors."
      ]
    },
    {
      "type": "p",
      "text": "If you want to understand what a DST file holds and why it has no colors or objects, see [what a DST embroidery file is and how to open it](/blog/how-to-open-dst-embroidery-file)."
    },
    {
      "type": "h2",
      "text": "Stitch files vs object files"
    },
    {
      "type": "table",
      "caption": "Stitch file vs object file when resizing",
      "headers": ["", "Stitch file (DST, PES, JEF, EXP, VP3)", "Object file (EMB, native software file)"],
      "rows": [
        ["What it stores", "Individual needle positions", "Shapes plus stitch type, density, underlay and compensation"],
        ["When you resize", "Stitches stretch or squeeze; count stays the same", "Software rebuilds the stitches for the new size"],
        ["Safe resize range", "About ±10% (±20% for simple designs with a test)", "About 50-150% depending on detail"],
        ["Who has it", "You, the machine operator", "The digitizer who created the design"],
        ["Best use", "Sewing as delivered", "Editing, resizing, changing text"]
      ]
    },
    {
      "type": "p",
      "text": "The practical point: if you know you will need the design at more than one size, ask your digitizer for each size up front, or ask whether they keep the object file so they can output a new size later. A properly rebuilt file costs far less than a ruined run of shirts."
    },
    {
      "type": "h2",
      "text": "Resize or re-digitize? Common size changes"
    },
    {
      "type": "table",
      "caption": "Resize or re-digitize for common embroidery size changes",
      "headers": ["Change", "Typical sizes", "Verdict"],
      "rows": [
        ["Left chest, small adjustment", "3.5 in to 3.25 in or 3.75 in wide", "Resize the stitch file (within 10%)"],
        ["Left chest to cap front", "3.5 in wide to about 2.25 in high", "Re-digitize: new size, cap sewing order, stronger underlay"],
        ["Left chest to full front", "3.5 in to 10-11 in wide", "Re-digitize: about 3x larger, satins become fills"],
        ["Left chest to jacket back", "3.5 in to 10-12 in wide", "Re-digitize; see the jacket back size guide"],
        ["Left chest to sleeve", "3.5 in to 2.5-3 in wide", "Usually re-digitize; small text often fails"],
        ["Cap front to cap side or back", "2.25 in high to about 1 in high", "Re-digitize and simplify"],
        ["Object file, 80% to 120%", "Any", "Resize in the digitizing software, then test"]
      ]
    },
    {
      "type": "p",
      "text": "For sizing details by garment, the [hat logo size and cap digitizing guide](/blog/cap-hat-logo-embroidery-digitizing-guide) covers caps and the [jacket back embroidery size guide](/blog/jacket-back-embroidery-digitizing-guide) covers large back designs. The [embroidery logo size chart](/blog/embroidery-logo-size-chart) puts every placement in one table."
    },
    {
      "type": "h2",
      "text": "What breaks first when you shrink a design"
    },
    {
      "type": "ol",
      "items": [
        "**Small text.** Capital letters under about 0.25 inch (6 mm) high close up, and lowercase letters with counters (a, e, o) fill in. See the [small lettering guide](/blog/how-to-digitize-small-text-micro-lettering-embroidery) for the limits.",
        "**Thin satin columns.** Below about 1 mm wide, a satin column cannot form; it needs to become a run or bean stitch.",
        "**Tiny details.** Dots, thin outlines and gaps under about 1 mm disappear or merge with the shapes next to them.",
        "**Density.** The fill becomes stiff and heavy. You may also see needle breaks and thread shredding."
      ]
    },
    {
      "type": "h2",
      "text": "What breaks first when you enlarge a design"
    },
    {
      "type": "ol",
      "items": [
        "**Satin columns get too wide.** Satins wider than about 7-8 mm become long, loose stitches that snag in the wash. A digitizer converts them to fill when the design grows.",
        "**Fill coverage thins out.** Fabric shows through, especially on dark garments with light thread.",
        "**Underlay no longer supports the top stitches.** Puckering appears around large filled areas.",
        "**Stitch count does not match the job.** A larger design should have more stitches. If the count is unchanged after scaling, the file has only been stretched. The [stitch count calculator](/blog/how-to-estimate-embroidery-stitch-count) shows roughly what the new size should carry."
      ]
    },
    {
      "type": "h2",
      "text": "How to resize an embroidery design safely: step by step"
    },
    {
      "type": "ol",
      "items": [
        "**Check what file you have.** If it is DST, PES, JEF or EXP, you are working with stitches, so stay within 10% unless you are prepared to test more.",
        "**Resize in software, not on the machine screen, when you can.** Programs such as Hatch, Embrilliance, PE-Design and Wilcom recalculate density on import. Look for a setting that keeps stitch count fixed or recalculates it, and choose recalculate.",
        "**Lock the aspect ratio.** Stretching only width or height distorts lettering and circles.",
        "**Check the smallest element first.** Measure the smallest letter and the thinnest column at the new size against the 6 mm and 1 mm limits above.",
        "**Look at the new stitch count.** A design reduced 20% should have noticeably fewer stitches if the software recalculated it.",
        "**Test-stitch on the real fabric.** Use the same stabilizer and garment type. A test on stiff twill does not tell you how a performance polo will behave.",
        "**If the test fails, stop resizing and ask for a new file.** Further edits to a stitch file rarely fix density and compensation problems."
      ]
    },
    {
      "type": "tip",
      "text": "When you order digitizing, give the final sewn size in inches and the garment for each placement. A digitizer can deliver a left chest, cap and sleeve version of the same logo, each built for its own size, instead of one file that you have to stretch."
    },
    {
      "type": "h2",
      "text": "When to send it to a digitizer"
    },
    {
      "type": "p",
      "text": "Send the design back for re-digitizing when the size change is more than about 20%, when the design moves from a flat garment to a cap, when small text has to stay readable, or when you only have a stitch file and the test sew-out shows gaps or stiffness. At Velora a new version of a logo is priced by stitch count like any other file: the Basic plan is $6.99 for up to 5,000 stitches and the Standard plan is $12.99 for up to 15,000 stitches. Send the logo and the size you need through the [contact page](/contact) or see all [embroidery digitizing services](/services)."
    }
  ]
};

export default post;
