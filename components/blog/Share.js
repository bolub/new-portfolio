import React from "react";

// chakra
import {
  Flex,
  Text,
  HStack,
  chakra,
  useClipboard,
  Tooltip,
  useToast,
  Box,
  CloseButton,
} from "@chakra-ui/react";

// icons
import {
  AiFillTwitterCircle,
  AiOutlineLink,
  AiOutlineWhatsApp,
  AiFillFacebook,
} from "react-icons/ai";
import CustomToastBody from "../UI/CustomToastBody";

const Share = () => {
  // chakra toast
  const toast = useToast();

  let urlToShare = "";

  if (typeof window !== "undefined") {
    urlToShare = window.location;
  }

  //  url
  const { onCopy } = useClipboard(urlToShare);

  return (
    <Flex borderTopWidth="1px" borderBottomWidth="1px" mt={12} py={4}>
      <chakra.h2 my="auto" fontWeight="bold">
        🤝 Share
      </chakra.h2>

      <HStack
        my="auto"
        fontSize="2xl"
        color="brand.500"
        ml="auto"
        // mx={{ base: "auto", md: "" }}
        spacing={4}
        mt={{ base: 2, md: 0 }}
      >
        <Tooltip label="Copy link" aria-label="Copy link">
          <chakra.p
            onClick={() => {
              onCopy();
              toast({
                duration: 9000,
                isClosable: true,
                position: "bottom-left",
                render: () => (
                  <CustomToastBody message="Copied!" toast={toast} />
                ),
              });
            }}
            cursor="pointer"
            href={`https://www.facebook.com/sharer/sharer.php?u=${urlToShare}`}
          >
            <AiOutlineLink />
          </chakra.p>
        </Tooltip>

        {/* facebook */}
        <chakra.a
          target="__blank"
          cursor="pointer"
          href={`https://www.facebook.com/sharer/sharer.php?u=${urlToShare}`}
        >
          <AiFillFacebook />
        </chakra.a>

        {/* whatsapp */}
        <chakra.a
          target="__blank"
          cursor="pointer"
          href={`http://wa.me/?text=Checkout this blog post ${urlToShare}`}
        >
          <AiOutlineWhatsApp />
        </chakra.a>

        {/* twitter */}
        <chakra.a
          target="__blank"
          cursor="pointer"
          href={`http://twitter.com/share?text=Checkout this blog post&url=${urlToShare}`}
        >
          <AiFillTwitterCircle />
        </chakra.a>
      </HStack>
    </Flex>
  );
};

export default Share;
