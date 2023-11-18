import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { BlogPage } from "../../../containers/blog-page/BlogPage";
import { getBlogEntries, getBlogPost } from "../../../contentful/blog/blog";
import Head from "next/head";

const Blog = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const blogData = props.data.fields;

  return (
    <>
      <Head>
        <>
          <title>{blogData.title}</title>
          <meta name="description" content={blogData.description} key="desc" />
          <meta property="og:title" content={blogData.title} />
          <meta property="og:description" content={blogData.description} />
          <meta property="og:image" content={blogData.cover} />
          <meta
            property="og:url"
            content={`https://boluabiola.com/blog/${blogData.slug}`}
          />
          <meta property="og:type" content="website" />
        </>
      </Head>
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
