// Thumbnail compositions from Figma. The original frame is 567×301px.
// Every px value is converted to cqw (px ÷ 5.67) so each composition
// scales as one unit at any card width while keeping exact proportions.
const A = `${import.meta.env.BASE_URL}assets`;

const Frame = ({ bg, children }) => (
  <div
    className="cursor-dot-white relative aspect-[567/301] w-full overflow-clip"
    style={{ backgroundColor: bg, containerType: "inline-size" }}
  >
    {children}
  </div>
);

const Img = ({ src, className = "", style }) => (
  <img
    src={`${A}/${src}`}
    alt=""
    loading="lazy"
    decoding="async"
    className={`absolute max-w-none ${className}`}
    style={style}
  />
);

export const thumbnails = {
  // 16:5388
  tinder: () => (
    <Frame bg="#252525">
      <Img src="tinder-card.gif" className="inset-0 size-full object-cover" />
    </Frame>
  ),

  // 16:5394
  pact: () => (
    <Frame bg="#c5c5c5">
      <div
        className="absolute flex items-center justify-center"
        style={{ left: "-1.23cqw", top: "-25.4cqw", width: "101.45cqw", height: "81.16cqw" }}
      >
        <div className="h-[101.45cqw] w-[81.16cqw] flex-none rotate-90">
          <img
            src={`${A}/pact-hero-forest.png`}
            alt=""
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover blur-[1px]"
          />
        </div>
      </div>
      <Img
        src="pact-phone-1.gif"
        className="object-cover"
        style={{
          left: "35.1cqw",
          top: "3.7cqw",
          width: "28.52cqw",
          height: "57.14cqw",
          borderRadius: "4.29cqw",
        }}
      />
    </Frame>
  ),

  // 73:396
  jwPermissions: () => (
    <Frame bg="#000">
      <div
        className="absolute left-[7.05%] right-[6.73%] -translate-y-1/2 overflow-clip bg-black"
        style={{ top: "calc(50% + 5.29cqw)", height: "67.55cqw" }}
      >
        <div
          className="absolute overflow-hidden shadow-[0_1.3px_1.3px_0_rgba(0,0,0,0.25)]"
          style={{ left: "9.56cqw", top: "6cqw", width: "67.09cqw", height: "45.77cqw" }}
        >
          <Img src="jw-permissions.png" className="left-0 top-0 h-full w-[101.17%]" />
        </div>
      </div>
    </Frame>
  ),

  // 16:5409
  jwDirectory: () => (
    <Frame bg="#e3eaf6">
      <Img
        src="jw-directory-bg.png"
        className="left-0 w-full object-cover"
        style={{ top: "-8.11cqw", height: "66.67cqw" }}
      />
      <div className="absolute inset-[0_16.03%_-0.24%_16.05%] overflow-clip">
        <Phone src="jw-directory-2.gif" left="calc(50% + 12.48cqw)" w="22.2cqw" h="45.28cqw" r="3.91cqw" crop={{ h: "103.4%", l: "-4.9%", t: "-1.86%", w: "107.77%" }} />
        <Phone src="jw-directory-1.gif" left="calc(50% - 12.45cqw)" w="22.27cqw" h="45.68cqw" r="3.37cqw" crop={{ h: "103.29%", l: "-4.78%", t: "-1.73%", w: "108.29%" }} />
      </div>
    </Frame>
  ),

  // 73:412
  pinterest: () => (
    <Frame bg="#e9e9e9">
      <div className="absolute left-[2.22%] right-[2.2%] top-1/2 aspect-[767/426] -translate-y-1/2 overflow-hidden">
        <Img src="pinterest.png" className="left-0 top-[-5.63%] h-[111.72%] w-full" />
      </div>
    </Frame>
  ),

  // 16:5425
  cg: () => (
    <Frame bg="#dbe5c2">
      <Img
        src="cg-card-bg.png"
        className="object-cover"
        style={{ left: "-0.53%", top: "-93.83cqw", width: "100.53%", height: "177.8cqw" }}
      />
      <Img
        src="cg-home.gif"
        className="object-cover shadow-[0_1.67px_1.67px_0_rgba(0,0,0,0.25)]"
        style={{
          left: "23.24cqw",
          top: "7.84cqw",
          width: "23.63cqw",
          height: "49.39cqw",
          borderRadius: "2.47cqw",
        }}
      />
      <Img
        src="cg-leaderboard.gif"
        className="object-cover shadow-[0_1.67px_1.67px_0_rgba(0,0,0,0.25)]"
        style={{
          left: "53.17cqw",
          top: "7.76cqw",
          width: "23.66cqw",
          height: "49.44cqw",
          borderRadius: "2.47cqw",
        }}
      />
    </Frame>
  ),
};

// Rounded phone screen with Figma's crop offsets
function Phone({ src, left, w, h, r, crop }) {
  return (
    <div
      className="absolute -translate-x-1/2 overflow-hidden"
      style={{ left, top: "3.73cqw", width: w, height: h, borderRadius: r }}
    >
      <Img src={src} style={{ height: crop.h, left: crop.l, top: crop.t, width: crop.w }} />
    </div>
  );
}
