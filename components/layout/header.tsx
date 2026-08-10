"use client";

import { Languages } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Button } from "@/components/ui/button";
import { site, whatsappUrl } from "@/data/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        scrolled ? "border-b border-border/70 bg-background/82 shadow-soft backdrop-blur-xl" : "bg-transparent"
      )}
    >
      <div className="container flex h-20 items-center justify-between gap-4">
        <Link href="/" className="flex min-w-0 items-center gap-3 font-display text-lg font-bold">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-soft">
            <Languages className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="truncate">{site.name}</span>
        </Link>

        <div className="flex shrink-0 items-center justify-end gap-2">
          <ThemeToggle />
          <Button asChild className="hidden sm:inline-flex">
            <Link href={whatsappUrl} target="_blank" rel="noreferrer">
              Reservá una clase
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
