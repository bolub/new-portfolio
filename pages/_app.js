import "../styles/globals.css";

// react
import { useState, useEffect } from "react";

// chakra
import { ChakraProvider } from "@chakra-ui/react";

// chakra custom theme from theme folder
import { customTheme } from "../chakra";
import Head from "next/head";

// recoil
import { RecoilRoot } from "recoil";

// components
import Navbar from "../components/Layout/Navbar";

function MyApp({ Component, pageProps }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <RecoilRoot>
      <ChakraProvider theme={customTheme}>
        <Head>
          <title>Bolub</title>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Jost:wght@300;400;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          {/* <link rel="icon" href="/favicon.ico" /> */}
        </Head>

        {show && (
          <>
            <Navbar />

            <Component {...pageProps} />
          </>
        )}
      </ChakraProvider>
    </RecoilRoot>
  );
}

export default MyApp;
