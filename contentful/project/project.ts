import { z } from "zod";
import {
  ProjectItemsArraySchema,
  ProjectSchema,
  ProjectTechnologySchema,
} from "./schema";
import { client } from "..";

export type ProjectItem = z.infer<typeof ProjectSchema>;
export type ProjectTechnology = z.infer<typeof ProjectTechnologySchema>;

export const getProjects = async ({ type }: { type?: string }) => {
  const entries = await client.getEntries<{
    contentTypeId: "project";
    fields: ProjectItem[];
  }>({
    content_type: "project",

    // @ts-ignore
    order: "sys.createdAt",
  });

  return ProjectItemsArraySchema.parse(entries.items);
};

export const getLimitedProjects = async (
  limit: number
): Promise<ProjectItem[]> => {
  const entries = await client.getEntries({
    content_type: "project",
    // @ts-ignore
    order: "sys.createdAt",
    limit,
  });

  return ProjectItemsArraySchema.parse(entries.items);
};

export const getProject = async (slug: string): Promise<ProjectItem> => {
  const entries = await client.getEntries({
    content_type: "project",
    "fields.slug": slug,
  });

  return ProjectSchema.parse(entries.items[0]);
};
