// Thumbnail compositions from Figma. The original frame is 567×301px.
// Every px value is converted to cqw (px ÷ 5.67) so each composition
// scales as one unit at any card width while keeping exact proportions.
const A = "/assets";

const Frame = ({ bg, children }) => (
  <div
    className="relative aspect-[567/301] w-full overflow-clip"
    style={{ backgroundColor: bg, containerType: "inline-size" }}
  >
    {children}
  </div>
);

const Img = ({ src, className = "", style }) => (
  <img src={`${A}/${src}`} alt="" className={`absolute max-w-none ${className}`} style={style} />
);

export const thumbnails = {
  // 73:381
  tinder: () => (
    <Frame bg="#bac4ca">
      <Img src="tinder-1.png" className="object-cover" style={{ left: "21.16cqw", top: "-10.23cqw", width: "26.96cqw", height: "60.42cqw" }} />
      <Img src="tinder-2.png" className="object-cover" style={{ left: "51.68cqw", top: "3.35cqw", width: "27.03cqw", height: "60.49cqw" }} />
    </Frame>
  ),

  // 73:389
  pact: () => (
    <Frame bg="#c5c5c5">
      <Img src="pact.png" className="left-0 w-full object-cover" style={{ top: "-8.11cqw", height: "66.65cqw" }} />
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

  // 73:402
  jwDirectory: () => (
    <Frame bg="#e3eaf6">
      <div className="absolute inset-[0_16.03%_-0.24%_16.05%] overflow-clip">
        <Phone src="jw-directory-2.png" left="calc(50% + 12.48cqw)" w="22.2cqw" h="45.28cqw" r="3.91cqw" crop={{ h: "103.4%", l: "-4.9%", t: "-1.86%", w: "107.77%" }} />
        <Phone src="jw-directory-1.png" left="calc(50% - 12.45cqw)" w="22.27cqw" h="45.68cqw" r="3.37cqw" crop={{ h: "103.29%", l: "-4.78%", t: "-1.73%", w: "108.29%" }} />
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

  // 73:418
  cg: () => (
    <Frame bg="#dbe5c2">
      <div className="absolute inset-[0_11.92%_-12.29%_11.99%] overflow-clip">
        <div
          className="absolute drop-shadow-[0_1.5px_0.76px_rgba(0,0,0,0.25)]"
          style={{ left: "13.73cqw", top: "4.55cqw", width: "21.47cqw", height: "44.88cqw" }}
        >
          <Img src="cg-home.png" className="inset-0 size-full object-cover shadow-[0_1.5px_1.5px_0_rgba(0,0,0,0.25)]" style={{ borderRadius: "3.63cqw" }} />
        </div>
        <Img
          src="cg-leaderboard.png"
          className="object-cover shadow-[0_1.5px_1.5px_0_rgba(0,0,0,0.25)]"
          style={{ left: "40.92cqw", top: "4.49cqw", width: "21.49cqw", height: "44.92cqw", borderRadius: "3.64cqw" }}
        />
      </div>
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
