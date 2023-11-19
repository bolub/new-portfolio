import { getBlogEntries } from "@/contentful/blog/blog";
import { Metadata } from "next";

import { BlogContainer } from "./components/BlogContainer";

export const metadata: Metadata = {
  title: "Blog",
};

const Blog = async () => {
  const blog = await getBlogEntries();

  return <BlogContainer data={blog} />;
};

export default Blog;
