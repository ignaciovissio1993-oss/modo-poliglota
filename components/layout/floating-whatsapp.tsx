"use client";

import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/data/site";

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Escribinos por WhatsApp"
      className="group fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lift transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/30 [animation-duration:3s]" />
      <MessageCircle className="relative h-7 w-7" />
      <span className="pointer-events-none absolute bottom-full right-0 mb-3 w-64 rounded-xl bg-foreground px-4 py-3 text-sm font-semibold text-background opacity-0 shadow-soft transition group-hover:translate-y-[-2px] group-hover:opacity-100">
        ¿Tenés dudas? Escribinos por WhatsApp
      </span>
    </a>
  );
}
