# Manual SERP review - started 9 November 2026

Method: the owner searches each target keyword in a browser (US results, Virginia location, signed out) and pastes the results page. Each entry records who ranks, SERP features, a verdict on whether Velora can rank, and the changes that follow. Changes are collected in the action list at the bottom and applied in batches.

Keyword list and volumes come from `SEO_KEYWORD_RESEARCH_2026-11-01.md`. Site context: domain registered 5 July 2026, about 4 referring domains, service pages not yet indexed (see `reports/service-indexing/FINDINGS.md`).

Verdict scale:
- **Rankable now**: weak page 1, realistic within 1-3 months with on-page work.
- **Rankable later**: page 1 has small or mid sites, realistic in 6-9 months with links and authority.
- **Hard**: page 1 locked by major brands, marketplaces or aggregators; target the long tail instead.
- **Skip**: intent does not match what Velora sells.

---

## 1. embroidery digitizing service (720 / KD 20) - Homepage

Reviewed: 9 Nov 2026, US (Virginia), signed out.

**Verdict: Rankable later.** Not top 10 now. Target position 20-30 within 3 months, top 10 in 6-9 months. Page 1 is not brand-locked, but the small sites holding it are 10-20 years old.

**Who ranks on page 1**
- ThreadArt (supplier, custom digitizing product page, "$4 per 1,000 stitches")
- Etsy listing (custom digitizing service, 25 years claim)
- PRO digitizing (prodigitizing.com, "from $15", sitelinks)
- YouTube: Embroidery Legacy, "What every embroiderer should know about embroidery digitizing" (8:10, 6.5K views)
- Digitizing Ninjas ("$10 for any cap and chest logo", 20 years claim)
- Rider Tack (ecommerce product page)
- Sassy Digitizing blog: "Top 10 Embroidery Digitizing Companies in USA (2026)", published 23 Oct 2026
- EmbroideryDesigns.com custom digitizing page
- Images block: DigitEMB, ThreadArt, digitizingcompany.com

**SERP features**
- AI Overview present. Cites PRO digitizing, Digitizing Ninjas, ThreadArt, DigitEMB, YouTube. Structure: definition, popular options, key factors (manual vs auto, file formats by machine brand, turnaround and revisions), then local Virginia shops.
- Local pack / knowledge panel: Crystal Digitizing Service (Manassas, VA) ranks with 1 Google review. GBP is a strong signal for this query.
- People also ask: How much does it cost to digitize embroidery? / Can ChatGPT digitize images for embroidery? / What is the best embroidery digitizing service in the USA? / How do I digitize my own embroidery files?
- People also search for: best embroidery digitizing service, custom embroidery digitizing service, embroidery digitizing services near me, embroidery digitizing services online, top 10 embroidery digitizing companies, embroidery digitizing services in USA.

**Observations**
- Competitor titles lead with price ("Flat Rate from $15", "$10"). Velora starts at $6.99 and the homepage title does not say so.
- A small site ranks on page 1 with a "Top 10 companies 2026" listicle. Velora already has `/blog/best-online-embroidery-digitizing-services-comparison-guide`.
- AI Overview content matches what the homepage quick-reference section already covers (manual punching, formats, turnaround). Citation is a more realistic near-term goal than organic top 10.
- Velora not visible on page 1 (previous GSC position for related terms: 77-79).

**Actions from this keyword**
- A1. Homepage title: add price and manual positioning, e.g. "Embroidery Digitizing Service | Manual Digitizing from $6.99 | Velora". File: `app/layout.tsx` metadata title.
- A2. Rewrite the comparison guide as "Top 10 Embroidery Digitizing Companies in USA (2026)": real companies, real published prices, transparent criteria, Velora listed honestly. File: `app/blog/content/best-online-embroidery-digitizing-services-comparison-guide.ts`.
- A3. Add FAQ "Can ChatGPT digitize images for embroidery?" with a direct two-sentence answer, on the homepage FAQ and in the manual-vs-AI guide.
- A4. Create Etsy and Fiverr service listings linking to the site (off-page, owner task).
- A5. Google Business Profile only if the business address is real and can receive a verification postcard. Do not create one with an unverified address.
- A6. Fix delivery-time contradiction: homepage hero says "Delivery within 8-24 hours"; `app/components/pricing-data.ts` Basic plan says "24 to 48 hour delivery". Owner to confirm which is true, then align homepage, pricing page and FAQ text.

---

## 2. best embroidery digitizing service (140 / KD 59) - comparison guide

Reviewed: 9 Nov 2026, US (Virginia), signed out.

**Verdict: Hard for a self-promotional page. Rankable later only through an honest listicle.** Confirms P3 priority from the research. The query is answered by community opinion, not vendor pages.

**Who ranks on page 1**
- Reddit r/Machine_Embroidery: "Need recommendation for commercial digitizing services" (60+ comments) plus two more threads grouped under it
- Sassy Digitizing: "Top 10 Embroidery Digitizing Companies in USA (2026)" (same post as keyword 1)
- Digitizing Ninjas homepage
- Local pack with three businesses: Crystal Digitizing Service (5.0, 1 review), Absolute Digitizing (4.9, 79 reviews, Astoria NY), Crystal Digitizing (3.0, 2 reviews)
- Embroidery Legacy homepage
- PRO digitizing homepage
- Eagle Digitizing blog: "Best embroidery digitizing services in USA (2025 Guide)"
- Video block: Embroidery Legacy review of Digitizing Buddy, two ZDIGITIZING software videos
- EmbroideryDesigns.com custom digitizing, Ink/Stitch

**SERP features**
- AI Overview opens with "there is no single universal best" and cites Facebook and Reddit threads, then names Vitor Digitizing, Absolute Digitizing, Digitizing Ninjas, PRO Digitizing, EmbroideryDesigns.com. Also lists DIY alternatives (Hatch, Embroidery Legacy).
- Local filters shown (Online appointments, Open now, Top rated), so Google treats this partly as a local-service query.
- People also search for: best embroidery digitizing service reddit, near me, top 10 companies, Vitor digitizing, Sassy Digitizing.

**Observations**
- The names Google trusts come from Reddit and Facebook group recommendations. Nobody on page 1 is a 4-month-old vendor page.
- Two competitor listicles rank (Sassy 2026, Eagle 2025). Listicle format is the only realistic entry route.
- Review count matters in the local pack: 79 reviews beats 1 review on position, though both appear.

**Actions from this keyword**
- A2 (already listed) gains priority: the Top 10 listicle targets keywords 1 and 2 at once.
- A7. Reputation work in r/Machine_Embroidery, r/MachineEmbroidery and the Ricoma / Hatch Facebook groups: answer technical questions under the Velora name without self-promotion for the first weeks. Only genuine recommendations by other members move this query. Owner task, ongoing.
- A8. Collect real client reviews with permission and publish them on a review platform Google reads (Google Business Profile if A5 clears, otherwise Trustpilot or Facebook page reviews). Do not invent reviews.

---

## 3. embroidery digitizing cost (20 / KD n/a) - /blog/embroidery-digitizing-cost-pricing-guide and /pricing

Reviewed: 9 Nov 2026, US (Virginia), signed out.

**Verdict: Rankable now.** Best opportunity reviewed so far. Page 1 is mostly small digitizing sites' pricing pages and blog posts, including a Sassy Digitizing post published about a week before this review that already sits in the AI Overview. The tool's 20 volume understates demand: the SERP has a Reddit thread with 50+ comments and three YouTube videos on price.

**Who ranks on page 1**
- Reddit r/MachineEmbroidery: "How much is digitizing rates these days?" (50+ comments) plus two grouped threads
- EmbroideryDesigns.com custom digitizing (prices $10-$25 small, $25-$50 medium)
- Impact Digitizing blog: "Embroidery Digitizing Pricing Guide For The USA Market" (Mar 2026)
- Hatch Embroidery pricing page
- 1Dollar Digitizing homepage ($1 per 1,000 stitches, $6 minimum)
- Video block: ZDIGITIZING software under $300, Printeez "Stop paying digitizing fees twice", ZDIGITIZING "Why digitizing prices vary"
- Wild Kard Vintage product page (digitizing fee)
- Qdigitizing pricing page ($25 left chest, $75 jacket back)
- Migdigitizing homepage (from $8)
- Sassy Digitizing: "How Much Does Embroidery Digitizing Cost?" (published 7 days before review)

**SERP features**
- AI Overview gives concrete ranges: $10-$30 standard left chest or cap, $30-$100 jacket back, per-stitch $1-$3 per 1,000, one-time fee and file ownership, resize over 10-20% needs re-digitizing, specialty effects cost more. Cites Sassy Digitizing, Capital Digitizing, Corporate Casuals, Printful, EmbroideryDesigns.com.
- People also ask: Can I digitize embroidery for free? / How hard is it to digitize for embroidery? / What is the current on-going price per 1000 stitches for embroidery? / What is the most affordable digitizing software for embroidery?
- People also search for: machine embroidery digitizing cost, embroidery digitizing cost reddit, embroidery digitizing free online.

