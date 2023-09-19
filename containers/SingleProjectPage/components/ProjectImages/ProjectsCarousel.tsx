import { useRef } from "react";

import { AspectRatio, Box, chakra, useColorModeValue } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Image from "next/image";
import { CarouselButtons } from "./CarouselButtons";
import { getMediaType } from "../../../../utils/functions";
import { VideoPlayer } from "../../../../components/VideoPlayer";

const ChakraSwiperSlide = chakra(SwiperSlide);
const ChakraSwiper = chakra(Swiper);

export const ProjectsCarousel = ({ images }: { images: string[] }) => {
  const navigationPrevRef = useRef<any>(null);
  const navigationNextRef = useRef<any>(null);

  const boxBgColor = useColorModeValue("gray.200", "gray.700");

  return (
    <>
      <CarouselButtons
        prevRef={navigationPrevRef}
        nextRef={navigationNextRef}
      />

      {/* slider */}
      <Box width="100%">
        <Box
          borderRadius="12px"
          bgColor={boxBgColor}
          py={{ base: 6, md: "40px" }}
          px={{ base: 6, md: "46px" }}
        >
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            onInit={(swiper) => {
              //   @ts-ignore
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              //   @ts-ignore
              swiper.params.navigation.nextEl = navigationNextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
          >
            {images.map((assetData, index) => {
              const mediaType = getMediaType(assetData);

              return (
                <SwiperSlide key={index}>
                  <Box pos="relative" height="720px" width="100%">
                    {mediaType === "image" && (
                      <Image
                        src={assetData}
                        alt={assetData}
                        fill
                        style={{
                          objectFit: "cover",
                        }}
                      />
                    )}

                    {mediaType === "video" && (
                      <>
                        <AspectRatio ratio={1} height="720px">
                          <VideoPlayer src={assetData} />
                        </AspectRatio>
                      </>
                    )}
                  </Box>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Box>
      </Box>
    </>
  );
};
