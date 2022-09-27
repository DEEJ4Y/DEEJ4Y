import { Grid, Title } from "@mantine/core";
import certifications from "../data/certifications";
import CertificateCard from "./CertificateCard";

export default function CertificationsTitle() {
  return (
    <>
      <Title order={1} mb="xl" align="center">
        My Certificates and Achievements
      </Title>
      <Grid>
        {certifications.map((certificateData, idx) => {
          return (
            <Grid.Col md={6} sm={12} key={idx}>
              <CertificateCard {...certificateData} />
            </Grid.Col>
          );
        })}
      </Grid>
    </>
  );
}
