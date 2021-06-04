// chakra
import { Button } from "@chakra-ui/react";

// recoil
import { useRecoilValue } from "recoil";
import { fontState } from "../../atoms/fonts";

const CustomButton = (props) => {
  const fontType = useRecoilValue(fontState);
  // console.log(fontType.heading)
  return (
    <Button
      {...props}
      borderBottom={props.borderBottom || "1.8px solid #cb1a41"}
      color={props.color || "red.500"}
      bg="none"
      borderRadius="none"
      _hover={{
        textDecoration: "none",
        backgroundColor: "#ffe4ed",
      }}
      fontFamily={fontType.heading}
    >
      {props.children}
    </Button>
  );
};

export default CustomButton;
