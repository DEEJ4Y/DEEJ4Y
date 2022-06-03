import ContentWrapper from "../../components/common/ContentWrapper/ContentWrapper";
import { Text, Title } from "@mantine/core";
import { getProjectsByCategory } from "../../components/data/projects";
import ProjectGrid from "../../components/common/ProjectGrid/ProjectGrid";

export default function FreelancingProjectsPage() {
  const freelanceProjects = getProjectsByCategory("freelance");
  return (
    <ContentWrapper>
      <Title order={1} align="center" mb="sm">
        Freelance Projects
      </Title>
      <Text align="center" mb="xl">
        Check out{" "}
        <a
          className="highlight"
          target="__blank"
          rel="noopener noreferrer"
          href="https://www.fiverr.com/davidjosephind/design-and-develop-a-high-fidelity-website"
        >
          my gig
        </a>{" "}
        on Fiverr.
      </Text>
      <ProjectGrid projects={freelanceProjects} />
    </ContentWrapper>
  );
}
