import { ActionIcon, Group, Text } from "@mantine/core";
import { useRouter } from "next/router";
import { Filter, Search } from "tabler-icons-react";
import projects from "../data/projects";
import ProjectGrid from "../common/ProjectGrid/ProjectGrid";

export default function SearchResults() {
  const router = useRouter();

  if (!router?.query?.q?.length > 0) {
    return <></>;
  }

  if (!router.query.q) {
    return <></>;
  }

  let queries = router.query.q.toLowerCase();

  if (queries.includes("react")) queries += " next";

  const searchStartTime = new Date().getMilliseconds();

  const matchingProjects = projects.filter(
    ({
      name,
      description,
      category,
      repository,
      language,
      tags,
      major,
      ...rest
    }) => {
      let splitQueries = queries.split(" ");
      for (let q = 0; q < splitQueries.length; q++) {
        const searchQuery = splitQueries[q];
        if (name.toLowerCase().includes(searchQuery)) return true;

        for (let i = 0; i < description.length; i++) {
          let line = description[i];
          if (line.toLowerCase().includes(searchQuery)) return true;
        }

        for (let i = 0; i < tags.length; i++) {
          let tag = tags[i];
          if (tag.toLowerCase().includes(searchQuery)) return true;
        }

        for (let i = 0; i < rest.with.length; i++) {
          let personName = rest.with[i].name;
          if (personName.toLowerCase().includes(searchQuery)) return true;
        }

        if (language && language.toLowerCase().includes(searchQuery))
          return true;

        if (category.toLowerCase().includes(searchQuery)) return true;

        if (
          repository.platform &&
          repository.platform.toLowerCase().includes(searchQuery)
        )
          return true;

        if (major && "major".includes(searchQuery)) return true;

        return false;
      }
    }
  );

  const searchEndTime = new Date().getMilliseconds();
  const searchTotalTime = searchEndTime - searchStartTime;

  return (
    <div>
      <Group position="apart" mb="lg">
        <Group position="center">
          <Search size={16} />
          <Text color="dimmed">{router.query.q}</Text>
        </Group>
        <Group>
          <Text color="dimmed">
            Found {matchingProjects.length} results in{" "}
            {searchTotalTime > 0 ? searchTotalTime : "under 1"}ms
          </Text>
          {/* <ActionIcon variant="outline">
            <Filter size={16} />
          </ActionIcon> */}
        </Group>
      </Group>
      <ProjectGrid projects={matchingProjects} />
    </div>
  );
}
