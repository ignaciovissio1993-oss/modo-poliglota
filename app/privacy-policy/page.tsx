import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: "Política de privacidad de Modo Políglota."
};

export default function PrivacyPolicyPage() {
  return <LegalPage title="Política de privacidad" />;
}

function LegalPage({ title }: { title: string }) {
  return (
    <section className="section-padding pt-32 lg:pt-40">
      <div className="container max-w-3xl space-y-7">
        <h1 className="font-display text-5xl font-bold">{title}</h1>
        <p className="leading-8 text-muted-foreground">
          Esta política placeholder explica cómo Modo Políglota podría recopilar, usar y proteger la información de
          estudiantes. Antes de lanzar, reemplazala por texto legal revisado para tu jurisdicción.
        </p>
        {["Información que recopilamos", "Cómo usamos la información", "Retención de datos", "Tus opciones"].map((heading) => (
          <div key={heading} className="space-y-3">
            <h2 className="font-display text-2xl font-bold">{heading}</h2>
            <p className="leading-8 text-muted-foreground">
              Solo pedimos información necesaria para responder consultas, coordinar clases, acompañar el progreso y
              mejorar el servicio. El acceso queda limitado al equipo autorizado y proveedores de confianza.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
