const Link = {
  baseStyle: {
    fontWeight: "600",
    borderBottom: "1.3px solid #cb1a41",
    textDecoration: "none",
    _hover: {
      textDecoration: "none",
      backgroundColor: "#ffe4ed",
    },
    color: "#cb1a41",
  },
};

const Button = {
  baseStyle: {
    fontWeight: "600",
    borderRadius: "sm",
    boxShadow: "none",
    _active: {
      boxShadow: "none",
    },
    // fontFamily: "Space Grotesk",
  },
};

export const components = {
  Link,
  Button,
};
