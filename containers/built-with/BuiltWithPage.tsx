import { Box, Flex, chakra, Text } from "@chakra-ui/react";

import { generalPaddingX, maxi } from "../../utils/chakra";
import CustomSeo from "../../components/Layout/Seo";
import SectionTechnologies from "./SectionTechnologies";
import { useBuiltWithData } from "./hooks/useBuiltWithData";

export const BuiltWithPage = () => {
  const { allFrontend, allBackend, allHosting } = useBuiltWithData();

  return (
    <>
      <CustomSeo
        title="Built with"
        description="Tools and Technologies this website was built with"
      />

      <chakra.header
        alignItems="center"
        display="flex"
        py={{ base: "10", md: 10 }}
      >
        <Flex
          w="100%"
          flexDir={{ base: "column", md: "row" }}
          px={generalPaddingX}
          maxW={maxi}
          mx="auto"
        >
          <Box mb={{ base: 0, md: 0 }} w={{ base: "100%" }} my="auto">
            <chakra.h1
              color="brand.500"
              fontWeight={700}
              fontSize={{ base: "3xl", md: "4xl" }}
            >
              🧰 Built With
            </chakra.h1>

            <Text mt={4} mb={6} fontSize="17px">
              Basic Tools and Technologies this website was built with. These
              technologies might seem like an overkill, and I could just build
              everything from scratch with Vanilla CSS, HTML, and JS ........
              But I'm not gonna, why?, because I don't want to 😏
            </Text>
          </Box>
        </Flex>
      </chakra.header>

      <chakra.main
        minH={{ base: "100%", md: "60vh" }}
        px={generalPaddingX}
        maxW={maxi}
        mx="auto"
      >
        <SectionTechnologies title="Frontend" data={allFrontend} />
        <SectionTechnologies title="Backend" data={allBackend} />
        <SectionTechnologies title="Hosting" data={allHosting} />
      </chakra.main>
    </>
  );
};
