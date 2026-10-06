import { useEffect } from "react";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import ProjectGrid from "./components/ProjectGrid.jsx";
import About from "./components/About.jsx";
import JWPermissions from "./components/JWPermissions.jsx";
import Footer from "./components/Footer.jsx";

function pageFromPath() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  if (path === "/about") return "about";
  if (path === "/projects/jw-permissions") return "jw-permissions";
  return "home";
}

const titles = {
  home: "Uyen Phan — Product Designer",
  about: "About — Uyen Phan",
  "jw-permissions": "Editing Permissions @ Justworks — Uyen Phan",
};

export default function App() {
  const page = pageFromPath();

  useEffect(() => {
    document.title = titles[page];
  }, [page]);

  return (
    <>
      <main className="relative mx-auto max-w-[1280px]">
        <Nav
          current={page === "about" ? "About" : "Projects"}
          projectsHref={page === "home" ? "#projects" : "/"}
        />
        {page === "about" ? (
          <About />
        ) : page === "jw-permissions" ? (
          <JWPermissions />
        ) : (
          <>
            <Hero />
            <ProjectGrid />
          </>
        )}
      </main>
      <Footer />
    </>
  );
}

