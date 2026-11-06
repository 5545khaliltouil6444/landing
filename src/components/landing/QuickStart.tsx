import { useState } from "react";
import { quickStart, quickStartNote } from "@/content/landing";
import { Section } from "./Sections";

export function QuickStart() {
  const [tab, setTab] = useState<string>("repo");
  const [copied, setCopied] = useState(false);
  const cur = quickStart.find((q) => q.id === tab) ?? quickStart[0]!;
  const copy = async () => { try { await navigator.clipboard.writeText(cur.code); setCopied(true); setTimeout(() => setCopied(false), 1500); } catch { /* clipboard blocked */ } };
  return (
    <Section id="start" eyebrow="Quick start" title="Run it from the repository.">
      <div role="tablist" aria-label="Quick start" className="flex flex-wrap gap-2">
        {quickStart.map((q) => (
          <button key={q.id} role="tab" aria-selected={tab === q.id} onClick={() => setTab(q.id)}
            className={`min-h-11 rounded-md px-4 text-sm ${tab === q.id ? "bg-primary text-primary-foreground" : "border hover:bg-muted"}`}>{q.label}</button>
        ))}
      </div>
      <div role="tabpanel" className="relative mt-4 rounded-xl border bg-card">
        <button onClick={copy} className="absolute right-3 top-3 min-h-11 rounded-md border px-3 text-xs hover:bg-muted">{copied ? "Copied" : "Copy"}</button>
        <pre className="overflow-x-auto p-6 pr-24 font-mono text-sm"><code>{cur.code}</code></pre>
      </div>
      <p className="mt-3 text-sm text-muted-foreground">{quickStartNote}</p>
    </Section>
  );
}