**Observations**
- Google rewards pages that state numbers in the first paragraph. The AI Overview lifted Sassy's opening sentence almost verbatim.
- Velora's $6.99 to $19.99 flat plans are below every price quoted on page 1 except 1Dollar Digitizing. The cost guide should say so plainly with a comparison table.
- Pricing pages rank here too, so /pricing can also target "embroidery digitizing prices" (keyword 18) with explicit ranges, not only plan cards.

**Actions from this keyword**
- A9. Rewrite the opening of the cost guide to answer in the first two sentences with concrete ranges (flat-rate left chest/cap, jacket back, per-1,000-stitch rates), then a comparison table of published competitor prices versus Velora plans, then sections on one-time fee and file ownership, resize and edit charges, specialty surcharges (3D puff, applique, metallic). Add FAQ entries for the four People-also-ask questions. File: `app/blog/content/embroidery-digitizing-cost-pricing-guide.ts`.
- A10. On /pricing add a short "typical market rates" paragraph with the same ranges and a sentence on what is and is not included, so the page can rank for price queries rather than only convert.
- A11. Make sure the cost guide and /pricing link each other in the first screen.

---

## 4. how to digitize a logo for embroidery in illustrator (40 / KD 21) - /blog/digitize-logo-illustrator-embroidery

Reviewed: 9 Nov 2026, US (Virginia), signed out.

**Verdict: Rankable later (3-6 months), good odds.** Page 1 contains several small-site blog posts, one of them published Sep 2026 by a small digitizer (embroiderydigitizerart.com). Velora's post already received impressions at position 79 in October, so Google has it mapped to this query.

**Who ranks on page 1**
- Eagle Digitizing blog: "How do I convert an illustrator file to embroidery?" (Dec 2022)
- DRAWings Embroidery Software knowledge base (Feb 2026)
- Video block: Tajima Software "Embroidery i2 full design digitizing" (36 min, 10 key moments), David Kabra, Cap Swag TV "Digitizing in Adobe Illustrator CS5 Embroidery i2 plugin", DRAWstitch
- Quora: "How do I digitize a logo for embroidery in Illustrator?" (30+ answers) plus grouped threads
- stitchitquick.com blog
- Reddit r/Machine_Embroidery: "Digitizing files from Adobe Illustrator"
- Facebook Hatch Embroidery User Group threads
- embroiderydigitizerart.com: "How to Digitize a Logo for Embroidery in Illustrator | DST Studio" (Sep 2026)
- YouTube Sticker Status: vectorize any logo in Illustrator

**SERP features**
- AI Overview is long and self-contained with no vendor citations. Its structure: Illustrator cannot create DST/PES; Step 1 prepare in Illustrator (create outlines, simplify paths, Pathfinder unite, check at actual size, outline stroke); Step 2 export EPS/AI/SVG; Step 3 convert in Wilcom/Hatch/Embird/PE-Design, or Illustrator plugin (Embrilliance StitchArtist, Graphtec), or free Ink/Stitch.
- People also ask: Can you digitize embroidery in Illustrator? / How can I digitize my logo for embroidery? / Can I get a logo convert to an embroidery file? / Is there a free AI digitizer for embroidery?
- People also search for: ...in illustrator free, ...mac, embroidery i2, embroidery i2 for Adobe Illustrator, embroidery brush Illustrator, AI embroidery digitizer free.

**Observations**
- The winning answer starts with "Illustrator cannot directly create embroidery files". Velora's post should open with that sentence, then mirror the three-step structure with more practical detail than the AI Overview (actual size check, minimum text height, stroke to fill, overlap removal).
- "Embroidery i2" (Tajima plugin for Illustrator) appears in videos and related searches and is missing from Velora's post. Mentioning i2, Embrilliance StitchArtist and Ink/Stitch covers the plugin intent.
- The post must still end with the honest option: send the EPS to a digitizer.

**Actions from this keyword**
- A12. Restructure the Illustrator guide: direct answer in the first paragraph, three-step structure (prepare, export, digitize), a short section on Illustrator plugins (Embroidery i2, Embrilliance StitchArtist) and the free Ink/Stitch route, FAQ for the four People-also-ask questions, keep the existing exact-match FAQ. Add the Mac/free modifiers naturally in the text. File: `app/blog/content/digitize-logo-illustrator-embroidery.ts`.
- A13. Consider a 5-8 minute screen-recorded YouTube video of the Illustrator prep steps, embedded in the post and linking back. Video results take four slots on this SERP. Owner task.

---

## 5. how to digitize a logo for embroidery (260 / KD 31) - general tutorial intent

Reviewed: 9 Nov 2026, US (Virginia), signed out.

**Verdict: Hard for top 3, rankable later for positions 6-15.** Embroidery Legacy owns the top with three YouTube videos, a Jan 2026 blog post and a Facebook clip. The rest of page 1 is mixed and includes small sites (B-Sew Inn, Digitizing Ninjas, Merchology, Ink/Stitch), so a strong general guide can enter page 1 but not displace the video cluster without a video of its own.

**Who ranks on page 1**
- AI Overview citing EmbroideryDesigns.com, emberdesign.net, Ink/Stitch, Embroidery Legacy YouTube, Etsy (SewandGrew $5.99), Digitizing Ninjas, ThreadArt
- Video block: three Embroidery Legacy tutorials (Nov 2024, Sep 2025, May 2026)
- Embroidery Legacy blog: "How to Digitize a Logo for Embroidery | 5 Easy Steps" (Jan 2026)
- Ink/Stitch homepage
- B-Sew Inn blog (Sep 2025)
- Facebook: Embroidery Legacy clip, Hatch User Group threads
- Digitizing Ninjas homepage with sitelinks
- Reddit r/Machine_Embroidery: "Best way to learn how to digitize"
- Merchology decoration methods page

**SERP features**
- AI Overview structure: definition, Option 1 DIY (free tools Ink/Stitch and Ember, paid Wilcom/Hatch, five basic steps), Option 2 hire a service (Etsy, Digitizing Ninjas, ThreadArt), what to provide the digitizer.
- People also ask: How can I turn my logo into an embroidery file? / How much does it cost to digitize a logo for embroidery? / Can ChatGPT digitize images for embroidery? / How can I digitize a logo for embroidery machine?
- People also search for: ...free, ...pdf, ...in Embrilliance, digitize logo online free, embroidery digitizing software, PhotoPad.

**Observations**
- "Can ChatGPT digitize images for embroidery?" has now appeared in People also ask on three of five reviewed SERPs. Action A3 should be done first and the answer placed on a page that already ranks (manual-vs-AI guide) plus the homepage FAQ.
- The research mapped this keyword to the Illustrator post. The SERP shows a different, broader intent (DIY versus hire, free tools). The Illustrator post should keep its narrow focus; a separate general guide is needed.
- The batch-3 release plan already has `how-to-digitize-embroidery-designs` scheduled for week 4 (28 Nov). That post should be aligned to this exact keyword and structure, and could be pulled forward.
- "Free" is the dominant modifier. The existing Ink/Stitch free-software guide can take "how to digitize a logo for embroidery free" with a small title adjustment.

**Actions from this keyword**
- A14. Align the planned `how-to-digitize-embroidery-designs` post to "how to digitize a logo for embroidery": definition, DIY route with free and paid tools and the five steps, hire route with what to send, cost pointer to the cost guide, FAQ with the four People-also-ask questions. Consider releasing it in week 2 instead of week 4.
- A15. Adjust the Ink/Stitch guide title and intro to also answer "how to digitize a logo for embroidery free" without changing its URL. File: `app/blog/content/best-free-embroidery-digitizing-software-inkstitch-guide.ts`.
- A3 priority raised (see above).

---

## 6. embroidery stitch count (and "embroidery stitch count calculator", 70 / KD 2) - /blog/how-to-estimate-embroidery-stitch-count

Reviewed: 9 Nov 2026, US (Virginia), signed out.

**Verdict: Rankable later, only if the page behaves like a tool.** Page 1 is four working estimators (Monterey Company, Blankstyle, Embleo, Sabio Printing) plus explainer posts (MaggieFrames, Fabricated Customs Feb 2026, OESD, emborado). The AI Overview quotes concrete numbers: left chest 3,000-5,000, medium 6,000-9,000, large 12,000-15,000+, about 1,500-2,000 stitches per solid square inch, $1-$3 per 1,000 stitches.

**SERP features**
- People also ask: How to determine stitch count for embroidery? / What does 14, 16, 18 count cross stitch mean? (irrelevant) / How much to charge per stitch count? / Is there a free embroidery stitch count estimator available?
- People also search for: free embroidery stitch count estimator, stitch count chart, calculator, pricing, calculator app, machine embroidery pricing calculator.

**Observations**
- Velora already has a calculator component on this post and on /pricing. The current meta title is "Embroidery Stitch Count Estimator & Pricing Formula (2026)", which is close. The calculator must be in the first screen and must work without scrolling through theory first.
- Competitors let users upload artwork. Velora's calculator is dimension-based; that is fine if the page says so and gives the square-inch rule and a size chart.

