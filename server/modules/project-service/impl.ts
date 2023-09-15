import prisma from "../../../utils/db";
import { ProjectServiceType } from "./interface";

export const create: ProjectServiceType["create"] = async ({
  tags,
  technologies,
  ...rest
}) => {
  return await prisma.project.create({
    data: {
      ...rest,
      tags: { connect: tags.map((tag) => ({ id: tag })) },
      technologies: { connect: technologies.map((tech) => ({ id: tech })) },
    },
  });
};

export const view: ProjectServiceType["view"] = async ({ id }) => {
  return await prisma.project.findUnique({
    where: { id },
    include: {
      tags: {
        select: {
          name: true,
          id: true,
        },
      },
    },
  });
};

export const edit: ProjectServiceType["edit"] = async ({ id, data }) => {
  const { tags, technologies, ...rest } = data;

  const updatedProject = await prisma.project.update({
    where: { id },
    data: {
      ...rest,
      tags: { connect: tags?.map((tag) => ({ id: tag })) },
      technologies: { connect: technologies?.map((tech) => ({ id: tech })) },
    },
  });

  if (!updatedProject) {
    throw new Error("Oops, couldn't update project");
  }

  return "Project updated successfully";
};

export const remove: ProjectServiceType["delete"] = async ({ id }) => {
  const deletedProject = await prisma.project.delete({
    where: { id },
  });

  if (!deletedProject) {
    throw new Error("Oops, couldn't delete project");
  }

  return "Project deleted successfully";
};

export const all: ProjectServiceType["all"] = async () => {
  return await prisma.project.findMany({
    include: {
      tags: {
        select: {
          name: true,
          id: true,
        },
      },
    },
  });
};

export const ProjectService: ProjectServiceType = {
  create,
  view,
  edit,
  all,
  delete: remove,
};
