import { InferGetStaticPropsType } from "next";
import { AllBlogPostsPage } from "../../containers/blog/AllBlogPostsPage";
import { getBlogEntries } from "../../contentful";

const Blog = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <AllBlogPostsPage data={props.data} />;
};

export default Blog;

export async function getStaticProps() {
  const data = await getBlogEntries();

  return {
    props: {
      data,
    },
    revalidate: 1,
  };
}
