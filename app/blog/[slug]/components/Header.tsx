import {
  Box,
  chakra,
  Text,
  HStack,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { HiChevronLeft } from "react-icons/hi";
import Image from "next/image";

import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
dayjs.extend(advancedFormat);

import { CustomContainer } from "@/app/components/CustomContainer";
import { BlogItem } from "@/contentful/blog/blog";
import Link from "next/link";

export const Header = ({ blogData }: { blogData: BlogItem }) => {
  return (
    <CustomContainer
      display="flex"
      flexDir={{ base: "column" }}
      justifyContent="center"
      textAlign="center"
      pos="relative"
    >
      <chakra.div display={{ base: "none", md: "flex" }} pos="absolute" top={0}>
        <ChakraLink display="flex" as={Link} href="/blog">
          <Text my="auto" mr={1} fontSize="md">
            <HiChevronLeft />
          </Text>

          <Text my="auto">Back</Text>
        </ChakraLink>
      </chakra.div>

      <Box
        mb={{ base: 0, md: 0 }}
        display="flex"
        flexDir="column"
        w={{ base: "100%", md: "60%" }}
        m="auto"
      >
        <HStack mb={1} mx="auto">
          <Text color="brand.500" fontSize="14px" fontWeight={600}>
            💻 Programming
          </Text>
        </HStack>

        <chakra.h1 fontWeight={700} fontSize={{ base: "3xl", md: "4xl" }}>
          {blogData.fields.title}
        </chakra.h1>

        <Text mt={2} fontWeight={600}>
          Bolu Abiola
        </Text>
        <Text>{dayjs(blogData.sys.createdAt).format("Do MMM YYYY")}</Text>

        <Box mt={5} w="100%" h="420px" pos="relative" borderWidth="1px">
          <Image
            alt={blogData.fields.title || ""}
            fill
            src={`${
              blogData.fields.cover ||
              "https://res.cloudinary.com/bolub/image/upload/v1623525073/Group_1_1.png"
            }`}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8lAYAAlABWjQf8LIAAAAASUVORK5CYII="
            style={{
              objectFit: "cover",
            }}
          />
        </Box>
      </Box>
    </CustomContainer>
  );
};
