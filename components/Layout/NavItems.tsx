import { useState, useEffect } from "react";

import {
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Text,
} from "@chakra-ui/react";

import CustomLink from "../UI/CustomLink";
import Playground from "./Playground";
import { useRouter } from "next/router";

const NavItems = ({
  hide,
  closeDrawer,
}: {
  hide?: "home" | "projects" | "blog" | "resources" | "contact";
  closeDrawer?: () => void;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [saving, setSaving] = useState({
    start: false,
    loading: false,
    done: false,
  });

  // next router
  const { query } = useRouter();

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
        // @ts-ignore
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
      isExternal: false,
    },
    {
      name: "Projects",
      emoji: "🔨",
      href: "/projects",
      hide: hide === "projects",
      mobile: true,
      isExternal: false,
    },
    {
      name: "Blog",
      emoji: "✍️",
      href: "/blog",
      hide: hide === "blog",
      mobile: true,
      isExternal: false,
    },

    {
      name: "Resources",
      emoji: "📚",
      href: "https://www.kokua.wiki/",
      hide: hide === "resources",
      mobile: true,
      isExternal: true,
    },
    {
      name: "Built with",
      emoji: "🧰",
      href: "/built-with",
      hide: hide === "resources",
      mobile: true,
      isExternal: false,
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
            fontSize={{ md: "18px" }}
            display={linkData?.mobile === false && mobileHide}
            href={linkData?.href}
            onClick={() => {
              if (!closeDrawer) return;
              closeDrawer();
            }}
            isExternal={linkData?.isExternal}
          >
            <Text as="span" mr={1}>
              {linkData?.emoji}
            </Text>
            {linkData?.name}
          </CustomLink>
        );
      })}

      <Modal
        closeOnOverlayClick={false}
        size="lg"
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent py={3}>
          <ModalHeader>👾 Playground</ModalHeader>

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