**Actions from this keyword**
- A16. Move the calculator to the top of the stitch count guide, retitle toward "Embroidery Stitch Count Calculator (Free) + Size Chart", add a stitch-count-by-placement table, the 1,500-2,000 per square inch rule, a per-1,000-stitch pricing example, and FAQs for the three relevant People-also-ask questions. Verify the calculator works on mobile. File: `app/blog/content/how-to-estimate-embroidery-stitch-count.ts` and `app/components/StitchCountCalculator.tsx`.

---

## 7-9. Stabilizer cluster: embroidery stabilizer (2,900 / KD 18), cut away embroidery stabilizer (480 / KD 16), cut away stabilizer (320 / KD 10) - /blog/embroidery-stabilizer-guide-cutaway-vs-tearaway

Reviewed: 9 Nov 2026, US (Virginia), signed out.

**Verdict: Hard. Deprioritize as a primary target.** All three SERPs are shopping results: Amazon, product grids with prices, AllStitch, Sulky, Madeira, Michaels, ThreadArt, OESD, WAWAK, Brother. Informational slots are taken by YouTube (Designs By JuJu, Embroidery Library, Husqvarna, Singer), Reddit, and Embroidery Legacy's full guide. Velora does not sell stabilizer, so the research's P1 label was wrong: the tool's KD did not reflect commercial intent.

**SERP features**
- People also ask across the three: Is tear away or cut away stabilizer better? (appears twice) / What stabilizer to use for embroidery? / Do you iron on a cut away stabilizer? / How to get rid of cut away stabilizer? / Can you do embroidery without a stabilizer? / What can you use instead of stabilizer?
- People also search for: embroidery stabilizer guide PDF, stabilizer for sweatshirt, how to use cut away stabilizer, best cut away stabilizer.

**Observations**
- The guide already received impressions at positions 63-68 for "cut away stabilizer". That is as far as a non-selling page will go on the product term.
- The comparison intent ("tear away or cut away, which is better") is the only informational gap a digitizer can own, and it ties to digitizing decisions (density, underlay by fabric).

**Actions from this keyword**
- A17. Retarget the stabilizer guide at comparison intent: title and H1 around "Cutaway vs Tearaway Stabilizer: Which to Use by Fabric", a decision table (knit, woven, towel, cap, fleece, performance), answers to the six People-also-ask questions, and a short printable "stabilizer by fabric" chart. Do not add product listings. Keep the URL. File: `app/blog/content/embroidery-stabilizer-guide-cutaway-vs-tearaway.ts`.
- Remove the stabilizer terms from the P1 list in the keyword research notes.

---

## 10. left chest embroidery placement (110 / KD 3) - /blog/left-chest-logo-embroidery-digitizing-guide

Reviewed: 9 Nov 2026, US (Virginia), signed out.

**Verdict: Rankable later, strong odds.** Small blogs rank (MaggieFrameStore Aug 2025, ColDesi, LogoSportswear, Embroidery Library), alongside AllStitch's placement chart and an Echidna PDF. Video is heavy (four videos plus a shorts carousel), but text results with exact numbers still hold half of page 1.

**SERP features**
- AI Overview gives the exact numbers: 7-9 inches down from the left shoulder seam, 3-5 inches over from centre placket, 3-4 inch logo width, youth 6-8 inches, jackets 6.5-8 inches down and 4 inches over.
- People also ask: Should embroidery be on the left or right side? / Where do I put my logo on the left chest? / How far down for left chest logo? / Do logos usually go on the left or right chest?
- People also search for: placement template, placement for machine, chart, pdf, sweatshirt, free, placement guide PDF, left chest embroidery size.

**Observations**
- Velora's post is written as a digitizing guide. The query is about measuring on the garment. The post needs a placement section with numbers in the first screen, or the intent mismatch will keep it at position 70+.
- A downloadable PDF template/chart is requested by the related searches and nobody on page 1 except Echidna offers one.

**Actions from this keyword**
- A18. Add a placement chart to the top of the left chest guide: table by garment (polo, t-shirt, button-down, sweatshirt, jacket, youth) with down/over measurements and logo size, a step-by-step marking method, a downloadable PDF template, and FAQs for the four People-also-ask questions. Keep the digitizing content below. File: `app/blog/content/left-chest-logo-embroidery-digitizing-guide.ts`, plus a PDF in `public/`.

---

## 11-13. PNG to DST cluster: png to dst (170 / KD 9), convert png to dst (90 / KD 2), convert png to dst embroidery - /blog/convert-png-jpg-to-dst-embroidery-file

Reviewed: 9 Nov 2026, US (Virginia), signed out.

**Verdict: Hard with a blog post alone. Rankable later for positions 6-15 with an honest converter comparison, or rankable now with a tool.** Page 1 is free online converters: EmbroidAI, SharkFoto, SewFlow (a blog post with an embedded converter ranks first for "png to dst", published Mar 2026), Dynamic Mockups, pngtodstconverter.com, click-stitch, StitchFast (paid, 4.8 from 312 reviews), a Google Play app, and the Reddit DADE tool thread (50+ comments). Google treats the query as "give me a tool".

**SERP features**
- AI Overview lists the free tools, then notes Reddit opinions are mixed on auto-converters and that complex artwork needs manual work. The Facebook top answer says no website does this properly; it is digitizing.
- People also search for: png to dst free, online, Canva, Photoshop, JPG to DST, text to DST, PXF to DST, converter free download.

**Observations**
- The honest position (auto-converters work for bold simple logos, fail on small text and gradients) is already in the AI Overview, so a post that only says "you need a digitizer" will not win.
- Two routes: (a) a real free preview tool on the site, which is a product decision for the owner, or (b) a tested comparison post: run the same three logos through EmbroidAI, SewFlow, Dynamic Mockups, Ink/Stitch and a manual file, show sew-out photos and stitch counts, and explain when free is enough.

**Actions from this keyword**
- A19. Rewrite the PNG-to-DST guide as a tested comparison of free converters versus manual digitizing with real screenshots and sew-outs, a short "when a free converter is enough" checklist, and the JPG/SVG/Canva/Photoshop variants answered in FAQs. File: `app/blog/content/convert-png-jpg-to-dst-embroidery-file.ts`. Owner to decide separately whether to build a free preview/quote tool.

---

## 14. embroidery digitizing prices (20 / KD n/a) - /pricing

Reviewed: 9 Nov 2026, US (Virginia), signed out.

**Verdict: Rankable now.** Same shape as keyword 3. Page 1: Migdigitizing (from $8), Sassy cost post, 1Dollar Digitizing cost page, Impact Digitizing guide, Qdigitizing pricing page, Capital Digitizing "Per-Stitch vs Flat Pricing 2026" (published 1 Nov 2026), PRO digitizing service-pricing page, digitizingstudio.com cost guide, digitizingdelight.com pricing page titled "Embroidery Digitizing Prices | Fixed Rates from $20".

**SERP features**
- People also ask: Can I digitize embroidery for free? / What is the current price per 1000 stitches? / How much should I charge for my embroidery? / What is the most affordable digitizing software?
- Knowledge panel for Crystal Digitizing Service (local) again.

**Observations**
- Pricing pages rank when the title states the model and the starting price. Velora's /pricing title says "Flat Prices from $8" while the plan data starts at $6.99. This is a factual mismatch on a money page.
- A pricing page published 8 days before the review (Capital Digitizing) already ranks, so freshness matters here.

**Actions from this keyword**
- A20. Fix /pricing title and description to the real starting price (from `PRICE_FROM`, currently $6.99) and the pricing model: "Embroidery Digitizing Prices | Flat Rates from $6.99, No Stitch-Count Surprises". File: `app/pricing/page.tsx`.
- A10 and A11 (already listed) apply here.

---

## 15-18. Vector cluster: raster to vector conversion services (50 / KD 28), vector art conversion service (50 / KD 24), custom vector art services (70 / KD 9), vector art services (210 / KD 34) - /vector-art

Reviewed: 9 Nov 2026, US (Virginia), signed out.

**Verdict: Rankable later, good odds.** Page 1 across the four queries is small service sites: vector-conversions.com, Path Edits ($3.99), Vector Factory, vectorsartwork.com ($4), Vectorize Now ($5, most $8-$15), ArtLogo ($5, 4.9 from 355 reviews), PRO digitizing ($15), Xtreme Emb ($15), Capital Digitizing, CAMERAReadyArt, Ignition Drawing, Impact Digitizing, galaxydigitizing (2023), vectorartservices.com (exact-match domain). Free tools (Vector Magic, vectorizer.io, rastertovector.com) hold two or three slots. Sassy Digitizing published "Top 10 Vector Art Companies (2026)" four days before the review and already ranks for "vector art services". Local pack appears on "custom vector art services" and "vector art services".

**SERP features**
- AI Overview on "vector art conversion service": manual hand-tracing versus automatic tools, output formats by use (SVG web, EPS/AI print, PDF proofs, CDR/DXF cutting). On "vector art services": logo redraw, image-to-vector, colour separation, mock-ups; names CopyArtwork, CAMERAReadyArt, Capital Digitizing.
- People also search for: free, online, best, how to convert image to vector in Illustrator, Vector Magic, image to vector AI, reviews, USA.

