// Nextjs
import Head from "next/head";

// chakra
import { Flex, chakra, Badge, SimpleGrid } from "@chakra-ui/react";

// utils
import { generalPaddingX } from "../utils/chakra";

// axios
import axios from "axios";
import SingleResource from "../components/resources/SingleResource";

// components
// import CustomLink from "../components/UI/CustomLink";

export default function Resources({ data }) {
  console.log(data);
  return (
    <>
      <Head>
        <title>Resources - Bolub</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <chakra.header
        // h={{ base: "100%", md: "75vh" }}
        d="flex"
        py={{ base: "10", md: 10 }}
      >
        <Flex
          w="100%"
          flexDir={{ base: "column", md: "row" }}
          px={generalPaddingX}
        >
          <chakra.h1 fontWeight={700} fontSize={{ base: "3xl", md: "4xl" }}>
            Resources
            <Badge ml={2} colorScheme="red">
              {data?.length}
            </Badge>
          </chakra.h1>
        </Flex>
      </chakra.header>

      <chakra.main px={generalPaddingX}>
        <SimpleGrid spacing={4} columns={{ base: 1, md: 2, lg: 3 }}>
          {data?.map((rd) => {
            return <SingleResource key={rd?.id} data={rd} />;
          })}
        </SimpleGrid>
      </chakra.main>
    </>
  );
}

export async function getStaticProps(context) {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/resources`
    );
    return {
      props: {
        data: response.data,
      }, // will be passed to the page component as props
      revalidate: 1,
    };
  } catch (error) {
    return {
      props: {
        data: [],
        status: "error",
      }, // will be passed to the page component as props
      revalidate: 1,
    };
  }
}
