import ContentWrapper from "../../common/ContentWrapper/ContentWrapper";
import { Text, Title as MantineTitle } from "@mantine/core";
import StatsGroup from "./Stats";

export default function Title() {
  return (
    <ContentWrapper>
      <MantineTitle align="center">Hi, I&apos;m David Joseph</MantineTitle>
      <Text align="center" mb="xl">
        I&apos;m a full stack developer that makes websites and web apps.
      </Text>
      <StatsGroup />
    </ContentWrapper>
  );
}
