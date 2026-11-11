# Yellowbrick website

Launch version 1.0 of the Yellowbrick studio site, built from the Website Blueprint and Brand and Website Style Guide in the parent folder.

Svelte 5 + SvelteKit, TypeScript, Tailwind CSS 4. Every page is prerendered to static HTML.

## Commands

```sh
npm install
npm run dev       # local development at http://localhost:5173
npm run check     # type check
npm run build     # static site in build/
npm run preview   # serve the production build
```

## Editing content

Almost all copy lives in `src/lib/content.ts`: contact details, navigation, services (prices, inclusions, FAQs), process steps, portfolio projects, and contact form options. Page layouts are in `src/routes/`.

Before launch, replace:

- `SITE.social` links — they point at the platform home pages.
- The three demo projects in `PROJECTS` with real work as it comes in. Thumbnails are line drawings in `src/lib/components/ProjectThumb.svelte`.
- Payment terms on `/process`, and the starter privacy policy and terms — have these reviewed.

## Contact form and analytics

Copy `.env.example` to `.env` and set:

- `VITE_FORMSPREE_ID` — create a form at formspree.io and paste its ID. Submissions then go to your inbox and visitors land on `/contact/thanks`. Without it, the form opens the visitor's email app with the inquiry pre-filled.
- `VITE_PLAUSIBLE_DOMAIN` — optional, turns on Plausible analytics.

## Deploying

GitHub Pages: every push to `main` builds and deploys the site with `.github/workflows/deploy.yml`, served from `https://<user>.github.io/<repo>/`. The workflow sets `BASE_PATH` to `/<repo>`, so internal links must go through `resolve()` and files in `static/` through `asset()` (both from `$app/paths`). The environment variables below aren't set there, so the contact form opens the visitor's email app.

Vercel or Netlify: import the `site` folder as the project root. Build command `npm run build`, output directory `build`. Add the environment variables above in the host's dashboard.

## Brand

Tokens are defined in `src/app.css`: yellow `#FFC600`, charcoal `#111316`, warm white `#F5F2EB`, steel `#8E9499`; Bebas Neue for headings and Inter for body text (self-hosted via Fontsource). The logo at `static/brand/brick.svg` is the traced `YellowBrickIcon.svg`, cropped and recoloured to the brand yellow.
