import { Card, Image, Text, Group, createStyles } from "@mantine/core";
import { assetPrefix } from "../../next.config";

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

export default function AboutCard({ image, title, description }) {
  const { classes } = useStyles();

  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section>
        <Image
          src={assetPrefix ? assetPrefix + image : image}
          alt={title}
          height={430}
        />
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Group position="apart">
          <Text size="lg" weight={500}>
            {title}
          </Text>
        </Group>
        {description
          ? description.map((desc, idx) => (
              <Text key={`desc-${title}-${idx}`} size="sm" mt="xs">
                {desc}
              </Text>
            ))
          : ""}
      </Card.Section>
    </Card>
  );
}
