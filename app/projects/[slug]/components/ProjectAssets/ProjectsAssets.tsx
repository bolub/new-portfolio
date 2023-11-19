"use client";

import { AspectRatio, Box, Flex, useColorModeValue } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Image from "next/image";
import { CarouselButtons } from "./CarouselButtons";
import { getMediaType } from "@/utils/functions";
import { VideoPlayer } from "@/app/components/VideoPlayer";

export const ProjectsAssets = ({ images }: { images: string[] }) => {
  const boxBgColor = useColorModeValue("gray.200", "gray.700");

  return (
    <Flex flexDir="column">
      <Box width="100%" borderRadius="32px">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CarouselButtons />

          {images.map((assetData, index) => {
            const mediaType = getMediaType(assetData);

            return (
              <SwiperSlide key={index}>
                <Box
                  borderWidth="1px"
                  // borderColor=
                  borderRadius="12px"
                  bgColor={boxBgColor}
                  py={{ base: 6, md: "40px" }}
                  px={{ base: 6, md: "46px" }}
                  position={"relative"}
                  pos="relative"
                  height="720px"
                  width="100%"
                >
                  {mediaType === "image" && (
                    <Image
                      src={assetData}
                      alt={assetData}
                      fill
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8lAYAAlABWjQf8LIAAAAASUVORK5CYII="
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
    </Flex>
  );
};
