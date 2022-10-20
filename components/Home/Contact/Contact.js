import { Title, Text } from "@mantine/core";
import ContactForm from "./Form";

export default function ContactSection() {
  return (
    <div>
      <Title align="center" mb="xl">
        Contact Me
      </Title>
      <ContactForm />
    </div>
  );
}
