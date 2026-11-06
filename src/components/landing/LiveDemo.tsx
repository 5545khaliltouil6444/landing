import { useState } from "react";
import { Section } from "./Sections";

type State = "idle" | "sending" | "success";
const SEND_MS = 900;

export function LiveDemo() {
  const [text, setText] = useState("");
  const [crumbs, setCrumbs] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [state, setState] = useState<State>("idle");

  const crumb = (c: string) => setCrumbs((p) => [...p.slice(-4), c]);
  const send = () => {
    setState("sending"); crumb("submit");
    setTimeout(() => setState("success"), SEND_MS);
  };
  const report = {
    type: error ? "auto+user" : "user",
    description: text,
    error: error ? { message: error } : undefined,
    breadcrumbs: crumbs.map((c) => ({ type: "ui", message: c })),
    context: { url: "https://demo.example/page", viewport: "1280x800" },
  };
  const msg = { idle: "", sending: "Sending…", success: "Report sent (simulated)." }[state];

  return (
    <Section id="demo" eyebrow="Live demo · simulation" title="Try the form. Watch the report build.">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border bg-card p-6">
          <label htmlFor="desc" className="font-semibold">What went wrong?</label>
          <textarea id="desc" value={text} onChange={(e) => setText(e.target.value)} onFocus={() => crumb("focus textarea")} rows={4}
            className="mt-3 w-full rounded-md border bg-background p-3 text-sm outline-none focus:ring-2 focus:ring-ring" placeholder="The pay button does nothing…" />
          <div className="mt-4 flex flex-wrap gap-3">
            <button onClick={send} disabled={state === "sending"} className="min-h-11 rounded-md bg-primary px-5 font-medium text-primary-foreground disabled:opacity-60">Send</button>
            <button onClick={() => { setError("TypeError: x is undefined"); crumb("error thrown"); }} className="min-h-11 rounded-md border border-alert px-4 text-alert">Throw an error</button>
          </div>
          <p aria-live="polite" className="mt-4 min-h-6 text-sm text-primary">{msg}</p>
          <p className="text-xs text-muted-foreground">Not connected to any backend.</p>
        </div>
        <pre aria-label="Report preview" className="overflow-auto rounded-xl border bg-muted p-6 font-mono text-xs">{JSON.stringify(report, null, 2)}</pre>
      </div>
    </Section>
  );
}
