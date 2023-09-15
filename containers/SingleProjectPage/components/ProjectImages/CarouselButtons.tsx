import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { chakra, HStack } from "@chakra-ui/react";

export const CarouselButtons = ({
  prevRef,
  nextRef,
}: {
  prevRef: any;
  nextRef: any;
}) => {
  return (
    <HStack ml="auto" mb="24px">
      <chakra.button
        ref={prevRef}
        bgColor="gray.100"
        aria-label="prev"
        rounded="full"
        boxSize="35px"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <HiOutlineChevronLeft fontSize="18px" strokeWidth={"2"} />
      </chakra.button>

      <chakra.button
        ref={nextRef}
        bgColor="gray.100"
        aria-label="next"
        rounded="full"
        boxSize="35px"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <HiOutlineChevronRight fontSize="18px" strokeWidth={"2"} />
      </chakra.button>
    </HStack>
  );
};