**Observations**
- Velora's /vector-art title is "Convert JPG & PNG to Vector (AI, EPS, SVG) in 8-24h". It contains none of the four query phrasings and no price. Every winning title has "vector art services" or "vector conversion service" plus a starting price.
- Velora does not publish a standalone vector price anywhere in the code. Standard digitizing includes a free vector file; the standalone price is unknown.
- The colour-separation and mock-up services named in the AI Overview are already on the page as feature cards.

**Actions from this keyword**
- A21. Retitle and restructure /vector-art: title "Vector Art Conversion Services | Raster to Vector, Hand-Traced from $X", H1 with "vector art services", first-screen price and turnaround, a "manual versus free auto-tracer" section (when Vector Magic is enough), output formats by use, and FAQs for the free/online/Illustrator variants. Needs the owner's standalone vector price. File: `app/vector-art/layout.tsx` and `app/vector-art/page.tsx`.
- A22. Later: a "vector art services compared" listicle in the same honest format as A2, after A2 ships.

---

## 19. patch digitizing (30 / KD n/a) - /patches

Reviewed: 9 Nov 2026, US (Virginia), signed out.

**Verdict: Rankable later, good odds.** Page 1 is small competitor service pages and recent posts: OurDigitizer, S2S Digitizing, Sassy "How to Digitize Applique and Fabric Patches" (20 Oct 2026), Digit Punch, Migdigitizing patches page, USA Digitizing Pro velcro patch post (Jun 2026), Digitize4Life, Ink/Stitch, three YouTube tutorials, local pack.

**SERP features**
- AI Overview: borders and merrow edging, backing (twill, heat-seal, water-soluble), push-pull compensation, formats; mentions Embrilliance PatchArtist for DIY and Digit Punch, Migdigitizing and Etsy for outsourcing.
- People also search for: patch digitizing software, machine, free, app, embroidery patch digitizing.

**Observations**
- Velora's /patches title is "Custom Patch Digitizing: Embroidered, PVC & Chenille Files", which fits. The page mixes file digitizing with physical patch manufacturing; the SERP is about the file. Keep both but lead with the file service.
- The released post "How to Make Embroidered Patches (Machine and By Hand)" can take the DIY intent if it has a clear "digitizing a patch file: fill, tackdown, border" section.

**Actions from this keyword**
- A23. On /patches: first screen states patch file digitizing (merrow/satin border, backing, formats, price), physical patches second. Add an FAQ on "patch digitizing software / can I do it free" pointing to the DIY guide. Add a short patch-file section with border widths and sequence to the embroidered patches post and cross-link both ways. Files: `app/patches/layout.tsx`, `app/patches/page.tsx`, `app/blog/content/how-to-make-embroidered-patches.ts`.

---

## 20. applique digitizing (30 / KD n/a) - /services/applique-digitizing and /blog/applique-embroidery-digitizing-guide

Reviewed: 9 Nov 2026, US (Virginia), signed out.

**Verdict: Rankable later for both the service page and the guide.** Page 1 mixes competitor service pages (Digitize4Life, Digitizing Ninjas, Capital Digitizing), four Embroidery Legacy videos, Sassy's Oct 2026 post, an old 2018 blog (Bubbles' Menagerie), Etsy, Ink/Stitch and Reddit. Small vendor pages do rank here.

**SERP features**
- AI Overview: three layers (placement line, tackdown, cover border 3.5-5 mm), styles (traditional, reverse, 3D/puff applique), software (Brother Simply Applique, Embrilliance StitchArtist 2), services (Etsy, Digitize4Life).
- People also search for: free applique digitizing, software, machine, tutorial.

**Observations**
- Velora's applique service page already explains placement, tackdown and border and has order requirements. The blocker is indexing, not content.
- The guide should carry the tutorial intent (reverse applique, border widths, in-hoop versus pre-cut) and link to the service page.

**Actions from this keyword**
- A24. Applique service page: state the three-layer sequence and border width range in the first screen, add FAQs "Can I digitize applique for free / which software" that point to the guide. Guide: add reverse applique and border width guidance. Files: `app/services/applique-digitizing/page.tsx`, `app/blog/content/applique-embroidery-digitizing-guide.ts`. Request indexing once after deployment of the changed page.

---

## 21. 3d puff embroidery digitizing (40 / KD 22) - /blog/3d-puff-embroidery-digitizing-guide and /services/3d-puff-digitizing

Reviewed: 9 Nov 2026, US (Virginia), signed out.

**Verdict: Hard for the service page in the top 5 (tutorial intent). Rankable later for the guide.** Page 1: Hatch Embroidery blog, Tajima TAJIMAG, Melco Zendesk, four long YouTube tutorials (fiercekittenz 21K views, Wilcom 138K, Sonny Tee, Romero Threads), Facebook Hatch group, Etsy, Embroidery Legacy clip. Service pages (DigitizingUSA, PRO digitizing) appear only in the image block.

**SERP features**
- AI Overview gives settings: satin columns under 7-11 mm, stitch spacing 0.16-0.2 mm, no heavy underlay, centre run tack, end caps, thread colour matched to foam.
- People also ask: Is 3D embroidery the same as puff embroidery? / Can ChatGPT digitize embroidery? / How much does 3D embroidery cost? / What is the best program to digitize embroidery?
- People also search for: 3d puff digitizing free, tutorial, Hatch, Wilcom, fonts, foam.

**Observations**
- The guide must carry a settings table with the exact numbers (spacing, satin width limits, underlay, pull compensation, foam thickness 2 mm/3 mm, needle) for Hatch and Wilcom, since that is what the SERP rewards.
- "Can ChatGPT digitize" appears again. A3 should include this page.
- The service page should target "3d puff digitizing service" and "3d puff embroidery digitizing service" instead of the bare term.

**Actions from this keyword**
- A25. 3D puff guide: add a settings table for Hatch and Wilcom, foam thickness guidance, a cost FAQ linking to pricing, and the four People-also-ask answers. Service page title to include "Service" and price. Files: `app/blog/content/3d-puff-embroidery-digitizing-guide.ts`, `app/services/3d-puff-digitizing/layout.tsx`.

---

## 22-24. Cap cluster: hat digitizing (30), cap digitizing (30), cap embroidery digitizing services (50 / KD 2) - /services/cap-logo-digitizing

Reviewed: 9 Nov 2026, US (Virginia), signed out.

**Verdict: Rankable later, the best service-page opportunity on the list.** All three SERPs are small digitizing sites plus Embroidery Legacy tutorials. Winners: Punch Digitizing blog ($8, 4.8 from 143 reviews), EmbPunch ($7.50, 2-4 hours, free flat-to-cap conversion), Sassy cap service ($15, 2-4 hours), Xtreme Emb ($15), Capital Digitizing ($10), Migdigitizing ($8), Digit-it, hatdigitizing.com (exact-match domain), Standard Digitizing guide (Apr 2026), USA Digitizing Pro trucker post (May 2026), MaggieFrame, Melco Tech PDF, Etsy listings from $3-$10, local pack on all three.

**SERP features**
- AI Overview on "cap embroidery digitizing services" is a price list (EmbPunch $7.50, Sassy $15, Capital $10, Mig $8, EmbroideryDesigns $10-25) followed by the technical rules (bottom-up centre-out, 2.25 inch height limit, cap underlay recipes, 3D puff integration).
- People also search for: cap embroidery digitizing services usa, best cap embroidery digitizing services, hat digitizing software/machine, digitize logo for embroidery online free.

**Observations**
- Velora's Basic plan at $6.99 is below the cheapest page-1 competitor (EmbPunch $7.50). The cap page title does not say so.
- Every competitor title states price and turnaround. Velora's cap title: "Cap Embroidery Digitizing Services | Hat Logo Digitizing (DST, PES)".
- EmbPunch's differentiators (free flat-to-cap conversion, 2.25 inch max height spec) are concrete; Velora's page should state its own specs the same way.
- The blocker remains indexing. Once indexed, this page has the clearest path to page 1 of any commercial URL.

**Actions from this keyword**
- A26. Cap page: title "Cap Embroidery Digitizing Services | Hat Logos from $6.99, DST & PES", add price and turnaround to the hero, state the usable height limit and seam handling as specs, add FAQ "Do you convert my existing flat logo file for a cap?" with an honest answer, and "hat digitizing" in an H2. File: `app/services/cap-logo-digitizing/layout.tsx` and `page.tsx`. Request indexing once after deployment.

---

## 25-29. Core service cluster: logo digitizing service (70 / KD 36), custom embroidery digitizing services (210 / KD 52), digitizing services for embroidery (390 / KD 36), embroidery digitizing services (1,000 / KD 56), embroidery digitizing service (second review) - Homepage

Reviewed: 9 Nov 2026, US (Virginia), signed out.

**Verdict: Rankable later (6-9 months), same as keyword 1.** The same ten names rotate across all five SERPs: Digitizing Ninjas ($10), PRO digitizing ($15), EmbroideryDesigns.com, ThreadArt ($4 per 1,000), Migdigitizing ($8), Etsy listings ($1.50-$5.99), Reddit recommendation threads, Sassy's Top 10 listicle, Aqua Digitizing, Fineline, geniusdigitizing ($6), logodigitizing.net (exact-match domain), Ember (free tool), Embroidery Legacy video, and a local pack with the same Manassas businesses on every query.

