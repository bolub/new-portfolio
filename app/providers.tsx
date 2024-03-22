"use client";

import { customTheme } from "@/theme/theme";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { Outfit } from "next/font/google";
import { MetricalpReactProvider } from "@metricalp/react";
import { ContentfulLivePreviewProvider } from "@contentful/live-preview/react";

const outfit = Outfit({ subsets: ["latin"] });

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-outfit: ${outfit.style.fontFamily};
          }
        `}
      </style>

      <ContentfulLivePreviewProvider locale="en-US">
        <MetricalpReactProvider
          tid={process.env.NEXT_PUBLIC_METRICALP_TID as string}
        >
          <CacheProvider>
            <ChakraProvider theme={customTheme}>{children}</ChakraProvider>
          </CacheProvider>
        </MetricalpReactProvider>
      </ContentfulLivePreviewProvider>
    </>
  );
}
