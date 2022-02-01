// Nextjs
import React, { useState } from 'react';

// chakra
import {
  Flex,
  chakra,
  Badge,
  SimpleGrid,
  Tag,
  Wrap,
  Center,
  Spinner,
} from '@chakra-ui/react';

// utils
import { generalPaddingX } from '../utils/chakra';

// axios
import axios from 'axios';
import SingleResource from '../components/resources/SingleResource';

// hooks
import useLayoutSwitch from '../hooks/useLayoutSwitch';
import CustomSeo from '../components/Layout/Seo';

// components
// import CustomLink from "../components/UI/CustomLink";
import CustomSearch from '../components/UI/CustomSearch';

export default function Resources({ data, allTags }) {
  const { layout, LayoutComponent } = useLayoutSwitch();

  // loading state for search
  const [loading, setLoading] = useState(false);

  // blog data
  const [resourceData, setResourceData] = useState(data);

  // search text
  const [searchText, setSearchText] = useState(null);

  // tag to search for
  const [tagName, setTagName] = useState(null);

  // ======== data fetching/manipulation starts here  ========
  // search all posts
  const searchAllPosts = async (value) => {
    setLoading(true);
    const dataToUse = value || searchText;
    // return if searchText dose not exist
    // if (!searchText) return;

    // check for length of searchText
    // if (searchText.length <= 2) return;

    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/resources?title_contains=${dataToUse}`
      );
      setLoading(false);
      setResourceData(response.data);
    } catch (error) {
      setLoading(false);
    }
  };

  //search blog via tag
  const searchTags = async (data) => {
    setLoading(true);
    const dataToUse = data || tagName;

    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/resources?tags.name_contains=${dataToUse}`
      );
      setLoading(false);
      setResourceData(response.data);
    } catch (error) {
      setLoading(false);
    }
  };
  //========  data fetching/manipulation ends here ========

  const searchHandler = (e) => {
    setSearchText(e.target.value);
    searchAllPosts();
  };

  return (
    <>
      <CustomSeo title='Resources' />

      <chakra.header py={{ base: '10', md: 10 }}>
        <Flex w='100%' px={generalPaddingX} flexDir='column'>
          <Flex mb={5} flexDir={{ base: 'column', md: 'row' }}>
            <chakra.h1 fontWeight={700} fontSize={{ base: '3xl', md: '4xl' }}>
              Resources
              <Badge ml={2} colorScheme='brand'>
                {data?.length}
              </Badge>
            </chakra.h1>

            {LayoutComponent}
          </Flex>

          {/* Search Component */}
          <CustomSearch value={searchText} onChange={searchHandler} />
          {/* Tags */}
          <Wrap d={{ base: 'none', md: 'flex' }} mt={5}>
            {allTags?.map((tag) => {
              const tagChosen = tagName === tag?.name;

              return (
                <Tag
                  key={tag?.id}
                  cursor='pointer'
                  colorScheme='brand'
                  variant={!tagChosen ? 'subtle' : 'solid'}
                  onClick={() => {
                    if (tagChosen) {
                      setTagName('');
                      searchAllPosts(' ');
                      return;
                    }

                    setTagName(tag?.name);
                    searchTags(tag?.name);
                  }}
                  // bg="brand.50"
                  borderRadius='full'
                  // size="sm"
                >
                  {tag?.name}
                </Tag>
              );
            })}
          </Wrap>
        </Flex>
      </chakra.header>

      <chakra.main minH={{ base: '100%', md: '60vh' }} px={generalPaddingX}>
        {loading && (
          <Center>
            <Spinner colorScheme='brand' />
          </Center>
        )}

        {!loading && (
          <SimpleGrid
            spacing={4}
            columns={
              layout === 'list' ? { base: 1 } : { base: 1, md: 2, lg: 3 }
            }
          >
            {resourceData?.map((rd) => {
              return <SingleResource key={rd?.id} data={rd} layout={layout} />;
            })}
          </SimpleGrid>
        )}
      </chakra.main>
    </>
  );
}

export async function getStaticProps(context) {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/resources`
    );

    const allTagsResponse = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/tags`
    );
    // console.log(response.data);
    return {
      props: {
        data: response.data,
        allTags: allTagsResponse.data,
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
