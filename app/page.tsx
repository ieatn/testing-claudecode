import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col px-6 py-16 md:py-24 max-w-5xl mx-auto w-full">

      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-10">
        <span className="font-mono text-xs tracking-widest uppercase text-neutral-400">
          Next.js App Router
        </span>
        <span className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
        <span className="font-mono text-xs text-neutral-400">v16</span>
      </div>

      {/* Hero headline */}
      <div className="mb-12">
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-semibold tracking-tighter leading-none text-foreground">
          Start here.
          <br />
          <span className="text-neutral-400">Build anything.</span>
        </h1>
      </div>

      {/* Sub-headline */}
      <p className="text-lg md:text-xl text-neutral-500 max-w-xl leading-relaxed mb-12">
        A minimal, production-ready foundation. Server Components, Tailwind CSS
        v4, and Geist typography — nothing more, nothing less.
      </p>

      {/* CTA row */}
      <div className="flex flex-wrap gap-3 mb-20">
        <Link
          href="/about"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-foreground text-background text-sm font-medium hover:opacity-80 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          About this project
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
        <a
          href="https://nextjs.org/docs"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-800 text-sm font-medium hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          Read the docs
        </a>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-4 mb-12">
        {/* Short accent block instead of a plain rule */}
        <span className="h-px w-8 bg-foreground" aria-hidden="true" />
        <span className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" aria-hidden="true" />
      </div>

      {/* Feature grid */}
      <dl className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10 mb-20">
        {[
          { label: "Framework", value: "Next.js 16" },
          { label: "Rendering", value: "App Router" },
          { label: "Styling", value: "Tailwind v4" },
          { label: "Language", value: "TypeScript" },
        ].map(({ label, value }) => (
          <div key={label}>
            <dt className="font-mono text-xs tracking-widest uppercase text-neutral-400 mb-1">
              {label}
            </dt>
            <dd className="text-base font-medium text-foreground">{value}</dd>
          </div>
        ))}
      </dl>

      {/* Code panel */}
      <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 overflow-hidden">
        {/* Panel chrome bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-neutral-50 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
          <span className="font-mono text-xs text-neutral-400">
            app/page.tsx
          </span>
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="w-3 h-3 rounded-full bg-neutral-200 dark:bg-neutral-700" />
            <span className="w-3 h-3 rounded-full bg-neutral-200 dark:bg-neutral-700" />
            <span className="w-3 h-3 rounded-full bg-neutral-200 dark:bg-neutral-700" />
          </div>
        </div>
        {/* Code content */}
        <pre className="px-5 py-5 overflow-x-auto text-sm leading-relaxed font-mono text-neutral-700 dark:text-neutral-300 bg-white dark:bg-neutral-950">
          <code>{`export default function Home() {
  return (
    <main>
      <h1>Start here. Build anything.</h1>
    </main>
  );
}`}</code>
        </pre>
      </div>

      {/* Footer footnote */}
      <p className="mt-8 font-mono text-xs text-neutral-400">
        Edit{" "}
        <span className="text-foreground">app/page.tsx</span>
        {" "}to replace this page.
      </p>

    </main>
  );
}
