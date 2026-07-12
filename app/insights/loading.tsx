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
      <section className="pb-12">
        <div className="container-wide">
          <div className="grid gap-0 overflow-hidden rounded-3xl border border-border/70 bg-card/60 lg:grid-cols-2">
            <Skeleton className="aspect-[16/10] w-full rounded-none" />
            <div className="space-y-3 p-8">
              <Skeleton className="h-5 w-32" />
              <Skeleton className="h-10 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          </div>
        </div>
      </section>
      <section className="pb-24">
        <div className="container-wide">
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
