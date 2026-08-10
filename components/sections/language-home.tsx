"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Landmark,
  Laptop,
  MessageCircle,
  Star,
  Tent,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import englishCardImage from "../../En.png";
import vietnameseCardImage from "../../Vi.png";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { YouTubeEmbed } from "@/components/shared/youtube-embed";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pricingPlans, teachers, testimonials, whatsappUrl } from "@/data/site";
import { cn } from "@/lib/utils";

type LanguageKey = "english" | "vietnamese";

type LanguageContent = {
  label: string;
  title: string;
  subtitle: string;
  marker: string;
  hash: string;
  sectionId: string;
  teacherName: string;
  selectorDescription: string[];
  heroBadge: string;
  heroTitle: string;
  heroDescription: string;
  heroBullets: string[];
  whyTitle: string;
  whyDescription: string;
  whyItems: string[];
  testimonialsTitle: string;
  pricingName: string;
  faqTitle: string;
  faqDescription: string;
  faqs: [string, string][];
};

const languageContent = {
  english: {
    label: "Inglés",
    title: "INGLÉS",
    subtitle: "Con Ignacio",
    marker: "EN",
    hash: "ingles",
    sectionId: "ingles",
    teacherName: "Ignacio",
    selectorDescription: [
      "Más de 6 años de experiencia enseñando inglés online a estudiantes internacionales.",
    ],
    heroBadge: "Clases online de ingles conversacional",
    heroTitle: "Habla ingles con mas confianza y naturalidad",
    heroDescription:
      "Clases privadas centradas en conversacion real, fluidez, escucha y expresion natural de ideas. En cada clase usamos materiales preparados y un documento Word compartido para guardar tus notas.",
    heroBullets: [
      "Conversaciones adaptadas a tu nivel",
      "Materiales preparados para cada clase",
      "Documento compartido con todas tus notas",
      "Correcciones naturales durante la conversacion",
      "Aprende hablando desde el primer dia",
    ],
    whyTitle: "Por que aprender ingles conversacional",
    whyDescription:
      "El objetivo es que puedas participar en conversaciones reales con mas seguridad, entender mejor lo que escuchas y expresar tus ideas sin traducir todo mentalmente.",
    whyItems: [
      "Hablar con mas fluidez y naturalidad",
      "Sentirte comodo en conversaciones reales",
      "Mejorar tu comprension auditiva",
      "Usar vocabulario nuevo en contexto",
      "Recibir correcciones sin perder confianza",
      "Repasar tus notas despues de cada clase",
    ],
    testimonialsTitle: "Estudiantes que ya avanzan con ingles conversacional",
    pricingName: "Clase de InglÃ©s",
    faqTitle: "Preguntas sobre las clases de ingles conversacional",
    faqDescription: "Detalles claros sobre nivel, conversacion, materiales, documento compartido, duracion y cancelaciones.",
    faqs: [
      ["Puedo empezar si tengo poco nivel?", "Si. Las conversaciones se adaptan a tu punto de partida con guias claras para que puedas hablar desde el primer dia."],
      ["Las clases son conversacionales?", "Si. Ignacio se especializa en ingles conversacional: speaking natural, fluidez, escucha y confianza al expresar tus ideas."],
      ["Que materiales recibo?", "Cada clase incluye materiales de conversacion preparados, vocabulario introducido naturalmente y practica personalizada segun tu nivel."],
      ["Como funciona el documento compartido?", "Usamos un documento Word online donde Ignacio y vos pueden escribir durante la clase. Ahi quedan vocabulario nuevo, expresiones utiles, notas gramaticales cuando hacen falta, correcciones y ejemplos personalizados."],
      ["Puedo revisar las notas despues?", "Si. El documento queda disponible despues de cada clase para que repases lo hablado, las correcciones y los proximos puntos de practica."],
      ["Cuanto dura cada clase?", "Cada clase dura 50 minutos."],
      ["Puedo cancelar una clase?", "Si. Podes cancelar o reprogramar con al menos 24 horas de anticipacion. Si el cambio se solicita con menos de 24 horas, la clase debera abonarse igualmente."],
    ],
  },
  vietnamese: {
    label: "Vietnamita",
    title: "VIETNAMITA",
    subtitle: "Con Diệp",
    marker: "VN",
    hash: "vietnamita",
    sectionId: "vietnamita",
    teacherName: "Diep",
    selectorDescription: [
      "Profesora nativa de vietnamita.",
      "Más de 8 años de experiencia enseñando vietnamita online a estudiantes internacionales.",
    ],
    heroBadge: "Clases online de vietnamita",
    heroTitle: "Aprende vietnamita con una profesora nativa",
    heroDescription:
      "Clases privadas para entender tonos, frases naturales y conversaciones reales desde el primer encuentro.",
    heroBullets: [
      "Practica oral guiada desde tu nivel",
      "Feedback paciente sobre tonos y pronunciacion",
      "Materiales simples para seguir practicando",
      "Contexto cultural para usar el idioma mejor",
    ],
    whyTitle: "Por que aprender vietnamita",
    whyDescription:
      "Ideal para viajar, conectar con personas vietnamitas, vivir experiencias mas profundas y acercarte a una cultura fascinante.",
    whyItems: [
      "Moverte con mas seguridad durante viajes",
      "Entender saludos, pedidos y situaciones diarias",
      "Mejorar la escucha sin depender de traducciones",
      "Crear vinculos mas genuinos con hablantes nativos",
      "Aprender pronunciacion con feedback paciente",
      "Construir una base solida sin memorizar de mas",
    ],
    testimonialsTitle: "Estudiantes que ya avanzan con vietnamita",
    pricingName: "Clase de Vietnamita",
    faqTitle: "Preguntas sobre las clases de vietnamita",
    faqDescription: "Detalles claros sobre nivel inicial, tonos, materiales, duracion y cancelaciones.",
    faqs: [
      ["Necesito saber algo antes de empezar?", "No. Podes comenzar desde cero y avanzar con una progresion clara."],
      ["Se trabajan los tonos?", "Si. Los tonos se practican desde las primeras clases con escucha, repeticion guiada y correcciones pacientes."],
      ["La profesora es nativa?", "Si. Las clases destacadas de vietnamita son con Diep, profesora nativa con experiencia online."],
      ["Que materiales recibo?", "Recibis notas de clase, audios, practica guiada y tareas opcionales para reforzar entre encuentros."],
      ["Cuanto dura cada clase?", "Cada clase dura 50 minutos."],
      ["Como se paga?", "Las clases se pagan de forma individual. No ofrecemos planes mensuales ni suscripciones."],
      ["Puedo cancelar una clase?", "Si. Podes cancelar o reprogramar con al menos 24 horas de anticipacion. Si el cambio se solicita con menos de 24 horas, la clase debera abonarse igualmente."],
    ],
  },
} satisfies Record<LanguageKey, LanguageContent>;

