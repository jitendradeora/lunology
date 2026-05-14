import { Suspense } from 'react';
import { Outlet } from 'react-router';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { ScrollToTop, ScrollWindowOnRouteChange } from './ScrollToTop';
import { PreFooterFeatures } from './PreFooterFeatures';
import { OutletPageSkeleton } from './PageSkeletons';
import { useLanguage } from './LanguageProvider';
import { ErrorBoundary } from './ErrorBoundary';

export function Root() {
  const { language } = useLanguage();
  const skipLabel =
    language === 'ar' ? 'تخطي إلى المحتوى الرئيسي' : 'Skip to main content';

  return (
    <div className="min-h-screen flex flex-col">
      <a href="#main-content" className="skip-to-main">
        {skipLabel}
      </a>
      <ScrollWindowOnRouteChange />
      <Navigation />
      <main id="main-content" className="flex-1" tabIndex={-1}>
        <ErrorBoundary>
          <Suspense fallback={<OutletPageSkeleton />}>
            <Outlet />
          </Suspense>
        </ErrorBoundary>
      </main>
      <PreFooterFeatures />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
