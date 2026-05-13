import { useLocation } from "react-router";
import { Skeleton } from "./ui/skeleton";

function BannerBlock({ className = "" }: { className?: string }) {
  return (
    <section
      className={`relative py-16 md:py-24 px-4 overflow-hidden border-b border-border/60 ${className}`}
      style={{ backgroundColor: "var(--banner-bg)" }}
      aria-hidden
    >
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <Skeleton className="h-10 md:h-14 w-3/4 max-w-lg mx-auto rounded-xl" />
        <Skeleton className="h-5 w-full max-w-md mx-auto rounded-lg" />
        <Skeleton className="h-5 w-2/3 max-w-sm mx-auto rounded-lg" />
      </div>
    </section>
  );
}

/** Home: hero area + stacked sections + product strip */
export function HomePageSkeleton() {
  return (
    <div className="pt-20 min-h-screen" role="status" aria-busy="true" aria-label="Loading page">
      <div className="min-h-[70vh] md:min-h-[78vh] flex flex-col items-center justify-center gap-6 px-4 py-16 border-b border-border/40 bg-gradient-to-b from-muted/30 to-background">
        <Skeleton className="h-24 w-24 rounded-full" />
        <Skeleton className="h-12 w-64 max-w-full rounded-xl" />
        <Skeleton className="h-5 w-80 max-w-full rounded-lg" />
        <Skeleton className="h-10 w-40 rounded-full" />
      </div>
      <section className="py-12 px-4 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
          <Skeleton className="h-32 w-full md:w-72 rounded-2xl" />
          <Skeleton className="h-32 w-full md:w-72 rounded-2xl" />
        </div>
      </section>
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <Skeleton className="h-10 w-64 mx-auto rounded-xl" />
            <Skeleton className="h-4 w-96 max-w-full mx-auto rounded-lg" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="space-y-3">
                <Skeleton className="aspect-square w-full rounded-2xl" />
                <Skeleton className="h-4 w-20 rounded-md" />
                <Skeleton className="h-5 w-full rounded-md" />
                <Skeleton className="h-10 w-24 rounded-md" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/** Shop: banner + filter bar + product grid */
export function ShopPageSkeleton() {
  return (
    <div className="pt-20 min-h-screen" role="status" aria-busy="true" aria-label="Loading page">
      <BannerBlock />
      <section className="sticky top-20 z-30 border-b border-border bg-background/95 backdrop-blur-xl py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-10 w-24 rounded-xl" />
          ))}
          <div className="flex-1 min-w-[200px]" />
          <Skeleton className="h-10 w-40 rounded-xl" />
          <Skeleton className="h-10 w-36 rounded-xl" />
        </div>
      </section>
      <section className="py-10 px-4 max-w-7xl mx-auto">
        <Skeleton className="h-4 w-32 mb-6 rounded-md" />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="space-y-3">
              <Skeleton className="aspect-square w-full rounded-2xl" />
              <Skeleton className="h-3 w-16 rounded-md" />
              <Skeleton className="h-4 w-full rounded-md" />
              <Skeleton className="h-3 w-full rounded-md" />
              <Skeleton className="h-4 w-20 rounded-md" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

/** Product detail: breadcrumb strip + two columns */
export function ProductPageSkeleton() {
  return (
    <div className="pt-20 min-h-screen" role="status" aria-busy="true" aria-label="Loading page">
      <div className="py-4 px-4 border-b border-border" style={{ backgroundColor: "var(--banner-bg)" }}>
        <div className="max-w-7xl mx-auto flex gap-2">
          <Skeleton className="h-4 w-12 rounded-md" />
          <Skeleton className="h-4 w-4 rounded-md" />
          <Skeleton className="h-4 w-14 rounded-md" />
          <Skeleton className="h-4 w-4 rounded-md" />
          <Skeleton className="h-4 w-40 rounded-md" />
        </div>
      </div>
      <section className="py-8 px-4 max-w-7xl mx-auto">
        <Skeleton className="h-4 w-28 mb-6 rounded-md" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-4">
            <Skeleton className="aspect-square w-full rounded-2xl" />
            <div className="grid grid-cols-4 gap-3">
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="aspect-square rounded-lg" />
              ))}
            </div>
          </div>
          <div className="space-y-5">
            <Skeleton className="h-3 w-24 rounded-md" />
            <Skeleton className="h-10 w-full max-w-md rounded-xl" />
            <Skeleton className="h-4 w-48 rounded-md" />
            <Skeleton className="h-12 w-40 rounded-xl" />
            <Skeleton className="h-24 w-full rounded-xl" />
            <div className="flex gap-3">
              <Skeleton className="h-12 flex-1 rounded-xl" />
              <Skeleton className="h-12 w-14 rounded-xl" />
            </div>
            <div className="space-y-2 pt-4">
              <Skeleton className="h-10 w-full rounded-lg" />
              <Skeleton className="h-10 w-full rounded-lg" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/** Checkout: header + two-column layout */
