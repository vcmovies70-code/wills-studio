# Cineframe Videography Website — Standalone Export

This folder is a complete standalone export of the Cineframe multi-page React website. It includes the preserved cinematic home page, About, Work / Blog, Events, and Contact pages, all source code, styles, configuration, generated images, portfolio stills, and the local hero video.

## Run the website with npm

Open a terminal in the folder that directly contains this README and `package.json`. After extracting the ZIP, that folder is named `cineframe-videography`.

```bash
cd cineframe-videography
npm install
npm run dev
```

Open the exact local URL printed by Vite. It normally starts at `http://127.0.0.1:3000/`. If port 3000 is busy, Vite prints the next available port.

Do not run `npm run dev` from the ZIP’s parent folder or from the `client` folder. The command must run beside `package.json`.

## Validate a production build

```bash
npm run check
npm run build
npm run preview
```

The project was clean-installed and verified with `npm ci`, `npm run check`, `npm run build`, and `npm run dev` from the extracted folder. The routes `/`, `/about`, `/work`, `/blog`, `/events`, and `/contact` are included. Every page uses the shared navbar in `client/src/components/SiteNavigation.tsx`, which links Home, About, Work / Blog, Events, and Contact; the fallback 404 page uses the same shell as well.

## Important files

| Path | Purpose |
|---|---|
| `client/src/pages/Home.tsx` | Original Cineframe home page with video hero. |
| `client/src/pages/About.tsx` | Studio story and working principles. |
| `client/src/pages/Work.tsx` | Work / Blog archive and video cards. |
| `client/src/pages/Events.tsx` | Upcoming screenings, workshops, and talks. |
| `client/src/pages/Contact.tsx` | Contact form, map, and studio details. |
| `client/src/components/SiteNavigation.tsx` | Shared all-pages navbar with active states and responsive menu behavior. |
| `client/src/components/SiteChrome.tsx` | Shared inner-page shell and footer. |
| `client/src/index.css` | Global design system and responsive styles. |
| `client/public/assets/` | All local images, logo, poster images, and hero video. |
| `vite.config.ts` | Portable Vite configuration for local npm development. |
| `package.json` | npm scripts and dependencies. |
| `package-lock.json` | Reproducible npm dependency lockfile. |

## Troubleshooting

If the terminal says `vite: not found`, run `npm install` from the same folder as `package.json` and then run `npm run dev` again.

If npm says it cannot find `package.json`, change directory into the inner `cineframe-videography` folder first. The correct folder contains this README, `package.json`, `client`, `shared`, and `vite.config.ts`.

If an old install is causing problems, reset only the generated dependency folder and reinstall:

```bash
rm -rf node_modules
npm ci
npm run dev
```

The video and images are bundled under `client/public/assets`, so this export does not depend on Manus storage URLs or a project-specific proxy.
