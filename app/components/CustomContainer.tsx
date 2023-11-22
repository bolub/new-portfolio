import { ChakraProps, Container } from "@chakra-ui/react";
import { ReactNode } from "react";

export const CustomContainer = ({
  children,
  ...props
}: { children: ReactNode } & ChakraProps) => {
  return (
    <Container maxW="1250px" {...props}>
      {children}
    </Container>
  );
};
