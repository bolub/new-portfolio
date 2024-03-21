import { ButtonProps, chakra } from "@chakra-ui/react";

type LinkLookAlikeProps = {} & ButtonProps;

export const LinkLookAlike = ({ children }: LinkLookAlikeProps) => {
  return (
    <chakra.button
      borderBottom="1.3px solid"
      borderBottomColor="gray.300"
      _hover={{
        textDecoration: "none",
        backgroundColor: "brand.50",
        color: "brand.500",
        borderBottomColor: "brand.500",
      }}
      _focusVisible={{
        boxShadow: "none",
      }}
    >
      {children}
    </chakra.button>
  );
};
