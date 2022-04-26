import { SimpleGrid } from "@mantine/core";
import ProjectCard from "../ProjectCard/ProjectCard";

export default function ProjectGrid({ projects }) {
  return (
    <SimpleGrid cols={1} spacing="xl">
      {projects.map((project, idx) => {
        project.withe = project.withe;
        return (
          <ProjectCard
            key={`project-card-${project.name}-${idx}`}
            {...project}
          />
        );
      })}
    </SimpleGrid>
  );
}
