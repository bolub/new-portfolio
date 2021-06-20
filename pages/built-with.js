import React from "react";

// chakra
import { Box, Flex, chakra, Text } from "@chakra-ui/react";

// utils
import { generalPaddingX } from "../utils/chakra";

// axios
import axios from "axios";

// components
import CustomSeo from "../components/Layout/Seo";
import SectionTechnologies from "../components/built-with/SectionTechnologies";

const BuiltWith = ({ data }) => {
  // frontend
  const allFrontend = data?.filter((bd) => {
    return bd.tag === "frontend";
  });

  const allBackend = data?.filter((bd) => {
    return bd.tag === "backend";
  });

  const allHosting = data?.filter((bd) => {
    return bd.tag === "hosting";
  });

  return (
    <>
      <CustomSeo
        title="Built with"
        description="Tools and Technologies this website was built with"
      />

      <chakra.header alignItems="center" d="flex" py={{ base: "10", md: 10 }}>
        <Flex
          w="100%"
          flexDir={{ base: "column", md: "row" }}
          px={generalPaddingX}
        >
          <Box
            mb={{ base: 0, md: 0 }}
            w={{ base: "100%", md: "45%" }}
            my="auto"
          >
            <chakra.h1
              color="brand.500"
              fontWeight={700}
              fontSize={{ base: "3xl", md: "4xl" }}
            >
              🧰 Built With
            </chakra.h1>

            <Text mt={4} mb={6} fontSize="17px">
              Basic Tools and Technologies this website was built with
            </Text>
          </Box>
        </Flex>
      </chakra.header>

      <chakra.main minH={{ base: "100%", md: "60vh" }} px={generalPaddingX}>
        {/* frontend */}
        <SectionTechnologies title="Frontend" data={allFrontend} />

        {/* backend */}
        <SectionTechnologies title="Backend" data={allBackend} />

        {/* hosting */}
        <SectionTechnologies title="Hosting" data={allHosting} />
      </chakra.main>
    </>
  );
};

export default BuiltWith;

export async function getStaticProps(context) {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/built-widths`
    );

    return {
      props: {
        data: response.data,
      }, // will be passed to the page component as props
      revalidate: 1,
    };
  } catch (error) {
    // console.log(error);
    return {
      props: {
        data: [],
        status: "error",
      }, // will be passed to the page component as props
      revalidate: 1,
    };
  }
}
