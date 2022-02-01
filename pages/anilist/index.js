import React from 'react';

// chakra
import { Box, Flex, chakra, Text, HStack } from '@chakra-ui/react';

// utils
import { generalPaddingX } from '../../utils/chakra';

// axios
import axios from 'axios';

// Icons
import { HiOutlineEye, HiPlus } from 'react-icons/hi';

// components
import CustomSeo from '../../components/Layout/Seo';
import EmblaCarousel from '../../components/carousel';

const AniList = ({ data }) => {
  const testData = [
    {
      title: 'Naruto Shippuden',
      stoppedAt: '10',
      totalEpisodes: '100',
      imageLink:
        'https://otakukart.com/wp-content/uploads/2021/02/naruto-team-7-cosplay-1224914-1280x0-2.jpeg',
    },
    {
      title: 'Naruto Shippuden',
      stoppedAt: '10',
      totalEpisodes: '100',
      imageLink:
        'https://otakukart.com/wp-content/uploads/2021/02/naruto-team-7-cosplay-1224914-1280x0-2.jpeg',
    },
    {
      title: 'Naruto Shippuden',
      stoppedAt: '10',
      totalEpisodes: '100',
      imageLink:
        'https://otakukart.com/wp-content/uploads/2021/02/naruto-team-7-cosplay-1224914-1280x0-2.jpeg',
    },
  ];

  return (
    <>
      <CustomSeo
        title='Built with'
        description='Tools and Technologies this website was built with'
      />

      {/* <chakra.header alignItems='center' d='flex' py={{ base: '10', md: 10 }}>
        <Flex
          w='100%'
          flexDir={{ base: 'column', md: 'row' }}
          px={generalPaddingX}
        >
          <Box mb={{ base: 0, md: 0 }} w={{ base: '100%' }} my='auto'>
            <chakra.h1
              color='brand.500'
              fontWeight={700}
              fontSize={{ base: '3xl', md: '4xl' }}
            >
              Hello from anilist
            </chakra.h1>
          </Box>
        </Flex>
      </chakra.header> */}

      <chakra.main minH={{ base: '100%', md: '80vh' }} px={generalPaddingX}>
        <Flex fontSize='14px'>
          <HStack mt={8} mb={3}>
            <Text>
              <HiOutlineEye size='20px' />
            </Text>

            <Text fontWeight='bold'>Watching({testData?.length})</Text>
          </HStack>

          <HStack ml='auto' mt={8} mb={3}>
            <Text curosr='pointer'>
              <HiPlus size='20px' />
            </Text>

            <Text curosr='pointer' fontWeight='bold'>
              Add to List
            </Text>
          </HStack>
        </Flex>

        <EmblaCarousel data={testData} />
      </chakra.main>
    </>
  );
};

export default AniList;

export async function getStaticProps(context) {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/built-widths`
    );

    return {
      props: {
        data: response.data,
      }, // will be passed to the page component as props
      revalidate: 1,
    };
  } catch (error) {
    // console.log(error);
    return {
      props: {
        data: [],
        status: 'error',
      }, // will be passed to the page component as props
      revalidate: 1,
    };
  }
}
