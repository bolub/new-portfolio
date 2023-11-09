import { client } from "../utils/contentful";
import { z } from "zod";

const CoverImageSchema = z
  .object({
    fields: z.object({
      file: z.object({
        url: z.string().transform((value) => `https:${value}`),
      }),
    }),
  })
  .optional();

export const BlogItemSchema = z.object({
  sys: z.object({
    id: z.string(),
    createdAt: z.string(),
  }),
  fields: z.object({
    title: z.string(),
    description: z.string().optional(),
    slug: z.string(),
    body: z.any(),
    cover: CoverImageSchema.transform((value) => {
      return value?.fields.file.url;
    }),
  }),
});

export const BlogItemsArraySchema = z.array(BlogItemSchema);

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
