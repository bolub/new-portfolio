// Nextjs
import Head from "next/head";

// chakra
import { chakra } from "@chakra-ui/react";

// components
import UnderConstruction from "../components/Layout/UnderConstruction";

const Portfolio = () => {
  return (
    <>
      <Head>
        <title>Portfolio - Bolub</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <chakra.main>
        <UnderConstruction />
      </chakra.main>
    </>
  );
};

export default Portfolio;
