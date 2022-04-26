import ContentWrapper from "../../components/common/ContentWrapper/ContentWrapper";
import { Title } from "@mantine/core";
import { getProjectsByCategory } from "../../components/data/projects";
import ProjectGrid from "../../components/common/ProjectGrid/ProjectGrid";

export default function TeamProjectsPage() {
  const teamProjects = getProjectsByCategory("team");
  return (
    <ContentWrapper>
      <Title order={1} mb="xl" align="center">
        Team Projects
      </Title>
      <ProjectGrid projects={teamProjects} />
    </ContentWrapper>
  );
}
