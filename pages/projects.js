import { chakra, Center, SimpleGrid } from '@chakra-ui/react';
import { generalPaddingX } from '../utils/chakra';
import AppliqaImage from './../public/Appliqa.jpg';
import SendchampImage from './../public/Sendchamp.jpeg';
import VimixImage from './../public/Vimix.jpeg';
import SprinbleImage from './../public/Sprinble.jpeg';
import DruzImage from './../public/Druz.jpeg';
import MyAgeImage from './../public/MyAge.jpeg';
import SingleProject from '../components/projects/SingleProject';

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
    sourceCode: 'https://github.com/bolub/appliqa',
    deignUrl:
      'https://www.figma.com/proto/WGWOb9CSpAAMbotlUk8xXf/Appliqa?page-id=1%3A4&node-id=63%3A1769&viewport=378%2C262%2C0.02&scaling=scale-down-width&starting-point-node-id=63%3A1769&show-proto-sidebar=1',
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
    ],
    url: 'http://myage.surge.sh/',
    sourceCode: 'https://github.com/bolub/MyAge',
    deignUrl: '',
  },
];

const Projects = () => {
  return (
    <>
      <chakra.section px={generalPaddingX} id='projects' py={{ base: '10' }}>
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

        <SimpleGrid
          mt={{ base: 10, md: 24 }}
          spacing={16}
          columns={{ base: 1, md: 2 }}
        >
          {projectsData?.map((pd) => {
            return <SingleProject key={pd.imageUrl} data={pd} />;
          })}
        </SimpleGrid>
      </chakra.section>
    </>
  );
};

export default Projects;
