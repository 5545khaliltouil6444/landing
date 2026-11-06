import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { hero } from "@/content/landing";
import { Seismograph } from "./Seismograph";

export function Hero() {
  const [spike, setSpike] = useState(0);
  return (
    <section id="top" className="grid-bg relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-2 md:py-28">
        <div>
          <p className="inline-flex rounded-full border px-3 py-1 font-mono text-xs text-muted-foreground">● {hero.badge}</p>
          <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">{hero.title}</h1>
          <p className="mt-6 max-w-[60ch] text-lg text-muted-foreground">{hero.sub}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#how" className="glow rounded-md bg-primary px-5 py-3 font-medium text-primary-foreground transition-transform hover:-translate-y-0.5">See how it works</a>
            <a href="#start" className="rounded-md border px-5 py-3 font-medium hover:bg-muted">Run it locally</a>
          </div>
        </div>
        <div className="rounded-xl border bg-card p-5">
          <div className="flex items-center justify-between font-mono text-xs text-muted-foreground">
            <span>signal · live</span>
            <button onClick={() => setSpike(Date.now())} className="min-h-11 rounded-md border border-alert px-3 text-alert hover:bg-alert/10">Trigger a bug</button>
          </div>
          <Seismograph spike={spike} />
          <div className="min-h-44" aria-live="polite">
            <AnimatePresence>
              {spike > 0 && (
                <motion.pre key={spike} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} className="overflow-x-auto rounded-md bg-muted p-4 font-mono text-xs">
{`{
  "type": "auto",
  "error": { "message": "Cannot read 'id' of undefined" },
  "url": "https://app.example/checkout",
  "breadcrumbs": [{ "type": "click", "target": "button#pay" }],
  "fingerprint": "a91f…"
}`}
                </motion.pre>
              )}
            </AnimatePresence>
            {!spike && <p className="pt-6 text-center text-sm text-muted-foreground">Quiet signal. Press “Trigger a bug”.</p>}
          </div>
        </div>
      </div>
    </section>
  );
}
