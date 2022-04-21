import {
  createStyles,
  Header,
  Menu,
  Group,
  Center,
  Burger,
  Container,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { ChevronDown } from "tabler-icons-react";
import Link from "next/link";
import { useState } from "react";

const useStyles = createStyles((theme) => ({
  header: {
    backgroundColor: theme.colors[theme.primaryColor][6],
    borderBottom: 0,
  },

  inner: {
    height: 56,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color: theme.white,
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 7 : 5],
    },
  },

  linkLabel: {
    marginRight: 5,
  },
}));

export const links = [
  { link: "/", label: "Home" },
  {
    link: "/projects",
    label: "Projects",
    links: [
      { link: "/projects/freelancing", label: "Freelance" },
      { link: "/projects/team", label: "Team" },
      { link: "/projects/personal", label: "Personal" },
      { link: "/projects/learning", label: "Learning" },
    ],
  },
  { link: "/highlights", label: "Highlights" },
  { link: "/about", label: "About" },
];

export default function Navbar() {
  const [current, setCurrent] = useState(null);
  const [opened, handlers] = useDisclosure(false);
  const { classes } = useStyles();
  const theme = useMantineTheme();

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Link key={item.link} passHref href={item.link}>
        <Menu.Item as="a">{item.label}</Menu.Item>
      </Link>
    ));

    if (menuItems) {
      return (
        <Menu
          key={link.label}
          delay={0}
          transitionDuration={0}
          placement="end"
          gutter={1}
          opened={current === link.label ? true : false}
          control={
            <a
              href={link.link}
              className={classes.link}
              onMouseEnter={() => {
                setCurrent(() => link.label);
                handlers.open();
              }}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <ChevronDown size={12} />
              </Center>
            </a>
          }
        >
          <div
            onMouseLeave={() => {
              setCurrent(() => "");

              handlers.close();
            }}
          >
            {menuItems}
          </div>
        </Menu>
      );
    }

    return (
      <Link key={link.label} passHref href={link.link}>
        <a
          className={classes.link}
          onMouseEnter={() => {
            setCurrent(() => link.label);
            handlers.open();
          }}
        >
          {link.label}
        </a>
      </Link>
    );
  });

  return (
    <Header height={56} className={classes.header}>
      <Container>
        <div className={classes.inner}>
          <Text
            size="xl"
            weight={700}
            color={theme.colorScheme === "dark" ? "dark" : "white"}
          >
            DJ
          </Text>
          <Group spacing={5} className={classes.links}>
            {items}
          </Group>
          <Burger
            opened={opened}
            onClick={() => toggleOpened()}
            className={classes.burger}
            size="sm"
            color="#fff"
          />
        </div>
      </Container>
    </Header>
  );
}
