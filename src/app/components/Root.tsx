import { Suspense } from 'react';
import { Outlet } from 'react-router';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';
import { PreFooterFeatures } from './PreFooterFeatures';
import { OutletPageSkeleton } from './PageSkeletons';

export function Root() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Suspense fallback={<OutletPageSkeleton />}>
          <Outlet />
        </Suspense>
      </main>
      <PreFooterFeatures />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
