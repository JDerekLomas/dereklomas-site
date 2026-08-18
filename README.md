# dereklomas.me

Personal academic site for J. Derek Lomas — Tenured Assistant Professor of
Positive AI, Department of Human-Centered Design, TU Delft.

Next.js (App Router) + Tailwind, deployed on Vercel.

## Running locally

```bash
npm install
npm run dev          # http://localhost:3000
npx tsc --noEmit     # typecheck — run before deploying
```

## Where things live

| Path | What it is |
|---|---|
| `src/app/` | Routes. One folder per page, App Router conventions. |
| `src/data/` | Content that appears in more than one place — projects, workshops, student theses, shared stats. |
| `src/components/` | Shared UI. `SchemaOrg.tsx` emits the JSON-LD that search engines use to identify the site. |
| `public/` | Static assets, `robots.txt`, and the CV PDF served at `/cv-derek-lomas.pdf`. |

## Two things worth knowing before editing

**Numbers that appear on multiple pages live in `src/data/stats.ts`.** Source
Library counts used to be typed inline wherever they were needed, and drifted
until the same collection was described as 2,517, 12,347 and 15,000 books on
three different pages. Import the constant rather than typing a figure.

**The CV PDF is generated from the `/cv` page, not maintained separately.**
To regenerate after editing `src/app/cv/page.tsx`:

```bash
npm run dev
# then, in another shell:
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless=new --disable-gpu --user-data-dir=/tmp/cvprofile \
  --no-pdf-header-footer \
  --print-to-pdf="public/cv-derek-lomas.pdf" \
  "http://localhost:3000/cv"
```

The print layout is controlled by the `@media print` block at the bottom of
`src/app/globals.css` — that block is what strips the site chrome, tightens
spacing, and keeps entries from splitting across page breaks. Check the page
count after regenerating; it should be 5 pages.

## Unlisted pages

`/45`, `/review`, `/review-creative`, `/creative`, `/preview/*` and `/ea` are
personal or working pages that are not linked from the navigation. They carry
`robots: { index: false }` and are disallowed in `public/robots.txt`. Being
unlinked is not the same as being private — if you add another page like
this, add it to both places.

## Deploying

Pushing to `main` deploys via Vercel. Run `npx tsc --noEmit` first.
