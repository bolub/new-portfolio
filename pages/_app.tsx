import "@fontsource/outfit/400.css";
import "@fontsource/outfit/500.css";
import "@fontsource/outfit/600.css";
import "@fontsource/outfit/700.css";
import "@fontsource/outfit/800.css";
import "@fontsource/outfit/900.css";
import "@fontsource/nunito/400.css";
import "@fontsource/nunito/500.css";
import "@fontsource/nunito/600.css";
import "@fontsource/nunito/700.css";
import "@fontsource/nunito/800.css";
import "@fontsource/nunito/900.css";
import "@fontsource/prompt/400.css";
import "@fontsource/prompt/500.css";
import "@fontsource/prompt/600.css";
import "@fontsource/prompt/700.css";
import "@fontsource/prompt/800.css";
import "@fontsource/prompt/900.css";

import { useState, useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { customTheme } from "../chakra";
import { RecoilRoot } from "recoil";
import NextNprogress from "nextjs-progressbar";

import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import { Chakra } from "../chakra/Chakra";

import Script from "next/script";
import Toolbar from "../components/Layout/Toolbar";
import { trpc } from "../utils/trpc";

import { register } from "swiper/element/bundle";
import { DefaultSeo } from "next-seo";
import { defaultSeoConfig } from "../components/Layout/Seo";
register();

function MyApp({ Component, pageProps }: any) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <RecoilRoot>
      <Script
        src="https://platform.linkedin.com/badges/js/profile.js"
        strategy="lazyOnload"
      />
      <Chakra cookies={pageProps.cookies}>
        <ChakraProvider theme={customTheme}>
          <DefaultSeo
            title={defaultSeoConfig.title}
            description={defaultSeoConfig.description}
            openGraph={{
              type: "website",
              locale: "en_IE",
              url: "https://www.boluabiola.com",
            }}
            twitter={defaultSeoConfig.twitter}
          />
          {show && (
            <>
              <NextNprogress
                color="linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)"
                startPosition={0.3}
                stopDelayMs={200}
                height={4}
                showOnShallow={true}
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
