export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="text-4xl font-semibold tracking-tight">Welcome</h1>
      <p className="text-base text-neutral-500 max-w-sm">
        A minimal Next.js starter. Edit{" "}
        <code className="font-mono text-sm">app/page.tsx</code> to get started.
      </p>
    </main>
  );
}
