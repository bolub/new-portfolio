import {
  Box,
  chakra,
  Wrap,
  Tag,
  Flex,
  HStack,
  IconButton,
  Tooltip,
  AspectRatio,
  Button,
} from '@chakra-ui/react';
import Image from 'next/image';
import {
  BsCodeSlash,
  BsBezier,
  BsLayoutTextWindowReverse,
} from 'react-icons/bs';
import { VideoPlayer } from '../VideoPlayer';
import CustomLink from '../UI/CustomLink';

const SingleProject = ({ data }: {
  data: any
}) => {

  return (
    <Box>
      {data.imageUrl && (
        <Box h={{ base: '300px', md: '500px' }} pos='relative'>
          <Image
            src={data.imageUrl}
            objectFit={'cover'}
            layout='fill'
            placeholder='blur'
            alt={data?.title}
          />
        </Box>
      )}

      {data.videoUrl && (
        <AspectRatio height={{ base: '300px', md: '500px' }} ratio={1}>
          <VideoPlayer src={data.videoUrl} />
        </AspectRatio>
      )}

      <Wrap display={{ base: 'flex', md: 'flex' }} mt={5}>
        {data.tags?.map((tag: {name: string; id: string}) => {
          return (
            <Tag
              key={tag?.id}
              cursor='pointer'
              colorScheme='brand'
              variant='subtle'
              borderRadius='full'
              size='md'
            >
              {tag?.name}
            </Tag>
          );
        })}
      </Wrap>

      <Flex mt={5}>
        <chakra.h3
          mt={2}
          fontWeight={'medium'}
          fontSize={{ base: 'xl', md: '2xl' }}
        >
          {data.title}
        </chakra.h3>

        <HStack ml='auto'>
          {data.deignUrl && (
            <Tooltip label='Design' aria-label='Design'>
              <IconButton
                as='a'
                href={data.deignUrl}
                target='_blank'
                aria-label='Deign'
                colorScheme={'brand'}
                variant='ghost'
              >
                <BsBezier />
              </IconButton>
            </Tooltip>
          )}

          {data.sourceCode && (
            <Tooltip label='Source Code' aria-label='Source Code'>
              <IconButton
                as='a'
                href={data.sourceCode}
                target='_blank'
                aria-label='Source Code'
                colorScheme={'brand'}
                variant='ghost'
              >
                <BsCodeSlash />
              </IconButton>
            </Tooltip>
          )}

          {data.url && (
            <Tooltip label='Live url' aria-label='Live url'>
              <IconButton
                as='a'
                href={data.url}
                target='_blank'
                aria-label='Live url'
                colorScheme={'brand'}
                variant='ghost'
              >
                <BsLayoutTextWindowReverse />
              </IconButton>
            </Tooltip>
          )}
        </HStack>
      </Flex>

      <chakra.p fontSize={'lg'} mt={3} mb={8}>
        {data.description}
      </chakra.p>

   

      <CustomLink href={`/projects/${data?.id}`} active>
        Read more
      </CustomLink>
    </Box>
  );
};

export default SingleProject;
