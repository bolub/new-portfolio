import { procedure, router } from '../../trpc';
import { BuiltWithService } from './impl';

export const builtWithRouter = router({
  all: procedure.query((opts) => {
    return BuiltWithService.all();
  }),
});
