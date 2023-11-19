import { getProject, getProjects } from "@/contentful/project/project";
import { ProjectPageContainer } from "./components/ProjectPageContainer";
import { Metadata, ResolvingMetadata } from "next";

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata(
  { params }: ProjectPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;

  const { fields } = await getProject(slug);
  const coverImage =
    fields.cover_image_url ||
    "https://res.cloudinary.com/bolub/image/upload/v1623525073/Group_1_1.png";

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `Boluwatife Abiola - ${fields.title}`,
    description: fields.subtitle,
    openGraph: {
      images: [coverImage, ...previousImages],
    },
  };
}

export default async function Project(props: ProjectPageProps) {
  const { params } = props;

  const project = await getProject(params.slug);

  return <ProjectPageContainer project={project} />;
}

export async function generateStaticParams() {
  const projects = await getProjects();

  return projects.map((project: any) => ({
    slug: project.fields.slug,
  }));
}
