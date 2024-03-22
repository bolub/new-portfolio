import { z } from "zod";

export const SysSchema = z.object({
  id: z.string(),
  createdAt: z.string(),
});

export const AssetSchema = z.object({
  fields: z.object({
    file: z.object({
      url: z.string().transform((value) => `https:${value}`),
    }),
  }),
});

export const TagSchema = z.object({
  sys: SysSchema,
  fields: z.object({
    name: z.string(),
  }),
});
