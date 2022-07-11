import {
  Box,
  chakra,
  Wrap,
  Tag,
  Flex,
  HStack,
  IconButton,
  Tooltip,
} from '@chakra-ui/react';
import Image from 'next/image';
import { defaultBrandColor } from '../../chakra/colors';
import {
  BsCodeSlash,
  BsBezier,
  BsLayoutTextWindowReverse,
} from 'react-icons/bs';

const SingleProject = ({ data }) => {
  return (
    <chakra.a target='_blank' href={data.url} cursor='pointer'>
      <Box h={{ base: '300px', md: '500px' }} pos='relative'>
        <Image
          src={data.imageUrl}
          objectFit={'cover'}
          layout='fill'
          placeholder='blur'
        />
      </Box>

      <Wrap d={{ base: 'flex', md: 'flex' }} mt={5}>
        {data.tags?.map((tag) => {
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

      <Flex>
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

      <chakra.p fontSize={'lg'} mt={3}>
        {data.description}
      </chakra.p>
    </chakra.a>
  );
};

export default SingleProject;
