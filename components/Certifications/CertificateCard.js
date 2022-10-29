/* eslint-disable @next/next/no-img-element */
import { Badge, Container, Paper, Text, useMantineTheme } from "@mantine/core";
import Link from "next/link";

export default function CertificateCard({
  imageUrl,
  name,
  link,
  description,
  category,
}) {
  const theme = useMantineTheme();

  return (
    <Link passHref href={link}>
      <a target="_blank" rel="noopener noreferrer">
        <Paper
          className="clickable"
          withBorder
          style={{ position: "relative" }}
        >
          <Badge
            variant="filled"
            color={theme.colorScheme}
            style={{
              position: "absolute",
              right: theme.spacing.sm,
              top: theme.spacing.sm,
            }}
          >
            {category}
          </Badge>
          <img
            src={imageUrl}
            alt={"Certificate for " + name}
            width="100%"
            style={{ borderRadius: "4px" }}
          />
          <Container fluid p="md">
            <Text weight="bold">{name}</Text>
            {description
              ? description.map((string, idx) => (
                  <Text key={string + idx}>{string}</Text>
                ))
              : ""}
          </Container>
        </Paper>
      </a>
    </Link>
  );
}
