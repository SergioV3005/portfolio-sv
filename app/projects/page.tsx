import Section from "@/components/Section";
import ProjectsClient from "./ProjectsClient";
import { projects } from "@/content/projects";

export default function ProjectsPage() {
  const tags = Array.from(new Set(projects.flatMap((project) => project.tags))).sort();

  return (
    <Section
      title="Projects"
      description="Selected projects that highlight data engineering, ML experimentation, and applied AI systems."
    >
      <ProjectsClient projects={projects} tags={tags} />
    </Section>
  );
}
