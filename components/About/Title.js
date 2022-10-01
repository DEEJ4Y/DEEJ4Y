import ContentWrapper from "../common/ContentWrapper/ContentWrapper";
import { Paper, SimpleGrid, Text, Title } from "@mantine/core";
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
          className="highlight"
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
      <Title align="center" mb="lg">
        About me
      </Title>
      <Paper p="md" withBorder>
        <Text mb="md">
          I am pursuing my third year of Computer Science and Engineering at{" "}
          <a
            className="highlight"
            target="__blank"
            rel="noopener noreferrer"
            href="https://www.srmist.edu.in/"
          >
            SRM Institute of Science and Technology
          </a>
          , specializing in Internet of Things.
        </Text>
        <Text mb="md">
          I mostly work on web projects. On the frontend, I have experience
          working with plain Javascript, React and static site generation (SSG)
          with NextJS. I am fluent in ES6 syntax, asynchronous Javascript and
          integrating RESTful APIs.
        </Text>
        <Text mb="md">
          On the backend, I have worked building RESTful APIs with Node.js,
          using Express, connecting to a MongoDB database and querying with
          Mongoose. I also write unit and integration tests with mocha and chai.
          I have also implemented basic RESTful APIs using Python and FastAPI.
        </Text>
        <Text>
          Apart from Javascript, I know Python, Dart and basic C and C++. I can
          build simple apps using Flutter as well.
        </Text>
      </Paper>

      <Title order={2} mt="xl" mb="sm" align="center">
        Experience
      </Title>
      <div style={{ textAlign: "start", margin: "2rem 0" }}>
        <Paper p="md" withBorder>
          <Text mb="md">
            I am currently a Technical associate at{" "}
            <a
              className="highlight"
              target="__blank"
              rel="noopener noreferrer"
              href="https://msclubsrm.in/"
            >
              Microsoft Learn Student Ambassadors SRM.
            </a>
          </Text>
          <Text mb="md">
            I was the CTO at{" "}
            <a
              className="highlight"
              target="__blank"
              rel="noopener noreferrer"
              href="https://salzaa.com/"
            >
              Salzaa
            </a>
            , a startup.
          </Text>
          <Text>
            See my{" "}
            <a
              className="highlight"
              target="__blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/david-joseph-75a7b71b5/#experience"
            >
              Linkedin
            </a>{" "}
            for an overview of different clubs I&apos;ve been a part of.
          </Text>
        </Paper>
      </div>

      <div style={{ textAlign: "center", margin: "2rem 0" }}>
        <Title order={2}>Misc</Title>
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
