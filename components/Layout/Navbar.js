import { useRef } from "react";

// chakra
import {
  chakra,
  Text,
  HStack,
  Button,
  Tooltip,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack,
  Box,
  Link as ChakraLink,
} from "@chakra-ui/react";

// utils
import { generalPaddingX, maxi } from "../../utils/chakra";
import { defaultBrandColor } from "../../chakra/colors";

// components
import Link from "next/link";
import NavItems from "./NavItems";

// import Banner from "./Banner";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      {/* <Banner /> */}
      <chakra.nav borderTop={`4px solid ${defaultBrandColor}`} w="100%">
        <Box
          display="flex"
          w="100%"
          height="10vh"
          px={generalPaddingX}
          maxW={maxi}
          mx="auto"
        >
          <Box my="auto" mr={5}>
            <Link href="/">
              <Text cursor="pointer" fontWeight={900} fontSize="2xl">
                😎
              </Text>
            </Link>
          </Box>

          {/* Desktop view */}
          <HStack
            d={{ base: "none", md: "flex" }}
            spacing={10}
            my="auto"
            ml="auto"
            overflowX="auto"
          >
            <NavItems />
          </HStack>

          {/* Mobile view */}
          <Tooltip label="Menu" aria-label="Menu">
            <HStack ml="auto" d={{ base: "flex", md: "none" }}>
              <a href="#footer">
                <Button
                  ml="auto"
                  colorScheme="brand"
                  variant="ghost"
                  p={1}
                  borderRadius="md"
                  my="auto"
                >
                  <Text>☎️</Text>
                </Button>
              </a>

              <Button
                colorScheme="brand"
                variant="ghost"
                p={1}
                borderRadius="md"
                my="auto"
                fontSize="lg"
                ref={btnRef}
                onClick={onOpen}
              >
                <Text>🍔</Text>
              </Button>
            </HStack>
          </Tooltip>

          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />

              <DrawerBody display="flex">
                <VStack spacing={12} m="auto">
                  <NavItems closeDrawer={onClose} />
                </VStack>
              </DrawerBody>

              <DrawerFooter border="none">
                <Button variant="outline" onClick={onClose}>
                  Close
                </Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </Box>
      </chakra.nav>
    </>
  );
};

export default Navbar;
