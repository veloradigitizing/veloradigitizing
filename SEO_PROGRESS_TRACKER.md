# Velora Digitizing — SEO Progress Tracker & Performance Log

> **Project:** Velora Digitizing (`veloradigitizing.com`)  
> **Initial Baseline Date:** October 19, 2026  
> **Tracking Interval:** Bi-Weekly (Every 14 Days) / Monthly  
> **Data Source:** Google Search Console (Performance / Search Analytics)  

---

## 1. Baseline Performance Snapshot (Recorded: October 19, 2026)

*Source: Google Search Console — Last 28 Days Report*

### High-Level KPI Scorecard
* **Total Clicks:** `7`
* **Total Impressions:** `81`
* **Average CTR:** `8.6%`
* **Average Position:** `33.2`
* **US Market Impressions:** `35` (Average Position: 46.7)
* **Desktop vs Mobile:** 88% Desktop / 12% Mobile

### Core Target Queries Baseline
| Target Search Query | Baseline Impressions | Baseline Clicks | Baseline Position | Target URL |
| :--- | :---: | :---: | :---: | :--- |
| `cut away stabilizer` | 4 | 0 | **68.3** | `/blog/embroidery-stabilizer-guide-cutaway-vs-tearaway` |
| `how to digitize a logo for embroidery in illustrator` | 3 | 0 | **79.3** | `/blog/digitize-logo-illustrator-embroidery` |
| `embroidery digitisation` | 2 | 0 | **77.0** | `/services` |
| `hydro vision collection embroidered patches` | 1 | 0 | **44.0** | `/store` / `/patches` |
| `cut away stabilizer embroidery` | 1 | 0 | **65.0** | `/blog/embroidery-stabilizer-guide-cutaway-vs-tearaway` |
| `cut-away stabilizer` | 1 | 0 | **63.0** | `/blog/embroidery-stabilizer-guide-cutaway-vs-tearaway` |
| `embroidery size for left chest` | 1 | 0 | **78.0** | `/blog/left-chest-logo-embroidery-digitizing-guide` |
| `digitise embroidery` | 1 | 0 | **79.0** | `/services` |

### Top Landing Pages Baseline
| Page Path | Clicks | Impressions | Position | Status |
| :--- | :---: | :---: | :---: | :--- |
| `/` (Homepage) | 5 | 30 | 1.3 | Brand anchor |
| `/patches` | 1 | 15 | **22.7** | Commercial target (Page 3) |
| `/blog/vector-art-for-screen-printing-vs-embroidery` | 1 | 8 | **30.5** | High-intent technical |
| `/contact` | 0 | 19 | 2.9 | Conversion hub |
| `/store` | 0 | 19 | 13.1 | Product discovery |
| `/about` | 0 | 18 | 4.4 | Brand trust |
| `/portfolio?category=sleeve` | 0 | 18 | 6.3 | Portfolio keyword rank |

---

## 1.1 Bing Webmaster Tools Baseline (Recorded: October 20, 2026)

*Source: Microsoft Bing Webmaster Tools — Live Performance Report*

### High-Level KPI Scorecard (Bing)
* **Total Impressions:** `69`
* **Total Clicks:** `2`
* **Indexing Mechanism:** Instant IndexNow Broadcast (`submit-clean-indexnow.mjs`)

### Top Ranking Queries on Bing (Single-Digit Page 1 Positions)
| Target Search Query on Bing | Impressions | Average Position | Target Blog Guide / URL | Status |
| :--- | :---: | :---: | :--- | :--- |
| `digitizing outline for small text on hat` | 2 | **1.0** 🥇 | `/blog/how-to-digitize-small-text-micro-lettering-embroidery` | **#1 on Bing!** |
| `how to estimate number of stitches for embroidery digitizing` | 2 | **1.5** 🥈 | `/blog/how-to-estimate-embroidery-stitch-count` | **Top 2 on Bing!** |
| `hatch embroidery software compared to wilcom embroidery software` | 2 | **3.0** 🥉 | `/blog/wilcom-vs-hatch-vs-brother-pe-design-embroidery-software` | **Top 3 on Bing!** |
| `edge run or tatami underlay first` | 2 | **3.0** 🥉 | `/blog/embroidery-underlay-types-explained` | **Top 3 on Bing!** |
| `woven vs embroidered vs pvc patches` | 2 | **8.0** | `/blog/custom-patch-types-embroidered-woven-pvc-leather-chenille` | **Page 1 on Bing** |
| `difference between edge run underlay and parallel underlay embrilliance` | 2 | **8.5** | `/blog/embroidery-underlay-types-explained` | **Page 1 on Bing** |

