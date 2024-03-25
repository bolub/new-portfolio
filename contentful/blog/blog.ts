import { z } from "zod";
import { BlogItemSchema, BlogItemsArraySchema } from "./schema";
import { client, previewClient } from "..";

export type BlogItem = z.infer<typeof BlogItemSchema>;
export type BlogItems = ReadonlyArray<BlogItem>;

export const getBlogEntries = async (): Promise<BlogItems> => {
  const entries = await client.getEntries({
    content_type: "blogPost",
    // @ts-ignore
    order: "-sys.createdAt",
  });

  return BlogItemsArraySchema.parse(entries.items);
};

export const getBlogPost = async (
  slug: string,
  isPreview?: boolean
): Promise<BlogItem> => {
  const clientToUse = isPreview ? previewClient : client;

  const entries = await clientToUse.getEntries({
    content_type: "blogPost",
    "fields.slug": slug,
  });

  return BlogItemSchema.parse(entries.items[0]);
};
