// Figma 73:334 / 12:28 — centered, 70px gap, 24px Instrument Sans, top 72px
export default function Nav({
  current = "Projects",
  projectsHref = "#projects",
  showBack = false,
}) {
  const links = [
    {
      label: "Projects",
      href: current === "Projects" ? projectsHref : "/",
      current: current === "Projects",
    },
    { label: "About", href: "/about", current: current === "About" },
  ];

  return (
    <nav className="sticky top-0 z-50 flex justify-center gap-10 bg-white pb-4 pt-10 font-nav text-[20px] leading-[0.9] lg:gap-[70px] lg:pt-[72px] lg:text-[24px] relative">
      {showBack ? (
        <a
          href="/"
          aria-label="Back to projects"
          className="absolute left-6 top-10 flex size-8 items-center justify-center rounded-sm text-ink hover:text-orange focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange lg:left-[180px] lg:top-[72px]"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M15 5 8 12l7 7"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      ) : null}
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
            className={`pointer-events-none absolute inset-x-[-2px] -bottom-2.5 h-[8px] overflow-hidden text-orange ${
              l.current ? "opacity-100" : "opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"
            }`}
          >
            <svg
              className="nav-wiggle h-full w-[200%]"
              viewBox="0 0 120 8"
              preserveAspectRatio="none"
            >
              <path
                d="M0 4 Q5 0.6 10 4 T20 4 T30 4 T40 4 T50 4 T60 4 T70 4 T80 4 T90 4 T100 4 T110 4 T120 4"
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
