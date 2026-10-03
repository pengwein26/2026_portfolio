import { useEffect, useRef } from "react";

// A sketched line that follows the pointer and fades out behind it. Each point
// carries fixed jitter offsets so the stroke stays still instead of shimmering,
// and two offset passes give it the doubled-back look of a pencil outline.
const LIFETIME = 520; // ms before a point has fully faded
const MAX_POINTS = 70;
const PASSES = [
  { spread: 1.1, width: 1.5, alpha: 0.55 },
  { spread: 2.2, width: 0.9, alpha: 0.3 },
];

export default function CursorTrail() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Pointer trails are meaningless on touch and unwelcome with reduced motion.
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!finePointer.matches || reducedMotion.matches) return;

    const ctx = canvas.getContext("2d");
    const points = [];
    let frame = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onMove = (e) => {
      points.push({
        x: e.clientX,
        y: e.clientY,
        t: performance.now(),
        jitter: PASSES.map((p) => ({
          x: (Math.random() - 0.5) * p.spread * 2,
          y: (Math.random() - 0.5) * p.spread * 2,
        })),
      });
      if (points.length > MAX_POINTS) points.shift();
    };

    const onLeave = () => {
      points.length = 0;
    };

    const render = () => {
      const now = performance.now();
      while (points.length && now - points[0].t > LIFETIME) points.shift();
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      PASSES.forEach((pass, p) => {
        ctx.lineWidth = pass.width;
        for (let i = 1; i < points.length; i++) {
          const a = points[i - 1];
          const b = points[i];
          const life = 1 - (now - b.t) / LIFETIME;
          if (life <= 0) continue;
          // Fade the tail out and thin it toward the oldest end.
          ctx.strokeStyle = `rgba(245, 73, 26, ${life * pass.alpha})`;
          ctx.beginPath();
          ctx.moveTo(a.x + a.jitter[p].x, a.y + a.jitter[p].y);
          ctx.lineTo(b.x + b.jitter[p].x, b.y + b.jitter[p].y);
          ctx.stroke();
        }
      });

      frame = requestAnimationFrame(render);
    };

    resize();
    frame = requestAnimationFrame(render);
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-50 h-full w-full"
    />
  );
}
