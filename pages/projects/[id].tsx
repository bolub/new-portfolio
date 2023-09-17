import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { SingleProjectPage } from "../../containers/SingleProjectPage/SingleProjectPage";
import prisma from "../../utils/db";
import { trpcHelpers } from "../../server/routers/_app";

const SingleProject = (
  props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  const { id } = props;

  return <SingleProjectPage projectId={id} />;
};

export default SingleProject;

export const getStaticPaths = async () => {
  const projects = await prisma.project.findMany({
    select: {
      id: true,
    },
  });

  return {
    paths: projects.map((project) => ({
      params: {
        id: project.id,
      },
    })),
    fallback: "blocking",
  };
};

export async function getStaticProps(
  context: GetStaticPropsContext<{ id: string }>
) {
  const id = context.params?.id as string;

  await trpcHelpers.project.view.prefetch({ id });
  return {
    props: {
      trpcState: trpcHelpers.dehydrate(),
      id,
    },
    revalidate: 1,
  };
}
