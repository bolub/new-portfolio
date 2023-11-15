import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { BlogPage } from "../../../containers/blog-page/BlogPage";
import { getBlogEntries, getBlogPost } from "../../../contentful/blog/blog";
import CustomSeo from "../../../components/Layout/Seo";
import Head from "next/head";

const Blog = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <CustomSeo
        title={props.data.fields.title}
        description={props.data.fields.description}
        imageUrl={props.data.fields.cover}
      />

      <Head>
        <meta property="og:title" content={props.data.fields.title} />
        <meta
          property="og:description"
          content={props.data.fields.description}
        />
        <meta property="og:image" content={props.data.fields.cover} />
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
