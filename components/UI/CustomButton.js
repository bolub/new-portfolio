// chakra
import { Button } from "@chakra-ui/react";

const CustomButton = (props) => {
  return (
    <Button
      {...props}
      borderBottom="1.8px solid #cb1a41"
      color="brand.500"
      bg="none"
      borderRadius="none"
      _hover={{
        textDecoration: "none",
        backgroundColor: "#ffe4ed",
      }}
    >
      {props.children}
    </Button>
  );
};

export default CustomButton;
