import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { getBlogEntries, getBlogPost } from "../../../contentful";
import { BlogPage } from "../../../containers/blog-page/BlogPage";

const Blog = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <BlogPage blogData={props.data} />
    </>
  );
};

export default Blog;

export const getStaticPaths = async () => {
  const posts = await getBlogEntries();

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.fields.slug,
      },
    })),
    fallback: "blocking",
  };
};

export async function getStaticProps(
  context: GetStaticPropsContext<{ slug: string }>
) {
  const slug = context.params?.slug as string;

  const data = await getBlogPost(slug);

  return {
    props: {
      slug,
      data,
    },
    revalidate: 1,
  };
}
