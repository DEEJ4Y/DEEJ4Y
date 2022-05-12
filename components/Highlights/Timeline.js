import { Text, Timeline, TimelineItem } from "@mantine/core";

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
    title: "Started my first major project",
    time: "March 2021",
    description: "Event Management",
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
  },
  {
    title: "Started my first Freelance project",
    time: "January 2022",
  },
  {
    title: "Completed a major project",
    time: "February 2022",
    description: "Question Bank",
  },
  {
    title: "Joined a startup",
    time: "February 2022",
    description: "Salzaa",
  },
  {
    title: "Published my first npm package",
    time: "April 2022",
    description: "emfrest",
  },
  {
    title: "Completed my first Fiverr freelance project",
    time: "May 2022",
    description: "Prem Mistry's Portfolio website",
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
          {highlight.description ? (
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
