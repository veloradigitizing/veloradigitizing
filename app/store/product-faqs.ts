/**
 * Product-specific FAQs for every indexed store item (patches and bundles),
 * keyed by slug.
 *
 * Each set answers questions a buyer would ask about THIS design (size,
 * stitch count, fabrics, colour changes, what is in the bundle) rather than
 * the generic ordering/licensing questions that live on /store. Keeping the
 * questions unique per page stops the 27 indexed product pages from sharing
 * the same 300 words of templated FAQ copy, which Google treats as
 * near-duplicate content.
 */
export type ProductFaq = { question: string; answer: string };

export const STORE_PRODUCT_FAQS: Record<string, ProductFaq[]> = {
  // --- Adventure ---------------------------------------------------------
  "hike-more-worry-less": [
    {
      question: "What size is the Hike More Worry Less patch and can I scale it?",
      answer:
        "The file is digitized at 4 x 4 inches. Because the slogan runs around the outer ring as satin text, we recommend staying between 3.5 and 4.5 inches; scaling smaller than that squeezes the ring lettering below the 4 mm minimum height for clean satin.",
    },
    {
      question: "How many stitches and colours does the hiker design use?",
      answer:
        "It runs about 15,000 stitches in four thread colours: sky, mountain ridges, the hiker silhouette and the ring text. The hiker is finished with a running-stitch outline so the figure stays sharp against the tatami fill.",
    },
    {
      question: "Which fabrics does this trail badge sew best on?",
      answer:
        "Twill patch blanks, canvas backpacks, fleece and denim. The curved text has extra pull compensation built in, so letter spacing stays even on stretchy fleece as well as on stiff canvas.",
    },
  ],
  "wild-adventure-patch": [
    {
      question: "Why is the Wild Adventure patch lighter than other 3.5 inch badges?",
      answer:
        "The sky area uses a lighter fill density than the sun and treeline, which keeps the 12,000-stitch patch flexible instead of stiff. That makes it comfortable on hats and tote bags where a dense badge would curl.",
    },
    {
      question: "Will the Wild Adventure banner text stay legible on canvas?",
      answer:
        "Yes. The banner is digitized as satin columns over a tidy underlay, so the letters sit on top of textured fabrics like canvas and heavy cotton rather than sinking into the weave.",
    },
    {
      question: "Which other patches match this design for a set?",
      answer:
        "It shares the same pine-and-sun outdoor style as Hike More Worry Less and Stay Wild Patch, so the three are often run together as a matching collection for camping and trail merchandise.",
    },
  ],
  "stay-wild-patch": [
    {
      question: "How long does the Stay Wild patch take to sew?",
      answer:
        "At roughly 10,000 stitches in a 3 x 3 inch footprint it is one of the quickest patches in the store. On a commercial head running 800 spm it finishes in about 13 minutes, which suits multi-head cap and beanie production.",
    },
    {
      question: "Does the hand-drawn lettering hold up on knit caps?",
      answer:
        "The letters are satin with a center-walk underlay, so they keep their shape on knit beanies and do not sink into the rib. The thin double border is a running stitch that adds definition without extra bulk.",
    },
    {
      question: "Where is a 3 inch patch like this normally placed?",
      answer:
        "Cap fronts, sleeve patches, backpack straps and small denim pockets. The compact size works where a 4 inch badge would feel crowded.",
    },
  ],
  "explore-the-path": [
    {
      question: "What gives the Explore The Path trail its depth?",
      answer:
        "The 14,000-stitch file layers two fill directions for the winding path and the hills behind it, so the scene reads with perspective even at 3.5 x 3.5 inches. The title sits in tall condensed capitals inside a satin ring.",
    },
    {
      question: "Is this design suitable for stitching directly on a garment?",
      answer:
        "Yes. The satin ring is digitized to mimic a merrowed edge, so the design looks like a finished patch when sewn straight onto twill, denim or canvas without cutting a blank.",
    },
    {
      question: "Does the ZIP include a colour sequence sheet?",
      answer:
        "It does. The three-colour version ships with a stop-by-stop colour sequence sheet, so a single-needle operator can run it without guessing which thread comes next.",
    },
  ],
  "find-your-path-patch": [
    {
      question: "Can the Find Your Path compass be mirrored for left and right sleeves?",
      answer:
        "Yes. The four-point compass rose is symmetrical, so mirroring the file for opposite sleeve placements keeps the design looking correct. Only the motto along the bottom arc needs to stay un-mirrored, and it is on its own object.",
    },
    {
      question: "Why is this one of the cheapest patches to run?",
      answer:
        "It is only about 9,000 stitches at 3 x 3 inches. The compass points are crisp satin edges and the centre medallion is a solid fill, so there is very little dense coverage to slow the machine down.",
    },
    {
      question: "What does it pair with?",
      answer:
        "Shops usually combine it with Explore The Path and Adventure Awaits when building a themed outdoor collection, since all three share the same badge proportions and typography.",
    },
  ],
  "adventure-awaits-patch": [
    {
      question: "Is the Adventure Awaits patch too dense for fleece?",
      answer:
        "No. Even at 16,000 stitches the file includes a solid underlay so the tatami landscape sits flat on fleece and canvas rather than sinking in. A 2.5 oz cutaway stabilizer is still recommended on fleece.",
    },
    {
      question: "Where does a 4 x 4 inch badge like this work best?",
      answer:
        "Jacket back panels, large bags and the back of hoodies. The heavy block capitals and wide satin lettering give it presence from a distance, which is why youth groups and national-park gift shops favour it.",
    },
    {
      question: "Do I need to cut a patch blank for this design?",
      answer:
        "Not necessarily. The outer satin border gives a finished edge when stitched directly onto a garment. If you prefer a sew-on patch, run it on a twill blank and merrow or heat-cut the edge.",
    },
  ],
  "wild-spirit-patch": [
    {
      question: "How is fur texture achieved in the Wild Spirit wolf head?",
      answer:
        "Instead of many colour stops, the 19,000-stitch file changes fill angles across the wolf face to suggest fur and shading. The result is an illustrative look in only a handful of thread colours.",
    },
    {
      question: "What keeps the detailed wolf face from distorting?",
      answer:
        "A tack-down underlay locks the fabric before the dense fills are sewn. The design has been test-sewn on twill and denim, which are the fabrics it is intended for.",
    },
    {
      question: "Is this patch a good fit for biker jackets?",
      answer:
        "Yes. The 4 x 4 inch size, pine silhouettes, moon and rugged serif lettering make it one of the bolder badges in the store, suited to back panels, flannel shirts and outdoor streetwear.",
    },
  ],

  // --- Lifestyle ---------------------------------------------------------
  "happy-place-patch": [
    {
      question: "Will the Happy Place script lettering hold together on a t-shirt?",
      answer:
        "Yes. The script is digitized as narrow satin with connecting running stitches, so the letters stay joined on soft fabrics like sweatshirts and tees instead of pulling apart.",
    },
    {
      question: "How does the cabin scene read from a distance?",
      answer:
        "The 13,000-stitch file uses a light fill for the sky and heavier fills for the cabin and pine trees, so the 3.5 x 3.5 inch scene has clear contrast even from across a room.",
    },
    {
      question: "Who typically buys this design?",
      answer:
        "Casual apparel brands, camper and cabin merchandise and gift shops near lakes and woodland areas. It also works as a personal badge on a denim jacket or tote.",
    },
  ],
  "keep-it-simple-patch": [
    {
      question: "How small can the Keep It Simple patch be run?",
      answer:
        "It is supplied at 3 x 2 inches and scales down to 2.5 inches wide without losing legibility, which makes it usable on pen pockets and small labels as well as caps and sleeves.",
    },
    {
      question: "Why is this the lightest design in the store?",
      answer:
        "At about 6,000 stitches it is only sans-serif satin lettering inside a slim rectangular border. Each letter has a center-walk underlay so the text stays crisp and evenly spaced on knits and wovens.",
    },
    {
      question: "Can it be run as a single-colour tonal design?",
      answer:
        "Yes. The whole patch uses one thread colour, so it is a natural choice for tone-on-tone embroidery on workwear, aprons and uniform shirts.",
    },
  ],
  "life-is-better-patch": [
    {
      question: "Why is the Life Is Better patch in a wide 4 x 2 inch format?",
      answer:
        "The phrase is the hero element, so the landscape layout gives the main words wide satin columns with a smaller secondary line underneath and a simple sun-and-horizon motif above.",
    },
    {
      question: "Will the wide format bow on stretchy hoodies?",
      answer:
        "Pull compensation has been set for stretch fabrics, so the 9,000-stitch design stays straight across t-shirts and hoodies without the ends curving upward.",
    },
    {
      question: "Can I cut it as a patch or stitch it directly?",
      answer:
        "Both. A thin satin border runs around the full rectangle, so it can be merrowed as a cut patch or stitched straight onto the garment with the border acting as the finished edge.",
    },
  ],
  "chase-the-sun-patch": [
    {
      question: "Can the Chase The Sun design be run without the outer ring?",
      answer:
        "Yes. A generous gap was left between the ray tips and the ring, so you can delete the ring object and sew the radiating sun as a stand-alone motif.",
    },
    {
      question: "How are the sun rays digitized?",
      answer:
        "As tapered satin columns that catch the light. At about 8,000 stitches and 3 x 3 inches the whole patch sews quickly, and the single-colour version is popular for tonal designs.",
    },
    {
      question: "Which other patches does it pair with?",
      answer:
        "It is often bought with Life Is Better and Happy Place to form a summer collection for beach, lake and cafe merchandise.",
    },
  ],
  "love-heart-patch": [
    {
      question: "Is the Love script on this patch large enough to stay readable?",
      answer:
        "Yes. The script lettering is sized just over 4 mm high, which is the minimum we recommend for clean satin text, so it stays readable after repeated washing.",
    },
    {
      question: "Why has the heart fill density been reduced?",
      answer:
        "The 3 x 3 inch heart uses a slightly lighter tatami fill so the patch stays flexible on lightweight jersey and cotton tees rather than forming a stiff disc.",
    },
    {
      question: "What is the vine border made of?",
      answer:
        "Narrow satin stitches, the same as the script, which gives the roughly 8,000-stitch design a soft, embroidered-by-hand feel suited to couples apparel, wedding favours and pouches.",
    },
  ],

  // --- Gaming ------------------------------------------------------------
  "dad-by-day-gamer-by-night": [
    {
      question: "How many trims does the Dad By Day Gamer By Night design need?",
      answer:
        "Very few. The 18,000-stitch path sews the controller first and finishes with the lettering, so there are minimal jumps and trims and fewer chances of a thread break.",
    },
    {
      question: "What font is used for the slogan?",
      answer:
        "A chunky arcade-inspired block font digitized as satin, stacked above and below the retro controller. Pixel-style stars fill the corners of the 4 x 4 inch badge.",
    },
    {
      question: "Does it work as a hook-and-loop patch?",
      answer:
        "Yes. It is a popular morale-style patch for gaming chairs and backpacks, and it sells well as a gift design on hoodies and caps for gamer dads.",
    },
  ],
  "search-rescan-patch": [
    {
      question: "How is the radar detail kept clean at 3.5 x 2.5 inches?",
      answer:
        "The radar rings are a fine running-stitch grid and the Search and Rescan words are sharp satin in a tech-style font, so the 13,000-stitch file stays crisp instead of blurring into a fill.",
    },
    {
      question: "How many colour changes does it need?",
      answer:
        "Only one. The two-colour layout lets a multi-head shop run a full batch of morale patches in a single short cycle.",
    },
    {
      question: "Is it intended for hook-and-loop backing?",
      answer:
        "Yes. It is digitized for twill patch blanks with hook-and-loop backing, which is the standard construction for gaming and tactical-style morale patches on laptop sleeves and backpacks.",
    },
  ],

  // --- Motivational ------------------------------------------------------
  "endeavour-patch": [
    {
      question: "Does the Endeavour patch fit a structured cap front?",
      answer:
        "Yes. The ZIP includes a cap-sized version rotated to the standard 2.25 inch cap height alongside the 3.5 x 2.5 inch patch version.",
    },
    {
      question: "Why does the lettering have a double underlay?",
      answer:
        "The extended capitals use wide satin columns, and the double underlay in the 11,000-stitch file makes them sit high and even on heavy canvas and denim without sinking.",
    },
    {
      question: "Can it be recoloured for team branding?",
      answer:
        "Easily. The word and the small laurel underneath are separate colour objects, so it runs as a tonal design or a two-colour combination that matches a team or company palette.",
    },
  ],
  "home-of-hustle-patch": [
    {
      question: "How many thread colours does the Home Of Hustle patch need?",
      answer:
        "Two. The lightning accent and the thick border share one colour and the condensed capitals use the other, which keeps production cost down on large uniform orders.",
    },
    {
      question: "What makes it feel like a premium workwear patch?",
      answer:
        "A dense fill behind the text gives the 3.5 x 2.5 inch rectangle a solid, weighty feel, and the satin edges are compensated for thick twill. It has been test-sewn on work jackets and heavy caps.",
    },
    {
      question: "Which businesses use this design?",
      answer:
        "Trades businesses, gyms, barbershops and side-hustle merchandise brands, mostly on work jackets, caps and bags. The 12,000-stitch count keeps it quick to run in volume.",
    },
  ],
  "mentally-strong-patch": [
    {
      question: "Is there a lighter version of the Mentally Strong patch?",
      answer:
        "Yes. The ZIP contains the full 20,000-stitch version with the tatami shield background and a 14,000-stitch version with the background removed for faster runs on caps and tees.",
    },
    {
      question: "How is puckering prevented on hoodie fabric?",
      answer:
        "A tack-down underlay stabilises the fleece before the shield is filled, and the top fill density was reduced slightly so the 4 x 3 inch shield stays flat instead of cupping.",
    },
    {
      question: "What does the design show?",
      answer:
        "Bold stacked lettering next to a stylised brain-and-lightning icon inside a rounded shield, with detailed inner line work. It is popular with mental health campaigns, gyms and schools.",
    },
  ],

  // --- Fun & Unique ------------------------------------------------------
  "gumshoe-detective-patch": [
    {
      question: "Does the Gumshoe patch fit standard circular patch blanks?",
      answer:
        "Yes. It is digitized at exactly 3 inches, so it sews straight onto pre-cut 3 inch merrowed twill blanks without resizing.",
    },
    {
      question: "How is the detective character kept readable at this size?",
      answer:
        "The 10,000-stitch file keeps detail simple: a fill for the trench coat, satin for the hat brim and magnifying-glass ring, and vintage lettering around the circular border.",
    },
    {
      question: "Is it suitable for a single-needle home machine?",
      answer:
        "Yes. Colour changes are kept to a minimum, so it runs quickly on single-head home machines as well as commercial multi-heads.",
    },
  ],
  "paranormal-patch": [
    {
      question: "Does the Paranormal patch work with glow-in-the-dark thread?",
      answer:
        "Yes. The dark fill background with contrasting satin lettering is designed so the ghost and the word Paranormal glow when sewn with high-visibility or glow thread.",
    },
    {
      question: "Will the dripping horror font look ragged?",
      answer:
        "No. The drips are digitized with tapered satin ends so they look intentional at 3.5 x 3.5 inches, and the ghost outline is a smooth satin that keeps its curves on twill blanks.",
    },
    {
      question: "Who buys this 14,000-stitch design?",
      answer:
        "Halloween apparel brands, paranormal podcasts, ghost tour operators and horror fan merchandise sellers.",
    },
  ],

  // --- Community / Travel ------------------------------------------------
  "people-safety-patch": [
    {
      question: "Why is the People Safety patch only two colours?",
      answer:
        "Deliberately. The two-colour layout keeps it cheap to produce in volume for events where hundreds of stewards need a recognisable badge at a glance.",
    },
    {
      question: "Is it built for repeated industrial washing?",
      answer:
        "Yes. The 11,000-stitch file has a stable underlay and is digitized for uniform fabrics such as poly-cotton twill, hi-vis vests and work shirts.",
    },
    {
      question: "What does the design show?",
      answer:
        "Two figures inside a protective shield outline with the words People Safety across the base, at 3 x 3 inches. The solid shield fill and satin figures make the message legible from a distance.",
    },
  ],
  "veracruz-patch": [
    {
      question: "What is pictured on the Veracruz patch?",
      answer:
        "A palm tree, sun and waves inside a circular frame with Veracruz set along the border, inspired by the Mexican port city. It is a 4 x 4 inch souvenir-style badge.",
    },
    {
      question: "How dense is the 17,000-stitch design?",
      answer:
        "The sea and sun use rich fills and the city name is satin. Density is tuned for cotton twill and denim, and the border satin gives a finished edge when sewn directly onto bags or jackets.",
    },
    {
      question: "Who is this patch for?",
      answer:
        "Travel collections, tourist shops and anyone building a map of visited places on a jacket or backpack.",
    },
  ],

  // --- Bundles -----------------------------------------------------------
  "70-patches-pack-1": [
    {
      question: "What themes are in 70 Patches Pack Vol. 1?",
      answer:
        "Seventy adventure and outdoor designs: mountain badges, camping scenes, trail slogans and wildlife silhouettes. Stitch counts range from quick 6,000-stitch cap designs to full 20,000-stitch jacket badges.",
    },
    {
      question: "What extras ship with the pack?",
      answer:
        "Every design comes in DST, PES, EXP, JEF and VP3 plus a size variation guide, thread colour charts and application instructions.",
    },
    {
      question: "Can I sell patches made from these files?",
      answer:
        "Yes. The commercial licence covers finished patches and garments, which is why patch makers and embroidery shops use the pack to stock a complete outdoor collection in one purchase.",
    },
  ],
  "100-patches-mega-pack": [
    {
      question: "How is the 100 Patches Mega Pack different from the Ultimate Pack?",
      answer:
        "The Mega Pack is about breadth: one hundred designs across typography, animals, logos, floral, travel and retro styles. The Ultimate Pack adds source files, a lifetime update guarantee and priority support on top.",
    },
    {
      question: "Which machine formats are included?",
      answer:
        "Seven formats: DST, PES, EXP, JEF, HUS, VP3 and XXX. That covers commercial Tajima and Barudan heads as well as Brother, Janome and Husqvarna home machines.",
    },
    {
      question: "Do I get new designs after purchase?",
      answer:
        "Yes. The purchase includes free updates as new designs are added to the collection, source files where available and priority email support.",
    },
  ],
  "70-patches-pack-3": [
    {
      question: "Does 70 Patches Pack Vol. 3 overlap with Vol. 1?",
      answer:
        "No. Vol. 3 is a completely different set focused on trending styles: sports mascots, varsity lettering, bold slogans and modern line-art badges.",
    },
    {
      question: "Are cap-sized versions included?",
      answer:
        "Most designs include a small cap-friendly version alongside the full-size patch, because the volume was digitized with multiple hoop sizes in mind.",
    },
    {
      question: "How do I quote customers before sewing?",
      answer:
        "The pack ships with a spreadsheet listing every design with its size, stitch count and colour count, plus a hoop size guide, palette recommendations and a stabilizer guide.",
    },
  ],
  "50-patches-starter-pack": [
    {
      question: "Is the 50 Patches Starter Pack suitable for a home machine?",
      answer:
        "Yes. Stitch counts are moderate and colour changes are limited, so the fifty floral and nature designs are forgiving on single-needle home machines and fast on commercial heads.",
    },
    {
      question: "What learning material is included?",
      answer:
        "A starter tutorial PDF covering hooping, stabilizer choice and thread tension, plus a basic size guide and thread chart. Files ship in DST, PES, EXP, JEF and VP3.",
    },
    {
      question: "Will I get duplicates if I upgrade later?",
      answer:
        "No. The starter designs do not overlap with the 70 Patches packs, so moving up adds new work rather than repeats. A standard commercial licence for finished goods is included.",
    },
  ],
  "50-patches-value-pack": [
    {
      question: "How were the designs in the 50 Patches Value Pack chosen?",
      answer:
        "They are the fifty best-selling designs from the gaming, pop-culture, slogan and lifestyle categories, so the pack is a proven starting catalogue for a new patch business or Etsy shop.",
    },
    {
      question: "How long does a typical design take to sew?",
      answer:
        "Most are 3 to 4 inches and finish in under 15 minutes on a commercial head, which keeps turnaround short for marketplace orders.",
    },
    {
      question: "What guides come with it?",
      answer:
        "An application guide, a fabric recommendation guide and a full list of included designs, with every file supplied in DST, PES, EXP, JEF and VP3 under a commercial licence.",
    },
  ],
  "100-patches-ultimate-pack": [
    {
      question: "Who is the 100 Patches Ultimate Pack for?",
      answer:
        "Established embroidery businesses and contract patch makers who want a long-term design library covering every category in the store rather than a one-off purchase.",
    },
    {
      question: "What makes it the flagship bundle?",
      answer:
        "Source files where available, a lifetime update guarantee and priority support, plus seven formats (DST, PES, EXP, JEF, HUS, VP3 and XXX) covering virtually every commercial and home machine.",
    },
    {
      question: "What sizes do the designs come in?",
      answer:
        "From compact 3 inch cap badges to full-size 4 inch jacket patches, each test-sewn on twill and denim before release.",
    },
  ],
};
