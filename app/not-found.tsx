import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="grid min-h-[75vh] place-items-center px-4 pt-24 text-center">
      <div className="max-w-xl space-y-6">
        <p className="text-sm font-bold uppercase tracking-wide text-primary">404</p>
        <h1 className="font-display text-5xl font-bold">Esta página no está en el plan de clase</h1>
        <p className="leading-8 text-muted-foreground">Puede que se haya movido o que el enlace sea incorrecto.</p>
        <Button asChild size="lg">
          <Link href="/">Volver al inicio</Link>
        </Button>
      </div>
    </section>
  );
}
