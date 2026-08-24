# mjadiaz.github.io

Personal site — landing page, blog with maths and interactive JS, publications
and events. Built with [Astro](https://astro.build), deployed to GitHub Pages.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview  # serve the built site
```

## Deploying

The site is a **user site**: it lives at the repo `mjadiaz/mjadiaz.github.io`
and is served from the domain root, so no `base` path is needed.

Every push to `main` runs `.github/workflows/deploy.yml` and publishes. Pages is
already set to **Settings → Pages → Source: GitHub Actions** from the previous
Hugo site, so there is nothing to change there.

### Replacing the old Hugo site

Do not delete the repo — a user site *must* be named `mjadiaz.github.io`, and
deleting it throws away the history for no gain. Replace its contents instead,
keeping the old commits underneath:

```sh
git remote add origin git@github.com:mjadiaz/mjadiaz.github.io.git
git fetch origin
git reset --soft origin/main   # keep history, stage this tree as the new state
git add -A
git commit -m "Replace Hugo site with Astro site"
git push origin main
```

`git reset --soft` leaves the working tree alone and re-points HEAD at the old
history, so the commit records "delete every Hugo file, add every Astro file" in
one step. No force-push, nothing lost.

The old `.github/workflows/publish.yaml` (Hugo) and `import-notebooks.yml` are
deleted by that commit — important, because two workflows both claiming the
`pages` concurrency group will fight over the deployment.

If you ever move this to a project repo (`github.com/mjadiaz/<name>`), set
`base: '/<name>'` in `astro.config.mjs` — otherwise every asset 404s.

## Writing a post

Drop a `.md` or `.mdx` file in `src/content/posts/`. The filename becomes the
URL. Frontmatter:

```yaml
---
title: "Post title"
description: "One or two lines — shown in listings, RSS and search results."
date: 2026-08-11
tags: ["neuroscience", "dynamics"]
math: true      # loads KaTeX on this page only
draft: false    # drafts render in `npm run dev`, never in a build
---
```

Tags need no registration — tag pages, counts and the sidebar list are all
generated from what the posts actually use.

### Maths

Inline `$\tau_E$`, display `$$ ... $$`. Rendered at build time by KaTeX, so
there is no client-side maths library and no flash of raw LaTeX.

### Interactive figures

Any `.astro` component drops into an `.mdx` post:

```mdx
import EIBalance from '../../components/demos/EIBalance.astro';

<EIBalance />
```

`src/components/demos/EIBalance.astro` is a worked example — canvas, sliders,
scoped styles, and an `IntersectionObserver` so it only animates while on
screen. Copy it as a starting point for new demos.

### Video

```mdx
import Video from '../../components/Video.astro';

<Video src="/videos/sim.mp4" poster="/videos/sim.jpg" caption="..." />
<Video youtube="VIDEO_ID" caption="..." />
```

Put files in `public/videos/`; they are served from `/videos/...`.

## Editing the CV-derived content

Plain TypeScript, no CMS:

| What | File |
| --- | --- |
| Name, bio, role, social links | `src/data/site.ts` |
| Publications | `src/data/publications.ts` |
| Events (talks, posters, courses) | `src/data/events.ts` |
| Research projects, education | `src/data/research.ts` |

Events with a **future date** are sorted into "Upcoming" automatically — add one
and it appears on the landing page and `/events` with no other change.

## Theme

Ember palette, dark by default. Tokens live at the top of
`src/styles/global.css` as CSS custom properties, defined once for
`:root`/`[data-theme='dark']` and again for `[data-theme='light']`. An explicit
choice is stored in `localStorage`; otherwise the OS is followed only when it
asks for light.

## Background

`src/components/GrowthBackground.astro` grows a dendritic network with the
space-colonization algorithm, then animates signal pulses along the branches.
It is purely decorative: `aria-hidden`, paused when the tab is hidden, and
under `prefers-reduced-motion` it renders the finished tree with no animation.

The tree is fully redrawn every frame with branch weights recomputed from
subtree size, so thickness grows continuously with the tree instead of snapping
to its final value at the end. The redraw is batched into `LEVELS` width buckets
— one `stroke()` per bucket rather than per segment — which costs about 0.7ms at
16k segments.

Tuning constants sit at the top of the script:

| Constant | Effect |
| --- | --- |
| `ATTRACT`, `KILL`, `SEG` | shape of the branching |
| `MIN_ATTR_GAP` | density of the attractor cloud |
| `NODES_PER_PX`, `MAX_NODES` | node budget — scales with viewport area, so a phone gets a smaller tree |
| `GROWTH_FRAMES` | length of the reveal (~240 frames ≈ 4s) on any screen size |
| `PULSE_AFTER` | how early signal pulses start during growth |

Overall strength is the `--canvas-alpha` token and the `--bg-mask` gradient in
`global.css`.
