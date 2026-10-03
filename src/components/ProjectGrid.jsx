import { projects } from "./projects.js";
import { thumbnails } from "./Thumbnails.jsx";

// Figma 73:378 — 1184px wide, 2 columns, 72px row gap, starts 806px down.
export default function ProjectGrid() {
  return (
    <section
      id="projects"
      className="grid grid-cols-1 gap-y-12 px-6 pb-24 md:grid-cols-2 md:gap-x-8 md:gap-y-[72px] lg:gap-x-[52px] lg:px-12"
    >
      {projects.map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </section>
  );
}

function ProjectCard({ project }) {
  const Thumb = thumbnails[project.thumb];
  return (
    <a
      href={project.href}
      className="group flex flex-col gap-6 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange"
    >
      <Thumb />
      <div className="flex flex-col gap-3">
        <h2 className="font-display text-[20px] leading-[0.9] text-ink transition-colors duration-200 group-hover:text-orange lg:text-[24px]">
          {project.title}
        </h2>
        <p className="font-body text-[16px] leading-[1.15] text-muted transition-colors duration-200 group-hover:text-orange lg:text-[20px] lg:leading-none">
          {project.description}
        </p>
      </div>
    </a>
  );
}
