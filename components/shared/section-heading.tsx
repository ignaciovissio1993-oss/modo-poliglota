import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={cn("mx-auto max-w-3xl space-y-4", align === "center" && "text-center", className)}>
      {eyebrow ? <Badge>{eyebrow}</Badge> : null}
      <h2 className="text-balance font-display text-3xl font-bold tracking-normal sm:text-4xl lg:text-5xl">{title}</h2>
      {description ? <p className="text-base leading-8 text-muted-foreground sm:text-lg">{description}</p> : null}
    </div>
  );
}
