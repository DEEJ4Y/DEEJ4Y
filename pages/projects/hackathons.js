import ContentWrapper from "../../components/common/ContentWrapper/ContentWrapper";
import { Title } from "@mantine/core";
import {
  getHackathonProjects,
  getProjectsByCategory,
} from "../../components/data/projects";
import ProjectGrid from "../../components/common/ProjectGrid/ProjectGrid";

export default function HackathonProjectsPage() {
  const hackathonProjects = getHackathonProjects();
  return (
    <ContentWrapper>
      <Title order={1} mb="xl" align="center">
        Hackathon Projects
      </Title>
      <ProjectGrid projects={hackathonProjects} />
    </ContentWrapper>
  );
}
