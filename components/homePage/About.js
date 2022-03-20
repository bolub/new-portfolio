import {
  Box,
  chakra,
  Avatar,
  Center,
  SimpleGrid,
  Image,
  Wrap,
  Tag,
} from '@chakra-ui/react';
import { generalPaddingX } from '../../utils/chakra';

const About = () => {
  const projects = [
    {
      title: 'Sendchamp',
      imageUrl: '/Sendchamp.jpeg',
      tags: [
        {
          id: 'marketing_website',
          name: 'Marketing Website',
        },
        {
          id: 'web_development',
          name: 'Web development',
        },
      ],
    },
    {
      title: 'Vimix',
      imageUrl: '/Vimix.jpeg',
      tags: [
        {
          id: 'design',
          name: 'UI/UX',
        },
        {
          id: 'dashboard',
          name: 'dashboard',
        },
      ],
    },
    {
      title: 'Sprinble',
      imageUrl: '/Sprinble.jpeg',
      tags: [
        {
          id: 'marketing_website',
          name: 'Marketing Website',
        },
        {
          id: 'web_development',
          name: 'Web development',
        },
      ],
    },
    {
      title: 'Druz',
      imageUrl: '/Druz.jpeg',
      tags: [
        {
          id: 'design',
          name: 'UI/UX',
        },
        {
          id: 'marketing_website',
          name: 'Marketing Website',
        },
        {
          id: 'dashboard',
          name: 'dashboard',
        },
      ],
    },
    {
      title: 'My Age Calculator',
      imageUrl: '/MyAge.jpeg',
      tags: [
        {
          id: 'marketing_website',
          name: 'Marketing Website',
        },
        {
          id: 'Was bored and wanted to code',
          name: 'Was bored and wanted to code',
        },
      ],
    },
  ];

  return (
    <chakra.section
      px={generalPaddingX}
      id='about'
      borderTopWidth={{ base: '1px', md: 0 }}
      mt={{ base: 6, md: 0 }}
      pt={{ base: 6, md: 0 }}
    >
      <Center flexDir='column' textAlign={'center'} maxW='900px' mx='auto'>
        {/* <Text mt={5} fontSize='sm'>
          I apologize for this picture, couldn't find a better one (was too lazy
          to take a better one)
        </Text> */}

        <chakra.h2
          mt={5}
          fontWeight={600}
          fontSize={{ base: '2xl', md: '3xl' }}
        >
          I design, I code, I test, ... that's it. Some of the projects that has
          drained my energy over the years 😫...
        </chakra.h2>
      </Center>

      <SimpleGrid
        mt={{ base: 10, md: 24 }}
        spacing={16}
        columns={{ base: 1, md: 2 }}
      >
        {projects?.map((pd) => {
          return (
            <Box cursor='pointer'>
              <Image
                src={pd.imageUrl}
                h={{ md: '500px' }}
                objectFit={'cover'}
              />

              <Wrap d={{ base: 'flex', md: 'flex' }} mt={5}>
                {pd.tags?.map((tag) => {
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

              <chakra.h3
                fontWeight={'medium'}
                fontSize={{ base: '2xl', md: '3xl' }}
              >
                {pd.title}
              </chakra.h3>
            </Box>
          );
        })}
      </SimpleGrid>
    </chakra.section>
  );
};

export default About;
