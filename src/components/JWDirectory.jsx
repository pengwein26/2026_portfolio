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

function Meta({ label, value }) {
  return (
    <div className="flex flex-col gap-1">
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

function Annotate({ title, notes, src, alt, crop }) {
  return (
    <div className="w-full overflow-hidden">
      <div className="flex h-10 items-center justify-center bg-[#979797]">
        <p className="font-body text-[16px] font-medium leading-normal text-white sm:text-[20px]">
          {title}
        </p>
      </div>
      <div className="relative min-h-[420px] bg-[#eff3fb] px-4 py-8 sm:min-h-[480px] lg:min-h-[517px] lg:px-8">
        <div className="mx-auto grid max-w-[780px] grid-cols-1 items-center gap-6 lg:grid-cols-[1fr_216px_1fr] lg:gap-4">
          <div className="flex flex-col gap-8 lg:pt-6">
            {notes.filter((n) => n.side === "left").map((n) => (
              <Note key={n.label} {...n} />
            ))}
          </div>
          <div
            className="relative mx-auto h-[390px] w-[190px] overflow-hidden rounded-[33px] sm:h-[443px] sm:w-[216px]"
          >
            <img
              src={src}
              alt={alt}
              className="absolute max-w-none"
              style={{
                height: crop.h,
                left: crop.l,
                top: crop.t,
                width: crop.w,
              }}
            />
          </div>
          <div className="flex flex-col gap-8 lg:pt-2">
            {notes.filter((n) => n.side === "right").map((n) => (
              <Note key={n.label} {...n} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Note({ label, body }) {
  return (
    <div className="flex max-w-[180px] flex-col gap-1.5">
      <p className="font-body text-[10px] font-medium leading-none tracking-[0.02em] text-[#7c7c7c]">
        {label}
      </p>
      <p className="font-body text-[13px] leading-none text-[#4c4c4c]">{body}</p>
    </div>
  );
}

export default function JWDirectory() {
  return (
    <article>
      {/* Hero — Figma 75:820 */}
      <div className="relative mt-8 h-[240px] overflow-hidden bg-[#e3eaf6] sm:h-[320px] lg:h-[439px]">
        <div className="absolute left-[34.3%] top-[126px] aspect-[221/453] w-[14.87%] overflow-hidden rounded-[29px] max-lg:left-[28%] max-lg:top-[22%] max-lg:w-[22%]">
          <img
            src={`${A}/jw-directory-1.png`}
            alt="Justworks mobile directory list"
            className="absolute left-[-4.78%] top-[-1.73%] h-[103.29%] w-[108.29%] max-w-none"
          />
        </div>
        <div className="absolute left-[50.86%] top-[40px] aspect-[220/449] w-[14.83%] overflow-hidden rounded-[33px] max-lg:left-[50%] max-lg:top-[8%] max-lg:w-[22%]">
          <img
            src={`${A}/jw-directory-2.png`}
            alt="Justworks mobile directory profile"
            className="absolute left-[-4.9%] top-[-1.86%] h-[103.4%] w-[107.77%] max-w-none"
          />
        </div>
        <img
          src={`${A}/jw-dir-logo.png`}
          alt="Justworks"
          className="absolute left-[calc(50%+180px)] top-[48%] w-[72px] object-contain sm:left-[calc(50%+240px)] sm:w-[90px] lg:left-[calc(50%+276px)] lg:top-[224px] lg:w-[108px]"
        />
      </div>

      {/* Summary */}
      <Section wash>
        <div className="flex flex-col gap-10 lg:gap-[60px]">
          <div className="flex flex-col gap-8 text-meta sm:flex-row sm:flex-wrap sm:gap-x-[72px] lg:gap-x-[104px]">
            <Meta label="ROLE" value="Product designer" />
            <Meta label="TEAM" value="Mobile" />
            <Meta label="TIMELINE" value="2023" />
          </div>
          <div className="flex flex-col gap-10 lg:flex-row lg:gap-[93px]">
            <p className="font-display text-[24px] leading-none text-copy sm:text-[28px] lg:max-w-[379px] lg:text-[32px]">
              How might we create a mobile directory experience that better meets
              <span className="text-jw"> users’ needs on the go</span>?
            </p>
            <div className="flex max-w-[450px] flex-col gap-6 font-body text-[18px] lg:gap-[47px]">
              <p className="font-medium leading-normal text-label">Project Overview</p>
              <p className="leading-none text-copy">
                I designed and launched a mobile directory from 0 to 1, helping employees find and
                connect with colleagues on the go. Within the first month, the feature drove a 10%
                increase in mobile app engagement and enabled 500+ contact interactions.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Why helpful */}
      <Section>
        <div className="flex flex-col gap-8 lg:gap-[40px]">
          <div className="flex flex-col gap-3">
            <Eyebrow>Why would a mobile directory be helpful?</Eyebrow>
            <Title>
              A mobile directory helps employees quickly find and connect with colleagues anytime,
              anywhere, without needing to be at their desks.
            </Title>
          </div>
          <div className="flex flex-col gap-6">
            <Point label="Efficient communication">
              Streamlines communication by providing quick access to contact details reducing time
              and effort.
            </Point>
            <Point label="Accessibility">
              Employees can access important contact information anytime, anywhere, making it easier
              to reach colleagues especially when working remotely or on the go.
            </Point>
            <Point label="Integration">
              Mobile directories can integrate with other communication tools and systems
            </Point>
          </div>
        </div>
      </Section>

      {/* What I did */}
      <Section wash>
        <div className="flex flex-col gap-8 lg:gap-[40px]">
          <div className="flex flex-col gap-3">
            <Eyebrow>What I did</Eyebrow>
            <Title>Designed and shipped a mobile directory from 0 → 1</Title>
          </div>
          <div className="flex flex-col gap-6 lg:gap-6">
            <Point label="User research">
              Conducted unmoderated research with employees at companies of varying sizes (10–50
              employees) and iterated on designs based on insights.
            </Point>
            <img
              src={`${A}/jw-dir-research.png`}
              alt="UserTesting session"
              className="h-auto w-[204px] object-cover"
            />
            <Point label="Design system">
              Contributed to the mobile design system to ensure consistency and usability.
            </Point>
            <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-center sm:gap-[50px]">
              <img
                src={`${A}/jw-dir-contact.gif`}
                alt="Contact information component"
                className="h-auto w-full max-w-[357px] rounded-[8px] object-cover"
              />
              <img
                src={`${A}/jw-dir-personal.gif`}
                alt="Personal information component"
                className="h-auto w-full max-w-[512px] rounded-[8px] object-cover"
              />
            </div>
            <Point label="End-to-end design">
              Designed the mobile directory experience from concept to launch.
            </Point>
          </div>

          <div className="flex flex-col gap-[11px]">
            <Annotate
              title="LIST PAGE"
              src={`${A}/jw-directory-1.png`}
              alt="Directory list page"
              crop={{ h: "103.29%", l: "-4.78%", t: "-1.73%", w: "108.29%" }}
              notes={[
                {
                  side: "left",
                  label: "DEPARTMENTS/NAMES",
                  body: "Department & Last Names are in alphabetical order",
                },
                {
                  side: "left",
                  label: "SEARCH BAR",
                  body: "Last names are in alphabetical order, reflecting the desktop organization",
                },
                {
                  side: "right",
                  label: "NAMES",
                  body: "Last names are in alphabetical order, reflecting the desktop organization",
                },
              ]}
            />
            <Annotate
              title="PROFILE PAGE"
              src={`${A}/jw-directory-2.png`}
              alt="Directory profile page"
              crop={{ h: "103.4%", l: "-4.9%", t: "-1.86%", w: "107.77%" }}
              notes={[
                {
                  side: "left",
                  label: "CARDS",
                  body: "Information split into cards, used throughout the mobile app",
                },
                {
                  side: "left",
                  label: "PERSONAL INFO",
                  body: "Basic information on the top for immediate identification & give context relevancy",
                },
                {
                  side: "right",
                  label: "ICONS FOR CALLING & EMAILING",
                  body: "Icons are universal in conveying an “action”, conserve space within a limited mobile space",
                },
              ]}
            />
          </div>
        </div>
      </Section>

      {/* Impact */}
      <Section>
        <div className="flex flex-col gap-8 lg:gap-[40px]">
          <div className="flex flex-col gap-3">
            <Eyebrow>How did it help users? Impact?</Eyebrow>
            <Title>Within the first month of launch</Title>
          </div>
          <div className="flex flex-col gap-8 font-body text-[18px] lg:flex-row lg:gap-6">
            <div className="flex flex-1 flex-col gap-3">
              <p className="font-bold leading-normal text-label">Increase engagement</p>
              <ul className="list-disc space-y-1 pl-[27px] leading-normal text-ink">
                <li>Drove a 10% increase in mobile app engagement within the first month of launch.</li>
              </ul>
            </div>
            <div className="flex flex-1 flex-col gap-3">
              <p className="font-bold leading-normal text-label">Improved communications</p>
              <ul className="list-disc space-y-1 pl-[27px] leading-normal text-ink">
                <li>
                  Enabled 500+ contact interactions through the directory, helping employees find
                  and connect with colleagues.
                </li>
              </ul>
            </div>
            <div className="flex flex-1 flex-col gap-3">
              <p className="font-bold leading-normal text-label">Expanded mobile capabilities</p>
              <ul className="list-disc space-y-1 pl-[27px] leading-normal text-ink">
                <li>
                  Introduced a new mobile directory feature, expanding the app’s functionality and
                  laying the groundwork for future mobile experiences.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Thanks */}
      <Section wash>
        <div className="flex flex-col gap-8 lg:gap-[40px]">
          <p className="font-body text-[18px] leading-normal text-ink">
            Big thank you to the mobile team within Justworks as well as my mentor and the product
            design department for guiding me through the project step by step! And a big thank you
            to New York City for all the fun times I had over the summer!
          </p>
          <div className="relative aspect-[920/451] w-full overflow-hidden bg-[#f4f4f4]">
            <img
              src={`${A}/jw-dir-thanks-1.jpg`}
              alt=""
              className="absolute left-0 top-[-5.8%] h-[54.5%] w-[20%] object-cover"
            />
            <img
              src={`${A}/jw-dir-thanks-2.jpg`}
              alt=""
              className="absolute left-[20.1%] top-[-5.7%] h-[54.4%] w-[20.1%] object-cover"
            />
            <img
              src={`${A}/jw-dir-thanks-3.jpg`}
              alt=""
              className="absolute left-[40.2%] top-[-5.8%] h-[54.5%] w-[20.3%] object-cover"
            />
            <img
              src={`${A}/jw-dir-thanks-4.jpg`}
              alt=""
              className="absolute bottom-0 left-0 h-[54.4%] w-[20%] object-cover"
            />
            <img
              src={`${A}/jw-dir-thanks-5.jpg`}
              alt=""
              className="absolute bottom-0 left-[20.1%] h-[57%] w-[40.4%] object-cover"
            />
            <img
              src={`${A}/jw-dir-thanks-6.jpg`}
              alt=""
              className="absolute right-0 top-[-5.5%] h-[111.5%] w-[40.9%] object-cover"
            />
          </div>
        </div>
      </Section>
    </article>
  );
}
