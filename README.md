# Alex Carter — Portfolio

A dark, violet-accented portfolio built with Next.js 16, TypeScript and Tailwind CSS 4.
It ships with a responsive one-page layout, animated section reveals, and a dedicated
case-study page for every project.

> All content currently uses a placeholder persona (**Alex Carter**). Everything you see
> is driven by one data file, so swapping in your real details takes minutes.

## Features

- Sticky navbar with scroll-spy, scroll progress bar and animated mobile drawer
- Hero with designation, portrait, resume download, social links and stats
- About, categorized skills with animated proficiency bars, education and experience timelines
- Project cards (3 included) plus generated detail pages at `/projects/[slug]`
  - tech stack, description, live link, GitHub link, challenges, future improvements
- Contact cards for email, phone and WhatsApp (mailto / tel / wa.me — no backend)
- Footer with quick links, contact details and back-to-top
- Fully responsive from 320px up, keyboard-friendly focus states, reduced-motion support,
  SEO metadata and Open Graph tags

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build    # production build (all project pages pre-rendered)
npm start        # serve the production build
npm run typecheck
```

## Make it yours

### 1. Content

Edit **`src/data/portfolio.ts`** — it contains:

- `profile` (name, designation, tagline, bio, location, email, phone, WhatsApp, availability)
- `socials`, `stats`, `stack`
- `skillGroups`, `education`, `experience`
- `projects` (slug, name, tagline, image, tech, description, features, challenges,
  improvements, live/GitHub URLs)
- `site` metadata, `navLinks`

### 2. Assets

| File | Purpose |
| --- | --- |
| `public/profile.svg` | Hero portrait — replace with your photo (e.g. `profile.jpg`, then update `profile.photo`) |
| `public/resume.pdf` | Resume opened by the Download button — replace with your real PDF |
| `public/projects/*.svg` | Project cover images — replace or point `project.image` at your screenshots |
| `src/app/icon.svg` | Favicon |

The resume button points at `/resume.pdf` and uses the `download` attribute, so dropping in
a new PDF is enough — no code change required. Project detail pages are generated
automatically from the `projects` array at build time.

### 3. Links to replace

The placeholder social handles (`alexcarter`), email (`hello@alexcarter.dev`), phone number,
project live URLs (`*.example.com`) and `site.url` all live in `src/data/portfolio.ts`.

## Project structure

```
src/
├── app/
│   ├── layout.tsx               # fonts, metadata, navbar + footer
│   ├── page.tsx                 # home sections
│   ├── globals.css              # design tokens, components, animations
│   ├── icon.svg                 # favicon
│   ├── not-found.tsx
│   └── projects/[slug]/page.tsx # static project case-study pages
├── components/                  # Navbar, Hero, About, Skills, Education,
│                                # Experience, Projects, Contact, Footer
│   └── ui/                      # Reveal, SectionHeading
├── data/portfolio.ts            # single source of truth for content
```

## Deploy

The site is a standard Next.js app and deploys to Vercel with zero config:

1. Push the repository to GitHub.
2. Import it in Vercel.
3. Deploy — no environment variables are required.

Any Node host that supports `next build` / `next start` also works.

## Design tokens

| Token | Value |
| --- | --- |
| Background | `#08070e` with radial violet glows |
| Surface | `#120f1f` |
| Accent | `#8b5cf6` → `#c4b5fd` |
| Text | `#f5f2ff` / muted `#a49bbd` |
| Fonts | Space Grotesk (display), Inter (body), JetBrains Mono (labels) |
