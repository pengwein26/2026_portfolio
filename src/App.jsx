import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import ProjectGrid from "./components/ProjectGrid.jsx";
import CursorTrail from "./components/CursorTrail.jsx";

export default function App() {
  return (
    <>
      <main className="relative mx-auto max-w-[1280px]">
        <Nav />
        <Hero />
        <ProjectGrid />
      </main>
      <CursorTrail />
    </>
  );
}
