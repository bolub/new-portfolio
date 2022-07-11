// chakra
import { Box, Flex, chakra, Text, HStack } from '@chakra-ui/react';

// utils
import { generalPaddingX, maxi } from '../../../utils/chakra';

// DATA FETCHING
import axios from 'axios';

// markdown
import ReactMarkdown from 'react-markdown';

import rehypeRaw from 'rehype-raw';

// icons
import { HiChevronLeft } from 'react-icons/hi';

// dayjs
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import CustomLink from '../../../components/UI/CustomLink';
// import AudioBlog from "../../../components/blog/AudioBlog";
import CustomSeo from '../../../components/Layout/Seo';
import Share from '../../../components/blog/Share';
import Comments from '../../../components/blog/Comments';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
dayjs.extend(advancedFormat);

const Blog = ({ data }) => {
  const { params } = useRouter();

  // blog data
  const [blogData, setBlogData] = useState(data);

  const refetchPostData = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/blog-posts/${params.id}`
      );

      setBlogData(response.data);
    } catch (error) {}
  };

  return (
    <>
      <CustomSeo
        title={blogData?.Title}
        description={blogData?.summary}
        imageUrl={blogData?.cover_image?.name}
      />

      <chakra.header d='flex' pt={{ base: '10' }} w='100%'>
        {/* back button */}

        <Flex
          w='100%'
          flexDir={{ base: 'column' }}
          justifyContent='center'
          textAlign='center'
          px={generalPaddingX}
          maxW={maxi}
          mx='auto'
          pos='relative'
        >
          <chakra.div d={{ base: 'none', md: 'flex' }} pos='absolute' top={0}>
            <CustomLink href='/blog'>
              <Text my='auto' mr={1} fontSize='md'>
                <HiChevronLeft />
              </Text>

              <Text my='auto'>Back</Text>
            </CustomLink>
          </chakra.div>

          <Box
            mb={{ base: 0, md: 0 }}
            d='flex'
            flexDir='column'
            w={{ base: '100%', md: '60%' }}
            m='auto'
          >
            <HStack mb={1} mx='auto'>
              <Text color='brand.500' fontSize='14px' fontWeight={600}>
                💻 Programming
              </Text>
            </HStack>

            <chakra.h1
              fontWeight={700}
              // color="brand.500"
              fontSize={{ base: '3xl', md: '4xl' }}
            >
              {blogData?.Title}
            </chakra.h1>

            <Text mt={2} fontWeight={600}>
              Bolu Abiola
            </Text>
            <Text>{dayjs(blogData?.published_at).format('Do MMM YYYY')}</Text>

            <Box mt={5} w='100%' h='420px' pos='relative'>
              <Image
                layout='fill'
                src={`${
                  blogData?.cover_image?.name ||
                  'https://res.cloudinary.com/bolub/image/upload/v1623525073/Group_1_1.png'
                }`}
              />
            </Box>
          </Box>
        </Flex>
      </chakra.header>

      <chakra.main
        minH={{ base: '100%', md: '75vh' }}
        d='flex'
        mt={5}
        pb={20}
        px={generalPaddingX}
        maxW={maxi}
        mx='auto'
        w='100%'
      >
        <Box w={{ base: '100%', md: '60%' }} m='auto'>
          {/* Talk about the blog */}
          {/* <AudioBlog content={blogData?.content} /> */}

          {/* content */}
          <chakra.p lineHeight={1.8} mb={1} fontSize='md'>
            <ReactMarkdown
              rehypePlugins={[rehypeRaw]}
              children={blogData?.content}
            />
          </chakra.p>

          {/* share */}
          <Share />

          {/* comments */}
          <Comments blogData={data} refetchPostData={refetchPostData} />
        </Box>
      </chakra.main>
    </>
  );
};

export default Blog;

export const getStaticPaths = async ({ params }) => {
  // Call an external API endpoint to get posts
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/blog-posts`
  );

  const posts = response.data;

  const paths = posts.map((post) => ({
    params: { id: JSON.stringify(post.id) },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/blog-posts/${params?.id}`
    );

    return {
      props: {
        data: response.data,
        status: 'success',
      },
      revalidate: 1,
    };
  } catch (error) {
    return {
      props: {
        status: 'error',
      },
      revalidate: 1,
    };
  }
};
