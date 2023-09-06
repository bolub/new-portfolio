// chakra
import { Box, Flex, chakra, Text, HStack } from '@chakra-ui/react';

// utils
import { generalPaddingX, maxi } from '../../../utils/chakra';

// markdown
import ReactMarkdown from 'react-markdown';

import rehypeRaw from 'rehype-raw';

// icons
import { HiChevronLeft } from 'react-icons/hi';

// dayjs
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import CustomLink from '../../../components/UI/CustomLink';
import CustomSeo from '../../../components/Layout/Seo';
import Share from '../../../components/blog/Share';
import Comments from '../../../components/blog/Comments';
import Image from 'next/image';
import { trpc } from '../../../utils/trpc';
import prisma from '../../../utils/db';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { trpcHelpers } from '../../../server/routers/_app';
dayjs.extend(advancedFormat);

const Blog = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { id } = props;

  const { data: blogData, refetch: refetchPostData } = trpc.post.view.useQuery(
    {
      id,
    },
    {
      enabled: !!id,
    }
  );

  return (
    <>
      <CustomSeo
        title={blogData?.title || ''}
        description={blogData?.summary || ''}
        imageUrl={blogData?.image_url || ''}
      />

      <chakra.header d='flex' pt={{ base: '10' }} w='100%'>
        {/* @ts-ignore */}
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
          <chakra.div
            display={{ base: 'none', md: 'flex' }}
            pos='absolute'
            top={0}
          >
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
              {blogData?.title}
            </chakra.h1>

            <Text mt={2} fontWeight={600}>
              Bolu Abiola
            </Text>
            <Text>{dayjs(blogData?.createdAt).format('Do MMM YYYY')}</Text>

            <Box mt={5} w='100%' h='420px' pos='relative'>
              <Image
                alt={blogData?.title || ''}
                layout='fill'
                src={`${
                  blogData?.image_url ||
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
          {/* content */}
          <chakra.p lineHeight={1.8} mb={1} fontSize='md'>
            <ReactMarkdown
              rehypePlugins={[rehypeRaw]}
              // @ts-ignore
              children={blogData ? blogData?.content : <></>}
            />
          </chakra.p>

          {/* share */}
          <Share />

          {/* comments */}
          <Comments blogData={blogData} refetchPostData={refetchPostData} />
        </Box>
      </chakra.main>
    </>
  );
};

export default Blog;

export const getStaticPaths = async () => {
  const posts = await prisma.post.findMany({
    select: {
      id: true,
    },
  });

  return {
    paths: posts.map((post) => ({
      params: {
        id: post.id,
      },
    })),
    fallback: 'blocking',
  };
};

export async function getStaticProps(
  context: GetStaticPropsContext<{ id: string }>
) {
  const id = context.params?.id as string;

  await trpcHelpers.post.view.prefetch({ id });
  return {
    props: {
      trpcState: trpcHelpers.dehydrate(),
      id,
    },
    revalidate: 1,
  };
}
