import { AllBlogPostsPage } from "../../containers/blog/AllBlogPostspage";
import { trpcHelpers } from "../../server/routers/_app";

const Blog = () => {
  return <AllBlogPostsPage />;
};

export default Blog;

// export async function getStaticProps() {
//   await trpcHelpers.post.all.prefetch();

//   return {
//     props: {
//       trpcState: trpcHelpers.dehydrate(),
//     },
//   };
// }
