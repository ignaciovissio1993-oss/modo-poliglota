"use client";

import { Facebook, Instagram, Languages, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

const socialLinks = [
  { label: "Instagram", icon: Instagram },
  { label: "YouTube", icon: Youtube },
  { label: "Facebook", icon: Facebook },
  { label: "LinkedIn", icon: Linkedin },
];

type FooterVariant = "default" | "english" | "vietnamese";

export function Footer({ variant = "default" }: { variant?: FooterVariant }) {
  const isPrivateLanguagePage = variant !== "default";
  const description = variant === "english"
    ? "Aprendé inglés conversacional online con clases personalizadas, conversaciones reales y horarios flexibles."
    : variant === "vietnamese"
      ? "Aprendé vietnamita online con una profesora nativa, clases personalizadas y horarios flexibles."
      : site.description;
  const closingText = variant === "english"
    ? "Clases online de inglés conversacional para estudiantes de todo el mundo."
    : variant === "vietnamese"
      ? "Clases online de vietnamita para estudiantes de todo el mundo."
      : "Clases online de vietnamita e inglés conversacional para estudiantes de todo el mundo.";

  return (
    <footer className="border-t border-border bg-card/70">
      <div className="container flex justify-center py-14">
        <div className="flex max-w-md flex-col items-center space-y-5 text-center">
          {isPrivateLanguagePage ? (
            <div className="flex items-center gap-3 font-display text-lg font-bold">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-primary text-primary-foreground">
                <Languages className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>{site.name}</span>
            </div>
          ) : (
            <Link href="/" className="flex items-center gap-3 font-display text-lg font-bold">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-primary text-primary-foreground">
                <Languages className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>{site.name}</span>
            </Link>
          )}
          <p className="text-sm leading-7 text-muted-foreground">{description}</p>
          <div className="flex justify-center gap-2">
            {socialLinks.map(({ label, icon: Icon }) => (
              <Button key={label} variant="outline" size="icon" aria-label={label}>
                <Icon className="h-4 w-4" />
              </Button>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-border py-5">
        <div className="container flex flex-col gap-2 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {new Date().getFullYear()} {site.name}. Todos los derechos reservados.</p>
          <p>{closingText}</p>
        </div>
      </div>
    </footer>
  );
}
