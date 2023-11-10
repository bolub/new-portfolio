import { Button, ButtonProps } from "@chakra-ui/react";

import { useRecoilValue } from "recoil";
import { fontState } from "../../atoms/fonts";

const CustomButton = (props: ButtonProps) => {
  const fontType = useRecoilValue(fontState);
  return (
    <Button {...props} colorScheme="brand" fontFamily={fontType.heading}>
      {props.children}
    </Button>
  );
};

export default CustomButton;