**SERP features**
- People also ask repeats: How much does it cost to digitize embroidery? / Can ChatGPT digitize images for embroidery? / What is the best embroidery digitizing service in the USA? / Where can I find cheap embroidery digitizing services?
- Ads block "Find related products and services" shows Impact Digitizing and Digitizing USA buying these terms.
- People also search for: near me, USA, online, reviews, free, top 10 companies, Vitor digitizing.

**Observations**
- Local pack on every service query confirms that a Google Business Profile at a real address is the single strongest missing signal for commercial terms. This makes the address question decisive.
- geniusdigitizing ranks with "$6 Logo Digitizing" so Velora's $6.99 is competitive but not the cheapest.
- The "ChatGPT" question has now appeared on more than half of all reviewed SERPs.

**Actions from this keyword**
- A1, A2, A3, A4, A5, A7 (already listed). No new on-page action beyond those.

---

## Cross-cutting findings after 29 SERPs

1. **Price and turnaround in the title** is universal among page-1 vendor pages. Velora's homepage, cap, 3D puff, applique, vector and pricing titles do not state the price, and /pricing states the wrong one.
2. **Local pack appears on nearly every commercial query.** A GBP at a real, verifiable address would put Velora in a block that currently shows one-review businesses. A fake address is not an option.
3. **Sassy Digitizing is the playbook to copy.** They publish one dated, number-first post per keyword cluster (20 Oct, 23 Oct, 2 Nov, 5 Nov) and reach AI Overviews within a week. Velora's content pipeline should follow the same pattern: one page per SERP intent, numbers in the first paragraph, visible publish date.
4. **"Can ChatGPT digitize images for embroidery?"** is in People also ask on most SERPs. A3 is the cheapest win on the list.
5. **Shopping-intent keywords (stabilizer cluster) and tool-intent keywords (PNG to DST)** cannot be won with articles alone. Deprioritize the first; decide on a tool for the second.
6. **Etsy listings rank on service and product grids** for nearly every commercial query. A4 is worth doing this week.
7. **The cap page is the best commercial opportunity** (KD 2 confirmed by the SERP), blocked only by indexing.

---

## Authority check (Semrush Domain Overview, US database, 9 November 2026)

Read from the owner's Semrush interface at sem01.muzamildigitalstore.com. Registration dates from Verisign RDAP. Authority Score (AS) is Semrush's 0-100 estimate; it is not Google's view, but it is the only like-for-like comparison available.

| Site | AS | Ref. domains | Backlinks | Organic keywords | Organic traffic / mo | Registered |
|---|---:|---:|---:|---:|---:|---|
| **veloradigitizing.com** | **2** | 96 | 122 | 1 | 0 | Jul 2026 |
| sassydigitizing.com | 9 | 836 | 1K | 408 | 300 | Sep 2019 |
| usadigitizingpro.com | 7 | 2.1K | 2.5K | 171 | 33 | Jan 2022 |
| 1dollardigitizing.com | 11 | 1.1K | 21.8K | 57 | 31 | Jan 2009 |
| capitaldigitizing.com | 17 | 2.1K | 16.2K | 165 | 136 | Nov 2020 |
| embpunch.com | 22 | 4K | 20.1K | 891 | 118 | Jan 2012 |
| migdigitizing.com | 23 | 7.1K | 44.7K | 812 | 219 | not checked |
| prodigitizing.com | 24 | 4.1K | 8.7K | 513 | 1.6K | not checked |
| digitizingninjas.com | n/a | n/a | n/a | 302 | 728 | not checked |

Semrush's AI Search panel: Velora has 3 pages cited by ChatGPT, 0 in Google AI Overview. Sassy has 15 AI Overview citations, EmbPunch 13, PRO 6.

### What Velora's 96 referring domains actually are

The Backlinks report (122 links) was read in full. Apart from RoleFate (6 links to the manual-vs-AI article, relevant), MSN, Pinterest and Scamadviser, the rest are automated spam that targets newly registered domains:

- Templated "SEO service" pages on .shop / .xyz / .online / .site / .click domains (quiblo.shop, plendo.shop, pamto.shop, nimbra.shop, rankhive.xyz, page1boost.xyz, onlinecasinogamesforrealmoneyusa.online, erythromycinonline.site, ku3933net22.click and about 50 more). Anchor text is generated: "Proven SEO Authority Backlinks for veloradigitizing.com to Boost Domain Authority...". First seen 14 Sep to 6 Nov 2026, new ones still appearing.
- "linkly.agency" fake review pages on 10+ .xyz/.shop domains with the anchor "We doubled our sales after using link insertions on veloradigitizing.com for three months".
- "domraider" domain-listing pages on eight ccTLD-style subdomains (domraider.us.com, .uk.net, .de.com, ...).
- "Fiverr backlink strategy" testimonial pages on five .site domains claiming Velora's traffic grew from 1K to 9K.
- grow-your.website, first seen 8 July 2026, three days after the domain was registered.

95 of 96 referring domains have AS 0-10. 40% are .shop, 13% .xyz. Semrush labels the network graph "Dangerous". Link attributes: 60 follow, 62 nofollow.

### Interpretation

1. **Velora's real link profile is one relevant citing site (RoleFate) plus three brand profiles.** Google Search Console's "4 domains" is the accurate picture; Semrush's 96 is noise. Effective authority is zero.
2. **The spam was almost certainly not bought by the owner.** The timing (links three days after registration) and the pattern (identical templated pages for thousands of domains) match scraper networks that spam every new domain to sell SEO services. Owner to confirm no link service was ever purchased.
3. **Does it hurt?** Google's position is that it ignores this kind of link and that disavow is only for links you built or that caused a manual action. Manual Actions is clean. These links are not the proven cause of non-indexing. But a four-month-old domain whose only links are from casino/pharma-named spam domains has nothing positive to offset them, so the net trust signal is as low as it can be.
4. **The bar to clear.** The two smallest sites on page 1 of the cap and cost SERPs are Sassy (AS 9, 836 referring domains, 6 years old) and USA Digitizing Pro (AS 7, 2.1K referring domains, 4 years old). Velora needs real referring domains in the tens before any commercial keyword moves, and in the low hundreds to compete on the core cluster.

### Recalibrated timelines

- "Rankable now" blog keywords (cost, prices, calculator, left chest): still valid for positions 10-30 within 2-3 months, because KD 2-10 informational SERPs tolerate AS 2 when the page is clearly the best answer. Top 5 needs links too.
- "Rankable later" service keywords (cap, vector, patches, applique): change from 3-6 months to **6-12 months**, conditional on reaching roughly 30-50 real referring domains and a GBP if the address is real.
- Core cluster (embroidery digitizing service/services, custom, logo): **12 months or more**, conditional on reaching AS 8-10.
- Every on-page action in this file remains necessary; none of them is sufficient without links.

### Actions from the authority check

- A27. Do not disavow now. No manual action, Google states it discounts such links, and a disavow file on a profile this small carries its own risk. Export the backlink list from Semrush and keep it with this file. Revisit only if a manual action appears or the owner confirms a purchased link campaign.
- A28. Set up the Semrush Backlink Audit campaign for ongoing toxicity monitoring (free within the existing account).
- A29. Link-building plan with a numeric target: 30 real referring domains by end of January 2027, from embroidery-relevant sources only (supplier blogs, embroidery forums, Reddit profile, Pinterest boards, YouTube descriptions, Etsy/Fiverr profiles, trade directories with editorial review, guest posts on apparel decoration blogs, podcast or newsletter mentions). No paid link packages, no .shop/.xyz networks, no Fiverr "DA 50+ backlinks" gigs: that is exactly what the current profile already looks like.
- A30. Owner question added: was any backlink, guest post or "SEO package" ever purchased for this domain? If yes, list the vendor and dates so those specific links can be reviewed separately.

---

## Consolidated action list

