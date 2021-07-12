// react
import { useState, useEffect } from "react";

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
import { useRouter } from "next/router";

const NavItems = ({ hide, componentName, closeDrawer }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [saving, setSaving] = useState({
    start: false,
    loading: false,
    done: false,
  });

  // next router
  const { query, pathname } = useRouter();

  useEffect(() => {
    if (query.open === "playground") {
      onOpen();
    }
  }, [query]);
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
        window.location.href = window.location;
      }, 1000);
    }, 2000);
  };

  const allLinks = [
    {
      name: "Home",
      emoji: "🏠",
      href: "/",
      hide: hide === "home",
      mobile: true,
    },
    {
      name: "Blog",
      emoji: "✍️",
      href: "/blog",
      hide: hide === "blog",
      mobile: true,
    },
    {
      name: "Portfolio",
      emoji: "💼",
      href: "https://motionwares.com/p/bolub",
      hide: hide === "portfolio",
      mobile: true,
    },
    {
      name: "Contact",
      emoji: "☎️",
      href: "#footer",
      hide: hide === "contact",
      mobile: false,
    },
  ];

  const moreItems = [
    {
      name: "📚 Resources",
      href: "/resources",
      action: closeDrawer,
    },
    {
      name: "🍳 Cooking",
      href: "/cooking",
      action: closeDrawer,
    },
    {
      name: "🧰 Built with",
      href: "/built-with",
      action: closeDrawer,
    },
    {
      name: "🤾‍♂️ Playground",
      href: null,
      action: () => {
        // closeDrawer();
        onOpen();
      },
    },
  ];

  return (
    <>
      {allLinks?.map((linkData) => {
        if (linkData?.hide) return;

        const mobileHide = { base: "none", md: "inline-flex" };

        return (
          <CustomLink
            key={linkData?.name}
            fontSize={{ md: "md" }}
            display={linkData?.mobile === false && mobileHide}
            href={linkData?.href}
            onClick={() => {
              if (!closeDrawer) return;
              closeDrawer();
            }}
          >
            <Text as="span" mr={1}>
              {linkData?.emoji}
            </Text>
            {linkData?.name}
          </CustomLink>
        );
      })}

      <Box
      // d={componentName !== "footer" && { base: "none", md: "inline" }}
      >
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
              colorScheme="brand"
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
