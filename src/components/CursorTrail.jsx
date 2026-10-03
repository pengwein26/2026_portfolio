import { useEffect, useRef } from "react";

// A sketched line that follows the pointer and fades out behind it. Each point
// carries fixed jitter offsets so the stroke stays still instead of shimmering,
// and two offset passes give it the doubled-back look of a pencil outline.
const LIFETIME = 520; // ms before a point has fully faded
const MAX_POINTS = 48;
const PAD = 8; // covers jitter + stroke width when clearing
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
    let running = false;
    let painted = null; // region touched last frame, so we only clear that much

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      painted = null; // resizing clears the bitmap
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
      start();
    };

    const onLeave = () => {
      points.length = 0;
      start(); // one more frame to wipe the tail, then the loop halts itself
    };

    const render = () => {
      const now = performance.now();
      while (points.length && now - points[0].t > LIFETIME) points.shift();

      if (painted) ctx.clearRect(painted.x, painted.y, painted.w, painted.h);

      // Once the tail has expired there is nothing to animate, so let the loop
      // stop instead of clearing a full-viewport canvas 60 times a second.
      if (points.length < 2) {
        painted = null;
        running = false;
        return;
      }

      let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
      for (const pt of points) {
        if (pt.x < minX) minX = pt.x;
        if (pt.y < minY) minY = pt.y;
        if (pt.x > maxX) maxX = pt.x;
        if (pt.y > maxY) maxY = pt.y;
      }
      painted = { x: minX - PAD, y: minY - PAD, w: maxX - minX + PAD * 2, h: maxY - minY + PAD * 2 };

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

    function start() {
      if (running) return;
      running = true;
      frame = requestAnimationFrame(render);
    }

    resize();
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
