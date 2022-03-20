// chakra
import { chakra } from '@chakra-ui/react';

// componentss
import CustomSeo from '../components/Layout/Seo';
import Header from '../components/homePage/Header';

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
