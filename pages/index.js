import MajorProjects from "../components/Home/MajorProjects/MajorProjects";
import Title from "../components/Home/Title/Title";
import { Divider } from "@mantine/core";
import ContactSection from "../components/Home/Contact/Contact";

export default function Home() {
  return (
    <div>
      <Title />
      <Divider />
      <MajorProjects />
    </div>
  );
}
