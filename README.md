# أصباغ وديكورات الشرقية ترميم وتشطيب (Sharqia Paints & Decor — Renovation & Finishing)

Live site: https://tarmeemsharqiya.com/ — GitHub Pages from this repo (repo name kept as tarmeensharqiya.com; the live domain per CNAME is tarmeemsharqiya.com).

## Structure (56 pages in 2 languages, rebuilt 2026-11-16)
- Shared custom assets only: `assets/style.css` + `assets/app.js` — no Tailwind CDN, no frameworks, no external fonts.
- Fully bilingual: every page exists in Arabic (root) and English (`en/` folder), with a per-page EN | عربي switcher and hreflang pairs.
  Clean URLs throughout (no .html; home is `/`, English home is `/en/`). The old `en.html` is a redirect stub to `/en/`.
- Pages per language: home, 5 service pages, 6 city pages, 4 town pages (Saihat, Safwa, Ras Tanura, Anak),
  3 intent pages (apartment finishing Dammam, villa renovation Khobar, bathroom renovation), `gallery` (all 68 projects),
  `pricing` (published indicative market price ranges), `blog` + 6 standalone articles.
- `gallery.json` — slim metadata for all 68 projects (base64 previews removed).
- `images/` — 68 real project photos (unchanged).
- Every page: correct-domain canonical/OG/schema, single H1, FAQ schema where relevant, lazy-loaded images.

## Business
Paints, decor, renovation & finishing — Dammam, Khobar, Dhahran, Qatif, Jubail, Al-Ahsa + Saihat, Safwa, Ras Tanura, Anak.
Phone/WhatsApp: 0530320587
