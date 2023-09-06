import { z } from 'zod';
import { procedure, router } from '../../trpc';
import { PostService } from './impl';

export const postRouter = router({
  all: procedure.query(() => {
    return PostService.all();
  }),
  view: procedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .query(({ input }) => {
      return PostService.view({
        id: input.id,
      });
    }),

  search: procedure
    .input(
      z.object({
        query: z.string(),
      })
    )
    .mutation(({ input }) => {
      return PostService.search({
        query: input.query,
      });
    }),
});
