"""Gradually release posts from the content/blog-batch-20 branch onto main.

Usage (run on main):  python scripts/release-blog-batch.py slug-a slug-b ...

For every slug given (plus any already released earlier), it:
- copies the post file and its cover image from the batch branch,
- registers the post in app/blog/posts.ts,
- copies the batch-branch version of existing posts that gained contextual
  links, keeping only links whose targets are live, and dropping an added
  paragraph entirely when none of its links are live yet.
Links to posts that are not released yet are turned into plain text, so the
live site never links to a 404.
"""
import json, os, re, subprocess, sys

BRANCH = 'origin/content/blog-batch-20'
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(ROOT)

def git_show(path):
    return subprocess.run(['git', 'show', f'{BRANCH}:{path}'], capture_output=True, check=True).stdout

new_slugs = set(sys.argv[1:])
branch_posts = git_show('app/blog/posts.ts').decode('utf-8')
branch_slugs = re.findall(r"from './content/([^']+)'", branch_posts)
live_now = {f[:-3] for f in os.listdir('app/blog/content') if f.endswith('.ts')}
live = live_now | new_slugs
unknown = new_slugs - set(branch_slugs)
assert not unknown, f'unknown slugs: {unknown}'

# Link text never spans lines or brackets, so the match cannot start at an
# array bracket such as `items: [`.
LINK = re.compile(r'\[([^\[\]\n]+)\]\(/blog/([^)#?\s]+)\)')

def unlink_unreleased(text):
    return LINK.sub(lambda m: m.group(0) if m.group(2) in live else m.group(1), text)

def live_link_count(text):
    return sum(1 for m in LINK.finditer(text) if m.group(2) in live)

# 1. new posts + covers
for slug in sorted(new_slugs):
    src = git_show(f'app/blog/content/{slug}.ts').decode('utf-8')
    open(f'app/blog/content/{slug}.ts', 'w', encoding='utf-8', newline='').write(unlink_unreleased(src))
    open(f'public/images/blog/{slug}.webp', 'wb').write(git_show(f'public/images/blog/{slug}.webp'))

# 2. existing posts that gained links on the branch: rebuild from branch version
for slug in sorted(live_now):
    try:
        bsrc = git_show(f'app/blog/content/{slug}.ts').decode('utf-8')
    except subprocess.CalledProcessError:
        continue
    cur = open(f'app/blog/content/{slug}.ts', encoding='utf-8').read()
    if bsrc == cur:
        continue
    # drop appended paragraphs that would have no live link at all
    def drop(m):
        txt = json.loads('"' + m.group(1) + '"')
        return m.group(0) if live_link_count(txt) or not LINK.search(txt) else ''
    pat = re.compile(r',\n    \{\n      "?type"?: [\'"]p[\'"],\n      "?text"?: "((?:[^"\\]|\\.)*)",?\n    \}', re.S)
    bsrc = pat.sub(lambda m: drop(m), bsrc)
    out = unlink_unreleased(bsrc)
    open(f'app/blog/content/{slug}.ts', 'w', encoding='utf-8', newline='').write(out)

# 3. register in posts.ts using the branch order
cur = open('app/blog/posts.ts', encoding='utf-8').read()
order = [s for s in branch_slugs if s in live]
var = lambda s: 'post_' + s.replace('-', '_')
imports = '\n'.join(f"import {var(s)} from './content/{s}';" for s in order)
array = 'export const BLOG_POSTS: BlogPost[] = [\n' + ''.join(f'  {var(s)},\n' for s in order) + '];'
cur = re.sub(r"(import post_[^\n]+\n)+", imports + '\n', cur, count=1)
cur = re.sub(r'export const BLOG_POSTS: BlogPost\[\] = \[\n.*?\n\];', array, cur, count=1, flags=re.S)
open('app/blog/posts.ts', 'w', encoding='utf-8', newline='').write(cur)
print('live posts:', len(order), '| released now:', sorted(new_slugs))
