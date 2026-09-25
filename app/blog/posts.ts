/**
 * Blog content lives here as plain data so new articles can be added without
 * touching the page components. Each post renders at /blog/[slug].
 *
 * `image` is optional. Until a real image is added, the page shows a dashed
 * placeholder box containing `imagePrompt` so the image can be generated later.
 */

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "tip"; text: string };

export type BlogPost = {
  slug: string;
  /** Page H1 */
  title: string;
  /** <title> tag, keep under ~60 characters */
  metaTitle: string;
  /** Meta description, keep under ~155 characters */
  description: string;
  /** Short teaser used on cards */
  excerpt: string;
  category: string;
  tags: string[];
  /** ISO date, e.g. 2026-09-25 */
  publishedAt: string;
  updatedAt?: string;
  /** Minutes */
  readTime: number;
  /** Prompt to generate the cover image with an AI image tool */
  imagePrompt: string;
  imageAlt: string;
  /** Path under /public once the cover image exists, e.g. /images/blog/xyz.webp */
  image?: string;
  relatedService: { label: string; href: string };
  faqs: { question: string; answer: string }[];
  content: BlogBlock[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "what-is-embroidery-digitizing",
    title: "What Is Embroidery Digitizing and How Does It Work?",
    metaTitle: "What Is Embroidery Digitizing? A Beginner's Guide",
    description:
      "Learn what embroidery digitizing is, how a logo becomes a stitch file, which stitch types digitizers use, and why manual digitizing beats auto-digitizing.",
    excerpt:
      "Embroidery machines cannot read a JPG or PNG. Digitizing converts your artwork into a stitch file that tells the machine exactly where and how to sew. Here is how the process works from start to finish.",
    category: "Basics",
    tags: ["embroidery digitizing", "beginner guide", "stitch files"],
    publishedAt: "2026-09-25",
    readTime: 7,
    image: "/images/blog/what-is-embroidery-digitizing.jpg",
    imagePrompt:
      "Close-up photo of a professional embroidery digitizer's desk: a large monitor showing embroidery digitizing software with a colorful logo mapped into stitch paths, a multi-needle embroidery machine slightly out of focus in the background stitching the same logo on a navy polo shirt, warm studio lighting, shallow depth of field, photorealistic, 16:9.",
    imageAlt:
      "Embroidery digitizing software on a monitor with a multi-needle embroidery machine stitching the same logo in the background",
    relatedService: { label: "Embroidery Digitizing Services", href: "/services" },
    faqs: [
      {
        question: "Is embroidery digitizing the same as vectorizing?",
        answer:
          "No. Vectorizing converts an image into scalable paths for printing or cutting. Digitizing converts artwork into stitch instructions for an embroidery machine, including stitch type, direction, density and underlay. A clean vector file is a great starting point for digitizing, but it is not a stitch file.",
      },
      {
        question: "How much does embroidery digitizing cost?",
        answer:
          "Most logos cost between $10 and $40 depending on size, stitch count and complexity. Large jacket backs and highly detailed artwork cost more. At Velora Digitizing you get a free quote before any work starts and free revisions after delivery.",
      },
      {
        question: "Can I digitize a design myself with free software?",
        answer:
          "You can, but auto-digitizing tools produce files with poor underlay, wrong stitch directions and heavy density that break needles and pucker fabric. A professional digitizer makes hundreds of manual decisions per design that software cannot make on its own.",
      },
    ],
    content: [
      {
        type: "p",
        text: "If you have ever sent a logo to an embroidery shop and been told it needs to be 'digitized first', this guide is for you. Embroidery digitizing is the step that turns flat artwork into a file an embroidery machine can actually sew. It is the single biggest factor in how your finished embroidery looks, and it is also the part most people know the least about.",
      },
      { type: "h2", text: "Embroidery Digitizing in Plain Words" },
      {
        type: "p",
        text: "An embroidery machine does not see colors or shapes. It only understands a list of needle positions and commands: move here, drop the needle, move there, change thread, trim, stop. Digitizing is the process of creating that list from your artwork. A digitizer opens your logo in specialised software and manually draws every stitch object on top of it, deciding what type of stitch to use, in which direction it should run, how dense it should be, and in what order the machine should sew everything.",
      },
      {
        type: "p",
        text: "The output is a stitch file such as DST, PES or JEF. That file is what the machine reads. The artwork itself never goes into the machine. This is why a digitized file for a 3 inch left chest logo cannot simply be scaled up to a 12 inch jacket back: the stitches were planned for one specific size and fabric.",
      },
      { type: "h2", text: "The Three Building Blocks of Every Design" },
      {
        type: "p",
        text: "Almost every embroidered design is built from three stitch types. Knowing them helps you understand why some logos embroider well and others do not.",
      },
      { type: "h3", text: "1. Satin stitch" },
      {
        type: "p",
        text: "Long zig-zag stitches that run edge to edge across a narrow shape. Satin gives the shiny, raised look you see on lettering, outlines and borders. It works best on columns between roughly 1 mm and 10 mm wide. Anything wider needs to be split or changed to fill, otherwise the long stitches snag and loosen.",
      },
      { type: "h3", text: "2. Fill stitch (tatami)" },
      {
        type: "p",
        text: "Rows of short, offset stitches that cover large areas like backgrounds, shields and solid shapes. The digitizer controls the stitch length, the angle of the rows and the density. Changing the fill angle in different parts of a design creates subtle texture and stops the fabric from pulling in one direction.",
      },
      { type: "h3", text: "3. Running stitch" },
      {
        type: "p",
        text: "A single line of stitches, used for fine details, small text outlines, and as underlay beneath other stitches. Triple run or bean stitch makes the line bolder without switching to satin.",
      },
      { type: "h2", text: "What a Professional Digitizer Actually Decides" },
      {
        type: "p",
        text: "Placing stitches on a shape is the easy part. The quality of a file comes from the decisions around those stitches. These are the ones that matter most:",
      },
      {
        type: "ul",
        items: [
          "Underlay: hidden stitches sewn first to stabilise the fabric and give the top stitches something to sit on. Wrong underlay is the number one reason logos look sunken on fleece or bumpy on caps.",
          "Pull compensation: fabric moves when the needle pulls thread through it, so shapes shrink slightly in the stitch direction. The digitizer widens objects by a fraction of a millimetre to counter this so circles stay round and letters stay the correct width.",
          "Density: how close the stitches sit together. Too dense and the fabric puckers, needles break and the design feels like cardboard. Too loose and the fabric shows through.",
          "Stitch direction: the angle of satin and fill stitches controls how light reflects off the thread. Good digitizers change angles between neighbouring objects so each element stands out.",
          "Sequencing: the order in which objects sew. Smart sequencing reduces trims and color changes, keeps registration tight, and can cut machine time by 20 to 30 percent on large designs.",
          "Fabric and backing: the same logo is digitized differently for a structured cap, a pique polo and a fleece hoodie. Stretch, thickness and nap all change the settings.",
        ],
      },
      { type: "h2", text: "Manual Digitizing vs Auto-Digitizing" },
      {
        type: "p",
        text: "Most embroidery software includes an auto-digitize button. It traces the shapes in your image and assigns a stitch type to each one. For very simple, blocky shapes it can produce something usable. For real logos it almost always fails, because software cannot judge fabric, size, sequencing or which details need to be simplified to sew cleanly.",
      },
      {
        type: "p",
        text: "A manually digitized file is planned by a person who knows how thread behaves. Small text is adjusted so it stays legible, thin lines are converted to the right stitch type, and the whole design is sequenced for minimal trims. The difference is obvious the moment both files are sewn out side by side. If you would like to see examples, our [embroidery digitizing portfolio](/portfolio) shows real stitch-outs across caps, jackets, patches and polos.",
      },
      { type: "h2", text: "The Digitizing Process Step by Step" },
      {
        type: "ol",
        items: [
          "You send the artwork. Any format works: PNG, JPG, PDF, AI, EPS or even a photo of a sketch. Higher resolution helps, but a good digitizer can work from almost anything.",
          "You confirm the size, placement and fabric. A 3.5 inch left chest logo on a polo and a 2.25 inch cap front logo are two different files.",
          "The digitizer maps every element manually, choosing stitch types, underlay, density, pull compensation and sequence.",
          "The file is test-sewn on the actual fabric type and adjusted until it runs clean. At Velora Digitizing every file is sewn out before delivery, not just previewed on screen.",
          "You receive the stitch file in your machine's format, plus a PDF proof showing the stitch count, thread colors and a simulated stitch-out.",
        ],
      },
      { type: "h2", text: "How Long Does It Take?" },
      {
        type: "p",
        text: "A standard logo takes a few hours of digitizing plus a test sew. Most professional services deliver within 12 to 24 hours, and rush delivery in 2 to 8 hours is common for simple designs. Large jacket backs and highly detailed artwork can take a day or two because they need more sequencing work and multiple test sews.",
      },
      {
        type: "tip",
        text: "Send your artwork as a vector file (AI, EPS, SVG or PDF) whenever you have one. It lets the digitizer trace exact edges instead of guessing from pixels, which speeds up the job and improves accuracy on small text and fine details.",
      },
      { type: "h2", text: "What You Should Receive From a Digitizer" },
      {
        type: "ul",
        items: [
          "The stitch file in your machine format (DST, PES, JEF, EXP, VP3 and others) at the agreed size.",
          "A production sheet or PDF proof with stitch count, dimensions, thread color sequence and a stitch simulation.",
          "A photo of the real sew-out on fabric, so you know the file has been tested, not just previewed.",
          "Free revisions if anything needs adjusting after you run it on your own machine.",
        ],
      },
      { type: "h2", text: "Ready to Digitize Your Logo?" },
      {
        type: "p",
        text: "Good digitizing is invisible: the logo simply looks right on the garment. Bad digitizing shows up as puckering, gaps, thread breaks and lettering nobody can read. If you want a file that runs clean on the first try, send us your artwork through our [contact page](/contact) for a free quote. Every file is manually digitized, test-sewn, and delivered in 8 to 24 hours with unlimited revisions.",
      },
    ],
  },
  {
    slug: "dst-vs-pes-vs-jef-embroidery-file-formats",
    title: "DST vs PES vs JEF: Which Embroidery File Format Do You Need?",
    metaTitle: "DST vs PES vs JEF: Embroidery File Formats Explained",
    description:
      "Confused by DST, PES, JEF, EXP and VP3? This guide explains each embroidery file format, which machines use them, and which one you should ask your digitizer for.",
    excerpt:
      "Every embroidery machine brand reads its own file format. Pick the wrong one and the design will not load, or it loads without colors. Here is a simple map of the formats and the machines that use them.",
    category: "File Formats",
    tags: ["DST", "PES", "JEF", "embroidery file formats"],
    publishedAt: "2026-09-25",
    readTime: 6,
    image: "/images/blog/dst-vs-pes-vs-jef-embroidery-file-formats.jpg",
    imagePrompt:
      "Flat lay photo on a clean white desk: a USB stick, an embroidered cap with a logo, and a laptop screen showing a file browser with embroidery files named logo.dst, logo.pes and logo.jef, thread spools in navy, gold and white arranged beside them, soft natural light, photorealistic, 16:9.",
    imageAlt:
      "Laptop showing DST, PES and JEF embroidery files next to a USB stick, thread spools and an embroidered cap",
    relatedService: { label: "Embroidery Digitizing Services", href: "/services" },
    faqs: [
      {
        question: "Can I convert a DST file to PES myself?",
        answer:
          "Yes, most embroidery software and free tools like Ink/Stitch can convert between formats. But converting only changes the container, not the stitches. If the original file was digitized for a different fabric or size, converting will not fix that. Ask your digitizer for the native format instead whenever possible.",
      },
      {
        question: "Why does my DST file have no colors?",
        answer:
          "DST is an old Tajima format that stores only stitch positions and color-change commands, not the actual thread colors. Your machine shows default colors and you assign real ones from the production sheet. PES, JEF and VP3 store colors inside the file.",
      },
      {
        question: "Which format should I ask for if I do not know my machine?",
        answer:
          "Check the machine brand. Brother and Babylock use PES, Janome uses JEF, Husqvarna and Pfaff use VP3, Melco and Bernina use EXP, and almost all commercial machines (Tajima, Barudan, SWF, Ricoma, ZSK) use DST. If you still are not sure, tell your digitizer the model and they will pick the right one.",
      },
    ],
    content: [
      {
        type: "p",
        text: "You have a digitized logo, you load it onto your machine, and nothing happens. Or it loads, but every element is the same color. Nine times out of ten the problem is the file format. Embroidery machines are surprisingly picky about which format they accept, and each brand has its own. This guide walks through the formats you will actually run into and tells you which one to ask for.",
      },
      { type: "h2", text: "Why Embroidery Has So Many File Formats" },
      {
        type: "p",
        text: "Unlike images, where a PNG works everywhere, embroidery formats grew up separately inside each machine manufacturer. Tajima created DST for its commercial machines in the 1980s. Brother built PES for its home machines. Janome built JEF, Husqvarna built VP3, and so on. There was never a single standard, so digitizers today simply export to whichever format your machine needs.",
      },
      {
        type: "p",
        text: "There is one important thing to understand before comparing them. All of these are 'stitch files': they store finished needle positions. The digitizer's working file (an EMB, PXF or OFM file, depending on the software) holds the editable objects. Stitch files cannot be properly edited or resized after export. This is why you should always tell your digitizer the exact size before they export.",
      },
      { type: "h2", text: "DST: The Commercial Standard" },
      {
        type: "p",
        text: "DST (Data Stitch Tajima) is the most widely accepted format in the industry. Virtually every commercial multi-needle machine reads it: Tajima, Barudan, SWF, Ricoma, ZSK, Happy, Brother commercial models and most Chinese machines. If you run an embroidery business or send work to a contract embroiderer, DST is what they will ask for.",
      },
      {
        type: "ul",
        items: [
          "Stores stitch coordinates, jumps, trims and color-change stops.",
          "Does not store thread colors. You assign colors on the machine using the production sheet.",
          "Very small file size and maximum compatibility.",
          "Used by nearly all contract embroiderers and print shops.",
        ],
      },
      { type: "h2", text: "PES: Brother and Babylock" },
      {
        type: "p",
        text: "PES is the native format for Brother home and semi-commercial machines, as well as Babylock, Bernina (some models) and Deco. If you own a Brother PE-800, SE-2000, PR-1055X or similar, this is your format. PES stores thread colors, so the design shows up in the right colors on the machine screen, which is a big help for home users.",
      },
      { type: "h2", text: "JEF: Janome and Elna" },
      {
        type: "p",
        text: "JEF is Janome's format, also used by Elna and some Kenmore machines. Like PES, it carries color information. Janome machines are strict about hoop sizes, so make sure the digitizer knows which hoop you are using; a design that fits the 200 by 200 mm hoop will be rejected by a machine that only has a 140 by 200 mm hoop.",
      },
      { type: "h2", text: "EXP, VP3, XXX, HUS and the Rest" },
      {
        type: "ul",
        items: [
          "EXP: Melco and Bernina commercial machines. Melco's Bravo and EMT16 lines use this.",
          "VP3 and VIP: Husqvarna Viking and Pfaff home machines. VP3 stores colors and hoop data.",
          "HUS: older Husqvarna Viking machines.",
          "XXX: Singer and Compucon machines.",
          "SEW: older Janome and Elna models.",
          "PEC: an older Brother format still used by some models.",
          "DSB and DSZ: Barudan and ZSK variants of DST, usually interchangeable with DST.",
        ],
      },
      { type: "h2", text: "Quick Reference: Machine Brand to File Format" },
      {
        type: "ul",
        items: [
          "Tajima, Barudan, SWF, Ricoma, ZSK, Happy, most commercial machines: DST",
          "Brother, Babylock, Deco: PES",
          "Janome, Elna, Kenmore: JEF",
          "Melco, Bernina commercial: EXP",
          "Husqvarna Viking, Pfaff: VP3",
          "Singer: XXX",
        ],
      },
      { type: "h2", text: "Does Converting Between Formats Lose Quality?" },
      {
        type: "p",
        text: "Converting between stitch formats keeps the stitches exactly the same, so there is no quality loss in the stitches themselves. What you can lose is metadata: converting PES to DST drops the colors, and converting DST to PES gives you a file with default colors you need to reassign. Some formats also have limits; older PES versions cap the design size, and DST rounds stitch positions to 0.1 mm, which is fine in practice.",
      },
      {
        type: "p",
        text: "The bigger risk is not the conversion but the assumption behind it. People often convert a file that was digitized for a cap so they can run it on a jacket, or scale it up 200 percent in the process. Stitch files do not scale well: densities become wrong, satin columns become too wide, and small text becomes unreadable. If you need a different size or fabric, get the design re-digitized rather than converted.",
      },
      {
        type: "tip",
        text: "Ask your digitizer for the file in every format you might need at delivery. At Velora Digitizing every order includes DST, PES, JEF, EXP, VP3 and XXX at no extra charge, plus a PDF production sheet with the color sequence, so you are covered if you switch machines or send work to a contractor.",
      },
      { type: "h2", text: "What to Tell Your Digitizer" },
      {
        type: "ol",
        items: [
          "Your machine brand and model, or simply the format you need.",
          "The finished design size in inches or millimetres, and the hoop you will use.",
          "The fabric and product: cap, polo, fleece, twill patch, towel and so on.",
          "Thread brand if you need exact color matching (Madeira, Isacord, Robison-Anton).",
        ],
      },
      {
        type: "p",
        text: "With those four details a digitizer can export the right format at the right size the first time. If you are unsure about any of them, send what you know through our [contact page](/contact) and we will sort out the rest. Our [digitizing services](/services) cover every machine format and every placement, from left chest logos to full jacket backs.",
      },
    ],
  },
  {
    slug: "3d-puff-embroidery-digitizing-guide",
    title: "3D Puff Embroidery Digitizing: The Complete Guide for Caps",
    metaTitle: "3D Puff Embroidery Digitizing Guide for Caps",
    description:
      "How 3D puff embroidery works, which designs suit it, foam thickness, density and underlay settings, and the digitizing rules that keep puff logos clean on caps.",
    excerpt:
      "3D puff is the raised, bold lettering you see on snapbacks and trucker caps. It looks simple but it is one of the hardest things to digitize well. This guide covers the rules that separate crisp puff from foam poking out of the edges.",
    category: "Techniques",
    tags: ["3D puff embroidery", "cap digitizing", "foam embroidery"],
    publishedAt: "2026-09-25",
    readTime: 8,
    image: "/images/blog/3d-puff-embroidery-digitizing-guide.jpg",
    imagePrompt:
      "Macro product photo of a black structured snapback cap with bold white 3D puff embroidered letters on the front panel, raised foam lettering with crisp satin edges, a sheet of white embroidery foam and a spool of white thread beside the cap, dark studio background with soft rim light, photorealistic, 16:9.",
    imageAlt:
      "Black snapback cap with raised white 3D puff embroidered lettering next to embroidery foam and thread",
    relatedService: { label: "3D Puff Digitizing Service", href: "/services" },
    faqs: [
      {
        question: "Can any logo be done in 3D puff?",
        answer:
          "No. Puff works on bold shapes and thick letters with satin columns roughly 3 mm to 12 mm wide. Thin lines, small text, gradients and fine detail cannot hold foam. Most logos are done as a mix: the main letters or shape in puff and the details in flat embroidery.",
      },
      {
        question: "Which foam thickness should I use?",
        answer:
          "2 mm foam is the standard for caps and gives a clear raised effect without stressing the needle. 3 mm foam gives a more dramatic look for large letters but needs wider satin columns and higher density. Thin 1 mm foam is rarely worth the effort.",
      },
      {
        question: "Why is foam showing at the edges of my puff lettering?",
        answer:
          "Either the density is too low so the satin does not perforate and cut the foam cleanly, or the design lacks the capping stitches at the ends of each column. Both are digitizing issues, not machine issues. A properly digitized puff file cuts the foam with the stitches and leaves no visible edge.",
      },
    ],
    content: [
      {
        type: "p",
        text: "3D puff embroidery is everywhere in streetwear, sports merchandise and promotional caps. A layer of foam is placed on the cap, the machine stitches over it, and the stitches perforate the foam so the excess tears away, leaving a raised, sculpted logo. When it is digitized properly, puff looks premium. When it is not, foam shows at the edges, the letters look hollow, and the needle breaks every few hundred stitches. The difference is almost entirely in the file.",
      },
      { type: "h2", text: "How 3D Puff Embroidery Works" },
      {
        type: "p",
        text: "The process on the machine is straightforward. The flat parts of the design sew first. The machine then stops, the operator lays a sheet of embroidery foam over the cap panel, and the puff sections sew on top of it. The satin stitches are dense enough that the needle punctures the foam along the edges of every column; after sewing, the operator tears away the excess foam and a heat gun shrinks any tiny foam remnants that remain.",
      },
      {
        type: "p",
        text: "Everything that makes this work happens during digitizing: the sequence has to place the foam stop at the right moment, the satin has to be dense enough to cut the foam, the ends of every letter have to be closed so foam cannot escape, and the underlay has to be removed from the puff sections because you do not want stitches flattening the foam before the satin covers it.",
      },
      { type: "h2", text: "Which Designs Work for Puff" },
      {
        type: "p",
        text: "Puff needs width. The satin column has to be wide enough to hold the foam and narrow enough that the stitches do not snag. In practice that means:",
      },
      {
        type: "ul",
        items: [
          "Satin columns between roughly 3 mm and 12 mm wide. Below 3 mm the foam has nothing to sit under; above 12 mm the stitches become too long and loop or pull.",
          "Bold, blocky fonts. Varsity, collegiate, heavy sans-serif and rounded fonts are ideal. Script and serif fonts usually need to be thickened first.",
          "Simple shapes with clean outlines. Stars, shields, initials, numbers and mascots with bold outlines all puff well.",
          "No gradients, no fine detail inside the puff area. Details are added as flat embroidery on top or beside the puff.",
        ],
      },
      {
        type: "p",
        text: "Most professional cap logos combine both: the main letters in 3D puff and the tagline, outline or small elements in flat embroidery. This gives the raised effect where it counts and keeps small text readable.",
      },
      { type: "h2", text: "Digitizing Rules for Clean Puff" },
      { type: "h3", text: "Remove underlay from the puff sections" },
      {
        type: "p",
        text: "Standard satin gets an edge-walk or centre-walk underlay to stabilise the fabric. On puff sections that underlay would pin the foam down before the top stitches cover it. Puff satin is digitized with no underlay, or at most a very light centre run, so the foam keeps its full height.",
      },
      { type: "h3", text: "Increase satin density" },
      {
        type: "p",
        text: "Flat satin on a cap usually sits around 0.40 mm spacing. Puff satin needs to be tighter, typically 0.30 to 0.35 mm, so the stitches perforate the foam cleanly along the edges and cover the top completely with no foam showing between stitches. The exact value depends on foam thickness and thread weight.",
      },
      { type: "h3", text: "Cap the ends of every column" },
      {
        type: "p",
        text: "Where a satin column ends, foam would normally stick out of the open end. Digitizers close each end with a few short perpendicular stitches, often called capping or end-capping, that cut the foam across the end of the column. Missing caps are the most common reason for foam showing on finished caps.",
      },
      { type: "h3", text: "Add pull compensation, but less than usual" },
      {
        type: "p",
        text: "Foam pushes back against the thread, so puff columns tend to sew slightly wider than digitized rather than narrower. Digitizers use lower pull compensation on puff than on flat satin, and they test-sew to confirm the letters are not bloating.",
      },
      { type: "h3", text: "Sequence flat first, puff last" },
      {
        type: "p",
        text: "All flat embroidery sews first, then the machine stops for foam placement, then the puff sections sew from the centre of the cap outward. Sewing puff last stops the flat elements from being sewn through foam, and centre-out ordering keeps the cap panel from shifting on the curved frame.",
      },
      { type: "h2", text: "Foam Thickness and Color" },
      {
        type: "p",
        text: "2 mm foam is the everyday choice and works for most cap logos. 3 mm foam gives a bolder, more sculpted look but requires wider columns, higher density and a slower machine speed. Foam color should match the thread color as closely as possible; if a tiny piece of foam stays behind after tearing away, matching foam makes it invisible. White foam under navy thread will show.",
      },
      { type: "h2", text: "Machine Setup Tips for Operators" },
      {
        type: "ul",
        items: [
          "Slow the machine to 600 to 700 stitches per minute for puff sections. High speed heats the needle and melts the foam.",
          "Use a sharp 75/11 or 80/12 needle. Ballpoint needles push the foam instead of cutting it.",
          "Loosen the top tension slightly so the thread sits on top of the foam rather than crushing it.",
          "Keep the foam flat and taut over the panel, and hold it steady during the first few stitches.",
          "After tearing away, use a heat gun on low for a second or two to shrink remaining foam fibres.",
        ],
      },
      {
        type: "tip",
        text: "Send us the cap type when ordering puff digitizing. Structured caps with a stiff buckram front are the easiest surface for puff. Unstructured dad caps are softer and need lighter density and a smaller design, otherwise the panel buckles.",
      },
      { type: "h2", text: "Common 3D Puff Problems and Their Causes" },
      {
        type: "ul",
        items: [
          "Foam visible at edges: density too low or missing end caps.",
          "Hollow, sunken letters: underlay left on, or foam too thin for the column width.",
          "Thread breaks every few hundred stitches: density too high, needle too dull or machine too fast.",
          "Letters look bloated: pull compensation too high for foam.",
          "Flat details distorted: puff sewn before flat elements, or foam left under the flat sections.",
        ],
      },
      { type: "h2", text: "Get Your Cap Logo Digitized for Puff" },
      {
        type: "p",
        text: "Puff is unforgiving. A file that works for flat embroidery will fail on foam, and most auto-digitized files fail immediately. Our [3D puff digitizing service](/services) sets up every design with the right density, capping and sequencing, and we test-sew every puff file on a structured cap before delivery. You can see finished examples in the [3D puff section of our portfolio](/portfolio?category=3d-puff), or send your logo through the [contact page](/contact) for a free quote.",
      },
    ],
  },
  {
    slug: "how-to-prepare-logo-for-embroidery-digitizing",
    title: "How to Prepare Your Logo for Embroidery Digitizing",
    metaTitle: "How to Prepare a Logo for Embroidery Digitizing",
    description:
      "Practical artwork tips before you send a logo for digitizing: file formats, minimum text size, line thickness, gradients, colors and the information your digitizer needs.",
    excerpt:
      "The better your artwork, the better your embroidery. A few small changes to your logo before digitizing can be the difference between a clean sew-out and a blurry mess. Here is a checklist you can run through in ten minutes.",
    category: "Artwork Tips",
    tags: ["logo preparation", "artwork tips", "vector artwork"],
    publishedAt: "2026-09-25",
    readTime: 7,
    image: "/images/blog/how-to-prepare-logo-for-embroidery-digitizing.jpg",
    imagePrompt:
      "Overhead photo of a designer's desk with a printed logo sheet showing the same logo in three versions: original with gradients, simplified flat version, and the finished embroidered version on a white polo shirt, a ruler, pencil and thread color chart beside them, bright even lighting, photorealistic, 16:9.",
    imageAlt:
      "Logo shown as original artwork, simplified flat version and finished embroidery on a polo shirt, with a ruler and thread chart",
    relatedService: { label: "Vector Art Conversion", href: "/vector-art" },
    faqs: [
      {
        question: "What is the minimum text size for embroidery?",
        answer:
          "For block fonts, letters should be at least 5 mm (0.2 inch) tall. Script and serif fonts need 6 to 7 mm. Below that, the letters close up and become unreadable. Some digitizers can go slightly smaller on tightly woven fabrics, but it always needs a test sew.",
      },
      {
        question: "Do I need a vector file to get my logo digitized?",
        answer:
          "No. Digitizers can work from a PNG or JPG, and even from a photo. A vector file simply makes the job faster and more accurate. If you only have a low-resolution image, ask for vector conversion first; it is a small extra cost that improves the final result.",
      },
      {
        question: "Can gradients and shading be embroidered?",
        answer:
          "Not directly. Thread is a solid color. Gradients are recreated with blended fill stitches that mix two thread colors, which works for large areas but not for small logos. Usually the best option is to simplify the gradient to two or three flat colors.",
      },
    ],
    content: [
      {
        type: "p",
        text: "Most digitizing problems start before the digitizer opens the file. A logo designed for a website has thin lines, tiny text, drop shadows and gradients that simply do not translate to thread. A good digitizer will fix a lot of this, but every fix is a guess about what you would prefer. Spending ten minutes preparing the artwork removes the guesswork and gets you a better file, faster.",
      },
      { type: "h2", text: "1. Send the Best File You Have" },
      {
        type: "p",
        text: "In order of preference, send a vector file (AI, EPS, SVG or PDF), then a high-resolution PNG with a transparent background, then any JPG. Vectors let the digitizer snap stitches to exact edges. A 300 dpi PNG at least 1500 pixels wide is nearly as good. A 200 pixel JPG pulled from a website forces the digitizer to redraw everything by eye.",
      },
      {
        type: "p",
        text: "If all you have is a small or blurry image, get it vectorized first. Our [vector art conversion service](/vector-art) redraws logos manually into clean paths that are then used for digitizing, printing and everything else.",
      },
      { type: "h2", text: "2. Decide the Finished Size First" },
      {
        type: "p",
        text: "Everything else depends on this. A logo that looks fine at 12 inches on a jacket back will lose all its detail at 3 inches on a cap. Typical placements:",
      },
      {
        type: "ul",
        items: [
          "Left chest: 3 to 4 inches wide",
          "Cap front: 2 to 2.5 inches tall, up to 4.5 inches wide on structured caps",
          "Sleeve: 2 to 3 inches",
          "Jacket back: 10 to 12 inches wide",
          "Patches: usually 2.5 to 4 inches",
        ],
      },
      {
        type: "p",
        text: "Once you know the size, look at the logo at that size, not zoomed in. If any element becomes smaller than a grain of rice, it needs to be enlarged, simplified or removed.",
      },
      { type: "h2", text: "3. Check Text Size and Font" },
      {
        type: "p",
        text: "Embroidered text has hard limits. Block capitals need to be at least 5 mm tall; lowercase and script fonts need 6 to 7 mm. If the tagline under your logo is 3 mm tall at the finished size, no digitizer can make it readable. Options are to enlarge the text, drop it, or move it to a separate placement.",
      },
      {
        type: "p",
        text: "Fonts with very thin strokes (light weights, thin serifs, hairline scripts) also struggle. Thread has a minimum width of about 1 mm for a satin column. Choose a medium or bold weight, or ask the digitizer to thicken the strokes.",
      },
      { type: "h2", text: "4. Thicken Thin Lines" },
      {
        type: "p",
        text: "Any line thinner than 1 mm at finished size becomes a single running stitch, which looks like a faint dotted line rather than a solid stroke. Outlines around letters, thin borders and fine details should be at least 1 mm, ideally 1.5 mm, so they can be sewn as satin.",
      },
      { type: "h2", text: "5. Remove Gradients, Shadows and Glow Effects" },
      {
        type: "p",
        text: "Thread is one color. Gradients, soft shadows, transparency, inner glows and bevels cannot be embroidered as they appear on screen. Replace them with flat colors. If shading is essential to the design, a digitizer can blend two thread colors with layered fills, but this only works on areas larger than about 2 cm and adds stitch count and cost.",
      },
      { type: "h2", text: "6. Limit the Number of Colors" },
      {
        type: "p",
        text: "Each color is a thread change and a trim, and most commercial machines hold 12 to 15 needles. Most logos look best with 3 to 6 thread colors. If your logo has 14 shades of blue, pick two. Fewer colors also mean a faster, cheaper sew-out and fewer places for registration to drift.",
      },
      {
        type: "p",
        text: "For color matching, send Pantone codes or the thread brand and number if you have them. Digitizers match to Madeira, Isacord or Robison-Anton thread charts; a Pantone reference makes that match accurate rather than approximate.",
      },
      { type: "h2", text: "7. Simplify Tiny Details" },
      {
        type: "p",
        text: "Look at your logo at the finished size and ask what actually needs to be there. Small stars, textures, dotted patterns, tiny icons and registered trademark symbols often disappear or turn into a blob of thread. Removing them makes the main elements cleaner and the file cheaper. You can always keep the full-detail version for print.",
      },
      { type: "h2", text: "8. Tell the Digitizer About the Fabric" },
      {
        type: "p",
        text: "The same logo is digitized differently for a pique polo, a fleece hoodie, a structured cap, a canvas bag and a twill patch. Thick, fluffy fabrics need heavier underlay and slightly wider satin; stretchy fabrics need more pull compensation; caps need centre-out sequencing. Always say what it is going on.",
      },
      {
        type: "tip",
        text: "If the same logo will be used on several products, ask for it to be digitized separately for each one. A left chest polo version and a cap version of the same logo are two different files, and running one on the other is the most common reason a 'good' file sews badly.",
      },
      { type: "h2", text: "Pre-Digitizing Checklist" },
      {
        type: "ol",
        items: [
          "Best available file: vector preferred, or PNG at 300 dpi.",
          "Finished size and placement confirmed.",
          "Smallest text at least 5 mm tall.",
          "Thinnest line at least 1 mm wide.",
          "No gradients, shadows or transparency.",
          "3 to 6 colors, with Pantone or thread codes if you need exact matches.",
          "Fabric and product type noted.",
          "Machine format known (DST, PES, JEF and so on).",
        ],
      },
      {
        type: "p",
        text: "Run through this list and your digitizer can go straight to work. If you are not sure whether your artwork is ready, send it anyway through our [contact page](/contact). We will tell you exactly what needs adjusting, and where a fix is small we will simply make it as part of the [digitizing job](/services) at no extra charge.",
      },
    ],
  },
  {
    slug: "embroidered-vs-woven-vs-pvc-patches",
    title: "Embroidered vs Woven vs PVC Patches: Which Should You Choose?",
    metaTitle: "Embroidered vs Woven vs PVC Patches Compared",
    description:
      "A practical comparison of embroidered, woven, PVC, chenille and printed patches: look, detail level, durability, cost, backing options and which designs suit each type.",
    excerpt:
      "Patches come in more varieties than most people expect, and each one suits a different kind of design. This comparison covers the five main types, what they cost, how they hold up and how to pick the right one for your logo.",
    category: "Patches",
    tags: ["custom patches", "woven patches", "PVC patches", "chenille"],
    publishedAt: "2026-09-25",
    readTime: 7,
    image: "/images/blog/embroidered-vs-woven-vs-pvc-patches.jpg",
    imagePrompt:
      "Studio product photo of five custom patches laid in a row on a dark denim jacket: an embroidered merrow-border patch, a woven patch with fine detail, a rubber PVC patch, a fuzzy chenille varsity letter patch and a printed patch, each with the same simple mountain logo, soft directional lighting showing texture differences, photorealistic, 16:9.",
    imageAlt:
      "Embroidered, woven, PVC, chenille and printed versions of the same logo patch laid on a denim jacket",
    relatedService: { label: "Custom Patch Services", href: "/patches" },
    faqs: [
      {
        question: "What is the most durable patch type?",
        answer:
          "PVC patches are the most durable overall: they are waterproof, do not fade and survive hundreds of washes. Embroidered patches on twill are close behind and hold up to 50 plus washes with sewn-on backing. Printed patches are the least durable because the design sits on the surface.",
      },
      {
        question: "What is the minimum order for custom patches?",
        answer:
          "For physical patch manufacturing the minimum is typically 50 pieces. Digital patch files for your own machine have no minimum. Prices drop significantly at 100, 250 and 500 pieces.",
      },
      {
        question: "Which backing should I choose?",
        answer:
          "Iron-on for quick application on cotton and polyester garments, sew-on for maximum durability and for leather or nylon, hook-and-loop (Velcro) for tactical gear and uniforms where patches are swapped, and adhesive backing only for temporary use.",
      },
    ],
    content: [
      {
        type: "p",
        text: "Ask for 'a patch' and a manufacturer will ask you at least five questions back. Embroidered, woven, PVC, chenille or printed? Merrow border or laser cut? Iron-on, sew-on or Velcro? Each answer changes how your logo looks, how long the patch lasts and what it costs. This guide compares the main types so you can answer those questions with confidence.",
      },
      { type: "h2", text: "Embroidered Patches" },
      {
        type: "p",
        text: "The classic. Thread is embroidered onto a twill base, then the patch is cut out and finished with either a merrow (overlocked) border or a laser-cut edge. Embroidered patches have a raised, textured look, deep color and a traditional feel. They are the go-to for company logos, club badges, scout patches, biker patches and uniforms.",
      },
      {
        type: "ul",
        items: [
          "Best for: bold logos, lettering, shields, mascots, anything with clear shapes.",
          "Detail limit: small text needs to be at least 5 mm tall; very fine detail gets lost.",
          "Durability: excellent. Survives 50 plus washes with sew-on or quality iron-on backing.",
          "Cost: low to moderate, especially at 100 plus pieces.",
          "Coverage options: 50 percent (twill background shows), 75 percent, or 100 percent fully embroidered.",
        ],
      },
      { type: "h3", text: "Merrow border vs laser cut" },
      {
        type: "p",
        text: "A merrow border is the thick overlocked thread edge you see on traditional patches. It works on simple outlines: circles, ovals, squares, shields and rectangles. Laser cutting follows any shape exactly, including sharp corners and cut-outs, and finishes with a heat-sealed edge instead of a thread border. Choose merrow for a classic look on simple shapes and laser cut for custom outlines.",
      },
      { type: "h2", text: "Woven Patches" },
      {
        type: "p",
        text: "Woven patches are made on a loom with much finer thread than embroidery. Instead of stitching on top of a base, the design is woven into the fabric itself. The result is flat, smooth and extremely detailed. Text as small as 3 mm stays legible, and thin lines and small logos reproduce cleanly.",
      },
      {
        type: "ul",
        items: [
          "Best for: detailed logos, small text, fine lines, subtle designs, brand labels.",
          "Detail limit: the finest of any thread-based patch.",
          "Durability: very good, slightly less textured wear resistance than embroidery.",
          "Cost: similar to embroidered; setup is slightly higher.",
          "Look: flat and refined rather than raised and bold.",
        ],
      },
      { type: "h2", text: "PVC Patches" },
      {
        type: "p",
        text: "PVC patches are made from soft rubber-like plastic moulded into layers, giving a 2D or 3D raised effect. They are waterproof, fade-proof and virtually indestructible, which is why they dominate tactical gear, outdoor brands, motorcycle apparel and anything that gets wet or muddy.",
      },
      {
        type: "ul",
        items: [
          "Best for: tactical and morale patches, outdoor brands, bags, dog harnesses, gear that gets wet.",
          "Detail limit: good; 2D PVC handles small detail well, 3D PVC needs bolder shapes.",
          "Durability: the best. Waterproof, UV resistant, wipe clean.",
          "Cost: higher per piece; mould setup fee on first order.",
          "Backing: usually hook-and-loop or sewn; iron-on is not possible.",
        ],
      },
      { type: "h2", text: "Chenille Patches" },
      {
        type: "p",
        text: "Chenille is the fuzzy, looped yarn used on varsity and letterman jackets. It gives a soft, raised, textured surface with a nostalgic look. Chenille is usually combined with an embroidered or felt border and works best on large, simple shapes like letters, numbers and mascots.",
      },
      {
        type: "ul",
        items: [
          "Best for: varsity letters, numbers, large mascots, retro streetwear.",
          "Detail limit: low. Minimum shape size around 1 inch; no small text.",
          "Durability: good, though the loops can pill with rough handling.",
          "Cost: moderate to high because of the extra material and finishing.",
          "Size: usually 3 inches and up; not suited to small patches.",
        ],
      },
      { type: "h2", text: "Printed (Dye-Sublimated) Patches" },
      {
        type: "p",
        text: "The design is printed directly onto polyester fabric and then cut and bordered. Printing reproduces photographs, gradients and unlimited colors that no thread-based patch can. The trade-off is a flat look and lower durability, as the design sits on the surface and fades over time.",
      },
      {
        type: "ul",
        items: [
          "Best for: photographic designs, gradients, many colors, low-cost event patches.",
          "Detail limit: none.",
          "Durability: fair. Fades with washing and sun.",
          "Cost: lowest per piece, very fast turnaround.",
        ],
      },
      { type: "h2", text: "Side-by-Side Summary" },
      {
        type: "ul",
        items: [
          "Bold logo, classic look, budget friendly: Embroidered",
          "Fine detail, small text, refined look: Woven",
          "Outdoor, tactical, waterproof, maximum durability: PVC",
          "Varsity letters, big retro shapes: Chenille",
          "Photos, gradients, many colors, cheapest: Printed",
        ],
      },
      { type: "h2", text: "Choosing a Backing" },
      {
        type: "ul",
        items: [
          "Iron-on (heat seal): quick to apply on cotton and polyester; sew a few stitches for permanent use.",
          "Sew-on: most durable; required for leather, nylon and waterproof fabrics.",
          "Hook-and-loop (Velcro): for tactical gear, uniforms and bags where patches are swapped.",
          "Adhesive (peel and stick): temporary use only, such as events.",
          "Pin back or magnetic: for hats, lapels and display.",
        ],
      },
      {
        type: "tip",
        text: "Many brands combine types. A common streetwear combination is a woven patch for the detailed brand mark on the chest and a large embroidered or chenille patch on the back. If you are unsure, send us the logo and where it will go; we will recommend the type that reproduces it best.",
      },
      { type: "h2", text: "Get Your Patch Made" },
      {
        type: "p",
        text: "Velora Digitizing handles the full patch process: digitizing the artwork, producing a sample, and manufacturing the finished patches in any of the types above with your chosen backing. Read more about our [custom patch services](/patches), browse finished examples in the [patches portfolio](/portfolio?category=patches), or get a quote for your quantity through the [contact page](/contact).",
      },
    ],
  },
  {
    slug: "common-embroidery-digitizing-mistakes",
    title: "10 Common Embroidery Digitizing Mistakes and How to Avoid Them",
    metaTitle: "10 Common Embroidery Digitizing Mistakes to Avoid",
    description:
      "Puckering, thread breaks, gaps, unreadable text and bloated letters usually trace back to the digitized file. Here are the ten most common digitizing mistakes and how to fix each one.",
    excerpt:
      "When embroidery goes wrong, the machine usually gets the blame. In most cases the file is the problem. These are the ten digitizing mistakes we see most often in files sent to us for repair, and what a correct file does instead.",
    category: "Troubleshooting",
    tags: ["digitizing mistakes", "troubleshooting", "embroidery quality"],
    publishedAt: "2026-09-25",
    readTime: 8,
    image: "/images/blog/common-embroidery-digitizing-mistakes.jpg",
    imagePrompt:
      "Side-by-side comparison photo of two embroidered versions of the same round logo on grey fleece: left side puckered with gaps, loose threads and unreadable small text, right side crisp and clean with smooth satin edges, embroidery hoop visible at the edge, neutral studio lighting, photorealistic, 16:9.",
    imageAlt:
      "Comparison of a badly digitized puckered embroidery sew-out next to a clean, correctly digitized version of the same logo",
    relatedService: { label: "Embroidery Digitizing Services", href: "/services" },
    faqs: [
      {
        question: "Can a bad digitized file be fixed, or does it need to be redone?",
        answer:
          "If the digitizer has the original working file (EMB, PXF or similar), most problems can be fixed by adjusting settings. If you only have a stitch file like DST or PES, the objects are gone and the design almost always needs to be re-digitized. Re-digitizing a standard logo is usually quick and inexpensive.",
      },
      {
        question: "How do I know if the problem is the file or my machine?",
        answer:
          "Run a known-good design on the same fabric with the same thread and backing. If that sews clean and your new file does not, the file is the problem. If both fail, look at tension, needle, backing and hooping first.",
      },
      {
        question: "Why does the design look fine on screen but bad on fabric?",
        answer:
          "Software previews show perfect stitches on a flat, non-moving surface. Real fabric stretches, pulls and compresses. Underlay, pull compensation and density exist to handle that, and a preview cannot show whether they are right. Only a test sew can.",
      },
    ],
    content: [
      {
        type: "p",
        text: "We repair a lot of files that customers received from other sources. The same handful of mistakes appear again and again, and almost all of them come from auto-digitizing or from a digitizer who never test-sewed the design. Here are the ten most common ones, what they look like on fabric, and how a properly digitized file avoids them.",
      },
      { type: "h2", text: "1. Wrong or Missing Underlay" },
      {
        type: "p",
        text: "What it looks like: the logo sinks into fleece or towelling, satin edges look ragged, fills look thin and the fabric shows through. Underlay is the hidden layer of stitches sewn first to stabilise the fabric and lift the top stitches. Auto-digitizers either skip it or apply the same underlay to everything. A digitizer chooses edge-walk, centre-walk, zig-zag or tatami underlay per object, based on the fabric and stitch type.",
      },
      { type: "h2", text: "2. Density Too High" },
      {
        type: "p",
        text: "What it looks like: the fabric puckers around the design, the embroidery feels stiff like cardboard, needles break, and thread shreds. Beginners assume more stitches mean better coverage. In reality satin density above roughly 0.35 mm spacing and fill density below 0.40 mm on a normal garment just piles thread on thread. Correct density gives full coverage with a soft hand and no distortion.",
      },
      { type: "h2", text: "3. Density Too Low" },
      {
        type: "p",
        text: "What it looks like: gaps between stitches, background fabric visible through fills, satin columns that look striped. Usually the result of lowering density to cut stitch count and price. The fix is matching density to thread weight and fabric, and using appropriate underlay so the top stitches do not need to do all the work.",
      },
      { type: "h2", text: "4. No Pull Compensation" },
      {
        type: "p",
        text: "What it looks like: circles become ovals, letters look thin and gaps appear where one color meets another. Every stitch pulls the fabric inward along its direction, so a shape sews narrower than it was digitized. Pull compensation widens objects slightly to counter this. The right amount depends on fabric: stretchy knits need more, stable twill needs less.",
      },
      { type: "h2", text: "5. Satin Columns Too Wide or Too Narrow" },
      {
        type: "p",
        text: "What it looks like: long loose stitches that snag and lift (too wide), or a column that looks like a thin running stitch with no shine (too narrow). Satin should stay between about 1 mm and 10 mm wide. Wider areas should be converted to fill or split satin; narrower lines should become running or bean stitch.",
      },
      { type: "h2", text: "6. Text Too Small" },
      {
        type: "p",
        text: "What it looks like: letters close up into blobs, e's and a's fill in, and the tagline becomes unreadable. Thread has a physical width, so block text needs at least 5 mm height and script needs 6 to 7 mm. The fix is enlarging the text, simplifying the font, or removing the text from small placements. No density setting fixes text that is physically too small.",
      },
      { type: "h2", text: "7. Poor Sequencing and Excess Trims" },
      {
        type: "p",
        text: "What it looks like: the machine trims and jumps constantly, run time is long, and registration drifts so outlines no longer line up with fills. A well-sequenced file groups objects by color, sews from the centre outward, travels underneath other objects instead of trimming, and sews outlines last. Good sequencing can cut a design's run time by a quarter with no visible change.",
      },
      { type: "h2", text: "8. Ignoring the Fabric" },
      {
        type: "p",
        text: "What it looks like: a file that sews beautifully on a polo looks terrible on a cap or hoodie. Fabric changes everything: fleece needs heavy underlay and slightly wider satin, caps need centre-out sequencing and lighter density, performance knits need more pull compensation and lighter fills. One file per fabric is the rule.",
      },
      { type: "h2", text: "9. Scaling a Stitch File" },
      {
        type: "p",
        text: "What it looks like: after enlarging a DST or PES file by 150 percent, the fills have gaps and the satin stitches are so long they snag; after reducing it, the design is stiff and the small details merge. Stitch files store finished needle positions, so scaling stretches or compresses the stitches without recalculating density. Anything beyond about 10 percent needs re-digitizing from the working file.",
      },
      { type: "h2", text: "10. Never Test-Sewing the File" },
      {
        type: "p",
        text: "What it looks like: everything above, discovered on your production run. A software preview cannot show pull, puckering or thread behaviour. Every file should be sewn on the real fabric type before delivery, and the settings adjusted based on what the thread actually does. If a digitizer cannot send you a photo of the sew-out, assume the file has not been tested.",
      },
      {
        type: "tip",
        text: "When you receive a new file, run it once on scrap fabric of the same type before hooping a garment. It costs a few minutes and a piece of scrap; it saves ruined blanks.",
      },
      { type: "h2", text: "Quick Diagnosis Table" },
      {
        type: "ul",
        items: [
          "Puckering around the design: density too high, underlay too heavy, or insufficient backing.",
          "Gaps and fabric showing: density too low, no pull compensation, or wrong underlay.",
          "Thread breaks: density too high, satin too wide, or sharp corners with stacked stitches.",
          "Unreadable text: text under 5 mm, or thin font with satin under 1 mm.",
          "Outlines misaligned: bad sequencing, outlines sewn before fills, or loose hooping.",
          "Design stiff and heavy: excessive density and underlay, often from auto-digitizing.",
        ],
      },
      { type: "h2", text: "Get a File That Runs Clean" },
      {
        type: "p",
        text: "If a design is giving you problems, send us the file and a photo of the sew-out through the [contact page](/contact). We will tell you whether it can be fixed or needs re-digitizing, and quote for either. Every file from our [digitizing service](/services) is manually digitized, matched to your fabric, and test-sewn before delivery, with free revisions if anything needs adjusting on your machine.",
      },
    ],
  },
];

export const BLOG_CATEGORIES = Array.from(
  new Set(BLOG_POSTS.map((p) => p.category)),
);

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getRelatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  const sameCategory = BLOG_POSTS.filter(
    (p) => p.slug !== post.slug && p.category === post.category,
  );
  const others = BLOG_POSTS.filter(
    (p) => p.slug !== post.slug && p.category !== post.category,
  );
  return [...sameCategory, ...others].slice(0, limit);
}

export function formatPostDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
