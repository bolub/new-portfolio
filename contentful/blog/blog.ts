import { z } from "zod";
import { client } from "../../utils/contentful";
import { BlogItemSchema, BlogItemsArraySchema } from "./schema";

export type BlogItem = z.infer<typeof BlogItemSchema>;
export type BlogItems = ReadonlyArray<BlogItem>;

export const getBlogEntries = async (): Promise<BlogItems> => {
  const entries = await client.getEntries({ content_type: "blogPost" });

  return BlogItemsArraySchema.parse(entries.items);
};

export const getBlogPost = async (slug: string): Promise<BlogItem> => {
  const entries = await client.getEntries({
    content_type: "blogPost",
    "fields.slug": slug,
  });

  return BlogItemSchema.parse(entries.items[0]);
};
