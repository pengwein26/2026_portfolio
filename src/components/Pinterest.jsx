const A = `${import.meta.env.BASE_URL}assets`;
const MEDIUM =
  "https://medium.com/pinterest-studio/berkeley-innovation-x-pinterest-design-e17fe4674fc2";

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
  return <p className="font-body text-[18px] font-bold leading-normal text-pin">{children}</p>;
}

function Title({ children }) {
  return (
    <h2 className="font-display text-[24px] leading-none text-copy sm:text-[28px] lg:text-[30px]">
      {children}
    </h2>
  );
}

function Meta({ label, value, wide }) {
  return (
    <div className={`flex flex-col gap-1 ${wide ? "sm:min-w-[240px] lg:w-[330px]" : ""}`}>
      <p className="font-body text-[15px] leading-normal">{label}</p>
      <p className="font-display text-[18px] leading-[0.9] lg:text-[20px]">{value}</p>
    </div>
  );
}

function Point({ label, children }) {
  return (
    <div className="flex flex-col gap-3">
      <p className="font-body text-[18px] font-bold leading-normal text-label">{label}</p>
      <p className="font-body text-[18px] leading-normal text-ink">{children}</p>
    </div>
  );
}

function Demo({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      className="mx-auto h-auto w-full max-w-[663px] rounded-[23px] object-cover"
    />
  );
}

