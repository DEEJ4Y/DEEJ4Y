import ContentWrapper from "../../common/ContentWrapper/ContentWrapper";
import { Text, Title as MantineTitle } from "@mantine/core";
import StatsGroup from "./Stats";
import { SearchProjectsInput } from "../../Search/QueryForm";

export default function Title() {
  return (
    <ContentWrapper>
      <MantineTitle align="center">
        Hi, I&apos;m{" "}
        <Text component="span" inherit className="animate-character">
          David Joseph
        </Text>
      </MantineTitle>
      <Text align="center">
        I&apos;m a full stack developer that makes websites and web apps.
      </Text>
      <SearchProjectsInput />
      <StatsGroup />
    </ContentWrapper>
  );
}
