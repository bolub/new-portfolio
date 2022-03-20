// chakra
import { Box, Flex, chakra, Text } from '@chakra-ui/react';

// utils
import { generalPaddingX } from '../utils/chakra';

// componentss
import HomeIllustration from './../svg/HomeIllustration';
import CustomLink from '../components/UI/CustomLink';
import CustomSeo from '../components/Layout/Seo';
import Header from '../components/homePage/Header';
import About from '../components/homePage/About';

export default function Home() {
  return (
    <>
      <CustomSeo title='Home' />

      <chakra.main>
        <Header />
      </chakra.main>
    </>
  );
}
