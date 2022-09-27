import React from "react";
import { createStyles, Text } from "@mantine/core";
import {
  DeviceDesktopAnalytics,
  GitCommit,
  UserCheck,
} from "tabler-icons-react";
import {
  getNumberOfMajorProjects,
  getNumberOfProjectsByCategory,
} from "../../data/projects";

const useStyles = createStyles((theme) => ({
  root: {
    display: "flex",
    backgroundImage: `linear-gradient(-60deg, ${
      theme.colors[theme.primaryColor][4]
    } 0%, ${theme.colors[theme.primaryColor][7]} 100%)`,
    padding: theme.spacing.xl * 1.5,
    borderRadius: theme.radius.md,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },

  title: {
    color: theme.white,
    textTransform: "uppercase",
    fontWeight: 700,
    fontSize: theme.fontSizes.sm,
  },

  count: {
    color: theme.white,
    fontSize: 32,
    lineHeight: 1,
    fontWeight: 700,
    marginBottom: theme.spacing.md,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  description: {
    color: theme.colors[theme.primaryColor][0],
    fontSize: theme.fontSizes.sm,
    marginTop: 5,
  },

  stat: {
    flex: 1,

    "& + &": {
      paddingLeft: theme.spacing.xl,
      marginLeft: theme.spacing.xl,
      borderLeft: `1px solid ${theme.colors[theme.primaryColor][3]}`,

      [theme.fn.smallerThan("sm")]: {
        paddingLeft: 0,
        marginLeft: 0,
        borderLeft: 0,
        paddingTop: theme.spacing.xl,
        marginTop: theme.spacing.xl,
        borderTop: `1px solid ${theme.colors[theme.primaryColor][3]}`,
      },
    },
  },
}));

const numberOfMajorProjects = getNumberOfMajorProjects();

const statsData = [
  {
    title: "Commits",
    stats: "2500+",
    description:
      "Collaborated on multiple projects using Github, Gitlab and Bitbucket.",
    Icon: GitCommit,
  },
  {
    title: "Major Projects",
    stats: numberOfMajorProjects,
    description: `Developed ${numberOfMajorProjects} major projects, including 1 npm package; ${getNumberOfProjectsByCategory(
      "team"
    )} team projects and ${getNumberOfProjectsByCategory(
      "personal"
    )} personal projects.`,
    Icon: DeviceDesktopAnalytics,
  },
  {
    title: "Years Experience",
    stats: "2+",
    description: "Developing websites and web apps for more two years.",
    Icon: UserCheck,
  },
];

export default function StatsGroup() {
  const data = statsData;
  const { classes } = useStyles();
  const stats = data.map((stat) => (
    <div key={stat.title} className={classes.stat}>
      <Text className={classes.count}>
        <stat.Icon size={26} /> {stat.stats}
      </Text>
      <Text className={classes.title}>{stat.title}</Text>
      <Text className={classes.description}>{stat.description}</Text>
    </div>
  ));
  return <div className={classes.root}>{stats}</div>;
}
