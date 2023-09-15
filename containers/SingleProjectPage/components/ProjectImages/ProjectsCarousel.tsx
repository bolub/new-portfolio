import { useRef } from "react";

import { Box, chakra } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Image from "next/image";
import { CarouselButtons } from "./CarouselButtons";

const ChakraSwiperSlide = chakra(SwiperSlide);
const ChakraSwiper = chakra(Swiper);

export const ProjectsCarousel = ({ images }: { images: string[] }) => {
  const navigationPrevRef = useRef<any>(null);
  const navigationNextRef = useRef<any>(null);

  return (
    <>
      <CarouselButtons
        prevRef={navigationPrevRef}
        nextRef={navigationNextRef}
      />

      {/* slider */}
      <Box width="100%">
        <ChakraSwiper
          borderRadius="12px"
          bgColor="rgba(0, 0, 0, 0.06)"
          py={{ base: 6, md: "40px" }}
          px={{ base: 6, md: "46px" }}
          spaceBetween={80}
          slidesPerView={1}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onInit={(swiper) => {
            //   @ts-ignore
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            //   @ts-ignore
            swiper.params.navigation.nextEl = navigationNextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          {images.map((imgData, index) => {
            return (
              <ChakraSwiperSlide
                key={index}
                pos="relative"
                height="680px"
                width="100%"
              >
                <Image
                  src={imgData}
                  alt={imgData}
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                />
              </ChakraSwiperSlide>
            );
          })}
        </ChakraSwiper>
      </Box>
    </>
  );
};
