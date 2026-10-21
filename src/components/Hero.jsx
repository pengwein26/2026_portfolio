import { useCallback, useState } from "react";

// Figma 73:337 – 73:358. Desktop (lg+) keeps the exact Figma positions,
// measured from the page center of the 1280px frame. Mobile stacks in flow.
// Nav occupies the first ~94px, so hero tops below are Figma top − 94.
const A = `${import.meta.env.BASE_URL}assets`;

function Sticker({ className, children }) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [lifted, setLifted] = useState(false);
  const drag = useCallback((start) => {
    const onMove = (e) => {
      if (e.pointerType === "mouse" && e.buttons === 0) return;
      setOffset({
        x: start.ox + (e.clientX - start.x),
        y: start.oy + (e.clientY - start.y),
      });
    };
    const onUp = () => {
      setLifted(false);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
  }, []);

  return (
    <div
      className={className}
      style={{
        transform: `translate(${offset.x}px, ${offset.y}px) rotate(${lifted ? -7 : 0}deg) scale(${lifted ? 1.08 : 1})`,
        boxShadow: lifted ? "0 18px 28px rgba(0,0,0,0.22)" : "none",
        transition: lifted ? "box-shadow 0.15s ease, transform 0.05s linear" : "box-shadow 0.2s ease, transform 0.2s ease",
        touchAction: "none",
        userSelect: "none",
      }}
      onPointerDown={(e) => {
        e.preventDefault();
        e.currentTarget.setPointerCapture?.(e.pointerId);
        setLifted(true);
        drag({ x: e.clientX, y: e.clientY, ox: offset.x, oy: offset.y });
      }}
    >
      {children}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative px-6 pt-16 pb-[96px] lg:h-[744px] lg:p-0">
      {/* Headline block — 73:355 */}
      <div className="relative z-10 mx-auto flex max-w-[740px] flex-col items-center gap-6 text-center font-display leading-[0.9] lg:absolute lg:left-1/2 lg:top-[189px] lg:w-[740px] lg:-translate-x-1/2">
        <p className="text-[16px] text-subtle lg:text-[18.379px]">previously @ tinder, justworks</p>
        <h1 className="text-[30px] text-ink sm:text-[36px] lg:text-[40.966px]">
          Uyen is a designer who make products feel more human and the people behind them{" "}
          <span className="relative inline-block">
            feel seen.
            <span
              aria-hidden
              className="pointer-events-none absolute inset-x-[-4px] -bottom-[0.08em] h-[0.28em] text-orange"
            >
              <svg
                className="hero-scribble h-full w-full"
                viewBox="0 0 100 12"
                preserveAspectRatio="none"
              >
                <path
                  pathLength="1"
                  d="M2.2 7.4 C 11 6.1, 19.5 8.2, 28.8 6.7 C 38 5.3, 46.5 8, 55.4 6.6 C 64 5.4, 73.2 7.6, 82.1 6.3 C 88.6 5.4, 94.2 7.1, 98.4 6.4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  pathLength="1"
                  d="M3.4 8.6 C 14 7.4, 24 9.2, 36.2 7.8 C 47.5 6.5, 58 9.1, 69.4 7.6 C 79 6.5, 89.5 8.4, 97.2 7.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.35"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </span>
        </h1>
      </div>

      {/* Mobile: photo + logo + dots in a row. Desktop: absolutely placed. */}
      <div className="mt-10 flex items-end justify-center gap-6 lg:mt-0 lg:contents">
        {/* Photo — 73:350 (166×166) */}
        <Sticker className="z-0 h-[120px] w-[120px] lg:absolute lg:left-[calc(50%-424px)] lg:top-[330px] lg:h-[166px] lg:w-[166px]">
          <img
            src={`${A}/portrait.png`}
            alt="Portrait of Uyen"
            draggable={false}
            className="pointer-events-none h-full w-full object-cover object-bottom"
          />
        </Sticker>

        {/* Dots — 73:358 (95×28.18) */}
        <img
          src={`${A}/dots.svg`}
          alt=""
          aria-hidden
          className="h-[28.178px] w-[95px] lg:absolute lg:left-[calc(50%-167.5px)] lg:top-[413px] lg:-translate-x-1/2"
        />

        {/* Logo mark — 73:337 (122.26×127.95, rotated 0.34°) */}
        <img
          src={`${A}/logo-mark.svg`}
          alt=""
          aria-hidden
          className="h-[95px] w-[91px] rotate-[0.34deg] lg:absolute lg:left-[calc(50%+371px)] lg:top-[211px] lg:h-[127.95px] lg:w-[122.257px]"
        />
      </div>

      {/* Doodles — desktop only */}
      {/* 73:351 star, left */}
      <div className="spin-slow absolute hidden h-[63.133px] w-[59.067px] lg:left-[calc(50%-453px)] lg:top-[226px] lg:block">
        <div className="absolute inset-[-1.52%_-1.64%_-1.74%_-1.75%]"><img src={`${A}/doodle-star-left.png`} alt="" aria-hidden className="block size-full max-w-none" /></div>
      </div>
      {/* 73:352 */}
      <div className="absolute hidden h-[53.593px] w-[49.157px] lg:left-[calc(50%+426px)] lg:top-[357px] lg:block">
        <div className="absolute inset-[-1.81%_-2.08%_-2.02%_-2.31%]"><img src={`${A}/doodle-right-1.png`} alt="" aria-hidden className="block size-full max-w-none" /></div>
      </div>
      {/* 73:353 */}
      <div className="absolute hidden h-[41.268px] w-[27.143px] lg:left-[calc(50%+375px)] lg:top-[398px] lg:block">
        <div className="absolute inset-[-2.28%_-4.14%_-2.08%_-3.27%]"><img src={`${A}/doodle-right-2.png`} alt="" aria-hidden className="block size-full max-w-none" /></div>
      </div>
      {/* 73:354 — flipped horizontally */}
      <div className="absolute hidden h-[32.3px] w-[48.5px] -scale-x-100 rotate-[0.22deg] lg:left-[calc(50%-163px)] lg:top-[238px] lg:block">
        <img src={`${A}/doodle-top.svg`} alt="" aria-hidden className="absolute inset-0 block size-full max-w-none" />
      </div>
    </section>
  );
}