| ID | Action | Type | Status |
|---|---|---|---|
| A1 | Homepage title with price + manual positioning | On-page | Done 9 Nov (title "Embroidery Digitizing Service | Manual, from $6.99 | Velora") |
| A2 | Comparison guide -> "Top 10 companies USA 2026" | Content | Done 9 Nov (Top 10 listicle, prices verified live for 8 of 10) |
| A3 | "Can ChatGPT digitize for embroidery?" FAQ | On-page | Done 9 Nov (homepage FAQ + JSON-LD, manual-vs-AI guide, 3D puff guide, listicle) |
| A4 | Etsy + Fiverr listings with site link | Off-page (owner) | Pending |
| A5 | GBP only with a real, verifiable address | Off-page (owner decision) | Pending |
| A6 | Align delivery-time claims (8-24h vs 24-48h) | Content fix (needs owner answer) | Pending |
| A7 | Genuine participation in r/Machine_Embroidery, r/MachineEmbroidery, Ricoma/Hatch Facebook groups | Off-page (owner, ongoing) | Pending |
| A8 | Collect real client reviews on a platform Google reads | Off-page (owner) | Pending |
| A9 | Cost guide: numbers in first paragraph, competitor price table, fee/ownership/resize/surcharge sections, 4 PAA FAQs | Content | Done 9 Nov |
| A10 | /pricing: add typical market-rate paragraph and inclusions | On-page | Done 9 Nov (market-rate paragraph + per-1,000 FAQ on /pricing) |
| A11 | Cross-link cost guide and /pricing in the first screen | On-page | Done 9 Nov |
| A12 | Illustrator guide: direct answer first, 3-step structure, plugins (Embroidery i2, StitchArtist), Ink/Stitch, 4 PAA FAQs | Content | Done 9 Nov |
| A13 | Screen-recorded Illustrator prep video on YouTube, embedded in post | Off-page (owner) | Pending |
| A14 | Align planned how-to-digitize-embroidery-designs post to "how to digitize a logo for embroidery"; consider week 2 release | Content | Pending |
| A15 | Ink/Stitch guide: title/intro also answer "...for embroidery free" | Content | Done 9 Nov |
| A16 | Stitch count guide: calculator first, size chart, square-inch rule, pricing example, PAA FAQs | Content | Done 9 Nov (calculator first, chart, pricing sections) |
| A17 | Stabilizer guide: retarget to cutaway vs tearaway comparison, decision table, PAA FAQs | Content | Done 9 Nov |
| A18 | Left chest guide: placement chart by garment at top, marking steps, PDF template, PAA FAQs | Content | Done 9 Nov (chart + SVG template at /downloads/left-chest-placement-template.svg; no PDF tooling installed) |
| A19 | PNG-to-DST guide: tested free converters vs manual, sew-outs, checklist; owner decides on a tool | Content | Pending |
| A20 | /pricing title/description: real starting price $6.99 (from PRICE_FROM), flat-rate model | On-page | Done 9 Nov (title now from $6.99; see new open question on the price matrix) |
| A21 | /vector-art: title "Vector Art Conversion Services | Raster to Vector from $X", price, manual vs auto, formats by use, FAQs | On-page (needs vector price) | Done 9 Nov, title part ("Vector Art Conversion Services | Raster to Vector from $10", price from the pricing-page matrix); page body restructure still pending |
| A22 | Later: vector art services comparison listicle | Content | Pending |
| A23 | /patches: lead with patch file digitizing; patch-file section in embroidered patches post; cross-link | On-page + Content | Done 9 Nov |
| A24 | Applique service page: three-layer sequence in first screen, software FAQs; guide: reverse applique, border widths | On-page + Content | Done 9 Nov (service page + guide) |
| A25 | 3D puff guide: Hatch/Wilcom settings table, cost FAQ, PAA; service title with "Service" and price | Content + On-page | Done 9 Nov (guide settings table + service title with "Service"; no price in title until the puff price contradiction is resolved) |
| A26 | Cap page: title with price, specs (height limit, seam), flat-to-cap FAQ, "hat digitizing" H2 | On-page | Done 9 Nov |
| A27 | No disavow now; export and archive the Semrush backlink list; revisit only on manual action or confirmed purchase | Off-page decision | Pending |
| A28 | Set up Semrush Backlink Audit campaign for monitoring | Off-page (owner/tool) | Pending |
| A29 | Link plan: 30 real embroidery-relevant referring domains by end Jan 2027; no paid packages | Off-page (owner, ongoing) | Done 9 Nov (LINK_BUILDING_PLAN_2026-11.md) |
| A30 | Owner to confirm whether any link/SEO package was ever purchased | Owner question | Answered 9 Nov: owner confirms no backlink package was ever purchased; spam links are third-party, keep A27 (no disavow) |

## Low-competition keyword list from Semrush Keyword Magic (9 November 2026)

Source: owner's Semrush instance, US database, filters KD 0-14 ("Very easy") and volume 20+. Seeds pulled: "embroidery digitizing" (863 matches, first 100 by relevance read), "3d puff" (phrase match, 17), "applique" (phrase match, 100), "cap digitizing" (phrase, 1), "hat digitizing" (phrase, 0). Seeds "embroidery file", "left chest", "patch", "digitize" did not load (tool stalled); the earlier 1 Nov research already covers png-to-dst, left chest placement and stitch count.

Excluded on purpose: software, machine, fonts-download, courses, quilting and hand-sewing terms, and anything whose SERP will be products. KD below is Semrush's estimate; the owner will verify each SERP by hand, as before, before any page is built or retargeted.

### Tier 1: check these SERPs first (KD 0-7, intent matches a page we have or can write)

| # | Keyword | Vol | KD | Intent | Page |
|---|---|---:|---:|---|---|
| L1 | convert image to embroidery file free | 140 | 0 | I/C | /blog/convert-photo-to-embroidery-guide (retarget) |
| L2 | convert image to embroidery file | 90 | 0 | I | same |
| L3 | photo to embroidery converter | 90 | 0 | I | same |
| L4 | picture to embroidery converter | 90 | 0 | I | same |
| L5 | how to digitize a picture for embroidery | 70 | 0 | I | same |
| L6 | convert picture to embroidery file | 70 | 1 | I | same |
| L7 | best embroidery digitizing services in usa | 50 | 0 | I/C | Top 10 listicle (done 9 Nov) |
| L8 | best embroidery digitizing services providers in the usa | 40 | 1 | C | Top 10 listicle |
| L9 | embroidery format converter | 40 | 1 | I | new post: embroidery file converter guide |
| L10 | flat embroidery vs 3d puff | 70 | 1 | I/C | new post or section in 3D puff guide |
| L11 | 3d puff embroidery designs | 110 | 2 | I | 3D puff guide + portfolio category |
| L12 | cap embroidery digitizing services | 50 | 2 | C | cap page (done 9 Nov) |
| L13 | free embroidery digitizer | 140 | 2 | I | Ink/Stitch free guide (done 9 Nov) |
| L14 | embroidery applique letters | 140 | 2 | I/C | new post: applique letters and fonts |
| L15 | embroidery software digitizing | 390 | 3 | I/C | /blog/wilcom-vs-hatch-vs-brother-pe-design-embroidery-software (retarget) |
| L16 | 3d puff embroidery foam | 170 | 3 | I/C | 3D puff guide (foam section) |
| L17 | 3d puff foam for embroidery | 140 | 3 | I/C | same |
| L18 | dst embroidery file | 260 | 4 | I/C | /blog/how-to-open-dst-embroidery-file (retarget) |
| L19 | convert embroidery files | 170 | 4 | I | new post: embroidery file converter guide |
| L20 | 3d foam embroidery | 170 | 4 | I/C | 3D puff guide |
| L21 | embroidery vs applique | 170 | 4 | C | new post or applique guide section |
| L22 | applique fonts | 140 | 4 | I | new post: applique letters and fonts |
| L23 | embroidery alphabet applique | 140 | 4 | I/C | same |
| L24 | how to digitize photos for embroidery | 70 | 4 | I | photo guide |
| L25 | custom embroidery digitizing services in usa uk australia canada | 40 | 4 | I | homepage / listicle |
| L26 | embroidery file converter | 110 | 5 | I | converter guide |
| L27 | digitizing a logo | 40 | 6 | I | general how-to post (A14) |
| L28 | dst format for embroidery | 140 | 6 | I | DST post |
| L29 | photo to embroidery | 70 | 6 | I | photo guide |
| L30 | name applique | 210 | 6 | I | applique letters post |
| L31 | image to embroidery | 110 | 6 | I | photo guide |
| L32 | embroidery digitising service | 30 | 7 | C | /services (UK spelling, one mention) |
| L33 | convert logo to embroidery file | 30 | 7 | I | general how-to post (A14) |
| L34 | best digitizing software for embroidery | 140 | 7 | C | software comparison post |
| L35 | .pes embroidery design files | 40 | 7 | C | DST vs PES post |

### Tier 2: KD 8-14, still realistic

| # | Keyword | Vol | KD | Intent | Page |
|---|---|---:|---:|---|---|
| L36 | embroidery digitizing software | 4,400 | 9 | I/C | software comparison post (biggest volume on the list; software intent, traffic and links not leads) |
| L37 | embroidery software mac | 590 | 8 | I/C | software comparison post, Mac section |
| L38 | how to make embroidery patterns | 260 | 4 | I | new post |
| L39 | embroidery font generator | 260 | 9 | I | /blog/best-fonts-for-embroidery (retarget) |
| L40 | 3d puff embroidery hat | 90 | 10 | I | 3D puff guide / service page |
| L41 | 3d puff hat embroidery | 40 | 11 | I | same |
| L42 | 3d puff embroidery fonts | 110 | 11 | I | new post: 3D puff fonts |
| L43 | how to applique with embroidery machine | 210 | 9 | I | new post: applique with an embroidery machine (tutorial) |
| L44 | how do you applique with an embroidery machine | 170 | 9 | I | same |
| L45 | how to machine embroidery applique | 170 | 10 | I | same |
| L46 | machine embroidery applique | 720 | 13 | I | same (head term) |
| L47 | custom applique | 210 | 9 | I/C | applique service page |
| L48 | applique fabric for embroidery | 140 | 10 | I/C | applique guide |
| L49 | machine embroidery applique designs | 140 | 10 | I | applique guide |
| L50 | embroidery file format | 480 | 11 | I | DST vs PES vs JEF post (retarget) |
| L51 | dst file embroidery | 170 | 11 | I | DST post |
| L52 | embroidery file type | 110 | 13 | I | DST vs PES post |
| L53 | logo digitizing | 210 | 11 | I | homepage / services |
| L54 | embroidery digitising services | 70 | 11 | C | /services |
| L55 | custom embroidery digitizing service(s) | 70 / 210 | 12 / 14 | I | homepage |
| L56 | digitise logo for embroidery | 170 | 13 | I | general how-to post (A14) |
| L57 | digitizing a logo for embroidery | 140 | 13 | I | same |
| L58 | how to digitize embroidery designs | 140 | 13 | I | same (planned slug matches) |
| L59 | what is applique embroidery | 170 | 13 | I | applique guide |
| L60 | what is 3d puff embroidery | 40 | 14 | I | 3D puff guide FAQ (done) |
| L61 | learn embroidery digitizing / learn to digitize embroidery / digitizing lessons | 40 / 50 / 70 | 10-12 | I | new post: learn embroidery digitizing roadmap |
| L62 | complex digitizing | 70 | 9 | I | /services hub mention |

