import { projects } from "@/config/project";
import { Metadata } from "next";
import { getMetaData } from "@/config/meta";
import Heading from "@/components/common/Heading";
import ProjectCard from "@/components/projects/ProjectCard";

export const metadata: Metadata = getMetaData("/pow");

function ProjectPage() {
  return (
    <main className="w-full h-full px-4 py-8">
      <Heading
        hint="my proof-of-work ✨"
        title="Projects"
        description="Here are some of the projects I have built."
      />

      <div className="grid grid-cols-1 max-w-3xl mx-auto w-full gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </main>
  );
}

export default ProjectPage;
