import { Box } from "@chakra-ui/react";

import Image from "next/image";
import ProfileImage from "public/Bolu.png";

export const ImageDisplay = () => {
  return (
    <Box
      w={{ base: "100%", md: "40%" }}
      my={{ base: 10, md: "auto" }}
      display="flex"
      bg="white"
      ml={{ md: "auto" }}
      mr={{ md: 10 }}
    >
      <Box
        m="auto"
        h={{ base: "400px", md: "600px" }}
        w="full"
        borderWidth={"2px"}
        boxShadow={{
          base: `8px 8px 0px red`,
          md: `16px 16px 0px red`,
        }}
        pos="relative"
      >
        <Image
          alt="Boluwatife Abiola"
          fill
          objectFit="cover"
          placeholder="blur"
          src={ProfileImage}
        />
      </Box>
    </Box>
  );
};
