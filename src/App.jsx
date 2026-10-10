import { useEffect } from "react";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import ProjectGrid from "./components/ProjectGrid.jsx";
import About from "./components/About.jsx";
import JWPermissions from "./components/JWPermissions.jsx";
import JWDirectory from "./components/JWDirectory.jsx";
import Pinterest from "./components/Pinterest.jsx";
import Footer from "./components/Footer.jsx";

function pageFromPath() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  if (path === "/about") return "about";
  if (path === "/projects/jw-permissions") return "jw-permissions";
  if (path === "/projects/jw-directory") return "jw-directory";
  if (path === "/projects/pinterest") return "pinterest";
  return "home";
}

const titles = {
  home: "Uyen Phan — Product Designer",
  about: "About — Uyen Phan",
  "jw-permissions": "Editing Permissions @ Justworks — Uyen Phan",
  "jw-directory": "Mobile Directory @ Justworks — Uyen Phan",
  pinterest: "Ad Creation Flow @ Pinterest — Uyen Phan",
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
        ) : page === "jw-directory" ? (
          <JWDirectory />
        ) : page === "pinterest" ? (
          <Pinterest />
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

