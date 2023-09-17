import { Project, ProjectTechnologies, Tag } from "@prisma/client";
import { z } from "zod";

export type CustomProject = Project & {
  tags: Pick<Tag, "name" | "id">[];
  technologies: ProjectTechnologies[];
};

export const ProjectDataSchema = z.object({
  title: z.string(),
  subtitle: z.string(),
  description: z.string(),
  live_url: z.string(),
  design_url: z.string(),
  source_code: z.string(),
  cover_image_url: z.string(),
  tags: z.array(z.string()),
  technologies: z.array(z.string()),
  images: z.array(z.string()),
});

type ProjectData = z.infer<typeof ProjectDataSchema>;

export interface ProjectServiceType {
  create: (args: ProjectData) => Promise<Project>;
  view: (args: { id: string }) => Promise<CustomProject | null>;
  edit: (args: { id: string; data: Partial<ProjectData> }) => Promise<string>;
  delete: (args: { id: string }) => Promise<string>;
  all: () => Promise<CustomProject[]>;
  some: (args: { quantity: number }) => Promise<CustomProject[]>;
}
