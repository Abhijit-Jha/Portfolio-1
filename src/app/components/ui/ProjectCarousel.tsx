import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import ProjectCard from "./ProjectCard"
import { projects } from "../utils/projects"
import SeeMoreCard from "./SeeMoreCard"
export function ProjectCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      orientation="vertical"
      className="lg:w-1/2 md:w-3/4 w-full mt-10"
    >
      <CarouselContent className="mt-1 max-h-screen">

        {projects.map((project, index) => (
          <CarouselItem key={index} className="pt-1 md:basis-1/2 h-screen">
            <ProjectCard key={index} title={project.title} description={project.description} source_code={project["source-code"]} live_demo={project["live-demo"]} image={project["image"]}/>
          </CarouselItem>
        ))}
        <CarouselItem key={"last"} className="pt-1 md:basis-1/2 h-screen">
          <SeeMoreCard />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
