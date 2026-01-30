# Derek Lomas Portfolio Site

## Quick Reference
- **Repo:** `/Users/dereklomas/dereklomas-site`
- **GitHub:** `https://github.com/JDerekLomas/dereklomas-site`
- **Deployed:** Vercel (auto-deploys from main)
- **Stack:** Next.js 15 (App Router), Tailwind v4, TypeScript, D3.js
- **Dev:** `npm run dev` (port 3000)

## Design System
- **Fonts:** Cormorant Garamond (headings), Newsreader (body), Inter (UI)
- **Colors:** Warm paper tones, rust accent. See `src/app/globals.css` for CSS custom properties.
- **Components:** `ProjectCard` in `src/components/`

## Pages
- `/` — Hero with parallax
- `/about` — Bio (headshot at `/public/images/headshot.png` but not yet used)
- `/projects` — 18 projects with images and category filters
- `/research` — 75+ publications, 12 supervised students, research areas
- `/writing` — Substack + Medium articles
- `/lab` — Interactive experiments
- `/lab/skill-ancestry` — Live D3.js math skill tree (data: `/public/data/skill-importance-graph.json`)

## Content Sources
- **derek-lomas.com** — Project descriptions, images, bio
- **DBLP / derek-lomas.com/publications** — Academic publications
- **aixd.substack.com** — Substack articles
- **PlayPowerLearn repo** (`/Users/dereklomas/playpowerlearn`) — Skill visualizations

## Latest Handoff
See `~/.claude/handoffs/2025-01-30-portfolio-site.md` for detailed session state.
