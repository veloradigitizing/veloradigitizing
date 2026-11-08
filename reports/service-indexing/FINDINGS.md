# Service indexing investigation — 8 November 2026

## Confirmed problem

The connected `sc-domain:veloradigitizing.com` Search Console URL Inspection reports all four priority service URLs as **not indexed**, with last crawl and Google-selected canonical **N/A**. The homepage is indexed.

- `/services`: initially Discovered – currently not indexed; a repeat inspection returned URL unknown to Google.
- `/services/cap-logo-digitizing`: Discovered – currently not indexed.
- `/services/3d-puff-digitizing`: initially Discovered – currently not indexed; a repeat inspection returned URL unknown to Google.
- `/services/applique-digitizing`: URL unknown to Google.

The conflicting discovery labels are different inspection snapshots, not evidence that a URL was removed or penalized. These results confirm a discovery/crawling bottleneck for the inspected service URLs. They do not reveal Google's underlying scheduling or selection reason, and do not establish the cause of all low traffic on indexed pages.

## Checks completed

- Google live tests on all four priority service URLs returned **URL is available to Google / Page can be indexed**.
- All four deployed service pages return HTTP 200, one self-referencing canonical, index/follow metadata, no X-Robots-Tag restriction and server-rendered H1/content. Simulated Googlebot requests also return HTTP 200 and H1s; a user-agent simulation is not a verified Googlebot request.
- The live homepage, service hub, supporting technique articles and sitemap contain the service links. These URLs are not orphan pages. Sitemap and robots.txt return HTTP 200. A deliberately missing URL returns HTTP 404.
- Service pages contain roughly 1,500–1,700 words, with different technique content and headings. Shared page sections do not establish duplicate content or thin content as the cause.
- Crawl Stats updated 6 November: 861 requests, 155 ms average response, both hosts report No problems, 93% HTTP 200, refresh 100% rounded, discovery below 1%. Requests include resources, not just HTML pages.
- Manual Actions: **No issues detected**. Security Issues: **No issues detected**. These findings do not exclude algorithmic quality assessments.
- Links report: ten external links across the homepage and two articles; no service URL appears among reported external-link targets. The report is incomplete by design. Limited external discovery is a possible contributor, not a proven cause and not a reason to buy links.
- Performance, 9 August–6 November: 13 clicks, 191 impressions, 6.8% CTR, average position 30.9. Twenty-three query rows are visible; that is not a complete census of all searches. The aggregate Page indexing report remains dated 23 October and must not be presented as a current crawl snapshot.

Machine-readable live response findings: `audit.json`. Reproduce with `node scripts/audit-service-indexing.mjs`; optional arguments are origin and output directory.

## Reproduced defects and changes

1. After hydration, scroll-reveal sections use `opacity: 0` until an IntersectionObserver fires. An unscrolled browser render of the deployed service hub hides FAQ, related-services and other headings. This is a confirmed rendering/accessibility defect, **not a proven explanation for Google's non-indexing**. At the owner's request, scroll-reveal behavior has now been removed entirely: the shared wrapper is static, with no observer, animation styles or reveal CSS. No crawler-specific content is served.
2. The service hub's portfolio component links to `/portfolio?category=applique-design`, but the gallery uses the category `applique`. The incorrect value falls back to patches. The component now uses `applique` consistently.

No unsupported robots, canonical, URL, sitemap priority or content-volume changes were made. No invented reviews, project results or business-location claims were added. Existing testimonials and the Los Angeles address require owner confirmation; an answer was requested during the audit.

## Validation and deployment

- TypeScript check passed.
- Production build passed and prerendered all four service routes (68 total generated pages).
- Targeted ESLint passed.
- Browser regression check passed on all four local production routes, without scrolling and after hydration: `node scripts/verify-service-content-browser.mjs`.
- The same regression check against the deployed origin fails on hidden service-hub headings, confirming the live/local difference.
- Vercel CLI reports logged out. These changes are local until a deployment is confirmed. Do not report successful deployment, indexing or recovery based on the local tests.

## Follow-through

After deployment, repeat the browser regression against `https://www.veloradigitizing.com`, verify HTTP/canonical metadata, and run Google live inspection before requesting indexing once for changed priority URLs. An accepted request is not an indexing guarantee. Record first crawl and index status per URL, then compare equivalent 28-day periods for indexed pages. If crawling remains deferred, hosting access logs with verified Googlebot identification and owner-verified original project evidence are the next useful evidence; do not assert an exact hidden Google reason.

References: https://developers.google.com/search/docs/essentials/technical ; https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl ; https://developers.google.com/crawling/docs/crawl-budget
