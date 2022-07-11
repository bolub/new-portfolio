// chakra
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorMode,
} from '@chakra-ui/react';
import Link from 'next/link';

const CustomMenu = ({ title, items }) => {
  // colorMode
  const { colorMode } = useColorMode();

  return (
    <Menu autoSelect={false}>
      <MenuButton
        px={0}
        pb='1px'
        m={0}
        boxShadow='none'
        borderBottom='1.3px solid #c4c4c4'
        color={colorMode === 'light' ? 'gray.900' : 'white'}
        bg='none'
        borderRadius='none'
        _hover={{
          textDecoration: 'none',
          backgroundColor: 'brand.50',
          color: 'brand.500',
          borderBottomColor: 'brand.500',
        }}
      >
        {title}
      </MenuButton>
      <MenuList>
        {items.map((item) => {
          if (item.href) {
            return (
              <Link href={item.href} passHref>
                <MenuItem
                  as='a'
                  onClick={() => {
                    if (item.action) {
                      item.action();
                    }
                  }}
                  key={item.name}
                  fontSize='lg'
                >
                  {item?.name}
                </MenuItem>
              </Link>
            );
          } else {
            return (
              <MenuItem
                onClick={() => {
                  if (item.action) {
                    item.action();
                  }
                }}
                key={item.name}
                fontSize='lg'
              >
                {item.href ? (
                  <Link href={item.href}>{item?.name}</Link>
                ) : (
                  <>{item?.name}</>
                )}
              </MenuItem>
            );
          }
        })}
      </MenuList>
    </Menu>
  );
};

export default CustomMenu;
