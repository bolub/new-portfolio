import {
  ChakraProvider,
  cookieStorageManager,
  localStorageManager,
} from "@chakra-ui/react";
import { GetServerSidePropsContext } from "next";
import { ReactNode } from "react-markdown";

export function Chakra({
  cookies,
  children,
}: {
  cookies: any;
  children: ReactNode;
}) {
  const colorModeManager =
    typeof cookies === "string"
      ? // @ts-ignore
        cookieStorageManager(cookies)
      : localStorageManager;

  return (
    <ChakraProvider colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  );
}

export function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: {
      cookies: context.req.headers.cookie ?? "",
    },
  };
}
