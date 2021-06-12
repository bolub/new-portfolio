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

const NavItems = ({ hide }) => {
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

  const allLinks = [
    {
      name: "🏠 Home",
      href: "/",
      hide: hide === "home",
    },
    {
      name: "✍️ Blog",
      href: "/blog",
      hide: hide === "blog",
    },
    {
      name: " 💼 Portfolio",
      href: "https://motionwares.com/p/bolub",
      hide: hide === "portfolio",
    },
    {
      name: "🍳 Cooking",
      href: "/cooking",
      hide: hide === "cooking",
    },
    {
      name: "☎️ Contact",
      href: "#footer",
      hide: hide === "contact",
    },
  ];

  return (
    <>
      {allLinks?.map((linkData) => {
        if (linkData?.hide) return;
        return (
          <CustomLink
            key={linkData?.name}
            fontSize={{ base: "sm", md: "md" }}
            href={linkData?.href}
          >
            {linkData?.name}
          </CustomLink>
        );
      })}

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
        🤾‍♂️ Playground
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