const selectorOrder: LanguageKey[] = ["english", "vietnamese"];

export function LanguageHome() {
  const [highlightedLanguage, setHighlightedLanguage] = useState<LanguageKey | null>(null);
  const highlightTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash.replace("#", "");
      const language = selectorOrder.find((key) => languageContent[key].hash === hash);

      if (!language) {
        return;
      }

      window.requestAnimationFrame(() => {
        document
          .getElementById(languageContent[language].sectionId)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);

    return () => {
      if (highlightTimeout.current) {
        clearTimeout(highlightTimeout.current);
      }
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, []);

  const selectLanguage = (language: LanguageKey) => {
    const content = languageContent[language];
    const target = document.getElementById(content.sectionId);

    window.history.pushState(null, "", `#${content.hash}`);
    setHighlightedLanguage(language);

    if (highlightTimeout.current) {
      clearTimeout(highlightTimeout.current);
    }

    highlightTimeout.current = setTimeout(() => setHighlightedLanguage(null), 1800);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <LanguageSelectionHero onSelect={selectLanguage} />
      <LanguageLanding language="english" highlighted={highlightedLanguage === "english"} />
      <LanguageLanding language="vietnamese" highlighted={highlightedLanguage === "vietnamese"} />
    </>
  );
}

function LanguageSelectionHero({ onSelect }: { onSelect: (language: LanguageKey) => void }) {
  return (
    <section className="overflow-hidden pt-24 sm:pt-28 lg:min-h-screen lg:pt-32">
      <div className="container flex min-h-[calc(100vh-6rem)] flex-col justify-center gap-8 pb-12 sm:pb-16 lg:pb-20">
        <div className="mx-auto min-w-0 max-w-3xl text-center">
          <div className="mx-auto inline-flex max-w-full items-center justify-center gap-2 rounded-full bg-[#0f3a6f] px-5 py-2.5 text-center text-sm font-bold uppercase tracking-normal text-white shadow-soft">
            <Laptop className="h-4 w-4" aria-hidden="true" />
            <span className="min-w-0 break-words">Clases particulares 100% online</span>
          </div>
          <h1 className="mt-6 text-balance font-display text-3xl font-bold tracking-normal text-foreground sm:text-5xl lg:text-6xl">
            Elegí qué idioma querés aprender
          </h1>
        </div>

        <div className="relative mx-auto grid w-full min-w-0 max-w-6xl justify-items-stretch gap-5 md:grid-cols-2 lg:gap-6">
          <div className="absolute left-1/2 top-1/2 z-10 hidden h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-background text-3xl font-black italic text-[#0f3a6f] shadow-soft md:grid">
            o
          </div>
          {selectorOrder.map((language) => (
            <LanguageSelectorCard
              key={language}
              language={language}
              onSelect={onSelect}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function LanguageSelectorCard({
  language,
  onSelect,
}: {
  language: LanguageKey;
  onSelect: (language: LanguageKey) => void;
}) {
  const content = languageContent[language];
  const isEnglish = language === "english";
  const backgroundImage = isEnglish ? englishCardImage : vietnameseCardImage;
  const overlayColor = isEnglish ? "rgba(240,249,255,0.78)" : "rgba(254,242,242,0.78)";

  return (
    <div className="h-full w-full min-w-0">
      <motion.button
        type="button"
        onClick={() => onSelect(language)}
        whileHover={{ y: -6 }}
        whileTap={{ scale: 0.975 }}
        className={cn(
          "group relative flex h-full min-h-[430px] w-full min-w-0 cursor-pointer flex-col overflow-hidden rounded-3xl border p-5 text-left shadow-soft transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:p-8",
          isEnglish
            ? "border-sky-200 bg-sky-50/75 hover:border-sky-300 hover:shadow-lift"
            : "border-red-200 bg-red-50/75 hover:border-red-300 hover:shadow-lift"
        )}
        style={{
          backgroundImage: `linear-gradient(${overlayColor}, ${overlayColor}), url(${backgroundImage.src})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        aria-label={`Ver clases de ${content.label}`}
      >
        <div
          className={cn(
            "pointer-events-none absolute inset-x-0 top-0 h-24 opacity-70",
            isEnglish
              ? "bg-[radial-gradient(circle_at_18%_28%,rgba(14,116,144,0.18),transparent_34%)]"
              : "bg-[radial-gradient(circle_at_22%_20%,rgba(220,38,38,0.16),transparent_34%)]"
          )}
          aria-hidden="true"
        />
        <div className="relative flex items-start justify-between gap-4">
          <div
            className={cn(
              "grid h-20 w-24 place-items-center rounded-2xl border bg-white/78 shadow-sm transition duration-300 group-hover:-translate-y-1",
              isEnglish ? "border-sky-200 text-[#0f3a6f]" : "border-red-200 text-[#c91d24]"
            )}
            aria-hidden="true"
          >
            <LanguageCardIllustration language={language} />
          </div>
          <span
            className={cn(
              "rounded-full px-3 py-1 text-xs font-bold",
              isEnglish ? "bg-[#0f3a6f] text-white" : "bg-[#c91d24] text-white"
            )}
          >
            {content.marker}
          </span>
        </div>

        <div className="relative mt-8 space-y-3">
          <h2
            className={cn(
              "font-display text-4xl font-black tracking-normal sm:text-5xl lg:text-6xl",
              isEnglish ? "text-[#0f3a6f]" : "text-[#c91d24]"
            )}
          >
            {content.title}
          </h2>
          <p
            className={cn(
              "font-display text-2xl font-semibold italic tracking-normal sm:text-3xl",
              isEnglish ? "text-[#194979]" : "text-[#bb1f28]"
            )}
          >
            {content.subtitle}
          </p>
        </div>

        <div className="relative mt-7 h-px w-full border-t border-dashed border-foreground/24" />

        <ul className="relative mt-6 min-w-0 space-y-4">
          {content.selectorDescription.map((item) => (
            <li key={item} className="flex min-w-0 gap-3 text-base font-semibold leading-7 text-foreground/85">
              <CheckCircle2
                className={cn("mt-0.5 h-6 w-6 shrink-0", isEnglish ? "text-[#0f3a6f]" : "text-[#c91d24]")}
              />
              <span className="block w-0 min-w-0 max-w-[calc(100vw-7.75rem)] flex-1 break-words [overflow-wrap:anywhere] sm:max-w-full">{item}</span>
            </li>
          ))}
        </ul>

        <span
          className={cn(
            "relative mt-auto inline-flex items-center gap-2 pt-8 text-sm font-bold transition duration-300 group-hover:translate-x-1",
            isEnglish ? "text-[#0f3a6f]" : "text-[#c91d24]"
          )}
        >
          Ver clases
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
        </span>
      </motion.button>
    </div>
  );
}

function LanguageCardIllustration({ language }: { language: LanguageKey }) {
  if (language === "english") {
    return (
      <div className="relative h-12 w-16">
        <BookOpen className="absolute bottom-0 left-0 h-9 w-9 stroke-[2.4]" />
        <Laptop className="absolute bottom-0 right-0 h-8 w-8 stroke-[2.4]" />
        <MessageCircle className="absolute right-2 top-0 h-5 w-5 stroke-[2.4]" />
      </div>
    );
  }

  return (
    <div className="relative h-12 w-16">
      <Landmark className="absolute bottom-0 left-4 h-9 w-9 stroke-[2.4]" />
      <Tent className="absolute bottom-0 right-0 h-7 w-7 stroke-[2.4]" />
      <span className="absolute bottom-1 left-0 h-9 w-px -rotate-12 rounded-full bg-current" />
      <span className="absolute bottom-1 left-2 h-10 w-px rotate-6 rounded-full bg-current" />
      <span className="absolute bottom-5 left-0 h-px w-4 rotate-12 rounded-full bg-current" />
      <span className="absolute bottom-7 left-1 h-px w-4 -rotate-12 rounded-full bg-current" />
    </div>
  );
}

function LanguageLanding({ language, highlighted }: { language: LanguageKey; highlighted: boolean }) {
  const content = languageContent[language];
  const teacher = teachers.find((item) => item.name === content.teacherName) ?? teachers[0];
  const plan = pricingPlans.find((item) => item.name === content.pricingName) ?? pricingPlans[0];

  return (
    <div
      id={content.sectionId}
      className={cn(
        "scroll-mt-24 transition-colors duration-700",
        highlighted && (language === "english" ? "bg-sky-500/5" : "bg-red-500/5")
      )}
    >
      <HeroBlock content={content} teacher={teacher} language={language} />
      <WhyBlock content={content} />
      <TestimonialsBlock language={language} title={content.testimonialsTitle} />
      <PricingBlock plan={plan} language={language} />
      <FaqBlock content={content} />
    </div>
  );
}

function HeroBlock({
  content,
  teacher,
  language,
}: {
  content: LanguageContent;
  teacher: (typeof teachers)[number];
  language: LanguageKey;
}) {
  return (
    <section className="overflow-hidden pb-12 pt-12 sm:pb-14 sm:pt-16 lg:pb-10 lg:pt-20">
      <div className="container grid items-center gap-7 lg:min-h-[calc(100vh-12rem)] lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)_minmax(0,0.9fr)] lg:gap-5 xl:gap-7">
        <Reveal delay={0.08} className="mx-auto w-full max-w-[520px] lg:mx-0 lg:max-w-[500px]">
          <YouTubeEmbed
            videoId={teacher.youtubeId}
            title={teacher.videoTitle}
            className="rounded-[22px] border-white/70 shadow-lift"
          />
        </Reveal>

        <Reveal className="space-y-5 lg:max-w-[420px]">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-2 text-sm font-semibold shadow-soft backdrop-blur">
            <MessageCircle className={cn("h-4 w-4", language === "english" ? "text-sky-700" : "text-red-600")} />
            {content.heroBadge}
          </div>
          <div className="space-y-3">
            <h2 className="text-balance font-display text-4xl font-bold tracking-normal sm:text-5xl lg:text-[2.9rem] lg:leading-[1.04]">
              {content.heroTitle}
            </h2>
            <p className="text-base leading-7 text-muted-foreground sm:text-lg">
              {content.heroDescription}
            </p>
          </div>
          <ul className="space-y-2.5">
            {content.heroBullets.map((point) => (
              <li key={point} className="flex gap-3 text-sm font-medium leading-6 text-foreground/85">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <Button asChild size="lg" className="bg-[#25D366] text-white hover:bg-[#1ebe5d]">
            <Link href={whatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle className="h-5 w-5" /> Consultar por WhatsApp
            </Link>
          </Button>
        </Reveal>

        <Reveal delay={0.16} className="space-y-4 lg:max-w-[370px]">
          <div className="space-y-2">
            <p className="text-sm font-bold uppercase tracking-wide text-primary">Tu profe</p>
            <h3 className="font-display text-3xl font-bold tracking-normal sm:text-4xl">{teacher.name}</h3>
            <p className="text-base font-semibold text-primary">{teacher.title}</p>
          </div>
          <p className="text-sm leading-7 text-muted-foreground sm:text-base">{teacher.bio}</p>
          <div className="rounded-2xl border border-border bg-card/78 p-5 shadow-soft backdrop-blur">
            <h4 className="text-sm font-bold uppercase tracking-wide text-muted-foreground">Filosofia de ensenanza</h4>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">{teacher.philosophy}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function WhyBlock({ content }: { content: LanguageContent }) {
  return (
    <section className="pb-16 pt-4 sm:pb-20 sm:pt-6 lg:pb-24">
      <div className="container space-y-12">
        <SectionHeading eyebrow="Beneficios" title={content.whyTitle} description={content.whyDescription} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {content.whyItems.map((item, index) => (
            <Reveal key={item} delay={index * 0.04}>
              <Card className="h-full p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lift">
                <CheckCircle2 className="mb-5 h-8 w-8 text-primary" />
                <h3 className="font-display text-xl font-bold">{item}</h3>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsBlock({ language, title }: { language: LanguageKey; title: string }) {
  const [index, setIndex] = useState(0);
  const items = useMemo(() => testimonials.filter((item) => item.language === language), [language]);
  const visible = useMemo(() => {
    if (items.length <= 3) {
      return items;
    }

    return [0, 1, 2].map((offset) => items[(index + offset) % items.length]);
  }, [index, items]);

  if (!items.length) {
    return null;
  }

  return (
    <section className="section-padding">
      <div className="container space-y-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            align="left"
            eyebrow="Testimonios"
            title={title}
            description="Historias de estudiantes que muestran una experiencia clara, humana y orientada a conversar mejor."
            className="mx-0"
          />
          <div className="flex gap-2" aria-label="Navegacion de testimonios">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIndex((value) => (value - 1 + items.length) % items.length)}
              aria-label="Testimonios anteriores"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIndex((value) => (value + 1) % items.length)}
              aria-label="Testimonios siguientes"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((item, cardIndex) => (
            <Reveal key={`${language}-${item.name}-${index}`} delay={cardIndex * 0.05}>
              <Card className="flex h-full min-h-[360px] flex-col p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lift">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div className="flex gap-1 text-orange-400" aria-label={`${item.rating} de 5 estrellas`}>
                    {Array.from({ length: item.rating }).map((_, ratingIndex) => (
                      <Star key={ratingIndex} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="whitespace-nowrap text-xs font-semibold text-muted-foreground">{item.date}</span>
                </div>
                <p className="text-base leading-8 text-muted-foreground">&quot;{item.quote}&quot;</p>
                <div className="mt-auto flex items-center gap-4 pt-6">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-emerald-100 to-sky-100 text-sm font-bold text-primary">
                    {item.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="font-bold">{item.name}</p>
                    <p className="text-sm text-muted-foreground">{item.source}</p>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
        <div className="flex justify-center gap-2" aria-label="Paginacion de testimonios">
          {items.map((item, dotIndex) => (
            <button
              key={`${item.name}-${dotIndex}`}
              type="button"
              onClick={() => setIndex(dotIndex)}
              className={cn(
                "h-2.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                dotIndex === index ? "w-8 bg-primary" : "w-2.5 bg-border hover:bg-primary/40"
              )}
              aria-label={`Ver testimonio ${dotIndex + 1}`}
              aria-current={dotIndex === index ? "true" : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingBlock({ plan, language }: { plan: (typeof pricingPlans)[number]; language: LanguageKey }) {
  return (
    <section className="section-padding">
      <div className="container space-y-12">
        <SectionHeading
          eyebrow="Precios"
          title="Clase individual, simple de reservar"
          description="Escribinos por WhatsApp y coordinamos una clase online de 50 minutos. Podes cancelar o reprogramar con al menos 24 horas de anticipacion."
        />
        <Reveal>
          <Card
            className={cn(
              "relative mx-auto max-w-xl overflow-hidden p-8 transition duration-300 hover:-translate-y-1 hover:shadow-lift md:p-10",
              language === "vietnamese" && "border-primary/60 bg-gradient-to-b from-secondary/80 to-card"
            )}
          >
            {language === "vietnamese" ? (
              <Badge className="absolute right-6 top-6 bg-primary text-primary-foreground">Profesora nativa</Badge>
            ) : null}
            <h3 className="font-display text-2xl font-bold">{plan.name}</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{plan.subtitle}</p>
            <div className="mt-8 flex items-end gap-2">
              <span className="font-display text-5xl font-bold">{plan.price}</span>
              <span className="pb-2 text-sm text-muted-foreground">{plan.cadence}</span>
            </div>
            <ul className="mt-8 space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex gap-3 text-sm">
                  <Check className="h-5 w-5 shrink-0 text-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button asChild className="mt-8 w-full" size="lg">
              <Link href={whatsappUrl} target="_blank" rel="noreferrer">
                {plan.cta}
              </Link>
            </Button>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}

function FaqBlock({ content }: { content: LanguageContent }) {
  return (
    <section className="section-padding bg-muted/45">
      <div className="container max-w-4xl space-y-10">
        <SectionHeading eyebrow="Preguntas frecuentes" title={content.faqTitle} description={content.faqDescription} />
        <Accordion type="single" collapsible className="rounded-2xl border border-border bg-card px-6 shadow-soft">
          {content.faqs.map(([question, answer], index) => (
            <AccordionItem key={question} value={`item-${index}`}>
              <AccordionTrigger>{question}</AccordionTrigger>
              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
