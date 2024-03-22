import { z } from "zod";
import { AssetSchema, SysSchema, TagSchema } from "../shared-schema";

export const BlogItemSchema = z.object({
  sys: SysSchema,
  fields: z.object({
    title: z.string(),
    description: z.string().optional(),
    slug: z.string(),
    body: z.any(),
    cover: AssetSchema.transform((value) => {
      return value.fields.file.url;
    }).optional(),
    tags: z.array(TagSchema).optional(),
  }),
});

export const BlogItemsArraySchema = z.array(BlogItemSchema);
