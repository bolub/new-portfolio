import {
  Flex,
  HStack,
  chakra,
  useClipboard,
  Tooltip,
  useToast,
} from "@chakra-ui/react";

import {
  AiFillTwitterCircle,
  AiOutlineLink,
  AiOutlineWhatsApp,
  AiFillFacebook,
} from "react-icons/ai";
import CustomToastBody from "@/app/components/CustomToastBody";

const Share = () => {
  const toast = useToast();

  let urlToShare = "";

  if (typeof window !== "undefined") {
    // @ts-ignore
    urlToShare = window.location;
  }

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
        spacing={4}
        mt={{ base: 2, md: 0 }}
      >
        <Tooltip label="Copy link" aria-label="Copy link">
          <chakra.a
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
          >
            <AiOutlineLink />
          </chakra.a>
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
