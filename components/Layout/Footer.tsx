import React from "react";

import { Text, chakra, Wrap, Box } from "@chakra-ui/react";
import { generalPaddingX, maxi } from "../../utils/chakra";
import Link from "next/link";
import NavItems from "./NavItems";

// icons
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";

const Footer = () => {
  return (
    <chakra.footer mt={20} borderTopWidth="1px" py={5} display="footer">
      <Box
        display="flex"
        flexDir={{ base: "column", md: "row" }}
        px={generalPaddingX}
        maxW={maxi}
        w="full"
      >
        <Link passHref href="/">
          <Text
            my={{ md: "auto" }}
            cursor="pointer"
            fontWeight={900}
            fontSize="2xl"
            mr={{ md: 10 }}
          >
            😎
          </Text>
        </Link>

        {/* Navigation */}
        <Wrap
          flexDir={{ base: "column", md: "row" }}
          my={{ base: 5, md: "auto" }}
          spacing={5}
          mr={{ md: 8 }}
          ml="auto"
        >
          <NavItems hide="contact" />
        </Wrap>

        {/* Social */}
        <Wrap
          fontSize="2xl"
          color="brand.500"
          ml={{ md: "auto" }}
          spacing={4}
          my="auto"
        >
          <chakra.a href="https://github.com/bolub/">
            <AiFillGithub />
          </chakra.a>

          <chakra.a href="https://www.linkedin.com/in/boluseyi">
            <AiFillLinkedin />
          </chakra.a>

          <chakra.a href="https://twitter.com/boluwatifeabio1">
            <AiFillTwitterCircle />
          </chakra.a>
          <chakra.a href="mailto:abiol5202@gmail.com">
            <AiOutlineMail />
          </chakra.a>
          <chakra.a href="tel:+358415737806">
            <AiOutlinePhone />
          </chakra.a>
        </Wrap>
      </Box>
    </chakra.footer>
  );
};

export default Footer;
