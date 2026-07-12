import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <>
      <section className="pb-14 pt-6">
        <div className="container-wide">
          <Skeleton className="h-6 w-24" />
          <Skeleton className="mt-4 h-12 w-3/4" />
          <Skeleton className="mt-3 h-4 w-1/2" />
        </div>
      </section>
      <section className="py-16">
        <div className="container-wide">
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="h-8 w-24 rounded-full" />
            ))}
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-2xl border border-border/70 bg-card/60"
              >
                <Skeleton className="aspect-[16/10] w-full rounded-none" />
                <div className="space-y-2 p-5">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
