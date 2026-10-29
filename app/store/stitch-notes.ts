/**
 * Per-product stitch-out notes shown on /store/[slug] under the About copy.
 *
 * Each entry is hand-written for that specific design (its size, stitch
 * count, motif and intended fabric) so no two store pages share the same
 * production guidance. Keyed by slug; items without an entry simply do not
 * render the section.
 */
export type StitchNotes = {
  /** Fabrics and blanks the file was tuned and test-sewn for. */
  fabric: string;
  /** Thread weight, colour count and palette guidance. */
  thread: string;
  /** Where the design sits best on a garment or accessory. */
  placement: string;
  /** One production tip specific to this file. */
  tip: string;
};

export const STORE_STITCH_NOTES: Record<string, StitchNotes> = {
  // --- Adventure ---------------------------------------------------------
  "hike-more-worry-less": {
    fabric:
      "Tuned for 10 oz cotton twill patch blanks, canvas backpack lids and mid-weight denim. On fleece, add a water-soluble topping so the ridge detail does not sink.",
    thread:
      "Four colours of 40 wt polyester: a navy sky, forest green peaks, a grey ridge line and white ring text. The whole 15,000-stitch run has three colour stops.",
    placement:
      "Backpack lid, upper back of a shell jacket, or the thigh pocket of hiking trousers. The 4 inch circle is too large for a cap front; use Stay Wild there instead.",
    tip:
      "The curved ring text runs last. Hoop with a 2.5 oz cutaway and keep the fabric drum-tight so the letter spacing stays even around the full circle.",
  },
  "wild-adventure-patch": {
    fabric:
      "Test-sewn on twill blanks, heavyweight cotton and canvas tote bags. The lighter sky fill keeps the 3.5 inch patch flexible on softer jacket linings.",
    thread:
      "Three colours: pine green for the treeline, a warm sunset orange for the sun and cream for the banner text. A tonal single-colour version also reads well on dark twill.",
    placement:
      "Corner of a canvas tote, chest of a field jacket or the side panel of a trucker cap. Pairs with Hike More Worry Less and Stay Wild as a three-piece outdoor set.",
    tip:
      "Drop the machine to around 650 stitches per minute for the banner satin on canvas. The wide columns pull cleaner at that speed and the banner edges stay straight.",
  },
  "stay-wild-patch": {
    fabric:
      "Built for knit caps, beanies and soft cotton where a dense 4 inch badge would stiffen the fabric. Also runs well on sleeve placements of lightweight shirts.",
    thread:
      "One or two colours. Most customers run the hand-drawn lettering in cream or white and the mountain icon in a contrasting earth tone.",
    placement:
      "Cap front, beanie cuff, shirt sleeve, backpack strap or a small denim pocket. At 3 inches it fits a standard 4 x 4 hoop with room to spare.",
    tip:
      "Use a cap frame and a 75/11 ballpoint needle on knits. The centre-walk underlay is already in the file, so no extra stabiliser layers are needed beyond a light cutaway.",
  },
  "explore-the-path": {
    fabric:
      "Digitized for twill, denim and canvas. The layered trail fills are dense enough for merrowed patch blanks but still sit flat on a denim jacket when stitched direct.",
    thread:
      "Three earth tones: a dark trail brown, a mid green for the hills and a sand colour for the peaks and title. The included colour sheet lists the exact stop order.",
    placement:
      "Travel duffel, hiking club jacket chest, camper van cushion or the back of an overlanding vest. The circular border gives it a finished badge look anywhere.",
    tip:
      "Run the trail and hill fills before the satin ring. If the ring goes first on stretchy fabric, the fills can push it out of round by a millimetre or two.",
  },
  "find-your-path-patch": {
    fabric:
      "Light enough at 9,000 stitches for cap fronts, lightweight cotton shirts and the hip pockets of hiking packs without any stiffening.",
    thread:
      "Two colours: a dark navy or black for the compass points and ring, and white or gold for the centre medallion and motto.",
    placement:
      "Sleeves, cap fronts, pen pockets and hoodie chests. Because the compass rose is symmetrical, it looks correct mirrored on left and right sleeves.",
    tip:
      "Mirror the file in your software for the left sleeve rather than rehooping the garment upside down. The motto arc stays readable either way.",
  },
  "adventure-awaits-patch": {
    fabric:
      "Made for fleece, canvas and jacket back panels. The 16,000-stitch fill is saturated, so it is best on fabrics that can carry weight rather than on tees.",
    thread:
      "Four colours: a sunrise orange, a mountain blue, a treeline green and bold white or cream for the block capitals.",
    placement:
      "Jacket back panel, large duffel bag, blanket corner or the front of a hoodie. The outer satin border lets it be stitched direct without a merrowed edge.",
    tip:
      "On fleece, pair a 2.5 oz cutaway with a water-soluble topping. The tack-down underlay is built in, so the block lettering sits on top of the pile instead of in it.",
  },
  "wild-spirit-patch": {
    fabric:
      "Test-sewn on twill, denim and flannel. The fur shading relies on changing fill angles, which show best on a smooth, stable woven.",
    thread:
      "Five colours: three greys for the wolf, black for the pines and outline, and a pale yellow for the moon. The design still reads in two colours if you simplify.",
    placement:
      "Biker jacket back, flannel shirt back yoke, denim jacket chest or a large morale patch for a motorcycle bag.",
    tip:
      "Use a sharp 75/11 needle on denim and drop top tension slightly. The 19,000-stitch count is dense, so slower speed and a sharp point keep the fur detail crisp.",
  },

  // --- Lifestyle ---------------------------------------------------------
  "happy-place-patch": {
    fabric:
      "Digitized for sweatshirts, tees and soft cotton. The light sky fill and narrow script are chosen so the scene does not pucker on knits.",
    thread:
      "Four colours: a cabin brown, pine green, a soft blue sky and a script colour such as cream or gold.",
    placement:
      "Left chest of a sweatshirt, corner of a tote or the front of a camping blanket. Also works as a sew-on patch for a cabin guest book bag.",
    tip:
      "On tees use a no-show mesh cutaway and a 75/11 ballpoint. The script lettering has connecting running stitches, so avoid tearaway that can let the letters sink.",
  },
  "keep-it-simple-patch": {
    fabric:
      "Aprons, uniform shirts, workwear and caps. At 6,000 stitches it is light enough for even thin poplin without a heavy backing.",
    thread:
      "A single colour. Tonal embroidery (navy on navy, black on black) is the most popular way to run it for a subtle workwear look.",
    placement:
      "Pocket, sleeve, cap side panel or the back neck of a shirt. Scales down to 2.5 inches cleanly for pen pockets and small labels.",
    tip:
      "Do not scale below 2.5 inches wide. Under that the satin columns on the capitals get narrower than 1 mm and start to look like running stitches.",
  },
  "life-is-better-patch": {
    fabric:
      "Tees, hoodies and lightweight jersey. Pull compensation in the file is set for stretch, so the 4 x 2 inch format stays straight on knits.",
    thread:
      "Three colours: a main lettering colour, a sun and horizon colour, and a thin outline. Cream, gold and navy is the combination we test with.",
    placement:
      "Across the chest, on a cap back arch or along the hem of a beach tote. The landscape shape suits any horizontal placement.",
    tip:
      "Hoop the fabric straight along the grain. A wide, short design like this shows any twist in hooping as a slight bow in the top line of text.",
  },
  "chase-the-sun-patch": {
    fabric:
      "Beanies, caps, lightweight cotton and the corner of a tote. The 8,000-stitch count is one of the quickest runs in the store.",
    thread:
      "Two colours: gold or orange for the rays and white or navy for the curved text. The single-colour tonal version is popular on summer caps.",
    placement:
      "Cap front, beanie, shirt sleeve or a small pocket patch. The 3 inch round fits a standard cap frame.",
    tip:
      "The gap between the ray tips and the outer ring is deliberate, so you can delete the ring in your software and run the sun on its own as a stand-alone motif.",
  },
  "love-heart-patch": {
    fabric:
      "Jersey, cotton tees, denim and canvas pouches. Density is reduced slightly so the filled heart stays soft on lightweight fabric.",
    thread:
      "Three colours: red or pink for the heart, a vine green and white or cream for the script. Running it all in one colour on denim also looks good.",
    placement:
      "Left chest, denim jacket lapel, a wedding favour bag or a small zip pouch. Pairs well on matching couples apparel.",
    tip:
      "The script sits at just over 4 mm tall. If you want it finer, switch to 60 wt thread and a 65/9 needle rather than scaling the whole patch down.",
  },

  // --- Gaming ------------------------------------------------------------
  "dad-by-day-gamer-by-night": {
    fabric:
      "Hoodies, caps and hook-and-loop patch blanks. The controller fill is solid, so it is happiest on fleece, twill or heavy cotton.",
    thread:
      "Four colours: a controller body colour, button highlights, a star colour and a bold lettering colour. Black, red, yellow and white is the classic arcade set.",
    placement:
      "Hoodie chest, gaming bag, cap front at the included smaller size, or a hook-and-loop patch for a gaming chair headrest.",
    tip:
      "The stitch path finishes the lettering last with very few trims. On a hook-and-loop blank, use a tearaway and tape the loop side down so the blank does not shift.",
  },
  "search-rescan-patch": {
    fabric:
      "Twill patch blanks and hook-and-loop backing, which is how most morale patches are made. The fine radar grid needs a smooth woven to stay clean.",
    thread:
      "Two colours with a single colour stop. Neon green or orange on black twill gives it the in-game HUD look.",
    placement:
      "Laptop sleeve, backpack panel, tactical vest or the side of a gaming bag. The 3.5 x 2.5 inch rectangle also fits a cap side panel.",
    tip:
      "Because there is only one colour change, a multi-head shop can batch a full set of morale patches in one short cycle. Keep the radar rings at the file's native size.",
  },

  // --- Motivational ------------------------------------------------------
  "endeavour-patch": {
    fabric:
      "Canvas, denim and structured caps. The double underlay under the wide capitals is designed for heavy fabrics that would otherwise swallow a satin column.",
    thread:
      "One or two colours. Team or company branding usually runs the word in a brand colour with the laurel in a neutral grey.",
    placement:
      "Cap front using the included cap-sized version, jacket chest, gym bag or the back of a training vest.",
    tip:
      "Use an 80/12 sharp needle on canvas. The wide satin columns benefit from a slightly larger needle hole so the thread lays flat rather than piling.",
  },
  "home-of-hustle-patch": {
    fabric:
      "Work jackets, heavy caps and thick twill. The dense fill behind the text is meant for durable fabric and would be too heavy for tees.",
    thread:
      "Two colours: the lightning accent and border share one colour, and the condensed capitals take the other. Black and gold is the most ordered pairing.",
    placement:
      "Chest of a work jacket, cap front, apron bib or the sleeve of a barber smock.",
    tip:
      "Pair a heavy cutaway with a slower speed of about 600 stitches per minute. The background fill is dense, and running it fast on thick twill can cause skipped stitches.",
  },
  "mentally-strong-patch": {
    fabric:
      "Fleece and hoodie fabric first, then twill. The tack-down underlay and reduced top density keep the full-background shield flat on pile fabrics.",
    thread:
      "Four colours: a shield background, a contrasting lettering colour, a brain icon colour and a lightning accent. Navy, white, pink and yellow is the sample palette.",
    placement:
      "Hoodie chest, back of a sweatshirt, gym bag or a large sew-on patch for a jacket. For caps use the lighter version.",
    tip:
      "The ZIP includes a 14,000-stitch version with the background removed. Use that on caps and tees, and the full 20,000-stitch shield on fleece and jackets.",
  },

  // --- Fun & Unique ------------------------------------------------------
  "gumshoe-detective-patch": {
    fabric:
      "3 inch circular twill blanks, denim and canvas. The character detail is simple enough to stay readable on textured twill.",
    thread:
      "Four colours: a tan or beige coat, a brown hat, black for the outline and magnifier, and cream for the vintage lettering.",
    placement:
      "Denim jacket chest, tote bag, escape room staff shirts or a book bag. The circular border matches pre-cut merrowed blanks exactly.",
    tip:
      "The design is sized to standard 3 inch circular patch blanks, so sew straight onto a pre-cut blank without resizing. Colour changes are minimal, so it runs well on home machines.",
  },
  "paranormal-patch": {
    fabric:
      "Twill blanks and black hoodies. The dark background fill is designed to sit under high-contrast or glow-in-the-dark thread.",
    thread:
      "Two or three colours. White or glow-in-the-dark thread for the ghost and lettering over a black or deep purple fill gives the strongest effect.",
    placement:
      "Hoodie chest, cap front, Halloween tote or a sew-on patch for a ghost tour jacket.",
    tip:
      "Glow-in-the-dark thread is thicker than standard polyester. Use a 90/14 needle, slow the machine down and lower top tension so the dripping satin ends stay tapered.",
  },

  // --- Community / Travel ------------------------------------------------
  "people-safety-patch": {
    fabric:
      "Poly-cotton twill, hi-vis vests and work shirts. The stable underlay is built for garments that go through industrial washing.",
    thread:
      "Two high-contrast colours: a dark shield with white figures and text, or white on a hi-vis background. Keeping it to two colours keeps volume runs cheap.",
    placement:
      "Sleeve, vest chest, steward armband or the back of a safety jacket. The 3 inch size is readable from several metres away.",
    tip:
      "On a hi-vis mesh vest use a tearaway with a 75/11 needle and hoop the vest with a layer of cutaway underneath, since the mesh alone will not hold the shield fill.",
  },
  "veracruz-patch": {
    fabric:
      "Cotton twill and denim. The rich sea and sun fills are tuned for mid-weight woven fabric where they can lay flat without puckering.",
    thread:
      "Five colours: sea blue, a sun yellow, palm green, a trunk brown and white or cream for the city name along the border.",
    placement:
      "Jacket back, backpack panel, travel duffel or as part of a map-of-places collection on a denim jacket.",
    tip:
      "Run the colours in the order sea, sun, palm, then text. The border satin acts as the finished edge if you stitch direct onto a garment instead of making a cut patch.",
  },

  // --- Bundles -----------------------------------------------------------
  "70-patches-pack-3": {
    fabric:
      "The mascot and varsity designs are tested on twill and heavy cotton, while the line-art badges are light enough for tees and caps. The included stabiliser guide lists a backing for each design.",
    thread:
      "Colour palettes are recommended per design in the pack notes. Most mascots use four to six colours, and the slogan badges are one or two.",
    placement:
      "Most designs include a small cap-friendly version alongside the full-size patch, so you can run the same artwork on a cap and a jacket as a matching set.",
    tip:
      "Use the included spreadsheet of sizes, stitch counts and colour counts to quote customers before you sew. It saves opening every file to check run time.",
  },
  "100-patches-ultimate-pack": {
    fabric:
      "Every design in the pack is test-sewn on twill and denim before release. Cap-sized badges are also checked on structured caps.",
    thread:
      "Designs range from single-colour text badges to six-colour illustrations. Each file ships with its thread chart so you can match colours before production.",
    placement:
      "Sizes run from compact 3 inch cap badges to full 4 inch jacket patches, covering caps, jackets, bags, uniforms and sew-on patches.",
    tip:
      "Organise the library by the category folders in the ZIP and keep the source files separate. With lifetime updates, new designs arrive in the same folder structure.",
  },
};
