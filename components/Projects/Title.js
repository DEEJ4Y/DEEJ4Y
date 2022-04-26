import {
  ThemeIcon,
  Text,
  Title,
  Container,
  SimpleGrid,
  useMantineTheme,
  createStyles,
  Paper,
  Button,
} from "@mantine/core";
import { links } from "../common/Navbar/Navbar";
import Link from "next/link";

const data = links[1].links;

export function Feature({ Icon, label, description, link }) {
  const theme = useMantineTheme();
  return (
    <Paper shadow="sm" p="md">
      <ThemeIcon variant="light" size={40} radius={40}>
        <Icon style={{ width: 20, height: 20 }} />
      </ThemeIcon>
      <Text style={{ marginTop: theme.spacing.sm }}>{label}</Text>
      <Text size="sm" color="dimmed" style={{ lineHeight: 1.6 }} mb="xs">
        {description}
      </Text>
      <Link passHref href={link}>
        <Button fullWidth variant="light">
          GO
        </Button>
      </Link>
    </Paper>
  );
}

const useStyles = createStyles((theme) => ({
  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    marginBottom: theme.spacing.lg,
    textAlign: "center",

    [theme.fn.smallerThan("sm")]: {
      fontSize: 28,
      textAlign: "left",
    },
  },

  description: {
    textAlign: "center",

    [theme.fn.smallerThan("sm")]: {
      textAlign: "left",
    },
  },
}));

export default function ProjectsTitle({}) {
  const { classes } = useStyles();
  const features = data.map((feature, index) => (
    <Feature {...feature} key={index} />
  ));

  return (
    <Container>
      <Title className={classes.title}>My Projects</Title>

      <Text size="sm" className={classes.description}>
        The projects are arranged in different categories below.
      </Text>

      <SimpleGrid
        mt={60}
        cols={2}
        spacing="md"
        breakpoints={[
          { maxWidth: 980, cols: 2 },
          { maxWidth: 755, cols: 1 },
        ]}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}
