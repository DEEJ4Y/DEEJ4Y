import {
  Burger,
  Button,
  Center,
  Container,
  createStyles,
  Drawer,
  Group,
  Header,
  Menu,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  Books,
  Briefcase,
  ChevronDown,
  Trophy,
  User,
  Users,
} from "tabler-icons-react";
import Link from "next/link";
import { useState } from "react";
import ToggleColorScheme from "../ToggleColorScheme/ToggleColorScheme";
import {
  getNumberOfHackathonProjects,
  getNumberOfProjectsByCategory,
} from "../../data/projects";

const useStyles = createStyles((theme) => ({
  header: {
    backgroundColor: theme.colorScheme,
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
    color: theme.colorScheme === "dark" ? "white" : "black",
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 7 : 5],
      color: "white",
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
      {
        link: "/projects/freelancing",
        label: "Freelance",
        Icon: Briefcase,
        description: `I have worked on ${getNumberOfProjectsByCategory(
          "freelance"
        )} Freelance projects.`,
      },
      {
        link: "/projects/personal",
        label: "Personal",
        Icon: User,
        description: `I have completed ${getNumberOfProjectsByCategory(
          "personal"
        )} personal projects.`,
      },
      {
        link: "/projects/team",
        label: "Team",
        Icon: Users,
        description: `I have worked on ${getNumberOfProjectsByCategory(
          "team"
        )} team projects.`,
      },
      {
        link: "/projects/hackathons",
        label: "Hackathons",
        Icon: Trophy,
        description: `I have participated in ${getNumberOfHackathonProjects()} hackathons.`,
      },
      {
        link: "/projects/learning",
        label: "Learning",
        Icon: Books,
        description: `I have completed ${getNumberOfProjectsByCategory(
          "learning"
        )} learning projects.`,
      },
    ],
  },
  { link: "/certificates-and-achievements", label: "Certificates" },
  {
    link: "/highlights",
    label: "Highlights",
  },
  { link: "/about", label: "About" },
];

export default function Navbar() {
  const [current, setCurrent] = useState(null);
  const [opened, handlers] = useDisclosure(false);
  const [drawerOpened, drawerHandlers] = useDisclosure(false);
  const { classes } = useStyles();
  const theme = useMantineTheme();

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>
        <Link passHref href={item.link}>
          <a>{item.label}</a>
        </Link>
      </Menu.Item>
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
        >
          <Menu.Target>
            <span
              onMouseEnter={() => {
                setCurrent(() => link.label);
                handlers.open();
              }}
            >
              <Link passHref href={link.link}>
                <a
                  className={classes.link}
                  onClick={() => {
                    setCurrent(() => "");
                  }}
                >
                  <Center>
                    <span className={`${classes.linkLabel}`}>{link.label}</span>
                    <ChevronDown size={12} />
                  </Center>
                </a>
              </Link>
            </span>
          </Menu.Target>
          <Menu.Dropdown>
            <div
              onMouseLeave={() => {
                setCurrent(() => "");
                handlers.close();
              }}
            >
              {menuItems}
            </div>
          </Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <Link key={link.label} passHref href={link.link}>
        <a
          className={classes.link}
          onMouseEnter={() => {
            setCurrent(() => link.label);
            handlers.close();
          }}
          onClick={() => {
            setCurrent(() => "");
            handlers.close();
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
        <Drawer
          position="right"
          opened={drawerOpened}
          onClose={drawerHandlers.close}
        >
          <Center className="full-wh">
            <div style={{ textAlign: "center" }}>
              {links.map((link, idx) => {
                return (
                  <div
                    key={`drawer-link-${idx}`}
                    style={{ marginBottom: "1rem" }}
                  >
                    <Link passHref href={link.link}>
                      <Button
                        variant="light"
                        fullWidth
                        size="xl"
                        component="a"
                        onClick={drawerHandlers.close}
                      >
                        {link.label}
                      </Button>
                    </Link>
                  </div>
                );
              })}
            </div>
          </Center>
        </Drawer>
        <div className={classes.inner}>
          <Link passHref href="https://davidjoseph.me/">
            <Text
              size="xl"
              weight={700}
              color={theme.colorScheme === "dark" ? "white" : "dark"}
            >
              DJ
            </Text>
          </Link>
          <Group spacing={5} className={classes.links}>
            {items}
            <ToggleColorScheme />
          </Group>
          <Burger
            opened={opened}
            onClick={drawerHandlers.open}
            className={classes.burger}
            size="sm"
            color={theme.colorScheme === "dark" ? "#eeeeee" : "#131313"}
          />
        </div>
      </Container>
    </Header>
  );
}
