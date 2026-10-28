# Service page indexing audit - 28 October 2026

## Scope and evidence

Reviewed the connected Google Search Console domain property `sc-domain:veloradigitizing.com`, the deployed public site, and the local Next.js metadata, sitemap, robots and navigation configuration.

The Page indexing report, last updated 23 October, lists 36 indexed URLs and 42 excluded URLs: 33 discovered but not indexed, one crawled but not indexed, five canonical alternatives and three redirects. These categories do not establish a technical fault by themselves.

## Live technical checks

All four priority URLs return HTTP 200, have a single self-referencing canonical, permit indexing through robots metadata, have no X-Robots-Tag restriction, and contain a rendered H1 in the response HTML:

- `/services`
- `/services/3d-puff-digitizing`
- `/services/cap-logo-digitizing`
- `/services/applique-digitizing`

The same URLs also return HTTP 200 and rendered headings when requested with a Googlebot user-agent. This is a simulated user-agent check, not proof of access from Google's infrastructure.

The live `robots.txt` permits these URLs. The live sitemap returns HTTP 200 and contains all four canonical URLs. The homepage response HTML contains crawlable links to all four. Local header, footer and related-services navigation also link to them. No robots, canonical, sitemap or internal-link change is justified by these checks.

Search Console's Sitemaps report confirms `Success`, last read 28 October 2026, with 70 discovered pages (submitted 26 October). No sitemap resubmission was needed.

## Current URL Inspection findings

- `/services`: not indexed, discovered but not crawled; last crawl N/A. Google lists the sitemap and homepage as discovery sources. The Google live test passed: URL available to Google, page can be indexed. An indexing request was accepted into the priority crawl queue on 28 October.
- `/services/3d-puff-digitizing`: current individual inspection reports URL unknown to Google, last crawl N/A, despite its appearance in the older aggregate discovered report and its presence in the live sitemap. Treat individual and aggregate reports as separate snapshots; do not assume a canonical fault from this discrepancy.
- `/services/cap-logo-digitizing`: current individual inspection also reports URL unknown to Google and last crawl N/A.

- `/services/applique-digitizing`: discovered but not indexed, last crawl N/A; the sitemap is listed as its discovery source. The indexing request completed and the inspection now shows `Indexing requested`.

Indexing requests for all four priority URLs were accepted on 28 October. Search Console checked live indexability as part of requesting indexing for the specialty pages.

## Crawl health

The Crawl Stats report (last updated 26 October) shows 750 requests, average response time 155 ms, 94% HTTP 200 responses, and `No problems` for both the www and non-www hosts. Discovery is less than 1% of crawl requests while refresh rounds to 100%. This supports prioritizing discovery/crawling of the service pages; it does not prove a site-wide server fault or establish why Google has deferred these specific URLs.

## Follow-up

### Implemented locally after the audit

- Replaced the service hub's repeated homepage service grid with a placement/technique comparison table linking to the specialty services.
- Replaced the repeated generic process section with an order brief covering artwork, dimensions, fabric, machine format, deliverables and sample feedback.
- Added distinct order requirements and sample checks for cap, 3D puff and applique files. No new client results or sew-out claims were invented.
- Removed unconditional delivery-time promises from service metadata and clarified revision allowances against the published pricing plans.
- Updated sitemap modification dates only for the four service pages with substantive content changes.
- Checked the GSC Manual Actions report: `No issues detected`. Business aggregate-rating markup is absent from the reviewed service and root layouts. The displayed 4.8/142 rating comes from a static site-rating file; its review source still needs owner verification. There is no evidence establishing the rating as the cause of delayed indexing.

These changes require deployment before Google can see them and do not guarantee indexing.

Validation: targeted ESLint and TypeScript checks passed. The production build completed successfully and prerendered all four service routes.

The owner reports having requested service-page indexing repeatedly for roughly two weeks already. Another submission alone is not an adequate remedy; the dates below are observation checkpoints, not an expected indexing deadline.

Additional review found that `/services` and the homepage both target broad embroidery digitizing intent and share the ServicesGrid, ProcessSteps and CTA components. The specialty pages have technique-specific explanations, processes, FAQs and portfolio content, so they should not be classified as duplicates merely because they share a layout. The broad service hub would benefit from clearer service-selection and ordering information rather than more generic promotional copy. This is an editorial improvement opportunity, not a confirmed cause of non-indexing.

The GSC Links report currently lists six external links, pointing to the homepage and the manual-versus-AI blog article; no service URL is listed among external-link targets. This report is incomplete by design, so these are reported links, not a complete backlink census. Weak external discovery is a plausible contributing factor, not a proven diagnosis or reason to buy links.

The rendered service hub contains its text and links in the DOM. Some below-the-fold sections use scroll-triggered opacity animations. Presence of these animations does not establish an indexing block; the main service URL passed Google's live indexability test.

Recheck individual indexing status on 4 November 2026, then 11 November if still pending. Confirm last crawl, index status and Google-selected canonical. An accepted crawl request does not guarantee indexing. Do not repeatedly submit the same URL or change last-modified dates without an actual content update.

If these pages remain unindexed, reassess Crawl Stats and host availability, assess content overlap and usefulness, and review server logs if available before changing configuration.

Reference: https://support.google.com/webmasters/answer/7440203
