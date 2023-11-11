import { Text, chakra, Wrap, Box, Center } from "@chakra-ui/react";
import { generalPaddingX, maxi } from "../../utils/chakra";
import NavItems from "./NavItems";

import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";

const Footer = () => {
  return (
    <chakra.footer id="footer" mt={80} borderTopWidth="1px" py="80px">
      <Center flexDir="column" px={generalPaddingX} maxW={maxi} w="full">
        <Wrap flexDir={{ base: "column", md: "row" }} spacing={16}>
          <NavItems hide="contact" />
        </Wrap>

        <Wrap my="60px" fontSize="2xl" color="brand.500" spacing={10}>
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

        <Box>
          <Text fontSize="xs">
            &copy; {new Date().getFullYear()} Boluwatife Abiola, All rights
            reserved
          </Text>
        </Box>
      </Center>
    </chakra.footer>
  );
};

export default Footer;
