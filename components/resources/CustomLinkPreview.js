// chakra
import { Box, Image, chakra, Center } from "@chakra-ui/react";

// icons
import { BiDotsHorizontalRounded } from "react-icons/bi";

// recoil
// import { useRecoilValue } from "recoil";
// import { linkToPreviewState } from "../../atoms/linkPreview";

const CustomLinkPreview = ({ loading, preview }) => {
  return (
    <Box
      w="100%"
      p={2}
      isExternal
      borderWidth="1px"
      borderRadius="lg"
      d="flex"
      flexDir="column"
    >
      {loading && (
        <Center m="auto" py={4}>
          <BiDotsHorizontalRounded />
        </Center>
      )}

      {!loading && (
        <>
          <Box pos="relative">
            <Image
              height="200px"
              width="100%"
              src={preview?.img}
              alt={preview?.title}
              fallbackSrc="https://res.cloudinary.com/bolub/image/upload/v1623525073/Group_1_1.png"
              objectFit="cover"
              borderRadius="md"
              borderWidth="1px"
              borderRadius="lg"
            />

            {/* <CloseButton pos="absolute" right={2} top={2} variant="solid" /> */}
          </Box>

          <chakra.h2 fontWeight="bold" mt={2} fontSize="15px" color="brand.500">
            {preview.title}
          </chakra.h2>
          <chakra.h3 mt={1} fontSize="14px">
            {preview.description}
          </chakra.h3>
        </>
      )}
    </Box>
  );
};

export default CustomLinkPreview;
