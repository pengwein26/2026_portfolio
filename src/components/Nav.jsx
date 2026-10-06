// Figma 73:334 / 12:28 — centered, 70px gap, 24px Instrument Sans, top 72px
export default function Nav({ current = "Projects" }) {
  const links = [
    {
      label: "Projects",
      href: current === "Projects" ? "#projects" : "/",
      current: current === "Projects",
    },
    { label: "About", href: "/about", current: current === "About" },
  ];

  return (
    <nav className="flex justify-center gap-10 pt-10 font-nav text-[20px] leading-[0.9] lg:gap-[70px] lg:pt-[72px] lg:text-[24px]">
      {links.map((l) => (
        <a
          key={l.label}
          href={l.href}
          aria-current={l.current ? "page" : undefined}
          className={`group relative rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange ${
            l.current ? "font-bold" : "font-normal"
          }`}
        >
          {l.label}
          <span
            aria-hidden
            className={`pointer-events-none absolute inset-x-[-2px] -bottom-2 h-[7px] overflow-hidden text-orange ${
              l.current ? "opacity-100" : "opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"
            }`}
          >
            <svg
              className="nav-wiggle h-full w-[200%]"
              viewBox="0 0 120 8"
              preserveAspectRatio="none"
            >
              <path
                d="M0 4 Q5 1.2 10 4 T20 4 T30 4 T40 4 T50 4 T60 4 T70 4 T80 4 T90 4 T100 4 T110 4 T120 4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </a>
      ))}
    </nav>
  );
}
