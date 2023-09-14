import superjson from "superjson";
import { postRouter } from "../modules/post-service/router";
import { router } from "../trpc";
import { builtWithRouter } from "./../modules/built-width-service/router";
import { createServerSideHelpers } from "@trpc/react-query/server";
import { commentRouter } from "../modules/comments-service/router";
import { projectRouter } from "../modules/projects/router";

export const appRouter = router({
  builtWith: builtWithRouter,
  post: postRouter,
  comment: commentRouter,
  project: projectRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

export const trpcHelpers = createServerSideHelpers({
  router: appRouter,
  ctx: {},
  transformer: superjson,
});
