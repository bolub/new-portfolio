import Header from "./components/Header/Header";
import About from "./components/About";
import { getLimitedProjects } from "@/contentful/project/project";

export default async function Home() {
  const projects = await getLimitedProjects(2);

  return (
    <>
      <Header />
      <About projects={projects} />
    </>
  );
}
