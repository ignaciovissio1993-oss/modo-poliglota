export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-4 text-center">
      <section className="max-w-xl space-y-6">
        <p className="text-sm font-bold uppercase tracking-wide text-primary">404</p>
        <h1 className="font-display text-5xl font-bold">Page Not Found</h1>
        <p className="leading-8 text-muted-foreground">
          The page you are looking for doesn&apos;t exist or may have been moved.
        </p>
      </section>
    </main>
  );
}
