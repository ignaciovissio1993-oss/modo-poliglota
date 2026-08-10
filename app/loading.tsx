import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="container grid min-h-[70vh] gap-6 py-32 md:grid-cols-3">
      <Skeleton className="h-72 md:col-span-2" />
      <div className="space-y-4">
        <Skeleton className="h-10" />
        <Skeleton className="h-32" />
        <Skeleton className="h-12" />
      </div>
    </div>
  );
}
