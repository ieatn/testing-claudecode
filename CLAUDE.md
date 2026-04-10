# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Production build
npm run lint     # Run ESLint
```

No test runner is configured.

## Stack

- **Next.js 16.2.2** with App Router (`app/` directory) — see warning in AGENTS.md
- **React 19.2.4**
- **Tailwind CSS v4** (via `@tailwindcss/postcss` — v4 config differs from v3)
- **TypeScript**

## Architecture

This is a minimal Next.js App Router project. The entry points are:

- `app/layout.tsx` — root layout with Geist font variables and `min-h-full flex flex-col` body
- `app/page.tsx` — home page (Server Component by default)
- `app/globals.css` — global styles loaded via layout

Before writing any Next.js code, read the relevant guide in `node_modules/next/dist/docs/` — Next.js 16 has breaking changes from prior versions in your training data.