// chakra
import { chakra, Text, HStack } from "@chakra-ui/react";

// utils
import { generalPaddingX } from "../../utils/chakra";

// components
import CustomLink from "../CustomLink";

const Navbar = () => {
  return (
    <chakra.nav w="100%" height="10vh" d="flex" px={generalPaddingX}>
      <Text fontWeight={900} my="auto" fontSize="2xl">
        🙂
      </Text>

      <HStack spacing={8} my="auto" ml="auto">
        <CustomLink href="/">Home</CustomLink>
        <CustomLink href="/blog">Blog</CustomLink>
        <CustomLink href="/portfolio">Portfolio</CustomLink>
        <CustomLink href="/cooking">Cooking</CustomLink>
      </HStack>
    </chakra.nav>
  );
};

export default Navbar;
