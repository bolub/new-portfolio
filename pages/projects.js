import {
  Box,
  chakra,
  Center,
  SimpleGrid,
  Image,
  Wrap,
  Tag,
} from '@chakra-ui/react';
import { generalPaddingX } from '../utils/chakra';

const About = () => {
  const projects = [
    {
      title: 'Appliqa',
      imageUrl: '/Appliqa.png',
      tags: [
        {
          id: 'design',
          name: 'UI/UX',
        },
        {
          id: 'web_development',
          name: 'Web development',
        },
      ],
      url: 'https://appliqa.net',
    },
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
      url: 'https://sendchamp.com',
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
      url: 'https://www.figma.com/proto/SAQJGl1iZWmrAvOkvzzfuT/Vimix?page-id=1%3A2&node-id=672%3A220&starting-point-node-id=672%3A220&scaling=scale-down-width',
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
      url: 'https://sprinble.com',
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
      url: 'https://druz.xyz',
    },
    {
      title: 'My Age Calculator',
      imageUrl: '/MyAge.jpeg',
      tags: [
        {
          id: 'Was bored and wanted to code',
          name: 'Was bored and wanted to code',
        },
      ],
      url: 'http://myage.surge.sh/',
    },
  ];

  return (
    <>
      <chakra.section px={generalPaddingX} id='projects' py={{ base: '10' }}>
        <Center flexDir='column' textAlign={'center'} maxW='900px' mx='auto'>
          {/* <Text mt={5} fontSize='sm'>
          I apologize for this picture, couldn't find a better one (was too lazy
          to take a better one)
        </Text> */}

          <chakra.h2
            mt={10}
            fontWeight={600}
            fontSize={{ base: '2xl', md: '3xl' }}
          >
            Some of the projects that has drained my energy
            <br /> over the years 😫...
          </chakra.h2>
        </Center>

        <SimpleGrid
          mt={{ base: 10, md: 24 }}
          spacing={16}
          columns={{ base: 1, md: 2 }}
        >
          {projects?.map((pd) => {
            return (
              <chakra.a
                target='_blank'
                href={pd.url}
                cursor='pointer'
                key={pd.imageUrl}
              >
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
                  mt={2}
                  fontWeight={'medium'}
                  fontSize={{ base: 'xl', md: '2xl' }}
                >
                  {pd.title}
                </chakra.h3>
              </chakra.a>
            );
          })}
        </SimpleGrid>
      </chakra.section>
    </>
  );
};

export default About;
