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
  return <p className="font-body text-[18px] font-bold leading-normal text-tinder">{children}</p>;
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
    <div className={`flex flex-col gap-1 ${wide ? "sm:min-w-[240px] lg:w-[360px]" : ""}`}>
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
      className="mx-auto h-auto w-full max-w-[764px] object-contain"
    />
  );
}

export default function Tinder() {
  return (
    <article>
      <div className="relative mt-8 flex h-[240px] items-center justify-center overflow-hidden bg-[#252525] sm:h-[320px] lg:h-[439px]">
        <div className="relative flex h-full w-full max-w-[928px] items-center justify-center gap-6 px-6 sm:gap-10 lg:gap-[48px]">
          <img
            src={`${A}/tinder-hero-1.png`}
            alt="Tinder profile editor"
            className="relative top-[-8%] h-[118%] w-auto object-contain"
          />
          <img
            src={`${A}/tinder-hero-2.png`}
            alt="Tinder profile preview"
            className="relative top-[6%] h-[118%] w-auto object-contain"
          />
          <img
            src={`${A}/tinder-flame.png`}
            alt="Tinder"
            className="w-[48px] shrink-0 object-contain sm:w-[64px] lg:w-[79px]"
          />
        </div>
      </div>

      <Section wash>
        <div className="flex flex-col gap-10 lg:gap-[60px]">
          <div className="flex flex-col gap-8 text-meta sm:flex-row sm:flex-wrap sm:gap-x-[72px] lg:flex-nowrap lg:gap-x-[104px]">
            <Meta label="ROLE" value="Associate Product Designer" />
            <Meta
              label="TEAM"
              value="ASL (Art & Science Lab), Innovation @ Match Group, Profile @ Tinder"
              wide
            />
            <Meta label="TIMELINE" value="2025" />
          </div>
          <div className="flex flex-col items-start justify-between gap-10 lg:flex-row">
            <div className="flex w-[196px] flex-col gap-2">
              <img
                src={`${A}/tinder-celebration.gif`}
                alt=""
                className="size-[175px] object-contain"
              />
              <p className="font-body text-[15px] font-bold leading-normal text-meta">
                ART BY YU LU, VISUAL DESIGNER, TINDER
              </p>
            </div>
            <div className="flex max-w-[450px] flex-col gap-6 font-body text-[18px] lg:gap-[47px]">
              <p className="font-medium leading-normal text-label">Project Overview</p>
              <p className="leading-none text-copy">
                Part of the ASL (Art & Science Lab) team built and run by the CTO of Match Group at
                that time for the purpose of innovating, iterating, and shipping ideas at a more
                accelerated timeline. Designed with top engineers from Seoul, Korea to test
                different AI/ML techniques to improve dating profiles/experiences, contributing to
                Tinder’s restructure.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="flex flex-col gap-8 lg:gap-[40px]">
          <div className="flex flex-col gap-3">
            <Eyebrow>What’s not working?</Eyebrow>
            <Title>
              Tinder was making it easy to swipe, but harder for users to build authentic
              connections
            </Title>
          </div>
          <div className="flex flex-col gap-6">
            <Point label="Declined in MAU">
              Monthly active users were declining, alongside a 25% decrease in monthly contact
              exchanges, signaling a gap between discovering profiles and progressing to meaningful
              communication.
            </Point>
            <Point label="Profiles lacked personality">
              Tinder’s quick profile creation, which takes less than a minute, made onboarding easy
              but often left users with shallow profiles that lacked personality, lifestyle, and
              depth.
            </Point>
            <Point label="Swiping felt more like a game than a way to connect">
              Low-quality or suspicious profiles (bots accounts) and limited insight into who
              someone really was made it harder to find authentic connections and feel confident
              taking the next step.
            </Point>
          </div>
        </div>
      </Section>

      <Section wash>
        <div className="flex flex-col gap-3">
          <Eyebrow>The company core value had to change</Eyebrow>
          <Title>
            How might we reorient Tinder to help users build genuine connections and meet IRL?
          </Title>
        </div>
      </Section>

      <Section>
        <div className="flex flex-col gap-8 lg:gap-[40px]">
          <div className="flex flex-col gap-3">
            <Eyebrow>What I did</Eyebrow>
            <Title>Explored AI powered profile building</Title>
          </div>
          <Point label="Worked with Match Group AI team">
            Build and designed the first iterations of camera roll insights to recommend photos
            reflecting user;s personality and lifestyle.
          </Point>
          <div className="flex flex-col items-center gap-3">
            <p className="w-full font-body text-[11px] leading-normal text-meta">
              Building the experience on the backend to support the technology
            </p>
            <Demo src={`${A}/tinder-backend.png`} alt="Camera-roll insights backend flow" />
          </div>
          <Point label="Designed a guided experience">
            Explored how those insights could power a guided experience that helps users build a
            more balanced profile.
          </Point>
          <img
            src={`${A}/tinder-glance.png`}
            alt="Weekly glance profile card"
            className="mx-auto h-auto w-full max-w-[360px] object-contain"
          />
          <Demo src={`${A}/tinder-guided.png`} alt="Guided photo refining and insights" />
          <Point label="Encourage self-learning">
            Investigated ways to help users understand how their profile might come across to
            potential matches.
          </Point>
          <Demo
            src={`${A}/tinder-self-learning.png`}
            alt="Weekly glance insights next to a Tinder profile with My Insights"
          />
          <Point label="Simplifying editing flow">
            The current editing flow takes 5 clicks and does not provide guidance.
          </Point>
          <Demo src={`${A}/tinder-edit.png`} alt="Simplified Tinder profile editing flow" />
        </div>
      </Section>

      <Section wash>
        <div className="flex flex-col gap-8 lg:gap-[40px]">
          <Title>Reimagined Social Dating Experiences</Title>
          <Point label="Explored ways to make dating feel more social">
            Brainstormed ideas alongside the Double Date beta, including a Blind Date concept where
            friends could find potential matches for a friend's swipe stack.
          </Point>
          <Demo src={`${A}/tinder-social.png`} alt="Blind Date concept across three phones" />
        </div>
      </Section>

      <Section>
        <div className="flex flex-col gap-8 lg:gap-[40px]">
          <Title>Pushed for safety features to be more proactive</Title>
          <Point label="Resurfacing current safety features during chat">
            Certain keywords can trigger these popups like “date” or “meeting up”
          </Point>
          <Demo src={`${A}/tinder-safety-1.png`} alt="Safety prompt during chat" />
          <p className="font-body text-[18px] font-bold leading-normal text-label">Bothers you</p>
          <Demo src={`${A}/tinder-safety-2.png`} alt="Bothers you safety action" />
          <p className="font-body text-[18px] font-bold leading-normal text-label">
            Safety center’s lessons embedded into chats
          </p>
          <Demo src={`${A}/tinder-safety-3.png`} alt="Safety center lessons in chat" />
        </div>
      </Section>

      <Section wash>
        <div className="flex flex-col gap-8 lg:gap-[40px]">
          <div className="flex flex-col gap-3">
            <Eyebrow>My early product explorations helped inform Tinder’s broader rebrand</Eyebrow>
            <Title>
              March 2026, Tinder announced camera-roll-based photo insights, more personalized
              matching, and new ways to connect through real-world events.
            </Title>
          </div>
          <div className="flex flex-col gap-8">
            <Demo src={`${A}/tinder-news-1.png`} alt="Tinder photo insights announcement" />
            <Demo src={`${A}/tinder-news-2.png`} alt="Tinder personalized matching announcement" />
            <Demo src={`${A}/tinder-news-3.png`} alt="Tinder real-world events announcement" />
          </div>
        </div>
      </Section>

      <Section>
        <div className="flex flex-col gap-8 lg:gap-[40px]">
          <div className="flex flex-col gap-3">
            <Eyebrow>One in a lifetime opportunity</Eyebrow>
            <Title>
              An honor to work alongside Tinder and Match Group leadership, bringing a Gen Z
              perspective to the future of modern dating.
            </Title>
          </div>
          <p className="font-body text-[18px] leading-normal text-ink">
            My time at Tinder was both humbling and rewarding. It was an honor to work alongside
            leadership across Tinder and Match Group, knowing that my perspectives, ideas, and
            opinions were valued. As a Gen Z designer navigating the same modern dating landscape
            as our users, I had the opportunity to challenge existing assumptions and bring a new
            generation’s experiences into the conversation. It reminded me how powerful design can
            be when we bring different perspectives together, advocate for people, and make
            technology feel a little more human.
          </p>
          <img
            src={`${A}/tinder-thanks-row.png`}
            alt=""
            className="h-auto w-full object-contain"
          />
        </div>
      </Section>
    </article>
  );
}
