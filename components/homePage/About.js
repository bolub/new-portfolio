import { Box, chakra, Center, SimpleGrid } from '@chakra-ui/react';
import Link from 'next/link';
import { projectsData } from '../../pages/projects';
import { generalPaddingX } from '../../utils/chakra';
import CustomButton from '../UI/CustomButton';
import SingleProject from '../projects/SingleProject';

const About = () => {
  return (
    <chakra.section
      px={generalPaddingX}
      id='about'
      borderTopWidth={{ base: '1px', md: 0 }}
      mt={{ base: 6, md: 20 }}
      pt={{ base: 6, md: 0 }}
      d='flex'
      flexDir={'column'}
    >
      <Center flexDir='column' textAlign={'center'} maxW='900px' mx='auto'>
        {/* <Text mt={5} fontSize='sm'>
          I apologize for this picture, couldn't find a better one (was too lazy
          to take a better one)
        </Text> */}

        <chakra.h2
          mt={5}
          fontWeight='bold'
          fontSize={{ base: '3xl', md: '5xl' }}
        >
          My Projects
        </chakra.h2>
      </Center>

      <SimpleGrid
        mt={{ base: 10, md: 20 }}
        spacing={16}
        columns={{ base: 1, md: 2 }}
      >
        {projectsData?.slice(0, 2)?.map((pd) => {
          return <SingleProject key={pd.imageUrl} data={pd} />;
        })}
      </SimpleGrid>

      <Link passHref href='/projects'>
        <CustomButton
          as={'a'}
          mt={24}
          h='60px'
          mx='auto'
          size='lg'
          variant='outline'
        >
          View All Projects
        </CustomButton>
      </Link>
    </chakra.section>
  );
};

export default About;
