# I Know Your Age

Age-guessing game for **iknowyourage.games**: answer questions about pop-culture memories and the game guesses your age.

- Built with Astro as a fully static, prerendered site (no server functions). `npm install` → `npm run build` → deploy the `dist/` folder to any static host (Cloudflare Pages: build command `npm run build`, output `dist`).
- 5 prerendered language pages: `/` (English), `/ja/`, `/zh/`, `/es/`, `/pt/` — each with its own title/meta, canonical + hreflang, JSON-LD, plus `sitemap.xml`, `robots.txt` and `llms.txt`. The in-game 🌐 switcher links between these routes.
- 297 questions, adaptive 12–45 questions per game, confidence meter, memory-strata result chart and share card.
- The game code is the original single-file build, kept verbatim in `src/game/original.html` and assembled into each page at build time by `src/components/GamePage.astro`; the question bank and language packs live unchanged in `public/assets/`.
