// chakra
import { Box, Flex, chakra, Text, Avatar, Image } from '@chakra-ui/react';

// utils
import { generalPaddingX } from '../../utils/chakra';
import CustomButton from '../UI/CustomButton';
import CustomLink from '../UI/CustomLink';

const Header = () => {
  return (
    <chakra.header
      h={{ base: '100%', md: '90vh' }}
      // alignItems='center'
      d='flex'
      py={{ base: '10', md: 0 }}
    >
      <Flex
        w='100%'
        flexDir={{ base: 'column', md: 'row' }}
        px={generalPaddingX}
      >
        <Box w={{ base: '100%', md: '45%' }} my='auto'>
          <chakra.h1 fontWeight={700} fontSize={{ base: '3xl', md: '4xl' }}>
            Hello, I'm
            <Text as='span' color='brand.500'>
              {' '}
              Bolu
            </Text>
          </chakra.h1>
          <Text mt={4} mb={6} fontSize='17px'>
            Welcome to my ......., well you know.
          </Text>
          <Text mb={6} fontSize='17px'>
            Honestly doing this was a pain, but still did it anyways, gotta have
            an online presence and all
          </Text>
          <Text mb={6} fontSize='17px'>
            Gonna be doing a bit of{' '}
            <CustomLink active href='/blog'>
              blogging
            </CustomLink>
            , probably{' '}
            <CustomLink active href='/cooking'>
              cooking
            </CustomLink>
            , adding{' '}
            <CustomLink active href='/resources'>
              useful stuff
            </CustomLink>
            , and also uploading my{' '}
            <CustomLink active href='/projects'>
              portfolio.
            </CustomLink>
          </Text>
          <Text mb={6} fontSize='17px'>
            Not sure about how i feel about a logo for now though, an emoji
            would suffice for now.
          </Text>
          <CustomButton
            as='a'
            href='https://www.linkedin.com/in/abiola-boluwatife-2569a915b/details/skills/'
            mb={10}
            target='__blank'
          >
            <Text as='span' fontSize='xl'>
              🤹🏽
            </Text>

            <Text as='span' mr={2}>
              Checkout My Special Skills
            </Text>
          </CustomButton>
        </Box>

        {/* Illustration */}
        <Box
          w={{ base: '100%', md: '55%' }}
          my={{ base: 10, md: 'auto' }}
          d={{ base: 'flex', md: 'flex' }}
        >
          {/* <HomeIllustration m='auto' height='350' /> */}

          <Box
            className='badge-base LI-profile-badge'
            data-locale='en_US'
            data-size='large'
            data-theme='dark'
            data-type='HORIZONTAL'
            data-vanity='abiola-boluwatife-2569a915b'
            data-version='v1'
            m='auto'
          >
            <a
              class='badge-base__link LI-simple-link'
              href='https://ng.linkedin.com/in/abiola-boluwatife-2569a915b?trk=profile-badge'
            ></a>
          </Box>
        </Box>
      </Flex>
    </chakra.header>
  );
};

export default Header;
