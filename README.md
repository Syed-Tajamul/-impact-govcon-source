# Impact GovCon Solutions LLC

Marketing website for Impact GovCon Solutions LLC, built with [Astro](https://astro.build), Tailwind CSS, and Alpine.js — following the same component architecture, animation system, and interaction patterns as the Eonyx Astro codebase, restyled with Impact GovCon's navy/red brand and content.

## Project Structure

```
/
├── public/
│   ├── logo.png
│   ├── team/            # founder photos
│   └── case/            # case study photos
├── src/
│   ├── components/      # Topbar, Footer, Hero, Section, SectionTitle,
│   │                     Button, IndustryCard, ServiceCard, TeamCard,
│   │                     CaseStudyCard
│   ├── data/             # industries.ts, services.ts, caseStudies.ts, team.ts
│   ├── layouts/
│   │   └── Layout.astro  # shell: topbar, footer, scroll-reveal animation system
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── services.astro
│   │   ├── industries.astro
│   │   ├── case-studies.astro
│   │   ├── contact.astro
│   │   ├── privacy-policy.astro
│   │   ├── terms-conditions.astro
│   │   └── 404.astro
│   ├── scripts/
│   │   └── script.ts     # Alpine.js state: mobile menu, contact form
│   └── utils/
│       ├── routes.ts
│       └── helpers.ts
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                       |
| :---------------------- | :-------------------------------------------- |
| `yarn install` / `npm install` | Installs dependencies                  |
| `npm run dev`           | Starts local dev server at `localhost:4321`  |
| `npm run build`         | Build your production site to `./dist/`      |
| `npm run preview`       | Preview your build locally, before deploying |

## Design System

- **Colors**: navy `#0B1F3A`, red `#D62828`, card grey `#EEF0F4` — sampled directly from the brand screenshots.
- **Fonts**: Poppins (headings), Inter (body) — via Google Fonts.
- **Animations**:
  - Scroll-reveal via `IntersectionObserver` (`.animate-on-scroll` / `.animate-on-scroll-right` classes)
  - Pulse-effect CTA buttons, hover-lift cards
  - Animated dual-row marquee for the "Platforms We Work With" section (tabbed, pauses on hover) — `PlatformsMarquee.astro`
  - Case-study carousel with prev/next arrows, dot navigation, and slide transitions — `CaseStudyCarousel.astro`
  - Canvas-based animated constellation/network background on dark CTA sections — `NetworkBackground.astro`
- **Interactivity**: Alpine.js powers the mobile nav menu, the platforms tabs, the case-study carousel, and the contact form.

## Assets

- `public/team/` — founder headshots (Mudassar Malik, Mudasir Hafiz)
- `public/hero/` — homepage hero image (team at the Impact GovCon office)
- `public/case/` — case-study photos
- `public/gallery/` — additional office/team photography available for future sections
