import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Detection, Features, HowItWorks, Privacy, Problems, Roadmap } from "@/components/landing/Sections";
import { LiveDemo } from "@/components/landing/LiveDemo";
import { QuickStart } from "@/components/landing/QuickStart";
import { Logo } from "@/components/landing/Logo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "m-Seismo — Bug reports with real diagnostics for React" },
      { name: "description", content: "A React web SDK that combines user bug reports with errors, breadcrumbs and browser context into one structured report." },
      { property: "og:title", content: "m-Seismo — Bug reports with real diagnostics" },
      { property: "og:description", content: "Turn user bug reports and browser diagnostics into one clean signal. Early development." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-primary focus:p-2 focus:text-primary-foreground">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <Problems />
        <HowItWorks />
        <LiveDemo />
        <Features />
        <Detection />
        <Privacy />
        <QuickStart />
        <Roadmap />
      </main>
      <footer className="border-t">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-8 text-sm text-muted-foreground">
          <Logo /><span>Early development · Built with React</span>
        </div>
      </footer>
    </>
  );
}
