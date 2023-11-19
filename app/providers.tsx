"use client";

import { customTheme } from "@/theme/theme";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { Outfit } from "next/font/google";

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
      <CacheProvider>
        <ChakraProvider theme={customTheme}>{children}</ChakraProvider>
      </CacheProvider>
    </>
  );
}
