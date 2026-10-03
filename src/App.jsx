import { useEffect } from "react";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import ProjectGrid from "./components/ProjectGrid.jsx";
import About from "./components/About.jsx";
import CursorTrail from "./components/CursorTrail.jsx";

function isAboutPath() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  return path === "/about";
}

export default function App() {
  const about = isAboutPath();

  useEffect(() => {
    document.title = about ? "About — Uyen Phan" : "Uyen Phan — Product Designer";
  }, [about]);

  return (
    <>
      <main className="relative mx-auto max-w-[1280px]">
        <Nav current={about ? "About" : "Projects"} />
        {about ? (
          <About />
        ) : (
          <>
            <Hero />
            <ProjectGrid />
          </>
        )}
      </main>
      <CursorTrail />
    </>
  );
}
