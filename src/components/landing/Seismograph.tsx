import { useEffect, useRef } from "react";

const POINTS = 160;
const SPIKE_DECAY = 0.94;

export function Seismograph({ spike }: { spike: number }) {
  const ref = useRef<HTMLCanvasElement>(null);
  const spikeRef = useRef(0);
  const pointer = useRef(0.5);

  useEffect(() => { if (spike) spikeRef.current = 1; }, [spike]);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0, t = 0, visible = true;
    const color = () => getComputedStyle(document.documentElement).getPropertyValue("--signal").trim();
    const alert = () => getComputedStyle(document.documentElement).getPropertyValue("--alert").trim();

    const draw = () => {
      const { width: w, height: h } = canvas.getBoundingClientRect();
      canvas.width = w * devicePixelRatio; canvas.height = h * devicePixelRatio;
      ctx.scale(devicePixelRatio, devicePixelRatio);
      ctx.clearRect(0, 0, w, h);
      const s = spikeRef.current;
      ctx.strokeStyle = s > 0.2 ? alert() : color();
      ctx.lineWidth = 2; ctx.beginPath();
      for (let i = 0; i < POINTS; i++) {
        const x = (i / (POINTS - 1)) * w;
        const d = Math.abs(i / POINTS - pointer.current);
        const amp = 4 + Math.max(0, 0.15 - d) * 120 + s * Math.exp(-((i - POINTS * 0.6) ** 2) / 40) * h * 0.4;
        const y = h / 2 + Math.sin(i * 0.5 + t) * amp * Math.sin(i * 1.7 + t * 2);
        i ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
      }
      ctx.stroke();
      spikeRef.current *= SPIKE_DECAY; t += 0.06;
      if (!reduced && visible && !document.hidden) raf = requestAnimationFrame(draw);
    };
    const restart = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(draw); };
    const io = new IntersectionObserver(([e]) => { visible = !!e?.isIntersecting; if (visible) restart(); });
    io.observe(canvas);
    const move = (e: PointerEvent) => { const r = canvas.getBoundingClientRect(); pointer.current = (e.clientX - r.left) / r.width; };
    canvas.addEventListener("pointermove", move);
    document.addEventListener("visibilitychange", restart);
    draw();
    return () => { cancelAnimationFrame(raf); io.disconnect(); canvas.removeEventListener("pointermove", move); document.removeEventListener("visibilitychange", restart); };
  }, []);

  return <canvas ref={ref} aria-hidden className="h-40 w-full" />;
}
