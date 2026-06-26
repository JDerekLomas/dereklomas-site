# Handoff — 2026-06-26 — Quantum projects, vibecoding workshops, disk cleanup

## Website work (dereklomas-site → dereklomas.me) — all deployed to prod

Added two quantum projects (featured, top of /projects):
- **Quantum Resonance** — UNESCO cymatics exhibit. Image pulled from Derek's LinkedIn post. Links to the official UNESCO article (not quantum2025.org). `/projects/quantum-resonance`
- **Quantum Vibecoding** — TU Delft research site (quantumvibecoding.org). Card image is a Chrome screenshot of the live hero. `/projects/quantum-vibecoding`
- Cross-linked Quantum Vibecoding ↔ the existing blog essay "I Replicated 6 Quantum Computing Papers…" (added `relatedLinks` field to the Project type + render on detail page). Fixed the essay's stale `quantuminspire.vercel.app` link → `quantumvibecoding.org`.

Added **Vibe Coding Workshops** section to /talks (new `src/data/workshops.ts` + render block near top of `talks/page.tsx`):
- Mission framing = reaching people who benefit most but least likely to use AI (women entrepreneurs).
- Cards: **Smartgirls** (Ellen Joosten, smartgirls.nl, co-taught w/ Emma Furia — the flagship women-entrepreneurs example), AI & Cocktails (Embassy of the Free Mind), TU Delft Masterclass, ITU Copenhagen, Internet Archive, India design schools.
- Sourced from Derek's Gmail. Smart Girls event = mid-June 2026; participant Tessa Koops.

**Removed XWHYSI** (Milo's music portfolio) from the site per Derek's request — entry deleted from `projects.ts`, page now 404s. Note: there was never a "Milo's resume" on the site (earlier ask); XWHYSI was the only Milo item. Unused `public/images/projects/xwhysi.png` left in repo (harmless).

Git: clean, pushed to main. Last commit `d26cbb1`.

## Disk cleanup (home volume was 100% full — 287 MB free → now ~118 GB free)
- Cleared safe caches: `~/Library/Caches`, `~/.cache`, `~/.claude-archive` (~31 GB).
- **Deleted `~/.git`** (54 GB) — was an accidental `git init`+`add` in home with 0 commits / 0 refs / 0 tracked files / 90,772 dangling blobs. Verified junk; originals untouched.
- Still available to reclaim if needed: Downloads (35 GB), Rewind/MemoryVault data (25 GB), Chrome (20 GB).
- NOTE: npm-global `vercel` binary was briefly flaky during cache churn; resolved (full path `~/.npm-global/bin/vercel`).

## Rewind / MemoryVault (`com.memoryvault.MemoryVault`, 25 GB)
- It's **Rewind.app** (still installed at /Applications, v1.5460) — screen+audio recorder, data spans Feb–Oct 2025.
- Recordings are **plain MP4** (`chunks/YYYYMM/DD/`); only the index `db-enc.sqlite3` is encrypted. So recordings are recoverable without login.
- Launched it to test access → it RESTARTED live recording → **quit it** at end of session (stopped, not recording). Removed stray `~/Desktop/rewind-sample.mp4`.

## Open / next
- Decide whether to keep or delete the 25 GB Rewind vault (recoverable via MP4 chunks or the app).
- Optional: delete unused `xwhysi.png`; triage Downloads (35 GB).
