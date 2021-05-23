// chakra
import { chakra, Text, HStack } from "@chakra-ui/react";

// utils
import { generalPaddingX } from "../../utils/chakra";

// components
import CustomLink from "../UI/CustomLink";

const Navbar = () => {
  return (
    <chakra.nav w="100%" height="10vh" d="flex" px={generalPaddingX}>
      <Text fontWeight={900} my="auto" fontSize="2xl" mr={5}>
        🙂
      </Text>

      <HStack spacing={8} my="auto" ml="auto" overflowX="auto">
        <CustomLink fontSize={{ base: "sm", md: "md" }} href="/">
          Home
        </CustomLink>
        <CustomLink fontSize={{ base: "sm", md: "md" }} href="/blog">
          Blog
        </CustomLink>
        <CustomLink fontSize={{ base: "sm", md: "md" }} href="/portfolio">
          Portfolio
        </CustomLink>
        <CustomLink fontSize={{ base: "sm", md: "md" }} href="/cooking">
          Cooking
        </CustomLink>
      </HStack>
    </chakra.nav>
  );
};

export default Navbar;