export function CheckoutPageSkeleton() {
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-muted/20 to-background" role="status" aria-busy="true" aria-label="Loading page">
      <section className="py-12 px-4 border-b border-border" style={{ backgroundColor: "var(--banner-bg)" }}>
        <div className="max-w-7xl mx-auto space-y-2">
          <Skeleton className="h-10 w-48 rounded-xl" />
          <Skeleton className="h-4 w-72 max-w-full rounded-lg" />
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="rounded-2xl border border-border bg-card p-6 space-y-4">
              <Skeleton className="h-6 w-40 rounded-md" />
              <Skeleton className="h-10 w-full rounded-xl" />
              <Skeleton className="h-10 w-full rounded-xl" />
              <div className="grid grid-cols-2 gap-4">
                <Skeleton className="h-10 w-full rounded-xl" />
                <Skeleton className="h-10 w-full rounded-xl" />
              </div>
            </div>
          ))}
        </div>
        <div className="lg:col-span-1">
          <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
            <Skeleton className="h-6 w-32 rounded-md" />
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex gap-3">
                <Skeleton className="h-16 w-16 rounded-lg shrink-0" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-4 w-full rounded-md" />
                  <Skeleton className="h-3 w-20 rounded-md" />
                </div>
              </div>
            ))}
            <Skeleton className="h-12 w-full rounded-xl mt-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

/** About, FAQ, policies, contact, elements, biogeometry article-style pages */
export function ContentPageSkeleton({ sections = 4 }: { sections?: number }) {
  return (
    <div className="pt-20 min-h-screen" role="status" aria-busy="true" aria-label="Loading page">
      <BannerBlock />
      <section className="py-16 px-4 max-w-4xl mx-auto space-y-12">
        {Array.from({ length: sections }).map((_, i) => (
          <div key={i} className="space-y-4">
            <Skeleton className="h-9 w-3/4 max-w-md rounded-xl" />
            <Skeleton className="h-4 w-full rounded-md" />
            <Skeleton className="h-4 w-full rounded-md" />
            <Skeleton className="h-4 w-5/6 rounded-md" />
          </div>
        ))}
      </section>
    </div>
  );
}

/** BioGeometry: extra product grid block after banner */
export function BioGeometryPageSkeleton() {
  return (
    <div className="pt-20 min-h-screen" role="status" aria-busy="true" aria-label="Loading page">
      <BannerBlock />
      <section className="py-16 px-4 max-w-4xl mx-auto space-y-6">
        <Skeleton className="h-9 w-2/3 max-w-sm rounded-xl mx-auto" />
        <Skeleton className="h-4 w-full rounded-md" />
        <Skeleton className="h-4 w-full rounded-md" />
      </section>
      <section className="py-12 px-4 bg-muted/20 border-y border-border">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <Skeleton className="h-10 w-56 mx-auto rounded-xl" />
            <Skeleton className="h-4 w-96 max-w-full mx-auto rounded-lg" />
            <Skeleton className="h-10 w-48 mx-auto rounded-xl" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="space-y-2">
                <Skeleton className="aspect-square w-full rounded-2xl" />
                <Skeleton className="h-3 w-full rounded-md" />
                <Skeleton className="h-4 w-24 rounded-md" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 px-4 max-w-4xl mx-auto space-y-8">
        {Array.from({ length: 2 }).map((_, i) => (
          <div key={i} className="space-y-3">
            <Skeleton className="h-8 w-48 rounded-lg" />
            <Skeleton className="h-4 w-full rounded-md" />
            <Skeleton className="h-4 w-full rounded-md" />
          </div>
        ))}
      </section>
    </div>
  );
}

/** Minimal shell when path is unknown */
export function GenericPageSkeleton() {
  return (
    <div className="pt-20 min-h-screen px-4 py-12 max-w-4xl mx-auto" role="status" aria-busy="true" aria-label="Loading page">
      <BannerBlock className="rounded-2xl mb-10" />
      <div className="space-y-4">
        <Skeleton className="h-8 w-2/3 rounded-xl" />
        <Skeleton className="h-4 w-full rounded-md" />
        <Skeleton className="h-4 w-full rounded-md" />
        <Skeleton className="h-4 w-4/5 rounded-md" />
      </div>
    </div>
  );
}

/**
 * Route-aware fallback while lazy route modules load (React Suspense).
 * Must render under the data router (uses `useLocation`).
 */
export function OutletPageSkeleton() {
  const { pathname } = useLocation();

  if (pathname === "/") return <HomePageSkeleton />;
  if (pathname.startsWith("/shop")) return <ShopPageSkeleton />;
  if (pathname.startsWith("/product")) return <ProductPageSkeleton />;
  if (pathname === "/checkout") return <CheckoutPageSkeleton />;
  if (pathname === "/biogeometry") return <BioGeometryPageSkeleton />;
  if (
    pathname === "/about" ||
    pathname === "/contact" ||
    pathname === "/faq" ||
    pathname === "/elements" ||
    pathname === "/refund-policy" ||
    pathname === "/terms-conditions" ||
    pathname === "/privacy-policy"
  ) {
    return <ContentPageSkeleton sections={pathname === "/faq" ? 6 : 4} />;
  }

  return <GenericPageSkeleton />;
}
