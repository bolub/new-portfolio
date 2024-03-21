import Header from "./components/Header/Header";
import { getLimitedProjects } from "@/contentful/project/project";
import { Skills } from "./components/Skills";
import { MyProjects } from "./components/MyProjects";

export default async function Home() {
  const projects = await getLimitedProjects(2);

  return (
    <>
      <Header />
      <Skills />
      <MyProjects projects={projects} />
    </>
  );
}
