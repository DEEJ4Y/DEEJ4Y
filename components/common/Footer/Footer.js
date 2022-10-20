import React from "react";
import {
  createStyles,
  Container,
  Group,
  Text,
  Button,
  ThemeIcon,
  Modal,
} from "@mantine/core";
import { BrandGithub, BrandLinkedin, Code, Mail } from "tabler-icons-react";
import { useDisclosure } from "@mantine/hooks";
import ContactForm from "../../Home/Contact/Form";
import ContactSection from "../../Home/Contact/Contact";

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

export const FooterLink = ({ link, label, Icon }) => (
  <a href={link} rel="noopener noreferrer" target="_blank">
    <Button variant="subtle">
      <Text color="dimmed" size="xs">
        {label}
      </Text>

      <ThemeIcon variant="subtle">
        <Icon size={18} />
      </ThemeIcon>
    </Button>
  </a>
);

export const FooterButton = ({ label, onClick, Icon }) => (
  <span>
    <Button
      variant="subtle"
      onClick={onClick ? onClick : () => {}}
      color="dimmed"
    >
      <Text color="dimmed" size="xs">
        {label}
      </Text>

      <ThemeIcon variant="subtle">
        <Icon size={18} />
      </ThemeIcon>
    </Button>
  </span>
);

export default function Footer() {
  const { classes } = useStyles();
  const [opened, handlers] = useDisclosure();

  return (
    <div>
      <Modal opened={opened} onClose={handlers.close} title="Say Hi!">
        <ContactSection />
      </Modal>
      <div className={classes.footer}>
        <Container className={classes.inner}>
          <Group
            spacing={0}
            className={classes.links}
            align="center"
            position="center"
          >
            <FooterLink
              link={"https://github.com/DEEJ4Y"}
              label="Github"
              Icon={BrandGithub}
            />
            <FooterLink
              link={"https://www.linkedin.com/in/david-joseph-75a7b71b5/"}
              label="Linkedin"
              Icon={BrandLinkedin}
            />
            <FooterLink
              link={"https://www.hackerrank.com/DEEJ4Y"}
              label="HackerRank"
              Icon={Code}
            />
            <FooterButton
              label="Contact Me"
              Icon={Mail}
              onClick={handlers.toggle}
            />
          </Group>
        </Container>
      </div>
    </div>
  );
}
