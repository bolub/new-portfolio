import React from 'react';

// chakra
import { Box, Flex, chakra, Text } from '@chakra-ui/react';

// components
import BlogIllustration from '../../svg/BlogIlustration';
import CustomButton from '../../components/UI/CustomButton';
import { generalPaddingX } from '../../utils/chakra';

const PageHeader = () => {
  return (
    <chakra.header d='flex' py={{ base: '10' }}>
      <Flex
        w='100%'
        flexDir={{ base: 'column' }}
        justifyContent='center'
        textAlign='center'
        px={generalPaddingX}
      >
        <Box mb={{ base: 0, md: 0 }} w={{ md: '60%' }} m='auto'>
          <chakra.h1
            fontWeight={700}
            // color="brand.500"
            fontSize={{ base: '3xl', md: '4xl' }}
          >
            My Blog...
          </chakra.h1>

          <Text mb={5} mt={4} fontSize='17px'>
            Here, gonna be talking a bit about stuff that interests me I guess,
            but I'm sure I'll probably get tired and go nuts
          </Text>

          <CustomButton
            h='50px'
            size='md'
            data-cy='start-reading'
            as='a'
            href='#posts'
            mb={20}
            mt={4}
          >
            <Text as='span' mr={2}>
              Start Reading
            </Text>

            <Text as='span' fontSize='xl'>
              🏁
            </Text>
          </CustomButton>

          <BlogIllustration m='auto' />
        </Box>
      </Flex>
    </chakra.header>
  );
};

export default PageHeader;
