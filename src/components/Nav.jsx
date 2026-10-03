const underline =
  "after:absolute after:inset-x-0 after:-bottom-1 after:h-[2px] after:origin-left after:bg-orange after:transition-transform after:duration-300 after:ease-out after:content-['']";

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
          className={`relative rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange ${underline} ${
            l.current
              ? "after:scale-x-100"
              : "after:scale-x-0 hover:after:scale-x-100 focus-visible:after:scale-x-100"
          }`}
        >
          {l.label}
        </a>
      ))}
    </nav>
  );
}
