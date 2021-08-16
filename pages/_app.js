import '../styles/globals.css';

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

function MyApp({ Component, pageProps }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <RecoilRoot>
      <Chakra cookies={pageProps.cookies}>
        <ChakraProvider theme={customTheme}>
          <Head>
            <title>Boluwatife Abiola</title>
            <link rel='preconnect' href='https://fonts.gstatic.com' />
            <link
              href='https://fonts.googleapis.com/css2?family=Jost:wght@300;400;600;700;800;900&display=swap'
              rel='stylesheet'
            />
            <link
              href='https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700;800;900&display=swap'
              rel='stylesheet'
            />
            <link
              href='https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap'
              rel='stylesheet'
            />

            <link
              href='https://fonts.googleapis.com/css2?family=Prompt:wght@300;400;500;600;700&display=swap'
              rel='stylesheet'
            />
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
                showSpinner={false}
              />

              <Navbar />

              <Component {...pageProps} />

              <Footer />
            </>
          )}
        </ChakraProvider>
      </Chakra>
    </RecoilRoot>
  );
}

export default MyApp;
