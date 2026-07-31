# THFC Dashboard — Modular v6.0

## What's new in v6.0 — FM/Championship Manager-style redesign

- **Player detail cards.** Click any squad card (or use the top-bar search) to open a pop-up player card in the style of Football Manager / Championship Manager: role badge, season involvement bar, goal threat bar, contract timeline, and live injury cross-reference — all derived from real data already in `squad.js`, nothing fabricated.
- **Quick search.** Top-bar search box filters the squad live as you type, FM-style — click a result to jump straight to that player's card.
- **Season Analysis (Overview tab).** New win/draw/loss radial gauge and "Spurs vs league average" goals-scored/conceded comparison bars — an actual analyst insight (is the table position an attack problem or a defence problem?) built from data already in `standings.js`, using hand-rolled SVG charts (`lib/charts.js`) so no new dependency was needed.
- **Zebra-striped tables, role badges, pitch-green accents** — visual language borrowed from FM/CM throughout Squad and Overview.

## What's new in v5.0

- **Real build pipeline.** JSX is now precompiled + minified ahead of time via esbuild, instead of being parsed live in the browser by Babel Standalone (~1.5MB library, gone entirely). Faster first paint, smaller download.
- **PWA support.** `manifest.json` + `sw.js` — the dashboard is now installable ("Add to Home Screen") and caches the app shell for offline use.
- **Error boundaries.** Every tab is isolated — a bad data entry in one panel shows a small "couldn't load" card instead of crashing the whole app.
- **Secret scanner.** `npm run check-secrets` (also runs automatically before every build) scans the whole project for exposed API keys and refuses to build if it finds one anywhere outside `automation/.env`.
- **CI smoke check.** `.github/workflows/build-check.yml` builds and sanity-checks the output on every push.

⚠️ **One-time setup change**: this version requires `npm install` once (to pull in esbuild as a dev dependency). After that, the daily workflow is unchanged: edit → `node build.js` → upload `dist/`.

## What goes where

```
spurs-modular/
├── src/                     ← Edit these files
│   ├── data/
│   │   ├── theme.js         ← All colours. Change one value, updates everywhere.
│   │   ├── standings.js     ← EPL table, last 5 results, top scorers
│   │   ├── squad.js         ← Squad list + injury list
│   │   ├── transfers.js     ← Rumours, confirmed signings, departures, daily whispers
│   │   ├── finances.js      ← Summer spend/income, PSR/SCR net position (cross-ref transfers.js manually)
│   │   ├── news.js          ← Cached news + RSS source config
│   │   ├── records.js       ← Trophies, domestic & European records
│   │   └── worldcup.js      ← WC 2026 player stats tracker
│   ├── lib/
│   │   ├── shared.js        ← Shared components: Logo, Chip, WH header, Bar, Clock, Countdown, ErrorBoundary, RoleBadge
│   │   └── charts.js        ← Hand-rolled SVG charts: RadialGauge, CompareBar, InlineBar (no charting library — see note below)
│   ├── components/
│   │   ├── App.js           ← Layout shell, nav order, top bar + search, status bar, wraps panels in ErrorBoundary
│   │   ├── OverviewPanel.js ← Overview tab (incl. Season Analysis charts)
│   │   ├── SquadPanel.js    ← Squad tab (clickable cards → PlayerDetail)
│   │   ├── PlayerDetail.js  ← FM-style player pop-up card
│   │   ├── InjuriesPanel.js ← Injuries tab
│   │   ├── TransfersPanel.js← Transfers tab
│   │   ├── FinancesPanel.js ← Finances tab (PSR/SCR spend, income, projected net position)
│   │   ├── RecordsPanel.js  ← Records tab
│   │   ├── NewsPanel.js     ← News tab (live RSS + 24hr cache)
│   │   ├── WorldCupPanel.js ← World Cup tab
│   │   └── RightFeed.js     ← Right sidebar (countdown, alerts, whispers, headlines, injuries)
│   ├── index-template.html  ← HTML shell — CDN React/ReactDOM, PWA meta tags, bundle placeholder
│   ├── manifest.json        ← PWA manifest (installability)
│   └── sw.js                ← Service worker (offline app-shell caching)
│
├── scripts/
│   └── check-secrets.js     ← Scans project for exposed API keys, blocks build if found
├── build.js                 ← Build script — run this after any edit
├── package.json             ← esbuild dev dependency + npm scripts
├── .github/workflows/
│   └── build-check.yml      ← CI: builds + sanity-checks on every push
├── dist/                    ← Generated — upload these 3 files to GitHub Pages
│   ├── index.html
│   ├── manifest.json
│   └── sw.js
└── README.md                ← This file
```

## First-time setup

```
npm install
node build.js
```

## How to make a change

1. Open the relevant file in `src/` (see table above)
2. Make your edit
3. Run: `node build.js`
4. Upload the updated `dist/index.html`, `dist/manifest.json` and `dist/sw.js` to GitHub

## Common edits

| What you want to change             | File to edit                    |
|-------------------------------------|---------------------------------|
| A colour (gold, red, navy etc)      | `src/data/theme.js`             |
| Font size on a specific tab         | `src/components/<Tab>Panel.js`  |
| World Cup stats after a match       | `src/data/worldcup.js`          |
| Add a transfer rumour               | `src/data/transfers.js`         |
| Add a daily whisper                 | `src/data/transfers.js`         |
| Update an injury return date        | `src/data/squad.js`             |
| Update squad player status          | `src/data/squad.js`             |
| Change the news RSS source          | `src/data/news.js`              |
| Reorder nav tabs                    | `src/components/App.js` — NAV array |
| Move a widget in the right column   | `src/components/RightFeed.js`   |
| Change next match / countdown date  | `src/lib/shared.js` — Countdown function |
| Bump PWA cache version              | `src/sw.js` — CACHE_NAME        |

## Deploying to GitHub Pages

Upload the contents of `dist/` to your GitHub repo root:
- `dist/index.html`
- `dist/manifest.json`
- `dist/sw.js`

All three are needed — `index.html` alone will still work, but PWA install/offline support needs the other two.

## Running in Electron (desktop app)

Point `main.js` at `dist/index.html`. All three `dist/` files must be in the same folder.

## Security — before you zip or share this project

**Never zip or share the project folder while `automation/.env` contains a real key.** Run this first:

```
npm run check-secrets
```

If it warns that `automation/.env` exists, delete or rename it before sharing/zipping — it's already gitignored so it won't reach GitHub, but a zip upload (e.g. to a chat) bypasses git entirely and will include it.

If you ever *do* expose a real key by accident: revoke it immediately at console.anthropic.com → Settings → API Keys, then generate a new one.

## Data freshness

- **News**: Fetched live from Google News RSS on load, cached in localStorage for 24hrs.
  Change `NEWS_CACHE_TTL` in `src/data/news.js` to adjust.
- **Everything else**: Updated by editing the relevant `src/data/*.js` file and rebuilding.

---
AUDERE EST FACERE · THFC 1882 · COYS
