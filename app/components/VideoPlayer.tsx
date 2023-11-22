import { Box, IconButton, chakra } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { BsPause, BsPlay } from "react-icons/bs";
import { useVideo } from "react-use";

export const VideoPlayer = ({ src }: { src: string }) => {
  const ref = useRef(null);

  const [video, state, controls] = useVideo(
    <chakra.video src={src} rounded="10px" />
  );

  const [showPlayIcon, setShowPlayIcon] = useState(true);

  return (
    <Box
      ref={ref}
      onMouseEnter={() => {
        setShowPlayIcon(true);
      }}
      onMouseLeave={() => {
        if (state.playing) {
          setShowPlayIcon(false);
        } else {
          setShowPlayIcon(true);
        }
      }}
      position="relative"
      maxW="500px"
      mx="auto"
    >
      {video}

      <chakra.button
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        zIndex={100}
        rounded="full"
        onClick={() => {
          if (state.playing) {
            controls.pause();
          } else {
            controls.play();
          }
        }}
        opacity={showPlayIcon ? 1 : 0}
        transition="opacity 0.2s"
      >
        {state.paused && (
          <>
            <IconButton
              aria-label="play"
              colorScheme="brand"
              borderRadius="full"
              boxSize="64px"
            >
              <BsPlay size="24px" />
            </IconButton>
          </>
        )}
        {state.playing && (
          <IconButton
            aria-label="pause"
            colorScheme="brand"
            borderRadius="full"
            boxSize="64px"
          >
            <BsPause size="24px" />
          </IconButton>
        )}
      </chakra.button>
    </Box>
  );
};
