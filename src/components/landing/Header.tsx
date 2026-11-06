import { useEffect, useState } from "react";
import { nav } from "@/content/landing";
import { Logo } from "./Logo";

const KEY = "mseismo-theme";

function useTheme() {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    let saved: string | null = null;
    try { saved = localStorage.getItem(KEY); } catch { /* storage blocked */ }
    setDark(saved ? saved === "dark" : !window.matchMedia("(prefers-color-scheme: light)").matches);
  }, []);
  useEffect(() => { document.documentElement.classList.toggle("dark", dark); }, [dark]);
  const toggle = () => setDark((d) => {
    try { localStorage.setItem(KEY, d ? "light" : "dark"); } catch { /* storage blocked */ }
    return !d;
  });
  return { dark, toggle };
}

export function Header() {
  const { dark, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b bg-background/75 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" aria-label="m-Seismo home"><Logo /></a>
        <nav aria-label="Main" className="hidden gap-6 text-sm text-muted-foreground md:flex">
          {nav.map((n) => <a key={n.href} href={n.href} className="hover:text-foreground">{n.label}</a>)}
        </nav>
        <div className="flex items-center gap-1">
          <button onClick={toggle} aria-label={dark ? "Switch to light theme" : "Switch to dark theme"} className="grid h-11 w-11 place-items-center rounded-md hover:bg-muted">
            {dark ? "☀" : "☾"}
          </button>
          <button className="grid h-11 w-11 place-items-center rounded-md hover:bg-muted md:hidden" aria-expanded={open} aria-controls="mnav" aria-label="Menu" onClick={() => setOpen(!open)}>☰</button>
        </div>
      </div>
      {open && (
        <nav id="mnav" aria-label="Mobile" className="border-t px-5 py-3 md:hidden">
          {nav.map((n) => <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block py-3">{n.label}</a>)}
        </nav>
      )}
    </header>
  );
}