### What this list changes

- Three new blog posts are justified by clusters of KD 0-6 keywords: an **embroidery file converter guide** (L9, L19, L26, plus L18/L28/L50-52), an **applique letters and fonts guide** (L14, L22, L23, L30), and **applique with an embroidery machine** tutorial (L43-L46). A fourth, **flat embroidery vs 3D puff**, can be a section in the 3D puff guide first.
- Two existing posts should be retargeted rather than rewritten: the photo-to-embroidery guide at the L1-L6 cluster (five keywords with KD 0-1), and the Wilcom vs Hatch comparison at "embroidery digitizing software" (4,400 searches, KD 9). The software cluster will not bring leads, but it is the largest low-KD traffic on the list and the kind of page that earns links.
- No service keyword below KD 7 exists except the cap one already targeted. The service pages stay on the slow lane; this list is the fast lane for impressions.

### Next step

Owner searches L1-L35 in Google (US, signed out) in order and pastes the SERPs as before. For each: who is on page 1, AI Overview present, People also ask. Verdicts and the final build list go into this file.

## Cluster SERP verdicts for the low-competition list (9 November 2026)

Owner searched 9 of the 11 cluster representatives. Note: these searches were localized to Karachi, Pakistan (signed in). Organic results for informational queries are close to US results, but the local pack and some commercial results differ; US re-checks are only needed for the two commercial clusters (best services USA, digitizing a logo). Pending: "dst embroidery file" and "flat embroidery vs 3d puff".

| Cluster | Keywords covered | Page 1 | Verdict |
|---|---|---|---|
| convert image to embroidery file | L1-L4, L6, L31 | All tools and apps: EmbroidAI, click-stitch, Google Play app, Canva, Pixel-Stitch, VectoSolve, Ember, SewFlow; three YouTube tutorials | **Skip the converter terms.** KD 0 is misleading: the SERP wants a tool. Only the tutorial variants (L5 "how to digitize a picture for embroidery", L24 "how to digitize photos for embroidery") are winnable with the photo guide. |
| embroidery file converter | L9, L19, L26 | Ember converter, Google Play, EmbroidAI, Microsoft Store app, DigitEMB blog "Free machine embroidery file format converters" at position 5, EmbroideryConverter.com, EMDigitizer viewer | **Rankable later** for an honest "free embroidery file converters compared" post; a digitizer's list post already holds position 5. No tool needed. |
| embroidery applique letters | L14, L22, L23, L30 | Pinterest x2, Designs by JuJu font shop, Etsy image grid, EmbroideryDesigns fonts, HoopTalent guide (Aug 2025) at 5, YouTube, Karlie Belle blog | **Mixed, lower priority.** Intent is mostly font downloads. A guide can take position 5-7 like HoopTalent, but only after the applique tutorial exists. |
| how to applique with embroidery machine | L43-L46 (1,270 searches combined) | Embroidery Legacy video (194K views), Karlie Belle blog at 2, Applique Corner video, TikTok, overtheedge.blog at 5, Brother and Bernina pages, Janome video, Embroidery Legacy guide (Jul 2026) | **Rankable later, high priority.** Two small blogs sit at 2 and 5. A step-by-step tutorial with photos (placement, tackdown, trim, cover) separate from the digitizing guide. |
| embroidery vs applique | L21 | Machine Embroidery Geek (2022), Stitchi, PRO digitizing blog at 3, Leontine Linens, USA Digitizing Pro (AS 7) at 5, Eking Clothing (Oct 2026), Instagram. AI Overview cites USA Digitizing Pro | **Rankable now.** Digitizers with AS 7-24 rank with short posts. A digitizer-angle comparison (stitch count, cost, machine stops, file structure, when to choose which) with PAA answers (three types of applique, embroidery vs patches). |
| 3d puff embroidery foam | L16, L17, L20 | Candle Thread USA blog at 1, PRO digitizing "3D puff 101" at 2, Amazon at 3, Embroidery Legacy tutorial, AllStitch and Poolin product pages, Facebook, YouTube | **Rankable later** for the 3D puff guide if it gets a dedicated foam section (1 mm to 5 mm comparison, 2 mm vs 3 mm use cases, colour matching, what to buy). Half the SERP is product, so expect position 4-8, not 1. |
| embroidery digitizing software | L15, L34, L36, L37 | Wilcom, Ember, Ink/Stitch, three YouTube reviews, Embroidery Legacy, **EmbPunch blog "6 best free embroidery digitizing software (2026 review)" at 7**, Hatch, Reddit, Microsoft Store Embird | **Rankable later, highest traffic on the list (4,400).** Retarget the Wilcom vs Hatch vs PE-Design post as "best embroidery digitizing software 2026: paid and free" with a price table (Wilcom from $79/mo, Hatch $149-$1,100, Embroidery Legacy $1,399, PE-Design ~$1,000, Ember free/$9.99, Ink/Stitch free). The Ink/Stitch post keeps the "free" variant. |
| best embroidery digitizing services in usa | L7, L8, L25 | Quality Punch, local pack (Absolute 79 reviews; Embroidersly Chicago, 3 years, 29 reviews), **plixalabs comparison (Sep 2026) at 2**, S2S, Digit-it "Top 10 providers" (Aug 2026), The Hem Stitching (Jul 2026), nkemb (Sep 2026), PSA Digitizing (Aug 2026), Aqua | **Rankable later, confirmed.** Five pages published in 2026 by small sites are on page 1. The new Top 10 listicle targets exactly this. Embroidersly (3 years old, 29 reviews) in the local pack shows what a real GBP with reviews does for a young business. |
| digitizing a logo for embroidery | L27, L33, L56, L57 | EmbroideryDesigns, PRO digitizing, Fiverr (71K reviews), three Embroidery Legacy videos, ZDigitizing service page at 4, Embroidery Legacy guide, Ember, click-stitch page. PAA: cost, how to convert a logo, **Can ChatGPT digitize** (again) | **Rankable later** for both the planned general how-to post (A14) and a service page. Mixed intent means a tutorial that ends with the service option fits. |

### Final build list from this round

New posts, in order:
1. **B1 Embroidery vs applique** (L21): rankable now, short, digitizer angle. Links to applique service and guide.
2. **B2 How to applique with an embroidery machine** (L43-L46): step-by-step with photos; the biggest informational cluster that is winnable.
3. **B3 Best embroidery digitizing software 2026** (L15, L34, L36, L37): retarget and expand the existing Wilcom vs Hatch vs PE-Design post; keep the URL.
4. **B4 Free embroidery file converters compared** (L9, L19, L26, plus the DST cluster if its SERP agrees).

Retargets of existing pages:
- **R1** photo-to-embroidery guide: aim at "how to digitize a photo/picture for embroidery" (L5, L24, L29), drop the "converter" framing.
- **R2** 3D puff guide: add a foam section (thickness comparison, colour, where to buy) for L16, L17, L20.
- **R3** Top 10 listicle: make sure "best embroidery digitizing services in the USA" appears in the intro and an H2; it already does in the title.
- **R4** planned how-to-digitize post (A14): target "how to digitize a logo for embroidery" and "digitizing a logo for embroidery", end with the service option.

Skip for now: L1-L4, L6, L31 (tool intent), L11 (designs marketplace intent), L14, L22, L23, L30 (font downloads) until B2 is live.

Still to check: "dst embroidery file" (decides whether B4 also covers L18, L28, L35, L51) and "flat embroidery vs 3d puff" (decides a separate post versus a section in the puff guide).

## Execution log

