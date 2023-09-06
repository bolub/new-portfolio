import '../styles/globals.css';
import '@fontsource/outfit/400.css';
import '@fontsource/outfit/500.css';
import '@fontsource/outfit/600.css';
import '@fontsource/outfit/700.css';
import '@fontsource/outfit/800.css';
import '@fontsource/outfit/900.css';
import '@fontsource/nunito/400.css';
import '@fontsource/nunito/500.css';
import '@fontsource/nunito/600.css';
import '@fontsource/nunito/700.css';
import '@fontsource/nunito/800.css';
import '@fontsource/nunito/900.css';
import '@fontsource/prompt/400.css';
import '@fontsource/prompt/500.css';
import '@fontsource/prompt/600.css';
import '@fontsource/prompt/700.css';
import '@fontsource/prompt/800.css';
import '@fontsource/prompt/900.css';

// react
import { useState, useEffect } from 'react';

// chakra
import { ChakraProvider } from '@chakra-ui/react';

// chakra custom theme from theme folder
import { customTheme } from '../chakra';
import Head from 'next/head';

// recoil
import { RecoilRoot } from 'recoil';

// progress bar
import NextNprogress from 'nextjs-progressbar';

// components
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import { Chakra } from '../chakra/Chakra';

import './../components/carousel/embla.css';
import Script from 'next/script';
import Toolbar from '../components/Layout/Toolbar';
import { trpc } from '../utils/trpc';

function MyApp({ Component, pageProps }: any) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <RecoilRoot>
      <Script
        src='https://platform.linkedin.com/badges/js/profile.js'
        strategy='lazyOnload'
      />
      <Chakra cookies={pageProps.cookies}>
        <ChakraProvider theme={customTheme}>
          <Head>
            <title>Boluwatife Abiola</title>
            {/* <link rel="icon" href="/favicon.ico" /> */}
          </Head>

          {show && (
            <>
              <NextNprogress
                color='linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)'
                startPosition={0.3}
                stopDelayMs={200}
                height={4}
                showOnShallow={true}
                // showSpinner={false}
              />

              <Navbar />

              <Component {...pageProps} />

              <Footer />

              <Toolbar />
            </>
          )}
        </ChakraProvider>
      </Chakra>
    </RecoilRoot>
  );
}

export default trpc.withTRPC(MyApp);
