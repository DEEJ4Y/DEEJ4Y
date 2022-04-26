import ContentWrapper from "../common/ContentWrapper/ContentWrapper";
import { SimpleGrid, Text, Title } from "@mantine/core";
import AboutCard from "./AboutCard";

const aboutData = [
  {
    title: "Music",
    description: [
      <>
        I love listening to music, emo-rock in particular. Some of my favorite
        bands are Black Veil Brides, My Chemical Romance, Fall Out Boy,
        Paramore, The Red Jumpsuit Apparatus, Panic! At the Disco and Sleeping
        with Sirens.{" "}
        <a
          href="https://deej4y.github.io/WeeklySongRecommendation/"
          target="__blank"
          rel="noopener noreferrer"
        >
          Check out some of my favorite songs here.
        </a>
      </>,
      "Apart from listening to music, I can also play guitar, piano and try to sing along.",
    ],
    image: "/screenshots/emo-music.png",
  },
  {
    title: "Formula 1",
    description: [
      "I'm an F1 fan. I watch every race and just love watching the fastest cars battling it out a few inches away from each other.",
      "I also play the F1 games and love driving in general.",
    ],
    image: "/screenshots/f1.webp",
  },
];

export default function AboutTitle() {
  return (
    <ContentWrapper>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <Title>About me</Title>
        <Text>Yes, I do stuff apart from development as well.</Text>
      </div>
      <SimpleGrid cols={1}>
        {aboutData.map((aboutObj, idx) => (
          <AboutCard key={`about-card-${idx}`} {...aboutObj} />
        ))}
      </SimpleGrid>
    </ContentWrapper>
  );
}
