// chakra
import { Button } from '@chakra-ui/react';

// recoil
import { useRecoilValue } from 'recoil';
import { fontState } from '../../atoms/fonts';

const CustomButton = (props) => {
  const fontType = useRecoilValue(fontState);
  return (
    <Button
      {...props}
      // borderBottom={props.borderBottom || '1.8px solid'}
      // borderColor='brand.500'
      colorScheme='brand'
      // color={props.color || 'brand.500'}
      // bg='none'
      // _hover={{
      //   textDecoration: 'none',
      //   backgroundColor: 'brand.50',
      //   color: 'brand.500',
      //   borderBottomColor: 'brand.500',
      // }}
      fontFamily={fontType.heading}
    >
      {props.children}
    </Button>
  );
};

export default CustomButton;
