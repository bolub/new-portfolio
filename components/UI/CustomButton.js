// chakra
import { Button } from "@chakra-ui/react";

// recoil
import { useRecoilValue } from "recoil";
import { fontState } from "../../atoms/fonts";

const CustomButton = (props) => {
  const fontType = useRecoilValue(fontState);
  return (
    <Button {...props} colorScheme="brand" fontFamily={fontType.heading}>
      {props.children}
    </Button>
  );
};

export default CustomButton;
