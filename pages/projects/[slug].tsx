import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { SingleProjectPage } from "../../containers/single-project-page/SingleProjectPage";
import { getProject, getProjects } from "../../contentful/project/project";

const SingleProject = (
  props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  return <SingleProjectPage project={props.project} />;
};

export default SingleProject;

export const getStaticPaths = async () => {
  const projects = await getProjects();

  return {
    paths: projects.map((project) => ({
      params: {
        slug: project.fields.slug,
      },
    })),
    fallback: "blocking",
  };
};

export async function getStaticProps(
  context: GetStaticPropsContext<{ slug: string }>
) {
  const slug = context.params?.slug as string;

  const project = await getProject(slug);

  return {
    props: {
      project,
    },
    revalidate: 1,
  };
}
