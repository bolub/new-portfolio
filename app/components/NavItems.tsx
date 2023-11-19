"use client";

import { useState } from "react";

import {
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { routes } from "@/utils/routes";

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
      href: routes.blogPost.home(),
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
    // {
    //   name: "Built with",
    //   emoji: "🧰",
    //   href: "/built-with",
    //   hide: hide === "resources",
    //   mobile: true,
    //   isExternal: false,
    // },
  ];

  const pathname = usePathname();

  return (
    <>
      {allLinks?.map((linkData) => {
        if (linkData?.hide) return;

        const isActive = linkData.href === pathname;

        return (
          <ChakraLink
            as={Link}
            key={linkData.name}
            color={isActive ? "brand.500" : ""}
            borderBottomColor={isActive ? "brand.500" : ""}
            fontWeight={isActive ? 600 : ""}
            fontSize={{ md: "18px" }}
            href={linkData.href}
            onClick={() => {
              if (!closeDrawer) return;
              closeDrawer();
            }}
            isExternal={linkData?.isExternal}
          >
            <Text as="span" mr={1}>
              {linkData?.emoji}
            </Text>
            {linkData.name}
          </ChakraLink>
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

          {/* <ModalBody mt={2}>
            <Playground saving={saving} />
          </ModalBody> */}

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
