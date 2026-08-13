import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { type ReactNode } from "react";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0D1117] px-4 text-[#F0F3F6]">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-[#58A6FF]">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-[#F0F3F6]">Page not found</h2>
        <p className="mt-2 text-sm text-[#8B949E]">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded border border-[#58A6FF] bg-[#58A6FF] px-4 py-2 text-sm font-semibold text-[#0D1117] transition-colors hover:bg-[#58A6FF]/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0D1117] px-4 text-[#F0F3F6]">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-[#F0F3F6]">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-[#8B949E]">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded border border-[#58A6FF] bg-[#58A6FF] px-4 py-2 text-sm font-semibold text-[#0D1117] transition-colors hover:bg-[#58A6FF]/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded border border-[#30363D] bg-[#161B22] px-4 py-2 text-sm font-medium text-[#F0F3F6] transition-colors hover:border-[#58A6FF]"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const siteTitle = "Khalil Wali — Full-Stack Developer | Junior DevOps Engineer";
const siteDescription =
  "Portfolio of Khalil Wali — Full-Stack Developer and Junior DevOps Engineer building modern applications, cloud infrastructure, containerized environments, and CI/CD pipelines.";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: siteTitle },
      { name: "description", content: siteDescription },
      { name: "author", content: "Khalil Wali" },
      { property: "og:title", content: siteTitle },
      { property: "og:description", content: siteDescription },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: siteTitle },
      { name: "twitter:description", content: siteDescription },
      { name: "twitter:image", content: "/og-image.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
