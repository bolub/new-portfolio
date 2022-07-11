import { Box, chakra, Center, SimpleGrid, Wrap, Tag } from '@chakra-ui/react';
import { generalPaddingX } from '../utils/chakra';
import AppliqaImage from './../public/Appliqa.jpg';
import SendchampImage from './../public/Sendchamp.jpeg';
import VimixImage from './../public/Vimix.jpeg';
import SprinbleImage from './../public/Sprinble.jpeg';
import DruzImage from './../public/Druz.jpeg';
import MyAgeImage from './../public/MyAge.jpeg';
import Image from 'next/image';
import { defaultBrandColor } from '../chakra/colors';

export const projectsData = [
  {
    title: 'Appliqa',
    description:
      'A platform for tracking job application processes (Log interviews and tasks, make notes).',
    imageUrl: AppliqaImage,
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
    description:
      'A messaging platform for growing businesses across WhatsApp, SMS, email, and voice.',
    imageUrl: SendchampImage,
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
    description:
      'AI-powered social video platform for brands to generate customer video reviews, distribute on social media and analyze the impact on the engagement and revenue.',
    imageUrl: VimixImage,
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
    description: 'Software Development & Design Agency',
    imageUrl: SprinbleImage,
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
    description: 'A platform fpr receiving feedback from friends and family.',
    imageUrl: DruzImage,
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
    description: 'Simple age calculator',
    imageUrl: MyAgeImage,
    tags: [
      {
        id: 'Was bored and wanted to code',
        name: 'Was bored and wanted to code',
      },
    ],
    url: 'http://myage.surge.sh/',
  },
];

const Projects = () => {
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
            fontSize={{ base: '3xl', md: '4xl' }}
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
          {projectsData?.map((pd) => {
            return (
              <chakra.a
                target='_blank'
                href={pd.url}
                cursor='pointer'
                key={pd.imageUrl}
              >
                <Box
                  h={{ base: '300px', md: '500px' }}
                  bg={defaultBrandColor}
                  pos='relative'
                >
                  <Image
                    src={pd.imageUrl}
                    objectFit={'cover'}
                    layout='fill'
                    placeholder='blur'
                  />
                </Box>

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

                <chakra.p fontSize={'lg'} mt={3}>
                  {pd.description}
                </chakra.p>
              </chakra.a>
            );
          })}
        </SimpleGrid>
      </chakra.section>
    </>
  );
};

export default Projects;
