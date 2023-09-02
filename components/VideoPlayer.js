import { Box, IconButton, chakra } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import {
  BsFullscreen,
  BsFullscreenExit,
  BsPause,
  BsPlay,
} from 'react-icons/bs';
import { useVideo } from 'react-use';
import { useFullscreen, useToggle } from 'react-use';

export const VideoPlayer = ({ src }) => {
  const ref = useRef(null);

  // video controls
  const [video, state, controls] = useVideo(<video src={src} />);

  // fullscreen controls
  const [show, toggle] = useToggle(false);
  const isFullscreen = useFullscreen(ref, show, {
    onClose: () => toggle(false),
  });

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
      position='relative'
    >
      {video}

      <IconButton
        colorScheme='brand'
        size='sm'
        position='absolute'
        top={3}
        right={3}
        onClick={toggle}
        opacity={showPlayIcon ? 1 : 0}
      >
        {isFullscreen ? (
          <BsFullscreenExit size='20px' />
        ) : (
          <BsFullscreen size='20px' />
        )}
      </IconButton>

      <chakra.button
        variant='unstyled'
        position='absolute'
        top='50%'
        left='50%'
        transform='translate(-50%, -50%)'
        zIndex={100}
        rounded='full'
        onClick={() => {
          if (state.playing) {
            controls.pause();
          } else {
            controls.play();
          }
        }}
        opacity={showPlayIcon ? 1 : 0}
        transition='opacity 0.2s'
      >
        {state.paused && (
          <IconButton colorScheme='brand' borderRadius='full' boxSize='64px'>
            <BsPlay size='24px' />
          </IconButton>
        )}
        {state.playing && (
          <IconButton colorScheme='brand' borderRadius='full' boxSize='64px'>
            <BsPause size='24px' />
          </IconButton>
        )}
      </chakra.button>
    </Box>
  );
};
