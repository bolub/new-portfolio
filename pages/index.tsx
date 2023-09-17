import { chakra } from "@chakra-ui/react";

import CustomSeo from "../components/Layout/Seo";
import Header from "../components/homePage/Header";
import About from "../components/homePage/About";
import { trpcHelpers } from "../server/routers/_app";

export default function Home() {
  return (
    <>
      <CustomSeo title="Home" />

      <chakra.main>
        <Header />
        <About />
      </chakra.main>
    </>
  );
}

export async function getStaticProps() {
  await trpcHelpers.project.some.prefetch({
    quantity: 2,
  });

  return {
    props: {
      trpcState: trpcHelpers.dehydrate(),
    },
  };
}
