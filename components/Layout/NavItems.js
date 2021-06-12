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
  Box,
  Text,
  Flex,
} from "@chakra-ui/react";

// icons
// import { HiOutlineDotsHorizontal } from "react-icons/hi";

// components
import CustomLink from "../UI/CustomLink";
import Playground from "./Playground";
import CustomMenu from "../UI/CustomMenu";

const NavItems = ({ hide, componentName }) => {
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

  const allLinks = [
    {
      name: "Home",
      emoji: "🏠",
      href: "/",
      hide: hide === "home",
    },
    {
      name: "Blog",
      emoji: "✍️",
      href: "/blog",
      hide: hide === "blog",
    },
    {
      name: "Portfolio",
      emoji: "💼",
      href: "https://motionwares.com/p/bolub",
      hide: hide === "portfolio",
    },
    {
      name: "Contact",
      emoji: "☎️",
      href: "#footer",
      hide: hide === "contact",
    },
  ];

  const moreItems = [
    {
      name: "📚 Resources",
      href: "/resources",
    },
    {
      name: "🍳 Cooking",
      href: "/cooking",
    },
    {
      name: "🤾‍♂️ Playground",
      href: null,
      action: onOpen,
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
            <Text as="span" mr={1}>
              {linkData?.emoji}
            </Text>
            {linkData?.name}
          </CustomLink>
        );
      })}

      <Box d={componentName !== "footer" && { base: "none", md: "inline" }}>
        <CustomMenu
          title={
            <Flex d="inline-flex">
              <Text as="span" mr={1}>
                🔗
              </Text>{" "}
              More
            </Flex>
          }
          items={moreItems}
        />
      </Box>

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
