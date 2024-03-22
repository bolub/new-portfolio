import { getBlogEntries, getBlogPost } from "@/contentful/blog/blog";
import { BlogPageContainer } from "./components/BlogPageContainer";
import { Metadata, ResolvingMetadata } from "next";

type BlogPageProps = {
  params: {
    slug: string;
  };
};

export const revalidate = 1;

export async function generateMetadata(
  { params }: BlogPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;

  const { fields } = await getBlogPost(slug);
  const coverImage =
    fields.cover ||
    "https://res.cloudinary.com/bolub/image/upload/v1623525073/Group_1_1.png";

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `Boluwatife Abiola - ${fields.title}`,
    description: fields.description,
    openGraph: {
      images: [coverImage, ...previousImages],
    },
  };
}

export default async function BlogPage(props: BlogPageProps) {
  const data = await getBlogPost(props.params.slug);

  return <BlogPageContainer blogData={data} />;
}

export async function generateStaticParams() {
  const posts = await getBlogEntries();

  return posts.map((post) => ({
    slug: post.fields.slug,
  }));
}