**9 Nov 2026, batch 1-3 applied locally (not committed, not deployed):**
- Blog block renderer gained a `table` block type (app/blog/types.ts, app/blog/[slug]/page.tsx).
- Titles/meta: homepage, /pricing, cap page, 3D puff page, /vector-art, /patches description.
- Rewritten or restructured: cost guide, stitch count guide, left chest guide (+ SVG template), Illustrator guide, Top 10 listicle, 3D puff guide, applique guide, stabilizer guide, Ink/Stitch guide, embroidered patches post, manual-vs-AI FAQ; /patches and applique service pages; cap page hero and FAQ; pricing page market-rate paragraph and FAQ.
- Sitemap lastmod set to 2026-11-09 for the changed static pages; blog posts carry updatedAt.
- Checks: tsc clean, ESLint shows only 2 pre-existing errors in VisitorTracker.tsx (unchanged file), production build passed, all 17 changed routes return 200 locally with the expected titles and tables.
- Not done: A4, A5, A7, A8, A13, A28 (owner tasks); A6 (needs the pricing decision); A14 (unreleased batch-3 post, needs the release branch workflow); A19 (needs real converter tests or a tool decision); A21 body restructure; A22; A27 archive export.

**9 Nov 2026, build list B1-B4 applied locally (not committed, not deployed):**
- New posts: `/blog/embroidery-vs-applique` (B1), `/blog/how-to-applique-with-embroidery-machine` (B2), `/blog/free-embroidery-file-converters` (B4, seven tool pages verified live). All registered in `app/blog/posts.ts`, in the sitemap, cross-linked to the applique service page and guides.
- Retargeted: Wilcom vs Hatch vs PE-Design post is now "Best Embroidery Digitizing Software 2026: Paid & Free" (B3), same URL, nine-product price table, prices verified for Hatch, StitchArtist, SewArt, Ember, Ink/Stitch.
- Temporary covers: the three new posts reuse existing related cover images until dedicated covers are generated from their imagePrompt fields (`/images/blog/<slug>.webp`).
- Checks: tsc clean, production build passed (71 pages), all four URLs return 200 locally with tables rendering, all internal link targets resolve.
- Still pending from this round: R1 photo guide retarget, R2 3D puff foam section, R4 planned how-to-digitize post, SERP checks for "dst embroidery file" and "flat embroidery vs 3d puff".
- Deploy status at time of writing: the earlier push (de528be) was still not live on www.veloradigitizing.com (pricing title still "from $8", SVG 404). Owner to check the Vercel deployment.

## Priority order for the first change batch (updated after 29 SERPs)

Batch 1, quick on-page fixes (one session):
1. A3 ChatGPT FAQ on homepage, manual-vs-AI guide and 3D puff guide
2. A20 /pricing title to the real $6.99 starting price
3. A1 homepage title with price and manual positioning
4. A26 cap page title, price, specs
5. A25 (service title part) and A21 (title part, once the vector price is known)

Batch 2, rankable-now content:
6. A9 + A10 + A11 cost guide and pricing page
7. A16 stitch count calculator page
8. A18 left chest placement chart and PDF

Batch 3, rankable-later content:
9. A12 Illustrator guide
10. A2 Top 10 listicle (keywords 1, 2, 25-29)
11. A23 patches, A24 applique, A25 3D puff guide
12. A14 + A15 general how-to and free route
13. A17 stabilizer retarget, A19 PNG-to-DST comparison

Owner tasks in parallel: A4 Etsy/Fiverr, A7 Reddit/Facebook participation, A8 reviews, A13 video, A5 GBP decision, A6 delivery time answer.

## Open questions for the owner

- Real delivery time: 8-24 hours (homepage hero) or 24-48 hours for Basic (pricing data)?
- Is the Los Angeles address real and able to receive mail? Decides A5 and A8.
- Standalone vector art conversion price (not bundled with digitizing)? Needed for A21.
- Does Velora actually convert an existing flat logo file to a cap file for free, or re-digitize at the normal price? Needed for the A26 FAQ.
- Should a free PNG-to-DST preview or quote tool be built? Decides the scope of A19.
- ANSWERED 9 Nov: no backlink package was ever purchased (A30).
- **Pricing page contradiction (new, blocks A6):** /pricing shows two price systems at once. The plan cards (pricing-data.ts) say Basic $6.99 / 24-48 h, Standard $12.99 / 12-24 h, Rush $19.99 / 2-4 h and "3D puff" under Rush. The per-service matrix and the pricing FAQs on the same page say left chest and cap $8, 3D puff $12, applique $12, mid-size $14, jacket back $18-$25, vector $10-$20, standard turnaround 8-24 h, rush +$5. The homepage hero says 8-24 h. Owner must pick one system; until then titles use $6.99 (the lowest displayed price) and per-plan delivery times only.

## 11 Nov 2026 - site audit and pricing alignment (applied locally, uncommitted)

- A6 resolved: owner confirmed the three plan cards in `app/components/pricing-data.ts` are the only real prices (Basic $6.99 / 24-48 h / 1 revision, Standard $12.99 / 12-24 h / 3 revisions, Rush $19.99 / 2-4 h / unlimited). /pricing matrix, turnaround tiers, FAQs, homepage, service pages, blog mentions and llms.txt now follow the plans. Site-wide short claim is "12-24 h standard delivery". Vector art ("from $10", its own rush/revision wording) was left unchanged because it is not covered by the plans.
- Internal linking: /pricing added to header dropdown and footer; portfolio filter slugs fixed (left-chest, towel); dead `/services#pricing` link fixed; footer "Felt & Twill Patch Samples" now points to /store; newer posts added to RelatedGuides on service pages and /pricing.
- Schema: duplicate FAQPage removed on 55 pages (`schema={false}` on FAQ where the page emits its own); BreadcrumbList added to /store; BlogPosting wordCount now counts tables.
- /store copy expanded (231 to ~480 words); llms.txt prices corrected and Guides section added; project count unified to 3,200+.
- Still open: chenille/bundles portfolio links (hidden designs), personal TikTok/X handles in sameAs, named blog author, unique covers for embroidery-vs-applique, how-to-applique-with-embroidery-machine, free-embroidery-file-converters.

**11 Nov 2026, low-KD content round (applied locally, uncommitted):**
- R1 done: photo guide retargeted to "how to digitize a photo / picture for embroidery" (L5, L24, L29). New title and H1, six detailed steps, size-guide table, new first FAQ. URL unchanged.
- R2 done: 3D puff guide gained a foam section (2 mm vs 3 mm vs 6 mm table, colour matching, embroidery vs craft foam, removal) and a craft-foam FAQ (L16, L17, L20).
- R4 done: `/blog/how-to-digitize-embroidery-designs` released early from the batch-20 branch (was week 4) and rewritten as "How to Digitize a Logo for Embroidery" (L27, L33, L56-L58): seven steps, two tables, ChatGPT and convert-logo FAQs. Copied by hand, not with release-blog-batch.py, because the script would overwrite the 9-11 Nov edits to existing posts with the branch versions.
- New post: `/blog/flat-embroidery-vs-3d-puff` (L10, 70 / KD 1). Web check showed digitizer blogs (HoopTalent, EmbPunch, ZDigitizing) on page 1, so a separate post instead of a section. Temporary cover: reuses the 3D puff guide image.
- Both new posts registered in posts.ts, linked from service-page guide rows, homepage row, related posts and llms.txt. Sitemap lastmod set to 2026-11-11 for changed static pages.
- Checks: production build 78 pages, crawl of 68 URLs all 200, no duplicate FAQPage, no invalid schema.
- Still to check by SERP: "dst embroidery file" (L18, L28, L51). Next candidates: L38 how to make embroidery patterns (260 / KD 4), L42 3D puff embroidery fonts (110 / KD 11), L61 learn embroidery digitizing.

**12 Nov 2026, GSC check and "Crawled - currently not indexed" upgrade (applied locally, uncommitted):**
- GSC, last 28 days vs previous: 3 clicks (7), 136 impressions (63), position 27.8 (33.7). Indexed 40, not indexed 28: Discovered 8 (/services, three service pages, privacy, three posts), Crawled-not-indexed 10 (all from the 7 Nov batch), canonical/redirect 9.
- The nine thin 7 Nov posts that Google crawled and skipped were upgraded with real tables and a new first FAQ each, updatedAt 2026-11-12: hoop sizes (mm and inch sewing fields, placement table, 6x10 = 160x260 vs 150x240 warning), needle size (blade diameter, needle by fabric), thread weight (30/40/60 chart, polyester vs rayon), DST file (retitled "DST Embroidery File: What It Is and How to Open It" for L18/L28/L51, format table, free viewer table), embroidery cost (pricing chart, worked 24-polo example, price-factor table), fonts (example fonts by style, minimum size chart), polo (fabric comparison, logo setup), beanie (size chart, setup), multi-needle (single vs multi comparison, needle count). These nine files were re-serialized in the JSON style used by the older posts.
- Competitor check by web search for hoop, needle, thread and DST queries; gaps added (contested 6x10 label, Data Stitch Tajima, BERNINA ArtLink, Open-with tip).
- Six hidden bundle product URLs (/store/50-patches-value-pack etc.) were 404 while still getting impressions; now 308 to /store via LEGACY_STORE_SLUGS in next.config.ts.
- Checks: build 78 pages, 68 URLs all 200, no invalid schema.
- Recommendation recorded: pause the 14 Nov batch release until these posts are re-crawled; request indexing for the nine upgraded URLs after deploy.