---

## 2. Optimizations Deployed (October 19, 2026)

The following changes were coded, tested, and verified with `npm run build` (141 static pages, 0 errors):

1. **Exact-Match FAQ & Schema Additions for High-Impression Blog Posts:**
   * `app/blog/content/embroidery-stabilizer-guide-cutaway-vs-tearaway.ts`:
     * Added exact FAQs targeting `cut away stabilizer`, weights (2.5oz vs PolyMesh), duckbill shears trimming instructions.
     * Injected internal cross-links to Left Chest Guide and 3D Puff Digitizing.
   * `app/blog/content/digitize-logo-illustrator-embroidery.ts`:
     * Added exact FAQ targeting `how to digitize a logo for embroidery in illustrator` with step-by-step vector prep breakdown.
     * Cross-linked to Stabilizer Guide and 3D Puff Digitizing.
   * `app/blog/content/left-chest-logo-embroidery-digitizing-guide.ts`:
     * Added exact FAQ targeting `embroidery size for left chest` across shirt sizes (S to 4XL).
     * Cross-linked to Cutaway Stabilizer Guide.

2. **Google Rich Snippet Schemas for Commercial Pages:**
   * `app/services/3d-puff-digitizing/layout.tsx`: Injected `@type: FAQPage` schema into JSON-LD graph (foam thickness, column capping, file formats).
   * `app/patches/layout.tsx`: Injected `@type: FAQPage` schema into JSON-LD graph (MOQ, turnaround, patch types).

3. **US Off-Page Citation & Backlinks Kit:**
   * Created `OFFPAGE_SEO_AND_BACKLINKS_KIT.md` with exact NAP consistency matching Google Knowledge Graph (`128 Business Blvd, Suite 204, Los Angeles, CA 90017`, `+1 (213) 635-8137`), Top 8 US directories, and Behance/Pinterest portfolio templates.

---

## 3. Milestone Targets & Review Schedule

| Checkpoint Date | Interval | Target Impressions | Target Clicks | Target Avg Position | Key Expected Milestone |
| :--- | :---: | :---: | :---: | :---: | :--- |
| **Nov 02, 2026** | Day 14 | **200 – 400** | **15 – 30** | **28 – 35** | Re-crawling completed; new FAQ rich snippets validated in GSC |
| **Nov 18, 2026** | Day 30 | **500 – 1,200** | **40 – 90** | **20 – 30** | Target blog queries climb from 60–80 to positions 25–40 |
| **Dec 18, 2026** | Day 60 | **1,500 – 3,500** | **100 – 250** | **15 – 25** | `/patches` enters Page 1 (Top 10); first 3D puff commercial leads |
| **Jan 17, 2027** | Day 90 | **4,000 – 8,000+** | **250 – 500+** | **Top 10–15** | Steady daily organic inquiries from US embroidery clients |

---

## 4. Periodic Progress Tracking Log (Update Bi-Weekly)

*Use this table to log actual readings from Google Search Console on review dates:*

| Review Date | Days Elapsed | Total Impr | Total Clicks | Avg CTR | Avg Pos | US Impr | Top Gainer Query / Note | Checked By |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :--- | :--- |
| **2026-10-19** | Day 0 | **81** | **7** | **8.6%** | **33.2** | **35** | *Baseline established; schema & exact FAQs deployed* | Antigravity |
| *2026-11-02* | Day 14 | -- | -- | -- | -- | -- | *Pending Checkpoint 1 audit* | |
| *2026-11-18* | Day 30 | -- | -- | -- | -- | -- | *Pending Checkpoint 2 audit* | |
| *2026-12-18* | Day 60 | -- | -- | -- | -- | -- | *Pending Checkpoint 3 audit* | |
| *2027-01-17* | Day 90 | -- | -- | -- | -- | -- | *Pending Checkpoint 4 audit* | |

---

## 5. How to Update This Log in Google Search Console

1. Open Google Search Console > **Performance** > **Search Results**.
2. Select Date filter: **Last 28 Days**.
3. Toggle ON all 4 scorecards: **Total clicks**, **Total impressions**, **Average CTR**, and **Average position**.
4. Check **Countries** tab > Click **United States** to note US-specific impressions.
5. In **Queries** tab, sort by **Impressions** to see which queries climbed the most.
6. Record the numbers into the log table above.
