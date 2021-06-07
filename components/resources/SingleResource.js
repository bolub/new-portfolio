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
  Link,
  ModalCloseButton,
} from "@chakra-ui/react";

// icons
import { BiVideo, BiLink } from "react-icons/bi";
import { sliceAndReturn } from "../../utils/functions";

//
import LinkPreview from "@ashwamegh/react-link-preview";
import "@ashwamegh/react-link-preview/dist/index.css";

// recoil
import { useRecoilValue, useSetRecoilState } from "recoil";
import { linkToPreviewState } from "../../atoms/linkPreview";

// components
import CustomLinkPreview from "./CustomLinkPreview";

const SingleResource = ({ data }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // recoil
  const setLinkToPreview = useSetRecoilState(linkToPreviewState);
  const test = useRecoilValue(linkToPreviewState);
  console.log(test);

  return (
    <Flex
      height="180px"
      borderWidth="1px"
      borderRadius="lg"
      py={6}
      px={6}
      cursor="pointer"
      onClick={() => {
        onOpen();
        setLinkToPreview(data?.url);
      }}
      transition="all .2s"
      _hover={{ borderColor: "red.500" }}
      flexDir="column"
    >
      <chakra.h2 fontWeight="bold" fontSize="lg">
        📚 {data?.title}
      </chakra.h2>

      <Text mt={2}>
        <Text mt={2}>{sliceAndReturn(data?.description, 60)}</Text>
      </Text>

      <HStack ml="auto" mt="auto" spacing={1}>
        {/* <Button borderRadius="full" colorScheme="red" variant="ghost" p={1}>
          <BiVideo />
        </Button> */}

        {data?.url && (
          <Button borderRadius="full" colorScheme="red" variant="ghost" p={1}>
            <BiLink />
          </Button>
        )}
      </HStack>

      {/* modal */}
      <Modal size="lg" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent py={3}>
          <ModalHeader>📚 {data?.title}</ModalHeader>
          {/* <ModalCloseButton /> */}
          <ModalBody mt={2}>
            <Text mb={2}>{data?.description}</Text>

            <a href={data?.url} target="_blank">
              <LinkPreview
                render={CustomLinkPreview}
                width="100%"
                url={data?.url}
                onClick={() => {
                  alert("hello");
                }}
              />
            </a>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} variant="ghost" colorScheme="red">
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default SingleResource;
