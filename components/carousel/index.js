import React, { useState, useEffect, useCallback } from "react";
import { PrevButton, NextButton } from "./Buttons";
import { useEmblaCarousel } from "embla-carousel/react";
import { Box, Text, Flex, Image } from "@chakra-ui/react";

const EmblaCarousel = ({ data }) => {
  const [viewportRef, embla] = useEmblaCarousel({
    containScroll: "trimSnaps",
    dragFree: true,
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  const onScroll = useCallback(() => {
    if (!embla) return;
    const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
    setScrollProgress(progress * 100);
  }, [embla, setScrollProgress]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    onScroll();
    embla.on("select", onSelect);
    embla.on("scroll", onScroll);
  }, [embla, onSelect, onScroll]);

  return (
    <>
      <Box pos="relative">
        <Box className="embla__viewport" ref={viewportRef}>
          <div className="embla__container">
            {data.map((cd, index) => {
              return (
                <div className="embla__slide" key={index}>
                  <div className="embla__slide__inner">
                    <Image
                      display="block"
                      objectFit="cover"
                      src={cd?.imageLink}
                      alt="A cool cat."
                      h="380px"
                    />

                    <Text mt={5} fontWeight="bold">
                      {cd?.title}
                    </Text>

                    <Flex>
                      <Text my="auto">Stopped watching at {cd?.stoppedAt}</Text>
                      <Text
                        my="auto"
                        as="span"
                        bg="black"
                        borderRadius="full"
                        mx={2}
                        w="5px"
                        h="5px"
                      ></Text>
                      <Text my="auto">{cd?.totalEpisodes} episodes long</Text>
                    </Flex>
                  </div>
                </div>
              );
            })}
          </div>
        </Box>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </Box>
      {/* <div className='embla__progress'>
        <div
          className='embla__progress__bar'
          style={{ transform: `translateX(${scrollProgress}%)` }}
        />
      </div> */}
    </>
  );
};

export default EmblaCarousel;
