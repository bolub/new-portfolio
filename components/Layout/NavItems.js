// react
import { useState } from "react";

// chakra
import {
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useColorMode,
} from "@chakra-ui/react";

// components
import CustomLink from "../UI/CustomLink";
import CustomButton from "../UI/CustomButton";
import Playground from "./Playground";

const NavItems = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [saving, setSaving] = useState({
    start: false,
    loading: false,
    done: false,
  });

  const closeModal = () => {
    setSaving({
      start: true,
      loading: true,
      done: false,
    });

    setTimeout(() => {
      setSaving({
        start: true,
        loading: false,
        done: true,
      });

      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }, 2000);
  };

  const { colorMode } = useColorMode();

  return (
    <>
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

      <CustomButton
        fontSize={{ base: "sm", md: "md" }}
        borderBottom="1.3px solid #c4c4c4"
        color={colorMode === "light" ? "gray.900" : "white"}
        fontWeight="400"
        height="auto"
        px={0}
        pb={1}
        onClick={onOpen}
        d="inline-block"
        w="auto"
      >
        Playground
      </CustomButton>

      <Modal
        closeOnOverlayClick={false}
        size="lg"
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent py={3}>
          <ModalHeader>👾 Playground</ModalHeader>
          {/* <ModalCloseButton
            onClick={() => {
              closeModal();
            }}
          /> */}
          <ModalBody mt={2}>
            <Playground saving={saving} />
          </ModalBody>

          <ModalFooter>
            <Button
              onClick={() => {
                closeModal();
              }}
              variant="ghost"
              colorScheme="red"
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default NavItems;
