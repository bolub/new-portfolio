// nextjs link
import Link from "next/link";
import { useRouter } from "next/router";

// chakra
import { chakra } from "@chakra-ui/react";

// recoil
import { useRecoilValue } from "recoil";
import { fontState } from "../../atoms/fonts";

const CustomLink = ({ href, children, active, fontSize }) => {
  const fontType = useRecoilValue(fontState);

  // next router initialization
  const { pathname } = useRouter();

  // looks obvious enough
  let isActive = active || pathname === href;
  return (
    <Link href={href} passHref>
      <chakra.a
        fontFamily={fontType.heading}
        borderBottom={isActive ? "1.3px solid #cb1a41" : "1.3px solid #c4c4c4"}
        color={isActive && "#cb1a41"}
        fontWeight={isActive && "600"}
        fontSize={fontSize}
        d="inline-flex"
        cursor="pointer"
        _hover={{
          backgroundColor: "#ffe4ed",
          borderBottomColor: "#cb1a41",
          color: "#cb1a41",
        }}
      >
        {children}
      </chakra.a>
    </Link>
  );
};

export default CustomLink;
