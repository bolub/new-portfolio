const Link = {
  baseStyle: {
    fontWeight: '600',
    borderBottom: '1.3px solid #cb1a41',
    textDecoration: 'none',
    _hover: {
      textDecoration: 'none',
      backgroundColor: '#ffe4ed',
    },
    color: '#cb1a41',
  },
};

const Input = {
  baseStyle: {
    borderRadius: 'none',
    _focus: {
      borderColor: 'brand.500',
      bg: 'gray.50',
    },
    _hover: {
      bg: 'gray.100',
    },
  },
};

const Button = {
  baseStyle: {
    fontWeight: '600',
    // borderRadius: 'sm',
    boxShadow: 'none',
    _active: {
      boxShadow: 'none',
    },
  },
};

export const components = {
  Link,
  Button,
  Input,
};
