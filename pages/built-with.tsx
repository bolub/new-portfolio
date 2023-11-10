import { trpcHelpers } from "../server/routers/_app";
import { BuiltWithPage } from "../containers/built-with/BuiltWithPage";

const BuiltWith = () => {
  return <BuiltWithPage />;
};

export default BuiltWith;

export async function getStaticProps() {
  await trpcHelpers.builtWith.all.prefetch();

  return {
    props: {
      trpcState: trpcHelpers.dehydrate(),
    },
  };
}
