# Performance changes and local verification

Implemented and checked on October 31, 2026. These changes are in the local project; they have not been deployed by this task. The earlier live PageSpeed audit remains in `reports/pagespeed/full-site/FINAL_REPORT.md`.

## Changes

- Ten shared hero backgrounds now have pre-generated responsive WebP variants. The first visitor does not wait for image optimizer encoding. The browser receives an eager, high-priority responsive image, rendered on the server with `getImageProps`.
- Generated image filenames include content hashes and use immutable caching. The prebuild scripts regenerate variants when the source changes.
- Forty felt/twill card thumbnails total 2,565,254 bytes, versus 13,107,412 bytes for the original images (80.4% smaller). Full-size modal previews continue to use the originals.
- The portfolio hero and static sections are server components. Only the gallery remains interactive; preview code loads when a preview is opened. Patch-page previews also load on demand.
- Reveal content is visible in server HTML, including with JavaScript disabled. Scroll animations share observers and no longer update React state for every visible element.
- Scroll progress uses a frame-coalesced transform instead of React state and width updates. The hero project count renders its final value on the server.
- The analytics event queue stays ready while the external analytics script loads after page resources, during idle time.

## Local mobile Lighthouse runs

Tests used the existing shared Chrome profile, a production build on port 3010, Lighthouse 13.6.0, the mobile configuration, and `--disable-storage-reset`. Final runs disabled the optional full-page screenshot artifact after that artifact timed out in earlier runs. No runtime errors occurred in the final three runs.

| Page | Before score | Final score | Before LCP | Final LCP | Before TBT | Final TBT |
|---|---:|---:|---|---|---|---|
| Home | 58 | 77 | 3.5 s | 1.8 s | 9,060 ms | 1,010 ms |
| Portfolio | Unusable baseline* | 75 | — | 1.8 s | — | 1,220 ms |
| Cap Logo | 71 | 77 | 2.3 s | 1.9 s | 1,620 ms | 960 ms |

*The first portfolio baseline contained a DevTools protocol timeout while collecting a full-page screenshot. Its score is not used as a valid before comparison. The initial non-final Home after-run also had that artifact error and is superseded by `after-home-final.json`.

These are individual local diagnostic runs. The shared profile contains extensions that appear in Lighthouse main-thread attribution, and local CPU/cache conditions vary. These scores are not Google-hosted PageSpeed scores and do not establish a production score improvement. Deploy and repeat the live audit to measure that outcome.

## Verification

- Production build and TypeScript passed; all 80 Next build entries generated.
- ESLint passed for changed application/configuration/asset-generation/browser-check files.
- All 70 sitemap pages return HTTP 200 with server-rendered headings.
- Mobile hero images load from the prepared WebP files, with no horizontal overflow on Home, Portfolio, and Cap Logo.
- Immutable image caching checked over HTTP.
- Portfolio load-more, Felt/Twill filters, URL category selection, lazy full-size previews, Escape close, and scroll restoration passed.
- Reveal content remains visible when JavaScript is disabled.
- Mobile and desktop screenshots were inspected. Detailed browser checks are in `browser-checks.json`.

Raw measurements are in `before-*.json` and `after-*-final.json`. Use the `*-final.json` files for final results.
