import {
  chakra,
  Center,
  SimpleGrid,
  Box,
  HStack,
  Button,
} from '@chakra-ui/react';
import { generalPaddingX, maxi } from '../utils/chakra';
import AppliqaImage from './../public/Appliqa.jpg';
import SendchampImage from './../public/Sendchamp.jpeg';
import VimixImage from './../public/Vimix.jpeg';
import SprinbleImage from './../public/Sprinble.jpeg';
import DruzImage from './../public/Druz.jpeg';
import MyAgeImage from './../public/MyAge.jpeg';
import SingleProject from '../components/projects/SingleProject';
import KokuaImage from './../public/kokua.jpeg';
import SiegfriedImage from './../public/Siegfried2.jpeg';
import { useRouter } from 'next/router';

export const projectsData = [
  {
    title: 'Siegfried',
    description:
      'A platform to create personalized contracts and send them for quick and secure electronic signatures',
    imageUrl: SiegfriedImage,
    tags: [
      {
        id: 'design',
        name: 'UI/UX',
      },
      {
        id: 'web_development',
        name: 'Web development',
      },
      {
        id: 'personal',
        name: 'Personal',
      },
    ],
    url: 'https://siegfried.dev',
    sourceCode: 'https://github.com/bolub/siegfried',
  },
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
      {
        id: 'personal',
        name: 'Personal',
      },
    ],
    url: 'https://appliqa.net',
    sourceCode: 'https://github.com/bolub/appliqa',
    deignUrl:
      'https://www.figma.com/proto/WGWOb9CSpAAMbotlUk8xXf/Appliqa?page-id=1%3A4&node-id=63%3A1769&viewport=378%2C262%2C0.02&scaling=scale-down-width&starting-point-node-id=63%3A1769&show-proto-sidebar=1',
  },
  {
    title: 'Kokua',
    description:
      'Basically free programming resources for both frontend and backend develpooment 😇.',
    imageUrl: KokuaImage,
    tags: [
      {
        id: 'design',
        name: 'UI/UX',
      },
      {
        id: 'web_development',
        name: 'Web development',
      },
      {
        id: 'free_resources',
        name: 'Free resources',
      },
      {
        id: 'personal',
        name: 'Personal',
      },
    ],
    url: 'https://kokua.wiki',
    sourceCode: 'https://github.com/bolub/kokua-frontend',
    deignUrl:
      'https://www.figma.com/file/h4oC9OO52RapSVg4Bobewv/Kokua?node-id=84%3A5391&t=TJ6DsKTcJUBGhweR-4',
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
      {
        id: 'contract',
        name: 'Contract',
      },
    ],
    url: 'https://sendchamp.com',
    sourceCode: '',
    deignUrl: '',
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
      {
        id: 'contract',
        name: 'Contract',
      },
    ],
    url: 'https://vimix.ai',
    sourceCode: '',
    deignUrl:
      'https://www.figma.com/proto/SAQJGl1iZWmrAvOkvzzfuT/Vimix?page-id=1%3A2&node-id=672%3A220&starting-point-node-id=672%3A220&scaling=scale-down-width',
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
      {
        id: 'contract',
        name: 'Contract',
      },
    ],
    url: 'https://sprinble.com',
    sourceCode: '',
    deignUrl: '',
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
      {
        id: 'collaboration',
        name: 'Collaboration',
      },
    ],
    url: 'https://druz.xyz',
    sourceCode: '',
    deignUrl:
      'https://www.figma.com/proto/4x3UjygyLMkEpZN2eBZcX1/Druz?page-id=1%3A2&node-id=2%3A19&starting-point-node-id=2%3A19&scaling=scale-down-width',
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
      {
        id: 'personal',
        name: 'Personal',
      },
    ],
    url: 'http://myage.surge.sh/',
    sourceCode: 'https://github.com/bolub/MyAge',
    deignUrl: '',
  },
];

const projectTypes = [
  {
    label: 'All',
  },
  {
    label: 'Personal',
  },
  {
    label: 'Contract',
  },
  {
    label: 'Collaboration',
  },
];

const Projects = () => {
  const router = useRouter();
  const selectedProjectType = router.query.tab || 'All';

  const handleClick = (selected) => {
    router.push(`/projects?tab=${selected}`);
  };

  const filteredProjects = projectsData.filter((project) => {
    return project.tags.some((tag) => {
      return tag.name.toLowerCase() === selectedProjectType.toLowerCase();
    });
  });

  const projectsList =
    selectedProjectType === 'All' ? projectsData : filteredProjects;

  return (
    <>
      <chakra.section id='projects'>
        <Box px={generalPaddingX} maxW={maxi} py={{ base: '10' }} mx='auto'>
          <Center flexDir='column' textAlign={'center'} maxW='900px' mx='auto'>
            <chakra.h2
              mt={10}
              fontWeight={600}
              fontSize={{ base: '3xl', md: '4xl' }}
            >
              Some of the projects that has drained my energy
              <br /> over the years 😫...
            </chakra.h2>
          </Center>

          <HStack
            mx='auto'
            my={{ base: 10, md: 20 }}
            bg='brand.50'
            p={1}
            borderRadius='md'
            spacing={2}
            w='fit-content'
          >
            {projectTypes.map((pj) => {
              const isActive = pj.label === selectedProjectType;

              return (
                <Box key={pj.label}>
                  <Button
                    display={{ md: 'none' }}
                    size='sm'
                    onClick={() => {
                      handleClick(pj.label);
                    }}
                    colorScheme='brand'
                    variant={isActive ? 'solid' : 'ghost'}
                  >
                    {pj.label}
                  </Button>

                  <Button
                    display={{ base: 'none', md: 'inline-block' }}
                    onClick={() => {
                      handleClick(pj.label);
                    }}
                    colorScheme='brand'
                    variant={isActive ? 'solid' : 'ghost'}
                  >
                    {pj.label}
                  </Button>
                </Box>
              );
            })}
          </HStack>

          <SimpleGrid spacing={16} columns={{ base: 1, md: 2 }}>
            {projectsList?.map((pd) => {
              return <SingleProject key={pd.imageUrl} data={pd} />;
            })}
          </SimpleGrid>
        </Box>
      </chakra.section>
    </>
  );
};

export default Projects;
