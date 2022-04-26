import ContentWrapper from "../../components/common/ContentWrapper/ContentWrapper";
import { Title } from "@mantine/core";
import { getProjectsByCategory } from "../../components/data/projects";
import ProjectGrid from "../../components/common/ProjectGrid/ProjectGrid";

export default function FreelancingProjectsPage() {
  const freelanceProjects = getProjectsByCategory("freelance");
  return (
    <ContentWrapper>
      <Title order={1} mb="xl" align="center">
        Freelance Projects
      </Title>
      <ProjectGrid projects={freelanceProjects} />
    </ContentWrapper>
  );
}
