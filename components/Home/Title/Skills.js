import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";
import { getAllSkills } from "../../data/projects";
import { Badge, Text } from "@mantine/core";

export default function SkillsCarousel() {
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  const colors = [
    "pink",
    "grape",
    "violet",
    "indigo",
    "blue",
    "cyan",
    "teal",
    "green",
    "lime",
    "yellow",
    "orange",
  ];

  return (
    <Carousel
      sx={{ maxWidth: "64" }}
      mx="auto"
      orientation="vertical"
      height={64}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      loop
      withIndicators={false}
      withControls={false}
    >
      {getAllSkills().map((skill, idx) => (
        <Carousel.Slide
          key={skill}
          style={{
            display: "flex",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            padding: "0 0 0 0.25rem",
          }}
        >
          <Text align="center">
            <Badge color={colors[(idx % colors.length) - 1]} variant="outline">
              {skill}
            </Badge>
          </Text>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
