import { Component, type ErrorInfo, type ReactNode } from "react";
import { Link } from "react-router";

type Props = { children: ReactNode };
type State = { hasError: boolean; message?: string };

/**
 * Catches render errors and failed `lazy()` imports under `<Suspense>` so the rest of the layout (nav, footer) stays visible.
 */
export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, message: error.message };
  }

  override componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("[ErrorBoundary]", error, info.componentStack);
  }

  override render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-[50vh] flex-col items-center justify-center px-4 py-16 text-center">
          <h1
            className="mb-3 text-2xl md:text-3xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            We couldn&apos;t load this page
          </h1>
          <p className="mb-8 max-w-md text-muted-foreground leading-relaxed">
            {this.state.message ||
              "Something went wrong. Try refreshing, or go back to the home page."}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => this.setState({ hasError: false, message: undefined })}
              className="rounded-full border border-border px-6 py-3 text-sm hover:bg-muted transition-colors"
            >
              Try again
            </button>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="rounded-full border border-border px-6 py-3 text-sm hover:bg-muted transition-colors"
            >
              Reload page
            </button>
            <Link
              to="/"
              className="rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Go home
            </Link>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
