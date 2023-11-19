import { getProject, getProjects } from "@/contentful/project/project";
import { ProjectPageContainer } from "./components/ProjectPageContainer";

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

export default async function Project(props: ProjectPageProps) {
  const { params } = props;

  const project = await getProject(params.slug);

  return <ProjectPageContainer project={project} />;
}

export async function generateStaticParams() {
  const projects = await getProjects({});

  return projects.map((project) => ({
    slug: project.fields.slug,
  }));
}
