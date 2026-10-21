const A = `${import.meta.env.BASE_URL}assets`;
const APP_STORE =
  "https://apps.apple.com/us/app/pact-follow-through-together/id6757022450";

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
  return (
    <p className="font-body text-[18px] font-bold leading-normal text-[#868686]">{children}</p>
  );
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

function Icon({ name, count, extra }) {
  return (
    <span className="flex items-center gap-[2px] py-1">
      <img src={`${A}/pact-${name}.svg`} alt="" className="size-[10px]" />
      <span className="font-body text-[7px] leading-none text-[#6a7282]">
        {extra ?? count}
      </span>
    </span>
  );
}

function PactCard({
  avatar,
  name,
  title,
  amount,
  className,
}) {
  return (
    <div
      className={`flex items-center rounded-[6px] border-[0.5px] border-[#eee] bg-white p-2 ${className}`}
    >
      <div className="flex w-full flex-col gap-2">
        <div className="flex items-center gap-1">
          <img src={`${A}/${avatar}`} alt="" className="size-[24px]" />
          <p className="font-body text-[8px] leading-none text-[#002247]">{name}</p>
        </div>
        <div className="flex items-start justify-between gap-2">
          <p className="font-body text-[9px] leading-[1.3] text-[#002247]">{title}</p>
          <p className="shrink-0 font-body text-[10px] font-bold leading-none text-[#002247]">
            {amount}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Icon name="heart" count="1" />
            <Icon name="message" count="5" />
            <Icon name="hourglass" extra="Jan 26, 10:59 PM" />
          </div>
          <img src={`${A}/pact-dots.svg`} alt="" className="size-3 -rotate-90" />
        </div>
      </div>
    </div>
  );
}

function Badge({ icon, label, bg, color, className }) {
  return (
    <div
      className={`flex items-center gap-[3px] rounded-[6px] px-[5px] py-[2.5px] ${className}`}
      style={{ backgroundColor: bg }}
    >
      <img src={`${A}/${icon}`} alt="" className="size-[13px]" />
      <span className="font-body text-[10px] leading-none tracking-[-0.2px]" style={{ color }}>
        {label}
      </span>
    </div>
  );
}

function PactCards() {
  return (
    <div className="relative h-[220px] w-full max-w-[367px] shrink-0">
      <Badge
        icon="pact-stars.svg"
        label="Daily"
        bg="#ffffce"
        color="#e1db33"
        className="absolute left-[15px] top-[6px] z-20"
      />
      <PactCard
        avatar="pact-avatar-stella.svg"
        name="Stella"
        title="Learn animation for 30 minutes each day"
        amount="$2"
        className="absolute left-[157px] top-0 z-10 w-[187px] rotate-[5.13deg]"
      />
      <PactCard
        avatar="pact-avatar-bob.svg"
        name="Bob"
        title="Clean my room, wash dishes, fold my laundry"
        amount="$1"
        className="absolute left-0 top-[26px] z-[11] w-[195px] -rotate-[3.45deg]"
      />
      <PactCard
        avatar="pact-avatar-starry.svg"
        name="Starry"
        title="File my taxes...."
        amount="$10"
        className="absolute left-[77px] top-[114px] z-[12] w-[224px]"
      />
      <Badge
        icon="pact-check.svg"
        label="Approved"
        bg="#e1fae7"
        color="#67ce67"
        className="absolute left-[301px] top-[81px] z-20"
      />
      <Badge
        icon="pact-review-icon.svg"
        label="Need review"
        bg="#fff2e8"
        color="#ff8621"
        className="absolute left-[240px] top-[202px] z-20"
      />
    </div>
  );
}

function PhoneGif({ src, alt, radius, maxWidth }) {
  return (
    <img
      src={src}
      alt={alt}
      className="mx-auto h-auto w-full object-contain"
      style={{ maxWidth, borderRadius: radius }}
    />
  );
}

function Block({ eyebrow, title, children }) {
  return (
    <div className="flex flex-col gap-8 lg:gap-[40px]">
      <div className="flex flex-col gap-3">
        <Eyebrow>{eyebrow}</Eyebrow>
        <Title>{title}</Title>
      </div>
      {children}
    </div>
  );
}

export default function Pact() {
  return (
    <article>
      <div className="relative mt-8 h-[240px] overflow-hidden bg-[#252525] sm:h-[320px] lg:h-[439px]">
        <img
          src={`${A}/pact-hero.jpg`}
          alt="Pact onboarding and home screens"
          className="h-full w-full object-cover object-center"
        />
      </div>

      <Section wash>
        <div className="flex flex-col gap-10 lg:gap-[60px]">
          <div className="flex flex-col gap-8 text-meta sm:flex-row sm:flex-wrap sm:gap-x-[72px] lg:flex-nowrap lg:gap-x-[104px]">
            <Meta label="ROLE" value="Co-Founder, Product Designer" />
            <Meta label="TEAM" value="Christopher Bannon, Kavin Kumaravel" wide />
            <Meta label="TIMELINE" value="2025" />
          </div>
          <div className="flex flex-col items-start justify-between gap-10 lg:flex-row">
            <PactCards />
            <div className="flex max-w-[450px] flex-col gap-6 font-body text-[18px] lg:gap-[47px]">
              <p className="font-medium leading-normal text-label">Project Overview</p>
              <div className="flex flex-col gap-6 leading-none text-copy">
                <p>
                  Pact is a social accountability app that helps you stay accountable by a monetary
                  incentive. You set a task, a deadline, and a dollar amount, and if you fall short,
                  you pay a friend, so loss aversion and real social stakes add the accountability
                  most to-do lists lack.
                </p>
                <p>
                  On the Apple App Store{" "}
                  <a
                    href={APP_STORE}
                    target="_blank"
                    rel="noreferrer"
                    className="font-bold text-jw underline"
                  >
                    here
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="flex flex-col gap-10 lg:gap-[45px]">
          <Block
            eyebrow="What is Pact?"
            title="Pact helps you follow through, together. Bet on your goals with friends and share progress"
          >
            <PhoneGif
              src={`${A}/pact-phone-1.gif`}
              alt="Pact onboarding screens"
              maxWidth={313}
              radius={47}
            />
          </Block>
          <Block
            eyebrow="What kind of pacts are there?"
            title="Anything! Silly, fun, serious, education, fitness. Create the pact, a deadline, a friend, and any amount fo $ to keep you in check!"
          >
            <PhoneGif
              src={`${A}/pact-phone-2.gif`}
              alt="Creating a pact with a friend"
              maxWidth={312}
              radius={40}
            />
          </Block>
          <Block
            eyebrow="Backed by science"
            title="Having a monetary value motivates you to do the task at hand. So upload that proof so you dont pay your friends."
          >
            <PhoneGif
              src={`${A}/pact-phone-3.gif`}
              alt="Uploading proof for a pact"
              maxWidth={312}
              radius={47}
            />
          </Block>
          <Block
            eyebrow="Community matters"
            title="Pact makes working toward goals social, fun, and shared with the people who matter most (even if your friends clown you)"
          >
            <PhoneGif
              src={`${A}/pact-phone-4.gif`}
              alt="Pact community comments on a proof photo"
              maxWidth={308}
              radius={44}
            />
          </Block>
        </div>
      </Section>

      <Section wash>
        <div className="flex flex-col gap-3">
          <Eyebrow>Now on the Apple App Store!</Eyebrow>
          <Title>
            Pact - Follow Through Together has been launched! Check it out in the App Store :)
          </Title>
        </div>
      </Section>
    </article>
  );
}
