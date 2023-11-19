import { getProjects } from "@/contentful/project/project";
import { ProjectsContainer } from "./components/ProjectsContainer";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";
import { Metadata } from "next";

type PageProps = {
  searchParams: {
    tab: string;
  };
};

export const metadata: Metadata = {
  title: "Projects",
  description: "Some of the projects that has drained my energy over the years",
};

const ProjectsPage = async (props: PageProps) => {
  const allProjects = await getProjects({ type: props.searchParams.tab });

  return (
    <ProjectsContainer>
      <>
        <Header />

        <Projects projects={allProjects} />
      </>
    </ProjectsContainer>
  );
};

export default ProjectsPage;
