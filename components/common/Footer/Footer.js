import React from "react";
import {
  createStyles,
  Container,
  Group,
  ActionIcon,
  Text,
} from "@mantine/core";
import { BrandGithub, BrandLinkedin } from "tabler-icons-react";

const useStyles = createStyles((theme) => ({
  footer: {
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      marginTop: theme.spacing.md,
    },
  },
}));

export default function Footer() {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Group spacing={0} className={classes.links} noWrap>
          <a
            href="https://github.com/DEEJ4Y"
            rel="noopener noreferrer"
            target="_blank"
          >
            <ActionIcon size="lg">
              <BrandGithub size={18} />
            </ActionIcon>
          </a>
          <a
            href="https://www.linkedin.com/in/david-joseph-75a7b71b5/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <ActionIcon size="lg">
              <BrandLinkedin size={18} />
            </ActionIcon>
          </a>
        </Group>
      </Container>
    </div>
  );
}
