// Nextjs
import Head from "next/head";

// chakra
import { chakra } from "@chakra-ui/react";

// components
import UnderConstruction from "../components/Layout/UnderConstruction";

const Cooking = () => {
  return (
    <>
      <Head>
        <title>Cooking - Bolub</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <chakra.main>
        <UnderConstruction />
      </chakra.main>
    </>
  );
};

export default Cooking;
