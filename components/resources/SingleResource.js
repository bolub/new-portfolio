import React from "react";

// chakra
import {
  Flex,
  chakra,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  HStack,
  Button,
  useDisclosure,
  Box,
} from "@chakra-ui/react";

// icons
import { BiLink } from "react-icons/bi";
import { sliceAndReturn } from "../../utils/functions";

//
import LinkPreview from "@ashwamegh/react-link-preview";
import "@ashwamegh/react-link-preview/dist/index.css";

// recoil
import { useSetRecoilState } from "recoil";
import { linkToPreviewState } from "../../atoms/linkPreview";

// components
import CustomLinkPreview from "./CustomLinkPreview";
import TagList from "../UI/TagList";

const SingleResource = ({ data, layout }) => {
  console.log(data?.tags);
  const { isOpen, onOpen, onClose } = useDisclosure();

  // recoil
  const setLinkToPreview = useSetRecoilState(linkToPreviewState);
  // const test = useRecoilValue(linkToPreviewState);
  const isListLayout = layout === "list";
  return (
    <Flex
      height={!isListLayout && "auto"}
      borderWidth="1px"
      borderRadius="lg"
      pt={6}
      pb={isListLayout ? 8 : 2}
      px={6}
      cursor="pointer"
      onClick={() => {
        if (!isListLayout) {
          onOpen();
          setLinkToPreview(data?.url);
        } else {
          if (typeof window !== "undefined") {
            window.open(data?.url);
          }
        }
      }}
      transition="all .2s"
      _hover={{ borderColor: "brand.500" }}
      flexDir="column"
    >
      <chakra.h2 fontWeight="bold" fontSize="lg">
        📚 {data?.title}
      </chakra.h2>

      <Text mt={4} mb={isListLayout && 2}>
        {isListLayout ? (
          <>{data?.description}</>
        ) : (
          <>{sliceAndReturn(data?.description, 60)}</>
        )}
      </Text>

      {/* list of tags */}
      <Box mt={4} mb={isListLayout && 5}>
        <TagList data={data?.tags} />
      </Box>

      {isListLayout && (
        <a href={data?.url} target="_blank">
          <LinkPreview
            render={CustomLinkPreview}
            width="100%"
            url={data?.url}
          />
        </a>
      )}

      {!isListLayout && (
        <HStack ml="auto" mt="auto" spacing={1}>
          {/* <Button borderRadius="full" colorScheme="brand" variant="ghost" p={1}>
          <BiVideo />
        </Button> */}

          {data?.url && (
            <Button
              borderRadius="full"
              colorScheme="brand"
              variant="ghost"
              p={1}
            >
              <BiLink />
            </Button>
          )}
        </HStack>
      )}

      {/* modal */}
      <Modal size="lg" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent py={3}>
          <ModalHeader>📚 {data?.title}</ModalHeader>
          {/* <ModalCloseButton /> */}
          <ModalBody mt={2}>
            <Text mb={2}>{data?.description}</Text>

            <Box mt={4} mb={3}>
              <TagList data={data?.tags} />
            </Box>

            <a href={data?.url} target="_blank">
              <LinkPreview
                render={CustomLinkPreview}
                width="100%"
                url={data?.url}
              />
            </a>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} variant="ghost" colorScheme="brand">
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default SingleResource;
