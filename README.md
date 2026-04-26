# Personal Portfolio Website

A personal portfolio and blog built with SvelteKit, Tailwind CSS, and a PocketBase backend. The site showcases my projects and hosts blog posts authored through a rich-text editor.

## Features

- **Home, About, and Projects pages** — static content highlighting my background and the projects I've built.
- **Projects gallery** — each project is rendered with its title, description, screenshot, and a list of technology badges.
- **Blog** — posts are loaded from a PocketBase backend, with a dedicated post view rendered via Tailwind Typography.
- **Blog editor** — authenticated authoring page using TinyMCE for rich-text content creation.
- **Server-side rendering** — pages and post data are loaded server-side through SvelteKit's `+page.server.js` loaders.
- **Responsive layout** — Tailwind CSS handles styling across mobile, tablet, and desktop breakpoints.

## Tech stack

- **Framework:** SvelteKit (Node adapter)
- **Language:** TypeScript / JavaScript
- **Styling:** Tailwind CSS + `@tailwindcss/typography`
- **Backend:** PocketBase (for blog content)
- **Editor:** TinyMCE
- **Build tool:** Vite

## Project structure

```
src/
├── components/   Reusable UI (Hero, NavigationBar, Project card, Editor, etc.)
├── lib/          API helpers for talking to PocketBase
└── routes/       SvelteKit pages: home, about, projects, blog (list/post/create)
```

## Running locally

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

To create and preview a production build:

```bash
npm run build
npm run preview
```

The blog features expect a running PocketBase instance; the URL is read from environment variables loaded via `dotenv`.
