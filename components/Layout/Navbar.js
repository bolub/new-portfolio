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
} from "@chakra-ui/react";

// utils
import { generalPaddingX } from "../../utils/chakra";

// components
import Link from "next/link";
import NavItems from "./NavItems";
import Banner from "./Banner";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

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

        {/* Desktop view */}
        <HStack
          d={{ base: "none", md: "flex" }}
          spacing={8}
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

            <DrawerBody d="flex">
              <VStack spacing={10} m="auto">
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
      </chakra.nav>
    </>
  );
};

export default Navbar;
