import { cn } from "@/lib/utils";

export function YouTubeEmbed({ videoId, title, className }: { videoId: string; title: string; className?: string }) {
  return (
    <div className={cn("relative aspect-video overflow-hidden rounded-2xl border border-white/60 bg-muted shadow-soft", className)}>
      <iframe
        className="absolute inset-0 h-full w-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
