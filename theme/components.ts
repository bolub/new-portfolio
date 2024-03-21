export const LinkStyles = {
  baseStyle: {
    borderBottom: "1.3px solid",
    borderBottomColor: "gray.300",
    _hover: {
      textDecoration: "none",
      backgroundColor: "brand.50",
      color: "brand.500",
      borderBottomColor: "brand.500",
    },
    _focusVisible: {
      boxShadow: "none",
    },
  },
};

const Input = {
  baseStyle: {
    borderRadius: "none",
    _focus: {
      borderColor: "brand.500",
      bg: "gray.50",
    },
    _hover: {
      bg: "gray.100",
    },
  },
};

const Button = {
  baseStyle: {
    fontWeight: "600",
  },
};

export const components = {
  Link: LinkStyles,
  Button,
  Input,
};
