import { z } from 'zod';
import { procedure, router } from '../../trpc';
import { CommentService } from './impl';

export const commentRouter = router({
  all: procedure
    .input(
      z.object({
        postId: z.string(),
      })
    )

    .query(({ input }) => {
      return CommentService.all({
        postId: input.postId,
      });
    }),
  create: procedure
    .input(
      z.object({
        postId: z.string(),
        message: z.string(),
        author: z.string(),
      })
    )

    .mutation(({ input }) => {
      return CommentService.create({
        postId: input.postId,
        message: input.message,
        author: input.author,
      });
    }),
});
