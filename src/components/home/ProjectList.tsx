import Section from "@/components/common/Section";
import { projects } from "@/data/project/project";
import ProjectCard from "@/components/projects/ProjectCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function ProjectList() {
  return (
    <Section
      title={"Projects"}
      hintText={"my proof-of-work✨"}
      className={"mt-18"}
    >
      <div className="grid grid-cols-1 min-[600px]:grid-cols-2  gap-4 mt-4">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
      <div className="w-full flex justify-center items-center mt-8">
        <Button size={"lg"} variant={"outline"} asChild>
          <Link href="/pow">Show More</Link>
        </Button>
      </div>
    </Section>
  );
}

export default ProjectList;
