# Handoff — dark redesign shipped, Quantum Resonance footage, new portrait (2026-09-25)

## State
- PR #5 (dark-redesign) merged to main and live at https://dereklomas.me. All feature branches deleted; only `main` remains.
- Homepage hero: `public/images/portrait-door-bw.webp` (oak-door portrait, 8:9 crop). About page keeps `headshot-bw.webp`.
- Hero copy reads "assistant professor" (formal rank). Keep it that way.
- Quantum Resonance: hero loop + four gallery loops cut from Martijn Weber's exhibit footage
  (source: Drive folder "Cymatics Footage", shared by martijnweber@gmail.com; zip also in ~/Downloads).
  Gallery entries ending in `.mp4` render as silent loops; poster = same path with `.jpg`.
- MakeMode tile is a purpose-made 4:3 card (`makemode-tile.jpg`) from the MakeMode brand kit.

## Anchor rules (done, second round)
- The global `a` / `a:hover` rules now live in `@layer base`, so Tailwind `text-*` utilities on links win.
  Verified by full-page pixel diff of 15 routes, preview vs production: <0.02% differing pixels everywhere.
  `a.btn-solid` stays as the solid-button class.

## Verification recipe
- Chrome extension / DevTools MCP may be down. Playwright in `~/sourcelibrary` with
  `chromium.launch({ channel: 'chrome' })` works; scroll before full-page shots or lazy tiles are blank.
  Memory: `site-screenshot-fallback`.

## Multi-loop galleries (done, second round)
- Landshapes: four 12 s loops from Ueberschär's YouTube pieces (Abrupt `8Ypel6EW-yM`, Circular
  `_h9-d76JUBE`, DDW 2021 `8M8vglHzGuY`), seam cross-faded with ffmpeg xfade; credit line under the hero.
- Cloud Layer: `scripts/capture-cloud-layer-loop.mjs` run twice (LAT=58 VIEW_OFF=-55; LAT=-30 VIEW_OFF=-95,
  FRAMES=300), overlap-blended into `cloud-layer-north.mp4` / `cloud-layer-south.mp4`. Raw frames in
  `globe/` (gitignored). Each capture is ~15 min with a visible Chrome window.
- Loop recipe for a segment that never repeats: take 13 s, main = [1,13), tail 1 s xfades into [0,1).

## Possible next
- /projects/quantum-resonance and /projects/landshapes each carry ~15–18 MB of video; drop a clip if slow.
