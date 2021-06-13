// chakra
import { chakra, Text, HStack } from "@chakra-ui/react";

// utils
import { generalPaddingX } from "../../utils/chakra";

// components
import Link from "next/link";
import NavItems from "./NavItems";
import Banner from "./Banner";

const Navbar = () => {
  return (
    <>
      <Banner />
      <chakra.nav w="100%" height="10vh" d="flex" px={generalPaddingX}>
        <Link passHref href="/">
          <Text
            cursor="pointer"
            fontWeight={900}
            my="auto"
            fontSize="2xl"
            mr={5}
          >
            😎
          </Text>
        </Link>

        <HStack spacing={8} my="auto" ml="auto" overflowX="auto">
          <NavItems />
        </HStack>
      </chakra.nav>
    </>
  );
};

export default Navbar;
