---
name: Project Design Patterns
description: Color tokens, typography conventions, spacing, and component patterns established in this Next.js starter project
type: project
---

## Color tokens (from globals.css @theme inline)
- `text-foreground` / `bg-foreground` — maps to `--color-foreground` (#171717 light, #ededed dark)
- `text-background` / `bg-background` — maps to `--color-background` (#ffffff light, #0a0a0a dark)
- Dark mode is CSS-variable-driven via `prefers-color-scheme`, no `dark:` class toggling
- `dark:` Tailwind variants work because the project uses `@import "tailwindcss"` in v4 style

## Typography
- Geist Sans: `font-sans` (CSS var `--font-geist-sans`)
- Geist Mono: `font-mono` (CSS var `--font-geist-mono`)
- Display headline pattern: `text-6xl sm:text-7xl md:text-8xl font-semibold tracking-tighter leading-none`
- Eyebrow label pattern: `font-mono text-xs tracking-widest uppercase text-neutral-400`

## Layout
- Body: `min-h-full flex flex-col` (set in layout.tsx)
- Main content: `flex flex-1 flex-col` — child takes remaining height
- Max content width: `max-w-5xl mx-auto w-full` with `px-6` horizontal padding

## Component patterns established
- Primary CTA button: `bg-foreground text-background` pill with `hover:opacity-80`
- Secondary CTA button: bordered, `border-neutral-200 dark:border-neutral-800`, `hover:bg-neutral-50 dark:hover:bg-neutral-900`
- Code panel: rounded-xl border, chrome bar with filename + dot decorations, `bg-neutral-50 dark:bg-neutral-900` header
- Feature stats: `<dl>` grid with `dt` eyebrow label + `dd` value

**Why:** Established during home page redesign. These patterns should be extended in future components for consistency.
**How to apply:** When adding new pages or components, reuse these tokens and patterns rather than inventing new ones.
