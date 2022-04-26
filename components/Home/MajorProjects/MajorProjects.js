import ContentWrapper from "../../common/ContentWrapper/ContentWrapper";
import { Title } from "@mantine/core";
import ProjectGrid from "../../common/ProjectGrid/ProjectGrid";
import { getMajorProjects } from "../../data/projects";
export default function MajorProjects() {
  const projects = getMajorProjects();
  return (
    <ContentWrapper>
      <Title order={2} align="center" mb="lg">
        Major Projects
      </Title>
      <ProjectGrid projects={projects} />
    </ContentWrapper>
  );
}
