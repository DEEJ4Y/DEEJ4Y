import { Title } from "@mantine/core";
import ContentWrapper from "../components/common/ContentWrapper/ContentWrapper";
import HighlightsTimeline from "../components/Highlights/Timeline";

export default function HighlightsPage() {
  return (
    <ContentWrapper>
      <div style={{ textAlign: "left", marginBottom: "1.5rem" }}>
        <Title className="animate-character" order={1}>
          Highlights
        </Title>
      </div>
      <HighlightsTimeline />
    </ContentWrapper>
  );
}
