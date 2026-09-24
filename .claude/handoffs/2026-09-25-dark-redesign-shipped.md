# Handoff — dark redesign shipped, Quantum Resonance footage, new portrait (2026-09-25)

## State
- PR #5 (dark-redesign) merged to main and live at https://dereklomas.me. All feature branches deleted; only `main` remains.
- Homepage hero: `public/images/portrait-door-bw.webp` (oak-door portrait, 8:9 crop). About page keeps `headshot-bw.webp`.
- Hero copy reads "assistant professor" (formal rank). Keep it that way.
- Quantum Resonance: hero loop + four gallery loops cut from Martijn Weber's exhibit footage
  (source: Drive folder "Cymatics Footage", shared by martijnweber@gmail.com; zip also in ~/Downloads).
  Gallery entries ending in `.mp4` render as silent loops; poster = same path with `.jpg`.
- MakeMode tile is a purpose-made 4:3 card (`makemode-tile.jpg`) from the MakeMode brand kit.

## Known trap
- `globals.css` has unlayered `a { color: inherit }` / `a:hover` rules. In Tailwind v4 those beat every
  layered `text-*` utility on links. Fixed for the project-page button via `a.btn-solid`. A proper fix is
  moving the base anchor rules into `@layer base`, but that changes link colours site-wide; do it as a
  deliberate pass with a full visual check.

## Verification recipe
- Chrome extension / DevTools MCP may be down. Playwright in `~/sourcelibrary` with
  `chromium.launch({ channel: 'chrome' })` works; scroll before full-page shots or lazy tiles are blank.
  Memory: `site-screenshot-fallback`.

## Possible next
- Landshapes and Cloud Layer could take the same multi-loop gallery treatment.
- Page weight on /projects/quantum-resonance is ~18 MB of video; drop cyan or blue-on-blue if it matters.
