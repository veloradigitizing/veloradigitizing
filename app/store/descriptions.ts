/**
 * Long-form, unique copy for every store item, keyed by slug.
 *
 * The short `description` on each patch/bundle is reused for meta tags and
 * cards. This longer text is shown in the "About" section of /store/[slug]
 * so each product page has substantial copy of its own instead of only the
 * shared template, which helps Google treat the pages as distinct.
 */
export const STORE_LONG_DESCRIPTIONS: Record<string, string> = {
  // --- Adventure ---------------------------------------------------------
  "hike-more-worry-less": [
    "Hike More Worry Less is a 4 x 4 inch circular badge built around a lone hiker silhouette set against layered mountain ridges, with the slogan wrapped around the outer ring in a bold rounded typeface.",
    "At roughly 15,000 stitches the design uses a tatami fill for the sky and peaks, satin columns for the ring text, and a running-stitch outline that keeps the hiker crisp at this size.",
    "It sews cleanly on twill patch blanks, canvas backpacks, fleece and denim. Because the text sits on a curve, we added extra pull compensation so letters stay evenly spaced on stretchy fabrics.",
    "Popular with trail clubs, outdoor brands and anyone decorating gear for a hiking trip.",
  ].join(" "),
  "wild-adventure-patch": [
    "Wild Adventure Patch is a 3.5 x 3.5 inch nature badge with pine trees, a rising sun and a bold banner that reads Wild Adventure across the lower third.",
    "The 12,000-stitch file balances a dense fill for the sun and treeline with lighter stitching in the sky so the patch stays flexible rather than stiff.",
    "The banner text is digitized as satin columns with a tidy underlay, which makes it legible even on textured fabrics like canvas or heavy cotton.",
    "It works well on jackets, camping gear, hats and tote bags, and pairs naturally with Hike More Worry Less and Stay Wild for a matching outdoor set.",
  ].join(" "),
  "stay-wild-patch": [
    "Stay Wild Patch is a compact 3 x 3 inch design that leans on hand-drawn lettering, a small mountain icon and a thin double border for a modern, minimal outdoor look.",
    "At about 10,000 stitches it is one of the quicker patches in the store to run, making it a good choice for multi-head shops decorating caps and beanies in volume.",
    "The letters are built as satin stitches with a center-walk underlay so they hold their shape on knit caps without sinking into the fabric.",
    "Use it on cap fronts, sleeve patches, backpack straps and small denim pockets where a larger badge would feel crowded.",
  ].join(" "),
  "explore-the-path": [
    "Explore The Path is a 3.5 x 3.5 inch badge showing a winding trail leading toward distant peaks, framed by a circular border and the title set in tall condensed capitals.",
    "The 14,000-stitch file uses layered fills to give the path and hills depth, and a satin ring to give the patch a clean merrowed-border feel even on a flat garment.",
    "We tuned stitch density for mid-weight fabrics such as twill, denim and canvas, so the trail detail stays sharp without puckering.",
    "A strong fit for travel apparel, hiking club merchandise and camper van or overlanding gear.",
    "The file ships with a colour sequence sheet so the three-colour version can be run without guesswork on a single-needle machine.",
  ].join(" "),
  "find-your-path-patch": [
    "Find Your Path Patch is a 3 x 3 inch compass-themed design with a four-point rose at the center, a thin outer ring and the motto set along the bottom arc.",
    "The 9,000-stitch count keeps it economical to run while still giving the compass points crisp satin edges and a solid fill for the center medallion.",
    "The compact size makes it ideal for cap fronts, sleeve placements, hip pockets and pen holders on hiking packs.",
    "Shops often pair it with Explore The Path or Adventure Awaits when building a themed collection for outdoor retailers.",
    "Because the compass rose is symmetrical, the file also looks correct when mirrored for left and right sleeve placements.",
  ].join(" "),
  "adventure-awaits-patch": [
    "Adventure Awaits Patch is a bold 4 x 4 inch badge with a sunrise over mountains, a treeline across the base and the phrase Adventure Awaits set in heavy block capitals.",
    "At 16,000 stitches it is a full, saturated patch with tatami fills for the landscape and wide satin columns for the lettering, giving it real presence on a jacket back panel or large bag.",
    "The file includes a solid underlay so the fill sits flat on fleece and canvas, and the outer satin border gives a finished edge when stitched directly onto garments.",
    "It is a favourite for youth groups, travel brands and gift shops near national parks.",
  ].join(" "),
  "wild-spirit-patch": [
    "Wild Spirit Patch is a 4 x 4 inch design centred on a howling wolf head with pine silhouettes and a moon behind it, bordered by the words Wild Spirit in a rugged serif.",
    "This is one of the denser files in the store at about 19,000 stitches, with careful fill-angle changes to suggest fur and shading without resorting to too many color stops.",
    "The design is test-sewn on twill and denim and includes a tack-down underlay so the detailed wolf face stays sharp.",
    "Great for biker jackets, back panels, flannel shirts and outdoor streetwear where you want a bolder, illustrative badge.",
  ].join(" "),

  // --- Lifestyle ---------------------------------------------------------
  "happy-place-patch": [
    "Happy Place Patch is a cheerful 3.5 x 3.5 inch badge with a cabin and pine trees inside a rounded frame and the words Happy Place in a friendly script.",
    "The 13,000-stitch file uses a light fill for the sky and heavier fills for the cabin and trees so the scene reads clearly from a distance.",
    "The script lettering is digitized as narrow satin with connecting running stitches so it holds together on soft fabrics such as sweatshirts and tees.",
    "It suits casual apparel, camper merchandise and gifts for anyone whose happy place is a lake, a cabin or the woods.",
  ].join(" "),
  "keep-it-simple-patch": [
    "Keep It Simple Patch is a minimalist 3 x 2 inch text badge using clean sans-serif capitals inside a slim rectangular border.",
    "At only 6,000 stitches it is the lightest design in the store, which makes it quick to run on caps, sleeve placements and small pockets.",
    "Each letter is a satin column with a center-walk underlay, so the text stays crisp and evenly spaced on knits and wovens alike.",
    "Because it uses a single thread color it is also an easy candidate for tonal embroidery on workwear, aprons and uniform shirts.",
    "The file is supplied at 3 x 2 inches but scales down to 2.5 inches without losing legibility, which makes it useful for pen pockets and small labels as well.",
  ].join(" "),
  "life-is-better-patch": [
    "Life Is Better Patch is a 4 x 2 inch landscape-format badge with the phrase Life Is Better set over a simple sun and horizon line and finished with a thin outline.",
    "The 9,000-stitch file keeps the lettering as the hero element, with wide satin columns for the main words and a smaller secondary line underneath.",
    "Pull compensation has been set for stretchy fabrics so the wide format stays straight on t-shirts and hoodies without bowing.",
    "A good fit for beach and lake merchandise, cafe uniforms and lifestyle brands that want a relaxed, positive message.",
    "A thin satin border runs around the full rectangle so the patch can be cut and merrowed, or stitched straight onto the garment with the border acting as the edge.",
  ].join(" "),
  "chase-the-sun-patch": [
    "Chase The Sun Patch is a round 3 x 3 inch design with a radiating sun motif at the center and the phrase Chase The Sun curved around the top edge.",
    "The 8,000-stitch count makes it a fast sew, and the sun rays are digitized as tapered satin columns that catch the light for a bright, optimistic look.",
    "The small format fits cap fronts, sleeves, beanies and the corner of tote bags, and the single-color version is popular for tonal designs.",
    "It is often bought together with Life Is Better and Happy Place for a summer-themed collection.",
    "We left a generous gap between the ray tips and the outer ring so the design can also be run without the ring as a stand-alone sun motif.",
  ].join(" "),
  "love-heart-patch": [
    "Love Heart Patch is a 3 x 3 inch romantic design with a filled heart at the center, a delicate vine border and the word Love in a flowing script across the heart.",
    "At about 8,000 stitches it uses a smooth tatami fill for the heart and narrow satin for the vine and script, giving it a soft, embroidered-by-hand feel.",
    "Density has been reduced slightly to keep the heart flexible on lightweight fabrics such as jersey and cotton tees.",
    "Ideal for couples apparel, wedding favors, Valentine gifts, denim jackets and pouches.",
    "The script lettering is sized at just over 4 mm in height, which is the minimum we recommend for clean satin text, so it stays readable after washing.",
  ].join(" "),

  // --- Gaming ------------------------------------------------------------
  "dad-by-day-gamer-by-night": [
    "Dad By Day Gamer By Night is a 4 x 4 inch badge featuring a retro game controller in the center with pixel-style stars and the two-line slogan stacked above and below.",
    "The 18,000-stitch file gives the controller a solid fill with satin highlights on the buttons and uses a chunky arcade-inspired font for the text.",
    "Thread breaks are minimised with a clean stitch path that runs the controller first and finishes the lettering last, so there are few trims.",
    "A popular gift design for dads, and a strong seller on hoodies, caps and hook-and-loop patches for gaming chairs and bags.",
  ].join(" "),
  "search-rescan-patch": [
    "Search Rescan Patch is a 3.5 x 2.5 inch rectangular badge inspired by in-game HUD prompts, with the words Search and Rescan set in a tech-style font beside a radar icon.",
    "The 13,000-stitch file uses sharp satin lettering and a fine running-stitch grid for the radar rings so the detail stays clean at this scale.",
    "It is digitized for twill patch blanks and hook-and-loop backing, which is how most gaming and tactical-style morale patches are produced.",
    "Suits gamer streetwear, morale patches, laptop sleeves and backpacks.",
    "The two-colour layout keeps colour changes to one stop, so a multi-head shop can run a full batch of morale patches in a single short cycle.",
  ].join(" "),

  // --- Motivational ------------------------------------------------------
  "endeavour-patch": [
    "Endeavour Patch is a 3.5 x 2.5 inch design built around a single bold word, Endeavour, in extended capitals with a small laurel detail underneath.",
    "At 11,000 stitches the wide satin columns are backed with a double underlay, so the letters sit high and even on heavy fabrics like canvas and denim.",
    "The simple layout also makes it easy to run as a tonal design or in a two-color combination to match team or company branding.",
    "Used by sports teams, startups and fitness brands for jackets, caps and bags.",
    "At 3.5 inches wide it also fits the front of a structured cap when rotated to the standard 2.25 inch cap height, and we include a cap-sized version in the ZIP.",
  ].join(" "),
  "home-of-hustle-patch": [
    "Home Of Hustle Patch is a 3.5 x 2.5 inch rectangular badge with Home Of Hustle in condensed capitals, a thick border and a small lightning accent.",
    "The 12,000-stitch file is designed for workwear and durable fabrics, with a dense fill behind the text that gives the patch a solid, premium feel.",
    "Satin edges are compensated for thick twill and the design has been test-sewn on work jackets and heavy caps.",
    "A good fit for trades businesses, gyms, barbershops and side-hustle merchandise.",
    "The lightning accent and border share one colour, so the whole patch can be run in two thread colours, keeping production cost down on large uniform orders.",
  ].join(" "),
  "mentally-strong-patch": [
    "Mentally Strong Patch is a 4 x 3 inch badge pairing bold stacked lettering with a stylised brain and lightning icon inside a rounded shield.",
    "This is the densest patch in the store at about 20,000 stitches, with a full tatami background, satin lettering and detailed inner line work for the icon.",
    "We used a tack-down underlay and slightly reduced top-fill density so the shield stays flat and does not pucker on fleece or hoodie fabric.",
    "It is popular with mental health campaigns, fitness communities and schools building resilience-themed merchandise.",
    "The ZIP also contains a lighter 14,000-stitch version with the background fill removed for shops that want a faster run on caps and tees.",
  ].join(" "),

  // --- Fun & Unique ------------------------------------------------------
  "gumshoe-detective-patch": [
    "Gumshoe Detective Patch is a playful 3 x 3 inch badge of a trench-coated detective with a magnifying glass, framed by a circular border and the word Gumshoe in vintage lettering.",
    "The 10,000-stitch file keeps the character detail simple so it stays readable at this size, using a fill for the coat and satin for the hat brim and lens ring.",
    "Color changes are kept to a minimum to speed up production on single-head home machines as well as commercial multi-heads.",
    "A fun pick for escape rooms, book clubs, mystery-themed events and denim jackets.",
    "The 3 inch size matches standard circular patch blanks, so it can be sewn straight onto pre-cut merrowed twill without resizing.",
  ].join(" "),
  "paranormal-patch": [
    "Paranormal Patch is a 3.5 x 3.5 inch spooky design featuring a ghost silhouette, a crescent moon and the word Paranormal in a dripping horror-style font.",
    "At 14,000 stitches the design uses a dark fill background with contrast satin lettering, which gives it a glow-in-the-dark look when sewn with high-visibility thread.",
    "The ghost outline is digitized as a smooth satin so the curves stay even on twill patch blanks.",
    "Sells well for Halloween apparel, paranormal podcasts, ghost tours and horror fan merchandise.",
    "The dripping lettering is digitized with tapered satin ends so the drips look intentional rather than ragged, even at 3.5 inches.",
  ].join(" "),

  // --- Community / Travel ------------------------------------------------
  "people-safety-patch": [
    "People Safety Patch is a 3 x 3 inch awareness badge showing two figures inside a protective shield outline with the words People Safety across the base.",
    "The 11,000-stitch file is intentionally clean and high-contrast, using a solid shield fill and satin figures so the message reads instantly from a distance.",
    "It is digitized for uniform fabrics such as poly-cotton twill, hi-vis vests and work shirts, with a stable underlay for repeated washing.",
    "Suitable for community groups, event stewards, security teams and workplace safety programs.",
    "The two-colour layout is intentional: it keeps the patch cheap to produce in volume for events where hundreds of stewards need to be identified at a glance.",
  ].join(" "),
  "veracruz-patch": [
    "Veracruz Patch is a 4 x 4 inch travel souvenir design inspired by the Mexican port city, with a palm tree, sun and waves inside a circular frame and Veracruz set along the border.",
    "At 17,000 stitches the design uses rich fills for the sea and sun and satin lettering for the city name, giving it a classic sew-on souvenir look.",
    "Density is tuned for cotton twill and denim, and the border satin gives a finished edge when stitched directly onto garments or bags.",
    "A good fit for travel collections, tourist shops and anyone building a map of places they have been on a jacket or backpack.",
  ].join(" "),

  // --- Bundles -----------------------------------------------------------
  "70-patches-pack-1": [
    "70 Patches Pack Vol. 1 bundles seventy of our adventure and outdoor patch designs into a single download, including mountain badges, camping scenes, trail slogans and wildlife silhouettes.",
    "Every file in the pack is punched by hand and test-sewn before release, with stitch counts ranging from quick 6,000-stitch cap designs to full 20,000-stitch jacket badges.",
    "Each design ships in DST, PES, EXP, JEF and VP3, along with a size variation guide, thread color charts and application instructions.",
    "The pack is a cost-effective way for a patch maker or embroidery shop to stock a complete outdoor collection in one purchase, and the commercial license lets you sell finished patches and garments.",
  ].join(" "),
  "100-patches-mega-pack": [
    "100 Patches Mega Pack is our largest mixed collection, with one hundred patch designs spanning typography, animals, logos, floral, travel and retro styles.",
    "It is aimed at shops that want breadth: enough variety to fill a marketplace storefront or a trade-show rack without buying designs one at a time.",
    "Files are delivered in seven formats, DST, PES, EXP, JEF, HUS, VP3 and XXX, so the pack covers commercial Tajima and Barudan heads as well as Brother, Janome and Husqvarna home machines.",
    "The purchase includes source files where available, free updates as new designs are added to the collection and priority email support.",
  ].join(" "),
  "70-patches-pack-3": [
    "70 Patches Pack Vol. 3 is the newest volume in the series and focuses on trending styles: sports mascots, varsity lettering, bold slogans and modern line-art badges.",
    "The designs were digitized with multiple hoop sizes in mind, so most include a small cap-friendly version alongside the full-size patch.",
    "Each file ships in DST, PES, EXP, JEF and VP3 with a hoop size guide, color palette recommendations and a stabilizer guide for different fabrics.",
    "If you already own Vol. 1, this pack adds a completely different set of designs with no overlap.",
    "The volume also includes a spreadsheet listing every design with its size, stitch count and colour count, so you can quote customers before you sew.",
  ].join(" "),
  "50-patches-starter-pack": [
    "50 Patches Starter Pack is built for shops and hobbyists just getting into patch production, with fifty beginner-friendly floral and nature designs that run cleanly on standard hoops.",
    "Stitch counts are kept moderate and color changes are limited, which makes the files forgiving on single-needle home machines and fast on commercial heads.",
    "The pack includes a starter tutorial PDF covering hooping, stabilizer choice and thread tension, plus a basic size guide and thread chart.",
    "Files are supplied in DST, PES, EXP, JEF and VP3 with a standard commercial license for finished goods.",
    "If you outgrow it, the designs do not overlap with the 70 Patches packs, so upgrading later adds new work rather than duplicates.",
  ].join(" "),
  "50-patches-value-pack": [
    "50 Patches Value Pack is a curated set of our fifty most popular designs, drawn from the gaming, pop-culture, slogan and lifestyle categories that sell best in the store.",
    "Because these are proven sellers, the pack is a safe first order for a new patch business or an Etsy shop that wants a ready-made catalog.",
    "Each design is supplied in DST, PES, EXP, JEF and VP3 with an application guide, a fabric recommendation guide and a list of the designs included.",
    "All files are hand-digitized and test-sewn, and the commercial license covers caps, jackets, bags and finished patches.",
    "Most designs are 3 to 4 inches and sew in under 15 minutes on a commercial head, which keeps turnaround short for marketplace orders.",
  ].join(" "),
  "100-patches-ultimate-pack": [
    "100 Patches Ultimate Pack is our flagship commercial bundle: one hundred patch designs covering every category in the store, intended for established embroidery businesses and contract patch makers.",
    "It differs from the Mega Pack by including source files where available, a lifetime update guarantee and priority support, so it works as a long-term design library rather than a one-off purchase.",
    "Files ship in DST, PES, EXP, JEF, HUS, VP3 and XXX, which covers virtually every commercial and home machine on the market.",
    "Designs range from compact 3-inch cap badges to full-size 4-inch jacket patches, each tested on twill and denim before release.",
  ].join(" "),
};
