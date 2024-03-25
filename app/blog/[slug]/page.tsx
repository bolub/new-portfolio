import { BlogItem, getBlogEntries, getBlogPost } from "@/contentful/blog/blog";
import { BlogPageContainer } from "./components/BlogPageContainer";
import { Metadata, ResolvingMetadata } from "next";
import { draftMode } from "next/headers";
import { DraftBlogPageContainer } from "./components/DraftBlogPageContainer";

type BlogPageProps = {
  params: {
    slug: string;
  };
  searchParams: {
    preview: string;
  };
};

export const revalidate = 1;

export async function generateMetadata(
  { params, searchParams }: BlogPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;
  const isPreview = searchParams.preview === "true";

  const data = await getBlogPost(slug, isPreview);

  const coverImage =
    data?.fields.cover ||
    "https://res.cloudinary.com/bolub/image/upload/v1623525073/Group_1_1.png";

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `Boluwatife Abiola - ${data?.fields.title}`,
    description: data?.fields.description as string,
    openGraph: {
      images: [coverImage as string, ...previousImages],
    },
  };
}

export default async function BlogPage(props: BlogPageProps) {
  const isPreviewModeEnabled = props.searchParams.preview === "true";

  const data = await getBlogPost(props.params.slug, isPreviewModeEnabled);

  console.log(isPreviewModeEnabled);

  if (isPreviewModeEnabled)
    return <DraftBlogPageContainer blogData={data as BlogItem} />;

  return <BlogPageContainer blogData={data as BlogItem} />;
}

export async function generateStaticParams() {
  const posts = await getBlogEntries();

  return posts.map((post) => ({
    slug: post.fields.slug,
  }));
}
