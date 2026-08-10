import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos",
  description: "Términos de servicio de Modo Políglota."
};

export default function TermsPage() {
  return (
    <section className="section-padding pt-32 lg:pt-40">
      <div className="container max-w-3xl space-y-7">
        <h1 className="font-display text-5xl font-bold">Términos</h1>
        <p className="leading-8 text-muted-foreground">
          Estos términos placeholder describen reservas, reprogramaciones, pagos, uso aceptable y materiales de clase.
          Reemplazalos por términos legales revisados antes de aceptar pagos reales.
        </p>
        <div className="space-y-3">
          <h2 className="font-display text-2xl font-bold">Clases y horarios</h2>
          <p className="leading-8 text-muted-foreground">
            Cada clase dura 50 minutos y se coordina online según disponibilidad. Las clases son individuales y se
            reservan por WhatsApp.
          </p>
        </div>
        <div className="space-y-3">
          <h2 className="font-display text-2xl font-bold">Pagos</h2>
          <p className="leading-8 text-muted-foreground">
            Las clases se pagan de forma individual. No ofrecemos planes mensuales ni suscripciones.
          </p>
        </div>
        <div className="space-y-3">
          <h2 className="font-display text-2xl font-bold">Cancelaciones</h2>
          <p className="leading-8 text-muted-foreground">
            Las clases pueden cancelarse o reprogramarse con al menos 24 horas de anticipación. Las cancelaciones o
            cambios realizados con menos de 24 horas de anticipación se consideran como clase tomada y deberán abonarse
            igualmente.
          </p>
        </div>
        <div className="space-y-3">
          <h2 className="font-display text-2xl font-bold">Uso de materiales</h2>
          <p className="leading-8 text-muted-foreground">
            Cada estudiante es responsable de usar los materiales únicamente para estudio personal.
          </p>
        </div>
      </div>
    </section>
  );
}
