import { z } from "zod";
import { procedure, router } from "../../trpc";
import { ProjectService } from "./impl";
import { ProjectDataSchema } from "./interface";

export const projectRouter = router({
  create: procedure.input(ProjectDataSchema).mutation(({ input }) => {
    return ProjectService.create(input);
  }),
  view: procedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .query(({ input }) => {
      return ProjectService.view({
        id: input.id,
      });
    }),

  edit: procedure
    .input(
      z.object({
        id: z.string(),
        data: ProjectDataSchema,
      })
    )
    .mutation(({ input }) => {
      return ProjectService.edit({
        id: input.id,
        data: input.data,
      });
    }),

  delete: procedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(({ input }) => {
      return ProjectService.delete({
        id: input.id,
      });
    }),

  all: procedure.query(() => {
    return ProjectService.all();
  }),

  some: procedure
    .input(
      z.object({
        quantity: z.number(),
      })
    )
    .query(({ input }) => {
      return ProjectService.some({
        quantity: input.quantity,
      });
    }),
});
