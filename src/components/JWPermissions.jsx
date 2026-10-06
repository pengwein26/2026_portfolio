const A = `${import.meta.env.BASE_URL}assets`;

function Section({ wash, children }) {
  return (
    <section
      className={`px-6 py-16 lg:px-[180px] lg:py-[100px] ${wash ? "bg-wash" : "bg-white"}`}
    >
      {children}
    </section>
  );
}

function Eyebrow({ children }) {
  return <p className="font-body text-[18px] font-bold leading-normal text-jw">{children}</p>;
}

function Title({ children }) {
  return (
    <h2 className="font-display text-[24px] leading-none text-copy sm:text-[28px] lg:text-[30px]">
      {children}
    </h2>
  );
}

export default function JWPermissions() {
  return (
    <article>
      {/* Hero — Figma 35:135 */}
      <div className="relative h-[240px] overflow-hidden bg-black sm:h-[320px] lg:h-[439px]">
        <img
          src={`${A}/jw-logo.png`}
          alt="Justworks"
          className="absolute left-[8%] top-[42%] w-[38%] max-w-[244px] object-contain sm:left-[12%] sm:w-[28%] lg:left-[13.36%] lg:top-[189px] lg:w-[19.06%]"
        />
        <div className="absolute left-[42%] top-[8%] h-[160%] w-[62%] overflow-hidden sm:left-[38%] lg:left-[37.73%] lg:top-[calc(50%-204px)] lg:h-[624px]">
          <img
            src={`${A}/jw-permissions.png`}
            alt="Unemployment claim preview in Justworks"
            className="absolute left-[12%] top-[12%] w-[78%] max-w-[620px] shadow-[0_2px_2px_rgba(0,0,0,0.25)] lg:left-[88px] lg:top-[55px] lg:w-[620px]"
          />
        </div>
      </div>

      {/* Summary */}
      <Section wash>
        <div className="flex flex-col gap-10 lg:gap-[60px]">
          <div className="flex flex-col gap-8 text-meta sm:flex-row sm:flex-wrap sm:gap-x-[72px] lg:gap-x-[104px]">
            <Meta label="ROLE" value="Product designer" />
            <Meta label="TEAM" value="State-Unemployment Insurance (SUI)" wide />
            <Meta label="TIMELINE" value="2024" />
          </div>
          <div className="flex flex-col gap-10 lg:flex-row lg:gap-[93px]">
            <p className="font-display text-[24px] leading-none text-copy sm:text-[28px] lg:max-w-[379px] lg:text-[32px]">
              How might <span className="text-jw">we reduce back-and-forth</span> to help admins
              submit accurate unemployment claims on time?
            </p>
            <div className="flex max-w-[450px] flex-col gap-6 font-body text-[18px] lg:gap-[47px]">
              <p className="font-medium leading-normal text-label">Project Overview</p>
              <p className="leading-none text-copy">
                I designed a self-service edit experience for Justworks’ unemployment insurance
                claims, reducing manual back-and-forth between admins and Customer Support while
                helping claims get submitted accurately and on time.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* What’s not working */}
      <Section>
        <div className="flex flex-col gap-8 lg:gap-[40px]">
          <div className="flex flex-col gap-3">
            <Eyebrow>What’s not working?</Eyebrow>
            <Title>
              The existing process made it difficult for admins to quickly correct and move forward
              with unemployment claims.
            </Title>
          </div>
          <div className="flex flex-col gap-6 font-body text-[18px]">
            <div className="flex flex-col gap-3">
              <p className="font-bold leading-normal text-label">Time is critical</p>
              <p className="leading-normal text-ink">
                A 24–48 hour response window leaves little room for delays or mistakes.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-bold leading-normal text-label">Too much manual back-and-forth</p>
              <p className="leading-normal text-ink">
                Admins relied on emailing Customer Support to make corrections, creating unnecessary
                friction and increasing the risk of missed deadlines and costly errors.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* What I did */}
      <Section wash>
        <div className="flex flex-col gap-8 lg:gap-[40px]">
          <div className="flex flex-col gap-3">
            <Eyebrow>What I did</Eyebrow>
            <Title>
              Designed an editing experience for admins and Customer Support, streamlining the claim
              submission and correction process.
            </Title>
          </div>
          <div className="flex flex-col gap-12 lg:gap-[84px]">
            <Screen
              label="Admins (customer facing) editing view"
              src={`${A}/jw-sui-admin.png`}
              alt="Admin-facing unemployment claim editing screen"
            />
            <Screen
              label="Customer Support internal editing view"
              src={`${A}/jw-sui-internal.png`}
              alt="Customer Support internal claim editing screen"
            />
          </div>
        </div>
      </Section>

      {/* Impact */}
      <Section>
        <div className="flex flex-col gap-8 lg:gap-[40px]">
          <div className="flex flex-col gap-3">
            <Eyebrow>How did it help users? Impact?</Eyebrow>
            <Title>
              The new edit experience reduced operational burden while helping admins complete and
              submit claims faster and on time.
            </Title>
          </div>
          <div className="flex flex-col gap-8 font-body text-[18px] lg:flex-row lg:gap-6">
            <div className="flex flex-1 flex-col gap-3">
              <p className="font-bold leading-normal text-label">Increase effectiveness</p>
              <ul className="list-disc space-y-1 pl-[27px] leading-normal text-ink">
                <li>Faster claim completion to the state</li>
                <li>Increase successful on-time submission</li>
              </ul>
            </div>
            <div className="flex flex-1 flex-col gap-3">
              <p className="font-bold leading-normal text-label">Increase efficiency</p>
              <ul className="list-disc space-y-1 pl-[27px] leading-normal text-ink">
                <li>Helps in reduction of edit-related support requests</li>
                <li>Decreases CS handling time per unemployment claim</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Learnings */}
      <Section wash>
        <div className="flex flex-col gap-8 lg:gap-[40px]">
          <Eyebrow>Learnings</Eyebrow>
          <div className="flex flex-col gap-10 lg:flex-row lg:gap-6">
            <div className="flex flex-1 flex-col gap-3">
              <h3 className="font-display text-[24px] leading-none text-copy lg:text-[30px]">
                How to deal with ambiguity
              </h3>
              <p className="font-body text-[18px] leading-normal text-ink">
                Complex systems have a lot of moving parts. Asking the right questions helped me turn
                ambiguity into clearer design decisions.
              </p>
            </div>
            <div className="flex flex-1 flex-col gap-3">
              <h3 className="font-display text-[24px] leading-none text-copy lg:text-[30px]">
                Involve engineering early
              </h3>
              <p className="font-body text-[18px] leading-normal text-ink">
                Early engineering feedback helped me uncover technical constraints, avoid future
                roadblocks, and design with feasibility in mind.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Thanks */}
      <Section>
        <div className="flex flex-col gap-8 lg:gap-[40px]">
          <Eyebrow>Big thank you to the people &lt;3</Eyebrow>
          <div className="relative aspect-[916/574] w-full overflow-hidden">
            <img src={`${A}/jw-thanks-4.jpg`} alt="" className="absolute left-0 top-0 h-[56.2%] w-[46.9%] object-cover" />
            <img src={`${A}/jw-thanks-5.jpg`} alt="" className="absolute left-[46.9%] top-0 h-[29%] w-[13.6%] object-cover" />
            <img src={`${A}/jw-thanks-6.jpg`} alt="" className="absolute left-[60.5%] top-0 h-[29%] w-[13.6%] object-cover" />
            <img src={`${A}/jw-thanks-1.jpg`} alt="" className="absolute left-[70.1%] top-0 h-[29%] w-[29.9%] object-cover" />
            <img src={`${A}/jw-thanks-3.jpg`} alt="" className="absolute bottom-0 left-0 h-[56.2%] w-[46.9%] object-cover" />
            <img src={`${A}/jw-thanks-2.jpg`} alt="" className="absolute bottom-0 right-0 h-[71%] w-[53.1%] object-cover" />
          </div>
        </div>
      </Section>
    </article>
  );
}

function Meta({ label, value, wide }) {
  return (
    <div className={`flex flex-col gap-1 ${wide ? "sm:min-w-[240px] lg:w-[352px]" : ""}`}>
      <p className="font-body text-[15px] leading-normal">{label}</p>
      <p className="font-display text-[18px] leading-[0.9] lg:text-[20px]">{value}</p>
    </div>
  );
}

function Screen({ label, src, alt }) {
  return (
    <div className="flex w-full flex-col gap-4">
      <p className="font-body text-[18px] font-medium leading-normal text-label">{label}</p>
      <div className="relative h-[240px] overflow-hidden rounded-xl border border-[#cecece] bg-[#e3e3e3] sm:h-[320px] lg:h-[417px]">
        <img src={src} alt={alt} className="absolute left-0 top-0 w-full object-cover object-top" />
      </div>
    </div>
  );
}
