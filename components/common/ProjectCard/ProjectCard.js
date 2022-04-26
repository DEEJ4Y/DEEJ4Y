import {
  BrandGithub,
  BrandGitlab,
  BrandBitbucket,
  FolderOff,
  ExternalLink,
  Tools,
} from "tabler-icons-react";
import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  Button,
  createStyles,
  useMantineTheme,
  Tooltip,
} from "@mantine/core";
import { assetPrefix } from "../../../next.config";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  section: {
    borderBottom: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },

  like: {
    color: theme.colors.red[6],
  },

  label: {
    textTransform: "uppercase",
    fontSize: theme.fontSizes.xs,
    fontWeight: 700,
  },
}));

export default function ProjectCard({
  name,
  description,
  withe,
  imageUrl,
  link,
  category,
  tags,
  major,
  upcoming,
  completed,
  repository,
  language,
}) {
  const { classes } = useStyles();
  const theme = useMantineTheme();

  const features = tags.map((tag, idx) => {
    if (idx === 0) {
      return (
        <Badge color={"teal"} key={`${name}-tag-${idx}`}>
          {tag}
        </Badge>
      );
    }

    return (
      <Badge color="gray" key={`${name}-tag-${idx}`}>
        {tag}
      </Badge>
    );
  });

  let projectRepository = false;
  let ProjectRepositoryIcon = false;
  const repositoryPlatform = repository.platform;
  if (repositoryPlatform) {
    if (repositoryPlatform === "github") {
      projectRepository = "Github";
      ProjectRepositoryIcon = BrandGithub;
    } else if (repositoryPlatform === "gitlab") {
      projectRepository = "Gitlab";
      ProjectRepositoryIcon = BrandGitlab;
    } else if (repositoryPlatform === "bitbucket") {
      projectRepository = "Bitbucket";
      ProjectRepositoryIcon = BrandBitbucket;
    }
  } else {
    projectRepository = "Local";
    ProjectRepositoryIcon = FolderOff;
  }

  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      {imageUrl ? (
        <Card.Section mb="md">
          <Image
            src={assetPrefix ? assetPrefix + imageUrl : imageUrl}
            alt={name}
            height={460}
          />
        </Card.Section>
      ) : (
        ""
      )}

      <Card.Section className={classes.section}>
        <Group position="apart">
          {link ? (
            <a href={link} target="__blank" rel="noopener noreferrer">
              <Text size="lg" weight={500}>
                {name} <ExternalLink style={{ marginBottom: "-4px" }} />
              </Text>
            </a>
          ) : (
            <Text size="lg" weight={500}>
              {name}
            </Text>
          )}
          <span>
            {upcoming ? (
              <Tooltip
                position="left"
                placement="center"
                label="This is an upcoming project."
                withArrow
              >
                <Tools style={{ marginBottom: "-4px" }} />
              </Tooltip>
            ) : (
              ""
            )}
            {language ? (
              <Badge size="sm" ml="xs" color="grape">
                {language}
              </Badge>
            ) : (
              ""
            )}
            {major ? (
              <Badge size="sm" ml="xs">
                Major Project
              </Badge>
            ) : (
              ""
            )}
          </span>
        </Group>
        {description.map((line, idx) => {
          return (
            <Text key={`${name}-description-${idx}`} size="sm" mt="xs">
              {line}
            </Text>
          );
        })}
      </Card.Section>

      <Card.Section className={classes.section}>
        <Text mt="md" className={classes.label} color="dimmed"></Text>
        <Group spacing={7} mt={5}>
          {features}
        </Group>
      </Card.Section>

      {repository.url ? (
        <a href={repository.url} target="__blank" rel="noopener noreferrer">
          <Group mt="xs">
            <Button radius="md" variant="light" style={{ flex: 1 }}>
              <ProjectRepositoryIcon /> {projectRepository}
            </Button>
          </Group>
        </a>
      ) : (
        <Group mt="xs">
          <Button radius="md" variant="light" style={{ flex: 1 }}>
            <ProjectRepositoryIcon /> {projectRepository}
          </Button>
        </Group>
      )}
    </Card>
  );
}
