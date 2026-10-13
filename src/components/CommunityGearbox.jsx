const A = `${import.meta.env.BASE_URL}assets`;

function Section({ wash, lime, children }) {
  const bg = lime ? "bg-[#eef3d8]" : wash ? "bg-wash" : "bg-white";
  return (
    <section className={`px-6 py-16 lg:px-[180px] lg:py-[100px] ${bg}`}>
      {children}
    </section>
  );
}

function Eyebrow({ children }) {
  return <p className="font-body text-[18px] font-bold leading-normal text-cg">{children}</p>;
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

function RankList({ title, rows }) {
  return (
    <div className="flex min-w-0 flex-1 flex-col gap-6">
      <p className="font-body text-[18px] font-bold leading-normal text-label">{title}</p>
      <ol className="flex flex-col gap-3">
        {rows.map((row, i) => (
          <li key={row.label} className="flex items-center gap-3">
            <span className="flex size-[33px] shrink-0 items-center justify-center rounded-full bg-cg font-body text-[21px] font-bold leading-none text-[#eef3d8]">
              {i + 1}
            </span>
            <span className="flex-1 font-body text-[18px] font-medium leading-normal text-ink">
              {row.label}
            </span>
            <span className="w-10 shrink-0 text-right font-body text-[18px] font-medium leading-normal text-[#7c7c7c]">
              {row.pct}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

function Chevron({ n, fill }) {
  return (
    <div
      className="relative flex h-[72px] min-w-0 flex-1 items-center justify-center text-[18px] font-semibold leading-none tracking-[-0.18px] text-white"
      style={{
        background: fill,
        clipPath:
          "polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%, 22px 50%)",
      }}
    >
      {n}
    </div>
  );
}

function Annotate({ notes, src, alt }) {
  return (
    <div className="relative min-h-[420px] overflow-hidden bg-[#f4f4f4] px-4 py-8 sm:min-h-[480px] lg:min-h-[521px] lg:px-8">
      <div className="mx-auto grid max-w-[780px] grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_212px_1fr] lg:gap-6">
        <div className="hidden lg:block" />
        <img
          src={src}
          alt={alt}
          className="mx-auto h-[390px] w-[190px] rounded-[14px] object-cover shadow-[0_2.6px_2.6px_0_rgba(0,0,0,0.25)] sm:h-[441px] sm:w-[211px]"
        />
        <div className="flex flex-col gap-8">
          {notes.map((n) => (
            <div key={n.label} className="flex max-w-[200px] flex-col gap-1.5">
              <p className="font-body text-[10px] font-medium leading-none text-[#7c7c7c]">
                {n.label}
              </p>
              <p className="font-body text-[13px] leading-none text-[#4c4c4c]">{n.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const STEPS = [
  {
    n: 1,
    fill: "#8ab262",
    title: "User Interviews",
    body: "diving deeper into user’s negative & positive experience with borrowing and lending and their painpoints.",
    pos: "top",
  },
  {
    n: 2,
    fill: "#7fa056",
    title: "User Surveys",
    body: "Gain an overall understanding of the demographic and where we should attack the hmw",
    pos: "bottom",
  },
  {
    n: 3,
    fill: "#74944c",
    title: "Finding Trends",
    body: "using Jupyter Notebook to help find trends/patterns using the data in our user surveys",
    pos: "bottom",
  },
  {
    n: 4,
    fill: "#6a8945",
    title: "Affinity Diagram",
    body: "grouping important themes",
    pos: "top",
  },
  {
    n: 5,
    fill: "#5f7c3d",
    title: "Concept Mapping",
    body: "Find meaningful connections between our themes",
    pos: "bottom",
  },
  {
    n: 6,
    fill: "#546f36",
    title: "Personas & User Journeys",
    body: "Creating users to ideate solutions for based on research + interviews",
    pos: "top",
  },
];

export default function CommunityGearbox() {
  return (
    <article>
      <div className="relative mt-8 h-[240px] overflow-hidden bg-[#dbe5c2] sm:h-[320px] lg:h-[439px]">
        <img
          src={`${A}/cg-logo.png`}
          alt="Community Gearbox"
          className="absolute left-[6%] top-1/2 w-[140px] -translate-y-1/2 object-contain sm:left-[9%] sm:w-[180px] lg:left-[119px] lg:w-[225px]"
        />
        <img
          src={`${A}/cg-hero-1.png`}
          alt="Community Gearbox home"
          className="absolute right-[26%] top-[21%] h-[82%] w-[18%] rounded-[18px] object-contain max-sm:right-[18%] max-sm:w-[28%] lg:right-[18%] lg:top-[24%] lg:h-[90%] lg:w-[14.3%]"
        />
        <img
          src={`${A}/cg-hero-2.png`}
          alt="Community Gearbox leaderboard"
          className="absolute right-[4%] top-[-12%] h-[110%] w-[20%] rounded-[18px] object-contain max-sm:right-[-2%] max-sm:w-[30%] lg:right-[6%] lg:w-[16%]"
        />
      </div>

      <Section wash>
        <div className="flex flex-col gap-10 lg:gap-[60px]">
          <div className="flex flex-col gap-8 text-meta sm:flex-row sm:flex-wrap sm:gap-x-[72px] lg:flex-nowrap lg:gap-x-[104px]">
            <Meta label="ROLE" value="Product designer (contract)" />
            <Meta label="TEAM" value="Isabel Zheng, Michid Byambajav, Gily Yu, Geena Yin" wide />
            <Meta label="TIMELINE" value="2023" />
          </div>
          <div className="flex flex-col gap-10 lg:flex-row lg:gap-[93px]">
            <p className="font-display text-[24px] leading-none text-copy sm:text-[28px] lg:max-w-[379px] lg:text-[32px]">
              How might we make{" "}
              <span className="text-cg">borrowing and lending more rewarding</span> to encourage
              people to share more with their community?
            </p>
            <div className="flex max-w-[450px] flex-col gap-6 font-body text-[18px] lg:gap-[47px]">
              <p className="font-medium text-label">Project Overview</p>
              <p className="leading-none text-copy">
                Community Gearbox, a community-sharing platform that lets people borrow and lend
                items for free, partnered with Berkeley Innovation. Our team explored ways to make
                sharing more rewarding and collaborative, encouraging people to lend more, build
                stronger connections, and reduce unnecessary consumption.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section lime>
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-[80px]">
          <div className="flex max-w-[430px] flex-col gap-10 lg:gap-[74px]">
            <div className="flex flex-col gap-6">
              <p className="font-body text-[18px] font-bold leading-normal text-label">
                What’s Community Gearbox?
              </p>
              <p className="font-body text-[18px] leading-none text-ink">
                Community Gearbox is a platform where people can{" "}
                <span className="font-bold text-[#889735]">lend and borrow items for free</span>,
                hence building deeper connections, decreasing individual consumption, and creating
                an abundance of shared resources.
              </p>
            </div>
            <a
              href="https://communitygearbox.com/"
              target="_blank"
              rel="noreferrer"
              className="font-body text-[18px] italic leading-normal text-ink underline decoration-transparent hover:decoration-ink"
            >
              https://communitygearbox.com/
            </a>
          </div>
          <div className="h-[420px] w-[228px] shrink-0 overflow-hidden rounded-[28px] bg-[#dbe5c2] sm:h-[505px] sm:w-[274px]">
            <img
              src={`${A}/cg-website.png`}
              alt="Community Gearbox website"
              className="h-full w-full object-cover object-[18%_center]"
            />
          </div>
        </div>
      </Section>

      <Section>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-8 lg:gap-[40px]">
            <div className="flex flex-col gap-3">
              <Eyebrow>What’s not working?</Eyebrow>
              <Title>
                Borrowing and lending are driven by different needs, and without enough trust,
                comfort, and recognition, people may hesitate to share what they own.
              </Title>
            </div>
            <div className="flex flex-col gap-6">
              <Point label="Different motivations">
                63% of borrowers prioritize convenience, while lenders place greater importance on
                feeling comfortable sharing (45%) and the fulfillment of helping others (38%).
              </Point>
              <Point label="Trust creates friction">
                Lending involves concerns around comfort, personal relationships (31%), and safety
                and security (29%), making sharing more personal than simply exchanging items.
              </Point>
              <Point label="Lenders need to feel valued">
                While borrowers prioritize convenience and urgency, lenders are motivated by
                helping others, revealing an opportunity to make lending feel more rewarding.
              </Point>
            </div>
          </div>
          <div className="flex flex-col gap-10 rounded-[30px] bg-[#f4f4f4] p-6 sm:p-[30px] lg:flex-row lg:gap-[65px]">
            <RankList
              title="What do you consider when lending people an item?"
              rows={[
                { label: "Comfort level with sharing", pct: "45%" },
                { label: "Fulfillment through helping", pct: "38%" },
                { label: "Personal relationships", pct: "31%" },
                { label: "Safety and security", pct: "29%" },
              ]}
            />
            <RankList
              title="What do you consider when borrowing an item?"
              rows={[
                { label: "Convenience", pct: "63%" },
                { label: "Personal relationships", pct: "53%" },
                { label: "Urgency", pct: "46%" },
              ]}
            />
          </div>
        </div>
      </Section>

      <Section wash>
        <div className="flex flex-col gap-10 lg:gap-[40px]">
          <div className="flex flex-col gap-3">
            <Eyebrow>What I did</Eyebrow>
            <Title>
              Interviewed users to uncover sharing barriers, then designed community features and a
              damage-resolution process to build trust and make lending more rewarding.
            </Title>
          </div>
          <Point label="Research to design decisions">
            Uncover borrowing habits, lending motivations, and barriers to trust through multiple
            research methods.
          </Point>

          <div className="hidden w-full lg:block">
            <div className="grid grid-cols-6 gap-x-2">
              {STEPS.map((s) =>
                s.pos === "top" ? (
                  <div key={s.n} className="flex flex-col items-center gap-2 text-center">
                    <p className="font-body text-[18px] font-medium leading-[1.2] tracking-[-0.18px] text-meta">
                      {s.title}
                    </p>
                    <p className="max-w-[170px] font-body text-[10px] leading-[1.2] tracking-[-0.1px] text-[#858585]">
                      {s.body}
                    </p>
                  </div>
                ) : (
                  <div key={s.n} />
                ),
              )}
            </div>
            <div className="mt-3 flex -space-x-5">
              {STEPS.map((s) => (
                <Chevron key={s.n} n={s.n} fill={s.fill} />
              ))}
            </div>
            <div className="mt-3 grid grid-cols-6 gap-x-2">
              {STEPS.map((s) =>
                s.pos === "bottom" ? (
                  <div key={s.n} className="flex flex-col items-center gap-2 text-center">
                    <p className="font-body text-[18px] font-medium leading-[1.2] tracking-[-0.18px] text-meta">
                      {s.title}
                    </p>
                    <p className="max-w-[170px] font-body text-[10px] leading-[1.2] tracking-[-0.1px] text-[#858585]">
                      {s.body}
                    </p>
                  </div>
                ) : (
                  <div key={s.n} />
                ),
              )}
            </div>
          </div>
          <ol className="flex flex-col gap-4 lg:hidden">
            {STEPS.map((s) => (
              <li key={s.n} className="flex gap-3">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full font-body text-[14px] font-bold text-white" style={{ background: s.fill }}>
                  {s.n}
                </span>
                <div>
                  <p className="font-body text-[16px] font-medium text-meta">{s.title}</p>
                  <p className="font-body text-[12px] leading-snug text-[#858585]">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <Point label="Home page">Highlighted exchanges, rankings, and groups to make sharing more visible.</Point>
          <Annotate
            src={`${A}/cg-homepage.gif`}
            alt="Community Gearbox home page"
            notes={[
              {
                label: "PRIVATE GROUPS",
                body: "Horizontal scroll for private groups catering to niche interests and communities.",
              },
              {
                label: "COMMUNITY",
                body: "Reflecting the horizontal scroll above, friends with the most interactions appear here, with the option to view more. Requests and suggestions are also located in this section.",
              },
              {
                label: "LEADERBOARD",
                body: "Overview of your achievements (exchanges) and your rankings among friends.",
              },
            ]}
          />

          <Point label="Leaderboard">Encouraged borrowing and lending through gamifying competition</Point>
          <Annotate
            src={`${A}/cg-board.gif`}
            alt="Community Gearbox leaderboard"
            notes={[
              {
                label: "PUBLICZING EXCHANGES",
                body: "Displaying exchange counts under each user highlights achievements, measures activity, and fosters app-wide competition.",
              },
              {
                label: "YOUR RANKING",
                body: "Highlighting your rank among friends on a mobile app leaderboard encourages competition while motivates engagement within app.",
              },
            ]}
          />

          <Point label="Activity feed">
            Added sharing updates, photos, and emoji reactions to strengthen connections.
          </Point>
          <Annotate
            src={`${A}/cg-activity.gif`}
            alt="Community Gearbox activity feed"
            notes={[
              {
                label: "PUBLICZING EXCHANGES",
                body: "Inspired by Venmo's social aspect of lending and borrowing, publicizing this encourages users to feel more accountable.",
              },
              {
                label: "IMAGES, REACTS, COMMENTS",
                body: "Users can upload images, react to posts, and comment, inspiring others to engage in borrowing and lending as participation grows",
              },
              {
                label: "ENTRY POINT TO PROFILES & ITEMS",
                body: "Users can click on items and profiles within this feed for easy access (requesting use) or to view someone's inventory.",
              },
            ]}
          />
        </div>
      </Section>

      <Section>
        <div className="flex flex-col gap-8 lg:gap-[40px]">
          <div className="flex flex-col gap-3">
            <Eyebrow>Special thanks to...</Eyebrow>
            <p className="font-body text-[18px] leading-normal text-ink">
              My lovely team and Dante, the founder of Community Gearbox, met with us every week to
              discuss his future vision for his startup and provide feedback on our designs. Working
              with a startup founder has deepened my passion for creating products that will not
              only support the company's mission but also deliver value to its users.
            </p>
          </div>
          <div className="flex flex-col overflow-hidden">
            <img
              src={`${A}/cg-thanks-1.jpg`}
              alt=""
              className="h-[220px] w-full object-cover sm:h-[280px] lg:h-[337px]"
            />
            <div className="grid grid-cols-2">
              <img
                src={`${A}/cg-thanks-2.jpg`}
                alt=""
                className="h-[180px] w-full object-cover object-center sm:h-[220px] lg:h-[243px]"
              />
              <img
                src={`${A}/cg-thanks-3.jpg`}
                alt=""
                className="h-[180px] w-full object-cover sm:h-[220px] lg:h-[243px]"
              />
            </div>
          </div>
          <p className="font-body text-[18px] font-bold leading-normal text-label">
            and the wonderful team from Berkeley Innovation!
          </p>
        </div>
      </Section>
    </article>
  );
}
