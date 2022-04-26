import { Title, Text, Timeline, TimelineItem } from "@mantine/core";
import ContentWrapper from "../components/common/ContentWrapper/ContentWrapper";
import HighlightsTimeline from "../components/Highlights/Timeline";

export default function HighlightsPage() {
  return (
    <ContentWrapper>
      <div style={{ textAlign: "left", marginBottom: "1.5rem" }}>
        <Title className="animate-character" order={1}>
          Highlights
        </Title>
        <Text>Have a look at my important milestones.</Text>
      </div>
      <HighlightsTimeline />
    </ContentWrapper>
  );
}
