export const nav = [
  { href: "#how", label: "How it works" },
  { href: "#demo", label: "Demo" },
  { href: "#features", label: "Features" },
  { href: "#detection", label: "Detection" },
  { href: "#start", label: "Quick start" },
  { href: "#roadmap", label: "Roadmap" },
];

export const hero = {
  badge: "Early development · not published yet",
  title: "Catch the tremor before it becomes the quake.",
  sub: "m-Seismo is a React web SDK that turns a user's bug report and the browser's own diagnostics into one clean, structured signal.",
};

export const problems = [
  { title: "Bugs users can't describe", text: "“It just broke” isn't a reproduction. A built-in form captures intent in the moment." },
  { title: "Errors developers never see", text: "Uncaught errors and rejected promises vanish in users' consoles. The SDK records them." },
  { title: "Reports without context", text: "Breadcrumbs, failed requests and browser context arrive attached to every report." },
];

export const steps = [
  { title: "A user hits a bug", text: "Something feels off: a button does nothing, a page errors out." },
  { title: "The form opens", text: "Press Ctrl+Enter or click the launcher. The form lives in a Shadow DOM, isolated from your styles." },
  { title: "The SDK adds diagnostics", text: "Recent breadcrumbs, errors, failed fetches and sanitized URLs are attached." },
  { title: "One unified report", text: "A schema-validated payload reaches your backend (today: a local mock receiver)." },
];

export const features = [
  { icon: "shield", title: "Shadow DOM form", text: "Built-in report form, isolated from host page CSS." },
  { icon: "moon", title: "Theming & a11y", text: "Light, dark and auto themes with keyboard and screen-reader support." },
  { icon: "bolt", title: "Uncaught errors", text: "Captures window errors and unhandled promise rejections." },
  { icon: "trail", title: "Breadcrumbs", text: "A short trail of user actions and navigation before the report." },
  { icon: "wifi", title: "Failed fetch diagnostics", text: "Records failing fetch calls: method, sanitized URL, status." },
  { icon: "chip", title: "Browser & app context", text: "Viewport, user agent, app version and environment." },
  { icon: "link", title: "URL sanitizing", text: "Strips query strings and fragments that may hold sensitive data." },
  { icon: "stack", title: "Dedup & fingerprints", text: "Repeated errors are fingerprinted and deduplicated." },
  { icon: "tag", title: "Report types", text: "Distinguishes user-submitted reports from automatic captures." },
  { icon: "check", title: "Schema-validated payload", text: "Every report is validated against a defined schema before sending." },
  { icon: "flask", title: "Mock receiver & test lab", text: "Run a local receiver and test app to see reports end to end." },
];

export const matrix: { item: string; status: "auto" | "manual" | "none" }[] = [
  { item: "Uncaught JavaScript errors", status: "auto" },
  { item: "Unhandled promise rejections", status: "auto" },
  { item: "Failed fetch requests", status: "auto" },
  { item: "User-described bugs (via form)", status: "manual" },
  { item: "Logic bugs with no error thrown", status: "manual" },
  { item: "XMLHttpRequest failures", status: "none" },
  { item: "console.error calls", status: "none" },
  { item: "CSS / visual problems", status: "manual" },
  { item: "Source map resolution", status: "none" },
];

export const statusLabel = { auto: "Automatic", manual: "Manual only", none: "Not supported" } as const;

export const privacy = {
  never: ["Request or response bodies", "Request headers", "Cookies", "Keystrokes"],
  does: ["Baseline scrubber on report fields", "URL sanitizing (query & hash removed)", "Screenshot only if the user chooses to attach it"],
  note: "A full privacy layer is on the roadmap. Review what you send before using this in production.",
};

export const quickStart = [
  { id: "repo", label: "Run from repo", lang: "bash", code: "git clone <your-repo-url> m-seismo\ncd m-seismo\nnpm install\nnpm run build" },
  { id: "init", label: "Init", lang: "ts", code: "import { init } from \"m-seismo\";\n\ninit({\n  endpoint: \"http://localhost:4318/reports\",\n  appVersion: \"1.0.0\",\n  theme: \"auto\",\n});" },
  { id: "open", label: "Open the form", lang: "ts", code: "// Users press Ctrl+Enter, or open it yourself:\nimport { openReportForm } from \"m-seismo\";\n\nopenReportForm();" },
];
export const quickStartNote = "Snippets are illustrative — check the repository README for exact API names.";

export const roadmap = [
  { title: "Full privacy layer", text: "Configurable redaction and consent controls.", phase: "Phase 6" },
  { title: "Reliable transport", text: "Retries and an offline queue.", phase: "Phase 8" },
  { title: "Backend integration", text: "A real Go backend in place of the mock receiver.", phase: "Planned" },
  { title: "More platforms", text: "Beyond React web.", phase: "Later" },
];
