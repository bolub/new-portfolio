// nextjs link
import Link from "next/link";
import { useRouter } from "next/router";

// chakra
import { chakra } from "@chakra-ui/react";

const CustomLink = ({ href, children, color, active }) => {
  // next router initialization
  const { pathname } = useRouter();

  // looks obvious enough
  const isActive = active || pathname === href;

  return (
    <Link href={href} passHref>
      <chakra.a
        borderBottom={isActive ? "1.3px solid #cb1a41" : "1.3px solid #f2f2f2"}
        color={isActive && "#cb1a41"}
        fontWeight={isActive && "600"}
        d="inline"
        cursor="pointer"
        _hover={{
          backgroundColor: "#ffe4ed",
          borderBottomColor: "#cb1a41",
        }}
      >
        {children}
      </chakra.a>
    </Link>
  );
};

export default CustomLink;
