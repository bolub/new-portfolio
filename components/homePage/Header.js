import Image from 'next/image';

// chakra
import { Box, Flex, chakra, Text } from '@chakra-ui/react';

// utils
import { generalPaddingX } from '../../utils/chakra';
import CustomButton from '../UI/CustomButton';
import { defaultBrandColor } from '../../chakra/colors';
import Profile from './../../public/Bolu.png';

const Header = () => {
  return (
    <chakra.header
      h={{ base: '100%', md: '90vh' }}
      d='flex'
      py={{ base: '10', md: 0 }}
    >
      <Flex
        w='100%'
        flexDir={{ base: 'column', md: 'row' }}
        px={generalPaddingX}
      >
        <Box w={{ base: '100%', md: '45%' }} my='auto'>
          <chakra.h1
            fontWeight={'700'}
            lineHeight={'70px'}
            fontSize={{ base: '5xl', md: '7xl' }}
          >
            I design and <br />
            Build Stuff
          </chakra.h1>
          <Text
            mt={{ base: 6, md: 10 }}
            mb={6}
            fontSize={{ base: 'lg', md: 'xl' }}
          >
            Hi{' '}
            <Text as='span' fontWeight={'semibold'}>
              {' '}
              I'm Boluwatife Abiola
            </Text>{' '}
            (My friends call me bolu), and welcome to my online cave.
          </Text>
          <Text mb={16} fontSize={{ base: 'lg', md: 'xl' }}>
            Honestly doing this was a pain, but still did it anyways, gotta have
            an online presence and all.
          </Text>

          <CustomButton
            as='a'
            href='https://www.linkedin.com/in/abiola-boluwatife-2569a915b/details/skills/'
            mb={10}
            target='__blank'
            size='lg'
            h={'60px'}
          >
            <Text as='span' ml={2}>
              Checkout My Resume
            </Text>
          </CustomButton>
        </Box>

        {/* Illustration */}
        <Box
          w={{ base: '100%', md: '40%' }}
          my={{ base: 10, md: 'auto' }}
          d='flex'
          bg='white'
          ml={{ md: 'auto' }}
          mr={{ md: 10 }}
        >
          <Box
            m='auto'
            h={{ base: '400px', md: '600px' }}
            w='full'
            borderWidth={'2px'}
            boxShadow={{
              base: `8px 8px 0px ${defaultBrandColor}`,
              md: `16px 16px 0px ${defaultBrandColor}`,
            }}
            pos='relative'
          >
            <Image
              layout='fill'
              objectFit='cover'
              placeholder='blur'
              src={Profile}
            />
          </Box>
        </Box>
      </Flex>
    </chakra.header>
  );
};

export default Header;
