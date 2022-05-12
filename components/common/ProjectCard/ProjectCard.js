import {
  BrandGithub,
  BrandGitlab,
  BrandBitbucket,
  FolderOff,
  ExternalLink,
  Tools,
  Hash,
} from "tabler-icons-react";
import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  Button,
  createStyles,
  Tooltip,
  ThemeIcon,
} from "@mantine/core";
import { assetPrefix } from "../../../next.config";
import { toKebabCase } from "../../data/projects";
import { useClipboard } from "@mantine/hooks";
import Link from "next/link";
import { useRouter } from "next/router";

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
  const clipboard = useClipboard({ timeout: 2500 });
  const id = toKebabCase(name);
  const router = useRouter();

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
    <Card id={id} withBorder radius="md" p="md" className={classes.card}>
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
            <Link passHref href={`${router?.pathname}#${id}`}>
              <Tooltip
                position="left"
                placement="center"
                label={clipboard.copied ? "Copied" : "Copy"}
                withArrow
              >
                <Hash
                  color="grey"
                  style={{ marginBottom: "-7px" }}
                  onClick={() =>
                    clipboard.copy(
                      `${window.location.href.split("#")[0]}#${id}`
                    )
                  }
                />
              </Tooltip>
            </Link>
            {upcoming ? (
              <Tooltip
                position="left"
                placement="center"
                label="This is an upcoming project."
                withArrow
                ml="sm"
              >
                <Tools style={{ marginBottom: "-7px" }} />
              </Tooltip>
            ) : (
              ""
            )}
            {language ? (
              <Badge size="sm" ml="sm" color="grape">
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

        {withe?.length > 0 ? (
          <div>
            <Text size="sm" color="gray" style={{ display: "inline" }}>
              With
            </Text>
            {withe.map(({ name, url }, idx) => (
              <a
                key={`with-${name}-${idx}`}
                href={url}
                target="__blank"
                rel="noopener noreferrer"
              >
                <Badge color="blue" size="md" ml="xs" className="clickable">
                  {name}
                </Badge>
              </a>
            ))}
          </div>
        ) : (
          ""
        )}
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
