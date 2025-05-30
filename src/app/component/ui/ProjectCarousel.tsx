import ProjectCard from "./ProjectCard";
import { projects } from "../utils/projects";
import SeeMoreCard from "./SeeMoreCard";

export function ProjectCarousel() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          source_code={project["source-code"]}
          live_demo={project["live-demo"]}
          image={project.image}
        />
      ))}

      {/* Optional: Add a See More card at the end */}
      <SeeMoreCard />
    </div>
  );
}
