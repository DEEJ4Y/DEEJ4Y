import ContentWrapper from "../../components/common/ContentWrapper/ContentWrapper";
import { Title } from "@mantine/core";
import { getProjectsByCategory } from "../../components/data/projects";
import ProjectGrid from "../../components/common/ProjectGrid/ProjectGrid";

export default function PersonalProjectsPage() {
  const personalProjects = getProjectsByCategory("personal");
  return (
    <ContentWrapper>
      <Title order={1} mb="xl" align="center">
        Personal Projects
      </Title>
      <ProjectGrid projects={personalProjects} />
    </ContentWrapper>
  );
}
