// Figma 73:337 – 73:358. Desktop (lg+) keeps the exact Figma positions,
// measured from the page center of the 1280px frame. Mobile stacks in flow.
// Nav occupies the first ~94px, so hero tops below are Figma top − 94.
const A = `${import.meta.env.BASE_URL}assets`;

export default function Hero() {
  return (
    <section className="relative px-6 pt-16 pb-16 lg:h-[712px] lg:p-0">
      {/* Headline block — 73:355 */}
      <div className="relative z-10 mx-auto flex max-w-[740px] flex-col items-center gap-6 text-center font-display leading-[0.9] lg:absolute lg:left-1/2 lg:top-[189px] lg:w-[740px] lg:-translate-x-1/2">
        <p className="text-[16px] text-subtle lg:text-[18.379px]">previously @ tinder, justworks</p>
        <h1 className="text-[30px] text-ink sm:text-[36px] lg:text-[40.966px]">
          Hi, I am Uyen. A designer who make products feel more human and the people behind them feel seen.
        </h1>
      </div>

      {/* Mobile: photo + logo + dots in a row. Desktop: absolutely placed. */}
      <div className="mt-10 flex items-end justify-center gap-6 lg:mt-0 lg:contents">
        {/* Photo — 73:350 (166×166) */}
        <img
          src={`${A}/portrait.png`}
          alt="Portrait of Uyen"
          className="z-0 h-[120px] w-[120px] object-cover object-bottom lg:absolute lg:left-[calc(50%-424px)] lg:top-[330px] lg:h-[166px] lg:w-[166px]"
        />

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
      <div className="absolute hidden h-[63.133px] w-[59.067px] lg:left-[calc(50%-453px)] lg:top-[226px] lg:block">
        <div className="absolute inset-[-1.52%_-1.64%_-1.74%_-1.75%]"><img src={`${A}/doodle-star-left.png`} alt="" aria-hidden className="block size-full max-w-none" /></div>
      </div>
      {/* 73:352 */}
      <div className="absolute hidden h-[53.593px] w-[49.157px] lg:left-[calc(50%+426px)] lg:top-[357px] lg:block">
        <div className="absolute inset-[-1.81%_-2.08%_-2.02%_-2.31%]"><img src={`${A}/doodle-right-1.svg`} alt="" aria-hidden className="block size-full max-w-none" /></div>
      </div>
      {/* 73:353 */}
      <div className="absolute hidden h-[41.268px] w-[27.143px] lg:left-[calc(50%+375px)] lg:top-[398px] lg:block">
        <div className="absolute inset-[-2.28%_-4.14%_-2.08%_-3.27%]"><img src={`${A}/doodle-right-2.svg`} alt="" aria-hidden className="block size-full max-w-none" /></div>
      </div>
      {/* 73:354 — flipped horizontally */}
      <div className="absolute hidden h-[32.3px] w-[48.5px] -scale-x-100 rotate-[0.22deg] lg:left-[calc(50%-163px)] lg:top-[238px] lg:block">
        <img src={`${A}/doodle-top.svg`} alt="" aria-hidden className="absolute inset-0 block size-full max-w-none" />
      </div>
    </section>
  );
}
