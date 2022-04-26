import ContentWrapper from "../../components/common/ContentWrapper/ContentWrapper";
import { Title } from "@mantine/core";
import { getProjectsByCategory } from "../../components/data/projects";
import ProjectGrid from "../../components/common/ProjectGrid/ProjectGrid";

export default function LearningProjectsPage() {
  const learningProjects = getProjectsByCategory("learning");
  return (
    <ContentWrapper>
      <Title order={1} mb="xl" align="center">
        Learning Projects
      </Title>
      <ProjectGrid projects={learningProjects} />
    </ContentWrapper>
  );
}
