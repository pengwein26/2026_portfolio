import { useState } from "react";

export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-center bg-white">
      <div className="flex w-full items-center bg-orange">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-start px-6 py-16 lg:h-[338px] lg:px-[180px] lg:pb-[96px] lg:pt-[119px]">
          <div className="flex w-full flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
            <div className="flex w-full flex-col items-start gap-[9px] text-cream lg:w-[545px]">
              <p className="font-body text-[18px] leading-none lg:text-[20px]">
                Thank you for looking through
              </p>
              <p className="flex h-auto w-full items-center font-display text-[32px] leading-[0.9] sm:text-[36px] lg:h-[94px] lg:w-[321px] lg:text-[40.966px]">
                Would love to connect! :-)
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-[46px]">
              <Pill href="https://www.linkedin.com/in/uyentphan/" label="Linkedin" />
              <Pill href="mailto:uyen.phann026@gmail.com" label="Email" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Pill({ href, label }) {
  const [hot, setHot] = useState(false);
  const external = !href.startsWith("mailto:");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onPointerEnter={() => setHot(true)}
      onPointerLeave={() => setHot(false)}
      className={`footer-pill relative z-10 inline-flex h-[44.561px] w-[152.664px] items-center justify-center rounded-[29.722px] pl-[36.796px] pr-[30.397px] py-[8.532px] font-display text-[22.517px] leading-normal transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream ${
        hot ? "bg-lime text-ink" : "bg-cream text-orange"
      }`}
    >
      {label}
    </a>
  );
}
