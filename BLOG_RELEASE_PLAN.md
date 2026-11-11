# Blog batch 3 release plan (20 posts on `content/blog-batch-20`)

Schedule confirmed by the owner on 7 Nov 2026: 5 posts per week. Posts are released a few at a time with `scripts/release-blog-batch.py`, run on a branch cut from `main`:

```bash
git fetch origin
git checkout main && git pull
git checkout -b release/blog-batch-20-weekN
python scripts/release-blog-batch.py <slug> <slug> ...
npm run build
```

The script copies the post files and covers from `origin/content/blog-batch-20`, registers them in `app/blog/posts.ts`, and restores the extra contextual links in older posts only for posts that are live. Links to posts that are not released yet become plain text, so the live site never links to a 404.

| Week | Posts | Status |
|---|---|---|
| 1 (7 Nov 2026) | satin-stitch-embroidery-guide, what-is-tackle-twill, how-to-start-an-embroidery-business, embroidery-fill-stitches-guide, how-to-make-embroidered-patches | Released |
| 2 (14 Nov 2026) | embroidery-vs-screen-printing, chain-stitch-embroidery-guide, how-to-remove-embroidery-from-a-shirt, metallic-embroidery-thread-guide, embroidered-name-patches-guide | Planned |
| 3 (21 Nov 2026) | iron-on-vs-sew-on-patches, tote-bag-embroidery-guide, embroidery-on-leather-guide, how-to-embroider-a-shirt, embroidery-machine-thread-tension-guide | Planned |
| 4 (28 Nov 2026) | sleeve-embroidery-guide, denim-jacket-embroidery-guide, brother-embroidery-machine-file-type, how-to-digitize-embroidery-designs (released early 11 Nov 2026, rewritten on main as the logo how-to; do not re-copy from the branch), baby-blanket-embroidery-guide | Planned |

Before each release, check Search Console: if the previous week's posts are still "Discovered - currently not indexed" after two weeks, pause and add more internal links from indexed pages before releasing more.
