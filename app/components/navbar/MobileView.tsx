import {
  Text,
  HStack,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack,
  Tooltip,
} from "@chakra-ui/react";
import NavItems from "../NavItems";
import { useRef } from "react";

export const MobileView = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Tooltip label="Menu" aria-label="Menu">
        <HStack ml="auto" display={{ base: "flex", md: "none" }}>
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
            // @ts-ignore
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
        // @ts-ignore
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
    </>
  );
};
