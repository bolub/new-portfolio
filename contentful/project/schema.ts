import { z } from "zod";
import { AssetSchema, SysSchema } from "../shared-schema";

export const ProjectTechnologySchema = z.object({
  sys: SysSchema,
  fields: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

export const TagSchema = z.object({
  sys: SysSchema,
  fields: z.object({
    name: z.string(),
  }),
});

export const ProjectSchema = z.object({
  sys: SysSchema,
  fields: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    slug: z.string(),
    description: z.any(),
    cover_image_url: AssetSchema.transform((value) => {
      return value.fields.file.url;
    }).optional(),
    design_url: z.string().optional(),
    live_url: z.string().optional(),
    source_code: z.string().optional(),
    images: z
      .array(
        AssetSchema.transform((value) => {
          return value.fields.file.url;
        })
      )
      .optional(),
    technologies: z.array(ProjectTechnologySchema),
    tags: z.array(TagSchema),
  }),
});

export const ProjectItemsArraySchema = z.array(ProjectSchema);
