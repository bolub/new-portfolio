"use client";

import { customTheme } from "@/theme/theme";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { Outfit } from "next/font/google";
import { MetricalpReactProvider } from "@metricalp/react";

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
      <MetricalpReactProvider tid="YOUR_TID">
        <CacheProvider>
          <ChakraProvider theme={customTheme}>{children}</ChakraProvider>
        </CacheProvider>
      </MetricalpReactProvider>
    </>
  );
}
