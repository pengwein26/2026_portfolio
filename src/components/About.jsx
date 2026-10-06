import { useState } from "react";

// Figma 12:27 — bio. Figma 40:392 — favorite things, under the copy.
const A = `${import.meta.env.BASE_URL}assets`;

const favorites = [
  {
    src: "about-fav-coffee.png",
    alt: "Latte with a heart in the foam",
    rotate: "-15.02deg",
    // Inner image size, then rotated wrapper from Figma 40:376
    img: "h-[116px] w-[157.995px]",
    wrap: "h-[152.991px] w-[182.664px] lg:left-[300px] lg:top-[193.5px]",
    why: "I used to be a barista in San Francisco, and it did not help with my caffeine addiction...",
  },
  {
    src: "about-fav-mangosteen.png",
    alt: "Mangosteen",
    rotate: "10.2deg",
    img: "h-[103.482px] w-[93.233px]",
    wrap: "h-[118.359px] w-[110.088px] lg:left-[542.33px] lg:top-[188px]",
    why: "Mangosteens are my favorite fruit! A lot of my childhood in Vietnam involved slobbering down 10 of these in one sitting.",
  },
  {
    src: "about-fav-tulips.png",
    alt: "Bouquet of tulips",
    rotate: "0deg",
    img: "h-[124.523px] w-[94px]",
    wrap: "h-[124.523px] w-[94px] lg:left-[709.33px] lg:top-[222px]",
    why: "I love tulips because, with patience (and time), they blossom so beautifully.",
  },
  {
    src: "about-fav-camera.png",
    alt: "Handheld camera gimbal",
    rotate: "12.45deg",
    img: "h-[181.805px] w-[66.813px]",
    wrap: "h-[191.932px] w-[104.428px] lg:left-[876.33px] lg:top-[155px]",
    why: "Whenever I need to romanticize my life, I pull out my camera and make silly little vlogs.",
  },
  {
    src: "about-fav-clover.png",
    alt: "Four-leaf clover",
    rotate: "0deg",
    img: "h-[121.171px] w-[92px]",
    wrap: "h-[121.171px] w-[92px] lg:left-[432.33px] lg:top-[402px]",
    why: "Lucky girl syndrome! We all need a little sprinkle of luck in our lives!",
  },
  {
    src: "about-fav-envelope.png",
    alt: "Envelope with a heart drawing",
    rotate: "-11.2deg",
    img: "h-[110.216px] w-[91px]",
    wrap: "h-[125.79px] w-[110.671px] lg:left-[597.33px] lg:top-[376px]",
    why: "Letters are my favorite presents to receive for any occasion, and I love sending them, too!",
  },
  {
    src: "about-fav-pen.png",
    alt: "Pen with a pink cap",
    rotate: "152.35deg",
    img: "size-[132.946px]",
    wrap: "size-[179.456px] lg:left-[713.92px] lg:top-[389.58px]",
    why: "I've been trying to do live cartoon drawings at events! I hope to do more of them this year.",
  },
];

export default function About() {
  return (
    <>
      <section className="relative px-6 pb-8 pt-12 lg:px-12 lg:pb-4 lg:pt-[130px]">
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
                src={`${A}/about-flower.png`}
                alt=""
                aria-hidden
                className="spin-slow mt-0.5 h-[40px] w-[40px] shrink-0 lg:h-[49.589px] lg:w-[50.072px]"
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

      {/* Favorite things — Figma 40:392 */}
      <section className="relative mx-auto max-w-[1280px] overflow-visible px-6 pb-8 lg:h-[643px] lg:px-0">
        <div className="mx-auto flex max-w-[565px] flex-col items-start gap-[9px] pt-[72px] lg:absolute lg:left-[202px] lg:top-[30px] lg:mx-0 lg:w-[565px]">
          <p className="font-body text-[16px] leading-none text-muted lg:text-[20px]">
            Hover to find out why
          </p>
          <h2 className="font-display text-[30px] leading-[0.9] text-ink sm:text-[36px] lg:h-[50px] lg:text-[40.966px]">
            Some of my favorite things
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 py-12 lg:contents">
          {favorites.map((item) => (
            <Fav key={item.src} {...item} />
          ))}
        </div>
      </section>
    </>
  );
}

function Fav({ src, alt, rotate, img, wrap, why }) {
  const [hot, setHot] = useState(false);
  return (
    <div
      className={`relative z-10 flex items-center justify-center overflow-visible lg:absolute ${wrap} ${
        hot ? "z-30" : ""
      }`}
      onPointerEnter={() => setHot(true)}
      onPointerLeave={() => setHot(false)}
    >
      <div className="relative">
        {why ? <ChatBubble open={hot}>{why}</ChatBubble> : null}
        <img
          src={`${A}/${src}`}
          alt={alt}
          className={`fav-item relative max-w-none object-cover ${img} ${hot ? "is-hot" : ""}`}
          style={{ "--r": rotate }}
        />
      </div>
    </div>
  );
}

// Figma 42:815 — 323×110, #e9e9eb, 24px radius, Inter 24
function ChatBubble({ open, children }) {
  return (
    <div
      className={`fav-bubble pointer-events-none absolute bottom-[calc(100%+4.8px)] left-1/2 z-40 flex w-[193.8px] items-center justify-center rounded-[14.4px] bg-[#e9e9eb] px-[14.4px] py-[9.6px] ${
        open ? "is-open" : ""
      }`}
      role="tooltip"
    >
      <p className="w-[165px] font-bubble text-[14.4px] font-normal leading-[1.099] tracking-[-0.072px] text-black">
        {children}
      </p>
    </div>
  );
}
