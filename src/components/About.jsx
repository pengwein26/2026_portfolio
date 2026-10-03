// Figma 12:27 — About. Desktop (lg+) keeps the 1280px frame proportions.
const A = `${import.meta.env.BASE_URL}assets`;

export default function About() {
  return (
    <section className="relative px-6 pb-28 pt-12 lg:min-h-[720px] lg:px-12 lg:pt-[130px]">
      <div className="mx-auto flex max-w-[887px] flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-[100px]">
        {/* Portrait — 13:152, 222×302 with Figma crop offsets */}
        <div className="relative h-[260px] w-[191px] shrink-0 overflow-hidden lg:h-[302px] lg:w-[222.268px]">
          <img
            src={`${A}/about-portrait.png`}
            alt="Portrait of Uyen"
            className="absolute max-w-none"
            style={{ height: "119.89%", left: "-43.98%", top: "-9.86%", width: "162.9%" }}
          />
        </div>

        <div className="flex w-full max-w-[565px] flex-col gap-[21px]">
          <div className="flex items-start gap-[17px]">
            <h1 className="font-display text-[30px] leading-[0.9] text-ink sm:text-[36px] lg:h-[50px] lg:w-[333px] lg:text-[40.966px]">
              Hi, I’m Uyen :)
            </h1>
            <img
              src={`${A}/about-flower.svg`}
              alt=""
              aria-hidden
              className="mt-0.5 h-[40px] w-[40px] shrink-0 lg:h-[49.589px] lg:w-[50.072px]"
            />
          </div>

          <div className="flex flex-col gap-5 font-body text-[16px] leading-none text-muted lg:text-[20px]">
            <p>
              I’ve always been fascinated by the emotions that shape the way we connect with one another. Relationships and love are the topics I find myself talking about most.
            </p>
            <p>
              With a background in Cognitive &amp; Data Science @ UC Berkeley, and Masters in Interaction Design @ CCA, I’m constantly thinking about bridging how we understand human behavior with the technology we build so that as technology evolves, we don’t lose sight of what makes us human.
            </p>
            <p>Constantly growing, evolving, and learning :)</p>
          </div>
        </div>
      </div>

      {/* Doodles — desktop only, Figma 13:188 and 13:270 */}
      <img
        src={`${A}/about-doodle-squiggle.svg`}
        alt=""
        aria-hidden
        className="pointer-events-none absolute hidden h-[53.593px] w-[49.157px] lg:left-[calc(50%+363px)] lg:top-[501px] lg:block"
      />
      <img
        src={`${A}/about-doodle-heart.svg`}
        alt=""
        aria-hidden
        className="pointer-events-none absolute hidden h-[24.181px] w-[29.883px] lg:left-[calc(50%+413px)] lg:top-[531px] lg:block"
      />
    </section>
  );
}
