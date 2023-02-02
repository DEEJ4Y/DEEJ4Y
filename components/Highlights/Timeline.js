import { ActionIcon, Text, Timeline, TimelineItem } from "@mantine/core";
import Link from "next/link";
import { ExternalLink } from "tabler-icons-react";

export const highlights = [
  {
    title: "Built my first website",
    time: "September 2020",
  },
  { title: "Started learning Javascript", time: "October 2020" },
  {
    title: "Joined a Tech club",
    description: "I joined IoT Alliance as an associate developer.",
    time: "November 2020",
  },
  { title: "Started learning backend development", time: "December 2020" },
  { title: "Started learning React", time: "January 2021" },
  {
    title: "First Full Stack app",
    time: "February 2021",
    description:
      "Built my first full stack application with API calls and authentication.",
  },
  {
    title: "Started my first big team project",
    time: "March 2021",
    description: "Event Management",
    link: "/projects/team#event-management-app",
  },
  {
    title: "First promotion",
    time: "June 2021",
    description: "I got double promoted to senior developer at IoT Alliance.",
  },
  {
    title: "Learnt Nextjs",
    time: "October 2021",
  },
  {
    title: "First Nextjs project",
    time: "November 2021",
  },
  {
    title: "Completed a major project",
    time: "December 2021",
    description: "socialautopost",
    link: "/projects/personal#social-auto-post",
  },
  {
    title: "Started my first Freelance project",
    time: "January 2022",
  },
  {
    title: "Completed a major project",
    time: "February 2022",
    description: "Question Bank",
    link: "/projects/personal#question-bank",
  },
  {
    title: "Joined a startup",
    time: "February 2022",
    description: "Salzaa",
    link: "/projects/team#salzaa",
  },
  {
    title: "Published my first npm package",
    time: "April 2022",
    description: "emfrest",
    link: "/projects/personal#emfrest",
  },
  {
    title: "Completed my first Fiverr freelance project",
    time: "May 2022",
    description: "Prem Mistry's Portfolio website",
    link: "/projects/freelancing#prem-mistry's-personal-website",
  },
  {
    title: "Another open source project",
    time: "June 2022",
    description: "Simple Certificate Generator",
    link: "/projects/personal#simple-certificate-generator",
  },
  {
    title: "First Game Project",
    time: "July 2022",
    description: "Tkinter Snake Game",
    link: "/projects/personal#snake-game",
  },
  {
    title: "Learnt TypeScript",
    time: "August 2022",
  },
  {
    title: "Learnt to build Browser Extensions",
    time: "October 2022",
  },
  {
    title: "Learnt Electron",
    time: "November 2022",
  },
  {
    title: "Second npm package",
    time: "December 2022",
    description: "PouchDB Services",
    link: "/projects/personal#pouchdb-services",
  },
].reverse();

export default function HighlightsTimeline() {
  return (
    <Timeline active={highlights.length} lineWidth={1}>
      {highlights.map((highlight, idx) => (
        <TimelineItem
          key={`highlight-${idx}`}
          title={highlight.title}
          bulletSize={12}
        >
          {highlight.link ? (
            <Link passHref href={highlight.link}>
              {highlight.description ? (
                <Text className="clickable" color="dimmed" size="sm">
                  {highlight.description}
                  <ActionIcon
                    style={{
                      display: "inline",
                      position: "relative",
                      top: "2px",
                    }}
                  >
                    <ExternalLink size={16} />
                  </ActionIcon>
                </Text>
              ) : (
                ""
              )}
            </Link>
          ) : highlight.description ? (
            <Text color="dimmed" size="sm">
              {highlight.description}
            </Text>
          ) : (
            ""
          )}
          <Text size="xs" color="gray" mt={4}>
            {highlight.time}
          </Text>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
