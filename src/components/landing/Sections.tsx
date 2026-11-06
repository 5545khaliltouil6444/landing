import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { features, matrix, privacy, problems, roadmap, statusLabel, steps } from "@/content/landing";

export function Section({ id, eyebrow, title, children }: { id?: string; eyebrow: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20">
      <p className="font-mono text-xs uppercase tracking-widest text-primary">{eyebrow}</p>
      <h2 className="mt-3 max-w-[30ch] text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
      <div className="mt-10">{children}</div>
    </section>
  );
}

const fade = { initial: { opacity: 0, y: 16 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

export function Problems() {
  return (
    <div className="border-y bg-muted/40">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 md:grid-cols-3">
        {problems.map((p) => (
          <div key={p.title}><h3 className="font-semibold">{p.title}</h3><p className="mt-2 text-sm text-muted-foreground">{p.text}</p></div>
        ))}
      </div>
    </div>
  );
}

export function HowItWorks() {
  return (
    <Section id="how" eyebrow="How it works" title="From noise to a single signal.">
      <ol className="relative grid gap-6 md:grid-cols-4">
        {steps.map((s, i) => (
          <motion.li key={s.title} {...fade} transition={{ delay: i * 0.12 }} className="rounded-xl border bg-card p-5">
            <span className="font-mono text-sm text-primary">0{i + 1}</span>
            <h3 className="mt-3 font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}

const icons: Record<string, string> = {
  shield: "M12 3l8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6z", moon: "M20 14A8 8 0 1110 4a6 6 0 0010 10z", bolt: "M13 2L4 14h7l-1 8 9-12h-7z",
  trail: "M4 20c4 0 4-6 8-6s4-6 8-6", wifi: "M2 9a15 15 0 0120 0M5 13a10 10 0 0114 0M9 17a4 4 0 016 0", chip: "M6 6h12v12H6zM9 2v4M15 2v4M9 18v4M15 18v4",
  link: "M10 14a4 4 0 005 0l3-3a4 4 0 00-5-5l-1 1M14 10a4 4 0 00-5 0l-3 3a4 4 0 005 5l1-1", stack: "M12 3l9 5-9 5-9-5zM3 13l9 5 9-5",
  tag: "M3 12V3h9l9 9-9 9z", check: "M4 12l5 5L20 6", flask: "M9 3h6M10 3v6L4 20h16L14 9V3",
};

export function Features() {
  return (
    <Section id="features" eyebrow="Features" title="What's in the SDK today.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <motion.div key={f.title} {...fade} transition={{ delay: (i % 3) * 0.08 }} className="rounded-xl border bg-card p-5 transition-transform hover:-translate-y-1">
            <svg viewBox="0 0 24 24" className="h-6 w-6 text-primary" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d={icons[f.icon]} /></svg>
            <h3 className="mt-4 font-semibold">{f.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{f.text}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

const badge = { auto: "bg-primary/15 text-primary", manual: "bg-muted text-foreground", none: "bg-alert/15 text-alert" };
const mark = { auto: "●", manual: "◐", none: "○" };

export function Detection() {
  return (
    <Section id="detection" eyebrow="Honest matrix" title="What it detects — and what it doesn't.">
      <ul className="divide-y rounded-xl border bg-card">
        {matrix.map((m) => (
          <li key={m.item} className="flex items-center justify-between gap-4 px-5 py-3 text-sm">
            <span>{m.item}</span>
            <span className={`whitespace-nowrap rounded-full px-3 py-1 font-mono text-xs ${badge[m.status]}`}>{mark[m.status]} {statusLabel[m.status]}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function Privacy() {
  return (
    <Section id="privacy" eyebrow="Privacy & safety" title="Collect the signal, not the person.">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border bg-card p-6"><h3 className="font-semibold">Never collected</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">{privacy.never.map((x) => <li key={x}>✕ {x}</li>)}</ul></div>
        <div className="rounded-xl border bg-card p-6"><h3 className="font-semibold">Built-in safeguards</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">{privacy.does.map((x) => <li key={x}>✓ {x}</li>)}</ul></div>
      </div>
      <p className="mt-6 rounded-md border border-alert/40 bg-alert/10 p-4 text-sm">{privacy.note}</p>
    </Section>
  );
}

export function Roadmap() {
  return (
    <Section id="roadmap" eyebrow="Roadmap & status" title="Early development. Not published yet.">
      <div className="grid gap-4 md:grid-cols-4">
        {roadmap.map((r) => (
          <div key={r.title} className="rounded-xl border border-dashed p-5">
            <span className="font-mono text-xs text-muted-foreground">{r.phase}</span>
            <h3 className="mt-2 font-semibold">{r.title}</h3><p className="mt-1 text-sm text-muted-foreground">{r.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