export default function Pinterest() {
  return (
    <article>
      {/* Hero — Figma 78:1353 */}
      <div className="relative mt-8 h-[240px] overflow-hidden bg-[#e9e9e9] sm:h-[320px] lg:h-[439px]">
        <img
          src={`${A}/pin-imac.png`}
          alt="Pinterest Quick Promote on a desktop"
          className="absolute left-1/2 top-[39px] w-[68%] max-w-[543px] -translate-x-1/2 object-contain sm:w-[52%] lg:w-[42.3%]"
        />
      </div>

      {/* Summary */}
      <Section wash>
        <div className="flex flex-col gap-10 lg:gap-[60px]">
          <div className="flex flex-col gap-8 text-meta sm:flex-row sm:flex-wrap sm:gap-x-[72px] lg:gap-x-[104px]">
            <Meta label="ROLE" value="Product designer (contract)" />
            <Meta label="TEAM" value="Sarah Suen, Michid Byambajav, Angie Nguyen, Heli Balsara" wide />
            <Meta label="TIMELINE" value="2023" />
          </div>
          <div className="flex flex-col gap-10 lg:flex-row lg:gap-[93px]">
            <p className="font-display text-[24px] leading-none text-copy sm:text-[28px] lg:max-w-[379px] lg:text-[32px]">
              How might we make creating a first campaign feel{" "}
              <span className="text-pin">simple and approachable for small business owners?</span>
            </p>
            <div className="flex max-w-[450px] flex-col gap-6 font-body text-[18px] lg:gap-[47px]">
              <p className="font-medium leading-normal text-label">Project Overview</p>
              <p className="leading-none text-copy">
                Pinterest partnered with Berkeley Innovation to increase awareness of its business
                tools. Our team focused on improving Quick Promote, an underdeveloped feature
                designed to help small and medium-sized businesses promote their products and reach
                new audiences.
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
              First-time SMB advertisers struggle to navigate Pinterest promotion tools, make
              confident campaign decisions, and target the right audience without a clear, guided
              experience.
            </Title>
          </div>
          <div className="flex flex-col gap-6">
            <Point label="Setting up a campaign is overwhelming">
              SMBs juggle multiple responsibilities, making it difficult to invest time in learning
              advertising tools.
            </Point>
            <Point label="Difficult to navigate">
              New Pinterest users struggle to find and navigate the “Promote Pin” feature, leading
              to confusion and frustration.
            </Point>
            <Point label="Uncertainty around which audience to target">
              4 out of 6 users struggled to select a target audience, highlighting the need for
              clearer guidance to help first-time advertisers make confident, budget-conscious
              decisions.
            </Point>
          </div>
        </div>
      </Section>

      {/* What I did */}
      <Section wash>
        <div className="flex flex-col gap-8 lg:gap-[40px]">
          <div className="flex flex-col gap-3">
            <Eyebrow>What I did</Eyebrow>
            <Title>
              Redesigned Pinterest’s Quick Promote flow to simplify campaign creation, clarify
              audience targeting, and improve usability.
            </Title>
          </div>
          <div className="flex flex-col gap-8">
            <Point label="Simplify pin selection">
              Simplified Pin Selection: Introduced a side panel organized by boards and recency,
              helping users quickly find and promote Pins without endless scrolling.
            </Point>
            <Demo src={`${A}/pin-gif-1.gif`} alt="Simplified Pin selection in Quick Promote" />
            <Point label="Makes it easy to know what audience to target">
              Added a summary of selected interests, helping users track their choices and target
              audiences more intentionally.
            </Point>
            <Demo src={`${A}/pin-gif-4.gif`} alt="Audience targeting summary in Quick Promote" />
            <Point label="Overall, making the ad creation more approachable">
              Refreshed the interface with vibrant visuals to create a welcoming first impression
              and make campaign creation feel less intimidating.
            </Point>
            <Demo src={`${A}/pin-gif-3.gif`} alt="Refreshed Quick Promote ad creation interface" />
          </div>
        </div>
      </Section>

      {/* Impact */}
      <Section>
        <div className="flex flex-col gap-8 lg:gap-[40px]">
          <div className="flex flex-col gap-3">
            <Eyebrow>How would I measure impact?</Eyebrow>
            <Title>
              This project identified opportunities to expand Pinterest business product by
              addressing underserved SMB needs, improving the ad creation experience, and laying the
              groundwork for greater SMB adoption.
            </Title>
          </div>
          <div className="flex flex-col gap-8 font-body text-[18px] lg:flex-row lg:gap-6">
            <div className="flex flex-1 flex-col gap-3">
              <p className="font-bold leading-normal text-label">Completion rate</p>
              <p className="leading-normal text-ink">
                Measure the percentage of users who successfully complete the entire ad creation
                process.
              </p>
            </div>
            <div className="flex flex-1 flex-col gap-3">
              <p className="font-bold leading-normal text-label">Time of completion</p>
              <p className="leading-normal text-ink">
                A decrease in time to completion would indicate a more efficient process.
              </p>
            </div>
            <div className="flex flex-1 flex-col gap-3">
              <p className="font-bold leading-normal text-label">Drop-off rate</p>
              <p className="leading-normal text-ink">
                Measure the percentage of users who abandon the ad creation process at each step
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Special thanks — Medium URL is an image link */}
      <Section wash>
        <div className="flex flex-col gap-8 lg:gap-[40px]">
          <div className="flex flex-col gap-3">
            <p className="font-body text-[18px] font-bold leading-normal text-label">
              Featured on Pinterest Design’s blog page
            </p>
            <p className="font-body text-[18px] leading-normal text-ink">
              Thank you to Judy, a senior product designer, who guided us through this project :)
            </p>
          </div>
          <a
            href={MEDIUM}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex max-w-[720px] flex-col overflow-hidden rounded-xl border border-[#e4e4e4] bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pin sm:flex-row"
          >
            <img
              src={`${A}/pin-medium.jpg`}
              alt=""
              className="h-[180px] w-full object-cover sm:h-auto sm:w-[240px] sm:shrink-0"
            />
            <div className="flex min-w-0 flex-col justify-center gap-2 px-5 py-4">
              <p className="font-body text-[12px] font-medium uppercase tracking-[0.04em] text-label">
                medium.com · Pinterest Design
              </p>
              <p className="font-display text-[18px] leading-none text-copy transition-colors duration-200 group-hover:text-pin lg:text-[20px]">
                Berkeley Innovation x Pinterest Design
              </p>
              <p className="font-body text-[15px] leading-normal text-meta">
                What we learned while partnering with students at Berkeley Innovation.
              </p>
            </div>
          </a>
        </div>
      </Section>
    </article>
  );
}
