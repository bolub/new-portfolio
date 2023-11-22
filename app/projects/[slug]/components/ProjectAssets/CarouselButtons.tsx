import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { chakra, HStack } from "@chakra-ui/react";
import { useSwiper } from "swiper/react";

export const CarouselButtons = () => {
  const swiper = useSwiper();

  return (
    <HStack mb="24px" order={1} ml="auto">
      <chakra.button
        onClick={() => swiper.slidePrev()}
        bgColor="brand.500"
        color="white"
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
        onClick={() => swiper.slideNext()}
        bgColor="brand.500"
        color="white"
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
